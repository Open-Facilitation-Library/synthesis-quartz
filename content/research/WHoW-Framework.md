---
title: WHoW Framework for Moderation Analysis
tags:
  - research
  - evaluation
  - moderation
---

# WHoW Framework for Moderation Analysis

An academic framework for analyzing conversation moderation across domains, developed by Chen, Frermann & Lau (University of Melbourne, 2024).

*Source: [WHoW: A Cross-domain Approach for Analysing Conversation Moderation](https://arxiv.org/abs/2410.15551) (arXiv:2410.15551)*

---

## Overview

WHoW breaks down moderation decision-making into three components:
- **Why** - Motives behind interventions
- **How** - Dialogue acts used
- **Who** - Target speakers addressed

## The Three Dimensions

### Why: Motives

| Motive | Definition |
|--------|------------|
| **Informational** | Provide or acquire relevant information to advance the topic or goal |
| **Coordinative** | Ensure adherence to rules, plans, and contextual constraints (time, environment) |
| **Social** | Enhance atmosphere and connections by addressing feelings, emotions, interpersonal dynamics |

*Note: A single utterance can have multiple motives (multi-label)*

### How: Dialogue Acts

| Act | Definition |
|-----|------------|
| **Probing** | Prompt speaker for responses |
| **Confronting** | Prompt one speaker to respond to another speaker's statement |
| **Instruction** | Command, influence, halt, or shape immediate behavior |
| **Interpretation** | Clarify, reframe, summarize, paraphrase, or connect to earlier content |
| **Supplement** | Enrich conversation with details without changing target's behavior |
| **Utility** | All other acts (greetings, backchanneling, floor grabbing) |

*Note: Dialogue acts are mutually exclusive (single-label)*

### Who: Target Speaker

Categories include:
- Individual participants (by name)
- "Everyone" / "All speakers"
- "Audience"
- "Self"
- Team-based ("Support side", "Against side")
- "Unknown"

## Key Findings

### Domain Differences

| Aspect | TV Debates | Panel Discussions |
|--------|------------|-------------------|
| Primary motive | Coordinative (66%) | Informational (72%) |
| Main dialogue act | Instructions (36%) | Supplement (41%) |
| Moderator role | Interviewer/Instructor | Contributor/Interviewer |
| Participant interaction | Higher (confronting, interpretation) | Lower |

### Moderation Strategies

**Debate moderators:**
- Emphasize coordination through instructions
- Facilitate interaction between participants
- Use confronting questions and interpretation
- More diverse intervention types

**Panel moderators:**
- Focus on information provision
- Actively participate in discussions
- Address specific individuals more often
- Less direct interaction fostering between participants

## Interaction Metrics

| Metric | Definition |
|--------|------------|
| **Pro-activity** | How often moderator initiates (target ≠ last speaker) |
| **Interactivity** | How likely participants respond (target = next speaker) |
| **Specificity** | How often moderator addresses individuals vs. group |

## Dataset

- **5,657** human-annotated sentences
- **15,494** GPT-4o annotated sentences
- Two domains: Intelligence Squared Debates, NPR Roundtable Panels
- Inter-annotator agreement: 0.37-0.75 (Krippendorff's alpha)

## Relevance to OFL

The WHoW framework complements OFL's pattern schema:

| WHoW | OFL Pattern Schema |
|------|-------------------|
| Why (Motives) | Why (Purpose, outcomes) |
| How (Dialogue Acts) | How (Phases, intervention style) |
| Who (Target Speaker) | Who (Roles, participant dynamics) |

**Applications:**
- Evaluate AI facilitator behavior
- Compare moderation styles across patterns
- Train moderator agents
- Assess facilitator competencies

## Example Annotation

```
Speaker: John (Moderator)
Text: "That landed pretty well I think, so can you respond to that?"

Annotation:
- Motive: Informational
- Dialogue Act: Confronting
- Target: Jacob (Against team)
```

## Resources

- [Paper on arXiv](https://arxiv.org/abs/2410.15551)
- [Code & Dataset](https://github.com/mrknight21/conversation_moderation_analysis)
- [MRDA Corpus](https://catalog.ldc.upenn.edu/LDC2004S02) - Base dialogue act schema

## Citation

```bibtex
@article{chen2024whow,
  title={WHoW: A Cross-domain Approach for Analysing Conversation Moderation},
  author={Chen, Ming-Bin and Frermann, Lea and Lau, Jey Han},
  journal={arXiv preprint arXiv:2410.15551},
  year={2024}
}
```
