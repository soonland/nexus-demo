import { describe, expect, it } from 'vitest';
import { steps } from './steps.js';

describe('steps', () => {
  it('covers the five nexus skills in pipeline order', () => {
    expect(steps.map((s) => s.slug)).toEqual([
      'setup',
      'repo-standards',
      'feature-spec',
      'plan-issues',
      'implement-feature',
    ]);
  });

  it('uses unique slugs and a matching command for each', () => {
    expect(new Set(steps.map((s) => s.slug)).size).toBe(steps.length);
    for (const step of steps) {
      expect(step.command).toBe(`/nexus:${step.slug}`);
    }
  });

  it('gives every step a real GitHub artifact', () => {
    for (const step of steps) {
      expect(['PR', 'Issue']).toContain(step.artifact.kind);
      expect(['merged', 'closed']).toContain(step.artifact.state);
      expect(step.artifact.href).toBe(
        `https://github.com/soonland/nexus-demo/${step.artifact.kind === 'PR' ? 'pull' : 'issues'}/${step.artifact.number}`,
      );
    }
  });
});
