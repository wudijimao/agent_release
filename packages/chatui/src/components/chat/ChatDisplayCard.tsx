import React from 'react';
import {
  ArrowUpRight,
  Ban,
  CircleHelp,
  CircleCheckBig,
  Info,
  ShieldCheck,
  TriangleAlert,
} from 'lucide-react';
import { BaseButton } from '../common';
import type { ChatDisplayCardViewModel } from './chat.types';

export interface ChatDisplayCardProps {
  card: ChatDisplayCardViewModel;
  actionPending?: boolean;
  onAction?(actionKey: string, actionId: string): void;
}

const CARD_META: Record<
  ChatDisplayCardViewModel['kind'],
  { icon: React.ReactNode; className: string; iconClassName: string }
> = {
  clarification: {
    icon: <CircleHelp size={16} />,
    className: 'border-warning bg-warning-soft',
    iconClassName: 'text-warning',
  },
  confirmation: {
    icon: <CircleCheckBig size={16} />,
    className: 'border-primary-soft-strong bg-primary-soft',
    iconClassName: 'text-primary',
  },
  approval: {
    icon: <ShieldCheck size={16} />,
    className: 'border-warning bg-warning-soft',
    iconClassName: 'text-warning',
  },
  result: {
    icon: <CircleCheckBig size={16} />,
    className: 'border-lineSubtle bg-surface',
    iconClassName: 'text-primary',
  },
  warning: {
    icon: <TriangleAlert size={16} />,
    className: 'border-warning bg-warning-soft',
    iconClassName: 'text-warning',
  },
  blocked: {
    icon: <Ban size={16} />,
    className: 'border-danger bg-danger-soft',
    iconClassName: 'text-danger',
  },
  info: {
    icon: <Info size={16} />,
    className: 'border-lineSubtle bg-surfaceMuted',
    iconClassName: 'text-secondaryText',
  },
};

export function ChatDisplayCard({ card, actionPending = false, onAction }: ChatDisplayCardProps) {
  const meta = CARD_META[card.kind];

  return (
    <section className={`w-full max-w-[680px] rounded-xl border p-4 ${meta.className}`}>
      <div className="flex items-start gap-3">
        <span className={`mt-0.5 shrink-0 ${meta.iconClassName}`} aria-hidden="true">
          {meta.icon}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="m-0 text-sm font-semibold leading-5 text-primaryText">
              {card.title}
            </h3>
            {card.statusLabel && (
              <span className="rounded-full bg-surface px-2 py-0.5 text-[11px] text-secondaryText">
                {card.statusLabel}
              </span>
            )}
          </div>

          {card.summary && (
            <p className="m-0 mt-1.5 whitespace-pre-wrap text-sm leading-6 text-secondaryText">
              {card.summary}
            </p>
          )}

          {card.items && card.items.length > 0 && (
            <ul className="m-0 mt-2 space-y-1 pl-4 text-sm leading-6 text-secondaryText">
              {card.items.map((item, index) => (
                <li key={`${index}-${item}`}>{item}</li>
              ))}
            </ul>
          )}

          {card.links && card.links.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {card.links.map((link) => (
                <a
                  key={`${link.href}-${link.label}`}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex max-w-full items-center gap-1 rounded-md border border-lineSubtle bg-surface px-2.5 py-1.5 text-xs text-primaryText no-underline transition-colors hover:border-primary hover:text-primary"
                >
                  <span className="truncate">{link.label}</span>
                  <ArrowUpRight size={12} className="shrink-0" />
                </a>
              ))}
            </div>
          )}

          {card.actionKey && card.actions && card.actions.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {card.actions.map((action) => (
                <BaseButton
                  key={action.id}
                  type={action.tone ?? 'secondary'}
                  size="small"
                  disabled={actionPending || !onAction}
                  onClick={() => onAction?.(card.actionKey!, action.id)}
                >
                  {action.label}
                </BaseButton>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
