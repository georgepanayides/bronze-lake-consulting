# Illustrations & Motion Plan

Goal: add small, branded illustrations that clarify concepts without overpowering the copy. All graphics use the existing light theme, `border-bl-cream-200`, and subtle Framer Motion.

## Quick-win placements (recommended)

### Reporting & Analytics
- **Hero (right column):** keep `ArrowGrid` texture, optionally layer a small “KPI board” graphic (future) on top.
- **Pillar 02 – Reporting & data collection:** add an integration map showing multiple sources flowing into a single warehouse.
  - Implemented: `IntegrationNodesGraphic` in `ReportingCollection`.
- **Pillar 03 – KPI tracking:** add a compact KPI tiles graphic with trend lines (future).

### Technology & Automation
- **Integration process:** show systems connected into a central data/ops hub.
  - Implemented: `IntegrationNodesGraphic` in `IntegrationProcess`.
- **Custom development:** show an “IDE typing + build/deploy” mock.
  - Implemented: `IDEGraphic` in `CustomDevelopment`.

### Growth Strategy
- **Problem / Solution:** a simple “before/after” structure graphic (messy notes → structured plan) (future).
- **Growth planning:** a timeline/roadmap style graphic (possible reuse: `StrategyRoadmap` from `components/graphics/professional-expertise/StrategyRoadmap.tsx`).

### Digital Growth
- **Hero / Approach:** a lightweight “channel mix” graphic (search / social / email / site) (future).
- **Measurement:** a small “attribution + dashboards” graphic (future).

### About
- **Hero / values:** subtle motion badge/marker graphic (future).

## Components (current)

- `IDEGraphic` (client): IDE window with in-view line reveal, caret blink, and build progress.
- `IntegrationNodesGraphic` (client): node map with animated lines and moving data dots.

## Next components to add (small, reusable)

1. `KPICardsGraphic` (client): 3–4 KPI tiles with micro sparklines and a “pulse” highlight.
2. `RoadmapStepsGraphic` (client): 3–5 step roadmap with subtle in-view draw + hover focus.
3. `ChannelMixGraphic` (client): simple grid of channel chips with soft motion + active state.

## Integration rules

- Sections remain server components; graphics are client components imported as children.
- Keep motion subtle; respect reduced motion (`useReducedMotion`).
- Avoid new color tokens; use only existing brand classes.
