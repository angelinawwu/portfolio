'use client';

import type { ComponentType } from 'react';
import { Eraser, PaintBrush } from '@phosphor-icons/react';
import { useCanvasTool } from './CanvasToolContext';

export default function CanvasToolbar() {
  const { tool, setTool } = useCanvasTool();

  return (
    <div
      className="canvas-toolbar pointer-events-none absolute left-0 right-0 z-20 flex items-center justify-between px-3"
      style={{ bottom: '-44px', height: '32px' }}
    >
      <div className="community-canvas-prompt pointer-events-auto">
        LET&apos;S DRAW TOGETHER IN THIS FOOTER :)
      </div>
      <div className="pointer-events-auto flex items-center gap-2">
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
    </div>
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
