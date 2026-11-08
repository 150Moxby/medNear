# Security model and execution gate

## Principle

All user code and uploaded content must be treated as untrusted input.

## Required controls

- Run untrusted code only in isolated, ephemeral sandboxes
- Enforce CPU, memory, disk, and time limits
- Restrict networking by default
- Prevent access to host credentials, secrets, or production data
- Require approvals for destructive or production-impacting operations
- Keep audit trails for critical actions

## Current status

The architecture documents these rules, and the first implementation phase provides the project skeleton. The actual execution sandbox implementation is still a future milestone.
