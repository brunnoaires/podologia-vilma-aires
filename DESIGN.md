---
name: Vilma Aires · Podóloga
description: Clean, booking-first home podiatry page for Goiânia; clinical, hyperlegible, one path to WhatsApp.
colors:
  white: "#FFFFFF"
  mint: "#EEF6F5"
  mint-deep: "#DCEDEB"
  line: "#CFE2E0"
  teal: "#0B6E6D"
  teal-hover: "#085958"
  teal-soft: "#2A9C9A"
  leaf: "#3E9B6A"
  ink: "#12302F"
  ink-soft: "#3D5958"
  control: "#6B8E8B"
  whatsapp: "#0F7A37"
  whatsapp-hover: "#0B6430"
  preview-panel: "#E7F1EE"
  bubble: "#D9FDD3"
  bubble-ink: "#11241A"
  placeholder: "#5F7A78"
  selection: "#BFE3E0"
typography:
  display:
    fontFamily: "'Atkinson Hyperlegible Next', 'Atkinson Hyperlegible', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(2.5rem, 5.2vw, 4.25rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "'Atkinson Hyperlegible Next', 'Atkinson Hyperlegible', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.9rem, 3.4vw, 2.75rem)"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  title-card:
    fontFamily: "'Atkinson Hyperlegible Next', 'Atkinson Hyperlegible', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.75rem"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-0.015em"
  title-service:
    fontFamily: "'Atkinson Hyperlegible Next', 'Atkinson Hyperlegible', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.4rem, 2.2vw, 1.75rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  title:
    fontFamily: "'Atkinson Hyperlegible Next', 'Atkinson Hyperlegible', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.3rem"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "'Atkinson Hyperlegible Next', 'Atkinson Hyperlegible', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.15rem, 1.6vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "'Atkinson Hyperlegible Next', 'Atkinson Hyperlegible', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  item:
    fontFamily: "'Atkinson Hyperlegible Next', 'Atkinson Hyperlegible', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.1rem, 1.5vw, 1.2rem)"
    fontWeight: 700
    lineHeight: 1.3
  label:
    fontFamily: "'Atkinson Hyperlegible Next', 'Atkinson Hyperlegible', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.6
  caption:
    fontFamily: "'Atkinson Hyperlegible Next', 'Atkinson Hyperlegible', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.85rem"
    fontWeight: 700
    lineHeight: 1.6
rounded:
  xs: "6px"
  md: "8px"
  bubble: "12px 12px 4px 12px"
  lg: "20px"
  full: "50%"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  gutter: "clamp(20px, 4vw, 40px)"
  section: "clamp(64px, 9vw, 120px)"
  container: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.white}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "0 28px"
    height: "56px"
  button-primary-hover:
    backgroundColor: "{colors.teal-hover}"
    textColor: "{colors.white}"
  button-small:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "0 20px"
    height: "46px"
  button-whatsapp:
    backgroundColor: "{colors.whatsapp}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "0 28px"
    height: "56px"
  button-whatsapp-hover:
    backgroundColor: "{colors.whatsapp-hover}"
    textColor: "{colors.white}"
  nav-link:
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "10px 14px"
  nav-link-hover:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.ink}"
  option-chip:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "10px 14px"
    height: "52px"
  option-chip-selected:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.ink}"
  text-field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0 14px"
    height: "52px"
  booking-card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "clamp(20px, 3vw, 32px)"
  message-preview:
    backgroundColor: "{colors.preview-panel}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.md}"
    padding: "14px 14px 16px"
  message-bubble:
    backgroundColor: "{colors.bubble}"
    textColor: "{colors.bubble-ink}"
    rounded: "{rounded.bubble}"
    padding: "10px 14px"
  course-row:
    textColor: "{colors.ink}"
    typography: "{typography.item}"
    padding: "18px 0"
  course-row-main:
    textColor: "{colors.teal}"
    padding: "22px 0"
  facts-list:
    textColor: "{colors.ink-soft}"
    padding: "28px 0 0"
  check-row:
    textColor: "{colors.ink}"
    typography: "{typography.lead}"
    padding: "22px 0"
  step-dot:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.white}"
    rounded: "{rounded.full}"
    size: "56px"
  family-panel:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "clamp(28px, 5vw, 56px)"
  family-item:
    textColor: "{colors.ink}"
    typography: "{typography.item}"
    padding: "16px 0"
  family-item-plate:
    backgroundColor: "{colors.white}"
    textColor: "{colors.teal}"
    rounded: "{rounded.full}"
    size: "44px"
  whatsapp-float:
    backgroundColor: "{colors.whatsapp}"
    textColor: "{colors.white}"
    rounded: "{rounded.full}"
    size: "60px"
