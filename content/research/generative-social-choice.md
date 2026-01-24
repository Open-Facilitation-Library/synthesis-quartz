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

*[Fish et al., 2025](https://arxiv.org/abs/2309.01291) — Harvard & Cornell*

---

Traditional voting works when you have a fixed menu: pick candidate A, B, or C. But what about questions like "What should our AI policy priorities be?" where the options themselves need to be generated? This paper from [Harvard](https://www.harvard.edu/) and [Cornell](https://www.cornell.edu/) introduces *generative social choice*—using LLMs to both generate policy statements and predict how different people would feel about them.

## The Core Idea

Social choice theory studies how to aggregate individual preferences into collective decisions. It typically assumes preferences over a known set of alternatives. But many important questions are open-ended: citizens might agree on wanting "fair housing policy" while disagreeing wildly on what that means in practice.

The insight here is that LLMs can do two things that enable a new kind of democratic process:

1. **Generate statements** that attempt to capture what a group wants
2. **Predict preferences** over statements even for people who haven't rated them

This lets you run something like a deliberation at scale, without requiring every participant to read and rate every possible option.

## How It Works

The process uses mathematical guarantees from learning theory. The key concept is *VC dimension*—a measure of how complex the preference space is. If preferences have bounded VC dimension (meaning people's opinions follow some underlying structure rather than being totally random), then you can identify representative statements with a manageable number of queries.

In practice, the researchers:

1. Ask participants to describe their views on a topic (abortion policy in the trial)
2. Use an LLM to embed these views as "feature ratings" (50 dimensions)
3. Cluster participants into groups with similar views
4. Generate candidate statements optimized for each cluster
5. Verify that the statements actually represent people well

The mathematical machinery ensures *Balanced Justified Representation*: for any group of similar-minded people above a certain size, at least one statement in the output represents them well.

## The Trial

100 representative US residents discussed abortion policy. The process generated a slate of 5 statements. **84 out of 100 participants** felt "excellently" or "exceptionally" represented by the slate—not that they agreed with every statement, but that their perspective was included.

This is notable because abortion is a divisive topic where traditional voting tends to produce winners and losers rather than representative summaries.

## Limitations to Note

The approach assumes preferences have structure (bounded VC dimension). For topics where opinions are genuinely chaotic, the guarantees don't hold. The LLM preference predictions may also carry biases from training data—if the model has systematic blind spots about certain viewpoints, those perspectives may be underrepresented.

The trial also focused on opinion *summarization*, not decision-making. Generating representative statements is different from choosing policies—the latter requires additional mechanisms for evaluation and selection.

## Connection to OFL

This research addresses a different part of the facilitation pipeline than most OFL work. Where papers like [[research/cueing-the-crowd|Cueing the Crowd]] and [[research/agent-facilitates-crowd-discussion|D-agree]] focus on *during* conversation, generative social choice addresses the *synthesis* phase—turning a collection of perspectives into representative outputs.

For [[knowledge-base/glossary#Cross-Pollination|cross-pollination]], the preference-prediction capability is particularly relevant. If an LLM can predict how someone would feel about a statement, it can identify which statements would be most surprising or perspective-expanding for them.

The VC dimension framework might also inform [[evals/why-how-who-framework|evaluation]]: if a facilitation process produces outputs where participants feel represented, that's evidence the process captured the structure of opinions in the room.

## Related Research

For AI facilitation during discussion, see [[research/bringing-everyone-to-table|Bringing Everyone to the Table]]. For opinion aggregation in [[knowledge-base/glossary#Deliberative|deliberative]] contexts, see [[research/deliberative-mini-publics|Deliberative Mini-Publics]].
