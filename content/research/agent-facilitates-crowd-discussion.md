---
title: "An Agent that Facilitates Crowd Discussion"
tags:
  - research
  - AI-facilitation
  - crowd-scale
  - IBIS
  - argumentation
---

# An Agent that Facilitates Crowd Discussion

A crowd-scale discussion support system (D-agree) based on an automated facilitation agent that extracts discussion structures, analyzes them, and posts facilitation messages.

*Source: [Group Decision and Negotiation 31:621–647](https://doi.org/10.1007/s10726-021-09765-8) (Ito et al., 2022)*

---

## Overview

Online discussion platforms need support functions to integrate opinions and achieve consensus at scale. Human facilitators face cognitive challenges when discussions grow large. This paper presents D-agree, a system that combines automated facilitation agents with human facilitators to manage crowd-scale online discussions.

## Authors

- Takayuki Ito, Rafik Hadfi (Kyoto University)
- Shota Suzuki (Nagoya Institute of Technology)

## The Problem

Crowd-scale discussion platforms face key challenges:
- Human facilitators struggle with thousands of simultaneous opinions
- Complex themes require structured argumentation
- Need to extract insights while maintaining discussion quality

## D-Agree Platform

### Architecture

The system combines:
1. **Web platform** - Hosts participants and message exchange
2. **Automated facilitation agent** - Analyzes and responds to discussion

### IBIS-Based Facilitation

Uses Issue-Based Information System (IBIS) framework:
- **Issues** - Questions or problems to discuss
- **Ideas** - Proposed solutions or positions
- **Arguments** - Pros and cons supporting/opposing ideas

The agent classifies posts using deep learning (CNN-based) and builds argument maps.

### Facilitation Mechanism

1. Agent identifies post type (issue, idea, argument)
2. Extracts discussion structure
3. Detects when facilitation is needed
4. Posts targeted facilitation messages

## Research Hypotheses

**Hypothesis 1:** The agent can incentivize participants to submit more postings and diversify them.

**Hypothesis 2:** Agent + human facilitator collaboration increases overall facilitation performance.

**Hypothesis 3:** Participant satisfaction with agent facilitation is above average.

## Experiments

### Large-Scale Social Experiment
- **Location:** Nagoya City, Japan
- **Collaboration:** Municipal government
- **Scale:** Crowd-scale citizen participation
- **Outcome:** Collected insights used for social policies

### Small-Scale Controlled Experiment
- Compared agent-only, human-only, and combined facilitation
- Measured post diversity, quantity, and user satisfaction

## Key Findings

1. **Combined facilitation works best** - Agent + human facilitator leads to higher user satisfaction
2. **Agent increases participation** - More posts and greater diversity with agent facilitation
3. **Real policy impact** - Results used by Nagoya municipal government for policy development

## Technical Approach

### Post Classification
- CNN-based deep learning classifier
- Trained on labeled IBIS elements
- Real-time classification of incoming posts

### Facilitation Rules
Rule-based responses tied to argument structure:
- Prompt for ideas when only issues exist
- Request arguments when ideas lack support
- Encourage exploration of under-discussed branches

## Evaluation Methodology

Combined approaches:
- Quantitative analysis of IBIS elements generated
- User satisfaction questionnaires
- Psychological measurement scales
- Statistical analysis of interaction patterns

## Relevance to OFL

### For AI Facilitation
- Demonstrates viable automated facilitation at scale
- IBIS framework for structured discussion
- Human-AI collaboration model

### For Pattern Development
- Facilitation rules based on argument structure
- Classification-based intervention triggers
- Real-world deployment insights

### For Evaluation
- Satisfaction measurement methodology
- Participation metrics (quantity, diversity)
- Policy impact as outcome measure

## Limitations

- Rule-based facilitation (pre-LLM era)
- Japanese language focus
- Structured IBIS format required

## Related Work

- COLLAGREE system (predecessor platform)
- Participatory budgeting systems
- Climate Change Collaboratorium

## See Also

- [[research/ai-moderation-chatbots|AI Moderation & Chatbots]]
- [[research/evaluation-facilitation-llm-era|LLM Facilitation Survey]]
- [[research/deliberative-mini-publics|Deliberative Mini-Publics]]
