import { describe, expect, it } from 'vitest';
import { neighbors, parseHash, stepForHash } from './router.js';

describe('parseHash', () => {
  it('falls back to home for an empty hash', () => {
    expect(parseHash('')).toBe('home');
    expect(parseHash('#')).toBe('home');
  });

  it('accepts #/slug and #slug', () => {
    expect(parseHash('#/feature-spec')).toBe('feature-spec');
    expect(parseHash('#setup')).toBe('setup');
  });

  it('falls back to home for an unknown slug', () => {
    expect(parseHash('#/nope')).toBe('home');
  });
});

describe('stepForHash', () => {
  it('returns the matching step', () => {
    expect(stepForHash('#/merged-pr').slug).toBe('merged-pr');
  });

  it('returns the home step for an unknown hash', () => {
    expect(stepForHash('#/nope').slug).toBe('home');
  });
});

describe('neighbors', () => {
  it('has no previous step on the first and no next on the last', () => {
    expect(neighbors('home').prev).toBeNull();
    expect(neighbors('home').next.slug).toBe('setup');
    expect(neighbors('merged-pr').next).toBeNull();
    expect(neighbors('merged-pr').prev.slug).toBe('implement-feature');
  });
});
