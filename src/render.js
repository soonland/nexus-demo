import { hrefFor } from './router.js';
import { MARKETPLACE_URL, REPO_URL } from './steps.js';

const escapeHtml = (text) =>
  text.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export function renderHeader(t, lang, slug = null) {
  const { switchTo } = t;
  return `<div class="bar">
<a class="brand" href="${hrefFor(lang)}">nexus demo</a>
<nav aria-label="${escapeHtml(t.linksLabel)}">
<a href="${hrefFor(lang, 'setup')}">${escapeHtml(t.stepsLink)}</a>
<a href="${REPO_URL}">${escapeHtml(t.githubLink)}</a>
<a class="lang" href="${hrefFor(switchTo.lang, slug)}" hreflang="${switchTo.lang}" lang="${switchTo.lang}" title="${escapeHtml(switchTo.title)}">${escapeHtml(switchTo.label)}</a>
</nav>
</div>`;
}

export function renderHero(steps, t, lang) {
  const lines = steps
    .map(
      (step) =>
        `<li><a href="${hrefFor(lang, step.slug)}"><span class="prompt">$</span> <span class="cmd">${escapeHtml(step.command)}</span> <span class="note"># ${escapeHtml(t.steps[step.slug].summary)}</span></a></li>`,
    )
    .join('');
  return `<section class="hero" aria-labelledby="hero-title">
<h1 id="hero-title">${escapeHtml(t.heroTitle)}</h1>
<p class="lede">${escapeHtml(t.lede)}</p>
<div class="terminal" role="group" aria-label="${escapeHtml(t.terminalLabel)}"><ol>${lines}</ol></div>
</section>`;
}

export function renderSteps(steps, t) {
  return steps
    .map((step, index) => {
      const { artifact } = step;
      const text = t.steps[step.slug];
      return `<section class="step" id="${step.slug}" tabindex="-1" aria-labelledby="${step.slug}-title">
<div class="copy">
<p class="count">${escapeHtml(t.stepCount(index + 1, steps.length))}</p>
<h2 id="${step.slug}-title">${escapeHtml(text.title)}</h2>
<p>${escapeHtml(text.prose)}</p>
</div>
<div class="proof">
<p class="command"><code>${escapeHtml(step.command)}</code></p>
<a class="artifact" href="${escapeHtml(artifact.href)}">
<span class="kind">${artifact.kind} #${artifact.number}</span>
<span class="title">${escapeHtml(artifact.title)}</span>
<span class="badge ${artifact.state}">${escapeHtml(t.badges[artifact.state])}</span>
</a>
</div>
</section>`;
    })
    .join('\n');
}

export function renderInstall(t) {
  return `<section class="install" id="install" aria-labelledby="install-title">
<h2 id="install-title">${escapeHtml(t.installTitle)}</h2>
<div class="terminal"><ol>
<li><span class="prompt">$</span> <span class="cmd">/plugin marketplace add soonland/nexus-marketplace</span></li>
<li><span class="prompt">$</span> <span class="cmd">/plugin install nexus@nexus-marketplace</span></li>
<li><span class="prompt">$</span> <span class="cmd">/nexus:setup</span></li>
</ol></div>
<p><a href="${MARKETPLACE_URL}">${escapeHtml(t.marketplaceLink)}</a></p>
</section>`;
}
