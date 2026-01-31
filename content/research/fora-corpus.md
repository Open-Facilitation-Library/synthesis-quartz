---
title: "Fora: Corpus for Facilitated Dialogue"
tags:
  - research
  - corpus
  - facilitation
  - dialogue
---

# Fora: A Corpus and Framework for Facilitated Dialogue

*[Schroeder, Roy & Kabbara, 2024](https://aclanthology.org/2024.acl-long.754/) — ACL 2024*

---

Most conversation datasets capture people talking *at* each other—debates, interviews, customer service. The Fora corpus, from the [MIT Center for Constructive Communication](https://www.media.mit.edu/groups/constructive-communication/overview/) and [Cortico](https://cortico.ai/), captures something rarer: people talking *with* each other under skilled [[knowledge-base/glossary#Facilitation|facilitation]].

The dataset includes **262 facilitated conversations** with nearly 40,000 speaker turns, drawn from 16 different dialogue initiatives between 2019 and 2023. About 25% of the corpus is annotated for facilitation techniques and participant sharing behaviors, creating baselines for training and evaluating AI facilitators.

## What Makes Facilitated Dialogue Different

Unfacilitated conversations tend toward familiar patterns: dominant voices take over, discussions drift off-topic, disagreements escalate. Facilitators intervene to counteract these tendencies—drawing out quiet participants, connecting disparate points, keeping the group oriented toward shared goals.

The Fora annotations reveal how frequently certain techniques appear:

| Technique | Prevalence |
|-----------|------------|
| Follow-up questions | 71% of conversations |
| Making connections between speakers | 71% of conversations |
| Providing concrete examples | 60% of conversations |
| Summarizing discussion | Common |
| Inviting feedback | Common |

These aren't exotic interventions—they're bread-and-butter moves that skilled facilitators deploy naturally. The value of the corpus is making these patterns explicit and measurable.

## Personal Sharing in Facilitation

One striking finding: **82% of single-facilitator conversations include the facilitator sharing personal experiences.** This contradicts a naive view of facilitation as purely neutral process management. Facilitators build rapport and model vulnerability by sharing themselves, not just managing others.

The corpus distinguishes between:

**Personal stories** — discrete sequences of events with specific time reference (*"When I moved to Maine, I looked around and said, 'There's like 12 vegetable farms, but only one place to get a steak.' So I switched completely."*)

**Personal experience** — general statements about one's background or habits (*"In my 15 years of teaching, I rarely saw students behave badly to each other."*)

About 90% of participants share personal experience during facilitated conversations, and 31% of conversations include facilitator personal stories. Understanding these patterns matters for [[knowledge-base/concepts/ai-facilitation-approaches|AI facilitation design]]: should an AI facilitator share "experiences"? How would that even work?

## Model Baselines

The paper includes experiments comparing GPT-4 and fine-tuned RoBERTa on detecting facilitation techniques. Results are mixed:

For **follow-up questions**, both approaches perform similarly (F1 ~0.65). The task is tractable with current methods.

For **making connections** (identifying when a facilitator links one participant's point to another's), GPT-4 dramatically outperforms fine-tuned RoBERTa (F1 0.78 vs 0.18). This suggests connection-making requires the kind of contextual reasoning that LLMs handle better than traditional classifiers.

## Connection to OFL

Fora provides the empirical ground truth that frameworks like [[evals/why-how-who-framework|Why-How-Who]] need for validation. Claims about what facilitators do, and which interventions work, should ultimately be testable against data like this.

For training AI facilitators, the corpus offers both positive examples (techniques that appear in successful facilitation) and implicit negative examples (techniques that could be used but aren't). The annotation scheme could also inform [[research/WHoW-Framework|moderation analysis]] by providing facilitation-specific categories beyond generic dialogue acts.

## ConvoKit Integration

Fora is available as a [ConvoKit](https://convokit.cornell.edu/) corpus — Cornell's standard format for conversational data, used by 30+ datasets. The format stores utterances as JSONL with speaker, conversation, and metadata objects, making it interoperable with a large ecosystem of analysis tools.

ConvoKit data format:
- `utterances.jsonl` — one JSON object per turn (id, speaker, conversation_id, reply_to, timestamp, text, meta)
- `speakers.json` — speaker metadata (facilitator status, etc.)
- `conversations.json` — conversation-level metadata (collection, annotation status, etc.)
- `index.json` — schema documentation

ConvoKit also includes built-in analysis transformers that would work on our data once exported:
- **Politeness Strategies** — lexical/parse-based politeness scoring (facilitator tone measurement)
- **Linguistic Coordination** — measures whether participants mirror facilitator language (rapport signal)
- **CRAFT Forecasting** — predicts conversation derailment (evaluates whether facilitation prevents breakdown)
- **Redirection detection** — built-in tool for what our WHoW `redirect` tag captures
- **Linguistic Diversity** — quantifies speaker variation within conversations

This format is a natural export target for OFL's transcript processor, enabling our WHoW-annotated benchmarks to be loaded alongside Fora data in the same analysis pipeline. Our pipeline handles the upstream problem ConvoKit doesn't (raw transcript → structured annotated corpus); ConvoKit handles the downstream analysis.

## Access

Corpus access is managed through MIT Center for Constructive Communication:
- Request form at [github.com/schropes/fora-corpus](https://github.com/schropes/fora-corpus)
- ~1 week processing time
- Subject to Responsible AI License (RAIL) terms
- Includes transcripts, annotations, conversation guides, and collection metadata

## Resources

- [Paper at ACL Anthology](https://aclanthology.org/2024.acl-long.754/)
- [GitHub — Corpus access](https://github.com/schropes/fora-corpus)
- [ConvoKit — Fora documentation](https://convokit.cornell.edu/documentation/fora.html)
- [Cortico](https://cortico.ai/) — partner organization building tools for facilitated dialogue
- [MIT Center for Constructive Communication](https://www.media.mit.edu/groups/constructive-communication/overview/)

## Related Research

For analysis of moderation (a related but distinct practice), see the [[research/WHoW-Framework|WHoW Framework]]. For practitioner perspectives on facilitation, see [[research/jigsaw-facilitation-ai-era|Facilitation in the AI Era]]. The [[research/evaluation-facilitation-llm-era|Korre et al. survey]] provides a taxonomy of discussion quality dimensions that could be measured against Fora data.
