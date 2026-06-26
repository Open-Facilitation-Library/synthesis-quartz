---
title: Evaluation Frameworks
---

Every [[method-specs/index|method spec]] is paired with **evals**. OFL evals are per-stage and per-method: one [weval](https://weval.org) blueprint for each stage of each method, scored against real conversation turns. The point is to make "good facilitation" inspectable and measurable by the method's own logic rather than assumed, and interoperable with weval's open format so the same eval can run on any runtime.

## What an eval is

One eval covers one stage of one method. It lives at `methods/<id>/evals/<stage-id>.yaml` in the [method-specs registry](https://github.com/Open-Facilitation-Library/method-specs) as a weval blueprint: a realistic participant message, plus a `should` list and a `should_not` list that capture the specific facilitation tactics and principles for that stage.

The criteria are the stage's own logic, not an abstract checklist. Examples from the registry:

- **Dynamic Facilitation, "stay in the groan zone":** should "stay with the difficulty and keep the participant's frustration in the room"; should not "rush to consensus or offer a tidy reassurance in order to move on."
- **Focused Conversation (ORID), "objective level":** should "bring the participant back to observable facts, what was actually said, done, seen, or heard"; should not "accept the evaluation and move on to meaning or a decision."
- **Consent Decision-Making, "surface and resolve objections":** should "test whether the argument qualifies as an objection and integrate the ones that do"; should not "dismiss or override the objection, or adopt the proposal unchanged while a qualified objection stands."

There is no abstract eval like "closing a session" that floats free of a method. The nearest equivalent is a method's own final stage (Retrospective's "close", Dynamic Facilitation's "harvest the shift"), judged in that method's context.

## How the criteria stay honest

This is the discipline that keeps the per-stage rubrics trustworthy. It is the supporting method, not the unit of evaluation.

- **Grounded, not assumed.** Criteria come from practitioners of the method and from reading real sessions where an AI facilitator did something a human facilitator would reject, not from the literature alone.
- **Two instruments.** Most criteria are LLM-judged (`should` / `should_not`); mechanical, binary signals can be deterministic `functions`. A judge's scores are trusted only after it is calibrated against human labels.
- **Open and portable.** Blueprints use weval's open grammar, so they run on weval-shaped infrastructure rather than being tied to one runtime. [weval](https://weval.org) (CIP) is the proposed public-validation partner.

## Coverage

Every stage of every published method carries one eval (44 stage evals across the 9 methods in the current registry). Specs stay `draft` until an experienced practitioner of the method has reviewed them.

Browse the methods under [[method-specs/protocols/index|protocols]]; each links to its full spec and its evals in the [registry](https://github.com/Open-Facilitation-Library/method-specs).

## Why-How-Who: a comparison lens

The [[evals/why-how-who-framework|Why-How-Who framework]] (Joseph Low; Chen et al. 2024) characterizes facilitation along three dimensions: **Why** (purpose), **How** (process and intervention style), and **Who** (participant dynamics). It is a research lens for comparing methods across traditions, and a vocabulary the rubrics can draw on. It is not the scoring mechanism: methods are evaluated per stage by their own `should` / `should_not` criteria, not by similarity to a reference signature.

## Related

- [[evals/weval|weval (CIP)]]: open, CC0 platform for public AI evals (rubric blueprints plus multi-judge consensus). OFL eval specs interoperate; proposed validation partner.
- [[knowledge-base/research/fora-corpus|Fora Corpus]]: 262 human-annotated facilitated dialogues (MIT, ACL 2024).
- [[knowledge-base/research/evaluation-facilitation-llm-era|Facilitation in the LLM Era]]: survey on evaluating LLM-based facilitation (Korre et al. 2025).
- [[knowledge-base/research/convokit-datasets|ConvoKit Datasets]]: Cornell toolkit for downstream conversational analysis.
- [[knowledge-base/glossary|Glossary]]: term definitions.
