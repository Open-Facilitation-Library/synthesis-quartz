---
title: Open Facilitation Library
---

Open standards for AI-assisted facilitation and deliberative democracy. Research, patterns, agent skills, and workflow definitions — all open source.

## Seminars

The OFL seminar series brings together experts in facilitation, deliberative democracy, and AI-assisted dialogue.

[[seminars/index|Browse all seminars]] | Recent: [[seminars/jorim-dembrane|Jorim Dembrane]], [[seminars/cecile-green|Cecile Green]], [[seminars/andy-paice|Andy Paice]], [[seminars/alice-siu|Alice Siu]], [[seminars/jigsaw|Jigsaw]], [[seminars/martin-carcasson|Martin Carcasson]]

## Research

Key papers and research topics supporting OFL development.

| Paper | Description |
|-------|-------------|
| [[research/WHoW-Framework\|WHoW Framework]] | Cross-domain moderation analysis (Chen et al. 2024) |
| [[research/fora-corpus\|Fora Corpus]] | 262 facilitated dialogues from MIT (Schroeder et al. 2024) |
| [[research/agent-facilitates-crowd-discussion\|D-agree Platform]] | Automated facilitation agent at crowd scale (Ito et al. 2022) |
| [[research/jigsaw-facilitation-ai-era\|Facilitation in the AI Era]] | Ethnographic study of 22 expert facilitators (Jigsaw 2025) |
| [[research/cueing-the-crowd\|Cueing the Crowd]] | LLM conversational cues for brainstorming (Rayan et al. 2025) |
| [[research/evaluation-facilitation-llm-era\|LLM Facilitation Survey]] | Comprehensive survey on LLM-based facilitation (Korre et al. 2025) |
| [[research/generative-social-choice\|Generative Social Choice]] | LLM-augmented democratic processes (Fish et al. 2025) |
| [[research/ai-moderation-chatbots\|AI Moderation Chatbots]] | AI moderation and chatbot facilitation |
| [[research/convokit-datasets\|ConvoKit Datasets]] | Datasets for facilitation research |

**More:** [[research/bringing-everyone-to-table|LLM vs Human Facilitation]] | [[research/facilitation-techniques|Techniques]] | [[research/deliberative-mini-publics|Mini-Publics]] | [[research/storytelling-deliberation|Storytelling]]

[[research/index|Browse all research →]]

## Knowledge Base

Core concepts and definitions shared across OFL projects.

- [[knowledge-base/glossary\|Glossary]] - Term definitions
- [[knowledge-base/concepts/conversation-types\|Conversation Types]] - Deliberative, generative, transformative
- [[knowledge-base/concepts/ai-facilitation-approaches\|AI Facilitation Approaches]] - Fine-tuning vs inference-time
- [[knowledge-base/agent-skills\|Agent Skills Design Guide]] - Principles for building executable facilitation skills
- [[knowledge-base/workflows\|Workflows]] - How 14 platforms orchestrate AI facilitation agents

## Evaluation Frameworks

Tools for assessing facilitation quality through structured comparison. Source: [evals repo](https://github.com/Open-Facilitation-Library/evals).

- [[evals/why-how-who-framework\|Why-How-Who Framework]] — Encode, compare, and evaluate facilitation methodologies
- [[evals/index\|Conversation Signatures]] — Compute measurable similarity to reference methodologies

[[evals/index|Browse evaluation frameworks →]]

## Architecture

Three complementary layers:

- **Patterns** (this knowledge base) — abstract facilitation methodologies: cross-pollination, Delphi, retrospectives, and more. Described using the Why-How-Who framework.
- **[[knowledge-base/agent-skills|Agent Skills]]** — executable agent skills following the [Agent Skills specification](https://agentskills.io/specification), designed for AI platforms like [Harmonica](https://harmonica.chat) or [OpenClaw](https://github.com/openclaw). Source: [skills repo](https://github.com/Open-Facilitation-Library/skills).
- **[[knowledge-base/workflows|Workflows]]** — how real platforms orchestrate agents into complete facilitation systems. 14 platforms documented with agent roles, participant models, and stage pipelines.

## Repositories

- [skills](https://github.com/Open-Facilitation-Library/skills) — Executable agent skills (Agent Skills spec)
- [workflows](https://github.com/Open-Facilitation-Library/workflows) — Agent workflow definitions for 14 AI facilitation platforms
- [evals](https://github.com/Open-Facilitation-Library/evals) — Evaluation frameworks and conversation signatures
- [cross-pollination](https://github.com/Open-Facilitation-Library/cross-pollination) — Opinion exposure algorithms

## Support

**[Donate on Giveth](https://giveth.io/project/open-facilitation-library)** — Help fund research, development, and community building.

## Subscribe

Stay updated with OFL research and announcements:

<iframe src="https://openfac.substack.com/embed" width="100%" height="320" style="border:1px solid #EEE; background:white; max-width:480px;" frameborder="0" scrolling="no"></iframe>

## Contributing

1. Add research summaries
2. Propose evaluation criteria
3. Submit pull requests with documentation
