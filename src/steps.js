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
    title: 'Set up the project',
    command: '/nexus:setup',
    summary: 'defaults, labels, plugin config',
    prose:
      'Registers the plugins for the project, stores defaults such as the repo and components in .claude/nexus.json, and creates the labels the other skills use.',
    artifact: pr(1, 'chore: add repo standards', 'merged'),
  },
  {
    slug: 'repo-standards',
    title: 'Normalize the repo',
    command: '/nexus:repo-standards',
    summary: 'CI, Dependabot, templates, hooks',
    prose:
      'Audits the repo and adds CI, Dependabot, issue templates, Claude workflows, commit tooling and a CLAUDE.md, on a branch, as one pull request.',
    artifact: pr(1, 'chore: add repo standards', 'merged'),
  },
  {
    slug: 'feature-spec',
    title: 'Write the spec',
    command: '/nexus:feature-spec',
    summary: 'idea in, approved spec issue out',
    prose:
      'Turns a one-line idea into a written specification through a short conversation, and publishes it as a GitHub issue once you approve it.',
    artifact: issue(2, 'Feature Spec: Nexus Hello World SPA', 'closed'),
  },
  {
    slug: 'plan-issues',
    title: 'Plan the work',
    command: '/nexus:plan-issues',
    summary: 'one issue per package, or skip the split',
    prose:
      'Splits a spec into one implementation issue per package. This spec touches a single package, so the plan recommended skipping the split and implementing the spec directly.',
    artifact: issue(2, 'Feature Spec: Nexus Hello World SPA', 'closed'),
  },
  {
    slug: 'implement-feature',
    title: 'Build it and open the PR',
    command: '/nexus:implement-feature',
    summary: 'branch, code, tests, pull request',
    prose:
      'Plans the work, asks for confirmation, then writes the code and tests on a feature branch and opens a pull request that closes the issue. This page is that pull request.',
    artifact: pr(3, 'feat: nexus Hello World SPA', 'merged'),
  },
];
