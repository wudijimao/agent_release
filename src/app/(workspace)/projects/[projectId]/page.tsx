import { ProjectDetailRoute } from "./ProjectDetailRoute";

export default async function Page({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  return <ProjectDetailRoute projectId={projectId} />;
}
