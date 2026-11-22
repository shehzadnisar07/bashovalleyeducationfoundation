---
trigger: always_on
---

# Application Security Rules

- Never commit `.env` files, API keys, passwords, database credentials, or payment secrets. Use `.env.example` with empty placeholder keys only.
- Enforce server-side validation, authentication, and authorization on any protected route or mutation; never rely solely on client-side checks.
- Never handle raw payment card data directly; delegate to PCI-compliant providers or verified static Trust instructions.
- Follow `docs/SECURITY.md` for HTTP security headers, XSS/CSRF prevention, and dependency hygiene.
- Review security implications before implementing sensitive features (forms, uploads, auth, donations) and report any discovered risks immediately.
