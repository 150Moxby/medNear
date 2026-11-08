# MOXORA Studio

Build Beyond Limits. By MOXBYTE.

MOXORA Studio is a professional software engineering ecosystem for coding, design, AI-assisted workflows, testing, security, cloud delivery, collaboration, and creator tooling. This repository is the curated starting point for the project.

## Current implementation status

This repo now contains a practical foundation for the project, not a finished product.

Completed in this repository:
- Monorepo structure for the first web and API layers
- Architecture and security documentation
- Initial React + Vite web dashboard shell for MOXORA Core V0.1
- Initial Node.js/Express API service with health endpoint
- Prisma schema for core project domains
- Setup guidance and environment examples

Planned or not yet implemented:
- Full authentication and RBAC
- Real project persistence and file management
- Monaco editor integration
- Terminal execution sandbox
- AI coding assistant
- Git workflows and branch integration
- Secure isolated execution environment
- Desktop and mobile clients
- Full compiler/language tooling and visual design systems

## Product vision

The long-term target is the full MOXORA ecosystem described in the roadmap, including:
- MOXORA Code, Explorer, Terminal, Debugger, Build Engine, Package Manager
- AI Brain, Agent Council, AI Team, Memory, Voice Studio, Documentation Intelligence
- Compiler Center, Language Forge, Interpreter Center, Runtime Manager
- DesignSpace, Visual Builder, Design-to-Code workflows
- API Studio, Data Architect, Auth Studio, Event Engine
- Game Studio, AI Model Lab, Hardware Lab
- Team collaboration, marketplace, academy, analytics, and enterprise readiness

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
prisma/
  schema.prisma
docs/
```

## Core architecture

We are starting from a modular monolith:
- Web application for the user experience
- Node.js API for project and domain services
- Prisma/PostgreSQL as the durable source of truth
- Redis for cache, queueing, and short-lived coordination
- Object storage for larger assets and snapshots
- Execution sandboxes separated from the app and API hosts

This keeps the radical product vision manageable while preserving explicit module boundaries and future scalability.

## Security model

All user code must be treated as untrusted. The product must run it only in ephemeral, resource-limited sandboxes with:
- CPU, RAM, disk, and time restrictions
- restricted or disabled networking by default
- limited filesystem access
- no host credentials or secrets exposure
- mandatory approvals for destructive or sensitive actions

Until those controls are implemented as a tested system, code execution is intentionally left as an explicit future phase.

## Quick start

1. Copy `.env.example` to `.env` and adjust values.
2. Install workspace dependencies:
   
   ```bash
   npm install
   ```
3. Start the web app:
   
   ```bash
   npm run dev --workspace apps/web
   ```
4. Start the API:
   
   ```bash
   npm run dev --workspace services/api
   ```

## Documentation

- [Architecture](docs/architecture.md)
- [Security model](docs/security.md)
- [Roadmap and backlog](docs/roadmap.md)

## Notes

This project is intentionally honest about scope: it is a foundation for MOXORA Core V0.1, with the product roadmap continuing toward the complete ecosystem described in the documentation.
