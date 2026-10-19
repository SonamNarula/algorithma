# ALGORITHMA — Engineering & Architecture Rules

This file serves as the persistent source of project-specific guidance for ALGORITHMA, a world-class, personalized DSA preparation platform designed for Sonam Narula.

## Core Directives

1. **Preserve the established design system**:
   - Maintain the Linear/Raycast-inspired dark, editorial, precise aesthetic.
   - Use CSS custom properties for surfaces (`#0B0D12`, `#11141B`, `#161A23`, `#1C2130`), typography, and accents (electric violet, cool cyan/teal).
   - Use subtle borders and tonal surfaces to establish visual hierarchy—avoid noisy gradients and heavy shadows.

2. **Design & UX Quality**:
   - Do not introduce generic dashboard layouts or AI-cliché cards.
   - Do not use emojis as a substitute for professional icons; use `lucide-react` consistently with accessible labels.
   - Respect keyboard accessibility (`Cmd/Ctrl+K` for global search, full focus rings) and `prefers-reduced-motion`.
   - Never replace a functioning feature with a decorative placeholder.

3. **Curriculum & Data Integrity**:
   - Keep canonical problem metadata separate from daily assignments.
   - Exactly 70 roadmap days, with 10–15 problem assignments per day.
   - Every problem must have a valid, direct LeetCode URL (`https://leetcode.com/problems/<slug>/`).
   - Do not fabricate problem titles, difficulty, URLs, or analytics.
   - Distinguish workload (total assignments) from unique problem mastery. Repeated problems on revision days must reference the canonical problem ID and be labeled `revision`.

4. **Engineering & Architecture**:
   - Clean, typed persistence layer using IndexedDB (`idb`) with graceful fallback.
   - Strict TypeScript types (`Difficulty`, `ProblemStatus`, `AssignmentType`, `RoadmapDay`, `Problem`, `MistakeEntry`, `RevisionItem`).
   - Derived calculations and selectors for analytics; no fake or mock statistics.
   - Do not add dependencies without a clear architectural justification.
   - Do not duplicate components unnecessarily.

5. **Testing & Verification**:
   - Validate curriculum data (70 days, 10–15 assignments/day, valid LeetCode URLs, no broken foreign keys).
   - Test important changes using Vitest.
   - Inspect the actual UI after major visual changes.
   - Fix all TypeScript and build errors before concluding tasks.
   - Maintain user progress and schema backward compatibility during refactoring.
