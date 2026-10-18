import { describe, expect, it } from 'vitest';
import { renderHeader, renderHero, renderInstall, renderSteps } from './render.js';

const steps = [
  {
    slug: 'setup',
    title: 'Set <up>',
    command: '/nexus:setup',
    summary: 'labels',
    prose: 'Some <b>prose</b>',
    artifact: { kind: 'PR', number: 1, title: 'chore & more', state: 'merged', href: 'https://x.test/1' },
  },
  {
    slug: 'feature-spec',
    title: 'Spec',
    command: '/nexus:feature-spec',
    summary: 'issue',
    prose: 'p',
    artifact: { kind: 'Issue', number: 2, title: 't', state: 'closed', href: 'https://x.test/2' },
  },
];

describe('renderHeader', () => {
  it('links to the steps and to GitHub', () => {
    const html = renderHeader();
    expect(html).toContain('href="#/setup"');
    expect(html).toContain('href="https://github.com/soonland/nexus-demo"');
  });
});

describe('renderHero', () => {
  it('shows one terminal line per step, linking to its section', () => {
    const html = renderHero(steps);
    expect(html).toContain('<h1');
    expect(html).toContain('href="#/setup"');
    expect(html).toContain('/nexus:feature-spec');
    expect(html.match(/<li>/g)).toHaveLength(2);
  });
});

describe('renderSteps', () => {
  it('renders a section per step with id, count and command', () => {
    const html = renderSteps(steps);
    expect(html).toContain('id="setup"');
    expect(html).toContain('id="feature-spec"');
    expect(html).toContain('Step 2 of 2');
    expect(html).toContain('<code>/nexus:setup</code>');
  });

  it('renders the artifact with its kind, number and state badge', () => {
    const html = renderSteps(steps);
    expect(html).toContain('PR #1');
    expect(html).toContain('Issue #2');
    expect(html).toContain('badge merged">Merged');
    expect(html).toContain('badge closed">Closed');
  });

  it('escapes text content', () => {
    const html = renderSteps(steps);
    expect(html).toContain('Set &lt;up&gt;');
    expect(html).toContain('Some &lt;b&gt;prose&lt;/b&gt;');
    expect(html).toContain('chore &amp; more');
  });
});

describe('renderInstall', () => {
  it('shows the install commands', () => {
    const html = renderInstall();
    expect(html).toContain('/plugin marketplace add soonland/nexus-marketplace');
    expect(html).toContain('/nexus:setup');
  });
});
