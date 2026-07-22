import type { ReactNode } from 'react';

export interface ChatComposerDockProps {
  children: ReactNode;
  maxWidth?: number | string;
  disclaimer?: string;
}

export function ChatComposerDock({
  children,
  maxWidth = 840,
  disclaimer = 'AI 内容可能有误差，请在实验前核实。',
}: ChatComposerDockProps) {
  return (
    <div
      className="mx-auto w-full shrink-0 bg-gradient-to-t from-white via-white to-transparent px-6 pb-6 pt-2"
      style={{ maxWidth }}
    >
      {children}
      {disclaimer && <div className="mt-3 text-center text-xs text-tertiaryText">{disclaimer}</div>}
    </div>
  );
}
