const escapeHtml = (text) =>
  text.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export function renderNav(steps, activeSlug) {
  const items = steps
    .map((step) => {
      const current = step.slug === activeSlug ? ' aria-current="page"' : '';
      return `<li><a href="#/${step.slug}"${current}>${escapeHtml(step.title)}</a></li>`;
    })
    .join('');
  return `<ul>${items}</ul>`;
}

export function renderStep(step) {
  return `<h1>${escapeHtml(step.title)}</h1>
<p>${escapeHtml(step.prose)}</p>
<p><a href="${escapeHtml(step.link.href)}">${escapeHtml(step.link.label)}</a></p>`;
}
