---
title: AI Moderation and Chatbot Facilitation
tags:
  - research
  - AI
  - chatbots
  - moderation
---

# AI Moderation and Chatbot Facilitation

*Research on automated facilitation systems*

---

Can a chatbot facilitate a deliberation? The question has shifted from "theoretically possible" to "increasingly practical" as language models improve. This page surveys the landscape of AI-assisted and AI-led facilitation systems.

## The Automation Spectrum

Not all AI facilitation is the same. Systems range from light-touch assistance to full autonomy:

**Assistive** — AI supports a human facilitator with real-time analytics, participation tracking, or suggested interventions. The human remains in control.

**Augmented** — AI handles routine tasks autonomously (auto-summarization, topic tracking) while humans manage relationship and judgment calls.

**Autonomous** — AI leads facilitation directly, as in the [[research/agent-facilitates-crowd-discussion|D-agree]] system or [Kim et al.'s moderator chatbot](https://doi.org/10.1145/3449220).

**Ensemble** — Multiple AI agents coordinate, each handling different aspects. [Fukumura & Ito](https://doi.org/10.1007/s10726-023-09869-z) describe a system with specialized agents for different argument types.

The [[research/bringing-everyone-to-table|"Bringing Everyone to the Table" study]] found that autonomous LLM facilitation can outperform human facilitation on specific tasks (information sharing)—though whether this generalizes remains open.

## Current Systems

Several working systems demonstrate different approaches:

**[D-agree](https://www.d-agree.com/)** (Kyoto/Nagoya) — Uses [IBIS](https://en.wikipedia.org/wiki/Issue-based_information_system) (Issue-Based Information System) structure to classify posts and trigger appropriate facilitation. Pre-LLM but demonstrates crowd-scale automated facilitation is viable. See [[research/agent-facilitates-crowd-discussion|detailed summary]].

**[Polis](https://pol.is/)** — Not a facilitator per se, but an opinion-clustering system that surfaces points of consensus and division. Influences how discussions get structured without directly moderating them.

**[Habermas Machine](https://deepmind.google/discover/blog/the-habermas-machine-an-ai-tool-to-help-groups-find-common-ground/)** (DeepMind) — Engages individuals separately, then synthesizes toward common ground. Sidesteps real-time facilitation by working asynchronously with each participant.

**[Harmonica](https://harmonica.chat/)** — AI-mediated group dialogue focused on one-to-one conversations that get synthesized.

## What AI Facilitation Can Do

Current systems handle some facilitation tasks well:

**[[knowledge-base/glossary#Turn-taking|Turn management]]** — Deciding who speaks next, ensuring balanced participation. AI can track this objectively and intervene when someone's been quiet.

**Topic tracking** — Monitoring discussion focus, detecting drift, identifying when topics have been exhausted.

**Summarization** — Synthesizing what's been said. LLMs are genuinely good at this—often better than human facilitators working in real-time.

**Pattern detection** — Noticing when arguments repeat, when positions cluster, when consensus might be emerging.

## What Remains Hard

**Emotional attunement** — Sensing when someone's upset, when tension is rising, when a topic is unexpectedly painful. AI can detect some signals but lacks the embodied intuition humans bring.

**Judgment about intervention** — *Whether* to intervene is often harder than *how*. A human facilitator might sense that letting an awkward silence continue will be productive. Current AI tends toward intervention.

**Relationship building** — [[knowledge-base/glossary#Psychological Safety|Psychological safety]] often comes from feeling that someone cares. It's unclear whether participants can develop trust with an AI facilitator.

**Cultural nuance** — Most AI facilitation research is Western-centric. Facilitation norms vary dramatically across cultures—what counts as respectful disagreement, appropriate turn-taking, or productive silence differs.

## The Transparency Question

Should participants know they're being facilitated by AI? Research is mixed. Some studies find no effect on behavior when AI is disclosed. Others find participants engage differently—perhaps more cautiously, perhaps more freely—when they know no human is watching.

The ethical consensus leans toward disclosure, but the question of *how* to disclose (upfront vs. ongoing reminder) and what effects disclosure has on facilitation quality remains underexplored.

## Research Gaps

The [[research/evaluation-facilitation-llm-era|Korre et al. survey]] identifies four major gaps:

1. **Long-term studies** — Most experiments last hours. What happens over months?
2. **Real-world deployment** — Lab performance may not predict field performance.
3. **Cross-cultural validity** — Will systems trained on English text facilitate well in other languages and cultures?
4. **Hybrid optimization** — What's the right human-AI division of labor?

## Related Research

For empirical data on human facilitation, see the [[research/fora-corpus|Fora corpus]]. The [[research/WHoW-Framework|WHoW Framework]] provides a taxonomy for analyzing moderation behavior. For specific systems, see [[research/agent-facilitates-crowd-discussion|D-agree]] and [[research/cueing-the-crowd|Cueing the Crowd]].
