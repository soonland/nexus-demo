import { describe, expect, it } from 'vitest';
import { hrefFor, parseHash } from './router.js';

describe('parseHash', () => {
  it('returns nothing for an empty hash', () => {
    expect(parseHash('')).toEqual({ lang: null, slug: null });
    expect(parseHash('#')).toEqual({ lang: null, slug: null });
  });

  it('reads the language and the step', () => {
    expect(parseHash('#/fr/feature-spec')).toEqual({ lang: 'fr', slug: 'feature-spec' });
    expect(parseHash('#/en')).toEqual({ lang: 'en', slug: null });
  });

  it('still accepts a step with no language', () => {
    expect(parseHash('#/setup')).toEqual({ lang: null, slug: 'setup' });
    expect(parseHash('#setup')).toEqual({ lang: null, slug: 'setup' });
  });

  it('ignores unknown languages and steps', () => {
    expect(parseHash('#/de/setup')).toEqual({ lang: null, slug: null });
    expect(parseHash('#/fr/nope')).toEqual({ lang: 'fr', slug: null });
  });
});

describe('hrefFor', () => {
  it('builds language and step links', () => {
    expect(hrefFor('fr')).toBe('#/fr');
    expect(hrefFor('en', 'setup')).toBe('#/en/setup');
  });
});
