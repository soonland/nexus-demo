import { describe, expect, it } from 'vitest';
import { renderNav, renderStep } from './render.js';

const steps = [
  { slug: 'home', title: 'Home', prose: 'p', link: { label: 'l', href: 'https://x.test' } },
  { slug: 'setup', title: 'Set <up>', prose: 'p', link: { label: 'l', href: 'https://x.test' } },
];

describe('renderNav', () => {
  it('links every step and marks only the active one as current', () => {
    const html = renderNav(steps, 'setup');
    expect(html).toContain('href="#/home"');
    expect(html).toContain('href="#/setup" aria-current="page"');
    expect(html.match(/aria-current/g)).toHaveLength(1);
  });

  it('escapes titles', () => {
    expect(renderNav(steps, 'home')).toContain('Set &lt;up&gt;');
  });

  it('prefers the short nav label', () => {
    expect(renderNav([{ ...steps[0], nav: 'Overview' }], 'home')).toContain('>Overview</a>');
  });
});

describe('renderStep', () => {
  it('shows the command only for pipeline steps', () => {
    expect(renderStep(steps[0])).not.toContain('class="command"');
    expect(renderStep({ ...steps[0], command: '/nexus:setup' })).toContain('<code>/nexus:setup</code>');
  });

  it('renders previous and next links when given neighbours', () => {
    const html = renderStep(steps[0], { prev: steps[1], next: null });
    expect(html).toContain('rel="prev" href="#/setup"');
    expect(html).not.toContain('rel="next"');
  });

  it('renders heading, prose and link', () => {
    const html = renderStep({ ...steps[0], title: 'T', prose: 'Some prose' });
    expect(html).toContain('<h1>T</h1>');
    expect(html).toContain('Some prose');
    expect(html).toContain('href="https://x.test"');
    expect(html).toContain('>l</a>');
  });

  it('escapes prose and link attributes', () => {
    const html = renderStep({ ...steps[0], prose: '<b>&', link: { label: 'a', href: 'x"y' } });
    expect(html).toContain('&lt;b&gt;&amp;');
    expect(html).toContain('href="x&quot;y"');
  });
});
