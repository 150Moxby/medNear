# MOXORA Studio

Build Beyond Limits.

MOXORA Studio is a professional, AI-powered engineering platform and ecosystem for product teams, software engineers, designers, QA, security engineers, cloud operators, and creators.

## Current status

This repository now contains the initial project foundation for MOXORA Core V0.1. The work is intentionally honest about scope:

- Completed: monorepo structure, initial architecture documents, dashboard shell, API health endpoint, Prisma schema foundation, environment setup examples
- In progress: Phase 1 workspace shell, project architecture, and secure execution planning
- Planned: authentication, editor, project persistence, AI assistant, compiler tooling, security automation, cloud deployment, collaboration, mobile, marketplace, and full product platform modules

## Product vision

MOXORA Studio is designed to unify:
- developer tooling
- AI coding agents and project memory
- design systems and prototype workflows
- compiler/runtime infrastructure
- back-end and database tooling
- testing, security, and reliability automation
- cloud and deployment operations
- team collaboration and community marketplace features

## Repository structure

```text
apps/
  web/
services/
  api/
packages/
  ui/
  contracts/
  config/
infra/
  docker/
docs/
prisma/
  schema.prisma
```

## Architecture

The product is being structured as a modular monolith with a clear future path to isolate high-load execution, AI, collaboration, and deployment services. Early architecture decisions:
- React + Vite for the web application shell
- Express + Node.js for API services
- PostgreSQL + Prisma for durable project and user data
- Redis for cache and job queues
- Object storage for large media, snapshots, and project assets
- execution sandboxes isolated from the app and API hosts

## Security-first note

All user code and uploaded projects must be treated as untrusted. Execution must happen only inside isolated, ephemeral sandboxes with resource and network restrictions, no host secret exposure, and approvals for high-risk actions.

## Quick start

```bash
npm install
npm run dev --workspace apps/web
npm run dev --workspace services/api
```

## Documentation

- [Architecture](docs/architecture.md)
- [Security model](docs/security.md)
- [Roadmap](docs/roadmap.md)

## Current implementation summary

The repository is intentionally a real starting point, not a mockup or a fake "finished" platform. It contains a working foundation for the product to grow toward the complete ecosystem described in the roadmap.
