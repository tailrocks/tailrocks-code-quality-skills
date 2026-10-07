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

Each skill body lives in its own directory. Read
`skills/tailrocks-improve-audit/SKILL.md` for one complete
example.

## Install

Install the package from the central `tailrocks` marketplace.
Use the qualified id `tailrocks-code-quality-skills@tailrocks`
wherever the client accepts it. Each row links its full
section in `docs/installation.md`.

| Agent | Method |
| --- | --- |
| Claude Code | [Marketplace install](docs/installation.md#claude-code) |
| Codex | [Marketplace add](docs/installation.md#codex) |
| Amp | [Per-skill add](docs/installation.md#amp) |
| Muse Code | [Marketplace install](docs/installation.md#muse-code) |
| OpenCode | [Skill-directory copy](docs/installation.md#opencode) |
| Antigravity | [Local-path install](docs/installation.md#antigravity) |
| Grok Build | [Marketplace install](docs/installation.md#grok-build) |
| Kimi Code | [In-session manager](docs/installation.md#kimi-code) |

Quick start on Claude Code (shell):

```sh
claude plugin marketplace add tailrocks/tailrocks-skills
claude plugin install tailrocks-code-quality-skills@tailrocks --scope user
```

Audits need Git and read access to the target repository.
Target verification commands need the repository toolchain.
No skill needs `gh`.

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

- `docs/README.md` indexes the guides.
- `docs/installation.md` installs the package on eight
  agents.
- `docs/usage.md` shows how to select each skill.
- `docs/compatibility.md` records each route result.
- `docs/maintenance.md` lists checks, policy, and release
  steps.
- `docs/troubleshooting.md` fixes common failures.

## Update and remove

Refresh the marketplace, then the plugin. Remove the plugin
when it is no longer needed. Commands per agent:

- Claude Code: `claude plugin update
  tailrocks-code-quality-skills@tailrocks` or `claude plugin
  marketplace update tailrocks`; remove with `claude plugin
  uninstall tailrocks-code-quality-skills`.
- Codex: `codex plugin marketplace upgrade tailrocks`;
  remove with `codex plugin remove
  tailrocks-code-quality-skills@tailrocks`.
- Muse: `muse plugins marketplace update tailrocks`, then
  the remove plus install sequence; remove with `muse
  plugins remove tailrocks-code-quality-skills@tailrocks`.
- Kimi session: no `update` subcommand; remove with
  `/plugins remove tailrocks-code-quality-skills`, then
  `/reload`.
- Amp, OpenCode, Antigravity, Grok: see
  `docs/installation.md` for the exact steps.

## Contribute

Open an issue or a pull request on GitHub. Write all new and
changed prose in ASD-STE100 Simplified Technical English,
Issue 9 rules. Run `alint check`, the strict-JSON check, and
the frontmatter check before the pull request. See
`docs/maintenance.md` for the full list. Never add evaluation
content.

## License

Apache License, Version 2.0. See `LICENSE` for the full text.
