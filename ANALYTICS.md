# Pageview analytics

PostHog project: **265151**. SDK setup follows https://posthog.com/docs/libraries/next-js and https://posthog.com/docs/libraries/js/config.

## Deployment

In the hosting provider, set `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` to this project's public project token and `NEXT_PUBLIC_POSTHOG_HOST` to the ingestion host shown in PostHog project settings. Both are required; leaving either blank disables analytics. Copy `.env.example` to `.env.local` for local development. Never commit real environment values. Next.js embeds these public values at build time, so rebuild after changing them.

No production settings or deployment are changed by this PR. After review, configure the variables and deploy, then verify a `$pageview` for the production hostname in PostHog. Event delivery has not been verified against the production site.

## Collection boundaries

- One anonymous `$pageview` on initial render and pathname navigation, including back/forward. React effect repeats and query/hash-only navigation do not add events.
- Only `/`, `/products`, `/science`, and `/sustainability` retain their paths. Other paths become `/other`; add newly approved public routes to `src/lib/analytics-privacy.ts`.
- Query strings, fragments, credentials, arbitrary event properties, page titles, campaign values, and referrer paths are removed. Only referrer origin is retained.
- No autocapture, forms, clicks, replay, exceptions, heatmaps, performance collection, surveys, feature flag requests, or person profiles. No identification calls.
- Browser Do Not Track prevents initialization and is checked again before sending.
- IDs use memory persistence, so unique visitor/returning visitor metrics across page reloads will be limited. The SDK still uses anonymous IDs for pageview/session counting. IP geolocation is disabled; the ingestion service necessarily receives network traffic.
- Project-wide recording/heatmap settings cannot turn on these explicitly disabled features in this integration. No project-wide settings are modified.

## Checks

Use Node 22.18+ or Node 24 to run `npm run test:analytics`. Run `npm run lint`, `npx tsc --noEmit`, and `npm run build` before release. The tests cover property filtering, URL redaction, DNT, rejected event types, and duplicate/SPA/back navigation counting. They do not replace a deployed browser network check.
