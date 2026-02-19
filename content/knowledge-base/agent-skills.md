---
title: Agent Skills Design Guide
tags:
  - skills
  - agents
  - specification
---

# Agent Skills Design Guide

Key principles and practical guidance from Anthropic's [Agent Skills specification](https://agentskills.io/specification) and [blog post](https://claude.com/blog/equipping-agents-for-the-real-world-with-agent-skills) (October 2025).

This document captures the design philosophy behind the Agent Skills spec to guide OFL's conversion of WHoW facilitation patterns into executable agent skills.

Source: [skills repo](https://github.com/Open-Facilitation-Library/skills)

---

## Core Analogy

Building a skill is like **putting together an onboarding guide for a new hire** — you're writing structured instructions that help an agent understand what to do, when, and how.

## Progressive Disclosure

The central design principle. Information loads in layers, not all at once:

| Layer | What's loaded | When |
|-------|--------------|------|
| 1st | `name` + `description` (frontmatter only) | Always, at agent startup |
| 2nd | Full `SKILL.md` body | When the agent decides the skill is relevant |
| 3rd+ | Linked files (`reference.md`, `forms.md`, etc.) | Only as situationally needed |

This means the context window is **effectively unbounded** for skills — the agent reads files selectively, so not everything loads at once. A skill can reference extensive documentation without bloating the agent's startup context.

**Implication for OFL:** A facilitation skill's core instructions (phases, prompts, timing) go in `SKILL.md`. Detailed methodology background, academic references, variant descriptions, and evaluation rubrics go in linked files that the agent reads only when needed.

## SKILL.md Structure

```yaml
---
name: cross-pollination        # Required: displayed at startup
description: >                 # Required: displayed at startup
  Facilitate opinion exposure
  through structured deliberation
---

# Instructions body (loaded on invocation)

## When to Use
...

## Process
...
```

- Keep `SKILL.md` **under 500 lines** — move detailed reference material to separate files
- The frontmatter `description` is what the agent uses to decide relevance — make it precise and specific
- Write instructions in the imperative: "Ask the participant...", "Present three contrasting opinions..."

## Directory Layout

```
skill-name/
├── SKILL.md              # Required: frontmatter + instructions
├── scripts/              # Optional: deterministic code the agent can execute
├── references/           # Optional: detailed background material
└── assets/               # Optional: templates, schemas, data files
```

## Code Execution

Scripts are a **first-class feature**, not an afterthought. Use deterministic code for tasks where LLM token generation would be wasteful or unreliable:

- Sorting and ranking operations
- Data extraction from structured formats
- Statistical calculations
- Template rendering

**For OFL facilitation skills:** Scripts could handle opinion clustering (embedding similarity), vote tallying, timer management, or structured output formatting — things the agent shouldn't improvise.

## Sub-file Organization

> "If certain contexts are mutually exclusive or rarely used together, keeping the paths separate will reduce the token usage."

Good sub-file candidates for facilitation skills:
- **Variant instructions** — different versions of a methodology (e.g., simple vs. adversarial cross-pollination) in separate files
- **Evaluation rubrics** — loaded only when assessing facilitator performance
- **Prompt templates** — phase-specific prompts loaded per-phase rather than all at once
- **Academic background** — methodology origins, research citations, loaded only if the agent needs to explain the approach

## Relationship to MCP

Skills are **complementary** to MCP servers. MCP servers expose tools (APIs, databases, external services). Skills teach agents **complex workflows** that orchestrate those tools.

**For OFL:** An MCP server might provide access to participant data, voting APIs, or analytics dashboards. A skill teaches the agent *how to facilitate* a deliberation session using those tools — when to probe, when to present opposing views, when to summarize.

## Discovery and Invocation

At startup, every installed skill's `name` and `description` are loaded into the system prompt. The agent then:

1. Reads the user's task/message
2. Decides which skill(s) are relevant based on metadata
3. Reads the full `SKILL.md` (layer 2)
4. Optionally reads linked files based on the specific situation (layer 3+)
5. Executes the task using loaded context

Skills are **not explicitly called by users** — the agent autonomously triggers them based on relevance. This means the `description` field is critical for correct matching.

## Security

- Only install skills from trusted sources
- Audit bundled scripts for unexpected behavior
- Check for external network calls
- Review image/resource dependencies within the skill directory

## Converting OFL Patterns to Agent Skills

When converting a WHoW YAML pattern into an Agent Skills format skill:

1. **Frontmatter** — Extract `name` and a concise `description` from the pattern's `id`, `name`, and `why.purpose`
2. **Instructions body** — Convert `how.phases` into step-by-step agent instructions (imperative voice)
3. **Scripts** — Extract automatable phases (from `ai_facilitation.automatable_phases`) into `scripts/`
4. **References** — Move `source`, `why.contraindications`, academic background into `references/`
5. **Assets** — Move `how.artifacts` templates, `variants`, and evaluation criteria into `assets/`
6. **Sub-files** — Split variant instructions into separate files (e.g., `variants/adversarial.md`)

The WHoW schema's `ai_facilitation.suitability` and `human_required_phases` fields directly inform which parts become agent instructions vs. which remain as reference for human facilitators.

---

*Source: [Equipping agents for the real world with Agent Skills](https://claude.com/blog/equipping-agents-for-the-real-world-with-agent-skills) (Anthropic, December 2025)*
