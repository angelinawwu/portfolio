'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Eraser, PaintBrush } from '@phosphor-icons/react';
import { useTheme, type Theme } from './ThemeProvider';

type Tool = 'brush' | 'eraser';

interface PixelRecord {
  col: number;
  row: number;
  theme: Theme;
}

const PIXEL_DESKTOP = 28;
const PIXEL_MOBILE = 22;
const SIDEBAR_WIDTH_LG = 288;
const LG_BREAKPOINT = 1024;
const FOOTER_VH_FRACTION = 1 / 3;
const POLL_INTERVAL_MS = 5000;

const THEME_HEX: Record<Theme, string> = {
  default: '#F3EDF5',
  green: '#D4EC21',
  blue: '#7ABDF0',
  magenta: '#EC6CF1',
  orange: '#E3743D',
};

function keyOf(col: number, row: number): string {
  return `${col},${row}`;
}

function computeLayout(viewportWidth: number, viewportHeight: number) {
  const isDesktop = viewportWidth >= LG_BREAKPOINT;
  const pixel = isDesktop ? PIXEL_DESKTOP : PIXEL_MOBILE;
  const availableWidth = isDesktop ? viewportWidth - SIDEBAR_WIDTH_LG : viewportWidth;
  const availableHeight = viewportHeight * FOOTER_VH_FRACTION;

  const cols = Math.max(1, Math.floor(availableWidth / pixel));
  const rows = Math.max(1, Math.floor(availableHeight / pixel));

  // Center the grid on (0, 0): origin sits at the middle cell for every user.
  const colStart = -Math.floor(cols / 2);
  const rowStart = -Math.floor(rows / 2);

  return { pixel, cols, rows, colStart, rowStart };
}

