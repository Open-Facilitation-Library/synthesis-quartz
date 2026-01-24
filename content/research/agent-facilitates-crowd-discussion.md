---
title: "D-agree: An Agent that Facilitates Crowd Discussion"
tags:
  - research
  - AI-facilitation
  - crowd-scale
  - argumentation
---

# D-agree: An Agent that Facilitates Crowd Discussion

*[Ito, Hadfi & Suzuki, 2022](https://doi.org/10.1007/s10726-021-09765-8) — Group Decision and Negotiation*

---

When a city wants to hear from thousands of citizens at once, human facilitators hit a wall. They can't read a thousand simultaneous posts, identify who's making related points, or notice when a promising idea needs more exploration. This paper from [Kyoto University](https://www.kyoto-u.ac.jp/en) presents D-agree, a platform where an AI agent works alongside human facilitators to manage crowd-scale online discussions.

The core insight: **combining AI and human facilitators outperforms either alone.** The AI handles what it's good at—tracking structure, noticing patterns, keeping discussions moving—while humans handle nuance, judgment, and relationship-building.

## How It Works

D-agree structures discussions using the [IBIS framework](https://en.wikipedia.org/wiki/Issue-based_information_system) (Issue-Based Information System), which classifies every post as an **issue** (a question to discuss), an **idea** (a proposed answer), or an **argument** (support or criticism of an idea). A CNN-based classifier tags incoming posts in real-time, building a map of how the discussion branches.

The AI facilitator monitors this structure and intervenes when needed. If an issue has no ideas yet, it prompts for suggestions. If an idea lacks supporting arguments, it asks for reasoning. If a branch of discussion goes quiet while others flourish, it draws attention back.

## The Nagoya Experiments

The researchers ran both small controlled experiments and large-scale deployments with the municipal government of [Nagoya City](https://www.city.nagoya.jp/en/). In the city-wide discussions, the platform collected citizen opinions that were later used in actual policy development—a concrete example of AI-assisted [[knowledge-base/glossary#Deliberative|deliberation]] influencing real decisions.

Three findings stood out:

**The agent increases both quantity and diversity of contributions.** Participants posted more, and explored more distinct lines of reasoning, when the AI facilitator was active.

**Human-AI collaboration beats either alone.** Discussions with both a human facilitator and the AI agent showed higher participant satisfaction than those with just one or the other.

**Participants accepted the AI facilitator.** Satisfaction scores remained above average even in conditions with AI-only facilitation—participants weren't put off by interacting with an automated system.

## Connection to Modern LLM Approaches

D-agree was built before the current wave of large language models—its facilitation rules are hand-crafted based on argument structure, not learned from examples. This makes it less flexible than [[knowledge-base/glossary#Inference-time Skills|inference-time approaches]] using models like GPT-4, but also more predictable and explainable.

The IBIS framework provides a structured scaffolding that modern systems often lack. Papers like [[research/cueing-the-crowd|Cueing the Crowd]] show LLMs can generate useful prompts, but they don't track the logical structure of arguments the way D-agree does. A hybrid approach—LLM fluency with IBIS structure—might combine the best of both.

## Relevance to OFL

D-agree demonstrates that AI facilitation can work at genuine crowd scale, with real policy impact. It also shows the value of explicit structure (the IBIS framework) for automated reasoning about conversations. For the [[evals/why-how-who-framework|Why-How-Who evaluation framework]], D-agree provides evidence that process metrics (argument diversity, branch coverage) correlate with outcome metrics (participant satisfaction, policy uptake).

## Related Research

For a comprehensive survey of AI facilitation approaches, see [[research/evaluation-facilitation-llm-era|Korre et al.'s survey]]. The [[research/fora-corpus|Fora corpus]] provides human facilitator baselines that could benchmark systems like D-agree. For lighter-weight AI assistance, see [[research/cueing-the-crowd|Cueing the Crowd]].
