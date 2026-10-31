# AGENTS.md

Guidance for AI coding agents working in this repo. See `README.md` for the project history and ops notes.

## Repo layout

Yarn 4 monorepo (`nodeLinker: node-modules`, workspaces `packages/*`).

- `packages/number-one-fan/`: the F\*Choir public site. Next.js 16 (App Router), React 18, Tailwind 3, deployed to Vercel. Its workspace package name is `fchoir-next`. This is where most work happens.
- `packages/gcloud/`: one-off helper scripts (`makeGalleries.js`) that use `@google-cloud/storage`.
- `comms/`: plain text and notes, not code.

The Strapi CMS backend is no longer in this repo. It lives in a separate repository, and the site reads it over REST at the `API_ROOT` in `packages/number-one-fan/src/api/index.ts`.

## Node and Yarn

- Node 26 is the target. `packages/number-one-fan/package.json` declares `"engines": { "node": "26.x.x" }`.
- Yarn is pinned by `packageManager`. Use `yarn`, not `npm` or `pnpm`, so that `yarn.lock` stays authoritative.

## Common commands

Run from the repo root:

```sh
yarn workspace fchoir-next dev        # next dev on :3000
yarn workspace fchoir-next build      # next build, static export to ./out
yarn workspace fchoir-next lint       # next lint (eslint 8, next/core-web-vitals)
yarn workspace fchoir-next storybook  # storybook dev on :6006
```

There is no test suite. Verify changes with `lint` and `build`, and check the UI in the browser for visual work.

## number-one-fan conventions

- The site is a static export (`output: 'export'`, `trailingSlash: true`). Do not add server-only features such as route handlers, server actions that need a runtime, or ISR. They will break the export.
- Images go through the custom loader in `src/model/cloudinaryLoader.ts`. Cloudinary is the only allowed remote image host.
- Use the `@/` path alias for imports from `src/`.
- Strapi access goes through `src/api/` (`fetchApi`, plus the static and dynamic route helpers). Do not call the API root directly from components.
- Components are organised as atoms, molecules, and organisms under `src/ui/`. Pages live in `src/app/`.
- Formatting: Prettier with `singleQuote: true`, `printWidth: 100`, `tabWidth: 2`. Run `yarn workspace fchoir-next prettier --write <files>` on touched files, or let your editor do it.
- Keep the existing comment style: short, explanatory, and not a restatement of the code.

## Deployment

- `number-one-fan` deploys to Vercel. Pushes to `main` trigger builds. The build must pass on Node 26, so do not add dependencies that need an older engine.
- Before opening a PR, make sure `yarn workspace fchoir-next build` passes locally.
- The root `Procfile` and the `we-rise` Strapi package were removed. Do not reintroduce a Heroku or backend workspace here.

## Git

- Work on a branch and open a PR against `main`. Do not commit directly to `main`.
- Keep `yarn.lock` changes in the same commit as the `package.json` change that caused them.
