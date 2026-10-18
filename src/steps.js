export const REPO_URL = 'https://github.com/soonland/nexus-demo';
export const MARKETPLACE_URL = 'https://github.com/soonland/nexus-marketplace';

const pr = (number, title, state) => ({
  kind: 'PR',
  number,
  title,
  state,
  href: `${REPO_URL}/pull/${number}`,
});

const issue = (number, title, state) => ({
  kind: 'Issue',
  number,
  title,
  state,
  href: `${REPO_URL}/issues/${number}`,
});

export const steps = [
  {
    slug: 'setup',
    command: '/nexus:setup',
    artifact: pr(1, 'chore: add repo standards', 'merged'),
  },
  {
    slug: 'repo-standards',
    command: '/nexus:repo-standards',
    artifact: pr(1, 'chore: add repo standards', 'merged'),
  },
  {
    slug: 'feature-spec',
    command: '/nexus:feature-spec',
    artifact: issue(2, 'Feature Spec: Nexus Hello World SPA', 'closed'),
  },
  {
    slug: 'plan-issues',
    command: '/nexus:plan-issues',
    artifact: issue(2, 'Feature Spec: Nexus Hello World SPA', 'closed'),
  },
  {
    slug: 'implement-feature',
    command: '/nexus:implement-feature',
    artifact: pr(3, 'feat: nexus Hello World SPA', 'merged'),
  },
];
