# Security model and execution gate

## Principle

Treat every project, uploaded asset, and generated source file as untrusted input.

## Mandatory controls

- Run user code only in isolated, ephemeral sandboxes.
- Apply CPU, memory, disk, and time limits.
- Restrict or disable networking by default.
- Sandboxes must not have access to host secrets, credentials, or production data.
- All sensitive data must be encrypted in transit and at rest.
- Use RBAC and project-level permissions for code and deployment access.
- Require human approval for dangerous actions such as destructive deletes, production deployment, secret access, and high-risk agent actions.

## Execution boundary

The application should submit code execution requests to a dedicated worker or sandbox service rather than running directly inside the web or API process. The sandbox service should isolate runtime state, resource limits, and output capture.

## Current status

This repo includes the architectural requirement and documentation for the execution gate. The actual runtime sandbox implementation is a planned future milestone and must not be described as complete until it is implemented and verified.
