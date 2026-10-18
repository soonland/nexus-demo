import { describe, expect, it } from 'vitest';
import { steps } from './steps.js';

describe('steps', () => {
  it('starts with home and ends with the merged PR', () => {
    expect(steps[0].slug).toBe('home');
    expect(steps.at(-1).slug).toBe('merged-pr');
  });

  it('covers the five nexus skills in pipeline order', () => {
    expect(steps.slice(1, 6).map((s) => s.slug)).toEqual([
      'setup',
      'repo-standards',
      'feature-spec',
      'plan-issues',
      'implement-feature',
    ]);
  });

  it('uses unique slugs', () => {
    const slugs = steps.map((s) => s.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('gives every step a title, prose and a link', () => {
    for (const step of steps) {
      expect(step.title).toBeTruthy();
      expect(step.prose).toBeTruthy();
      expect(step.link.label).toBeTruthy();
      expect(step.link.href).toMatch(/^https:\/\/github\.com\/soonland\//);
    }
  });
});
