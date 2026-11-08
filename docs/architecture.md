# MOXORA Studio Architecture

## Purpose

This document defines the initial structure and the realistic implementation plan for MOXORA Studio, starting with MOXORA Core V0.1.

## Monorepo layout

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

## Responsibilities

### Web app
- dashboard shell
- workspace navigation
- project activity panel
- future Monaco editor integration

### API service
- project metadata and authentication boundaries
- domain data exposure
- health and project list endpoints

### Data layer
- PostgreSQL via Prisma for durable structures
- Redis for caching and queueing
- object storage for assets and snapshots

## Security gate

Every code execution request must be routed through an isolated sandbox system. The application may not run untrusted code in the host environment directly.

## Roadmap status

- Phase 0: architecture and repo foundation — complete enough to continue
- Phase 1: dashboard and workspace shell — implemented as a skeleton
- Later phases: auth, editor, compiled execution, AI systems, cloud tooling, mobile, marketplace — planned

## Risk summary

The biggest product risks are execution sandboxing, compiler/runtime support across systems, and maintaining honest documentation when features are not yet implemented.
