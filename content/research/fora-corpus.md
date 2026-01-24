---
title: "Fora: Corpus for Facilitated Dialogue"
tags:
  - research
  - corpus
  - facilitation
  - dialogue
---

# Fora: A Corpus and Framework for Facilitated Dialogue

A unique collection of annotated facilitated dialogues developed by MIT Center for Constructive Communication (Schroeder, Roy & Kabbara, 2024).

*Source: [Fora: A corpus and framework for the study of facilitated dialogue](https://aclanthology.org/2024.acl-long.754/) (ACL 2024)*

---

## Overview

Fora is a corpus of **262 facilitated conversations** (39,911 speaker turns) with annotations for studying facilitator behavior, turn-taking dynamics, and participant sharing patterns. It provides baselines for tasks essential to understanding and improving facilitated dialogue.

## Corpus Details

| Metric | Value |
|--------|-------|
| Total conversations | 262 |
| Speaker turns | 39,911 |
| Annotated sample | 25% (~10,000 turns) |
| Conversation collections | 16 |
| Median participants | 6 |
| Average duration | 66 minutes |
| Date range | Nov 2019 - Apr 2023 |

## Facilitation Techniques Taxonomy

The Fora framework identifies key facilitation strategies:

### Core Facilitation Moves

| Technique | Description | Frequency |
|-----------|-------------|-----------|
| **Follow-up questions** | Probing for elaboration on participant responses | 71% of conversations |
| **Make connections** | Linking participant contributions to each other | 71% of conversations |
| **Provide examples** | Offering concrete illustrations | 60% of conversations |
| **Summarization** | Synthesizing discussion points | Common |
| **Inviting feedback** | Soliciting reactions to ideas | Common |

### Related Research on Techniques

From Chung (2011), nine facilitation techniques in education forums:
- Summarization
- Making connections
- Providing opinions
- Inviting feedback
- Asking for elaboration
- Asking for clarification
- Facilitating argumentation
- Conversation stimulation
- Conflict resolution

## Participant Sharing Behaviors

### Personal Story
A discrete sequence of events involving the speaker that occurred at a specific point in time.

> *Example: "I started in vegetables. And then when I came to Maine, I looked around and said, 'There's like 12 more vegetable farms, but I can only go one place to get a steak.' So I switched completely."*

### Personal Experience
Mentions including introductions, facts about self, professional background, general life statements, and habitual occurrences (not discrete events).

> *Example: "In my 15 years of teaching, I rarely saw students behave badly to each other."*

### Key Findings

- **362 personal stories** in 25% sample
- **1,367 mentions of personal experience** in 25% sample
- **82%** of single-facilitator conversations include facilitator personal experience
- **90%** of participants share from personal experience
- **31%** of conversations include facilitator personal stories

## Facilitator Behavior Patterns

### Facilitator Sharing Styles

Facilitators make stylistic choices about personal sharing:
- Some share extensively to build rapport
- Others maintain distance to stay neutral
- Most (82%) share at least one personal experience

### Impact on Turn-Taking

Research shows:
- "Request" utterances by facilitators encourage participant response (Motozawa et al., 2021)
- Facilitator behavior directly relates to participant sharing patterns
- Turn-taking dynamics differ from non-facilitated meetings

## Model Performance

### Classification Tasks (GPT-4 vs RoBERTa)

| Task | Model | F1 | Precision | Recall |
|------|-------|-----|-----------|--------|
| Follow-up question | GPT-4 (zero-shot + context) | 0.63 | 0.61 | 0.79 |
| Follow-up question | Fine-tuned RoBERTa | 0.65 | 0.61 | 0.70 |
| Make connections | GPT-4 (few-shot) | 0.78 | 0.79 | 0.77 |
| Make connections | Fine-tuned RoBERTa | 0.18 | 0.80 | 0.11 |

*Note: GPT-4 significantly outperforms RoBERTa on "Make connections" task*

## Related Datasets

| Dataset | Description |
|---------|-------------|
| **EuroPolis** | Transnational European deliberative poll (Gerber et al., 2018) |
| **CANDOR Corpus** | Recent launch for conversation research (Reece et al., 2023) |
| **SWITCHBOARD** | Telephone speech corpus |
| **ICSI-MRDA** | Meeting recorder dialog act corpus |

## Applications for OFL

### Training AI Facilitators
- Learn facilitation technique patterns
- Understand when to use follow-up questions vs. connections
- Model appropriate personal sharing behavior

### Evaluation Framework
- Benchmark AI facilitator performance
- Measure technique usage rates
- Compare to human facilitator baselines

### Process Design
- Identify effective facilitation sequences
- Understand sharing dynamics
- Design conversation guides

## Three Functions of Facilitation

From Cheung & Hew (2010):

1. **Social** - Building rapport and psychological safety
2. **Organizational** - Managing process and logistics
3. **Intellectual** - Advancing content and understanding

## Resources

- [ACL Anthology Paper](https://aclanthology.org/2024.acl-long.754/)
- [Cortico](https://cortico.ai/) - Partner organization
- [MIT Center for Constructive Communication](https://www.media.mit.edu/groups/constructive-communication/overview/)

## Citation

```bibtex
@inproceedings{schroeder2024fora,
  title={Fora: A corpus and framework for the study of facilitated dialogue},
  author={Schroeder, Hope and Roy, Deb and Kabbara, Jad},
  booktitle={Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)},
  pages={13985--14001},
  year={2024}
}
```
