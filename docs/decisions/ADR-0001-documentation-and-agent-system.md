# ADR-0001: Project Documentation & AI Agent Instruction System

- **Status:** Accepted
- **Date:** 2026-11-22

## Context
The Basho Valley Education Foundation (BVEF) repository is starting from raw foundation documents and photography (`assets/source/`, `assets/photos/`) before any application code is written. Future human developers and Antigravity AI agents need consistent, verifiable guidance to avoid hallucinated features, duplicated logic, or security regressions.

## Decision
Establish a structured documentation and Antigravity customization system prior to Phase 1 implementation:
1. Root governance files (`AGENTS.md`, `README.md`, `CHANGELOG.md`, `CONTRIBUTING.md`).
2. Technical documentation under `docs/` with explicit `TBD` / `Not Yet Implemented` markers for unbuilt systems.
3. Architecture Decision Records under `docs/decisions/`.
4. Antigravity workspace rules in `.agents/rules/` and reusable workflows in `.agents/skills/`.

## Consequences
- All future code changes must be preceded by reading relevant `docs/` and followed by updating `PROJECT_STATUS.md` and `CHANGELOG.md`.
- Clear separation between verified repository facts and planned/proposed architecture.
