# Technology Automation Page Outline

Source: `content.md` ("Technology & Software Integration" + "Custom Software Development" + "Why Bronze Lake for Tech Integration & Software").

## Section map (code)
1. Hero
   - File: `components/sections/technology-automation/hero.tsx`
   - Message: identify gaps, integrate the right tools, and automate reliably.

2. Integration process (gap identification + implementation)
   - File: `components/sections/technology-automation/integration-process.tsx`
   - Content:
     - Problem (manual/fragmented/outdated systems)
     - Our solution (diagnostic, mapping bottlenecks, prioritise gaps)
     - What you get (checklist)
     - Smooth implementation & training (4 steps)

3. How it works (custom software development delivery steps)
   - File: `components/sections/technology-automation/how-it-works.tsx`
   - Content: requirements → spec/design → dev/QA → deployment/support.

4. Custom development (when off-the-shelf isn’t enough)
   - File: `components/sections/technology-automation/custom-development.tsx`
   - Content: problem bullets + solution examples (dashboards, automation tools, integrations, reporting engines).

5. Benefits / Why choose us
   - File: `components/sections/technology-automation/benefits.tsx`
   - Content: why Bronze Lake list (automation/KPI/reporting, practical focus, persistence, training).

6. Global CTA
   - File: `components/sections/shared/cta.tsx` (`CallToAction`)

## Page composition
- File: `app/technology-automation/page.tsx`
- Order:
  - `<Hero />`
  - `<IntegrationProcess />`
  - `<CustomDevelopment />`
  - `<HowItWorks />`
  - `<Benefits />`
  - `<CallToAction />`
