'use client';

import { useCallback, useEffect, useMemo, useRef, useState, type ComponentType } from 'react';
import { Eraser, PaintBrush } from '@phosphor-icons/react';
import { useTheme, type Theme } from './ThemeProvider';

type Tool = 'brush' | 'eraser';

interface PixelRecord {
  col: number;
  row: number;
  theme: Theme;
}

const TARGET_PIXEL_DESKTOP = 20;
const TARGET_PIXEL_MOBILE = 16;
const ROWS_DESKTOP = 16;
const ROWS_MOBILE = 18;
const SIDEBAR_WIDTH_LG = 288;
const LG_BREAKPOINT = 1024;
const POLL_INTERVAL_MS = 5000;
// Local writes win over polled server state for this long, so the next poll
// doesn't briefly wipe an optimistic paint while Sheets catches up.
const PENDING_WRITE_TTL_MS = 15000;

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

function computeLayout(viewportWidth: number) {
  const isDesktop = viewportWidth >= LG_BREAKPOINT;
  const targetPixel = isDesktop ? TARGET_PIXEL_DESKTOP : TARGET_PIXEL_MOBILE;
  const rows = isDesktop ? ROWS_DESKTOP : ROWS_MOBILE;
  const availableWidth = isDesktop ? viewportWidth - SIDEBAR_WIDTH_LG : viewportWidth;

  // Round to a whole number of cols so cells fit end-to-end with no half-cells.
  const cols = Math.max(1, Math.round(availableWidth / targetPixel));
  const cellSize = availableWidth / cols;
  const footerHeight = cellSize * rows;

  // Center the grid on (0, 0) so the origin is the middle cell for every user.
  const colStart = -Math.floor(cols / 2);
  const rowStart = -Math.floor(rows / 2);

  return { cellSize, cols, rows, colStart, rowStart, footerHeight };
}

