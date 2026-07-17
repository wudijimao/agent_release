import assert from 'node:assert/strict';
import test from 'node:test';
import {
  calculateMaterialTaskReadiness,
  createMaterialReferenceSnapshot,
  deriveInventoryItemStatus,
  deriveMaterialRequirementStatus,
  getWikiMaterialReferenceBlockType,
  serializeWikiMaterialReferenceBlockProps,
  type MaterialRequirement,
} from './material-requirements.js';

function requirement(overrides: Partial<MaterialRequirement>): MaterialRequirement {
  return {
    id: 'req-1',
    label: 'Primary antibody',
    category: 'antibody',
    status: 'draft',
    matchCandidates: [],
    sourceRefs: [{ sourceType: 'validation_package', sourceId: 'pkg-1' }],
    notes: [],
    warnings: [],
    ...overrides,
  };
}

test('deriveInventoryItemStatus covers low stock, expired, expiring soon, and normal', () => {
  assert.equal(
    deriveInventoryItemStatus({ quantity: 1, alertThreshold: 2, now: '2026-04-30T00:00:00Z' }),
    'low_stock',
  );
  assert.equal(
    deriveInventoryItemStatus({ expiryDate: '2026-04-29', now: '2026-04-30T12:00:00Z' }),
    'expired',
  );
  assert.equal(
    deriveInventoryItemStatus({ expiryDate: '2026-05-20', now: '2026-04-30T00:00:00Z' }),
    'expiring_soon',
  );
  assert.equal(
    deriveInventoryItemStatus({ quantity: 10, alertThreshold: 2, expiryDate: '2026-08-01', now: '2026-04-30T00:00:00Z' }),
    'normal',
  );
});

test('deriveMaterialRequirementStatus keeps low-confidence links in review states', () => {
  assert.equal(deriveMaterialRequirementStatus(requirement({ matchCandidates: [] })), 'needs_lookup');
  assert.equal(
    deriveMaterialRequirementStatus(
      requirement({
        matchCandidates: [{ resourceType: 'inventory', resourceId: 'inv-1', label: 'Abcam antibody', confidence: 0.6, reason: 'name', warnings: [] }],
      }),
    ),
    'needs_review',
  );
  assert.equal(
    deriveMaterialRequirementStatus(
      requirement({
        linkedResource: createMaterialReferenceSnapshot({
          resourceType: 'inventory',
          resourceId: 'inv-1',
          label: 'Abcam antibody',
          status: 'normal',
        }),
      }),
    ),
    'ready',
  );
});

test('calculateMaterialTaskReadiness summarizes ready, needs review, and blocked requirements', () => {
  assert.equal(
    calculateMaterialTaskReadiness([
      requirement({
        linkedResource: createMaterialReferenceSnapshot({
          resourceType: 'inventory',
          resourceId: 'inv-1',
          label: 'SYBR mix',
          status: 'normal',
        }),
      }),
    ], { now: '2026-04-30T00:00:00Z' }).status,
    'ready',
  );

  const review = calculateMaterialTaskReadiness([
    requirement({
      linkedResource: createMaterialReferenceSnapshot({
        resourceType: 'inventory',
        resourceId: 'inv-2',
        label: 'Low stock antibody',
        status: 'low_stock',
      }),
    }),
  ], { now: '2026-04-30T00:00:00Z' });
  assert.equal(review.status, 'needs_review');
  assert.equal(review.needsReviewCount, 1);

  const blocked = calculateMaterialTaskReadiness([
    requirement({ id: 'req-missing', label: 'Missing primer', status: 'draft' }),
  ], { now: '2026-04-30T00:00:00Z' });
  assert.equal(blocked.status, 'blocked');
  assert.deepEqual(blocked.blockedReasons, ['Missing primer needs lookup']);
});

test('wiki material reference block props serialize stable snapshots', () => {
  const snapshot = createMaterialReferenceSnapshot({
    resourceType: 'inventory',
    resourceId: 'inv-1',
    label: 'SYBR Green Master Mix',
    status: 'normal',
    quantity: 2,
    unit: 'box',
    capturedAt: '2026-04-30T00:00:00.000Z',
  });

  assert.equal(getWikiMaterialReferenceBlockType('inventory'), 'inventoryReference');
  assert.equal(getWikiMaterialReferenceBlockType('sample'), 'sampleReference');

  const serialized = serializeWikiMaterialReferenceBlockProps({
    resourceType: 'inventory',
    resourceId: 'inv-1',
    label: 'SYBR Green Master Mix',
    snapshot,
    liveStatus: 'ok',
    lastResolvedAt: '2026-04-30T01:00:00.000Z',
    sourceType: 'wiki2',
    sourceId: 'node-1',
  });

  assert.equal(serialized.resourceId, 'inv-1');
  assert.equal(serialized.liveStatus, 'ok');
  assert.equal(JSON.parse(serialized.snapshotJson).label, 'SYBR Green Master Mix');
});
