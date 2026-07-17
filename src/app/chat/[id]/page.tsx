import { ChatSessionRoute } from "./ChatSessionRoute";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ChatSessionRoute sessionId={id} />;
}
