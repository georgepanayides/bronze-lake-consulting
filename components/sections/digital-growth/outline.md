# Digital Growth (Digital Marketing) Page Outline

Note: `content.md` currently does not include a Digital Growth / digital marketing section. This page copy is drafted to match the existing site positioning and the Service Overview description.

## Goals
- Explain how Bronze Lake approaches digital marketing as a measurable growth system.
- Emphasise conversion, clarity, and repeatable acquisition rather than “random tactics”.
- Show a simple delivery framework and what clients can expect.

## Section map (code)
1. Hero
   - File: `components/sections/digital-growth/hero.tsx`
   - Message: data-driven digital growth, conversion + measurement.

2. Approach (framework)
   - File: `components/sections/digital-growth/approach.tsx`
   - Steps: Diagnose → Position → Execute → Optimise.

3. Capabilities
   - File: `components/sections/digital-growth/capabilities.tsx`
   - Areas: SEO, paid acquisition, landing pages/CRO, content, email/CRM.

4. Measurement
   - File: `components/sections/digital-growth/measurement.tsx`
   - What you get: KPIs, dashboards, reporting cadence, experiment loop.

5. Global CTA
   - File: `components/sections/shared/cta.tsx` (`CallToAction`)

## Page composition
- File: `app/digital-growth/page.tsx`
- Order:
  - `<Hero />`
  - `<GrowthApproach />`
  - `<Capabilities />`
  - `<Measurement />`
  - `<CallToAction />`
