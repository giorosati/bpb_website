#!/usr/bin/env bash
set -euo pipefail

# Usage:
# GITHUB_TOKEN=ghp_xxx OWNER=giorosati REPO=bpb_website BRANCH=master ./scripts/set-branch-protection.sh

if [ -z "${GITHUB_TOKEN:-}" ]; then
  echo "Please set GITHUB_TOKEN environment variable with a PAT that has repo admin rights." >&2
  exit 1
fi
if [ -z "${OWNER:-}" ] || [ -z "${REPO:-}" ]; then
  echo "Please set OWNER and REPO environment variables." >&2
  exit 1
fi
BRANCH="${BRANCH:-master}"

API_URL="https://api.github.com/repos/${OWNER}/${REPO}/branches/${BRANCH}/protection"

cat > /tmp/protection.json <<'JSON'
{
  "required_status_checks": {
    "strict": true,
    "contexts": ["verify-dist", "workflow-safety"]
  },
  "enforce_admins": true,
  "required_pull_request_reviews": {
    "dismiss_stale_reviews": true,
    "require_code_owner_reviews": false,
    "required_approving_review_count": 1
  },
  "restrictions": null
}
JSON

curl -sS -X PUT \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer ${GITHUB_TOKEN}" \
  "${API_URL}" \
  -d @/tmp/protection.json | jq .

echo "Branch protection applied to ${OWNER}/${REPO}/${BRANCH}"
