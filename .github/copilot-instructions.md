# Copilot Instructions

These rules are mandatory. Do not suggest alternatives unless explicitly asked.

---

## Brand & Visual Design Rules

- Only use branded colours defined in the global CSS file.
- This is a **light theme website**.
- **Navy blue must NEVER be used as a background colour.**
- Navy blue is ALWAYS used for text / font colour.
- Borders must ALWAYS use `bl-cream-200`.
- Do not invent new colour tokens.

### Typography
- Our primary font is the **primary font: Libre**.
- Headings (H1, H2, H3), key UI labels, and buttons must be **UPPERCASE** and usually have tracking applied (e.g., `tracking-wide`, `tracking-tight`).
- Secondary font is the Archivo. 

### Layout & Structure
- Use a **simple, grid-based layout** to represent organisation and clarity.
- Avoid overly decorative or chaotic layouts.
- When using section separators (`border-t`, `border-b`), apply borders to a **full-width wrapper**, and keep content inside a `container mx-auto max-w-7xl` child.

---

## Accessibility & Semantics

- Always use **semantic HTML elements** (`button`, `nav`, `section`, `article`, `header`).
- Never use `div` elements as interactive controls.
- Do not nest interactive elements inside other interactive elements.
- Components must be accessible by default (ARIA where appropriate).

---

## Client / Server Architecture (Next.js App Router)

- Always separate **server-rendered SEO content** from **client-side UI logic**.
- Content must be created in a **server component**.
- Client components must receive content via props and only handle:
  - Interactions
  - Animations
  - UI state

### Rationale
This ensures:
- Fast performance
- Crawlable HTML for SEO
- Minimal client-side JavaScript

Do not place content generation inside client components unless explicitly required.

---

## Styling Rules

- Use Tailwind utility classes only.
- Do not use inline styles.
- Do not hardcode colours, spacing, or fonts.
- Respect existing design tokens and naming conventions.

---

## Animations & Motion

- Use **Framer Motion** for animations.
- Animations must be subtle and purposeful.

---

## Code Quality & Structure

- Prefer clarity over cleverness.
- Avoid premature abstraction.
- Components should do one thing well.
- UI components should not contain business logic.
- ALL reusable UI components MUST be placed in `components/ui/*` (client or server as appropriate).
- Section components under `components/sections/*` should only compose UI and pass content via props.

---

## Defaults

If unsure:
- Choose simplicity
- Choose clarity
- Choose consistency with existing patterns

## Consistency Rule (Mandatory)
- When creating a new section/component, ALWAYS start by copying structure and Tailwind class patterns
  from an existing branded section in the codebase (spacing, borders, typography, grid).
- Do not invent a new style language.
- Prefer using shared UI primitives from `components/ui/*`