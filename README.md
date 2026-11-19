# tailrocks-code-quality-skills

One portable package with fourteen skills. The skills audit
code, diagnose root causes, simplify and remediate with
proof, run improvement plans, guard shrink-only quality
bounds, and keep repository instruction files coherent. One
skill is model-selectable. Thirteen skills are user-only and
need an explicit human command.

## Skills

| Skill | Task |
| --- | --- |
| [`tailrocks-improve-audit`](skills/tailrocks-improve-audit/SKILL.md) | Audit a repository. User-only. |
| [`tailrocks-improve-security-audit`](skills/tailrocks-improve-security-audit/SKILL.md) | Audit security. User-only. |
| [`tailrocks-improve-plan`](skills/tailrocks-improve-plan/SKILL.md) | Write one standalone plan. User-only. |
| [`tailrocks-improve-execution`](skills/tailrocks-improve-execution/SKILL.md) | Execute one plan in isolation. User-only. |
| [`tailrocks-improve-reconcile`](skills/tailrocks-improve-reconcile/SKILL.md) | Reconcile the plan backlog. User-only. |
| [`tailrocks-code-health-audit`](skills/tailrocks-code-health-audit/SKILL.md) | Measure one debt class. User-only. |
| [`tailrocks-code-health`](skills/tailrocks-code-health/SKILL.md) | Establish or tighten one bound. User-only. |
| [`tailrocks-root-cause`](skills/tailrocks-root-cause/SKILL.md) | Diagnose one defect. User-only. |
| [`tailrocks-remediate`](skills/tailrocks-remediate/SKILL.md) | Apply one approved correction. User-only. |
| [`tailrocks-simplify-audit`](skills/tailrocks-simplify-audit/SKILL.md) | Find measured removals. User-only. |
| [`tailrocks-simplify`](skills/tailrocks-simplify/SKILL.md) | Apply approved removals. User-only. |
| [`tailrocks-agents-md`](skills/tailrocks-agents-md/SKILL.md) | Add one instruction rule. |
| [`tailrocks-agents-md-audit`](skills/tailrocks-agents-md-audit/SKILL.md) | Audit instructions. User-only. |
| [`tailrocks-agents-md-sync`](skills/tailrocks-agents-md-sync/SKILL.md) | Apply one approved repair. User-only. |

Each skill body lives in its own directory. Read
`skills/tailrocks-improve-audit/SKILL.md` for one complete
example.

## Install

Install one complete package in your host's chosen scope. The [Tailrocks
catalog](https://github.com/tailrocks/tailrocks-skills) selects the source commit.
Use the route for your host.

| Host | Native install route |
| --- | --- |
| Claude Code | [Marketplace plugin](docs/installation.md#claude-code) |
| Codex | [Marketplace plugin](docs/installation.md#codex) |
| Grok Build | [Marketplace plugin](docs/installation.md#grok-build) |
| Muse Code | [Marketplace snapshot](docs/installation.md#muse-code) |
| omp | [Marketplace plugin](docs/installation.md#omp) |
| OpenCode V2 | [Git package](docs/installation.md#opencode) |
| Amp | [Directory plugin](docs/installation.md#amp) |
| Antigravity | [Local plugin installer](docs/installation.md#antigravity) |
| pi | [Git package](docs/installation.md#pi) |
| Kimi Code | [Marketplace manager](docs/installation.md#kimi-code) |

Run these commands to install from the Claude Code marketplace.

```sh
claude plugin marketplace add tailrocks/tailrocks-skills
claude plugin install tailrocks-code-quality-skills@tailrocks --scope user
```

See [runtime requirements](docs/runtime.md) for tools and files the skills use.

## Use

Select the owner for the requested work. To audit a checkout
on Claude Code (session):

```text
/tailrocks-code-quality-skills:tailrocks-improve-audit ./my-repo
```

The skill returns one evidence-ranked report with verified
defects, direction options, and rejected candidates. The
skill is read-only. See `docs/usage.md` for every owner,
more examples, and the lifecycle boundary.

## Documentation

- [Package guide](docs/README.md)
- [Installation](docs/installation.md)
- [Usage](docs/usage.md)
- [Runtime requirements](docs/runtime.md)
- [Model settings](docs/models.md)
- [Compatibility and verification](docs/compatibility.md)
- [Maintenance](docs/maintenance.md)

## Update and remove

Use [the host's update and removal steps](docs/installation.md).
For a pinned Git package, install the new catalog revision and use one copy in
the chosen scope.

## Contribute

Open an issue or a pull request on GitHub. Write all new and
changed prose in ASD-STE100 Simplified Technical English,
Issue 9 rules. Run `alint check`, the strict-JSON check, and
the frontmatter check before the pull request. See
`docs/maintenance.md` for the full list. Never add evaluation
content.

## License

Apache License, Version 2.0. See `LICENSE` for the full text.
