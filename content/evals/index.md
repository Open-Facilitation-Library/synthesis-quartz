---
title: Evaluation Frameworks
---

# Evaluation Frameworks

Tools and schemas for assessing facilitation quality. Source code and schemas live in the [evals](https://github.com/Open-Facilitation-Library/evals) repository.

## Why-How-Who Framework

Based on Joseph Low's research at Cooperative AI, this framework characterizes facilitation along three dimensions:
- **Why**: Purpose and intended outcomes (agreement building, ideation, conflict resolution, etc.)
- **How**: Process characteristics and intervention styles (directive vs non-directive, question types, timing)
- **Who**: Participant dynamics and roles (group size, power dynamics, anonymity)

See: [[evals/why-how-who-framework|Why-How-Who Framework → Full specification]]

## Conversation Signatures

The key evaluation mechanism: compute "signatures" of conversations based on Why-How-Who dimensions, then compare them to reference methodologies. Instead of asking "Is this good facilitation?" (subjective), ask "How similar is this to Socratic dialogue?" (measurable).

1. **Label** dialogue acts with Why-How-Who tags
2. **Count** frequencies of each tag type
3. **Create** a vector representing conversation characteristics
4. **Compare** to known methodology signatures

## Three Evaluation Approaches

- **Process-based**: Measuring facilitation technique adherence — how well did the facilitator follow the method?
- **Outcome-based**: Measuring discussion quality and results — did participants reach agreement, generate ideas?
- **Conversation signatures**: Comparing discussions to known facilitation styles — what methodology does this most resemble?

## Repository Structure

The [evals repo](https://github.com/Open-Facilitation-Library/evals) contains:

| Directory | Contents |
|-----------|----------|
| `schemas/` | Data schemas for evaluation results |
| `prompts/` | LLM prompts for automated dialogue act tagging |
| `benchmarks/` | Reference datasets and methodology signatures |

## Transcript Processor

An automated pipeline that takes raw facilitation transcripts and produces annotated benchmarks with WHoW tags and conversation signatures. Uses gpt-4o-mini for classification.

Pipeline: **parse** → **anonymize** → **annotate** → **compute signature** → **render benchmark**

See the [evals repo](https://github.com/Open-Facilitation-Library/evals) for usage.

## Related Research

- [[research/fora-corpus|Fora Corpus]] — 262 facilitated dialogues with human annotations for facilitation strategies (MIT, ACL 2024). The closest academic dataset to OFL evals — complementary annotation schemes
- [[research/WHoW-Framework|WHoW Framework]] — Academic framework for moderation analysis (Chen et al. 2024)
- [[research/evaluation-facilitation-llm-era|Facilitation in the LLM Era]] — Comprehensive survey on evaluating LLM-based facilitation (Korre et al. 2025)
- [[research/convokit-datasets|ConvoKit Datasets]] — Cornell Python toolkit with 30+ conversational corpora and built-in analysis transformers (Politeness Strategies, Linguistic Coordination, CRAFT Forecasting, Redirection detection, Linguistic Diversity). Priority datasets for OFL: DeliData (group deliberation), IQ2 (moderated debate with opinion shift), Conversations Gone Awry (derailment). Our pipeline handles the upstream problem ConvoKit doesn't (raw transcript → structured corpus); ConvoKit handles downstream analysis

## Related Resources

- [Pattern Schema](https://github.com/Open-Facilitation-Library/skills/tree/main/patterns/schema) — Facilitation patterns include evaluation criteria per methodology
- [[knowledge-base/glossary|Glossary]] — Term definitions
