# Core Components Comparator B

A separate test deployment of the alternative TaRL research-coding methodology, presented through the same WWHGE-style interface as Product A.

## Important
- This comparator codes **Teaching at the Right Level only**.
- It uses the colleague's 0-3 scale: 0 no evidence, 1 named only, 2 described, 3 specified.
- It profiles the document, extracts evidence in chunks, verifies quotes against the submitted text, then scores from the verified evidence.
- It does not modify or depend on Product A.

## Required Cloudflare secret
Create a Worker secret named `ANTHROPIC_API_KEY` containing an Anthropic API key with access to the configured model.

Optional variable: `ANTHROPIC_MODEL` (defaults to `claude-opus-5-5`, matching the supplied pilot configuration).

## Deploy
1. Create a new GitHub repository, e.g. `core-components-assessment-tool-comparator-b`.
2. Upload all files from this folder to the repository root.
3. In Cloudflare Workers & Pages, create a new Worker by importing that GitHub repository.
4. Build command: `npm run build`
5. Deploy command: `npx wrangler deploy`
6. Add secret `ANTHROPIC_API_KEY` under Worker Settings > Variables and Secrets.
7. Redeploy.
8. Open `/api/health` to confirm `Comparator-B-1.0`.

Product A remains untouched.
