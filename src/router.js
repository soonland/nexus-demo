import { steps } from './steps.js';

export function parseHash(hash) {
  const slug = hash.replace(/^#\/?/, '');
  return steps.some((step) => step.slug === slug) ? slug : null;
}
