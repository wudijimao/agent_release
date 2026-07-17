import type { InventoryCategory, SampleType, StorageTemp, ValidationAssayType } from './index.js';

export const MATERIAL_RESOURCE_TYPES = ['inventory', 'sample'] as const;
export const MATERIAL_REQUIREMENT_SOURCE_TYPES = [
  'validation_package',
  'future_task',
  'cloning_workbench',
  'wiki2',
  'manual',
] as const;
export const MATERIAL_REQUIREMENT_CATEGORIES = [
  'reagent',
  'consumable',
  'kit',
  'enzyme',
  'antibody',
  'primer',
  'plasmid',
  'cell_line',
  'strain',
  'control',
  'sample',
  'other',
] as const;
export const MATERIAL_REQUIREMENT_STATUSES = [
  'draft',
  'needs_lookup',
  'linked',
  'ready',
  'needs_review',
  'blocked',
  'not_required',
] as const;
export const MATERIAL_TASK_READINESS_STATUSES = ['ready', 'needs_review', 'blocked'] as const;
export const MATERIAL_MATCH_REASONS = [
  'catalog_number',
  'name_supplier',
  'name',
  'category',
  'manual',
] as const;
export const INVENTORY_ITEM_STATUSES = ['normal', 'low_stock', 'expired', 'expiring_soon'] as const;
export const WIKI_MATERIAL_REFERENCE_BLOCK_TYPES = ['inventoryReference', 'sampleReference'] as const;
export const WIKI_MATERIAL_REFERENCE_LIVE_STATUSES = [
  'unknown',
  'ok',
  'missing',
  'stale',
  'low_stock',
  'expired',
  'expiring_soon',
] as const;
export const PROCUREMENT_SUGGESTION_STATUSES = [
  'draft',
  'budget_draft_created',
  'dismissed',
] as const;
export const PROCUREMENT_SUGGESTION_REASONS = [
  'low_stock',
  'missing_material',
  'expired',
  'expiring_soon',
  'manual',
] as const;

export type MaterialResourceType = (typeof MATERIAL_RESOURCE_TYPES)[number];
export type MaterialRequirementSourceType = (typeof MATERIAL_REQUIREMENT_SOURCE_TYPES)[number];
export type MaterialRequirementCategory = (typeof MATERIAL_REQUIREMENT_CATEGORIES)[number];
export type MaterialRequirementStatus = (typeof MATERIAL_REQUIREMENT_STATUSES)[number];
export type MaterialTaskReadinessStatus = (typeof MATERIAL_TASK_READINESS_STATUSES)[number];
export type MaterialMatchReason = (typeof MATERIAL_MATCH_REASONS)[number];
export type InventoryItemStatus = (typeof INVENTORY_ITEM_STATUSES)[number];
export type WikiMaterialReferenceBlockType = (typeof WIKI_MATERIAL_REFERENCE_BLOCK_TYPES)[number];
export type WikiMaterialReferenceLiveStatus = (typeof WIKI_MATERIAL_REFERENCE_LIVE_STATUSES)[number];
export type ProcurementSuggestionStatus = (typeof PROCUREMENT_SUGGESTION_STATUSES)[number];
export type ProcurementSuggestionReason = (typeof PROCUREMENT_SUGGESTION_REASONS)[number];

export interface MaterialRequirementSourceRef {
  sourceType: MaterialRequirementSourceType;
  sourceId: string;
  sourceLabel?: string;
  packageId?: string;
  taskId?: string;
  cloningId?: string;
  wikiNodeId?: string;
}

export interface MaterialReferenceSnapshot {
  resourceType: MaterialResourceType;
  resourceId: string;
  label: string;
  name?: string;
  category?: InventoryCategory | SampleType | MaterialRequirementCategory;
  supplier?: string;
  catalogNumber?: string;
  location?: string;
  storageTemp?: StorageTemp;
  quantity?: number;
  unit?: string;
  expiryDate?: string;
  status?: InventoryItemStatus | string;
  capturedAt: string;
  updatedAt?: string;
}

export interface MaterialRequirementQuantity {
  value?: number;
  unit?: string;
  per?: string;
  note?: string;
}

export interface MaterialMatchCandidate {
  resourceType: MaterialResourceType;
  resourceId: string;
  label: string;
  confidence: number;
  reason: MaterialMatchReason;
  snapshot?: MaterialReferenceSnapshot;
  warnings: string[];
}

