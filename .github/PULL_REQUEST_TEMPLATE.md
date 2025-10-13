## Pull request checklist

- [ ] I have confirmed CI checks pass locally or in Actions (including `verify-dist`)
- [ ] This PR does not add or modify workflows that upload the repository root (e.g., `path: '.'`)
- [ ] If this PR changes workflows, I have reviewed `.github/DEPLOYMENT.md` and tested the workflow in a fork

Maintainers: consider enabling branch protection on `master` with the following required checks:

- `verify-dist` (build + dist verification)
- `workflow-safety` (PR guard)
