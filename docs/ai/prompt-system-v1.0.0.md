---
title: DOHNUT AI Prompt System
date: 2026-08-31
version: 1.0.0
author: DOHNUT / GangNiaga Sdn. Bhd.
status: draf
tags: [prompts, ai, few-shot, prompt-engineering]
related_documents:
  - ../visual-ai/visual-ai-engine-v1.0.0.md
  - ../visual-ai/creative-genome-v1.0.0.md
  - skills-matrix-v1.0.0.md
---

# DOHNUT AI Prompt System

## Standard Prompt Contract

Setiap prompt production perlu mempunyai:

1. **Context** — tujuan dan scenario.
2. **Role** — persona/agent.
3. **Inputs** — required dan optional data.
4. **Output** — format, length dan style.
5. **Constraints** — safety, privacy, accessibility dan domain limits.
6. **Few-shot examples** — 2–3 examples untuk task kompleks.
7. **Version** — semantic versioning.

## Categories

| Category | Example module |
|---|---|
| Content | Social caption / campaign copy |
| Creative | DOH Language / DOH Cinema |
| Visual | Google Flow prompt generation |
| Analysis | Campaign and performance analysis |
| Coding | Brand tooling / prompt compiler |
| QA | Brand compliance review |
| Project | Creative production planning |

## Master Visual Prompt Contract

```text
CONTEXT
→ ROLE
→ PRODUCT
→ MATERIAL / TEXTURE
→ FILLING / TOPPING
→ VISUAL LANGUAGE
→ LIGHTING
→ COMPOSITION
→ BACKGROUND
→ BRAND PRESENCE
→ EMOTIONAL OBJECTIVE
→ QUALITY TARGET
→ AVOID
```

## Example Few-Shot

### Example 1 — Product Hero

Input: stuffed chocolate-hazelnut donut, yellow background, premium studio.

Output direction: golden-brown thick dough, glossy chocolate overflow, tactile 3D materiality, clean commercial composition.

Why effective: product, material, filling, background and quality objective are explicit.

### Example 2 — Cinema Campaign

Input: chocolate-hazelnut drop, action genre, Doh Boy enabled.

Output direction: cinematic hero composition, dramatic product lighting, transformed title **DOH WICK — THE LAST BITE**, original action world.

Why effective: it connects product + verbal identity + character + visual narrative without requiring copied third-party artwork.
