# Authentication & Authorization

## Current State
**No authentication or authorization system exists in this repository.**

## Planned Scope (TBD)
The initial public website is informational and does not require user login. Authentication/authorization will only be introduced if an admin dashboard, trustee portal, or donor account area is explicitly requested (`TBD`).

## Security Baseline for Future Auth
If authentication is added later:
- Use established, audited libraries/providers rather than custom cryptography.
- Enforce role-based access control (RBAC) on both server routes and UI views.
- Store sessions securely (`HttpOnly`, `Secure`, `SameSite` cookies) and document the full flow here and in an ADR before implementation.
