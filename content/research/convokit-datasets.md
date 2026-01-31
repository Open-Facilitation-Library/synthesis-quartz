---
title: "ConvoKit: Datasets for Facilitation Research"
tags:
  - research
  - corpus
  - facilitation
  - dialogue
  - convokit
---

# ConvoKit: Datasets for Facilitation Research

*[ConvoKit](https://convokit.cornell.edu/) — Cornell Conversational Analysis Toolkit*

---

ConvoKit ships with 30+ conversational datasets downloadable with a single Python call. Several are directly relevant to facilitation research — group deliberation, moderated debate, negotiation, and conversation derailment. All use ConvoKit's standardized format (`utterances.jsonl` + `speakers.json` + `conversations.json`), making them interoperable with the toolkit's built-in analysis transformers.

```python
from convokit import Corpus, download
corpus = Corpus(filename=download("dataset-name"))
```

Full dataset index: [zissou.infosci.cornell.edu/convokit/datasets/](http://zissou.infosci.cornell.edu/convokit/datasets/)

## Group Deliberation & Decision-Making

These datasets capture people working together to reach decisions — the core use case for facilitation.

### DeliData (deli-corpus)

**500 group dialogues, 14k utterances** — Multi-party problem-solving where groups deliberate on a cognitive task. In 64% of conversations, groups find better solutions than any individual member did alone. Annotated with a novel deliberation cue schema.

- *Paper:* [Karadzhov et al. 2021](https://arxiv.org/abs/2108.05271)
- *OFL relevance:* Closest existing dataset to facilitated group problem-solving. Running WHoW annotation on DeliData would validate our taxonomy against their deliberation cue schema and test whether our tags capture the same phenomena.
- *Key metadata:* Individual vs. group solutions, deliberation cue annotations on all utterances

### GAP Corpus (gap-corpus)

**28 group meetings, 84 participants** — Small groups (2-4 people) performing a winter survival ranking task, first individually then as a group. Captures the individual → group consensus process with audio recordings.

- *Source:* [University of the Fraser Valley](https://sites.google.com/view/gap-corpus/home)
- *OFL relevance:* Small group decision-making with measurable outcomes (individual vs. group rankings). Good test case for signature computation — does the conversation signature predict whether the group outperforms individuals?
- *Key metadata:* Individual rankings, group rankings, audio, affect annotations
- *License:* CC BY-NC 4.0

### Wikipedia Articles for Deletion (wiki-articles-for-deletion-corpus)

**400k deliberations, 3.3M utterances, 161k editors** — Wikipedia editor debates about whether to keep or delete articles. Each deliberation has a recorded outcome and admin rationale.

- *Paper:* [Mayfield & Black](https://convokit.cornell.edu/documentation/wiki-articles-for-deletion-corpus.html)
- *OFL relevance:* Massive-scale natural deliberation with outcomes. The admin role parallels a facilitator making a final decision informed by group discussion. Could be used to study how discussion patterns correlate with different outcomes (keep/delete/merge/redirect).
- *Key metadata:* Outcome decision, admin rationale, timestamps

## Moderated Debate

### Intelligence Squared Debates (iq2-corpus)

**108 debates, 26k utterances, 471 speakers** — Oxford-style debates with moderators and pre/post audience voting. Each debate has "for" and "against" teams plus a moderator.

- *Paper:* [Zhang et al. 2016, NAACL](https://convokit.cornell.edu/documentation/iq2.html) — "Conversational Flow in Oxford-Style Debates"
- *OFL relevance:* The **measurable opinion shift** (pre/post voting) is exactly the outcome signal our signature framework needs. We can correlate conversation signatures with actual audience opinion change. The moderator role is annotated at the utterance level, enabling direct comparison of moderation styles across debates.
- *Key metadata:* Pre-debate vote percentages, post-debate vote percentages, speaker role (for/against/moderator)

### NPR Two-Party Conversations (npr-2p-corpus)

**22k conversations, 429k utterances** — NPR radio host-guest dialogues across multiple programs.

- *OFL relevance:* Host-guest turn-taking dynamics parallel facilitator-participant patterns. Large scale enables statistical analysis of interviewing techniques across programs and topics.
- *Key metadata:* Program name, episode title, date

## Negotiation & Conflict

### CaSiNo (casino-corpus)

**1,030 negotiations, 14k utterances, 846 speakers** — Campsite resource negotiation dialogues with rich participant metadata.

- *Paper:* [Chawla et al. 2021, NAACL](https://convokit.cornell.edu/documentation/casino-corpus.html)
- *OFL relevance:* Directly relevant to conflict resolution facilitation. Personality metadata (Big Five traits, prosocial vs. proself orientation) enables studying how participant characteristics affect negotiation outcomes. 396 dialogues have strategy annotations.
- *Key metadata:* Big Five scores, Social Value Orientation, satisfaction ratings, opponent likeness ratings
- *License:* CC BY 4.0

### Diplomacy (diplomacy-corpus)

**246 conversations, 17k messages** — Negotiation in the board game Diplomacy, annotated for intended truthfulness (sender) and perceived truthfulness (receiver).

- *Paper:* [Peskov et al. 2020, ACL](https://convokit.cornell.edu/documentation/diplomacy.html) — "It Takes Two to Lie"
- *OFL relevance:* Trust dynamics in long-term relationships. The deception quadrant (Straightforward / Deceived / Caught / Cassandra) maps to trust-building and trust-breaking patterns that facilitators must manage.
- *Key metadata:* Intended truthfulness, perceived truthfulness, game score delta, deception quadrant

### PersuasionForGood (persuasionforgood-corpus)

**1,017 dialogues, 21k utterances, 6k annotated with dialogue acts** — Charity donation persuasion conversations with psychological survey data.

- *Paper:* [Wang et al. 2019, ACL](https://convokit.cornell.edu/documentation/persuasionforgood.html)
- *OFL relevance:* Dialogue act labels on 300 conversations provide a reference taxonomy for our How dimension. Psychological survey data enables studying how participant mindset affects susceptibility to different techniques.
- *Key metadata:* Dialogue act labels, demographic info, psychological survey responses

## Conversation Failure

### Conversations Gone Awry (conversations-gone-awry-corpus)

Three related corpora of conversations that derail into antisocial behavior:

| Variant | Size | Source |
|---------|------|--------|
| **CGA-WIKI** | 4,188 conversations, 30k comments | Wikipedia talk pages → personal attacks |
| **CGA-CMV** | 6,842 conversations, 43k comments | Reddit ChangeMyView → rule violations |
| **CGA-CMV-Large** | 19,578 conversations, 117k utterances | Expanded CMV dataset |

- *Papers:* [Zhang et al. 2018, ACL](https://convokit.cornell.edu/documentation/awry.html); [Chang & Danescu-Niculescu-Mizil 2019, EMNLP](https://convokit.cornell.edu/documentation/awry_cmv.html)
- *OFL relevance:* The **negative case** for facilitation — understanding *when* and *why* conversations derail tells you what facilitation needs to prevent. Pairs directly with ConvoKit's [CRAFT forecasting](https://convokit.cornell.edu/documentation/craft.html) transformer, which predicts derailment from early conversation signals. Could be used to evaluate whether facilitation interventions reduce derailment probability.

## Speech Act Reference

### Switchboard Dialog Act Corpus (switchboard-corpus)

**1,155 conversations, 123k utterances, 440 speakers** — Telephone conversations annotated with DAMSL (Dialogue Act Markup in Several Layers) speech act tags.

- *OFL relevance:* DAMSL is a mature speech act taxonomy with 42 categories. Worth comparing against our 11 How tags to identify missing distinctions or over-splitting. The five-minute conversation format and topic prompts parallel structured facilitation exercises.
- *Key metadata:* DAMSL dialogue act tags, speaker demographics (sex, education, dialect area), conversation topic
- *License:* CC BY-NC-SA 3.0

## Priority Datasets for OFL

Based on alignment with the [[evals/why-how-who-framework|Why-How-Who framework]] and [[research/fora-corpus|Fora corpus]] work:

1. **DeliData** — Validate WHoW taxonomy against deliberation cue annotations. No access request needed.
2. **IQ2** — Correlate conversation signatures with measurable opinion change. The pre/post voting data is unique.
3. **Conversations Gone Awry** — Test whether WHoW signatures can predict or explain conversation failure. Pairs with CRAFT.
4. **Switchboard** — Benchmark our How dimension against the established DAMSL taxonomy.
5. **CaSiNo** — Test conflict resolution patterns with personality metadata as covariates.

## ConvoKit Analysis Tools

Once data is in ConvoKit format, these built-in transformers apply automatically:

- **Politeness Strategies** — lexical/parse-based politeness scoring (facilitator tone measurement)
- **Linguistic Coordination** — measures whether participants mirror facilitator language (rapport signal)
- **CRAFT Forecasting** — predicts conversation derailment (evaluates whether facilitation prevents breakdown)
- **Redirection detection** — built-in tool for what our WHoW `redirect` tag captures
- **Linguistic Diversity** — quantifies speaker variation within conversations

Our transcript processor pipeline handles the upstream problem ConvoKit doesn't: raw transcript → structured annotated corpus. Adding ConvoKit-format export would make all these tools available on our benchmarks. See [[research/fora-corpus|Fora corpus]] for the data format specification.

## Resources

- [ConvoKit Documentation](https://convokit.cornell.edu/documentation/)
- [ConvoKit GitHub](https://github.com/CornellNLP/ConvoKit)
- [Dataset Index](http://zissou.infosci.cornell.edu/convokit/datasets/)
- [ConvoKit Paper](https://www.cs.cornell.edu/~cristian/ConvoKit_Demo_Paper_files/convokit-demo-paper.pdf)

## Related

- [[research/fora-corpus|Fora Corpus]] — 262 facilitated dialogues, available as ConvoKit corpus (access by request)
- [[research/WHoW-Framework|WHoW Framework]] — Academic moderation analysis framework
- [[evals/why-how-who-framework|Why-How-Who Framework]] — OFL's evaluation dimensions
- [[research/evaluation-facilitation-llm-era|Facilitation in the LLM Era]] — Survey of discussion quality metrics
