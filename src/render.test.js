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
});

describe('renderStep', () => {
  it('renders heading, prose and link', () => {
    const html = renderStep({ ...steps[0], title: 'T', prose: 'Some prose' });
    expect(html).toContain('<h1>T</h1>');
    expect(html).toContain('Some prose');
    expect(html).toContain('<a href="https://x.test">l</a>');
  });

  it('escapes prose and link attributes', () => {
    const html = renderStep({ ...steps[0], prose: '<b>&', link: { label: 'a', href: 'x"y' } });
    expect(html).toContain('&lt;b&gt;&amp;');
    expect(html).toContain('href="x&quot;y"');
  });
});
