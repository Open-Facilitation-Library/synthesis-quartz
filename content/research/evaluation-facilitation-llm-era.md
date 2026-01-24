---
title: "Evaluation and Facilitation of Online Discussions in the LLM Era"
tags:
  - research
  - LLM
  - survey
  - evaluation
  - facilitation
---

# Evaluation and Facilitation of Online Discussions in the LLM Era: A Survey

A comprehensive survey synthesizing NLP and Social Science approaches to assessing and enhancing online discussion quality using LLMs.

*Source: [arXiv:2503.01513v3](https://arxiv.org/abs/2503.01513) (Korre et al., 2025)*

---

## Overview

This survey explores whether LLMs can be used effectively as facilitators in online discussions. It combines methods from Natural Language Processing with ideas from Social Science (e.g., Deliberative Theory) to provide:

1. A new taxonomy of discussion quality evaluation
2. An overview of intervention and facilitation strategies
3. A taxonomy of conversation facilitation datasets
4. An LLM-oriented roadmap for future research

## Authors

- Katerina Korre, Nikos Gkoumas (Archimedes, Athena Research Center)
- Dimitris Tsirmpas, Danai Myrtzani, Ion Androutsopoulos, John Pavlopoulos (Athens University of Economics and Business)
- Emma Cabalé (École Normale Supérieure Paris-Saclay)
- Theodoros Evgeniou (INSEAD)

## Key Concepts Defined

| Term | Definition |
|------|------------|
| **Discussion** | Broad term for informal/formal exchanges, including online fora |
| **Dialogue** | Collaborative interaction aimed at shared understanding |
| **Deliberation** | Structured discussion with reasoned argumentation and diverse perspectives |
| **Debate** | Adversarial interaction focused on persuasion |
| **Moderation** | Ensuring orderly interactions by enforcing guidelines |
| **Facilitation** | Encouraging equal participation and organizing discussion flow |

## Discussion Quality Taxonomy

### Structure & Logic
| Dimension | Facilitation Use | Pre-LLM Approaches | LLM Approaches |
|-----------|-----------------|-------------------|----------------|
| Argument structure | Spot claim-evidence chains; keep debate fact-centred | Argument-mining pipelines | On-the-fly argument-map summaries |
| Coherence & flow | Detect topic drift; redirect gaps | Entity-grid models; topic modelling | Prompted coherence scoring |
| Turn-taking | Monitor balance; nudge silent voices | Turn-entropy/Gini metrics | Balanced-participation prompts |
| Linguistic markers | Track hedges, sentiment; trigger civility nudges | Lexicon features; n-gram detectors | Style-transfer; tone-repair suggestions |
| Speech/dialogue acts | Identify proposals, question types | Dialogue-act tagging (ISO/DAMSL) | Few-shot DA tagging |

### Social Dynamics
| Dimension | Facilitation Use | Pre-LLM | LLM |
|-----------|-----------------|---------|-----|
| Politeness | Forecast derailment; issue civility nudges | Politeness lexicons | Polite rewrites; policy explanations |
| Power & status | Detect dominance; invite low-status voices | Style-matching; pronoun analysis | Power imbalance estimation |
| Disagreement | Distinguish constructive vs destructive dissent | Graham-hierarchy; stance detection | Few-shot labelling; reframing prompts |

### Emotion & Behavior
| Dimension | Facilitation Use | Pre-LLM | LLM |
|-----------|-----------------|---------|-----|
| Empathy | Encourage empathic turns | Empathy classifiers | Empathy scoring; supportive paraphrases |
| Toxicity | Flag harmful language | BERT/toxicity classifiers | Detection + rewrite suggestions |
| Sentiment | Track emotional climate | Lexicon & neural analysis | Tone-shift detection |
| Constructiveness | Stream score; escalate based on trend | Feature-based classifiers | Constructive-rewrite coaching |

### Engagement & Impact
| Dimension | Facilitation Use | Pre-LLM | LLM |
|-----------|-----------------|---------|-----|
| Engagement | Detect lulls; prompt interaction | Turn/word counts; reply-time gaps | Auto-recaps; invite quiet users |
| Persuasion | Spotlight evidence-based arguments | Ethos/pathos/logos analysis | Neutral framing suggestions |
| Diversity | Monitor viewpoint spread | Topic-diversity indices | Simulate perspectives; propose links |

## Facilitation Escalation Ladder

The survey identifies an "escalation ladder" that facilitators use:

1. **Mild tactics** - Gentle prompts, questions
2. **Moderate interventions** - Summarization, redirection
3. **Strong interventions** - Direct correction, rule enforcement

AI facilitators need routing logic to select appropriate intervention strength.

## Key Insights

### Derailment Warning Signs (Orange)
- Politeness violations
- Power imbalances
- Destructive disagreement
- Toxicity spikes
- Negative sentiment trends

### Constructive Growth Signs (Green)
- Good argument structure
- Turn-taking balance
- Empathic responses
- High engagement
- Viewpoint diversity

## Research Gaps Identified

1. Limited real-world deployment studies
2. Need for longitudinal evaluation
3. Cross-cultural validation required
4. Hybrid human-AI facilitation understudied

## Relevance to OFL

### For Evaluation Framework
- Comprehensive taxonomy of quality dimensions
- Pre-LLM vs LLM approach comparison
- Warning sign identification

### For Pattern Development
- Intervention strategy catalog
- Escalation ladder concept
- Facilitation vs moderation distinction

### For AI Facilitation
- LLM capability mapping by dimension
- Practical implementation approaches
- Research direction guidance

## See Also

- [[research/WHoW-Framework|WHoW Framework]] - Complementary moderation analysis
- [[research/ai-moderation-chatbots|AI Moderation & Chatbots]]
- [[evals/why-how-who-framework|Why-How-Who Framework]]
- [[research/fora-corpus|Fora Corpus]] - Empirical facilitation data
