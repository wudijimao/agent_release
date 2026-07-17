import { ChatAppShell } from "./ChatAppShell";

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return <ChatAppShell>{children}</ChatAppShell>;
}
