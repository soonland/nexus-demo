const REPO_URL = 'https://github.com/soonland/nexus-demo';

export const steps = [
  {
    slug: 'home',
    title: 'Hello, nexus',
    nav: 'Overview',
    prose:
      'nexus is a set of Claude Code plugins that take an idea to a merged pull request: a spec, a plan, code, tests and a PR. This page walks through each step, with links to the real issues and PRs in this repo. To try it, add the nexus marketplace to Claude Code and run /nexus:setup in your project.',
    link: { label: 'nexus marketplace', href: 'https://github.com/soonland/nexus-marketplace' },
  },
  {
    slug: 'setup',
    title: 'setup',
    command: '/nexus:setup',
    prose:
      'Registers the plugins for the project, stores defaults such as the repo and components in .claude/nexus.json, and creates the labels the other skills use.',
    link: { label: 'Pull request #1', href: `${REPO_URL}/pull/1` },
  },
  {
    slug: 'repo-standards',
    title: 'repo-standards',
    command: '/nexus:repo-standards',
    prose:
      'Audits the repo and adds CI, Dependabot, issue templates, Claude workflows, commit tooling and a CLAUDE.md, on a branch, as one pull request.',
    link: { label: 'Pull request #1', href: `${REPO_URL}/pull/1` },
  },
  {
    slug: 'feature-spec',
    title: 'feature-spec',
    command: '/nexus:feature-spec',
    prose:
      'Turns a one-line idea into a written specification through a short conversation, and publishes it as a GitHub issue once you approve it.',
    link: { label: 'Issue #2', href: `${REPO_URL}/issues/2` },
  },
  {
    slug: 'plan-issues',
    title: 'plan-issues',
    command: '/nexus:plan-issues',
    prose:
      'Splits a spec into one implementation issue per package. This spec touches a single package, so the plan recommended skipping the split and implementing the spec directly.',
    link: { label: 'Issue #2', href: `${REPO_URL}/issues/2` },
  },
  {
    slug: 'implement-feature',
    title: 'implement-feature',
    command: '/nexus:implement-feature',
    prose:
      'Plans the work, asks for confirmation, then writes the code and tests on a feature branch and opens a pull request that closes the issue.',
    link: { label: 'Pull request #3', href: `${REPO_URL}/pull/3` },
  },
  {
    slug: 'merged-pr',
    title: 'The merged PR',
    nav: 'Merged PR',
    prose:
      'The result is a reviewed pull request that closes the spec. This site is that result: it was specified, implemented and opened by the steps above.',
    link: { label: 'Pull request #3', href: `${REPO_URL}/pull/3` },
  },
];
