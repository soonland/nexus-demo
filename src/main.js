import { detectLang, messages } from './i18n.js';
import { parseHash } from './router.js';
import { renderHeader, renderHero, renderInstall, renderSteps } from './render.js';
import { steps } from './steps.js';

const STORAGE_KEY = 'nexus-demo-lang';
const header = document.getElementById('header');
const content = document.getElementById('content');
const skip = document.querySelector('.skip');

const readStoredLang = () => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

let renderedLang = null;

function go() {
  const { lang: hashLang, slug } = parseHash(window.location.hash);
  const lang = detectLang({ hashLang, stored: readStoredLang(), preferred: navigator.languages ?? [] });
  const t = messages[lang];

  header.innerHTML = renderHeader(t, lang);
  if (lang !== renderedLang) {
    renderedLang = lang;
    document.documentElement.lang = lang;
    document.title = t.docTitle;
    skip.textContent = t.skip;
    content.innerHTML = renderHero(steps, t, lang) + renderSteps(steps, t) + renderInstall(t);
  }

  const section = slug && document.getElementById(slug);
  if (section) {
    section.scrollIntoView();
    section.focus({ preventScroll: true });
  } else {
    window.scrollTo(0, 0);
  }
}

header.addEventListener('click', (event) => {
  const toggle = event.target.closest('.lang');
  if (!toggle) return;
  try {
    localStorage.setItem(STORAGE_KEY, toggle.hreflang);
  } catch {
    // Storage can be blocked; the language still switches through the URL.
  }
});

skip.addEventListener('click', (event) => {
  event.preventDefault();
  content.focus();
});

window.addEventListener('hashchange', go);
go();
