# Growth Strategy Page Outline

Source: `content.md` ("Strategy Consulting" + "Growth Planning").

## Page goals
- Explain what strategy consulting is (structured roadmap, grounded in analysis).
- Make the "problem" concrete (drift, reactive decisions, misallocated resources).
- Present Bronze Lake’s approach (clarity, data-informed, actionable, KPI/automation integration).
- Introduce growth planning as the next layer (turn strategy into an engine).
- End with the global quiz CTA.

## Section map (code)
1. Hero
   - File: `components/sections/growth-strategy/hero.tsx`
   - Message: Strategy & growth planning that works in practice.

2. Problem (without strategy)
   - File: `components/sections/growth-strategy/problem.tsx` (`StrategyProblem`)
   - Content: drift bullets + short note about day-to-day trap.

3. Solution (our approach)
   - File: `components/sections/growth-strategy/solution.tsx` (`StrategySolution`)
   - Content: Clarity of Purpose, Data-Informed Insights, Actionable Roadmaps, KPI/Automation integration.

4. Growth Planning (turn strategy into engine)
   - File: `components/sections/growth-strategy/growth-planning.tsx` (new)
   - Content: definition + problem bullets + approach/benefits bullets.

5. Global CTA
   - File: `components/sections/shared/cta.tsx` (`CallToAction`)

## Page composition
- File: `app/growth-strategy/page.tsx`
- Order:
  - `<Hero />`
  - `<StrategyProblem />`
  - `<StrategySolution />`
  - `<GrowthPlanning />`
  - `<CallToAction />`
