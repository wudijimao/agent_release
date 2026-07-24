export type SkillRiskLevel = 'low' | 'medium' | 'high';
export type SkillExecutionMode = 'prompt' | 'script' | 'remote';
export type SkillInstallStatus = 'installed' | 'disabled' | 'error';

export interface SkillCatalogItemDto {
  id: string;
  slug: string;
  displayName: string;
  description: string;
  category: string;
  executionMode: SkillExecutionMode;
  riskLevel: SkillRiskLevel;
  sourceRepo: string | null;
  sourcePath: string | null;
  supportsP1: boolean;
  metadata: Record<string, unknown> | null;
  createdAt: string;
  updatedAt: string;
}

export interface InstalledSkillItemDto {
  id: string;
  slug: string;
  status: SkillInstallStatus;
}

export interface SkillListResponse<T> {
  items: T[];
}

export interface SkillInstallManyRequest {
  slugs: string[];
  config?: Record<string, unknown>;
}

export interface SkillUninstallManyRequest {
  slugs: string[];
}