export default function Footer() {
  const { theme } = useTheme();
  const [tool, setTool] = useState<Tool>('brush');
  const [pixels, setPixels] = useState<Map<string, Theme>>(new Map());
  // Stable SSR default; real viewport-dependent layout is computed after mount.
  const [layout, setLayout] = useState(() => computeLayout(1440));
  const [mounted, setMounted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const paintedInDragRef = useRef<Set<string>>(new Set());
  // Local writes that win over polled server state until PENDING_WRITE_TTL_MS expires.
  const pendingWritesRef = useRef<Map<string, { theme: Theme | null; expireAt: number }>>(
    new Map(),
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let timeout: number | null = null;
    const onResize = () => {
      if (timeout !== null) window.clearTimeout(timeout);
      timeout = window.setTimeout(() => {
        setLayout(computeLayout(window.innerWidth));
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
        // Overlay still-fresh local writes so stale polls can't clobber them.
        const now = Date.now();
        for (const [k, v] of pendingWritesRef.current) {
          if (v.expireAt <= now) {
            pendingWritesRef.current.delete(k);
            continue;
          }
          if (v.theme === null) {
            next.delete(k);
          } else {
            next.set(k, v.theme);
          }
        }
        setPixels(next);
      } catch {
        // Network blip — next poll will reconcile.
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
    (col: number, row: number) => {
      const key = keyOf(col, row);
      const nextTheme: Theme | null = tool === 'brush' ? theme : null;

      // Optimistic paint.
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

      pendingWritesRef.current.set(key, {
        theme: nextTheme,
        expireAt: Date.now() + PENDING_WRITE_TTL_MS,
      });

      // Fire-and-forget so drags stay snappy even if Sheets is slow.
      void fetch('/api/pixels', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ col, row, theme: nextTheme }),
        keepalive: true,
      }).then((res) => {
        if (res.ok) {
          // Refresh TTL so polls keep trusting the local value until Sheets catches up.
          const entry = pendingWritesRef.current.get(key);
          if (entry && entry.theme === nextTheme) {
            entry.expireAt = Date.now() + PENDING_WRITE_TTL_MS;
          }
        }
      }).catch(() => {});
    },
    [theme, tool],
  );

  // Memoized so we don't rebuild the grid on every pixel update.
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

  // Cancel drag state on pointer up anywhere.
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

  const { cellSize, cols, footerHeight } = layout;

  // Track the "fold" — where <main>'s bottom edge sits inside the footer's
  // local coordinate space. The blurred decoration grid masks its opaque
  // region to a band starting at the fold, so the blur is pinned to the
  // topmost visible slice of footer. Driven via a CSS variable so React
  // doesn't re-render on every scroll frame.
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let rafId = 0;

    const update = () => {
      rafId = 0;
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const maxScroll = docHeight - vh;
      const fh = footerHeight;

      const foldOffset = Math.max(0, Math.min(fh, maxScroll - scrollY));
      document.documentElement.style.setProperty('--canvas-fold', `${foldOffset}px`);

      // Fade blur + darken overlays out over the last 15% of the reveal.
      const foldRatio = fh > 0 ? foldOffset / fh : 0;
      const FADE_RANGE = 0.15;
      const overlayOpacity = Math.min(1, foldRatio / FADE_RANGE);
      document.documentElement.style.setProperty(
        '--canvas-overlay-opacity',
        String(overlayOpacity),
      );
    };

    const schedule = () => {
      if (rafId !== 0) return;
      rafId = window.requestAnimationFrame(update);
    };

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    update();

    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (rafId !== 0) window.cancelAnimationFrame(rafId);
    };
  }, [footerHeight]);

  // Same cells rendered twice: once interactively, once as inert decoration
  // for the blurred layer. The decoration layer has pointer-events: none so
  // clicks fall through to the interactive grid.
  const renderCells = (interactive: boolean) =>
    cells.map(({ key, col, row }) => {
      const painted = pixels.get(key);
      const cellStyle = {
        ['--cell-color' as string]: painted ? THEME_HEX[painted] : 'var(--black)',
      };
      if (!interactive) {
        return (
          <span
            key={key}
            aria-hidden="true"
            className="community-canvas-cell"
            style={cellStyle}
          />
        );
      }
      return (
        <button
          key={key}
          type="button"
          aria-label={painted ? `Painted pixel at ${col}, ${row}` : `Empty pixel at ${col}, ${row}`}
          className="community-canvas-cell"
          style={cellStyle}
          onPointerDown={(e) => {
            e.preventDefault();
            handleCellPointerDown(col, row);
          }}
          onPointerEnter={() => handleCellPointerEnter(col, row)}
        />
      );
    });

  const gridStyle = {
    // `1fr` guarantees end-to-end fit with no half-cells on the edges.
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gridAutoRows: `${cellSize}px`,
  } as const;

  return (
    <footer
      aria-label="Community pixel canvas"
      className="community-canvas sticky bottom-0 lg:ml-72 z-0 overflow-hidden select-none"
      style={{ height: `${footerHeight}px`, backgroundColor: 'var(--black)' }}
    >
      <div className="community-canvas-prompt absolute top-3 left-3 z-10">
        LET&apos;S DRAW TOGETHER IN THIS FOOTER :)
      </div>

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
        <>
          <div
            className="community-canvas-grid"
            data-tool={tool}
            style={gridStyle}
            onPointerLeave={() => {
              if (isDragging) {
                setIsDragging(false);
                paintedInDragRef.current.clear();
              }
            }}
          >
            {renderCells(true)}
          </div>

          <div
            className="community-canvas-grid community-canvas-grid--blurred"
            style={gridStyle}
            aria-hidden="true"
          >
            {renderCells(false)}
          </div>

          <div className="community-canvas-fold-darken" aria-hidden="true" />
        </>
      )}
    </footer>
  );
}

interface ToolButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
  Icon: ComponentType<{ size?: number; weight?: 'regular' | 'bold' | 'fill' }>;
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
      <span role="tooltip" className="community-canvas-tooltip">
        {label.toUpperCase()}
      </span>
    </div>
  );
}
