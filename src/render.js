import { MARKETPLACE_URL, REPO_URL } from './steps.js';

const escapeHtml = (text) =>
  text.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export function renderHeader() {
  return `<div class="bar">
<a class="brand" href="#/">nexus demo</a>
<nav aria-label="Links"><a href="#/setup">Steps</a><a href="${REPO_URL}">GitHub</a></nav>
</div>`;
}

export function renderHero(steps) {
  const lines = steps
    .map(
      (step) =>
        `<li><a href="#/${step.slug}"><span class="prompt">$</span> <span class="cmd">${escapeHtml(step.command)}</span> <span class="note"># ${escapeHtml(step.summary)}</span></a></li>`,
    )
    .join('');
  return `<section class="hero" aria-labelledby="hero-title">
<h1 id="hero-title">From idea to merged PR</h1>
<p class="lede">nexus is a set of Claude Code plugins. This page was built with them, and every step below links to the real issue or pull request it produced.</p>
<div class="terminal" role="group" aria-label="The five nexus commands, in order"><ol>${lines}</ol></div>
</section>`;
}

const BADGES = { merged: 'Merged', closed: 'Closed' };

export function renderSteps(steps) {
  return steps
    .map((step, index) => {
      const { artifact } = step;
      return `<section class="step" id="${step.slug}" tabindex="-1" aria-labelledby="${step.slug}-title">
<div class="copy">
<p class="count">Step ${index + 1} of ${steps.length}</p>
<h2 id="${step.slug}-title">${escapeHtml(step.title)}</h2>
<p>${escapeHtml(step.prose)}</p>
</div>
<div class="proof">
<p class="command"><code>${escapeHtml(step.command)}</code></p>
<a class="artifact" href="${escapeHtml(artifact.href)}">
<span class="kind">${artifact.kind} #${artifact.number}</span>
<span class="title">${escapeHtml(artifact.title)}</span>
<span class="badge ${artifact.state}">${BADGES[artifact.state]}</span>
</a>
</div>
</section>`;
    })
    .join('\n');
}

export function renderInstall() {
  return `<section class="install" id="install" aria-labelledby="install-title">
<h2 id="install-title">Try it on your own repo</h2>
<div class="terminal"><ol>
<li><span class="prompt">$</span> <span class="cmd">/plugin marketplace add soonland/nexus-marketplace</span></li>
<li><span class="prompt">$</span> <span class="cmd">/plugin install nexus@nexus-marketplace</span></li>
<li><span class="prompt">$</span> <span class="cmd">/nexus:setup</span></li>
</ol></div>
<p><a href="${MARKETPLACE_URL}">nexus marketplace on GitHub</a></p>
</section>`;
}
