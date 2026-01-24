---
title: "Generative Social Choice"
tags:
  - research
  - social-choice
  - LLM
  - democracy
  - deliberation
---

# Generative Social Choice

A new paradigm for designing democratic processes that combines social choice theory with LLM capabilities for open-ended collective decisions.

*Source: [arXiv:2309.01291v3](https://arxiv.org/abs/2309.01291) (Fish et al., 2025)*

---

## Overview

Traditional social choice theory only applies to choices among predetermined alternatives. Generative Social Choice extends this to open-ended decisions—such as collectively selecting textual statements—by combining mathematical rigor with LLM text generation and preference extrapolation.

## Authors

Sara Fish, Paul Gölz, David C. Parkes, Ariel D. Procaccia, Gili Rusak, Itai Shapira, Manuel Wüthrich

**Institutions:** Harvard University, Cornell University

## The Problem

Many pressing questions are too nuanced for traditional voting:
- Deliberative minipublics on climate change, electoral reform
- AI alignment questions (e.g., "how far should AI personalization go?")
- Complex policy recommendations

Traditional voting lacks:
- **Scalability** for open-ended questions
- **Guarantees** on representation quality

## Framework Design

The methodology divides AI-augmented democratic processes into two components:

### 1. Oracle Query Design
Prove the process satisfies representation guarantees given access to oracle queries:
- **Discriminative queries**: Compare preference between statements
- **Generative queries**: Generate statements optimizing for a group

### 2. LLM Implementation
Empirically validate that oracle queries can be approximately implemented using LLMs.

## Key Concepts

### Statement Space Complexity

Uses VC dimension (from learning theory) to measure complexity:
- Low VC dimension = structured preference space
- Enables representation guarantees with finite queries

### Representation Guarantees

**Balanced Justified Representation (BJR):**
For any cohesive group of size ≥ n/k, at least one statement in the output slate is well-liked by that group.

## Empirical Validation

### Trial Design
- **Participants:** 100 representative US residents
- **Topic:** Abortion policy opinions
- **Output:** Slate of 5 representative statements

### Results
**84 out of 100 participants** felt "excellently" or "exceptionally" represented by the extracted slate.

### LLM Implementation

The process uses a multi-component design:

1. **Feature Embedding:** LLM rates each agent on 50 sampled features (7-point scale)
2. **Clustering:** Nearest-neighbor and balanced k-means identify cohesive groups
3. **Statement Generation:** LLM generates statements maximizing minimum utility in cluster

## Process Design

### Process 1: Basic Version
- Uses Gen(S, r) queries for generating statements
- Polynomial time in n, k

### Process 2: Bounded Complexity
- Runs Gen on random subset of agents
- Subset size independent of total n
- Achieves BJR with bounded VC dimension

## Technical Insights

### Discriminative Query Performance
Preference prediction accuracy validated against held-out statements:
- Higher predicted preferences correlate with higher actual ratings
- Token probabilities enable fine-grained preference estimation

### Generative Query Challenges
- LLMs struggle with direct optimization of Gen(S, r)
- Decomposition into (i) group identification + (ii) statement generation works better
- Clustering provides more robust group identification than pure LLM

## Applications

### Deliberative Minipublics
- Scale deliberation to larger populations
- Maintain representation guarantees
- Complement rather than replace face-to-face deliberation

### AI Alignment
- Aggregate diverse stakeholder preferences
- Generate representative policy statements
- Democratic input to AI development

### Policy Consultation
- Summarize public opinion on complex issues
- Proportional representation of viewpoints
- Transparent methodology

## Relevance to OFL

### For Cross-Pollination
- Mathematical framework for opinion aggregation
- Representation guarantees for diverse viewpoints
- LLM-based preference extrapolation

### For Evaluation
- VC dimension as complexity measure
- BJR as fairness criterion
- Empirical validation methodology

### For Pattern Development
- Statement generation as facilitation output
- Clustering for group identification
- Preference modeling approaches

## Limitations

- Assumes structured preference space (bounded VC dimension)
- LLM preference extrapolation may have biases
- Validated only for opinion summarization task

## See Also

- [[research/deliberative-mini-publics|Deliberative Mini-Publics]]
- [[knowledge-base/concepts/ai-facilitation-approaches|AI Facilitation Approaches]]
- [[research/evaluation-facilitation-llm-era|Evaluation & Facilitation Survey]]
