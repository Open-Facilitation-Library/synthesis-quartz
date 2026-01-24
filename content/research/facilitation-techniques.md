---
title: Facilitation Techniques
tags:
  - research
  - facilitation
  - techniques
---

# Facilitation Techniques

*Synthesis from education, deliberation, and AI research*

---

What do facilitators actually do, move by move? This page synthesizes research that tries to answer that question—cataloging the interventions skilled facilitators make and measuring which ones work.

## The Basic Repertoire

Across different domains, the same techniques keep appearing. [Chung (2011)](https://doi.org/10.1007/s11412-011-9121-x) identified nine core moves in educational discussion forums:

**Summarization** — synthesizing what participants have said. **Making connections** — linking one person's point to another's. **Providing opinions** — sharing the facilitator's own perspective (more common than you might expect). **Inviting feedback** — soliciting reactions. **Asking for elaboration** — probing for depth. **Asking for clarification** — ensuring understanding. **Facilitating argumentation** — supporting reasoned debate. **Conversation stimulation** — encouraging engagement when things go quiet. **Conflict resolution** — managing disagreements.

These aren't exotic skills. They're the bread-and-butter moves that competent facilitators deploy almost unconsciously. The value of making them explicit is that it enables both training and automation.

## Three Functions, Not One

[Cheung & Hew (2010)](https://doi.org/10.1016/j.compedu.2010.04.001) offer a useful higher-level framing. Facilitation serves three distinct functions:

**Social** — building atmosphere and connection. Creating [[knowledge-base/glossary#Psychological Safety|psychological safety]] so people feel able to speak honestly.

**Organizational** — managing process and logistics. Who speaks when, how long discussions run, keeping things on track.

**Intellectual** — advancing content and understanding. Asking the probing question that opens new territory, connecting disparate points into insight.

Most facilitators lean toward one or two of these. AI systems tend to be better at organizational functions and struggle with social ones—a pattern worth keeping in mind for [[knowledge-base/concepts/ai-facilitation-approaches|hybrid human-AI facilitation]].

## Which Techniques Can AI Handle?

The [[research/fora-corpus|Fora corpus]] research tested GPT-4 and fine-tuned RoBERTa on detecting facilitation techniques. The results suggest some techniques are more automatable than others:

**Summarization** — LLMs excel here. This is arguably their core competency.

**Making connections** — GPT-4 dramatically outperforms traditional classifiers (F1 0.78 vs 0.18 for RoBERTa). The task requires the kind of semantic reasoning that language models handle well.

**Follow-up questions** — Both approaches perform moderately (F1 ~0.65). Tractable but not trivial.

**Conflict resolution** — Generally requires human judgment. The stakes are too high and the signals too subtle for current AI.

## Technique-Outcome Relationships

Does it matter which techniques you use? [Dillard (2013)](https://doi.org/10.1080/10570314.2012.744459) found that facilitation styles correlate with deliberation trajectories. Directive styles lead to faster convergence. Non-directive styles enable broader exploration. The "right" choice depends on what you're trying to achieve—which is why the [[evals/why-how-who-framework|Why-How-Who framework]] starts with purpose.

[Motozawa et al. (2021)](https://doi.org/10.1109/IIAI-AAI52587.2021.00017) offer a more specific finding: "Request" utterances by facilitators reliably encourage participant response. If you want someone to contribute, ask them directly.

## Related Research

The [[research/fora-corpus|Fora corpus]] provides empirical data on how often these techniques appear in real facilitated conversations. The [[research/WHoW-Framework|WHoW Framework]] offers a taxonomy for analyzing moderation acts. For how AI systems can implement these techniques, see [[research/agent-facilitates-crowd-discussion|D-agree]] and [[research/cueing-the-crowd|Cueing the Crowd]].
