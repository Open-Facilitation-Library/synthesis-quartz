---
title: WHoW Framework for Moderation Analysis
tags:
  - research
  - evaluation
  - moderation
---

# WHoW Framework for Moderation Analysis

*[Chen, Frermann & Lau, 2024](https://arxiv.org/abs/2410.15551) — University of Melbourne*

---

How do you systematically describe what a moderator does? This paper from the [University of Melbourne](https://www.unimelb.edu.au/) proposes a three-dimensional framework: **Why** (what's the motive?), **How** (what dialogue act?), and **Who** (who's being addressed?). The framework lets researchers compare moderation behavior across domains and could serve as a foundation for training or evaluating AI [[knowledge-base/glossary#Moderation|moderators]].

## The Three Dimensions

**Why** captures the underlying purpose of an intervention. Is the moderator trying to get information flowing (*informational*)? Keep things on track and on time (*coordinative*)? Manage emotions and interpersonal dynamics (*social*)? A single utterance can serve multiple motives—asking someone to respond to criticism both gets information and manages the social dynamic.

**How** describes the mechanism of intervention. *Probing* prompts someone to speak. *Confronting* asks one participant to respond to another's point. *Instruction* directly shapes behavior. *Interpretation* reframes, summarizes, or connects to earlier discussion. *Supplement* adds information without pushing for behavioral change. These categories are mutually exclusive—each utterance gets one dialogue act label.

**Who** identifies the target: a specific individual, everyone in the room, the audience, or sometimes the moderator talking to themselves (thinking aloud).

## What the Data Shows

The researchers annotated over 5,000 sentences from TV debates ([Intelligence Squared](https://www.intelligencesquaredus.org/)) and NPR panel discussions. The domains show strikingly different moderation styles:

**Debate moderators** are primarily *coordinative* (66% of interventions). They use instructions frequently, facilitate direct interaction between participants through confronting questions, and work to manage time and flow.

**Panel moderators** are primarily *informational* (72% of interventions). They participate actively in the discussion, add supplementary information, and focus less on fostering participant-to-participant exchange.

This isn't better or worse—it reflects different goals. Debates aim to produce clash between positions. Panels aim to surface expertise.

## Measuring Moderation Style

The paper introduces three metrics that could inform [[evals/why-how-who-framework|evaluation frameworks]]:

**Pro-activity** — how often does the moderator initiate rather than respond? (measured by whether the target differs from the previous speaker)

**Interactivity** — do participants actually respond when addressed? (measured by whether the target becomes the next speaker)

**Specificity** — does the moderator address individuals or the whole group?

A highly proactive, highly specific moderator actively steers discussion. A reactive, group-addressed moderator lets things flow. Neither is inherently superior—it depends on [[knowledge-base/concepts/conversation-types|what kind of conversation]] you're running.

## Connection to OFL

WHoW maps surprisingly well onto OFL's [[evals/why-how-who-framework|Why-How-Who framework]]:

| WHoW | OFL |
|------|-----|
| Why (Motives) | Why (Purpose, outcomes) |
| How (Dialogue Acts) | How (Intervention style, techniques) |
| Who (Target Speaker) | Who (Roles, participant dynamics) |

The main difference: WHoW operates at utterance level (annotating individual moderator statements), while OFL's framework operates at methodology level (characterizing entire facilitation patterns). WHoW could provide the fine-grained behavioral data that validates or challenges OFL's higher-level claims.

## The Dataset

The researchers released both human annotations (5,657 sentences) and GPT-4o annotations (15,494 sentences) with a high inter-annotator agreement (Krippendorff's alpha 0.37-0.75 depending on dimension). Code and data are available on [GitHub](https://github.com/mrknight21/conversation_moderation_analysis).

## Related Research

The [[research/fora-corpus|Fora corpus]] provides complementary data on [[knowledge-base/glossary#Facilitation|facilitation]] (a related but distinct practice). For the OFL framework inspired by this research, see [[evals/why-how-who-framework|Why-How-Who]]. The [[research/evaluation-facilitation-llm-era|Korre et al. survey]] situates WHoW within broader discussion quality research.
