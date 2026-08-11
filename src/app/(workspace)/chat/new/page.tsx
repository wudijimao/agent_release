import { ChatHomeRoute } from "./ChatHomeRoute";

interface ChatHomePageProps {
  searchParams: Promise<{
    projectId?: string | string[];
    focus?: string | string[];
  }>;
}

export default async function ChatHomePage({ searchParams }: ChatHomePageProps) {
  const params = await searchParams;
  const projectId = typeof params.projectId === "string" ? params.projectId : undefined;
  const autoFocusInput = params.focus === "1";

  return (
    <ChatHomeRoute
      initialProjectId={projectId}
      autoFocusInput={autoFocusInput}
    />
  );
}
