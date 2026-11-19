// Native Amp directory plugin for tailrocks-code-quality-skills.
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

export default async function (amp) {
  for (const { id, explicitOnly } of skillEntries) {
    await amp.registerSkill({ path: `skills/${id}`, listed: !explicitOnly })
  }
}
