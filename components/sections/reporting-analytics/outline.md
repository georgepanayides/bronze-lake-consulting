# Reporting & Analytics Page Outline

Source: `content.md` ("Analytics and Reporting" section).

## Page goals
- Communicate the value of analytics/reporting as a decision system (stop "flying blind").
- Explain the three pillars: Analytics, Reporting & Data Collection, KPI Tracking.
- End with a clear next step (global quiz CTA).

## Section map (code)
1. Hero
   - File: `components/sections/reporting-analytics/hero.tsx`
   - Message: Analytics & Reporting, Christchurch-based consultancy, clarity from data.

2. Approach overview (3 pillars)
   - File: `components/sections/reporting-analytics/approach-overview.tsx`
   - Cards: Analytics / Reporting & Data Collection / KPI Tracking.

3. Pillar 1: Analytics
   - File: `components/sections/reporting-analytics/analytics.tsx`
   - Structure: Problem → Our Solution → Benefits → Without Proper Analytics.

4. Pillar 2: Reporting & data collection
   - File: `components/sections/reporting-analytics/reporting-collection.tsx`
   - Structure: Problem → Our Solution → Benefits → Without Effective Reporting.

5. Pillar 3: KPI tracking (automation)
   - File: `components/sections/reporting-analytics/kpi-tracking.tsx`
   - Structure: Problem → Our Solution → Benefits → Without Modern KPI Tracking.

6. Why choose us
   - File: `components/sections/reporting-analytics/why-choose-us.tsx`
   - Message: automation + technology expertise; turn data into action.

7. Global CTA
   - File: `components/sections/shared/cta.tsx` (`CallToAction`)

## Page composition
- File: `app/reporting-analytics/page.tsx`
- Order:
  - `<Hero />`
  - `<ApproachOverview />`
  - `<Analytics />`
  - `<ReportingCollection />`
  - `<KPITracking />`
  - `<WhyChooseUs />`
  - `<CallToAction />`
