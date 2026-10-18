import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      include: ['src/**/*.js'],
      exclude: ['src/**/*.test.js', 'src/main.js'],
      thresholds: { lines: 75, functions: 75, branches: 75, statements: 75 },
    },
  },
});
