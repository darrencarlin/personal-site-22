# darrencarlin.com

Personal site — Next.js 16 (App Router, Turbopack) + Sanity Studio v6, deployed on Vercel.

## Scripts

| Command                | What it does                                     |
| ---------------------- | ------------------------------------------------ |
| `bun dev`              | Dev server                                       |
| `bun run build`        | Production build (type-checks via the `tsc` CLI) |
| `bun start`            | Serve the production build                       |
| `bun run typecheck`    | `tsc --noEmit`                                   |
| `bun run lint`         | ESLint — **currently broken, see below**         |
| `bun run format`       | Prettier                                         |
| `bun run sanity:types` | Regenerate `sanity.types.ts` from the schema     |

Requires Node >= 22.12 (Sanity v6's floor). Env vars live in `.env.local`.

## Known issue: `lint` is broken under TypeScript 7

This repo runs TypeScript 7, whose npm package ships the Go compiler and **no
longer includes the JavaScript compiler API** (`lib/typescript.js`). Anything
that loads TypeScript programmatically breaks — including `typescript-eslint`,
which `eslint-config-next` depends on. Running `bun run lint` fails with:

```
TypeError: Cannot read properties of undefined (reading 'Cjs')
  at @typescript-eslint/typescript-estree/dist/create-program/shared.js
```

This is a known upstream gap, not a misconfiguration. The programmatic API is
expected in TypeScript 7.1; once `typescript-eslint` supports it, `lint` should
start working again with no changes here.

Type safety is unaffected — `bun run typecheck` and the `next build` type-check
both use the native compiler and are ~4x faster than TS 6.

To restore linting in the meantime, downgrade to the latest TypeScript 6:

```bash
bun add -d typescript@^6.0.3
```