---

# Design System: Vilma Aires · Podóloga

## Overview

**Creative North Star: "The Clinical House Call"**

This is the Brazilian digital-health category standard played straight: a white page, cool mint panels, one deep teal for action and one hyperlegible sans at generous sizes. It should read like a well-run clinic's booking page that happens to come to your home. Nothing is ornamental; every surface exists to help someone, often an older patient or the relative booking for them, decide and start a WhatsApp conversation.

Density is low and the type is large. Hierarchy comes from weight (400 to 800) and size inside a single family, not from a second typeface or colour noise. Depth is reserved: the page is flat with mint tonal bands and hairline rules, and the only card that lifts is the booking form. The signature is functional: a WhatsApp-style message bubble that rewrites itself as the visitor picks options.

Imagery is the logo and authored line icons, nothing else. By the owner's decision the site ships with no photography: trust is carried by true facts, the visit process and the hairline lists that state them.

Confirmed rejections, from the redesign brief: the previous template's decorative serif display face, teal feature cards, stat counters and testimonial cards. The page must sit between a beauty spa and a cold hospital, never at either end.

**Key Characteristics:**
- White ground, mint panels, deep teal action, ink text; leaf green appears only as a tiny marker.
- One family, Atkinson Hyperlegible Next, with body at 18px (17px on phones).
- 8px-radius controls, 20px-radius panels, perfect circles for markers.
- Flat by default; one lifted card (the booking form).
- Authored SVG line icons at one stroke weight (1.8 on a 24 grid), never icon fonts or emoji.
- WhatsApp green means "this opens WhatsApp", and nothing else.
- No photography; the logo and line icons are the only imagery.

### Named Rules
**The No Photography Rule.** The site carries no photographs, photo placeholders or stock imagery. Imagery is limited to logo.png and the authored line-icon set; proof is stated in type, as facts and hairline lists.

**The Certificate-as-Text Rule.** Credentials are set as text transcribed from the real certificates (year, course, institution; course hours are not shown), never as scans or images of the certificates and never as placeholders.

## Colors

A cool, clinical palette: white and mint grounds, a teal sampled from the logo and deepened for action, a teal-black ink, and WhatsApp's own green kept for the booking channel.

### Primary
- **Deep Clinic Teal** (teal): the action colour. Primary buttons (including the family action), step dots, service titles, course years and the main qualification name, links, line icons in the trust facts, check rows and family items, and the checked state of option chips. White on it reaches 6.06:1.
- **Pressed Teal** (teal-hover): hover state for teal buttons and links.
- **Soft Teal** (teal-soft): hover border on chips and fields, and the dashed step connector. Non-text only (3.32:1 on white).

### Secondary
- **WhatsApp Green** (whatsapp): only on buttons that open WhatsApp, including the floating button. White on it reaches 5.44:1. Hover darkens to whatsapp-hover.
- **Bubble Green** (bubble) with **Bubble Ink** (bubble-ink): the message preview bubble only, imitating WhatsApp's outgoing message.

### Tertiary
- **Leaf** (leaf): the second leaf of the logo. Used as an 8px circular marker before each service's "Para quem" line. Never for text, buttons or large fills.

### Neutral
- **Clinic White** (white): page ground, cards, controls, and the icon plates inside the mint family panel.
- **Mint Panel** (mint): tinted full-bleed section bands ("Quem cuida de você", "Como é a visita", closing), the contained family panel, nav hover and selected chips.
- **Deep Mint** (mint-deep): the circular plate behind check icons in the check rows.
- **Preview Mint** (preview-panel): the panel that holds the message bubble.
- **Hairline** (line): 1px dividers for the header (on scroll), booking card border, the family panel border, the top rule of the trust facts, and the row rules of the service list, course lists, check list, family items, FAQ and footer.
- **Ink** (ink): headings and body text (14.1:1 on white). Also the focus ring colour.
- **Soft Ink** (ink-soft): secondary copy, ledes, descriptions (7.59:1 on white, 6.91:1 on mint).
- **Control Stroke** (control): 1.5px borders on chips and fields (3.58:1 on white).
- **Placeholder** (placeholder): field placeholder text (4.62:1 on white).
- **Selection** (selection): text selection highlight.

### Named Rules
**The Green Means WhatsApp Rule.** WhatsApp green is used only on controls that open WhatsApp. On-page navigation and anchors stay teal, even when they lead to the booking form.

**The Rare Leaf Rule.** Leaf green is a marker, never a surface. If it covers more than a dot's worth of area, it is wrong.

