export const HOME_DRAFT_ENVELOPE_SCHEMA_VERSION = 'home-draft-envelope/v1' as const;

export const HOME_DRAFT_OBJECT_TYPES = [
  'mira_document',
  'tracking_subscription',
  'scheduled_task',
] as const;

export const HOME_DRAFT_ACTIONS = [
  'create',
  'update',
  'delete',
  'archive',
] as const;

export const HOME_DRAFT_TARGET_MODULES = [
  'mira',
  'tracking',
  'scheduled_task',
] as const;

export const HOME_DRAFT_SOURCE_REF_TYPES = [
  'user_message',
  'attachment',
  'mira_node',
  'runtime_source',
  'history',
  'memory',
] as const;

export const HOME_DRAFT_VALIDATION_STATUSES = [
  'valid',
  'needs_review',
  'blocked',
] as const;

export type HomeDraftObjectType = (typeof HOME_DRAFT_OBJECT_TYPES)[number];
export type HomeDraftAction = (typeof HOME_DRAFT_ACTIONS)[number];
export type HomeDraftTargetModule = (typeof HOME_DRAFT_TARGET_MODULES)[number];
export type HomeDraftSourceRefType = (typeof HOME_DRAFT_SOURCE_REF_TYPES)[number];
export type HomeDraftValidationStatus = (typeof HOME_DRAFT_VALIDATION_STATUSES)[number];

export interface HomeDraftSourceRef {
  type: HomeDraftSourceRefType;
  id?: string;
  title?: string;
  summary?: string;
}

export interface HomeDraftEnvelope<TDraft = unknown> {
  schemaVersion: typeof HOME_DRAFT_ENVELOPE_SCHEMA_VERSION;
  draftId: string;
  objectType: HomeDraftObjectType;
  action: HomeDraftAction;
  targetModule: HomeDraftTargetModule;
  draftSchemaVersion: string;
  draft: TDraft;
  sourceRefs: HomeDraftSourceRef[];
  provenance: {
    toolName: string;
    runId: string;
    createdAt: string;
    model?: string;
    skillSlug?: string;
  };
  validation: {
    status: HomeDraftValidationStatus;
    missingFields: string[];
    warnings: string[];
  };
  confirmation: {
    required: true;
    confirmRoute: string;
    confirmMethod: 'POST' | 'PATCH' | 'DELETE';
    confirmPayload: Record<string, unknown>;
    cancelRoute?: string;
    confirmationToken?: string;
    draftHash?: string;
    expiresAt?: string;
  };
}

export interface HomeDraftValidationResult {
  ok: boolean;
  envelope?: HomeDraftEnvelope;
  errors: string[];
  warnings: string[];
}

const UNSAFE_CONFIRM_PAYLOAD_KEYS = new Set([
  'allowCommitWrite',
  'commitNow',
  'skipConfirmation',
  'bypassConfirmation',
  'confirmed',
]);

function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === 'object' && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

function asString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function optionalString(value: unknown): string | undefined {
  const text = asString(value);
  return text || undefined;
}

function stringArray(value: unknown): string[] {
  return Array.isArray(value)
    ? value
        .map((item) => asString(item))
        .filter(Boolean)
    : [];
}

function enumValue<T extends readonly string[]>(value: unknown, values: T): T[number] | undefined {
  return typeof value === 'string' && (values as readonly string[]).includes(value)
    ? (value as T[number])
    : undefined;
}

function normalizeSourceRefs(value: unknown): HomeDraftSourceRef[] {
  return Array.isArray(value)
    ? value
        .map((item) => {
          const record = asRecord(item);
          if (!record) return null;
          const type = enumValue(record.type, HOME_DRAFT_SOURCE_REF_TYPES);
          if (!type) return null;
          return {
            type,
            ...(optionalString(record.id) ? { id: optionalString(record.id) } : {}),
            ...(optionalString(record.title) ? { title: optionalString(record.title) } : {}),
            ...(optionalString(record.summary) ? { summary: optionalString(record.summary) } : {}),
          };
        })
        .filter((item): item is HomeDraftSourceRef => Boolean(item))
    : [];
}

function confirmPayloadHasUnsafeKeys(payload: Record<string, unknown>) {
  return Object.keys(payload).some((key) => UNSAFE_CONFIRM_PAYLOAD_KEYS.has(key));
}

