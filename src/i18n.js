export const LANGS = ['en', 'fr'];

export const messages = {
  en: {
    docTitle: 'nexus demo',
    skip: 'Skip to content',
    linksLabel: 'Links',
    stepsLink: 'Steps',
    githubLink: 'GitHub',
    switchTo: { lang: 'fr', label: 'Français', title: 'Lire en français' },
    heroTitle: 'From idea to merged PR',
    lede: 'nexus is a set of Claude Code plugins. This page was built with them, and every step below links to the real issue or pull request it produced.',
    terminalLabel: 'The five nexus commands, in order',
    stepCount: (n, total) => `Step ${n} of ${total}`,
    badges: { merged: 'Merged', closed: 'Closed' },
    installTitle: 'Try it on your own repo',
    marketplaceLink: 'nexus marketplace on GitHub',
    steps: {
      setup: {
        title: 'Set up the project',
        summary: 'defaults, labels, plugin config',
        prose:
          'Registers the plugins for the project, stores defaults such as the repo and components in .claude/nexus.json, and creates the labels the other skills use.',
      },
      'repo-standards': {
        title: 'Normalize the repo',
        summary: 'CI, Dependabot, templates, hooks',
        prose:
          'Audits the repo and adds CI, Dependabot, issue templates, Claude workflows, commit tooling and a CLAUDE.md, on a branch, as one pull request.',
      },
      'feature-spec': {
        title: 'Write the spec',
        summary: 'idea in, approved spec issue out',
        prose:
          'Turns a one-line idea into a written specification through a short conversation, and publishes it as a GitHub issue once you approve it.',
      },
      'plan-issues': {
        title: 'Plan the work',
        summary: 'one issue per package, or skip the split',
        prose:
          'Splits a spec into one implementation issue per package. This spec touches a single package, so the plan recommended skipping the split and implementing the spec directly.',
      },
      'implement-feature': {
        title: 'Build it and open the PR',
        summary: 'branch, code, tests, pull request',
        prose:
          'Plans the work, asks for confirmation, then writes the code and tests on a feature branch and opens a pull request that closes the issue. This page is that pull request.',
      },
    },
  },
  fr: {
    docTitle: 'démo nexus',
    skip: 'Aller au contenu',
    linksLabel: 'Liens',
    stepsLink: 'Étapes',
    githubLink: 'GitHub',
    switchTo: { lang: 'en', label: 'English', title: 'Read in English' },
    heroTitle: 'De l’idée à la PR fusionnée',
    lede: 'nexus est un ensemble de plugins Claude Code. Cette page a été construite avec eux, et chaque étape ci-dessous renvoie vers le ticket ou la pull request réels qu’elle a produits.',
    terminalLabel: 'Les cinq commandes nexus, dans l’ordre',
    stepCount: (n, total) => `Étape ${n} sur ${total}`,
    badges: { merged: 'Fusionnée', closed: 'Fermé' },
    installTitle: 'Essayez-le sur votre propre dépôt',
    marketplaceLink: 'Marketplace nexus sur GitHub',
    steps: {
      setup: {
        title: 'Configurer le projet',
        summary: 'réglages, labels, config des plugins',
        prose:
          'Enregistre les plugins pour le projet, stocke les réglages par défaut (dépôt, composants) dans .claude/nexus.json et crée les labels utilisés par les autres skills.',
      },
      'repo-standards': {
        title: 'Normaliser le dépôt',
        summary: 'CI, Dependabot, modèles, hooks',
        prose:
          'Audite le dépôt et ajoute la CI, Dependabot, des modèles de tickets, des workflows Claude, l’outillage de commits et un CLAUDE.md, sur une branche, dans une seule pull request.',
      },
      'feature-spec': {
        title: 'Rédiger la spécification',
        summary: 'de l’idée au ticket de spec approuvé',
        prose:
          'Transforme une idée en une ligne en spécification écrite au fil d’une courte conversation, puis la publie comme ticket GitHub une fois que vous l’avez approuvée.',
      },
      'plan-issues': {
        title: 'Planifier le travail',
        summary: 'un ticket par package, ou pas de découpage',
        prose:
          'Découpe une spécification en un ticket d’implémentation par package. Celle-ci ne touche qu’un seul package : le plan a donc recommandé de ne pas la découper et de l’implémenter directement.',
      },
      'implement-feature': {
        title: 'Construire et ouvrir la PR',
        summary: 'branche, code, tests, pull request',
        prose:
          'Planifie le travail, demande confirmation, puis écrit le code et les tests sur une branche de fonctionnalité et ouvre une pull request qui ferme le ticket. Cette page est cette pull request.',
      },
    },
  },
};

export function detectLang({ hashLang = null, stored = null, preferred = [] } = {}) {
  const candidates = [hashLang, stored, ...preferred.map((tag) => tag.slice(0, 2).toLowerCase())];
  return candidates.find((lang) => LANGS.includes(lang)) ?? 'en';
}
