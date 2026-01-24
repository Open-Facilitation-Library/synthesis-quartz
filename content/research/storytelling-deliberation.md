---
title: Storytelling in Deliberation
tags:
  - research
  - storytelling
  - narrative
  - deliberation
---

# Storytelling in Deliberation

*Research on personal narratives in facilitated discussion*

---

Deliberation isn't just argument and counterargument. People tell stories—about their lives, their communities, their experiences with the issue at hand. And these narratives do work that pure reasoning can't: they humanize abstract issues, create connection between strangers, and make the stakes feel real.

## Why Stories Matter

[Laura Black (2013)](https://doi.org/10.1177/0267323113475410) studied how storytelling functions in deliberative groups. Stories don't just illustrate points—they **frame** issues, establishing what matters and who the relevant actors are. A policy debate about immigration statistics feels different after someone shares their family's story of displacement.

[Ryfe (2006)](https://doi.org/10.1111/j.1468-2508.2006.00488.x) found that narratives complement rather than replace rational argument. The most productive deliberations weave between the two: stories create emotional resonance and shared understanding, while reasoning tests whether that understanding holds up to scrutiny.

This matters for AI facilitation. Systems trained primarily on argumentative text may miss narrative moves entirely, or worse, redirect storytelling toward more "structured" contributions.

## Types of Personal Sharing

The [[research/fora-corpus|Fora corpus]] research distinguishes two types of personal content that appear in facilitated dialogue:

**Personal stories** — discrete sequences of events with specific time references. *"When I moved to Maine, I looked around and said, 'There's like 12 vegetable farms, but only one place to get a steak.' So I switched completely."* These have narrative arc: a situation, a choice, an outcome.

**Personal experience** — general statements about one's life and background. *"In my 15 years of teaching, I rarely saw students behave badly to each other."* These provide context without the temporal structure of stories.

The distinction matters because stories generate different responses than experience-sharing. Stories invite emotional engagement; experience-sharing establishes credentials.

## Facilitator Storytelling

Here's a finding that challenges naive views of facilitator neutrality: **82% of single-facilitator conversations in the Fora corpus include the facilitator sharing personal experiences.** 31% include facilitator personal stories.

Facilitators aren't blank slates. They build rapport and model vulnerability by sharing themselves. The question isn't whether to share, but *when* and *how much*. Some facilitators share extensively to establish connection. Others maintain more distance to preserve perceived neutrality.

For [[knowledge-base/concepts/ai-facilitation-approaches|AI facilitation]], this raises a genuine puzzle. Should an AI facilitator "share experiences"? It has none. Should it fabricate narratives? That feels manipulative. Should it acknowledge its nature? That might undermine the rapport that storytelling creates.

## What Stories Accomplish

In deliberative contexts, narratives serve multiple functions:

**Humanizing** — abstract policy becomes concrete when attached to a person's life.

**Connecting** — shared experiences create bonds between participants who might otherwise see each other as opponents.

**Witnessing** — some experiences need to be heard, regardless of their argumentative force. Facilitation that rushes past stories to get back to "productive discussion" misses this.

**Persuading** — stories create emotional resonance that pure argument often can't. This is sometimes seen as manipulation, but narrative persuasion is a legitimate part of how humans change minds.

## Stories and AI

Current AI systems face several challenges with narrative:

**Recognition** — detecting story boundaries in flowing speech or text. When does a story begin? When does it end? Conversation-level annotation (as in the Fora corpus) often misses stories that span multiple turns or get interrupted.

**Response** — what's an appropriate reaction to an emotionally charged story? Human facilitators often pause, acknowledge, ask a follow-up that honors what was shared. AI tends toward immediate content extraction.

**Synthesis** — weaving multiple narratives together into a coherent summary that preserves their emotional force. LLMs can technically do this, but often flatten stories into bullet points.

The opportunity: AI could prompt for stories at appropriate moments, recognize when powerful narratives emerge, and help connect similar experiences across participants. But this requires treating stories as valuable in themselves, not just as data to be processed.

## Related Research

The [[research/fora-corpus|Fora corpus]] provides empirical data on storytelling patterns in facilitated dialogue. For facilitator practices around sharing, see [[research/jigsaw-facilitation-ai-era|Facilitation in the AI Era]]. [[research/facilitation-techniques|Facilitation Techniques]] covers the broader repertoire of facilitator moves.
