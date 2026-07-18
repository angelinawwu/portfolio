'use client';

import Link from 'next/link';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTheme, type Theme } from '@/components/ThemeProvider';
import { useCanvasTool } from '@/components/CanvasToolContext';
import { House, ArrowLeft } from '@phosphor-icons/react';


const THEME_HEX: Record<Theme, string> = {
  default: '#F3EDF5',
  green: '#D4EC21',
  blue: '#7ABDF0',
  magenta: '#EC6CF1',
  orange: '#E3743D',
};

const GRID_COLS = 37;
const GRID_ROWS = 18;
const SIDEBAR_WIDTH = 288;
const LG_BREAKPOINT = 1024;
// Exactly matches Footer's target pixel size so both canvases read as the
// same grid system — the "404" gets bigger by adding more small squares
// (higher-resolution digits), never by scaling the squares themselves up.
const TARGET_CELL_DESKTOP = 20;
const TARGET_CELL_MOBILE = 16;
const STAGGER_MS = 6;

// 37×18 pixel bitmap of "404", transcribed square-for-square from the
// reference art (2px-thick strokes; the two 4s share the same glyph mirrored
// around a chamfered oval 0).
const BITMAP_404: number[][] = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0],
  [0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0],
  [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
];

function keyOf(col: number, row: number): string {
  return `${col},${row}`;
}

function computeCellSize(viewportWidth: number) {
  const isDesktop = viewportWidth >= LG_BREAKPOINT;
  const availableWidth = isDesktop ? viewportWidth - SIDEBAR_WIDTH : viewportWidth;
  const target = isDesktop ? TARGET_CELL_DESKTOP : TARGET_CELL_MOBILE;
  // Never let the grid exceed ~85% of the available width, but otherwise
  // stay pinned to the target size instead of scaling up on wide viewports.
  const maxCellSize = (availableWidth * 0.85) / GRID_COLS;
  return Math.min(target, maxCellSize);
}

export default function NotFound() {
  const { theme } = useTheme();
  const { tool } = useCanvasTool();
  const [pixels, setPixels] = useState<Map<string, Theme>>(new Map());
  const [cellSize, setCellSize] = useState(() => computeCellSize(1440));
  const [isDragging, setIsDragging] = useState(false);
  const paintedInDragRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    let timeout: number | null = null;
    const onResize = () => {
      if (timeout !== null) window.clearTimeout(timeout);
      timeout = window.setTimeout(() => {
        setCellSize(computeCellSize(window.innerWidth));
      }, 100);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      if (timeout !== null) window.clearTimeout(timeout);
    };
  }, []);

  const paintCell = useCallback(
    (col: number, row: number) => {
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
    },
    [theme, tool],
  );

  const cells = useMemo(() => {
    const out: Array<{
      key: string;
      col: number;
      row: number;
      active: boolean;
      delay: number;
      voidMargin: string;
    }> = [];
    const isVoid = (r: number, c: number) =>
      r < 0 || r >= GRID_ROWS || c < 0 || c >= GRID_COLS || BITMAP_404[r][c] === 0;
    for (let r = 0; r < GRID_ROWS; r++) {
      for (let c = 0; c < GRID_COLS; c++) {
        // Diagonal wave so the "404" draws itself in from the top-left.
        const active = BITMAP_404[r][c] === 1;
        // Voids bleed 1px over the grid gap only toward other voids (or the
        // grid edge). Gaps bordering a glyph cell stay uncovered so the
        // container tint shows through as the glyph's outer stroke.
        const voidMargin = active
          ? '0'
          : `${isVoid(r - 1, c) ? -1 : 0}px ${isVoid(r, c + 1) ? -1 : 0}px ${isVoid(r + 1, c) ? -1 : 0}px ${isVoid(r, c - 1) ? -1 : 0}px`;
        out.push({ key: keyOf(c, r), col: c, row: r, active, delay: (c + r) * STAGGER_MS, voidMargin });
      }
    }
    return out;
  }, []);

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

  const gridStyle = {
    // Match Footer's strategy exactly: give the grid a fixed pixel box and
    // let `1fr` tracks divide it in one pass. Repeating a fixed `${cellSize}px`
    // per track instead (cellSize is rarely a whole number) makes the browser
    // round each column/row boundary independently, which drifts out of sync
    // and doubles up some grid lines while dropping others.
    width: `${cellSize * GRID_COLS}px`,
    height: `${cellSize * GRID_ROWS}px`,
    gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
    gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`,
  } as const;

  return (
    <div className="not-found-page flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center px-4 py-16 lg:min-h-screen">
      <div
        className="community-canvas-grid not-found-grid"
        data-tool={tool}
        style={gridStyle}
        onPointerLeave={() => {
          if (isDragging) {
            setIsDragging(false);
            paintedInDragRef.current.clear();
          }
        }}
      >
        {cells.map(({ key, col, row, active, delay, voidMargin }) => {
          if (!active) {
            return <span key={key} aria-hidden="true" className="not-found-void" style={{ margin: voidMargin }} />;
          }
          const painted = pixels.get(key);
          const cellStyle = {
            ['--cell-color' as string]: painted ? THEME_HEX[painted] : 'var(--black)',
            ['--pixel-delay' as string]: delay,
          };
          return (
            <button
              key={key}
              type="button"
              aria-label={painted ? `Painted pixel at ${col}, ${row}` : `Empty pixel at ${col}, ${row}`}
              className="community-canvas-cell not-found-cell"
              style={cellStyle}
              onPointerDown={(e) => {
                e.preventDefault();
                handleCellPointerDown(col, row);
              }}
              onPointerEnter={() => handleCellPointerEnter(col, row)}
            />
          );
        })}
      </div>

      <div className="not-found-footer-in mt-12 flex flex-col items-center gap-3">
        <h3 className="text-xs geist-mono-font text-white mb-3 tracking-wide uppercase">
          Huh, this page doesn't exist. Color me in?
        </h3>
      <div className="community-canvas-tool-wrapper">
      
      <div className="flex justify-start items-center border border-faded-white p-4 bg-surface">
        <Link href="/" className="sidebar-link geist-mono-font text-sm uppercase !text-white">
          <ArrowLeft className="mr-2 w-3 h-3 inline-block" />
          Back to home
        </Link>
      </div>
      </div>
      </div>
    </div>
  );
}
