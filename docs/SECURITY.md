# Security

## Current State
No executable application code, APIs, database, or environment secrets exist in the repository yet.

## Mandatory Security Controls (For Implementation)
1. **Secrets Management:** Never commit `.env` files, API keys, tokens, or credentials. Use `.env.example` with placeholder keys only.
2. **Input Validation & Sanitization:** Validate all future form/API inputs on the server using strict schemas (e.g., Zod). Reject unexpected fields.
3. **XSS & Injection Prevention:** Avoid `dangerouslySetInnerHTML` unless sanitized; use parameterized queries if a database is added.
4. **HTTP Security Headers:** Configure `Content-Security-Policy`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, and `Strict-Transport-Security` at the framework/host level (`TBD` exact CSP once fonts/analytics are finalized).
5. **Donation & Payment Safety:** Never handle raw card data directly; delegate payment processing to PCI-compliant providers (e.g., Stripe) or static verified Trust bank details (`TBD`).
6. **Abuse Protection:** Rate-limit and add bot protection to any public contact/inquiry endpoint (`TBD`).
7. **Media & Privacy:** Ensure all photos of students, teachers, and community members in `assets/photos/` are approved by BVEF for public web display.

## Related Documentation
- `.agents/rules/application-security.md`
- `.agents/skills/security-review/SKILL.md`
- [AUTHENTICATION_AUTHORIZATION.md](./AUTHENTICATION_AUTHORIZATION.md)
