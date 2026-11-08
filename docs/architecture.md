# MOXORA Studio Architecture

## Purpose

This document describes the architecture direction for the initial MOXORA Studio foundation and the first deliverable: MOXORA Core V0.1. It intentionally reflects a real engineering plan, not a full commercial product claim.

## Design notes

The product is being organized as a modular monolith with explicit boundaries. That keeps implementation manageable while making future extraction of execution, AI, collaboration, and deployment services possible when justified by scale or security concerns.

## Proposed monorepo layout

```text
apps/
  web/                React web application
  desktop/            Electron application (later phase)
  mobile/             React Native app (later phase)
services/
  api/                Express API and domain services
  worker/             queued jobs, build tasks, AI tasks
packages/
  ui/                 design system and shared components
  contracts/          event and API contracts
  config/             linting, formatting, workspace config
infra/
  docker/             local runtime definitions and containers
docs/
prisma/
  schema.prisma
```

## Domain responsibilities

### Web application
- dashboard and project overview
- Explorer, code editor shell, terminal panel, diagnostics panel
- settings, project switching, navigation, accessibility

### API service
- authentication and user state
- project creation and file metadata
- audit logging and permissions
- integrations with Redis, PostgreSQL, and storage

### Worker service
- build jobs, test runs, AI tasks, and execution orchestration
- secure sandbox requests and queue processing

### Data layer
- PostgreSQL as the source of truth for users, projects, permissions, and audit records
- Redis for caches and job queues
- object storage for snapshots, assets, and large file objects

## Data model priority

The first schema should include:
- User
- Team
- TeamMember
- Project
- FileNode
- Session
- AuditLog
- AgentTask
- ExecutionRun

This creates a durable backbone for later additions without overbuilding prematurely.

## Security constraints

The architecture must enforce:
- untrusted code runs only in isolated sandboxes
- restricted network access by default
- host credentials and secrets are never passed to untrusted code
- explicit approvals for destructive actions and production deployments
- immutable audit trails for important actions

## Implementation plan

### Phase 0
- repository setup
- architecture and roadmap documentation
- initial product framing and risk awareness

### Phase 1
- monorepo foundations
- dashboard shell
- web app navigation
- API health endpoint
- database schema foundation
- environment examples and setup guidance

### Phase 2
- Explorer and file management
- Monaco editor shell
- terminal panel
- project persistence

### Later phases
- compiler center, runtime manager, interpreter center
- AI Brain and agents
- design system, visual builder, design-to-code
- collaboration, cloud, mobile, and marketplace

## Known risks

- AI execution, sandboxing, and prompt governance are high-risk areas
- compiler and runtime support varies by OS and installed toolchains
- code generation without verification can create false confidence
- real-time collaboration and presence require careful architecture and connection limits

## Status

This repository now contains the beginning of the architecture and an initial web implementation shell. It should be treated as a genuine start, not as a completed platform.
