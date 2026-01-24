---
title: "Cueing the Crowd: LLM-Driven Conversational Cues"
tags:
  - research
  - LLM
  - brainstorming
  - conversational-cues
  - collective-intelligence
---

# Cueing the Crowd: LLM-Driven Conversational Cues

LLM-driven conversational cues across different meeting modalities increase topical diversity of generated ideas during collaborative brainstorming.

*Source: [CI 2025](https://doi.org/10.1145/3715928.3737486) (Rayan et al., 2025)*

---

## Overview

This research investigates how AI-generated conversational cues can support verbal group discussions. The CueTip system uses GPT-4o-mini to generate real-time contextual cues that stimulate ideation during brainstorming sessions, comparing effects across virtual and in-person modalities.

## Authors

- Jude Abishek Rayan, Shaokang Jiang, Nishant Balaji, Jinmao Wang, Ian Gross, Cole Biehle, Steven P. Dow

**Institution:** University of California, San Diego

## Research Questions

- **RQ1:** How do AI-generated conversational cues impact the productivity of verbal group brainstorming?
- **RQ2:** How does modality (in-person vs. virtual) affect attention to cues and overall discussion?

## CueTip System

### Key Features

1. **Video conferencing integration** - Supports voice/video control and chat
2. **Real-time transcription** - Microphones capture conversation for LLM context
3. **LLM-powered cue generation** - GPT-4o-mini generates contextual cues
4. **Cue notification** - Visual + audio alerts for new cues
5. **Collaborative notes** - Shared note-taking space
6. **Cue history** - Users can revisit prior cues

### Cue Generation

- Uses GPT-4o-mini model
- Cues limited to <5 words based on piloting
- Generated every minute for consistency
- Context includes conversation summary and recent utterances

## Study Design

### 2x2 Factorial Design

| Condition | Cues | Modality |
|-----------|------|----------|
| Cue-Virtual | Yes | Virtual |
| Cue-InPerson | Yes | In-person |
| NoCue-Virtual | No | Virtual |
| NoCue-InPerson | No | In-person |

### Participants

- **N = 172** participants in 86 dyads
- Ages 18-37 (median 21)
- Balanced for gender and age

### Task

20-minute brainstorming session to generate alternative uses for recyclable items from a beach cleanup.

## Key Findings

### Topic Diversity

**Cued participants generated significantly more topically diverse ideas than non-cued dyads** across both modalities.

### Modality Effects

- In-person groups noticed slightly more cues on average than virtual groups
- Positive correlation between cue noticing rate and topic diversity
- Number of ideas correlated with cue noticing only in virtual groups

### Participant Feedback

Participants reported that cues:
- Allowed exploration of new directions
- Helped when they ran out of ideas
- Opened up the conversation space

## Hypotheses Tested

**H1:** AI-generated conversational cues impact real-time group brainstorming productivity ✓

**H2:** Discussion modality impacts cue noticing rate and brainstorming productivity ✓

## Technical Implementation

### Cue Delivery
- Visual notification on screen
- Subtle audio chime
- Consistent timing (1 cue per minute, ~18 total)

### Setup
- Two laptops per dyad
- Researcher present in both conditions
- Real-time collaborative notes via TipTap

## Design Implications

### For Conversational AI Support

1. **Brevity matters** - Short cues (<5 words) worked well
2. **Timing consistency** - Regular intervals maintain engagement
3. **Multi-modal notification** - Visual + audio helps noticing
4. **Context awareness** - LLM uses conversation history for relevance

### For Meeting Modality

1. **In-person** - Higher cue noticing, different attention allocation
2. **Virtual** - Cue noticing correlates with idea quantity
3. **Both benefit** - Topic diversity improves regardless of modality

## Relevance to OFL

### For AI Facilitation

- Demonstrates LLM-based real-time facilitation
- Shows cues can enhance rather than distract
- Provides modality-specific design guidance

### For Pattern Development

- Cue generation as a facilitation pattern
- Timing and notification strategies
- Topic diversity as outcome measure

### For Evaluation

- Methodology for measuring brainstorming productivity
- Topic diversity metrics
- Cue noticing rate as process measure

## Limitations

- Dyads only (not larger groups)
- Single brainstorming task type
- Short duration (20 minutes)
- Lab setting vs. real-world meetings

## See Also

- [[research/agent-facilitates-crowd-discussion|D-agree Platform]]
- [[research/ai-moderation-chatbots|AI Moderation & Chatbots]]
- [[research/bringing-everyone-to-table|LLM vs Human Facilitation]]
