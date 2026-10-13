---
name: Destro.me
description: A bold editorial color system for a personal portfolio, project archive, and writing collection.
colors:
  ink: "#160814"
  muted-ink: "#51444f"
  paper: "#f8f6e8"
  fine-rule: "#ddd4c6"
  text-accent: "#b5221d"
  vermilion: "#ef2b23"
  rose: "#f89aa6"
  focus-green: "#506c58"
typography:
  display:
    fontFamily: "Alfa Slab One, Georgia, serif"
    fontSize: "clamp(2.8rem, 6.1vw, 6.1rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "DM Mono, SFMono-Regular, Consolas, monospace"
    fontSize: "0.68rem"
    fontWeight: 400
    letterSpacing: "0.06em"
rounded:
  square: "0px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
components:
  contact-link:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.square}"
    padding: "6.4px 12.8px"
    height: "36.8px"
---

# Design System: Destro.me

## Overview

**Creative North Star: “The Color Block Index”**

This visual system uses confident color fields, oversized display lettering, and a clear editorial hierarchy to bring software projects, hands-on work, and writing into one portfolio. Warm paper and plum ink ground the bright vermilion and rose; restrained dark red marks text links and interactive emphasis. Alfa Slab One gives short headings an expressive, crafted voice, while DM Sans keeps reading copy clear and DM Mono gives metadata a technical register.

The system carries that language across the homepage, project archive, notes index, and articles. It stays flat and square, using color, fine rules, imagery, and type hierarchy to distinguish content. Individual surfaces can arrange those ingredients to fit their material.

**Key Characteristics:**
- Plum ink, warm paper, muted text, and a fine warm rule support vermilion and rose fields.
- Slab display type is paired with practical sans-serif body text and compact mono labels.
- Square edges, precise rules, and minimal depth effects.

## Colors

The palette balances warm paper and plum ink with two distinct reds: vermilion for bold homepage fields, and a darker readable red for archive title fields and text accents; rose softens supporting surfaces.

### Primary
- **Plum Ink**: The deepest field and principal text color; it anchors the palette and grounds code surfaces.
- **Readable Red**: The dark red accent for archive title fields, links, focus, and text emphasis where vermilion would be too bright for small text.

### Secondary
- **Signal Vermilion**: A bright block color for prominent title fields and other emphatic surfaces.
- **Warm Rose**: A softer field and subtle interaction tint, including code and quotation treatments.

### Neutral
- **Warm Paper**: The light page canvas and reversed text color.
- **Muted Plum**: Secondary copy and supporting descriptions.
- **Warm Rule**: Fine dividers between sections and list entries.

### Tertiary
- **Garden Green**: A secondary focus treatment and metadata color on selected surfaces.

**The Two Reds Rule.** Use vermilion for the homepage's bold color fields; use readable red for archive title fields and smaller text accents.

## Typography

**Display Font:** Alfa Slab One (with Georgia, serif fallback)  
**Body Font:** DM Sans (with sans-serif fallback)  
**Label/Mono Font:** DM Mono (with SFMono-Regular, Consolas, monospace fallback)

**Character:** The slab display face supplies a sturdy, expressive voice for short headings. DM Sans carries paragraphs and interface copy; DM Mono marks dates, categories, and compact utility labels.

### Hierarchy
- **Display** (400, responsive, up to 6rem on shared archive pages and 7.5rem on the home surface, tight line-height): Page titles and other short display moments.
- **Headline** (400, responsive 1.5–2.8rem, about 1.08 line-height): Section and feature headings.
- **Title** (400, responsive 1.5–2.5rem, about 1.1 line-height): Project names and note titles.
- **Body** (400, 1rem base, 1.65 line-height): General copy. Article text uses a 68ch measure and more open line spacing.
- **Label** (400–500, 0.68–0.72rem, 0.04em letter-spacing where applied, often uppercase): Dates, categories, repository language, and utility links.

**The Short Display Rule.** Reserve Alfa Slab One for headings and short labels; use DM Sans for paragraphs and extended reading.

## Layout

Use clear alignment, generous breathing room, and grid relationships that adapt to their content. Shared page shells cap at 1280px; article reading copy stays at 68ch even when the outer article shell is wider. Spacing uses compact multiples of 8px, with larger gaps expressed responsively through `clamp()`. At widths below 720px, archive grids and note rows simplify into single-column flows. Keep imagery and list rows square-edged.

## Elevation & Depth

The system is flat by default and uses no shadows. Color contrast, image crops, and fine rules distinguish surfaces. Some image links scale subtly on hover; reduced-motion preferences remove transitions.

## Shapes

Use square corners and crisp edges for controls, image frames, color fields, and list rows. Thin rules separate sections and entries. A subtle rose tint may mark a hovered repository row or quotation block. Circular marks remain a localized identity detail rather than a general component shape.

## Components

### Navigation and contact link
- **Character:** Compact, direct navigation with a high-contrast contact action.
- **Shape:** Square corners (0px); the contact action has a fine ink border.
- **Color:** Navigation text uses ink; the contact action uses ink ground with paper text.
- **Hover / Focus:** Links shift to readable red; the contact action reverses to paper ground and ink text. Shared controls use visible focus outlines; the homepage uses its green focus treatment.
- **Responsive behavior:** Navigation may wrap and reduce its spacing at tablet widths.

### Page title field
- **Character:** A short slab heading set against a readable-red field, used to open archive surfaces.
- **Shape:** Square-edged inline field with compact padding; a strong rule anchors the surrounding intro.
- **Color:** Paper lettering on readable red; supporting deck copy uses muted plum.

### Project and repository entries
- **Character:** Image-led feature entries pair project imagery with concise slab titles; repository rows use open, ruled list items.
- **Shape:** Images and rows stay unrounded; repository hover uses a faint rose tint.
- **Color:** Ink titles and descriptions on paper, with metadata in green or mono styling.
- **Behavior:** Feature imagery may scale subtly on hover; respect reduced motion.

### Notes and article content
- **Character:** Notes use ruled list rows with mono dates and display titles; articles prioritize a calm, readable text measure.
- **Shape:** Section dividers and article footer use fine rules. Quotes use a left accent rule and a light rose ground.
- **Code:** Inline code gets a soft rose tint; code blocks use a plum ground, paper text, and a readable red top rule.
- **Measure:** Article paragraphs and lists stay within 68ch.

## Do's and Don'ts

### Do:
- **Do** use vermilion for bold homepage fields and readable red for archive title fields and smaller text accents.
- **Do** pair display headings with DM Sans reading copy and DM Mono metadata.
- **Do** preserve square edges, fine rules, and generous spacing across surfaces.
- **Do** keep article copy within the established 68ch measure.
- **Do** show keyboard focus clearly and respect reduced-motion preferences.

### Don't:
- **Don't** use bright vermilion for small text where the darker text accent is established.
- **Don't** add decorative shadows or rounded corners to the square, flat form language.
- **Don't** set extended paragraphs in the display or mono face.
- **Don't** let code blocks lose their plum ground and readable contrasting text.
