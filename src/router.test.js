import { describe, expect, it } from 'vitest';
import { parseHash } from './router.js';

describe('parseHash', () => {
  it('returns null for an empty hash', () => {
    expect(parseHash('')).toBeNull();
    expect(parseHash('#')).toBeNull();
  });

  it('accepts #/slug and #slug', () => {
    expect(parseHash('#/feature-spec')).toBe('feature-spec');
    expect(parseHash('#setup')).toBe('setup');
  });

  it('returns null for an unknown slug', () => {
    expect(parseHash('#/nope')).toBeNull();
  });
});
