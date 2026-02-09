# deploy_pages.sh

This script deploys the built `dist/` directory to Cloudflare Pages using `wrangler`.

Usage

```bash
cd h5games_web_mobileapp
# build first
npm run build

# deploy
tools/script/deploy_pages.sh --project <PROJECT_NAME> --branch <BRANCH> --account-id <CLOUDFLARE_ACCOUNT_ID>
```

Environment
- `CLOUDFLARE_ACCOUNT_ID` (optional) — Cloudflare account ID; script accepts `--account-id` to set it for the run.
- `CF_PAGES_BRANCH` (optional) — default branch for Pages deployments (defaults to `production` in the script).

Notes
- The script expects `wrangler` to be installed and authorized. Use `wrangler login` or set an API token.
- If the Pages project does not exist, `wrangler` will prompt to create it interactively.
- Recommended CI flow: build on CI, then run this script non-interactively with API token and account id to publish.

GitHub Actions (required secrets)

- `CLOUDFLARE_API_TOKEN`: API token with Pages write permission.
- `CLOUDFLARE_ACCOUNT_ID`: Cloudflare account ID where Pages project lives.
- `PAGES_PROJECT_NAME`: the Pages project name to deploy to (e.g. `h5games-web-mobileapp`).

Add these under your repository Settings → Secrets → Actions and the workflow will use them.