**The Mint Band Rule.** Sections separate by alternating white and full-bleed mint bands. When a section on a white band needs its own ground, it gets a flat contained mint panel (hairline border, 20px radius) inside the gutter, never a shadowed card.

## Typography

**Display Font:** Atkinson Hyperlegible Next (with Atkinson Hyperlegible, system-ui, -apple-system, Segoe UI, sans-serif)
**Body Font:** Atkinson Hyperlegible Next (same stack)

The face is self-hosted: one `@font-face` serves the Latin-subset variable file `fonts/atkinson-hyperlegible-next-latin.woff2` (weights 200 to 800, upright only, `font-display: swap`, Latin unicode-range), preloaded in the head, with its SIL OFL 1.1 licence shipped beside it in `fonts/OFL.txt`.

**The Self-Hosted Face Rule.** The type is served from the site's own `fonts/` folder, never from a third-party font CDN. Any new weight or subset goes into the same variable file and `@font-face`, and the licence file ships with it.

**Character:** A humanist sans designed for low-vision readers; open, unambiguous letterforms that stay warm at 800 weight and calm at 400. One family carries the whole page.

### Hierarchy
- **Display** (800, clamp 2.5rem to 4.25rem, 1.02, -0.035em): the hero headline only, capped at 17ch (14ch below 960px).
- **Headline** (800, clamp 1.9rem to 2.75rem, 1.12, -0.02em): section headings, balanced wrap.
- **Card Title** (800, 1.75rem; 1.625rem on phones, -0.015em): the booking card heading.
- **Service Title** (700, clamp 1.4rem to 1.75rem, teal): items in the service list.
- **Title** (700, 1.3rem, -0.01em): step titles and other h3s. FAQ questions use 700 at 1.2rem.
- **Lead** (clamp 1.15rem to 1.3rem): the hero lede (400, soft ink, max 36em) and the check-list rows (500, ink).
- **Item** (700, clamp 1.1rem to 1.2rem, 1.3): the names in hairline-ruled lists: course names and family items.
- **Body** (400, 1.125rem, 1.6; 1.0625rem below 560px): running text, max 60 to 62ch in lists and FAQ answers.
- **Label** (700, 1rem): fieldset legends, field labels, and the soft-ink captions over lists ("Formação", "Aperfeiçoamento", "Na mensagem, informe:"); option chips use 500 at rest and 700 when checked.
- **Caption** (700, 0.85rem, soft ink): the "Mensagem que será enviada" label. The smallest text on the page.

### Named Rules
**The One Family Rule.** Hierarchy is built from weight and size inside Atkinson Hyperlegible Next. No second face, no serif display.

**The Large Print Rule.** Body copy never drops below 17px, and no text drops below 0.85rem. Weight 500 is the floor for interface text in controls.

## Layout

A single 1200px container with a fluid gutter (clamp 20px to 40px). Sections breathe with fluid vertical padding (clamp 64px to 120px); the hero is tighter on top (clamp 24px to 48px).

The hero is a named-area grid: "copy form" over "facts form", with a fluid text column beside a booking column of up to 520px (column gap clamp 40px to 88px, row gap 40px). The headline and lede sit top left, the trust facts below them, and the booking card spans both rows on the right.

The recurring section pattern is the shared asymmetric split (0.8fr / 1.2fr, gap clamp 32px to 96px): heading and short intro on the left, a hairline-ruled list or copy block on the right. "Quem cuida de você", the services and the hygiene section all use it, and the FAQ uses the same proportions. Where the left column is a heading with intro paragraphs (the split head), it is sticky (top 112px) while the list scrolls; "Quem cuida de você" pairs a two-paragraph split head with the training lists.

The family panel is its own area grid: "copy info" over "action info" (1.1fr / 0.9fr, column gap clamp 28px to 72px, row gap 28px), so the heading and button stack on the left and the "Na mensagem, informe:" list centres on the right. Below 960px it becomes one column in the order copy, info, action (row gap 24px).

Steps use three equal columns joined by a dashed teal-soft connector that runs horizontally on desktop and becomes a vertical rail on the left below 960px.

Breakpoints: below 960px the hero collapses to one column in the order copy, form, facts (row gap 28px); the facts flow into auto-fit columns of at least 220px; every split collapses to one column and stops being sticky; the nav hides (the header keeps the "Agendar" button); steps stack. Below 560px body drops to 1.0625rem, the long lede swaps for a one-line version, hero rows tighten to 20px, form fields stack, the family panel tightens its padding to 28px 20px (still inside the gutter, corners kept), and the closing and family buttons go full width.