export function normalizeHomeDraftEnvelope(value: unknown): HomeDraftEnvelope | null {
  const record = asRecord(value);
  if (!record) return null;
  if (record.schemaVersion !== HOME_DRAFT_ENVELOPE_SCHEMA_VERSION) return null;

  const draftId = asString(record.draftId);
  const objectType = enumValue(record.objectType, HOME_DRAFT_OBJECT_TYPES);
  const action = enumValue(record.action, HOME_DRAFT_ACTIONS);
  const targetModule = enumValue(record.targetModule, HOME_DRAFT_TARGET_MODULES);
  const draftSchemaVersion = asString(record.draftSchemaVersion);
  const provenance = asRecord(record.provenance);
  const validation = asRecord(record.validation);
  const confirmation = asRecord(record.confirmation);
  const confirmPayload = asRecord(confirmation?.confirmPayload) || {};
  const confirmMethod = enumValue(confirmation?.confirmMethod, ['POST', 'PATCH', 'DELETE'] as const);
  const validationStatus = enumValue(validation?.status, HOME_DRAFT_VALIDATION_STATUSES);

  if (
    !draftId ||
    !objectType ||
    !action ||
    !targetModule ||
    !draftSchemaVersion ||
    record.draft === undefined ||
    !provenance ||
    !validation ||
    !confirmation ||
    confirmation.required !== true ||
    !asString(confirmation.confirmRoute) ||
    !confirmMethod ||
    !validationStatus
  ) {
    return null;
  }

  if (confirmPayloadHasUnsafeKeys(confirmPayload)) return null;

  return {
    schemaVersion: HOME_DRAFT_ENVELOPE_SCHEMA_VERSION,
    draftId,
    objectType,
    action,
    targetModule,
    draftSchemaVersion,
    draft: record.draft,
    sourceRefs: normalizeSourceRefs(record.sourceRefs),
    provenance: {
      toolName: asString(provenance.toolName),
      runId: asString(provenance.runId),
      createdAt: asString(provenance.createdAt),
      ...(optionalString(provenance.model) ? { model: optionalString(provenance.model) } : {}),
      ...(optionalString(provenance.skillSlug) ? { skillSlug: optionalString(provenance.skillSlug) } : {}),
    },
    validation: {
      status: validationStatus,
      missingFields: stringArray(validation.missingFields),
      warnings: stringArray(validation.warnings),
    },
    confirmation: {
      required: true,
      confirmRoute: asString(confirmation.confirmRoute),
      confirmMethod,
      confirmPayload,
      ...(optionalString(confirmation.cancelRoute) ? { cancelRoute: optionalString(confirmation.cancelRoute) } : {}),
      ...(optionalString(confirmation.confirmationToken) ? { confirmationToken: optionalString(confirmation.confirmationToken) } : {}),
      ...(optionalString(confirmation.draftHash) ? { draftHash: optionalString(confirmation.draftHash) } : {}),
      ...(optionalString(confirmation.expiresAt) ? { expiresAt: optionalString(confirmation.expiresAt) } : {}),
    },
  };
}

export function validateHomeDraftEnvelope(value: unknown): HomeDraftValidationResult {
  const envelope = normalizeHomeDraftEnvelope(value);
  if (!envelope) {
    return {
      ok: false,
      errors: ['invalid_home_draft_envelope'],
      warnings: [],
    };
  }

  const errors: string[] = [];
  const warnings: string[] = [...envelope.validation.warnings];

  if (!envelope.provenance.toolName) errors.push('missing_tool_name');
  if (!envelope.provenance.runId) errors.push('missing_run_id');
  if (envelope.validation.status === 'blocked' && envelope.confirmation.confirmationToken) {
    errors.push('blocked_draft_must_not_be_confirmable');
  }
  if (!envelope.confirmation.draftHash) warnings.push('missing_draft_hash');
  if (!envelope.confirmation.confirmationToken && envelope.validation.status !== 'blocked') {
    warnings.push('missing_confirmation_token');
  }

  return {
    ok: errors.length === 0,
    envelope,
    errors,
    warnings,
  };
}

export function isHomeDraftEnvelope(value: unknown): value is HomeDraftEnvelope {
  return normalizeHomeDraftEnvelope(value) !== null;
}
