---
title: Deliberative Mini-Publics
tags:
  - research
  - deliberation
  - democracy
  - mini-publics
---

# Deliberative Mini-Publics

*Research on citizen deliberation forums and facilitation's role in democratic processes*

---

What if you could give a representative sample of citizens the time, information, and structure to genuinely deliberate on policy? That's the idea behind deliberative mini-publics—small groups of randomly selected citizens who work through complex issues with professional [[knowledge-base/glossary#Facilitation|facilitation]].

The format has been used for everything from constitutional reform in Ireland to infrastructure planning in Australia. And the research on these processes offers some of the clearest evidence we have about what facilitation accomplishes.

## The Foundational Model

[James Fishkin's deliberative polling](https://cdd.stanford.edu/what-is-deliberative-polling/), developed at Stanford starting in the 1990s, established the template: random sampling for representativeness, balanced briefing materials, trained facilitators for small group discussions, and pre/post opinion measurement to track what changes.

The facilitator's role is central but constrained. They're supposed to be **impartial intermediaries**—managing process without steering content. [Landwehr (2014)](https://doi.org/10.1017/CBO9781107323230.016) explores this tension: facilitators must actively guide discussion while remaining neutral about outcomes. It's harder than it sounds.

## When Neutrality Fails

[Spada & Vreeland (2013)](https://doi.org/10.1017/S0003055413000245) asked the uncomfortable question: what happens when moderators *aren't* neutral? Their experiments found that non-neutral moderation affects outcomes in predictable ways—facilitators can, intentionally or not, tip the scales.

This matters for AI facilitation. We often assume AI would be "more neutral" than humans, free from personal agendas. But AI systems encode biases from training data and design choices. The question isn't whether AI is neutral, but *which* biases it carries.

## What Good Deliberation Looks Like

Mini-publics research has developed quality indicators that any facilitation (human or AI) could target:

**Justification** — participants give reasons for their positions, not just assertions.

**Reciprocity** — people actually respond to each other's arguments rather than talking past one another.

**Respect** — disagreement remains civil, with opposing views treated seriously.

**Constructiveness** — discussion builds toward shared understanding rather than entrenching division.

These map onto dimensions in the [[research/evaluation-facilitation-llm-era|Korre et al. taxonomy]]: structure & logic, social dynamics, and engagement. The mini-publics tradition provides normative grounding for what those dimensions should achieve.

## The Scale Problem

Traditional mini-publics involve perhaps 100-500 participants at most. Getting people together in person, paying for professional facilitators, providing materials—it's expensive.

AI facilitation could change the economics. The [[research/agent-facilitates-crowd-discussion|D-agree platform]] demonstrates AI facilitating thousands of participants simultaneously. [[research/generative-social-choice|Generative social choice]] suggests ways to synthesize opinions at scale while maintaining representation guarantees.

But scale brings risks. Human facilitators build relationships with participants, notice subtle dynamics, exercise judgment in ambiguous situations. These qualities don't scale easily. A system facilitating a million conversations simultaneously is doing something qualitatively different from a human working with a dozen people—even if the individual interactions look similar.

## Key Datasets

| Dataset | Description |
|---------|-------------|
| [EuroPolis](https://doi.org/10.1017/S0007123417000059) | Transcripts from a transnational European deliberative poll |
| [[research/fora-corpus\|Fora]] | 262 facilitated dialogues from US community discussions |
| America in One Room | Large-scale US deliberative poll |

## Related Research

For facilitation practices in deliberative contexts, see [[research/jigsaw-facilitation-ai-era|Facilitation in the AI Era]]. The [[research/fora-corpus|Fora corpus]] provides empirical baselines on facilitator behavior. For AI approaches to democratic processes, see [[research/generative-social-choice|Generative Social Choice]].