export default function CommunityCanvas() {
  const { theme } = useTheme();
  const [tool, setTool] = useState<Tool>('brush');
  const [pixels, setPixels] = useState<Map<string, Theme>>(new Map());
  const [layout, setLayout] = useState(() => computeLayout(
    typeof window !== 'undefined' ? window.innerWidth : 1440,
    typeof window !== 'undefined' ? window.innerHeight : 900,
  ));
  const [mounted, setMounted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const paintedInDragRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    setMounted(true);
  }, []);

  // Recompute grid dimensions on resize (debounced).
  useEffect(() => {
    let timeout: number | null = null;
    const onResize = () => {
      if (timeout !== null) window.clearTimeout(timeout);
      timeout = window.setTimeout(() => {
        setLayout(computeLayout(window.innerWidth, window.innerHeight));
      }, 100);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      if (timeout !== null) window.clearTimeout(timeout);
    };
  }, []);

  // Poll the server for remote updates.
  useEffect(() => {
    let cancelled = false;

    const fetchPixels = async () => {
      try {
        const res = await fetch('/api/pixels', { cache: 'no-store' });
        if (!res.ok) return;
        const data: { pixels?: PixelRecord[] } = await res.json();
        if (cancelled || !data.pixels) return;
        const next = new Map<string, Theme>();
        for (const p of data.pixels) {
          next.set(keyOf(p.col, p.row), p.theme);
        }
        setPixels(next);
      } catch {
        // Silent — network blip; we'll try again on next poll.
      }
    };

    fetchPixels();
    const interval = window.setInterval(fetchPixels, POLL_INTERVAL_MS);
    return () => {
      cancelled = true;
      window.clearInterval(interval);
    };
  }, []);

  const paintCell = useCallback(
    async (col: number, row: number) => {
      const key = keyOf(col, row);
      const nextTheme: Theme | null = tool === 'brush' ? theme : null;

      setPixels((prev) => {
        const existing = prev.get(key);
        if (nextTheme === null && !existing) return prev;
        if (nextTheme !== null && existing === nextTheme) return prev;
        const next = new Map(prev);
        if (nextTheme === null) {
          next.delete(key);
        } else {
          next.set(key, nextTheme);
        }
        return next;
      });

      try {
        await fetch('/api/pixels', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ col, row, theme: nextTheme }),
        });
      } catch {
        // Optimistic update remains; the next poll will reconcile.
      }
    },
    [theme, tool],
  );

  // Build grid cells. Memoized so we don't rebuild on every pixel update.
  const cells = useMemo(() => {
    const { cols, rows, colStart, rowStart } = layout;
    const out: Array<{ key: string; col: number; row: number }> = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const col = colStart + c;
        const row = rowStart + r;
        out.push({ key: keyOf(col, row), col, row });
      }
    }
    return out;
  }, [layout]);

  // Cancel global drag state on pointer up anywhere.
  useEffect(() => {
    if (!isDragging) return;
    const stop = () => {
      setIsDragging(false);
      paintedInDragRef.current.clear();
    };
    window.addEventListener('pointerup', stop);
    window.addEventListener('pointercancel', stop);
    return () => {
      window.removeEventListener('pointerup', stop);
      window.removeEventListener('pointercancel', stop);
    };
  }, [isDragging]);

  const handleCellPointerDown = (col: number, row: number) => {
    setIsDragging(true);
    paintedInDragRef.current = new Set([keyOf(col, row)]);
    paintCell(col, row);
  };

  const handleCellPointerEnter = (col: number, row: number) => {
    if (!isDragging) return;
    const key = keyOf(col, row);
    if (paintedInDragRef.current.has(key)) return;
    paintedInDragRef.current.add(key);
    paintCell(col, row);
  };

  const { pixel, cols } = layout;

  return (
    <footer
      aria-label="Community pixel canvas"
      className="community-canvas fixed bottom-0 right-0 left-0 lg:left-72 z-0 overflow-hidden select-none"
      style={{ height: `${FOOTER_VH_FRACTION * 100}vh`, backgroundColor: 'var(--black)' }}
    >
      {/* Tool buttons — top-right corner. */}
      <div className="community-canvas-tools absolute top-3 right-3 z-10 flex items-center gap-2">
        <ToolButton
          label="Brush"
          active={tool === 'brush'}
          onClick={() => setTool('brush')}
          Icon={PaintBrush}
        />
        <ToolButton
          label="Eraser"
          active={tool === 'eraser'}
          onClick={() => setTool('eraser')}
          Icon={Eraser}
        />
      </div>

      {mounted && (
        <div
          className="community-canvas-grid"
          style={{
            gridTemplateColumns: `repeat(${cols}, ${pixel}px)`,
            gridAutoRows: `${pixel}px`,
          }}
          onPointerLeave={() => {
            if (isDragging) {
              setIsDragging(false);
              paintedInDragRef.current.clear();
            }
          }}
        >
          {cells.map(({ key, col, row }) => {
            const painted = pixels.get(key);
            return (
              <button
                key={key}
                type="button"
                aria-label={painted ? `Painted pixel at ${col}, ${row}` : `Empty pixel at ${col}, ${row}`}
                className="community-canvas-cell"
                style={{
                  // Use a CSS variable so the :hover rule can override without !important.
                  ['--cell-color' as string]: painted ? THEME_HEX[painted] : 'var(--black)',
                }}
                onPointerDown={(e) => {
                  e.preventDefault();
                  handleCellPointerDown(col, row);
                }}
                onPointerEnter={() => handleCellPointerEnter(col, row)}
              />
            );
          })}
        </div>
      )}
    </footer>
  );
}

interface ToolButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
  Icon: React.ComponentType<{ size?: number; weight?: 'regular' | 'bold' | 'fill' }>;
}

function ToolButton({ label, active, onClick, Icon }: ToolButtonProps) {
  return (
    <div className="community-canvas-tool-wrapper">
      <button
        type="button"
        onClick={onClick}
        aria-label={label}
        aria-pressed={active}
        className={`community-canvas-tool-button${active ? ' is-active' : ''}`}
      >
        <Icon size={16} weight="regular" />
      </button>
      <span role="tooltip" className="community-canvas-tooltip geist-mono-font">
        {label.toUpperCase()}
      </span>
    </div>
  );
}
