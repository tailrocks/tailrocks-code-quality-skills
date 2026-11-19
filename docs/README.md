# Code quality skills guides

This package holds fourteen skills. The skills audit code,
diagnose root causes, simplify and remediate with proof, run
improvement plans, guard shrink-only quality bounds, and keep
repository instruction files coherent.

One skill is model-selectable: `tailrocks-agents-md` adds one
instruction rule, and only with exact task authorization.
Thirteen skills are user-only and need an explicit human
command on every client.

## Guides

- [Installation](installation.md) gives the native host routes.
- [Usage](usage.md) shows how to select a skill and use its arguments.
- [Runtime requirements](runtime.md) lists the tools and packaged resources.
- [Package structure](architecture.md) explains file ownership.
- [Model choices](models.md) explains role selection and effort.
- [Compatibility](compatibility.md) records host behavior and limits.
- [Verification](verification.md) lists package checks and observed evidence.
- [Maintenance](maintenance.md) gives generator and release procedures.
- [Troubleshooting](troubleshooting.md) helps diagnose installation or use.

## Skills

| Skill | Task |
| --- | --- |
| `tailrocks-improve-audit` | Audit a repository. User-only. |
| `tailrocks-improve-security-audit` | Audit security. User-only. |
| `tailrocks-improve-plan` | Write one standalone plan. User-only. |
| `tailrocks-improve-execution` | Execute one plan in isolation. User-only. |
| `tailrocks-improve-reconcile` | Reconcile the plan backlog. User-only. |
| `tailrocks-code-health-audit` | Measure one debt class. User-only. |
| `tailrocks-code-health` | Establish or tighten one bound. User-only. |
| `tailrocks-root-cause` | Diagnose one defect. User-only. |
| `tailrocks-remediate` | Apply one approved correction. User-only. |
| `tailrocks-simplify-audit` | Find measured removals. User-only. |
| `tailrocks-simplify` | Apply approved removals. User-only. |
| `tailrocks-agents-md` | Add one instruction rule. |
| `tailrocks-agents-md-audit` | Audit instructions. User-only. |
| `tailrocks-agents-md-sync` | Apply one approved repair. User-only. |

Each skill body lives in its own directory under `skills/`.
Read `skills/tailrocks-improve-audit/SKILL.md` for one
complete example.

## Requirements

See [runtime requirements](runtime.md) for the tools and files the skills use.
