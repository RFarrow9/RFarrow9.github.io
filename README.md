# curriculum-vitae

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Build a pdf

```sh
npm run build
npm run build-pdf
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Deployment ⚠️ (read this)

**Pushing to `master` does NOT publish the site.** It runs the build in CI — which
shows a green ✓, misleadingly — but the Deploy step in
`.github/workflows/deploy.yml` is gated `if: startsWith(github.ref, 'refs/tags/')`,
so it **only deploys to `gh-pages` on a version tag**, never on a branch push.

To actually publish a change: commit + push to `master`, **then cut and push a
tag** (plain `3.x.y`, no `v` prefix — bump from the latest):

```sh
git tag -a 3.7.4 -m "what changed"
git push origin 3.7.4
```

GitHub Pages serves the `gh-pages` branch (the Action's `dist/` output). If you
push to `master` and the live site doesn't change, you forgot the tag.
