import { describe, expect, it } from 'vitest';
import { slugify } from './slugify.js';

describe('slugify', () => {
  it('lowercases and joins words with dashes', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  it('strips leading and trailing separators', () => {
    expect(slugify('  --Hello!--  ')).toBe('hello');
  });
});
