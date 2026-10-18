import { steps } from './steps.js';

export function parseHash(hash) {
  const slug = hash.replace(/^#\/?/, '');
  return steps.some((step) => step.slug === slug) ? slug : 'home';
}

export function stepForHash(hash) {
  const slug = parseHash(hash);
  return steps.find((step) => step.slug === slug);
}

export function neighbors(slug) {
  const index = steps.findIndex((step) => step.slug === slug);
  return { prev: steps[index - 1] ?? null, next: steps[index + 1] ?? null };
}
