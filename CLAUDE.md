# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static, standalone HTML lead-qualification form for **Innogyzer** (an AI Sprint Innovation Agency). There is no build process, package manager, or test suite — the form is served directly by a web server.

## Running / Testing

Open `Extras/Diagnostico IA.dc.html` directly in a browser. No build step is required.

The form POSTs to `submit.php` (not included in this repo). To test submissions locally you need a PHP server in the same directory, e.g.:

```
php -S localhost:8080 -t Extras
```

## Custom Component Framework (`<x-dc>` / `DCLogic`)

The HTML uses a **proprietary reactive component system**. Key conventions:

- `<x-dc>` wraps the component root
- Template interpolation uses `{{ expression }}`
- Iteration uses `sc-for="item of list"` attribute
- Component class extends `DCLogic` and lives in the inline `<script>` at the bottom of the file
- `state` object drives re-renders; update it via `this.setState({...})`
- Lifecycle: `componentDidMount()`, event handlers named `onXxx()`

## Form Architecture

The form has **6 sections** (defined as `<x-section>` blocks):
1. Contact Data — empresa, nombre, email, WhatsApp, sector
2. Current Situation — lead channels, automation level, volumes, conversions
3. Challenges & Opportunities — pain points (max 3), AI opportunity types
4. Solution Vision — solution type, integrations, KPIs, investment, timeline
5. Next Steps Context — urgency, decision maker, process stage
6. Anthropic Partner Info — support type, AI experience level

## Key Files

| File | Notes |
|---|---|
| `Extras/Diagnostico IA.dc.html` | The canonical source file — all HTML, CSS, and JS in one file |
| `Extras/support.js` | Identical content to the .html file; treat as a duplicate/backup |
| `Extras/download` | Same content again (no extension); serves as a download artifact |
| `Extras/innogyzer-logo-color.png` | Brand logo referenced in the form header |

When editing the form, **only edit `Diagnostico IA.dc.html`** and propagate changes to the other two if they need to stay in sync.

## Styling Conventions

- Dark theme; primary accent `#48B4D8` (blue), secondary `#7B4FFF` (purple)
- CSS custom properties defined in `:root` for colors and spacing
- Mobile breakpoint at `560px`
- Google Fonts: Inter (body), JetBrains Mono (accents) loaded via `<link>`
- Entrance animations: `.fade-up` class with staggered `animation-delay` per section

## Form Validation & State Logic

- Required fields: `empresa`, `nombre`, `email` (validated in `onSubmit()`)
- Checkbox constraint: problems section limited to 3 selections max (enforced in `onFormChange()`)
- Progress bar updates via `updateProgress()` which counts filled fields across all 6 sections
- `fecha` field is auto-populated with today's date in `componentDidMount()`

## Backend Dependency

The form submits a `FormData` POST to `submit.php`. That file is **not in this repo**. Expected behavior: returns JSON `{ success: true }` on success or `{ error: "message" }` on failure.
