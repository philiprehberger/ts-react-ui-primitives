import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

describe('react-ui-primitives', async () => {
  const mod = await import('../../dist/index.js');

  it('exports Button as a function', () => {
    assert.ok(typeof mod.Button === 'function');
  });

  it('exports Alert as a function', () => {
    assert.ok(typeof mod.Alert === 'function');
  });
});
