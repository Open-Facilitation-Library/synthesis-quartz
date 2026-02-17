---
title: AI Facilitation Workflows
---

# AI Facilitation Workflows

A library of agent workflow definitions documenting how real platforms orchestrate AI agents to facilitate group processes. Each workflow captures agent roles, participant interaction models, stage pipelines, and data flow.

**Inclusion criteria:** Does an AI agent actively conduct, guide, or mediate a conversation or group process? Tools that only collect votes, structure arguments, or analyze data post-hoc are out of scope.

Source: [workflows repo](https://github.com/Open-Facilitation-Library/workflows)

## Platforms

| Platform | Source | Type | Agents | Scale |
|----------|--------|------|--------|-------|
| [Anthropic Interviewer](https://github.com/Open-Facilitation-Library/workflows/blob/main/products/anthropic-interviewer.yaml) | researched | Async 1-on-1 interviews | Interviewer + Analyst | 1,000+ |
| [Bot Mediation](https://github.com/Open-Facilitation-Library/workflows/blob/main/products/bot-mediation.yaml) | researched | AI dispute mediation | AI Bot Mediator | 2 (bilateral) |
| [ComplexChaos](https://github.com/Open-Facilitation-Library/workflows/blob/main/products/complexchaos.yaml) | inferred | Async organizational alignment | Dialogue Agent + Pattern Synthesizer | 5-200 |
| [CrowdSmart](https://github.com/Open-Facilitation-Library/workflows/blob/main/products/crowdsmart.yaml) | researched | Generative Collective Intelligence | Collective Reasoning Agent + Pairwise Engine + Private LM | 10-10,000 |
| [Habermas Machine](https://github.com/Open-Facilitation-Library/workflows/blob/main/products/habermas-machine.yaml) | verified | Iterative consensus | Statement Generator + Critique Processor | 5-1,000 |
| [Harmonica](https://github.com/Open-Facilitation-Library/workflows/blob/main/products/harmonica.yaml) | verified | Async structured deliberation | Facilitator + Cross-Pollinator + Synthesizer | 3-500 |
| [Juno](https://github.com/Open-Facilitation-Library/workflows/blob/main/products/juno.yaml) | inferred | Unscripted AI interviews | Interviewer + Thematic Analyst | 5-1,000 |
| [Listen](https://github.com/Open-Facilitation-Library/workflows/blob/main/products/listen.yaml) | inferred | AI research pipeline | Recruiter + Interviewer + Analyst | 10-1,000 |
| [Orchidea](https://github.com/Open-Facilitation-Library/workflows/blob/main/products/orchidea.yaml) | researched | AI workshop facilitation | AI Ideator + Proposal Drafter | 3-500 |
| [Outset](https://github.com/Open-Facilitation-Library/workflows/blob/main/products/outset.yaml) | researched | Multimodal AI interviews | AI Moderator + Fraud Detector + Analyst | 10-5,000 |
| [Parlay Ideas](https://github.com/Open-Facilitation-Library/workflows/blob/main/products/parlay.yaml) | researched | Classroom discussion facilitation | Parlay Genie + Participation Tracker | 5-40 |
| [Remesh](https://github.com/Open-Facilitation-Library/workflows/blob/main/products/remesh.yaml) | inferred | Real-time collective dialogue | Clustering Engine + Consensus Predictor + Human Moderator | 20-5,000 |
| [Talk to the City](https://github.com/Open-Facilitation-Library/workflows/blob/main/products/talk-to-the-city.yaml) | verified | Elicitation + clustering | WhatsApp Bot + Topic Clusterer + Visualizer | 10-10,000 |
| [Thinkscape](https://github.com/Open-Facilitation-Library/workflows/blob/main/products/thinkscape.yaml) | researched | Swarm intelligence | Conversational Surrogates + Orchestrator | 14-400 |

## Source Types

- **verified** — documented from open-source code or detailed published methodology
- **researched** — documented from academic papers or detailed technical write-ups
- **inferred** — reconstructed from public marketing and website descriptions

## Workflow Schema

Each YAML file describes:

- **Agents** — roles like facilitator, synthesizer, clustering engine, with type (`llm`, `human`, `hybrid`, `system`)
- **Participants** — input mode (text/voice/vote/mixed), interaction style, synchronicity, scale, anonymity
- **Stages** — ordered pipeline: input → processing → memory → output
- **Patterns** — which OFL facilitation patterns the platform implements (e.g., cross-pollination, Delphi)

See the [schema definition](https://github.com/Open-Facilitation-Library/workflows/blob/main/schema/workflow-schema.yaml) for full details.

## How This Fits into OFL

Workflows are one of three complementary layers:

1. **Patterns** (this knowledge base) — abstract facilitation methodologies
2. **[Agent Skills](https://github.com/Open-Facilitation-Library/skills)** — executable instructions following the [Agent Skills spec](https://agentskills.io/specification)
3. **Workflows** (this page) — how real platforms wire agents into complete facilitation systems
