import { steps } from './steps.js';
import { parseHash } from './router.js';
import { renderHeader, renderHero, renderInstall, renderSteps } from './render.js';

const content = document.getElementById('content');
document.getElementById('header').innerHTML = renderHeader();
content.innerHTML = renderHero(steps) + renderSteps(steps) + renderInstall();

function go() {
  const slug = parseHash(window.location.hash);
  const section = slug && document.getElementById(slug);
  if (section) {
    section.scrollIntoView();
    section.focus({ preventScroll: true });
  } else {
    window.scrollTo(0, 0);
  }
}

window.addEventListener('hashchange', go);
go();

document.querySelector('.skip').addEventListener('click', (event) => {
  event.preventDefault();
  content.focus();
});
