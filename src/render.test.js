import { describe, expect, it } from 'vitest';
import { messages } from './i18n.js';
import { renderHeader, renderHero, renderInstall, renderSteps } from './render.js';
import { steps } from './steps.js';

const { en, fr } = messages;

describe('renderHeader', () => {
  it('links to the steps, GitHub and the top of the other language', () => {
    const html = renderHeader(en, 'en');
    expect(html).toContain('href="#/en/setup"');
    expect(html).toContain('href="https://github.com/soonland/nexus-demo"');
    expect(html).toContain('href="#/fr" hreflang="fr" lang="fr"');
    expect(html).toContain('>Français</a>');
  });

  it('switches back to English from French', () => {
    const html = renderHeader(fr, 'fr');
    expect(html).toContain('href="#/en" hreflang="en"');
    expect(html).toContain('>Étapes</a>');
  });
});

describe('renderHero', () => {
  it('shows one terminal line per step, linking to its section in the page language', () => {
    const html = renderHero(steps, fr, 'fr');
    expect(html).toContain('De l’idée à la PR fusionnée');
    expect(html).toContain('href="#/fr/setup"');
    expect(html).toContain('/nexus:feature-spec');
    expect(html.match(/<li>/g)).toHaveLength(steps.length);
  });
});

describe('renderSteps', () => {
  it('renders a section per step with id, count and command', () => {
    const html = renderSteps(steps, en);
    expect(html).toContain('id="setup"');
    expect(html).toContain('id="implement-feature"');
    expect(html).toContain('Step 2 of 5');
    expect(html).toContain('<code>/nexus:setup</code>');
  });

  it('translates the text but not the command or the GitHub title', () => {
    const html = renderSteps(steps, fr);
    expect(html).toContain('Étape 2 sur 5');
    expect(html).toContain('Configurer le projet');
    expect(html).toContain('<code>/nexus:setup</code>');
    expect(html).toContain('chore: add repo standards');
  });

  it('renders the artifact with its kind, number and translated state badge', () => {
    expect(renderSteps(steps, en)).toContain('badge merged">Merged');
    expect(renderSteps(steps, en)).toContain('badge closed">Closed');
    expect(renderSteps(steps, fr)).toContain('badge merged">Fusionnée');
    expect(renderSteps(steps, fr)).toContain('PR #3');
    expect(renderSteps(steps, fr)).toContain('Issue #2');
  });

  it('escapes text content', () => {
    const t = { ...en, steps: { ...en.steps, setup: { ...en.steps.setup, title: 'Set <up>' } } };
    expect(renderSteps(steps, t)).toContain('Set &lt;up&gt;');
  });
});

describe('renderInstall', () => {
  it('shows the install commands in either language', () => {
    expect(renderInstall(en)).toContain('/plugin marketplace add soonland/nexus-marketplace');
    expect(renderInstall(fr)).toContain('Essayez-le sur votre propre dépôt');
  });
});
