import { ProjectTemplateRoute } from "../../../templates/ProjectTemplateRoute";

export default async function Page({
  params,
}: {
  params: Promise<{ templateId: string }>;
}) {
  const { templateId } = await params;
  return <ProjectTemplateRoute key={templateId} templateId={templateId} />;
}
