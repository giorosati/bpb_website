Deployment guidance for GitHub Pages

This repository uses GitHub Actions to build the Vite app and publish the
generated `dist/` directory to GitHub Pages. Follow these rules to avoid
accidentally publishing the repository source (which causes missing built
assets and 404s):

- The canonical workflow is `.github/workflows/deploy.yml`. It runs `npm ci` and
  `npm run build` and then uploads `./dist` with `actions/upload-pages-artifact`.

- Do NOT add or restore any workflow that uploads the repository root or the
  source tree to Pages (for example, `path: '.'`). That will overwrite the
  published content with the repo files (including an `index.html` that points
  to `/src/main.jsx`) and will break the site.

How to re-run a deployment

1. Go to the repository Actions tab in GitHub and find the "Deploy to GitHub
   Pages" workflow run for the branch `master`.
2. Open the run and inspect the `build` job logs. If the `Build` or
   `Upload artifact` steps failed, fix the error locally and push a new commit.
3. If the build succeeded but the site is still wrong, click "Re-run jobs".

If you need to trigger a deploy from the command line, create an empty commit:

```bash
git commit --allow-empty -m "Trigger GitHub Actions: redeploy"
git push origin master
```

If you want me to inspect Actions logs, grant a short-lived Personal Access
Token (PAT) with `repo` and `workflow` scopes or paste the run URL/console
output here.

Contact

If anything unexpected happens during deployment, open an issue and include:
- the failing workflow run URL
- the error messages from the Build or Upload steps
- the commit SHA being deployed

Pages UI quick-check (what to verify in GitHub Settings → Pages)

1. Custom domain: should be set to `bluepepperbookkeeping.com`. This is equivalent
  to having `public/CNAME` in the repo, but confirm the Pages settings page shows
  the same domain.
2. Enforce HTTPS: enable this checkbox so visitors are redirected to HTTPS.
3. Source: Verify the "Build and deployment" section indicates "GitHub Actions".
  If a different source is shown (or a previous Pages deployment artifact exists),
  the site may serve stale or wrong content.
4. Check the latest deployment details: click the Pages URL and open the
  "View deployment
