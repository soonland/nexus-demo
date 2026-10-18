const escapeHtml = (text) =>
  text.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

const navLabel = (step) => step.nav ?? step.title;

export function renderNav(steps, activeSlug) {
  const items = steps
    .map((step) => {
      const current = step.slug === activeSlug ? ' aria-current="page"' : '';
      const kind = step.command ? 'step' : step.slug;
      return `<li class="node node-${kind}"><a href="#/${step.slug}"${current}>${escapeHtml(navLabel(step))}</a></li>`;
    })
    .join('');
  return `<ol>${items}</ol>`;
}

function renderPager(prev, next) {
  const link = (step, rel, text) =>
    step
      ? `<a rel="${rel}" href="#/${step.slug}"><span>${text}</span>${escapeHtml(navLabel(step))}</a>`
      : '<span></span>';
  return `<div class="pager">${link(prev, 'prev', 'Previous')}${link(next, 'next', 'Next')}</div>`;
}

export function renderStep(step, { prev = null, next = null } = {}) {
  const command = step.command ? `<p class="command"><code>${escapeHtml(step.command)}</code></p>` : '';
  return `<h1>${escapeHtml(step.title)}</h1>
${command}
<p class="prose">${escapeHtml(step.prose)}</p>
<a class="artifact" href="${escapeHtml(step.link.href)}"><span>See it on GitHub</span>${escapeHtml(step.link.label)}</a>
${renderPager(prev, next)}`;
}
