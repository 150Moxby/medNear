# MOXORA Studio

**Build Beyond Limits** — by MOXBYTE.

MOXORA Studio is planned as a cross-platform software engineering ecosystem. This repository is the starting point for the project; features are only marked complete when implemented and verified.

## Current status

- **Repository:** initialized as an empty repository when inspected on 2026-11-04.
- **Application code, setup, database, and tests:** not yet implemented or verified.
- **Next step:** establish the JavaScript monorepo foundation and build the first usable web workspace incrementally.

See [the architecture and roadmap](docs/architecture.md) for the modular monolith design, planned folder structure, phased checklist, risks, and explicit feature status.

## Product direction

MOXORA aims to bring together coding, project management, AI-assisted development, language tooling, visual design, testing, security, cloud workflows, collaboration, and a creator ecosystem. The full product is a long-term roadmap, not a feature-complete release.

### MOXORA Core V0.1 target (not yet implemented)

- Responsive project dashboard and authentication
- Project creation, file explorer, and Monaco editor
- Terminal and Node.js/Python execution; C/C++ where supported
- Basic Git integration and AI coding assistance
- PostgreSQL persistence and automated tests

**Security gate:** untrusted code must run only in an isolated, resource-limited sandbox with restricted networking and filesystem access. Do not execute user code on the API or application host. Until that isolation is implemented and tested, code execution is not available.

## Planned repository structure

```text
apps/web/                 React web workspace
apps/desktop/             Electron desktop shell (later phase)
apps/mobile/              React Native client (later phase)
services/api/             Node.js/Express modular API
services/worker/          Queued background jobs (later phase)
packages/ui/               Shared accessible UI
packages/contracts/        API and event contracts
packages/config/           Shared tooling configuration
infra/                     Local development and deployment definitions
docs/                      Architecture, security, setup, API, roadmap
```

## Architecture decisions (initial)

- JavaScript-first modular monolith; extract execution, collaboration, AI, or deployment services only when security or scale justifies it.
- PostgreSQL with Prisma for durable domain data; Redis for queues and short-lived coordination; object storage for project assets and snapshots.
- React, Tailwind CSS, and Monaco for the web workspace; Electron and React Native are later clients.
- Explicit API contracts, permissions, audit events, resource limits, and human approvals for destructive or high-risk actions.
- English and Kinyarwanda are initial localization targets; French and Swahili are planned.

## Documentation

- [Architecture, plan, and status](docs/architecture.md)
- [Security model and execution gate](docs/security.md)
- [Roadmap and backlog](docs/roadmap.md)

## License

No license has been selected. Do not assume this repository grants permission to use, modify, or redistribute its contents. MOXBYTE should select and add an appropriate license before public distribution or commercial contributions.
