# Instruction policy

One repository keeps one instruction policy. These rules govern all
three instruction skills. Each skill links this file. Update all
copies together.

## One rule in one place

Each rule lives in exactly one instruction file. The owner is the
deepest directory whose entire subtree obeys the rule. Prove root
ownership. Never assume it. Never move a rule upward only because
an ancestor already has an instruction file. Never repeat an
ancestor rule in a descendant file. A descendant states an override
only when its scope genuinely differs. The override names the
ancestor contract.

## One file per directory

Each owning directory keeps one regular `AGENTS.md` file. Verify which
entry form the declared client loads before creating or repairing an entry.

- For a relative symlink, verify that its raw target is the bare filename
  `AGENTS.md` in the same directory.
- For a native import, verify that the loader supports the import syntax.
  A Claude `CLAUDE.md` can contain the single line `@AGENTS.md`.
  Resolve the import relative to that file. Verify that it loads the
  same-directory `AGENTS.md` and adds no instructions.
  [Claude Code instruction imports](https://code.claude.com/docs/en/memory)
- For a regular copy, compare its bytes with the owning file.

A verified import is a valid client entry. Preserve it during unrelated
work. Report additional instructions, a different target, or a divergent
copy with the exact evidence. Record unverified loader behavior separately.

## Load chain

The effective instructions for one path are the ancestor chain
from the root to the deepest owning directory. Measure file bytes
and chain bytes. Never estimate them. Root overbreadth and large
files are review triggers, not automatic defects.

## Skill boundary

`tailrocks-agents-md` adds one rule.
`tailrocks-agents-md-audit` examines instructions and proposes
repairs. `tailrocks-agents-md-sync` applies one approved repair.
Audit findings authorize no mutation. Sync invents no rule and no
approval.
