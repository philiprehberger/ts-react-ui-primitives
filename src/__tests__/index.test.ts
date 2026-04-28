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

  it('exports Spinner as a function', () => {
    assert.ok(typeof mod.Spinner === 'function');
  });

  it('exports Badge as a function', () => {
    assert.ok(typeof mod.Badge === 'function');
  });
});
