---
title: "Evaluation and Facilitation of Online Discussions in the LLM Era"
tags:
  - research
  - LLM
  - survey
  - evaluation
  - facilitation
---

# Evaluation and Facilitation of Online Discussions in the LLM Era

*[Korre et al., 2025](https://arxiv.org/abs/2503.01513) — Athens & INSEAD*

---

If you want to build an AI facilitator, what should it actually measure and respond to? This survey from [Athens University of Economics](https://www.aueb.gr/en) and [INSEAD](https://www.insead.edu/) synthesizes research from NLP and social science to create a taxonomy of discussion quality dimensions—and maps which ones LLMs can currently address.

## The Taxonomy

The survey organizes discussion quality into four broad areas:

**Structure & Logic** — Is the conversation coherent? Are arguments well-formed? Is the discussion staying on topic or drifting?

**Social Dynamics** — Is the conversation civil? Are there power imbalances? Is disagreement constructive or destructive?

**Emotion & Behavior** — Are participants showing empathy? Is there toxicity? What's the emotional temperature?

**Engagement & Impact** — Are people actually participating? Is anyone being persuaded? Are diverse viewpoints represented?

For each dimension, the survey catalogs both traditional NLP approaches (pre-LLM classifiers, rule-based systems) and emerging LLM approaches. The gap between what's *measurable* and what's *actionable* becomes clear: we can detect many things, but intervening appropriately is harder.

## Defining the Terms

The survey usefully distinguishes terms that often get conflated:

| Term | Definition |
|------|------------|
| [[knowledge-base/glossary#Moderation|Moderation]] | Ensuring orderly interaction by enforcing guidelines |
| [[knowledge-base/glossary#Facilitation|Facilitation]] | Encouraging participation and organizing flow |
| [[knowledge-base/glossary#Deliberative|Deliberation]] | Structured discussion with reasoned argumentation |
| Dialogue | Collaborative interaction aimed at understanding |
| Debate | Adversarial interaction focused on persuasion |

These aren't just semantic distinctions. An AI designed for *moderation* (removing rule violations) behaves very differently from one designed for *facilitation* (drawing out quiet voices). Conflating them leads to systems that do one thing while claiming to do another.

## The Escalation Ladder

One useful framework the survey identifies: facilitators use an **escalation ladder** of intervention strength. Start with gentle prompts and questions. If those don't work, try summarization and redirection. Only resort to direct correction or rule enforcement when softer approaches fail.

Current AI systems tend to lack this nuance. They either intervene too weakly (suggestions that get ignored) or too strongly (deletions and warnings that feel heavy-handed). The ladder concept suggests AI facilitators need routing logic to select appropriate intervention strength.

## Warning Signs and Growth Signs

The survey identifies observable indicators that predict conversational trajectories:

**Orange flags** (derailment risk):
- Politeness violations
- Power imbalances emerging
- Disagreement turning personal
- Toxicity spikes
- Negative sentiment trends

**Green flags** (constructive growth):
- Good argument structure
- Balanced [[knowledge-base/glossary#Turn-taking|turn-taking]]
- Empathic responses
- High engagement
- Viewpoint diversity

An AI facilitator monitoring these signals could intervene early when things start going wrong, rather than waiting for full-blown conflict.

## What LLMs Can (and Can't) Do

The survey maps each quality dimension to current LLM capabilities. LLMs are reasonably good at:
- Detecting argument structure
- Identifying topic drift
- Spotting toxicity
- Generating polite rewrites
- Summarizing discussion state

They're weaker at:
- Understanding power dynamics
- Distinguishing constructive from destructive disagreement
- Judging when intervention is appropriate
- Maintaining consistent facilitation style

## Research Gaps

Four gaps stand out:
1. **Limited real-world deployment** — Most studies are lab experiments
2. **No longitudinal evaluation** — How do facilitated communities evolve over time?
3. **Cross-cultural validation needed** — What works in one culture may fail in another
4. **Hybrid human-AI facilitation understudied** — The [[research/agent-facilitates-crowd-discussion|D-agree]] finding that combined facilitation works best needs replication

## Connection to OFL

This survey is essentially a literature review of everything relevant to the [[evals/why-how-who-framework|Why-How-Who framework]]'s "How" dimension. It provides:

- A vocabulary for describing facilitation interventions
- Metrics for each quality dimension
- Baseline capabilities for LLM approaches
- Research directions that OFL could pursue

The escalation ladder and warning-sign frameworks are particularly actionable for designing [[knowledge-base/concepts/ai-facilitation-approaches|AI facilitation systems]].

## Related Research

For empirical facilitation data, see the [[research/fora-corpus|Fora corpus]]. For moderation analysis specifically, see the [[research/WHoW-Framework|WHoW Framework]]. For practitioner perspectives on AI facilitation, see the [[research/jigsaw-facilitation-ai-era|Jigsaw ethnographic study]].
