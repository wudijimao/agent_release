import Link from "next/link";
import type { ReactNode } from "react";

export default function ShowcaseLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <nav className="fixed left-1/2 top-3 z-[2000] flex -translate-x-1/2 items-center gap-1 rounded-full border border-lineSubtle bg-surface p-1 text-xs text-secondaryText shadow-md">
        <Link
          href="/showcase"
          className="rounded-full px-3 py-1.5 transition-colors hover:bg-bgLight hover:text-primaryText"
        >
          组件
        </Link>
        <Link
          href="/showcase/rich-message"
          className="rounded-full px-3 py-1.5 transition-colors hover:bg-bgLight hover:text-primaryText"
        >
          富消息
        </Link>
        <Link
          href="/showcase/chat-sse"
          className="rounded-full px-3 py-1.5 transition-colors hover:bg-bgLight hover:text-primaryText"
        >
          Chat SSE
        </Link>
      </nav>
      {children}
    </>
  );
}
