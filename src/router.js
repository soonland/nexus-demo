import { LANGS } from './i18n.js';
import { steps } from './steps.js';

export function parseHash(hash) {
  const parts = hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  const lang = LANGS.includes(parts[0]) ? parts.shift() : null;
  const slug = steps.some((step) => step.slug === parts[0]) ? parts[0] : null;
  return { lang, slug };
}

export function hrefFor(lang, slug = null) {
  return slug ? `#/${lang}/${slug}` : `#/${lang}`;
}
