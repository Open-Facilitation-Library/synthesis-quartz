---
title: "Bringing Everyone to the Table: LLM vs Human Facilitation"
tags:
  - research
  - LLM
  - facilitation
  - experiment
---

# Bringing Everyone to the Table

*Experimental Study, 2025*

---

Here's a question that sounds simple but isn't: can an LLM facilitate a group discussion as well as a human? This study sets up a controlled experiment to find out, comparing four conditions—no facilitation, a static message, a human facilitator, and an LLM facilitator—on a group decision-making task.

## The Experiment

Groups of participants had to choose a host city for a fictional international sporting event. The twist: each participant held different facts about the candidate cities. To make a good decision, the group needed to actually share information rather than just vote on first impressions—a classic test of [[knowledge-base/glossary#Deliberative|deliberative]] quality.

The LLM facilitator (not specified which model, but likely GPT-4 class) prompted participants to share information, summarized what had been said, and kept discussion on track. Human facilitators did the same things, just... humanly.

## The Surprising Result

**LLM facilitation significantly increased information sharing compared to all other conditions—including human facilitation.** Groups with the LLM facilitator surfaced more unique facts than groups with human facilitators, groups with just a static message, or groups with no facilitation at all.

| Comparison | Difference | Significance |
|------------|------------|--------------|
| LLM vs None | +2.9 facts | p < 0.001 |
| LLM vs Human | +2.47 facts | p < 0.001 |
| LLM vs Message | +1.58 facts | p = 0.02 |

This doesn't mean LLMs are "better" facilitators—the task was specifically about information pooling, which plays to LLM strengths (tracking what's been said, identifying gaps). Other facilitation goals like building trust, managing emotions, or handling conflict might favor humans.

## The Acceptance Asymmetry

An intriguing pattern emerged in how participants felt about future facilitation. People who experienced LLM facilitation were open to both LLM and human facilitation in future tasks. But people who experienced human facilitation became notably *less* interested in trying LLM facilitation.

This suggests exposure matters. If people's first experience with AI facilitation is positive, they remain open to it. If they start with human facilitation, AI seems like a downgrade. For adoption, this implies AI facilitation might work better as an introduction than as a replacement.

## What This Means for AI Facilitation

The study supports a specific, limited claim: LLMs can help groups share more information during structured decision-making tasks. This is useful for contexts like [[knowledge-base/glossary#Deliberative|deliberative]] processes where information coverage matters.

It doesn't tell us whether LLMs can handle more complex facilitation challenges—[[knowledge-base/glossary#Transformative|transformative]] conversations involving conflict, emotional processing, or relationship repair. The [[research/jigsaw-facilitation-ai-era|Jigsaw ethnographic study]] suggests these dimensions are where human facilitators see their irreplaceable value.

## Connection to OFL

For the [[evals/why-how-who-framework|Why-How-Who framework]], this study provides evidence on the "How" dimension: LLM facilitation with explicit prompting to share information increases the "information coverage" outcome. The experimental methodology could serve as a template for evaluating [[knowledge-base/concepts/ai-facilitation-approaches|AI facilitation approaches]].

## Related Research

For more on AI facilitation systems, see [[research/agent-facilitates-crowd-discussion|D-agree]] (crowd-scale) and [[research/cueing-the-crowd|Cueing the Crowd]] (brainstorming cues). The [[research/evaluation-facilitation-llm-era|Korre et al. survey]] provides a broader taxonomy of LLM facilitation research.
