import { steps } from './steps.js';
import { neighbors, stepForHash } from './router.js';
import { renderNav, renderStep } from './render.js';

const nav = document.getElementById('nav');
const content = document.getElementById('content');

function show() {
  const step = stepForHash(window.location.hash);
  nav.innerHTML = renderNav(steps, step.slug);
  content.innerHTML = renderStep(step, neighbors(step.slug));
  document.title = `${step.title} · nexus demo`;
}

window.addEventListener('hashchange', () => {
  show();
  content.focus();
});
show();

document.querySelector('.skip').addEventListener('click', (event) => {
  event.preventDefault();
  content.focus();
});
