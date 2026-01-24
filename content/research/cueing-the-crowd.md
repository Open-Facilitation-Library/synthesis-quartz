---
title: "Cueing the Crowd: LLM-Driven Conversational Cues"
tags:
  - research
  - LLM
  - brainstorming
  - collective-intelligence
---

# Cueing the Crowd: LLM-Driven Conversational Cues

*[Rayan et al., 2025](https://doi.org/10.1145/3715928.3737486) — Collective Intelligence Conference*

---

Can an AI listening to your conversation occasionally nudge you toward unexplored territory? This study from [UC San Diego's Design Lab](https://designlab.ucsd.edu/) suggests yes—and that these nudges work whether you're meeting in person or over video.

The researchers built **CueTip**, a system that transcribes ongoing conversations and uses [GPT-4o-mini](https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence/) to generate short "conversational cues"—prompts of five words or fewer that appear on screen every minute. Think of them as gentle suggestions: *"What about environmental impact?"* or *"Consider the elderly"* when a brainstorming session gets stuck.

## The Experiment

172 participants worked in pairs on a 20-minute brainstorming task (finding alternative uses for recyclable items). Half received AI-generated cues; half didn't. The study also compared in-person and virtual meetings, creating four conditions.

The main finding: **cued groups generated more topically diverse ideas** than uncued groups, regardless of whether they met face-to-face or over video. The cues didn't necessarily increase the *quantity* of ideas, but they expanded the *conceptual range* that participants explored.

Interestingly, in-person participants noticed slightly more cues on average than virtual participants—suggesting that meeting modality affects how people allocate attention to AI assistance.

## Why This Matters for [[knowledge-base/concepts/ai-facilitation-approaches|AI Facilitation]]

CueTip represents a lightweight form of [[knowledge-base/glossary#Inference-time Skills|inference-time facilitation]]—the AI doesn't take over the conversation, it simply offers occasional prompts. This contrasts with more active approaches like the [[research/agent-facilitates-crowd-discussion|D-agree platform]], where the AI directly participates in discussion.

The study offers practical design guidance:

**Brevity helps.** Cues under five words worked well. Longer prompts might feel intrusive or break conversational flow.

**Consistency matters.** Regular timing (one cue per minute) let participants develop expectations about when cues would arrive, making them easier to integrate.

**Modality shapes attention.** Virtual meetings may require different notification strategies than in-person ones—participants allocate attention differently when a screen is already their primary focus.

## Limitations

The study used dyads (pairs) rather than larger groups, where facilitation challenges multiply. The brainstorming task was also relatively simple—more complex [[knowledge-base/glossary#Deliberative|deliberative]] discussions might respond differently to AI cues.

## Related Research

For more active AI facilitation approaches, see [[research/agent-facilitates-crowd-discussion|D-agree: An Agent that Facilitates Crowd Discussion]]. For a comparison of AI versus human facilitators on decision-making tasks, see [[research/bringing-everyone-to-table|Bringing Everyone to the Table]]. The [[research/evaluation-facilitation-llm-era|Korre et al. survey]] provides a broader taxonomy of AI facilitation strategies.