Spacing rhythm: 8, 16, 24 and 32px for most gaps, with 10px, 12px, 14px, 18px, 22px and 28px used inside components.

## Elevation & Depth

Flat by default. Depth comes from tonal layering (white over mint bands, mint panels inside white cards) and 1px hairlines. Shadows are soft, ink-tinted and few.

### Shadow Vocabulary
- **Card Lift** (`box-shadow: 0 2px 4px rgba(18, 48, 47, 0.05), 0 18px 48px rgba(18, 48, 47, 0.12)`): the booking card only.
- **Header Scroll** (`box-shadow: 0 4px 16px rgba(18, 48, 47, 0.05)`): appears with the hairline once the page scrolls past 8px.
- **WhatsApp Glow** (`box-shadow: 0 6px 18px rgba(15, 122, 55, 0.25)`): under WhatsApp buttons.
- **Float** (`box-shadow: 0 6px 20px rgba(17, 36, 26, 0.25)`): the floating WhatsApp button.
- **Bubble Edge** (`box-shadow: 0 1px 1px rgba(17, 36, 26, 0.12)`): the message bubble's paper edge.
- **Step Halo** (`box-shadow: 0 0 0 8px` mint): a solid ring that cuts the dashed connector around each step dot.

### Named Rules
**The One Lifted Card Rule.** The booking form is the only raised card. Elsewhere, shadow belongs only to WhatsApp controls and the scrolled header; content surfaces sit flat on the page.

## Shapes

Controls (buttons, chips, fields, nav hovers, the preview panel) use gently rounded 8px corners. Large panels (booking card, family panel) use 20px. Markers (step dots, check plates, family icon plates, chip check rings, the service dot, the floating button) are perfect circles. The message bubble alone uses a speech shape (12px with a 4px bottom-right tail corner). Focus rings use 6px. Strokes are 1.5px on controls and 1px for hairlines; dashed lines are used only for the step path.

## Components

### Buttons
Large, solid, unmistakable.
- **Shape:** gently rounded (8px), min-height 56px, 10px gap between icon and label, 700 weight at 1.125rem.
- **Primary:** teal with white text, 0 28px padding. Hover darkens to teal-hover; active nudges down 1px.
- **WhatsApp:** WhatsApp green with the WhatsApp glyph (24px) and a green glow; hover darkens. Full-width inside the booking card.
- **Small:** 46px tall, 0 20px, 1rem; the header "Agendar" button.
- **With trailing arrow:** the family action is a primary button with a 20px arrow after the label that nudges 4px right on hover (0.25s expo-out); full width below 560px.
- **Focus:** 3px ink outline at 3px offset with a 3px white halo, on every surface.

### Chips (booking options)
Radio buttons dressed as large tappable cards.
- **Style:** white, 1.5px control-stroke border, 8px radius, min-height 52px (48px on phones), 500 weight, with a 22px circular check ring on the left.
- **State:** hover turns the border soft teal. Checked fills mint, borders teal with a 1px inset teal ring for a 2.5px total edge, bolds the label to 700, and fills the check ring teal with a white tick. Keyboard focus draws the 3px ink outline.
- **Layout:** two-up grids; one visible choice is always preselected.

### Cards / Containers
- **Booking card:** white, 1px hairline border, 20px radius, Card Lift shadow, fluid padding (clamp 20px to 32px; 18px on phones), 22px internal gap, spanning the hero's form column. Order, in the markup and on screen alike: title, choice groups, period and neighbourhood row, the full-width WhatsApp button, the reassurance note, then the message preview.
- **Family panel:** a flat contained mint panel inside the gutter at every width: 1px hairline border, 20px radius, no shadow, fluid padding (clamp 28px to 56px; 28px 20px on phones). Holds an ink heading with a soft-ink paragraph (max 34em), the family items list and the primary family action.

### Family Items
A hairline-ruled list introduced by a soft-ink label ("Na mensagem, informe:", 700 at 1rem). Each row has 16px vertical padding, a hairline below, and 700-weight text at clamp(1.1rem, 1.5vw, 1.2rem), line-height 1.3, led by a 44px white circular plate holding a teal line icon (10px inset).

### Trust Facts
A plain list inside the hero, under the lede: a 1px hairline on top, 28px above the first item, 22px between items, max 36em. Each fact is a 36px teal line icon beside a bold ink title (1.15rem) and a soft-ink line (1.02rem). Below 960px the facts sit after the form and flow into columns of at least 220px.

