# API Documentation

## Current State
**No APIs exist in this repository.** No HTTP endpoints, Route Handlers, GraphQL schemas, or external service integrations are currently implemented.

## Planned / Potential Endpoints (TBD)
- `POST /api/contact` (`TBD`) — Contact/partnership form submission handler (rate-limited, schema-validated, spam-protected).
- Donation / Payment webhooks (`TBD`) — Only applicable if an integrated payment processor (e.g., Stripe) is selected instead of static bank details or external links.

## Standards for Future APIs
When endpoints are added:
- Document method, path, request/response schemas, status codes, authentication requirements, and rate limits here.
- Follow `.agents/rules/backend-development.md` and `.agents/rules/application-security.md`.
