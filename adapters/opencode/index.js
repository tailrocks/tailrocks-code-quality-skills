import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { Plugin, Skill } from '@opencode/plugin'
import { parse } from 'yaml'

const skillEntries = [
  {
    "id": "tailrocks-agents-md",
    "explicitOnly": false
  },
  {
    "id": "tailrocks-agents-md-audit",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-agents-md-sync",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-code-health",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-code-health-audit",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-improve-audit",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-improve-execution",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-improve-plan",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-improve-reconcile",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-improve-security-audit",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-remediate",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-root-cause",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-simplify",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-simplify-audit",
    "explicitOnly": true
  }
]

export default Plugin.define({
  id: 'tailrocks-code-quality-skills',
  async setup(ctx) {
    const skills = await Promise.all(skillEntries.map(async ({ id, explicitOnly }) => {
      const url = new URL(`../../skills/${id}/SKILL.md`, import.meta.url)
      const path = fileURLToPath(url)
      const source = await readFile(url, 'utf8')
      const frontmatter = /^\uFEFF?---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/.exec(source)
      if (!frontmatter) {
        throw new Error(`Missing YAML frontmatter in ${path}`)
      }

      const { name, description } = parse(frontmatter[1]) ?? {}
      if (name !== id || typeof description !== 'string' || !description.trim()) {
        throw new Error(`Invalid name or description in ${path}`)
      }

      return {
        id: Skill.ID.make(id),
        name: Skill.Name.make(name),
        description,
        path: Skill.Info.fields.path.make(path),
        content: source.slice(frontmatter[0].length),
        autoinvoke: !explicitOnly,
      }
    }))

    await ctx.skill.transform((editor) => {
      for (const skill of skills) editor.add(skill)
    })
  },
})