### Inputs / Fields
- **Style:** white, 1.5px control-stroke border, 8px radius, min-height 52px, 0 14px padding, teal caret, placeholder in the placeholder colour.
- **Focus:** border turns teal and a 3px ink outline appears at 2px offset. Hover turns the border soft teal.
- **Labels:** always visible above the field at label size; optional parts in 400 soft ink.

### Navigation
- **Header:** sticky white bar, 76px tall (68px on phones), cropped logo mark and two-line wordmark (teal 800 name, soft-ink role) on the left, three anchor links and the small button on the right. A hairline and Header Scroll shadow appear on scroll.
- **Links:** ink, 500 weight, 10px 14px padding, 8px radius; hover fills mint. Hidden below 960px.
- **Footer contact:** below the name and service area, a wrapping row (gap 8px 24px) of two 700-weight teal text links, WhatsApp and a tel: call link, each at least 44px tall. Above the hairline-ruled footer bottom line (0.95rem soft ink).

### Message Preview (signature)
A preview-mint panel labelled with a caption, holding a WhatsApp-style outgoing bubble (bubble green, bubble ink, 1rem at 1.45, speech-shape corners, offset 12% from the left, 6% on phones). The text rewrites itself as options change, with a short settle-in (0.45s, opacity, 2px blur and 4px rise on the expo-out curve) that is skipped under reduced motion.

### Service List
An ordered list split by hairlines, 32px vertical padding per item: teal service title, body description (max 62ch), and a soft-ink "Para quem" line led by the 8px leaf dot.

### Steps
Three numbered 56px teal circles (800, 1.35rem) on a mint halo, joined by a 2px dashed soft-teal path, each with a title and soft-ink line (max 30ch). Centred row on desktop, left rail below 960px.

### FAQ
Native disclosure rows split by hairlines: question at 700, 1.2rem, 22px vertical padding, with a 24px teal chevron that rotates 180 degrees when open (0.3s expo-out); hover turns the question teal. Answers in soft ink, max 60ch.

### Check List
The hygiene section's right column, in the same hairline-row grammar as the service list: a top hairline, then rows with 22px vertical padding and a hairline below each. Each row is lead-size text at 500 weight led by a 32px deep-mint circle holding a teal tick.

### Training Lists
The right column of "Quem cuida de você": a soft-ink label caption ("Formação", then "Aperfeiçoamento" 40px below the first list) over a hairline-ruled ordered list. Each course is a two-column row (a 4.5rem year column, 3.5rem below 560px; gap 16px, 12px on phones; 18px vertical padding): the year in 700 teal with tabular numerals, then the course name at Item size over a 1rem soft-ink meta line (focus and institution). The main qualification row gets 22px padding and a larger teal name (clamp 1.3rem to 1.6rem, -0.01em).

### Floating WhatsApp Button
A 60px WhatsApp-green circle with a 30px glyph and the Float shadow, fixed 20px from the bottom right (16px on phones). It appears only after the booking form has scrolled out of view, rising in from 16px and 0.9 scale. Under reduced motion it skips the rise and only fades in (0.2s linear).

## Do's and Don'ts

### Do:
- **Do** keep every button at least 46px tall (primary buttons 56px, chips 52px, 48px on phones) and give standalone text links at least a 44px tap height.
- **Do** use teal for on-page actions and WhatsApp green only for controls that open WhatsApp.
- **Do** separate sections with alternating white and mint bands, and lists with 1px hairlines.
- **Do** draw icons as inline SVG line icons on a 24px grid with a 1.8 stroke, round caps and joins, in currentColor.
- **Do** show focus with the 3px ink outline and white halo, on every surface.
- **Do** use the expo-out curve (cubic-bezier(.16, 1, .3, 1)) for movement and plain ease for colour changes, 0.18s to 0.45s; under reduced motion, drop movement and keep at most a short fade.
- **Do** keep a visible label above every field and one preselected option in every choice group.
- **Do** present proof as hairline-ruled lists of true facts, in the shared split layout; credentials are text from the real certificates.

### Don't:
- **Don't** add photographs, photo placeholders, stock imagery or certificate scans; the logo and line icons are the only imagery.
- **Don't** bring back a decorative serif display face; Atkinson Hyperlegible Next carries every level.
- **Don't** build stat counters or testimonial cards until real figures and reviews exist.
- **Don't** raise content cards with shadows; the booking card is the only lifted surface, and other content stays flat on tonal bands.
- **Don't** use leaf green for text, buttons or large fills.
- **Don't** set body copy under 17px or any text under 0.85rem.
- **Don't** drift toward a beauty-salon or spa look, or toward a cold hospital look; the page sits between the two.
