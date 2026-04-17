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
// Footer height is a fixed number of cells, so cells always fit end-to-end.
const ROWS_DESKTOP = 14;
const ROWS_MOBILE = 10;
const SIDEBAR_WIDTH_LG = 288;
const LG_BREAKPOINT = 1024;
const POLL_INTERVAL_MS = 5000;
// How long a locally-drawn pixel keeps priority over polled server state.
// This prevents the next poll from briefly wiping an optimistic paint while
// Google Sheets is still catching up on the POST.
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

  // Pick a column count close to the target pixel size, then divide evenly.
  // The cell size is (availableWidth / cols) exactly, so cells fit end-to-end
  // with no half-cells. Square cells make the row height the same.
  const cols = Math.max(1, Math.round(availableWidth / targetPixel));
  const cellSize = availableWidth / cols;
  const footerHeight = cellSize * rows;

  // Center the grid on (0, 0): origin sits at the middle cell for every user.
  const colStart = -Math.floor(cols / 2);
  const rowStart = -Math.floor(rows / 2);

  return { cellSize, cols, rows, colStart, rowStart, footerHeight };
}

export default function Footer() {
  const { theme } = useTheme();
  const [tool, setTool] = useState<Tool>('brush');
  const [pixels, setPixels] = useState<Map<string, Theme>>(new Map());
  // Use a stable default for SSR so server/client HTML match; the real
  // viewport-dependent layout is computed after mount.
  const [layout, setLayout] = useState(() => computeLayout(1440));
  const [mounted, setMounted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const paintedInDragRef = useRef<Set<string>>(new Set());
  // Local writes that should win over whatever the server polls back until
  // the backend has had time to persist them. Each entry expires after
  // PENDING_WRITE_TTL_MS.
  const pendingWritesRef = useRef<Map<string, { theme: Theme | null; expireAt: number }>>(
    new Map(),
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  // Recompute grid dimensions on resize (debounced).
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
        // Overlay any still-fresh local writes so the user's own paints
        // are never briefly wiped by a stale poll response.
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
    (col: number, row: number) => {
      const key = keyOf(col, row);
      const nextTheme: Theme | null = tool === 'brush' ? theme : null;

      // 1. Optimistic UI — update immediately so the cell paints on this frame.
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

      // 2. Record in the pending-writes layer so upcoming polls don't clobber it.
      pendingWritesRef.current.set(key, {
        theme: nextTheme,
        expireAt: Date.now() + PENDING_WRITE_TTL_MS,
      });

      // 3. Fire-and-forget to the backend — we never await, so drags stay snappy
      // even if Google Sheets is slow. If it fails, the optimistic state still
      // shows and the next poll will reconcile.
      void fetch('/api/pixels', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ col, row, theme: nextTheme }),
        keepalive: true,
      }).then((res) => {
        if (res.ok) {
          // Refresh the TTL so later polls still trust the local value until
          // Sheets has had a chance to include it.
          const entry = pendingWritesRef.current.get(key);
          if (entry && entry.theme === nextTheme) {
            entry.expireAt = Date.now() + PENDING_WRITE_TTL_MS;
          }
        }
      }).catch(() => {
        // Silent — optimistic state remains.
      });
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

  const { cellSize, cols, footerHeight } = layout;

  // Sync footer height to <main>'s margin-bottom via a CSS custom property
  // on the document root, so the scroll reveal matches the new pixel-based
  // height exactly (not a fixed vh).
  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.style.setProperty('--community-canvas-height', `${footerHeight}px`);
  }, [footerHeight]);

  // Track the "fold" — where <main>'s bottom edge sits inside the footer's
  // local coordinate space. The blurred decoration grid uses this to mask
  // its opaque region to a band starting at the fold and tapering down,
  // so the blur is always pinned to the topmost visible slice of footer.
  //   foldOffset = 0           → footer fully revealed (fold at top)
  //   foldOffset = footerHeight → footer just about to peek (fold at bottom)
  // Driven through a CSS variable so React doesn't re-render on every frame.
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

      // Fade the blur + darken overlays out over the last 15% of the footer
      // reveal so they disappear entirely once the footer is fully shown.
      // foldRatio = 1 (footer hidden) → opacity 1; foldRatio = 0 (revealed) → 0.
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

  // Render the cells once and reuse the array for both grid layers — the
  // blurred decoration layer and the sharp interactive layer must paint the
  // exact same content. Buttons in the decoration layer carry tabIndex={-1}
  // and no event handlers so they're inert; pointer-events: none on the
  // decoration container makes clicks fall through to the interactive layer.
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
    // `1fr` guarantees end-to-end fit with no half-cells on the edges,
    // even when availableWidth / cols is not an integer.
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gridAutoRows: `${cellSize}px`,
  } as const;

  return (
    <footer
      aria-label="Community pixel canvas"
      className="community-canvas fixed bottom-0 right-0 left-0 lg:left-72 z-0 overflow-hidden select-none"
      style={{ height: `${footerHeight}px`, backgroundColor: 'var(--black)' }}
    >
      {/* Prompt — top-left corner. */}
      <div className="community-canvas-prompt absolute top-3 left-3 z-10">
        LET&apos;S DRAW A PICTURE TOGETHER IN THIS FOOTER :)
      </div>

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
        <>
          {/* Sharp interactive grid — receives all pointer events and renders
              the actual buttons users paint with. */}
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

          {/* Blurred decoration layer — same cells, uniformly blurred, masked
              so the blur is fully opaque at the top edge and fades to clear
              by the bottom. Stacked on top of the sharp grid; the mask's
              transparent regions reveal the sharp version underneath, giving
              the perception of a vertical progressive blur strongest at the
              fold between page content and the canvas. */}
          <div
            className="community-canvas-grid community-canvas-grid--blurred"
            style={gridStyle}
            aria-hidden="true"
          >
            {renderCells(false)}
          </div>

          {/* Dark gradient overlay — same fold-tracking band as the blur,
              but a flat `var(--black)` → transparent gradient that darkens
              the canvas at the fold. Sits above the blur, below the tools. */}
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
