'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTheme, type Theme } from '@/components/ThemeProvider';
import { useCanvasTool } from '@/components/CanvasToolContext';

const THEME_HEX: Record<Theme, string> = {
  default: '#F3EDF5',
  green: '#D4EC21',
  blue: '#7ABDF0',
  magenta: '#EC6CF1',
  orange: '#E3743D',
};

const GRID_COLS = 17;
const GRID_ROWS = 7;
const SIDEBAR_WIDTH = 288;
const LG_BREAKPOINT = 1024;

// 5×7 pixel bitmaps for each digit
const DIGIT_4 = [
  [0, 0, 1, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1],
];

const DIGIT_0 = [
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1],
];

// "404" with 1-col gaps between digits → 17 cols × 7 rows
const BITMAP_404: number[][] = DIGIT_4.map((row4, r) => [
  ...row4,
  0,
  ...DIGIT_0[r],
  0,
  ...row4,
]);

function keyOf(col: number, row: number): string {
  return `${col},${row}`;
}

function computeCellSize(viewportWidth: number) {
  const isDesktop = viewportWidth >= LG_BREAKPOINT;
  const availableWidth = isDesktop ? viewportWidth - SIDEBAR_WIDTH : viewportWidth;
  const targetWidth = availableWidth * 0.7;
  return Math.min(56, Math.max(16, targetWidth / GRID_COLS));
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
    const out: Array<{ key: string; col: number; row: number; active: boolean }> = [];
    for (let r = 0; r < GRID_ROWS; r++) {
      for (let c = 0; c < GRID_COLS; c++) {
        out.push({ key: keyOf(c, r), col: c, row: r, active: BITMAP_404[r][c] === 1 });
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
    gridTemplateColumns: `repeat(${GRID_COLS}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${GRID_ROWS}, ${cellSize}px)`,
    height: 'auto',
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
        {cells.map(({ key, col, row, active }) => {
          if (!active) {
            return <span key={key} aria-hidden="true" />;
          }
          const painted = pixels.get(key);
          const cellStyle = {
            ['--cell-color' as string]: painted ? THEME_HEX[painted] : 'var(--white)',
          };
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
        })}
      </div>

      <p className="mt-8 font-mono text-sm tracking-wider text-[var(--white-muted)]">
        page not found — color me in
      </p>
      <a
        href="/"
        className="mt-4 font-mono text-sm tracking-wider text-[var(--accent)] transition-colors duration-200 hover:text-[var(--white)]"
      >
        ← back home
      </a>
    </div>
  );
}
