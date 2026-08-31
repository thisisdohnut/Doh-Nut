---
title: DOHNUT Creative Genome
date: 2026-08-31
version: 1.0.0
author: DOHNUT / GangNiaga Sdn. Bhd.
status: draf
tags: [creative-genome, schema, ai]
related_documents:
  - visual-ai-engine-v1.0.0.md
  - ../ai/prompt-system-v1.0.0.md
---

# DOHNUT Creative Genome

## Purpose

**Creative Genome** ialah structured brief contract yang memisahkan creative intent daripada prompt wording supaya output boleh diulang dan dibandingkan.

## Required Fields

| Field | Description |
|---|---|
| objective | Matlamat asset |
| product.type | Jenis produk |
| product.flavour | Flavour |
| visual.tier | Visual complexity 1–5 |
| visual.camera | Camera language |
| visual.lighting | Lighting direction |
| visual.background | Environment |
| verbal.candidate | Copy candidate |
| cinema.mode | Genre/story mode |
| character.enabled | Sama ada Doh Boy digunakan |
| character.mode | Personality mode |

## Example

```json
{
  "objective": "limited_drop_campaign",
  "product": {
    "type": "stuffed_donut",
    "flavour": "chocolate_hazelnut",
    "filling_behavior": "dramatic_ooze"
  },
  "visual": {
    "tier": 5,
    "camera": "low_angle_cinematic",
    "lighting": "premium_cinematic",
    "background": "original_dohnut_action_world"
  },
  "verbal": {
    "candidate": "DOH WICK — THE LAST BITE"
  },
  "cinema": {
    "mode": "action"
  },
  "character": {
    "enabled": true,
    "mode": "action_hero"
  }
}
```
