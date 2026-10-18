const REPO_URL = 'https://github.com/soonland/nexus-demo';

export const steps = [
  {
    slug: 'home',
    title: 'Hello, nexus',
    prose:
      'nexus is a set of Claude Code plugins that take an idea to a merged pull request: a spec, a plan, code, tests and a PR. This page walks through each step, with links to the real issues and PRs in this repo. To try it, add the nexus marketplace to Claude Code and run /nexus:setup in your project.',
    link: { label: 'nexus marketplace', href: 'https://github.com/soonland/nexus-marketplace' },
  },
  {
    slug: 'setup',
    title: '1. setup',
    prose:
      '/nexus:setup registers the plugins for the project, stores defaults such as the repo and components in .claude/nexus.json, and creates the labels the other skills use.',
    link: { label: 'Pull request #1', href: `${REPO_URL}/pull/1` },
  },
  {
    slug: 'repo-standards',
    title: '2. repo-standards',
    prose:
      '/nexus:repo-standards audits the repo and adds CI, Dependabot, issue templates, Claude workflows, commit tooling and a CLAUDE.md, on a branch, as one pull request.',
    link: { label: 'Pull request #1', href: `${REPO_URL}/pull/1` },
  },
  {
    slug: 'feature-spec',
    title: '3. feature-spec',
    prose:
      '/nexus:feature-spec turns a one-line idea into a written specification through a short conversation, and publishes it as a GitHub issue once you approve it.',
    link: { label: 'Issue #2', href: `${REPO_URL}/issues/2` },
  },
  {
    slug: 'plan-issues',
    title: '4. plan-issues',
    prose:
      '/nexus:plan-issues splits a spec into one implementation issue per package. This spec touches a single package, so the plan recommended skipping the split and implementing the spec directly.',
    link: { label: 'Issue #2', href: `${REPO_URL}/issues/2` },
  },
  {
    slug: 'implement-feature',
    title: '5. implement-feature',
    prose:
      '/nexus:implement-feature plans the work, asks for confirmation, then writes the code and tests on a feature branch and opens a pull request that closes the issue.',
    link: { label: 'Pull request #3', href: `${REPO_URL}/pull/3` },
  },
  {
    slug: 'merged-pr',
    title: 'The merged PR',
    prose:
      'The result is a reviewed pull request that closes the spec. This site is that result: it was specified, implemented and opened by the steps above.',
    link: { label: 'Pull request #3', href: `${REPO_URL}/pull/3` },
  },
];