export interface MaterialRequirement {
  id: string;
  label: string;
  category: MaterialRequirementCategory;
  purpose?: string;
  assayType?: ValidationAssayType | 'cloning' | 'general';
  group?: string;
  priority?: 'high' | 'medium' | 'low';
  requiredQuantity?: MaterialRequirementQuantity;
  status: MaterialRequirementStatus;
  linkedResource?: MaterialReferenceSnapshot;
  matchCandidates: MaterialMatchCandidate[];
  sourceRefs: MaterialRequirementSourceRef[];
  notes: string[];
  warnings: string[];
  updatedAt?: string;
}

export interface MaterialTaskReadiness {
  status: MaterialTaskReadinessStatus;
  readyCount: number;
  needsReviewCount: number;
  blockedCount: number;
  totalRequiredCount: number;
  blockedReasons: string[];
  updatedAt: string;
}

export interface WikiMaterialReferenceBlockProps {
  resourceType: MaterialResourceType;
  resourceId: string;
  label: string;
  snapshot: MaterialReferenceSnapshot;
  liveStatus: WikiMaterialReferenceLiveStatus;
  liveStatusMessage?: string;
  lastResolvedAt?: string;
  sourceType?: MaterialRequirementSourceType;
  sourceId?: string;
}

export interface WikiMaterialReferenceBlockSerializedProps {
  resourceId: string;
  label: string;
  snapshotJson: string;
  liveStatus: WikiMaterialReferenceLiveStatus;
  liveStatusMessage: string;
  lastResolvedAt: string;
  sourceType: string;
  sourceId: string;
}

export interface WikiMaterialReferenceSearchResult {
  resourceType: MaterialResourceType;
  resourceId: string;
  label: string;
  snapshot: MaterialReferenceSnapshot;
  liveStatus: WikiMaterialReferenceLiveStatus;
  liveStatusMessage?: string;
}

export interface WikiMaterialReferenceSearchResponse {
  items: WikiMaterialReferenceSearchResult[];
  total: number;
  query: string;
  resourceTypes: MaterialResourceType[];
}

export interface WikiMaterialReferenceResolveResponse {
  item: WikiMaterialReferenceSearchResult | null;
  resourceType: MaterialResourceType;
  resourceId: string;
  liveStatus: WikiMaterialReferenceLiveStatus;
  liveStatusMessage?: string;
  resolvedAt: string;
}

