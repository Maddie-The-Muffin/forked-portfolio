# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the Project

No build tools, no package manager. Open `index.html` directly in a browser, or use a local dev server:

```
python -m http.server
```

VS Code Live Server extension also works well.

## Architecture

Single-page static portfolio — pure HTML5 and CSS3, zero JavaScript. Interactivity (theme toggle, mobile nav drawer, project filtering) is achieved exclusively through CSS checkbox/radio hacks and the native `<details>` element.

### CSS File Structure

CSS is loaded in this order in `index.html` — order matters:

| File | Purpose |
|---|---|
| `css/reset.css` | Minimal modern reset |
| `css/tokens.css` | All design tokens: color, type scale, spacing, motion variables |
| `css/base.css` | Element defaults, button variants, status dot animation, focus ring |
| `css/layout.css` | Header, nav drawer, container, footer, breakpoints (641px, 1024px) |
| `css/components.css` | Project cards, skill grid, contact form *(referenced, not yet created)* |
| `css/interactive.css` | Theme toggle dark states, nav open/close, hover states *(referenced, not yet created)* |

### Key Patterns

**Theme switching** — Done via a hidden checkbox (`#theme-toggle`) and the `.theme-dark` class on `<body>`. Dark mode token overrides live in `tokens.css` under `.theme-dark`. The `prefers-color-scheme` media query also applies dark tokens automatically.

**Mobile nav** — Hidden checkbox (`#nav-toggle`) controls the drawer open/close state via the `~` sibling combinator in CSS. No JS.

**Project filtering** — Radio buttons with `name="filter"` drive visibility via `[value="web"]:checked ~ .projects [data-cat]:not([data-cat~="web"])` patterns. Each project card has `data-cat` attributes.

### Design Tokens (from `tokens.css`)

- Accent color: `--accent: #F5E100` (sunny yellow); `--accent-2: #FF6B9D` (hot pink secondary)
- Font: monospace-first (`--font-mono`)
- Shadows: hard pixelated `6px 6px 0` (brutalist aesthetic)
- Container max-width: 1200px
- Spacing scale: `--space-1` through `--space-8`

### Accessibility

The project relies on semantic HTML for accessibility: proper heading hierarchy, `<details>`/`<summary>` for expandable content, `<button>` for interactive controls, associated `<label>` elements for all form inputs, a skip link, and `prefers-reduced-motion` support. Maintain these when adding new features.
