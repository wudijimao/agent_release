import assert from 'node:assert/strict';
import test from 'node:test';
import { createDefaultValidationPackage, normalizeValidationPackage } from './validation-package.js';

test('default validation package includes empty material payload', () => {
  const pkg = createDefaultValidationPackage();

  assert.deepEqual(pkg.materials.requirements, []);
  assert.equal(pkg.materials.readiness.status, 'ready');
  assert.equal(pkg.materials.readiness.totalRequiredCount, 0);
});

test('normalizeValidationPackage preserves material requirements and recomputes readiness', () => {
  const pkg = normalizeValidationPackage({
    packageId: 'pkg-1',
    title: 'qPCR validation',
    materials: {
      requirements: [
        {
          id: 'req-1',
          label: 'qPCR primer pair',
          category: 'primer',
          status: 'draft',
        },
      ],
    },
  });

  assert.equal(pkg.materials.requirements.length, 1);
  assert.equal(pkg.materials.requirements[0]?.label, 'qPCR primer pair');
  assert.equal(pkg.materials.readiness.status, 'blocked');
  assert.deepEqual(pkg.materials.readiness.blockedReasons, ['qPCR primer pair needs lookup']);
});