export interface MaterialBackRef {
  id: string;
  labId: string;
  resourceType: MaterialResourceType;
  resourceId: string;
  sourceType: MaterialRequirementSourceType;
  sourceId: string;
  sourceLabel?: string;
  requirementId: string;
  requirementLabel: string;
  status: MaterialRequirementStatus;
  route?: string;
  metadata?: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

export interface MaterialRefsResponse {
  resourceType: MaterialResourceType;
  resourceId: string;
  refs: {
    wiki: MaterialBackRef[];
    futureTasks: MaterialBackRef[];
    validationPackages: MaterialBackRef[];
    cloningProjects: MaterialBackRef[];
  };
  total: number;
}

export interface VendorCatalogItem {
  id: string;
  labId: string;
  vendorName: string;
  itemName: string;
  catalogNumber?: string;
  category?: MaterialRequirementCategory | InventoryCategory;
  packageSize?: string;
  unitPrice?: number;
  currency: string;
  url?: string;
  leadTimeDays?: number;
  metadata?: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

export interface ProcurementSuggestion {
  id: string;
  labId: string;
  status: ProcurementSuggestionStatus;
  reason: ProcurementSuggestionReason;
  title: string;
  itemName: string;
  category?: MaterialRequirementCategory | InventoryCategory;
  supplier?: string;
  catalogNumber?: string;
  suggestedQuantity?: number;
  unit?: string;
  estimatedUnitPrice?: number;
  estimatedTotal?: number;
  currency: string;
  resourceType?: MaterialResourceType | 'material_requirement';
  resourceId?: string;
  sourceType?: MaterialRequirementSourceType;
  sourceId?: string;
  requirementId?: string;
  vendorCatalogItemId?: string;
  budgetLedgerId?: string;
  notes: string[];
  createdAt: string;
  updatedAt: string;
  dismissedAt?: string;
}

export interface InventoryItemStatusInput {
  quantity?: number | null;
  alertThreshold?: number | null;
  expiryDate?: string | Date | null;
  now?: string | Date;
  expiringSoonDays?: number;
}

function asFiniteNumber(value: unknown): number | undefined {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string' && value.trim()) {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) return parsed;
  }
  return undefined;
}

function toDate(value: string | Date | undefined | null): Date | undefined {
  if (!value) return undefined;
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

export function createMaterialReferenceSnapshot(
  input: Omit<MaterialReferenceSnapshot, 'capturedAt'> & { capturedAt?: string },
): MaterialReferenceSnapshot {
  return {
    ...input,
    capturedAt: input.capturedAt || new Date().toISOString(),
  };
}

export function getWikiMaterialReferenceBlockType(resourceType: MaterialResourceType): WikiMaterialReferenceBlockType {
  return resourceType === 'sample' ? 'sampleReference' : 'inventoryReference';
}

export function serializeWikiMaterialReferenceBlockProps(
  props: WikiMaterialReferenceBlockProps,
): WikiMaterialReferenceBlockSerializedProps {
  return {
    resourceId: props.resourceId,
    label: props.label,
    snapshotJson: JSON.stringify(props.snapshot),
    liveStatus: props.liveStatus,
    liveStatusMessage: props.liveStatusMessage || '',
    lastResolvedAt: props.lastResolvedAt || '',
    sourceType: props.sourceType || '',
    sourceId: props.sourceId || '',
  };
}

export function deriveInventoryItemStatus(input: InventoryItemStatusInput): InventoryItemStatus {
  const quantity = asFiniteNumber(input.quantity);
  const threshold = asFiniteNumber(input.alertThreshold);
  const expiryDate = toDate(input.expiryDate);
  const now = toDate(input.now) || new Date();
  const expiringSoonDays = asFiniteNumber(input.expiringSoonDays) ?? 30;

  if (expiryDate && expiryDate.getTime() < startOfUtcDay(now).getTime()) {
    return 'expired';
  }

  if (quantity !== undefined && threshold !== undefined && quantity <= threshold) {
    return 'low_stock';
  }

  if (expiryDate) {
    const horizon = new Date(startOfUtcDay(now).getTime() + expiringSoonDays * 24 * 60 * 60 * 1000);
    if (expiryDate.getTime() <= horizon.getTime()) {
      return 'expiring_soon';
    }
  }

  return 'normal';
}

export function deriveMaterialRequirementStatus(requirement: MaterialRequirement): MaterialRequirementStatus {
  if (requirement.status === 'not_required' || requirement.status === 'blocked') {
    return requirement.status;
  }
  if (!requirement.linkedResource) {
    return requirement.matchCandidates.length > 0 ? 'needs_review' : 'needs_lookup';
  }
  if (requirement.linkedResource.status === 'expired' || requirement.linkedResource.status === 'low_stock') {
    return 'needs_review';
  }
  return 'ready';
}

export function calculateMaterialTaskReadiness(
  requirements: MaterialRequirement[],
  options: { now?: string | Date } = {},
): MaterialTaskReadiness {
  const required = requirements.filter((item) => item.status !== 'not_required');
  const normalized = required.map((item) => deriveMaterialRequirementStatus(item));
  const blockedReasons = required.flatMap((item, index) => {
    const status = normalized[index];
    if (status === 'blocked') return item.warnings.length > 0 ? item.warnings : [`${item.label} blocked`];
    if (status === 'needs_lookup') return [`${item.label} needs lookup`];
    return [];
  });
  const readyCount = normalized.filter((status) => status === 'ready').length;
  const blockedCount = normalized.filter((status) => status === 'blocked' || status === 'needs_lookup').length;
  const needsReviewCount = normalized.filter(
    (status) => status === 'needs_review' || status === 'draft' || status === 'linked',
  ).length;
  const status: MaterialTaskReadinessStatus =
    blockedCount > 0 ? 'blocked' : needsReviewCount > 0 ? 'needs_review' : 'ready';

  return {
    status,
    readyCount,
    needsReviewCount,
    blockedCount,
    totalRequiredCount: required.length,
    blockedReasons,
    updatedAt: toDate(options.now)?.toISOString() || new Date().toISOString(),
  };
}

function startOfUtcDay(date: Date) {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
}
