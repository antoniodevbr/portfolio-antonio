# Antonio Flavio — Portfolio

Next.js 15 (App Router) + Tailwind CSS v4 + [next-intl](https://next-intl.dev) for English (`/en`) and Portuguese (`/pt`).

```bash
npm install
npm run dev   # http://localhost:3000
```

## Editing your content

| What | Where |
| --- | --- |
| Profile photo | `public/profile.jpg` (square image; initials are shown if missing) |
| Name, email, location, links | `src/content/profile.ts` |
| Bio, about, experiences (EN) | `messages/en.json` |
| Bio, about, experiences (PT) | `messages/pt.json` |

Each experience in `Experience.items` has `company`, `role`, `start`, `end` (leave empty for "Present"/"Atual"), `location`, `description`, `highlights` and `tags`.

## Adding another language

1. Add the locale code to `src/i18n/routing.ts`.
2. Create `messages/<code>.json` with the same keys as `en.json`.
