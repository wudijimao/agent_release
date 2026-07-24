import type {
  InstalledSkillItemDto,
  SkillCatalogItemDto,
  SkillInstallManyRequest,
  SkillListResponse,
  SkillUninstallManyRequest,
} from "@bioagent/shared";

import type { ApiClient } from "@/lib/api";

type SkillsApi = Pick<ApiClient, "get" | "post">;

export interface SkillsPageData {
  catalog: SkillCatalogItemDto[];
  installedSlugs: Set<string>;
}

export async function loadSkillsPage(api: SkillsApi): Promise<SkillsPageData> {
  const [catalogResponse, installedResponse] = await Promise.all([
    api.get<SkillListResponse<SkillCatalogItemDto>>("/api/skills/catalog"),
    api.get<SkillListResponse<InstalledSkillItemDto>>("/api/skills/installed"),
  ]);

  return {
    catalog: catalogResponse.items,
    installedSlugs: new Set(installedResponse.items.map((item) => item.slug)),
  };
}

export function installSkills(api: SkillsApi, slugs: string[]) {
  const request: SkillInstallManyRequest = { slugs };
  return api.post<SkillListResponse<InstalledSkillItemDto>>(
    "/api/skills/install-many",
    request,
  );
}

export function uninstallSkills(api: SkillsApi, slugs: string[]) {
  const request: SkillUninstallManyRequest = { slugs };
  return api.post<SkillListResponse<InstalledSkillItemDto>>(
    "/api/skills/uninstall-many",
    request,
  );
}
