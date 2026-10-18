import { describe, expect, it } from 'vitest';
import { LANGS, detectLang, messages } from './i18n.js';
import { steps } from './steps.js';

describe('detectLang', () => {
  it('prefers the URL, then the saved choice, then the browser', () => {
    expect(detectLang({ hashLang: 'fr', stored: 'en', preferred: ['en-US'] })).toBe('fr');
    expect(detectLang({ stored: 'fr', preferred: ['en-US'] })).toBe('fr');
    expect(detectLang({ preferred: ['fr-CA', 'en'] })).toBe('fr');
  });

  it('falls back to English for unsupported or missing languages', () => {
    expect(detectLang({ preferred: ['de-DE'] })).toBe('en');
    expect(detectLang()).toBe('en');
  });

  it('skips a browser language it does not support and uses the next one', () => {
    expect(detectLang({ preferred: ['de', 'fr'] })).toBe('fr');
  });
});

describe('messages', () => {
  it('has the same keys in every language', () => {
    const keys = (obj) => Object.keys(obj).sort();
    for (const lang of LANGS) {
      expect(keys(messages[lang])).toEqual(keys(messages.en));
      expect(keys(messages[lang].steps)).toEqual(keys(messages.en.steps));
    }
  });

  it('translates every step in every language', () => {
    for (const lang of LANGS) {
      for (const { slug } of steps) {
        const text = messages[lang].steps[slug];
        expect(text.title).toBeTruthy();
        expect(text.summary).toBeTruthy();
        expect(text.prose).toBeTruthy();
      }
    }
  });

  it('formats the step count in each language', () => {
    expect(messages.en.stepCount(2, 5)).toBe('Step 2 of 5');
    expect(messages.fr.stepCount(2, 5)).toBe('Étape 2 sur 5');
  });

  it('offers each language the other one as a switch', () => {
    expect(messages.en.switchTo.lang).toBe('fr');
    expect(messages.fr.switchTo.lang).toBe('en');
  });
});
