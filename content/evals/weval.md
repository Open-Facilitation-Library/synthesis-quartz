---
title: "weval — Open Evaluations as a Commons"
tags:
  - evaluation
  - tools
  - collective-intelligence-project
---

*[weval.org](https://weval.org) — [Collective Intelligence Project](https://cip.org)*

---

weval is an open, public-domain platform for evaluating AI model behaviour: anyone can write an eval, share it, and run it against many models. It's the eval-side counterpart to OFL's mission — where OFL makes facilitation *methods* an open commons, weval makes the *evals* that judge AI behaviour an open commons. CIP run it, and have been a proposed validation partner for the OFL eval suite.

## How it works

A weval eval is a **blueprint** — a portable, CC0 YAML file pairing prompts with a rubric:

- **Prompts** — single or multi-turn conversations.
- **Rubric** — `should` / `should_not` criteria, each scored by an LLM judge, or checked deterministically with `functions` (contains/regex). Criteria carry weights and can define alternative (OR-logic) paths.
- **Scoring** — a graded 5-point scale (unmet → fully met, 0.0–1.0), `should_not` inverted, weighted into a coverage score.

Blueprints live in a public repo and spread by being forked and adapted — the same "open, forkable spec" pattern OFL uses for methods.

## Why it matters for OFL

Two layers connect weval to OFL's [[evals/index|evaluation framework]]:

1. **Format.** weval's blueprint rubric grammar is a ready model for the *eval half* of an OFL method spec — express a [[evals/why-how-who-framework|Why-How-Who]] facilitation eval as a blueprint and it runs on weval-shaped infrastructure, not just one platform.
2. **Judge calibration.** weval doesn't trust a single judge. It runs **multiple judges in consensus** (different models and framings, averaged) and measures their agreement with **Krippendorff's α**, flagging evals where judges disagree too much to trust. That rigour — grounded in CIP's research, *LLM Judges Are Unreliable* — is the missing piece in most LLM-as-judge setups.

## Related

- [[evals/why-how-who-framework|Why-How-Who Framework]] — OFL's facilitation eval dimensions; the natural content for weval blueprints
- [[knowledge-base/research/evaluation-facilitation-llm-era|Facilitation in the LLM Era]] — the survey that maps *what* to measure; weval is *how* to measure it, in the open
- [[knowledge-base/research/WHoW-Framework|WHoW Framework]] — academic moderation-analysis framework

## Links

- [weval.org](https://weval.org) · [github.com/weval-org/app](https://github.com/weval-org/app)
- [Blueprint format](https://github.com/weval-org/app/blob/main/docs/BLUEPRINT_FORMAT.md) · [Methodology](https://github.com/weval-org/app/blob/main/docs/METHODOLOGY.md)
