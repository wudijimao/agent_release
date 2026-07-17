import assert from 'node:assert/strict';
import test from 'node:test';
import {
  HOME_DRAFT_ENVELOPE_SCHEMA_VERSION,
  normalizeHomeDraftEnvelope,
  validateHomeDraftEnvelope,
} from './home-draft.js';

function baseEnvelope(overrides: Record<string, unknown> = {}) {
  return {
    schemaVersion: HOME_DRAFT_ENVELOPE_SCHEMA_VERSION,
    draftId: 'draft-1',
    objectType: 'tracking_subscription',
    action: 'create',
    targetModule: 'tracking',
    draftSchemaVersion: 'tracking_subscription_preview/v1',
    draft: {
      sourceName: 'EGFR resistance',
      sourceType: 'pubmed',
      keywords: ['EGFR', 'resistance'],
      frequency: 'daily',
      lookbackDays: 30,
      projectNodeIds: [],
    },
    sourceRefs: [{ type: 'user_message', id: 'message-1' }],
    provenance: {
      toolName: 'draft_tracking_subscription',
      runId: 'run-1',
      createdAt: '2026-05-29T00:00:00.000Z',
    },
    validation: {
      status: 'valid',
      missingFields: [],
      warnings: [],
    },
    confirmation: {
      required: true,
      confirmRoute: '/api/tracking/subscription-drafts/draft-1/confirm',
      confirmMethod: 'POST',
      confirmPayload: { draftId: 'draft-1' },
      confirmationToken: 'token',
      draftHash: 'hash',
    },
    ...overrides,
  };
}

test('normalizeHomeDraftEnvelope accepts a valid draft envelope', () => {
  const envelope = normalizeHomeDraftEnvelope(baseEnvelope());
  assert.ok(envelope);
  assert.equal(envelope.objectType, 'tracking_subscription');
  assert.equal(envelope.confirmation.confirmMethod, 'POST');
});

test('validateHomeDraftEnvelope rejects blocked drafts with confirmation tokens', () => {
  const result = validateHomeDraftEnvelope(
    baseEnvelope({
      validation: {
        status: 'blocked',
        missingFields: ['keywords'],
        warnings: [],
      },
    }),
  );
  assert.equal(result.ok, false);
  assert.ok(result.errors.includes('blocked_draft_must_not_be_confirmable'));
});

test('normalizeHomeDraftEnvelope rejects unsafe confirm payload keys', () => {
  const envelope = normalizeHomeDraftEnvelope(
    baseEnvelope({
      confirmation: {
        required: true,
        confirmRoute: '/api/tracking/subscription-drafts/draft-1/confirm',
        confirmMethod: 'POST',
        confirmPayload: { draftId: 'draft-1', skipConfirmation: true },
        confirmationToken: 'token',
        draftHash: 'hash',
      },
    }),
  );
  assert.equal(envelope, null);
});
