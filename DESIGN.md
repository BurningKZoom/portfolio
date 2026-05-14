---
name: kzoom Portfolio
description: Strategic BI & Data Infrastructure Portfolio
colors:
  primary: "#3b82f6"
  neutral-bg: "#09090b"
  neutral-text: "#fafafa"
  neutral-muted: "#a1a1aa"
  neutral-border: "#27272a"
typography:
  display:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "clamp(2rem, 5vw, 4rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  mono:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.875rem"
    fontWeight: 500
rounded:
  none: "0px"
  sm: "2px"
spacing:
  base: "16px"
---

# Design System: kzoom Portfolio

## 1. Overview

**Creative North Star: "Circuitry & Shadows"**

The "Circuitry & Shadows" system is a professional, high-tech aesthetic that visualizes the "under-the-hood" complexity of data infrastructure. It rejects the "softness" of modern SaaS landing pages in favor of raw structural transparency—visible grids, sharp corners, and technical typography. 

It is a monochromatic-first system where color is used sparingly but with high intent to highlight "Strategic Impact." The vibe is focused, authoritative, and intentionally dense, mirroring the work of a senior BI architect.

**Key Characteristics:**
- **Raw Infrastructure**: Visible grid lines and fine 1px borders define the layout.
- **Monospaced Authority**: Technical details and metrics are always in JetBrains Mono.
- **Obsidian Density**: Deep, tinted blacks (`#09090b`) create a "monolithic" feel.

## 2. Colors

A strictly restrained palette focusing on high-contrast technical clarity.

### Primary
- **Impact Blue** (#3b82f6): Used exclusively for highlighting strategic metrics, calls to action, and key structural accents. It represents the "spark" of insight within the data.

### Neutral
- **Obsidian Black** (#09090b): The bedrock of the system. A deep, slightly cool-tinted black for all backgrounds.
- **Stark White** (#fafafa): High-contrast text color for maximum readability.
- **Steel Muted** (#a1a1aa): Secondary text and non-critical details.
- **Circuit Border** (#27272a): The 1px line color for all structural grids and dividers.

### Named Rules
**The 10% Spark Rule.** Impact Blue must never occupy more than 10% of any given screen. Its power comes from its rarity.
**The No-True-Black Rule.** Backgrounds are always slightly tinted Obsidian Black to prevent a "dead" screen feel.

## 3. Typography

The pairing of JetBrains Mono and Inter balances technical precision with high-performance readability.

**Display Font:** JetBrains Mono
**Body Font:** Inter
**Label/Mono Font:** JetBrains Mono

### Hierarchy
- **Display** (800, clamp(2rem, 5vw, 4rem), 1.1): Used for main section headers. Always uppercase and tracking-tight.
- **Title** (700, 1.5rem, 1.2): Used for project titles and card headings.
- **Body** (400, 1rem, 1.6): Used for all descriptive text. Max line length 65ch.
- **Label** (500, 0.75rem, 0.2em tracking): Used for metadata, tags, and small technical labels. Always uppercase.

## 4. Elevation

The system is strictly flat. Depth is conveyed through tonal layering and structural borders, never shadows.

### Named Rules
**The Flat-By-Default Rule.** Shadows are forbidden. Depth is created by layering slightly lighter or darker neutrals with 1px borders.

## 5. Components

### Buttons
- **Shape:** Square (0px radius)
- **Primary:** Obsidian Black background, Impact Blue 1px border, Stark White text.
- **Hover:** Background shifts to a very subtle blue tint (oklch(25% 0.05 250)).

### Cards
- **Corner Style:** Sharp (0px radius)
- **Background:** Transparent or slightly lighter Obsidian.
- **Border:** 1px Circuit Border (#27272a).

### Navigation
- **Style:** Fixed top nav, 1px bottom border. Text in Label style.

## 6. Do's and Don'ts

### Do:
- **Do** use 1px borders to separate all sections and cards.
- **Do** use JetBrains Mono for all numbers and impact metrics.
- **Do** maintain a strict 65ch line length for paragraphs.

### Don't:
- **Don't** use border-radius greater than 2px.
- **Don't** use gradients, especially text gradients.
- **Don't** use "soft" pastel colors or white backgrounds.
- **Don't** use shadows or glassmorphism effects.
