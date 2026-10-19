import { RoadmapDay } from "../types/curriculum";

export const ROADMAP_DAYS: RoadmapDay[] = [
  {
    "dayNumber": 1,
    "phase": "Month 1: Pure Foundation Phase \u2014 Arrays & Two-Pointers",
    "phaseNumber": 1,
    "title": "Day 1: Two Sum & Two Pointers Mastery",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "hash-map"
    ],
    "objectives": [
      "Master the two pointers invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 1\nMaster the core invariants of **Two Pointers** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d1-a1",
        "problemId": "two-sum",
        "dayNumber": 1,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 1."
      },
      {
        "id": "d1-a2",
        "problemId": "remove-duplicates-from-sorted-array",
        "dayNumber": 1,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 1."
      },
      {
        "id": "d1-a3",
        "problemId": "remove-element",
        "dayNumber": 1,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 1."
      },
      {
        "id": "d1-a4",
        "problemId": "move-zeroes",
        "dayNumber": 1,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 1."
      },
      {
        "id": "d1-a5",
        "problemId": "squares-of-a-sorted-array",
        "dayNumber": 1,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 1."
      },
      {
        "id": "d1-a6",
        "problemId": "sort-array-by-parity",
        "dayNumber": 1,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 1."
      },
      {
        "id": "d1-a7",
        "problemId": "running-sum-of-1d-array",
        "dayNumber": 1,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d1-a8",
        "problemId": "find-pivot-index",
        "dayNumber": 1,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d1-a9",
        "problemId": "range-sum-query-immutable",
        "dayNumber": 1,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d1-a10",
        "problemId": "maximum-subarray",
        "dayNumber": 1,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d1-a11",
        "problemId": "best-time-to-buy-and-sell-stock",
        "dayNumber": 1,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 2,
    "phase": "Month 1: Pure Foundation Phase \u2014 Arrays & Two-Pointers",
    "phaseNumber": 1,
    "title": "Day 2: Sort Array By Parity & Two Pointers Mastery",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "arrays"
    ],
    "objectives": [
      "Master the two pointers invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 2\nMaster the core invariants of **Two Pointers** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d2-a1",
        "problemId": "sort-array-by-parity",
        "dayNumber": 2,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 2."
      },
      {
        "id": "d2-a2",
        "problemId": "running-sum-of-1d-array",
        "dayNumber": 2,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 2."
      },
      {
        "id": "d2-a3",
        "problemId": "find-pivot-index",
        "dayNumber": 2,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 2."
      },
      {
        "id": "d2-a4",
        "problemId": "range-sum-query-immutable",
        "dayNumber": 2,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 2."
      },
      {
        "id": "d2-a5",
        "problemId": "maximum-subarray",
        "dayNumber": 2,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 2."
      },
      {
        "id": "d2-a6",
        "problemId": "best-time-to-buy-and-sell-stock",
        "dayNumber": 2,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 2."
      },
      {
        "id": "d2-a7",
        "problemId": "product-of-array-except-self",
        "dayNumber": 2,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d2-a8",
        "problemId": "subarray-sum-equals-k",
        "dayNumber": 2,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d2-a9",
        "problemId": "continuous-subarray-sum",
        "dayNumber": 2,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d2-a10",
        "problemId": "squares-of-a-sorted-array",
        "dayNumber": 2,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d2-a11",
        "problemId": "remove-element",
        "dayNumber": 2,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d2-a12",
        "problemId": "two-sum",
        "dayNumber": 2,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 3,
    "phase": "Month 1: Pure Foundation Phase \u2014 Arrays & Two-Pointers",
    "phaseNumber": 1,
    "title": "Day 3: Best Time to Buy and Sell Stock & Prefix Sum Mastery",
    "primaryPattern": "prefix-sum",
    "relatedPatterns": [
      "dynamic-programming-1d"
    ],
    "objectives": [
      "Master the prefix sum invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 3\nMaster the core invariants of **Prefix Sum** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d3-a1",
        "problemId": "best-time-to-buy-and-sell-stock",
        "dayNumber": 3,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 3."
      },
      {
        "id": "d3-a2",
        "problemId": "product-of-array-except-self",
        "dayNumber": 3,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 3."
      },
      {
        "id": "d3-a3",
        "problemId": "subarray-sum-equals-k",
        "dayNumber": 3,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 3."
      },
      {
        "id": "d3-a4",
        "problemId": "continuous-subarray-sum",
        "dayNumber": 3,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 3."
      },
      {
        "id": "d3-a5",
        "problemId": "subarray-sums-divisible-by-k",
        "dayNumber": 3,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 3."
      },
      {
        "id": "d3-a6",
        "problemId": "container-with-most-water",
        "dayNumber": 3,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 3."
      },
      {
        "id": "d3-a7",
        "problemId": "3sum",
        "dayNumber": 3,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d3-a8",
        "problemId": "3sum-closest",
        "dayNumber": 3,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d3-a9",
        "problemId": "4sum",
        "dayNumber": 3,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d3-a10",
        "problemId": "remove-duplicates-from-sorted-array",
        "dayNumber": 3,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d3-a11",
        "problemId": "squares-of-a-sorted-array",
        "dayNumber": 3,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d3-a12",
        "problemId": "find-pivot-index",
        "dayNumber": 3,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 4,
    "phase": "Month 1: Pure Foundation Phase \u2014 Arrays & Two-Pointers",
    "phaseNumber": 1,
    "title": "Day 4: Container With Most Water & Two Pointers Mastery",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "greedy"
    ],
    "objectives": [
      "Master the two pointers invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 4\nMaster the core invariants of **Two Pointers** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d4-a1",
        "problemId": "container-with-most-water",
        "dayNumber": 4,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 4."
      },
      {
        "id": "d4-a2",
        "problemId": "3sum",
        "dayNumber": 4,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 4."
      },
      {
        "id": "d4-a3",
        "problemId": "3sum-closest",
        "dayNumber": 4,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 4."
      },
      {
        "id": "d4-a4",
        "problemId": "4sum",
        "dayNumber": 4,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 4."
      },
      {
        "id": "d4-a5",
        "problemId": "trapping-rain-water",
        "dayNumber": 4,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 4."
      },
      {
        "id": "d4-a6",
        "problemId": "rotate-image",
        "dayNumber": 4,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 4."
      },
      {
        "id": "d4-a7",
        "problemId": "spiral-matrix",
        "dayNumber": 4,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d4-a8",
        "problemId": "set-matrix-zeroes",
        "dayNumber": 4,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d4-a9",
        "problemId": "find-the-duplicate-number",
        "dayNumber": 4,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d4-a10",
        "problemId": "continuous-subarray-sum",
        "dayNumber": 4,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d4-a11",
        "problemId": "product-of-array-except-self",
        "dayNumber": 4,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d4-a12",
        "problemId": "maximum-subarray",
        "dayNumber": 4,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 5,
    "phase": "Month 1: Pure Foundation Phase \u2014 Arrays & Two-Pointers",
    "phaseNumber": 1,
    "title": "Day 5: Rotate Image & Matrix Mastery",
    "primaryPattern": "matrix",
    "relatedPatterns": [
      "arrays"
    ],
    "objectives": [
      "Master the matrix invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 5\nMaster the core invariants of **Matrix** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d5-a1",
        "problemId": "rotate-image",
        "dayNumber": 5,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 5."
      },
      {
        "id": "d5-a2",
        "problemId": "spiral-matrix",
        "dayNumber": 5,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 5."
      },
      {
        "id": "d5-a3",
        "problemId": "set-matrix-zeroes",
        "dayNumber": 5,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 5."
      },
      {
        "id": "d5-a4",
        "problemId": "find-the-duplicate-number",
        "dayNumber": 5,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 5."
      },
      {
        "id": "d5-a5",
        "problemId": "sort-colors",
        "dayNumber": 5,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 5."
      },
      {
        "id": "d5-a6",
        "problemId": "next-permutation",
        "dayNumber": 5,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 5."
      },
      {
        "id": "d5-a7",
        "problemId": "pascals-triangle",
        "dayNumber": 5,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d5-a8",
        "problemId": "pascals-triangle-ii",
        "dayNumber": 5,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d5-a9",
        "problemId": "majority-element",
        "dayNumber": 5,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d5-a10",
        "problemId": "container-with-most-water",
        "dayNumber": 5,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d5-a11",
        "problemId": "range-sum-query-immutable",
        "dayNumber": 5,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d5-a12",
        "problemId": "remove-duplicates-from-sorted-array",
        "dayNumber": 5,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 6,
    "phase": "Month 1: Pure Foundation Phase \u2014 Arrays & Two-Pointers",
    "phaseNumber": 1,
    "title": "Day 6: Next Permutation & Two Pointers Mastery",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "arrays"
    ],
    "objectives": [
      "Master the two pointers invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 6\nMaster the core invariants of **Two Pointers** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d6-a1",
        "problemId": "next-permutation",
        "dayNumber": 6,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 6."
      },
      {
        "id": "d6-a2",
        "problemId": "pascals-triangle",
        "dayNumber": 6,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 6."
      },
      {
        "id": "d6-a3",
        "problemId": "pascals-triangle-ii",
        "dayNumber": 6,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 6."
      },
      {
        "id": "d6-a4",
        "problemId": "majority-element",
        "dayNumber": 6,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 6."
      },
      {
        "id": "d6-a5",
        "problemId": "two-sum",
        "dayNumber": 6,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 6."
      },
      {
        "id": "d6-a6",
        "problemId": "remove-duplicates-from-sorted-array",
        "dayNumber": 6,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 6."
      },
      {
        "id": "d6-a7",
        "problemId": "remove-element",
        "dayNumber": 6,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d6-a8",
        "problemId": "move-zeroes",
        "dayNumber": 6,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d6-a9",
        "problemId": "squares-of-a-sorted-array",
        "dayNumber": 6,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d6-a10",
        "problemId": "find-pivot-index",
        "dayNumber": 6,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d6-a11",
        "problemId": "rotate-image",
        "dayNumber": 6,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d6-a12",
        "problemId": "continuous-subarray-sum",
        "dayNumber": 6,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 7,
    "phase": "Month 1: Pure Foundation Phase \u2014 Arrays & Two-Pointers",
    "phaseNumber": 1,
    "title": "Day 7: Remove Duplicates from Sorted Array & Two Pointers Mastery",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "arrays"
    ],
    "objectives": [
      "Master the two pointers invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 7\nMaster the core invariants of **Two Pointers** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d7-a1",
        "problemId": "remove-duplicates-from-sorted-array",
        "dayNumber": 7,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 7."
      },
      {
        "id": "d7-a2",
        "problemId": "remove-element",
        "dayNumber": 7,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 7."
      },
      {
        "id": "d7-a3",
        "problemId": "move-zeroes",
        "dayNumber": 7,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 7."
      },
      {
        "id": "d7-a4",
        "problemId": "squares-of-a-sorted-array",
        "dayNumber": 7,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 7."
      },
      {
        "id": "d7-a5",
        "problemId": "sort-array-by-parity",
        "dayNumber": 7,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 7."
      },
      {
        "id": "d7-a6",
        "problemId": "running-sum-of-1d-array",
        "dayNumber": 7,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 7."
      },
      {
        "id": "d7-a7",
        "problemId": "find-pivot-index",
        "dayNumber": 7,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d7-a8",
        "problemId": "range-sum-query-immutable",
        "dayNumber": 7,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d7-a9",
        "problemId": "maximum-subarray",
        "dayNumber": 7,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d7-a10",
        "problemId": "4sum",
        "dayNumber": 7,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d7-a11",
        "problemId": "product-of-array-except-self",
        "dayNumber": 7,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d7-a12",
        "problemId": "sort-colors",
        "dayNumber": 7,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 8,
    "phase": "Month 1: Pure Foundation Phase \u2014 Strings & Hashing",
    "phaseNumber": 2,
    "title": "Day 8: Valid Anagram & Hash Map Mastery",
    "primaryPattern": "hash-map",
    "relatedPatterns": [
      "strings"
    ],
    "objectives": [
      "Master the hash map invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 8\nMaster the core invariants of **Hash Map** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d8-a1",
        "problemId": "valid-anagram",
        "dayNumber": 8,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 8."
      },
      {
        "id": "d8-a2",
        "problemId": "group-anagrams",
        "dayNumber": 8,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 8."
      },
      {
        "id": "d8-a3",
        "problemId": "longest-substring-without-repeating-characters",
        "dayNumber": 8,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 8."
      },
      {
        "id": "d8-a4",
        "problemId": "minimum-window-substring",
        "dayNumber": 8,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 8."
      },
      {
        "id": "d8-a5",
        "problemId": "longest-repeating-character-replacement",
        "dayNumber": 8,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 8."
      },
      {
        "id": "d8-a6",
        "problemId": "permutation-in-string",
        "dayNumber": 8,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 8."
      },
      {
        "id": "d8-a7",
        "problemId": "find-all-anagrams-in-a-string",
        "dayNumber": 8,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d8-a8",
        "problemId": "valid-palindrome",
        "dayNumber": 8,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d8-a9",
        "problemId": "longest-consecutive-sequence",
        "dayNumber": 8,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d8-a10",
        "problemId": "pascals-triangle-ii",
        "dayNumber": 8,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d8-a11",
        "problemId": "product-of-array-except-self",
        "dayNumber": 8,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d8-a12",
        "problemId": "sort-colors",
        "dayNumber": 8,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 9,
    "phase": "Month 1: Pure Foundation Phase \u2014 Strings & Hashing",
    "phaseNumber": 2,
    "title": "Day 9: Permutation in String & Sliding Window Mastery",
    "primaryPattern": "sliding-window",
    "relatedPatterns": [
      "hash-map"
    ],
    "objectives": [
      "Master the sliding window invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 9\nMaster the core invariants of **Sliding Window** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d9-a1",
        "problemId": "permutation-in-string",
        "dayNumber": 9,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 9."
      },
      {
        "id": "d9-a2",
        "problemId": "find-all-anagrams-in-a-string",
        "dayNumber": 9,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 9."
      },
      {
        "id": "d9-a3",
        "problemId": "valid-palindrome",
        "dayNumber": 9,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 9."
      },
      {
        "id": "d9-a4",
        "problemId": "longest-consecutive-sequence",
        "dayNumber": 9,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 9."
      },
      {
        "id": "d9-a5",
        "problemId": "minimum-size-subarray-sum",
        "dayNumber": 9,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 9."
      },
      {
        "id": "d9-a6",
        "problemId": "isomorphic-strings",
        "dayNumber": 9,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 9."
      },
      {
        "id": "d9-a7",
        "problemId": "word-pattern",
        "dayNumber": 9,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d9-a8",
        "problemId": "ransom-note",
        "dayNumber": 9,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d9-a9",
        "problemId": "first-unique-character-in-a-string",
        "dayNumber": 9,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d9-a10",
        "problemId": "valid-anagram",
        "dayNumber": 9,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d9-a11",
        "problemId": "range-sum-query-immutable",
        "dayNumber": 9,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d9-a12",
        "problemId": "spiral-matrix",
        "dayNumber": 9,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 10,
    "phase": "Month 1: Pure Foundation Phase \u2014 Strings & Hashing",
    "phaseNumber": 2,
    "title": "Day 10: Isomorphic Strings & Hash Map Mastery",
    "primaryPattern": "hash-map",
    "relatedPatterns": [
      "strings"
    ],
    "objectives": [
      "Master the hash map invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 10\nMaster the core invariants of **Hash Map** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d10-a1",
        "problemId": "isomorphic-strings",
        "dayNumber": 10,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 10."
      },
      {
        "id": "d10-a2",
        "problemId": "word-pattern",
        "dayNumber": 10,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 10."
      },
      {
        "id": "d10-a3",
        "problemId": "ransom-note",
        "dayNumber": 10,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 10."
      },
      {
        "id": "d10-a4",
        "problemId": "first-unique-character-in-a-string",
        "dayNumber": 10,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 10."
      },
      {
        "id": "d10-a5",
        "problemId": "find-the-difference",
        "dayNumber": 10,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 10."
      },
      {
        "id": "d10-a6",
        "problemId": "jewels-and-stones",
        "dayNumber": 10,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 10."
      },
      {
        "id": "d10-a7",
        "problemId": "unique-number-of-occurrences",
        "dayNumber": 10,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d10-a8",
        "problemId": "sum-of-unique-elements",
        "dayNumber": 10,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d10-a9",
        "problemId": "longest-palindrome",
        "dayNumber": 10,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d10-a10",
        "problemId": "longest-substring-without-repeating-characters",
        "dayNumber": 10,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d10-a11",
        "problemId": "sort-array-by-parity",
        "dayNumber": 10,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d10-a12",
        "problemId": "4sum",
        "dayNumber": 10,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 11,
    "phase": "Month 1: Pure Foundation Phase \u2014 Strings & Hashing",
    "phaseNumber": 2,
    "title": "Day 11: Jewels and Stones & Hash Map Mastery",
    "primaryPattern": "hash-map",
    "relatedPatterns": [
      "strings"
    ],
    "objectives": [
      "Master the hash map invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 11\nMaster the core invariants of **Hash Map** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d11-a1",
        "problemId": "jewels-and-stones",
        "dayNumber": 11,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 11."
      },
      {
        "id": "d11-a2",
        "problemId": "unique-number-of-occurrences",
        "dayNumber": 11,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 11."
      },
      {
        "id": "d11-a3",
        "problemId": "sum-of-unique-elements",
        "dayNumber": 11,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 11."
      },
      {
        "id": "d11-a4",
        "problemId": "longest-palindrome",
        "dayNumber": 11,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 11."
      },
      {
        "id": "d11-a5",
        "problemId": "reverse-string",
        "dayNumber": 11,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 11."
      },
      {
        "id": "d11-a6",
        "problemId": "reverse-words-in-a-string",
        "dayNumber": 11,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 11."
      },
      {
        "id": "d11-a7",
        "problemId": "reverse-words-in-a-string-iii",
        "dayNumber": 11,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d11-a8",
        "problemId": "valid-anagram",
        "dayNumber": 11,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d11-a9",
        "problemId": "group-anagrams",
        "dayNumber": 11,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d11-a10",
        "problemId": "longest-consecutive-sequence",
        "dayNumber": 11,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d11-a11",
        "problemId": "running-sum-of-1d-array",
        "dayNumber": 11,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d11-a12",
        "problemId": "trapping-rain-water",
        "dayNumber": 11,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 12,
    "phase": "Month 1: Pure Foundation Phase \u2014 Strings & Hashing",
    "phaseNumber": 2,
    "title": "Day 12: Reverse Words in a String & Two Pointers Mastery",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "strings"
    ],
    "objectives": [
      "Master the two pointers invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 12\nMaster the core invariants of **Two Pointers** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d12-a1",
        "problemId": "reverse-words-in-a-string",
        "dayNumber": 12,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 12."
      },
      {
        "id": "d12-a2",
        "problemId": "reverse-words-in-a-string-iii",
        "dayNumber": 12,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 12."
      },
      {
        "id": "d12-a3",
        "problemId": "valid-anagram",
        "dayNumber": 12,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 12."
      },
      {
        "id": "d12-a4",
        "problemId": "group-anagrams",
        "dayNumber": 12,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 12."
      },
      {
        "id": "d12-a5",
        "problemId": "longest-substring-without-repeating-characters",
        "dayNumber": 12,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 12."
      },
      {
        "id": "d12-a6",
        "problemId": "minimum-window-substring",
        "dayNumber": 12,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 12."
      },
      {
        "id": "d12-a7",
        "problemId": "longest-repeating-character-replacement",
        "dayNumber": 12,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d12-a8",
        "problemId": "permutation-in-string",
        "dayNumber": 12,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d12-a9",
        "problemId": "find-all-anagrams-in-a-string",
        "dayNumber": 12,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d12-a10",
        "problemId": "two-sum",
        "dayNumber": 12,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d12-a11",
        "problemId": "continuous-subarray-sum",
        "dayNumber": 12,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d12-a12",
        "problemId": "pascals-triangle",
        "dayNumber": 12,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 13,
    "phase": "Month 1: Pure Foundation Phase \u2014 Strings & Hashing",
    "phaseNumber": 2,
    "title": "Day 13: Minimum Window Substring & Sliding Window Mastery",
    "primaryPattern": "sliding-window",
    "relatedPatterns": [
      "hash-map"
    ],
    "objectives": [
      "Master the sliding window invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 13\nMaster the core invariants of **Sliding Window** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d13-a1",
        "problemId": "minimum-window-substring",
        "dayNumber": 13,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 13."
      },
      {
        "id": "d13-a2",
        "problemId": "longest-repeating-character-replacement",
        "dayNumber": 13,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 13."
      },
      {
        "id": "d13-a3",
        "problemId": "permutation-in-string",
        "dayNumber": 13,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 13."
      },
      {
        "id": "d13-a4",
        "problemId": "find-all-anagrams-in-a-string",
        "dayNumber": 13,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 13."
      },
      {
        "id": "d13-a5",
        "problemId": "valid-palindrome",
        "dayNumber": 13,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 13."
      },
      {
        "id": "d13-a6",
        "problemId": "longest-consecutive-sequence",
        "dayNumber": 13,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 13."
      },
      {
        "id": "d13-a7",
        "problemId": "minimum-size-subarray-sum",
        "dayNumber": 13,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d13-a8",
        "problemId": "isomorphic-strings",
        "dayNumber": 13,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d13-a9",
        "problemId": "word-pattern",
        "dayNumber": 13,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d13-a10",
        "problemId": "find-pivot-index",
        "dayNumber": 13,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d13-a11",
        "problemId": "rotate-image",
        "dayNumber": 13,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d13-a12",
        "problemId": "first-unique-character-in-a-string",
        "dayNumber": 13,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 14,
    "phase": "Month 1: Pure Foundation Phase \u2014 Strings & Hashing",
    "phaseNumber": 2,
    "title": "Day 14: Longest Consecutive Sequence & Hash Map Mastery",
    "primaryPattern": "hash-map",
    "relatedPatterns": [
      "union-find"
    ],
    "objectives": [
      "Master the hash map invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 14\nMaster the core invariants of **Hash Map** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d14-a1",
        "problemId": "longest-consecutive-sequence",
        "dayNumber": 14,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 14."
      },
      {
        "id": "d14-a2",
        "problemId": "minimum-size-subarray-sum",
        "dayNumber": 14,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 14."
      },
      {
        "id": "d14-a3",
        "problemId": "isomorphic-strings",
        "dayNumber": 14,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 14."
      },
      {
        "id": "d14-a4",
        "problemId": "word-pattern",
        "dayNumber": 14,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 14."
      },
      {
        "id": "d14-a5",
        "problemId": "ransom-note",
        "dayNumber": 14,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 14."
      },
      {
        "id": "d14-a6",
        "problemId": "first-unique-character-in-a-string",
        "dayNumber": 14,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 14."
      },
      {
        "id": "d14-a7",
        "problemId": "find-the-difference",
        "dayNumber": 14,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d14-a8",
        "problemId": "jewels-and-stones",
        "dayNumber": 14,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d14-a9",
        "problemId": "unique-number-of-occurrences",
        "dayNumber": 14,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d14-a10",
        "problemId": "subarray-sums-divisible-by-k",
        "dayNumber": 14,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d14-a11",
        "problemId": "pascals-triangle-ii",
        "dayNumber": 14,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d14-a12",
        "problemId": "reverse-words-in-a-string",
        "dayNumber": 14,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 15,
    "phase": "Month 1: Pure Foundation Phase \u2014 Linked Lists, Stacks & Queues",
    "phaseNumber": 3,
    "title": "Day 15: Reverse Linked List & Fast Slow Pointers Mastery",
    "primaryPattern": "fast-slow-pointers",
    "relatedPatterns": [
      "linked-lists"
    ],
    "objectives": [
      "Master the fast slow pointers invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 15\nMaster the core invariants of **Fast Slow Pointers** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d15-a1",
        "problemId": "reverse-linked-list",
        "dayNumber": 15,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 15."
      },
      {
        "id": "d15-a2",
        "problemId": "merge-two-sorted-lists",
        "dayNumber": 15,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 15."
      },
      {
        "id": "d15-a3",
        "problemId": "linked-list-cycle",
        "dayNumber": 15,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 15."
      },
      {
        "id": "d15-a4",
        "problemId": "linked-list-cycle-ii",
        "dayNumber": 15,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 15."
      },
      {
        "id": "d15-a5",
        "problemId": "middle-of-the-linked-list",
        "dayNumber": 15,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 15."
      },
      {
        "id": "d15-a6",
        "problemId": "remove-nth-node-from-end-of-list",
        "dayNumber": 15,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 15."
      },
      {
        "id": "d15-a7",
        "problemId": "reorder-list",
        "dayNumber": 15,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d15-a8",
        "problemId": "palindrome-linked-list",
        "dayNumber": 15,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d15-a9",
        "problemId": "copy-list-with-random-pointer",
        "dayNumber": 15,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d15-a10",
        "problemId": "move-zeroes",
        "dayNumber": 15,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d15-a11",
        "problemId": "3sum",
        "dayNumber": 15,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d15-a12",
        "problemId": "valid-anagram",
        "dayNumber": 15,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 16,
    "phase": "Month 1: Pure Foundation Phase \u2014 Linked Lists, Stacks & Queues",
    "phaseNumber": 3,
    "title": "Day 16: Remove Nth Node From End of List & Two Pointers Mastery",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "linked-lists"
    ],
    "objectives": [
      "Master the two pointers invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 16\nMaster the core invariants of **Two Pointers** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d16-a1",
        "problemId": "remove-nth-node-from-end-of-list",
        "dayNumber": 16,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 16."
      },
      {
        "id": "d16-a2",
        "problemId": "reorder-list",
        "dayNumber": 16,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 16."
      },
      {
        "id": "d16-a3",
        "problemId": "palindrome-linked-list",
        "dayNumber": 16,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 16."
      },
      {
        "id": "d16-a4",
        "problemId": "copy-list-with-random-pointer",
        "dayNumber": 16,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 16."
      },
      {
        "id": "d16-a5",
        "problemId": "lru-cache",
        "dayNumber": 16,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 16."
      },
      {
        "id": "d16-a6",
        "problemId": "merge-k-sorted-lists",
        "dayNumber": 16,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 16."
      },
      {
        "id": "d16-a7",
        "problemId": "valid-parentheses",
        "dayNumber": 16,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d16-a8",
        "problemId": "min-stack",
        "dayNumber": 16,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d16-a9",
        "problemId": "evaluate-reverse-polish-notation",
        "dayNumber": 16,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d16-a10",
        "problemId": "two-sum",
        "dayNumber": 16,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d16-a11",
        "problemId": "continuous-subarray-sum",
        "dayNumber": 16,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d16-a12",
        "problemId": "pascals-triangle",
        "dayNumber": 16,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 17,
    "phase": "Month 1: Pure Foundation Phase \u2014 Linked Lists, Stacks & Queues",
    "phaseNumber": 3,
    "title": "Day 17: Merge k Sorted Lists & Top K Elements Heap Mastery",
    "primaryPattern": "top-k-elements-heap",
    "relatedPatterns": [
      "linked-lists",
      "divide-and-conquer"
    ],
    "objectives": [
      "Master the top k elements heap invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 17\nMaster the core invariants of **Top K Elements Heap** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d17-a1",
        "problemId": "merge-k-sorted-lists",
        "dayNumber": 17,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 17."
      },
      {
        "id": "d17-a2",
        "problemId": "valid-parentheses",
        "dayNumber": 17,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 17."
      },
      {
        "id": "d17-a3",
        "problemId": "min-stack",
        "dayNumber": 17,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 17."
      },
      {
        "id": "d17-a4",
        "problemId": "evaluate-reverse-polish-notation",
        "dayNumber": 17,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 17."
      },
      {
        "id": "d17-a5",
        "problemId": "daily-temperatures",
        "dayNumber": 17,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 17."
      },
      {
        "id": "d17-a6",
        "problemId": "online-stock-span",
        "dayNumber": 17,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 17."
      },
      {
        "id": "d17-a7",
        "problemId": "next-greater-element-i",
        "dayNumber": 17,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d17-a8",
        "problemId": "largest-rectangle-in-histogram",
        "dayNumber": 17,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d17-a9",
        "problemId": "sliding-window-maximum",
        "dayNumber": 17,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d17-a10",
        "problemId": "palindrome-linked-list",
        "dayNumber": 17,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d17-a11",
        "problemId": "best-time-to-buy-and-sell-stock",
        "dayNumber": 17,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d17-a12",
        "problemId": "find-the-duplicate-number",
        "dayNumber": 17,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 18,
    "phase": "Month 1: Pure Foundation Phase \u2014 Linked Lists, Stacks & Queues",
    "phaseNumber": 3,
    "title": "Day 18: Online Stock Span & Monotonic Stack Mastery",
    "primaryPattern": "monotonic-stack",
    "relatedPatterns": [
      "design"
    ],
    "objectives": [
      "Master the monotonic stack invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 18\nMaster the core invariants of **Monotonic Stack** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d18-a1",
        "problemId": "online-stock-span",
        "dayNumber": 18,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 18."
      },
      {
        "id": "d18-a2",
        "problemId": "next-greater-element-i",
        "dayNumber": 18,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 18."
      },
      {
        "id": "d18-a3",
        "problemId": "largest-rectangle-in-histogram",
        "dayNumber": 18,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 18."
      },
      {
        "id": "d18-a4",
        "problemId": "sliding-window-maximum",
        "dayNumber": 18,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 18."
      },
      {
        "id": "d18-a5",
        "problemId": "implement-queue-using-stacks",
        "dayNumber": 18,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 18."
      },
      {
        "id": "d18-a6",
        "problemId": "implement-stack-using-queues",
        "dayNumber": 18,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 18."
      },
      {
        "id": "d18-a7",
        "problemId": "remove-linked-list-elements",
        "dayNumber": 18,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d18-a8",
        "problemId": "remove-duplicates-from-sorted-list",
        "dayNumber": 18,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d18-a9",
        "problemId": "reverse-linked-list",
        "dayNumber": 18,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d18-a10",
        "problemId": "valid-parentheses",
        "dayNumber": 18,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d18-a11",
        "problemId": "maximum-subarray",
        "dayNumber": 18,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d18-a12",
        "problemId": "set-matrix-zeroes",
        "dayNumber": 18,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 19,
    "phase": "Month 1: Pure Foundation Phase \u2014 Linked Lists, Stacks & Queues",
    "phaseNumber": 3,
    "title": "Day 19: Implement Stack using Queues & Stacks Mastery",
    "primaryPattern": "stacks",
    "relatedPatterns": [
      "design"
    ],
    "objectives": [
      "Master the stacks invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 19\nMaster the core invariants of **Stacks** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d19-a1",
        "problemId": "implement-stack-using-queues",
        "dayNumber": 19,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 19."
      },
      {
        "id": "d19-a2",
        "problemId": "remove-linked-list-elements",
        "dayNumber": 19,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 19."
      },
      {
        "id": "d19-a3",
        "problemId": "remove-duplicates-from-sorted-list",
        "dayNumber": 19,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 19."
      },
      {
        "id": "d19-a4",
        "problemId": "reverse-linked-list",
        "dayNumber": 19,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 19."
      },
      {
        "id": "d19-a5",
        "problemId": "merge-two-sorted-lists",
        "dayNumber": 19,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 19."
      },
      {
        "id": "d19-a6",
        "problemId": "linked-list-cycle",
        "dayNumber": 19,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 19."
      },
      {
        "id": "d19-a7",
        "problemId": "linked-list-cycle-ii",
        "dayNumber": 19,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d19-a8",
        "problemId": "middle-of-the-linked-list",
        "dayNumber": 19,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d19-a9",
        "problemId": "remove-nth-node-from-end-of-list",
        "dayNumber": 19,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d19-a10",
        "problemId": "move-zeroes",
        "dayNumber": 19,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d19-a11",
        "problemId": "3sum",
        "dayNumber": 19,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d19-a12",
        "problemId": "valid-anagram",
        "dayNumber": 19,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 20,
    "phase": "Month 1: Pure Foundation Phase \u2014 Linked Lists, Stacks & Queues",
    "phaseNumber": 3,
    "title": "Day 20: Linked List Cycle & Fast Slow Pointers Mastery",
    "primaryPattern": "fast-slow-pointers",
    "relatedPatterns": [
      "linked-lists"
    ],
    "objectives": [
      "Master the fast slow pointers invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 20\nMaster the core invariants of **Fast Slow Pointers** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d20-a1",
        "problemId": "linked-list-cycle",
        "dayNumber": 20,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 20."
      },
      {
        "id": "d20-a2",
        "problemId": "linked-list-cycle-ii",
        "dayNumber": 20,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 20."
      },
      {
        "id": "d20-a3",
        "problemId": "middle-of-the-linked-list",
        "dayNumber": 20,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 20."
      },
      {
        "id": "d20-a4",
        "problemId": "remove-nth-node-from-end-of-list",
        "dayNumber": 20,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 20."
      },
      {
        "id": "d20-a5",
        "problemId": "reorder-list",
        "dayNumber": 20,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 20."
      },
      {
        "id": "d20-a6",
        "problemId": "palindrome-linked-list",
        "dayNumber": 20,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 20."
      },
      {
        "id": "d20-a7",
        "problemId": "copy-list-with-random-pointer",
        "dayNumber": 20,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d20-a8",
        "problemId": "lru-cache",
        "dayNumber": 20,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d20-a9",
        "problemId": "merge-k-sorted-lists",
        "dayNumber": 20,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d20-a10",
        "problemId": "best-time-to-buy-and-sell-stock",
        "dayNumber": 20,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d20-a11",
        "problemId": "find-the-duplicate-number",
        "dayNumber": 20,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d20-a12",
        "problemId": "valid-palindrome",
        "dayNumber": 20,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 21,
    "phase": "Month 1: Pure Foundation Phase \u2014 Linked Lists, Stacks & Queues",
    "phaseNumber": 3,
    "title": "Day 21: Palindrome Linked List & Fast Slow Pointers Mastery",
    "primaryPattern": "fast-slow-pointers",
    "relatedPatterns": [
      "linked-lists"
    ],
    "objectives": [
      "Master the fast slow pointers invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 21\nMaster the core invariants of **Fast Slow Pointers** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d21-a1",
        "problemId": "palindrome-linked-list",
        "dayNumber": 21,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 21."
      },
      {
        "id": "d21-a2",
        "problemId": "copy-list-with-random-pointer",
        "dayNumber": 21,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 21."
      },
      {
        "id": "d21-a3",
        "problemId": "lru-cache",
        "dayNumber": 21,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 21."
      },
      {
        "id": "d21-a4",
        "problemId": "merge-k-sorted-lists",
        "dayNumber": 21,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 21."
      },
      {
        "id": "d21-a5",
        "problemId": "valid-parentheses",
        "dayNumber": 21,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 21."
      },
      {
        "id": "d21-a6",
        "problemId": "min-stack",
        "dayNumber": 21,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 21."
      },
      {
        "id": "d21-a7",
        "problemId": "evaluate-reverse-polish-notation",
        "dayNumber": 21,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d21-a8",
        "problemId": "daily-temperatures",
        "dayNumber": 21,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d21-a9",
        "problemId": "online-stock-span",
        "dayNumber": 21,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d21-a10",
        "problemId": "3sum-closest",
        "dayNumber": 21,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d21-a11",
        "problemId": "group-anagrams",
        "dayNumber": 21,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d21-a12",
        "problemId": "find-the-difference",
        "dayNumber": 21,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 22,
    "phase": "Month 1: Pure Foundation Phase \u2014 Binary Search & Basic Recursion",
    "phaseNumber": 4,
    "title": "Day 22: Binary Search & Binary Search Mastery",
    "primaryPattern": "binary-search",
    "relatedPatterns": [
      "arrays"
    ],
    "objectives": [
      "Master the binary search invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 22\nMaster the core invariants of **Binary Search** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d22-a1",
        "problemId": "binary-search",
        "dayNumber": 22,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 22."
      },
      {
        "id": "d22-a2",
        "problemId": "search-insert-position",
        "dayNumber": 22,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 22."
      },
      {
        "id": "d22-a3",
        "problemId": "search-in-rotated-sorted-array",
        "dayNumber": 22,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 22."
      },
      {
        "id": "d22-a4",
        "problemId": "find-first-and-last-position-of-element-in-sorted-array",
        "dayNumber": 22,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 22."
      },
      {
        "id": "d22-a5",
        "problemId": "find-minimum-in-rotated-sorted-array",
        "dayNumber": 22,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 22."
      },
      {
        "id": "d22-a6",
        "problemId": "find-peak-element",
        "dayNumber": 22,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 22."
      },
      {
        "id": "d22-a7",
        "problemId": "search-a-2d-matrix",
        "dayNumber": 22,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d22-a8",
        "problemId": "koko-eating-bananas",
        "dayNumber": 22,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d22-a9",
        "problemId": "capacity-to-ship-packages-within-d-days",
        "dayNumber": 22,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d22-a10",
        "problemId": "running-sum-of-1d-array",
        "dayNumber": 22,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d22-a11",
        "problemId": "trapping-rain-water",
        "dayNumber": 22,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d22-a12",
        "problemId": "minimum-window-substring",
        "dayNumber": 22,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 23,
    "phase": "Month 1: Pure Foundation Phase \u2014 Binary Search & Basic Recursion",
    "phaseNumber": 4,
    "title": "Day 23: Find Peak Element & Binary Search Mastery",
    "primaryPattern": "binary-search",
    "relatedPatterns": [
      "arrays"
    ],
    "objectives": [
      "Master the binary search invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 23\nMaster the core invariants of **Binary Search** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d23-a1",
        "problemId": "find-peak-element",
        "dayNumber": 23,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 23."
      },
      {
        "id": "d23-a2",
        "problemId": "search-a-2d-matrix",
        "dayNumber": 23,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 23."
      },
      {
        "id": "d23-a3",
        "problemId": "koko-eating-bananas",
        "dayNumber": 23,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 23."
      },
      {
        "id": "d23-a4",
        "problemId": "capacity-to-ship-packages-within-d-days",
        "dayNumber": 23,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 23."
      },
      {
        "id": "d23-a5",
        "problemId": "split-array-largest-sum",
        "dayNumber": 23,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 23."
      },
      {
        "id": "d23-a6",
        "problemId": "sqrtx",
        "dayNumber": 23,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 23."
      },
      {
        "id": "d23-a7",
        "problemId": "first-bad-version",
        "dayNumber": 23,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d23-a8",
        "problemId": "valid-perfect-square",
        "dayNumber": 23,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d23-a9",
        "problemId": "subsets",
        "dayNumber": 23,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d23-a10",
        "problemId": "move-zeroes",
        "dayNumber": 23,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d23-a11",
        "problemId": "3sum",
        "dayNumber": 23,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d23-a12",
        "problemId": "valid-anagram",
        "dayNumber": 23,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 24,
    "phase": "Month 1: Pure Foundation Phase \u2014 Binary Search & Basic Recursion",
    "phaseNumber": 4,
    "title": "Day 24: Sqrt(x) & Binary Search Answer Mastery",
    "primaryPattern": "binary-search-answer",
    "relatedPatterns": [
      "math"
    ],
    "objectives": [
      "Master the binary search answer invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 24\nMaster the core invariants of **Binary Search Answer** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d24-a1",
        "problemId": "sqrtx",
        "dayNumber": 24,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 24."
      },
      {
        "id": "d24-a2",
        "problemId": "first-bad-version",
        "dayNumber": 24,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 24."
      },
      {
        "id": "d24-a3",
        "problemId": "valid-perfect-square",
        "dayNumber": 24,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 24."
      },
      {
        "id": "d24-a4",
        "problemId": "subsets",
        "dayNumber": 24,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 24."
      },
      {
        "id": "d24-a5",
        "problemId": "subsets-ii",
        "dayNumber": 24,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 24."
      },
      {
        "id": "d24-a6",
        "problemId": "combination-sum",
        "dayNumber": 24,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 24."
      },
      {
        "id": "d24-a7",
        "problemId": "combination-sum-ii",
        "dayNumber": 24,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d24-a8",
        "problemId": "permutations",
        "dayNumber": 24,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d24-a9",
        "problemId": "word-search",
        "dayNumber": 24,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d24-a10",
        "problemId": "two-sum",
        "dayNumber": 24,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d24-a11",
        "problemId": "continuous-subarray-sum",
        "dayNumber": 24,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d24-a12",
        "problemId": "pascals-triangle",
        "dayNumber": 24,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 25,
    "phase": "Month 1: Pure Foundation Phase \u2014 Binary Search & Basic Recursion",
    "phaseNumber": 4,
    "title": "Day 25: Combination Sum & Backtracking Mastery",
    "primaryPattern": "backtracking",
    "relatedPatterns": [
      "recursion"
    ],
    "objectives": [
      "Master the backtracking invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 25\nMaster the core invariants of **Backtracking** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d25-a1",
        "problemId": "combination-sum",
        "dayNumber": 25,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 25."
      },
      {
        "id": "d25-a2",
        "problemId": "combination-sum-ii",
        "dayNumber": 25,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 25."
      },
      {
        "id": "d25-a3",
        "problemId": "permutations",
        "dayNumber": 25,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 25."
      },
      {
        "id": "d25-a4",
        "problemId": "word-search",
        "dayNumber": 25,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 25."
      },
      {
        "id": "d25-a5",
        "problemId": "letter-combinations-of-a-phone-number",
        "dayNumber": 25,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 25."
      },
      {
        "id": "d25-a6",
        "problemId": "palindrome-partitioning",
        "dayNumber": 25,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 25."
      },
      {
        "id": "d25-a7",
        "problemId": "binary-search",
        "dayNumber": 25,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d25-a8",
        "problemId": "search-insert-position",
        "dayNumber": 25,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d25-a9",
        "problemId": "search-in-rotated-sorted-array",
        "dayNumber": 25,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d25-a10",
        "problemId": "move-zeroes",
        "dayNumber": 25,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d25-a11",
        "problemId": "3sum",
        "dayNumber": 25,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d25-a12",
        "problemId": "valid-anagram",
        "dayNumber": 25,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 26,
    "phase": "Month 1: Pure Foundation Phase \u2014 Binary Search & Basic Recursion",
    "phaseNumber": 4,
    "title": "Day 26: Palindrome Partitioning & Backtracking Mastery",
    "primaryPattern": "backtracking",
    "relatedPatterns": [
      "dynamic-programming-1d"
    ],
    "objectives": [
      "Master the backtracking invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 26\nMaster the core invariants of **Backtracking** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d26-a1",
        "problemId": "palindrome-partitioning",
        "dayNumber": 26,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 26."
      },
      {
        "id": "d26-a2",
        "problemId": "binary-search",
        "dayNumber": 26,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 26."
      },
      {
        "id": "d26-a3",
        "problemId": "search-insert-position",
        "dayNumber": 26,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 26."
      },
      {
        "id": "d26-a4",
        "problemId": "search-in-rotated-sorted-array",
        "dayNumber": 26,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 26."
      },
      {
        "id": "d26-a5",
        "problemId": "find-first-and-last-position-of-element-in-sorted-array",
        "dayNumber": 26,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 26."
      },
      {
        "id": "d26-a6",
        "problemId": "find-minimum-in-rotated-sorted-array",
        "dayNumber": 26,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 26."
      },
      {
        "id": "d26-a7",
        "problemId": "find-peak-element",
        "dayNumber": 26,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d26-a8",
        "problemId": "search-a-2d-matrix",
        "dayNumber": 26,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d26-a9",
        "problemId": "koko-eating-bananas",
        "dayNumber": 26,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d26-a10",
        "problemId": "best-time-to-buy-and-sell-stock",
        "dayNumber": 26,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d26-a11",
        "problemId": "find-the-duplicate-number",
        "dayNumber": 26,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d26-a12",
        "problemId": "valid-palindrome",
        "dayNumber": 26,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 27,
    "phase": "Month 1: Pure Foundation Phase \u2014 Binary Search & Basic Recursion",
    "phaseNumber": 4,
    "title": "Day 27: Find Minimum in Rotated Sorted Array & Binary Search Mastery",
    "primaryPattern": "binary-search",
    "relatedPatterns": [
      "arrays"
    ],
    "objectives": [
      "Master the binary search invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 27\nMaster the core invariants of **Binary Search** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d27-a1",
        "problemId": "find-minimum-in-rotated-sorted-array",
        "dayNumber": 27,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 27."
      },
      {
        "id": "d27-a2",
        "problemId": "find-peak-element",
        "dayNumber": 27,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 27."
      },
      {
        "id": "d27-a3",
        "problemId": "search-a-2d-matrix",
        "dayNumber": 27,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 27."
      },
      {
        "id": "d27-a4",
        "problemId": "koko-eating-bananas",
        "dayNumber": 27,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 27."
      },
      {
        "id": "d27-a5",
        "problemId": "capacity-to-ship-packages-within-d-days",
        "dayNumber": 27,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 27."
      },
      {
        "id": "d27-a6",
        "problemId": "split-array-largest-sum",
        "dayNumber": 27,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 27."
      },
      {
        "id": "d27-a7",
        "problemId": "sqrtx",
        "dayNumber": 27,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d27-a8",
        "problemId": "first-bad-version",
        "dayNumber": 27,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d27-a9",
        "problemId": "valid-perfect-square",
        "dayNumber": 27,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d27-a10",
        "problemId": "3sum-closest",
        "dayNumber": 27,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d27-a11",
        "problemId": "group-anagrams",
        "dayNumber": 27,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d27-a12",
        "problemId": "find-the-difference",
        "dayNumber": 27,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 28,
    "phase": "Month 1: Pure Foundation Phase \u2014 Binary Search & Basic Recursion",
    "phaseNumber": 4,
    "title": "Day 28: Split Array Largest Sum & Binary Search Answer Mastery",
    "primaryPattern": "binary-search-answer",
    "relatedPatterns": [
      "dynamic-programming-1d"
    ],
    "objectives": [
      "Master the binary search answer invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 28\nMaster the core invariants of **Binary Search Answer** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d28-a1",
        "problemId": "split-array-largest-sum",
        "dayNumber": 28,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 28."
      },
      {
        "id": "d28-a2",
        "problemId": "sqrtx",
        "dayNumber": 28,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 28."
      },
      {
        "id": "d28-a3",
        "problemId": "first-bad-version",
        "dayNumber": 28,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 28."
      },
      {
        "id": "d28-a4",
        "problemId": "valid-perfect-square",
        "dayNumber": 28,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 28."
      },
      {
        "id": "d28-a5",
        "problemId": "subsets",
        "dayNumber": 28,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 28."
      },
      {
        "id": "d28-a6",
        "problemId": "subsets-ii",
        "dayNumber": 28,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 28."
      },
      {
        "id": "d28-a7",
        "problemId": "combination-sum",
        "dayNumber": 28,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d28-a8",
        "problemId": "combination-sum-ii",
        "dayNumber": 28,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d28-a9",
        "problemId": "permutations",
        "dayNumber": 28,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d28-a10",
        "problemId": "sort-colors",
        "dayNumber": 28,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d28-a11",
        "problemId": "longest-consecutive-sequence",
        "dayNumber": 28,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d28-a12",
        "problemId": "reverse-words-in-a-string-iii",
        "dayNumber": 28,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 29,
    "phase": "Month 2: Core DSA Phase \u2014 Trees & Hierarchical Traversal",
    "phaseNumber": 5,
    "title": "Day 29: Maximum Depth of Binary Tree & Tree Bfs Dfs Mastery",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "recursion"
    ],
    "objectives": [
      "Master the tree bfs dfs invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 29\nMaster the core invariants of **Tree Bfs Dfs** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d29-a1",
        "problemId": "maximum-depth-of-binary-tree",
        "dayNumber": 29,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 29."
      },
      {
        "id": "d29-a2",
        "problemId": "invert-binary-tree",
        "dayNumber": 29,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 29."
      },
      {
        "id": "d29-a3",
        "problemId": "diameter-of-binary-tree",
        "dayNumber": 29,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 29."
      },
      {
        "id": "d29-a4",
        "problemId": "balanced-binary-tree",
        "dayNumber": 29,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 29."
      },
      {
        "id": "d29-a5",
        "problemId": "same-tree",
        "dayNumber": 29,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 29."
      },
      {
        "id": "d29-a6",
        "problemId": "symmetric-tree",
        "dayNumber": 29,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 29."
      },
      {
        "id": "d29-a7",
        "problemId": "subtree-of-another-tree",
        "dayNumber": 29,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d29-a8",
        "problemId": "binary-tree-level-order-traversal",
        "dayNumber": 29,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d29-a9",
        "problemId": "binary-tree-right-side-view",
        "dayNumber": 29,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d29-a10",
        "problemId": "continuous-subarray-sum",
        "dayNumber": 29,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d29-a11",
        "problemId": "pascals-triangle",
        "dayNumber": 29,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d29-a12",
        "problemId": "isomorphic-strings",
        "dayNumber": 29,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 30,
    "phase": "Month 2: Core DSA Phase \u2014 Trees & Hierarchical Traversal",
    "phaseNumber": 5,
    "title": "Day 30: Symmetric Tree & Tree Bfs Dfs Mastery",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "recursion"
    ],
    "objectives": [
      "Master the tree bfs dfs invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 30\nMaster the core invariants of **Tree Bfs Dfs** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d30-a1",
        "problemId": "symmetric-tree",
        "dayNumber": 30,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 30."
      },
      {
        "id": "d30-a2",
        "problemId": "subtree-of-another-tree",
        "dayNumber": 30,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 30."
      },
      {
        "id": "d30-a3",
        "problemId": "binary-tree-level-order-traversal",
        "dayNumber": 30,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 30."
      },
      {
        "id": "d30-a4",
        "problemId": "binary-tree-right-side-view",
        "dayNumber": 30,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 30."
      },
      {
        "id": "d30-a5",
        "problemId": "binary-tree-zigzag-level-order-traversal",
        "dayNumber": 30,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 30."
      },
      {
        "id": "d30-a6",
        "problemId": "count-good-nodes-in-binary-tree",
        "dayNumber": 30,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 30."
      },
      {
        "id": "d30-a7",
        "problemId": "path-sum",
        "dayNumber": 30,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d30-a8",
        "problemId": "path-sum-ii",
        "dayNumber": 30,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d30-a9",
        "problemId": "lowest-common-ancestor-of-a-binary-tree",
        "dayNumber": 30,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d30-a10",
        "problemId": "best-time-to-buy-and-sell-stock",
        "dayNumber": 30,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d30-a11",
        "problemId": "find-the-duplicate-number",
        "dayNumber": 30,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d30-a12",
        "problemId": "valid-palindrome",
        "dayNumber": 30,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 31,
    "phase": "Month 2: Core DSA Phase \u2014 Trees & Hierarchical Traversal",
    "phaseNumber": 5,
    "title": "Day 31: Count Good Nodes in Binary Tree & Tree Bfs Dfs Mastery",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "recursion"
    ],
    "objectives": [
      "Master the tree bfs dfs invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 31\nMaster the core invariants of **Tree Bfs Dfs** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d31-a1",
        "problemId": "count-good-nodes-in-binary-tree",
        "dayNumber": 31,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 31."
      },
      {
        "id": "d31-a2",
        "problemId": "path-sum",
        "dayNumber": 31,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 31."
      },
      {
        "id": "d31-a3",
        "problemId": "path-sum-ii",
        "dayNumber": 31,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 31."
      },
      {
        "id": "d31-a4",
        "problemId": "lowest-common-ancestor-of-a-binary-tree",
        "dayNumber": 31,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 31."
      },
      {
        "id": "d31-a5",
        "problemId": "lowest-common-ancestor-of-a-binary-search-tree",
        "dayNumber": 31,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 31."
      },
      {
        "id": "d31-a6",
        "problemId": "validate-binary-search-tree",
        "dayNumber": 31,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 31."
      },
      {
        "id": "d31-a7",
        "problemId": "kth-smallest-element-in-a-bst",
        "dayNumber": 31,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d31-a8",
        "problemId": "construct-binary-tree-from-preorder-and-inorder-traversal",
        "dayNumber": 31,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d31-a9",
        "problemId": "binary-tree-maximum-path-sum",
        "dayNumber": 31,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d31-a10",
        "problemId": "find-pivot-index",
        "dayNumber": 31,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d31-a11",
        "problemId": "rotate-image",
        "dayNumber": 31,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d31-a12",
        "problemId": "longest-repeating-character-replacement",
        "dayNumber": 31,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 32,
    "phase": "Month 2: Core DSA Phase \u2014 Trees & Hierarchical Traversal",
    "phaseNumber": 5,
    "title": "Day 32: Validate Binary Search Tree & Tree Bfs Dfs Mastery",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "binary-search-trees"
    ],
    "objectives": [
      "Master the tree bfs dfs invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 32\nMaster the core invariants of **Tree Bfs Dfs** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d32-a1",
        "problemId": "validate-binary-search-tree",
        "dayNumber": 32,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 32."
      },
      {
        "id": "d32-a2",
        "problemId": "kth-smallest-element-in-a-bst",
        "dayNumber": 32,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 32."
      },
      {
        "id": "d32-a3",
        "problemId": "construct-binary-tree-from-preorder-and-inorder-traversal",
        "dayNumber": 32,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 32."
      },
      {
        "id": "d32-a4",
        "problemId": "binary-tree-maximum-path-sum",
        "dayNumber": 32,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 32."
      },
      {
        "id": "d32-a5",
        "problemId": "serialize-and-deserialize-binary-tree",
        "dayNumber": 32,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 32."
      },
      {
        "id": "d32-a6",
        "problemId": "merge-two-binary-trees",
        "dayNumber": 32,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 32."
      },
      {
        "id": "d32-a7",
        "problemId": "binary-tree-inorder-traversal",
        "dayNumber": 32,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d32-a8",
        "problemId": "binary-tree-preorder-traversal",
        "dayNumber": 32,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d32-a9",
        "problemId": "binary-tree-postorder-traversal",
        "dayNumber": 32,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d32-a10",
        "problemId": "squares-of-a-sorted-array",
        "dayNumber": 32,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d32-a11",
        "problemId": "3sum-closest",
        "dayNumber": 32,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d32-a12",
        "problemId": "group-anagrams",
        "dayNumber": 32,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 33,
    "phase": "Month 2: Core DSA Phase \u2014 Trees & Hierarchical Traversal",
    "phaseNumber": 5,
    "title": "Day 33: Merge Two Binary Trees & Tree Bfs Dfs Mastery",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "recursion"
    ],
    "objectives": [
      "Master the tree bfs dfs invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 33\nMaster the core invariants of **Tree Bfs Dfs** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d33-a1",
        "problemId": "merge-two-binary-trees",
        "dayNumber": 33,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 33."
      },
      {
        "id": "d33-a2",
        "problemId": "binary-tree-inorder-traversal",
        "dayNumber": 33,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 33."
      },
      {
        "id": "d33-a3",
        "problemId": "binary-tree-preorder-traversal",
        "dayNumber": 33,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 33."
      },
      {
        "id": "d33-a4",
        "problemId": "binary-tree-postorder-traversal",
        "dayNumber": 33,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 33."
      },
      {
        "id": "d33-a5",
        "problemId": "maximum-depth-of-binary-tree",
        "dayNumber": 33,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 33."
      },
      {
        "id": "d33-a6",
        "problemId": "invert-binary-tree",
        "dayNumber": 33,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 33."
      },
      {
        "id": "d33-a7",
        "problemId": "diameter-of-binary-tree",
        "dayNumber": 33,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d33-a8",
        "problemId": "balanced-binary-tree",
        "dayNumber": 33,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d33-a9",
        "problemId": "same-tree",
        "dayNumber": 33,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d33-a10",
        "problemId": "product-of-array-except-self",
        "dayNumber": 33,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d33-a11",
        "problemId": "sort-colors",
        "dayNumber": 33,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d33-a12",
        "problemId": "longest-consecutive-sequence",
        "dayNumber": 33,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 34,
    "phase": "Month 2: Core DSA Phase \u2014 Trees & Hierarchical Traversal",
    "phaseNumber": 5,
    "title": "Day 34: Invert Binary Tree & Tree Bfs Dfs Mastery",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "recursion"
    ],
    "objectives": [
      "Master the tree bfs dfs invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 34\nMaster the core invariants of **Tree Bfs Dfs** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d34-a1",
        "problemId": "invert-binary-tree",
        "dayNumber": 34,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 34."
      },
      {
        "id": "d34-a2",
        "problemId": "diameter-of-binary-tree",
        "dayNumber": 34,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 34."
      },
      {
        "id": "d34-a3",
        "problemId": "balanced-binary-tree",
        "dayNumber": 34,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 34."
      },
      {
        "id": "d34-a4",
        "problemId": "same-tree",
        "dayNumber": 34,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 34."
      },
      {
        "id": "d34-a5",
        "problemId": "symmetric-tree",
        "dayNumber": 34,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 34."
      },
      {
        "id": "d34-a6",
        "problemId": "subtree-of-another-tree",
        "dayNumber": 34,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 34."
      },
      {
        "id": "d34-a7",
        "problemId": "binary-tree-level-order-traversal",
        "dayNumber": 34,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d34-a8",
        "problemId": "binary-tree-right-side-view",
        "dayNumber": 34,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d34-a9",
        "problemId": "binary-tree-zigzag-level-order-traversal",
        "dayNumber": 34,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d34-a10",
        "problemId": "4sum",
        "dayNumber": 34,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d34-a11",
        "problemId": "longest-substring-without-repeating-characters",
        "dayNumber": 34,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d34-a12",
        "problemId": "jewels-and-stones",
        "dayNumber": 34,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 35,
    "phase": "Month 2: Core DSA Phase \u2014 Trees & Hierarchical Traversal",
    "phaseNumber": 5,
    "title": "Day 35: Subtree of Another Tree & Tree Bfs Dfs Mastery",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "recursion"
    ],
    "objectives": [
      "Master the tree bfs dfs invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 35\nMaster the core invariants of **Tree Bfs Dfs** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d35-a1",
        "problemId": "subtree-of-another-tree",
        "dayNumber": 35,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 35."
      },
      {
        "id": "d35-a2",
        "problemId": "binary-tree-level-order-traversal",
        "dayNumber": 35,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 35."
      },
      {
        "id": "d35-a3",
        "problemId": "binary-tree-right-side-view",
        "dayNumber": 35,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 35."
      },
      {
        "id": "d35-a4",
        "problemId": "binary-tree-zigzag-level-order-traversal",
        "dayNumber": 35,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 35."
      },
      {
        "id": "d35-a5",
        "problemId": "count-good-nodes-in-binary-tree",
        "dayNumber": 35,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 35."
      },
      {
        "id": "d35-a6",
        "problemId": "path-sum",
        "dayNumber": 35,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 35."
      },
      {
        "id": "d35-a7",
        "problemId": "path-sum-ii",
        "dayNumber": 35,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d35-a8",
        "problemId": "lowest-common-ancestor-of-a-binary-tree",
        "dayNumber": 35,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d35-a9",
        "problemId": "lowest-common-ancestor-of-a-binary-search-tree",
        "dayNumber": 35,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d35-a10",
        "problemId": "next-permutation",
        "dayNumber": 35,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d35-a11",
        "problemId": "minimum-size-subarray-sum",
        "dayNumber": 35,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d35-a12",
        "problemId": "reverse-linked-list",
        "dayNumber": 35,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 36,
    "phase": "Month 2: Core DSA Phase \u2014 Ordered Structures & Priority Processing",
    "phaseNumber": 6,
    "title": "Day 36: Kth Largest Element in an Array & Top K Elements Heap Mastery",
    "primaryPattern": "top-k-elements-heap",
    "relatedPatterns": [
      "sorting"
    ],
    "objectives": [
      "Master the top k elements heap invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 36\nMaster the core invariants of **Top K Elements Heap** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d36-a1",
        "problemId": "kth-largest-element-in-an-array",
        "dayNumber": 36,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 36."
      },
      {
        "id": "d36-a2",
        "problemId": "top-k-frequent-elements",
        "dayNumber": 36,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 36."
      },
      {
        "id": "d36-a3",
        "problemId": "find-median-from-data-stream",
        "dayNumber": 36,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 36."
      },
      {
        "id": "d36-a4",
        "problemId": "k-closest-points-to-origin",
        "dayNumber": 36,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 36."
      },
      {
        "id": "d36-a5",
        "problemId": "task-scheduler",
        "dayNumber": 36,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 36."
      },
      {
        "id": "d36-a6",
        "problemId": "last-stone-weight",
        "dayNumber": 36,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 36."
      },
      {
        "id": "d36-a7",
        "problemId": "kth-largest-element-in-a-stream",
        "dayNumber": 36,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d36-a8",
        "problemId": "search-in-a-binary-search-tree",
        "dayNumber": 36,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d36-a9",
        "problemId": "insert-into-a-binary-search-tree",
        "dayNumber": 36,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d36-a10",
        "problemId": "subarray-sums-divisible-by-k",
        "dayNumber": 36,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d36-a11",
        "problemId": "pascals-triangle-ii",
        "dayNumber": 36,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d36-a12",
        "problemId": "word-pattern",
        "dayNumber": 36,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 37,
    "phase": "Month 2: Core DSA Phase \u2014 Ordered Structures & Priority Processing",
    "phaseNumber": 6,
    "title": "Day 37: Last Stone Weight & Top K Elements Heap Mastery",
    "primaryPattern": "top-k-elements-heap",
    "relatedPatterns": [
      "greedy"
    ],
    "objectives": [
      "Master the top k elements heap invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 37\nMaster the core invariants of **Top K Elements Heap** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d37-a1",
        "problemId": "last-stone-weight",
        "dayNumber": 37,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 37."
      },
      {
        "id": "d37-a2",
        "problemId": "kth-largest-element-in-a-stream",
        "dayNumber": 37,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 37."
      },
      {
        "id": "d37-a3",
        "problemId": "search-in-a-binary-search-tree",
        "dayNumber": 37,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 37."
      },
      {
        "id": "d37-a4",
        "problemId": "insert-into-a-binary-search-tree",
        "dayNumber": 37,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 37."
      },
      {
        "id": "d37-a5",
        "problemId": "range-sum-of-bst",
        "dayNumber": 37,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 37."
      },
      {
        "id": "d37-a6",
        "problemId": "convert-sorted-array-to-binary-search-tree",
        "dayNumber": 37,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 37."
      },
      {
        "id": "d37-a7",
        "problemId": "merge-k-sorted-lists",
        "dayNumber": 37,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d37-a8",
        "problemId": "online-stock-span",
        "dayNumber": 37,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d37-a9",
        "problemId": "sort-colors",
        "dayNumber": 37,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d37-a10",
        "problemId": "3sum-closest",
        "dayNumber": 37,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d37-a11",
        "problemId": "longest-substring-without-repeating-characters",
        "dayNumber": 37,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d37-a12",
        "problemId": "jewels-and-stones",
        "dayNumber": 37,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 38,
    "phase": "Month 2: Core DSA Phase \u2014 Ordered Structures & Priority Processing",
    "phaseNumber": 6,
    "title": "Day 38: Convert Sorted Array to Binary Search Tree & Binary Search Trees Mastery",
    "primaryPattern": "binary-search-trees",
    "relatedPatterns": [
      "divide-and-conquer"
    ],
    "objectives": [
      "Master the binary search trees invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 38\nMaster the core invariants of **Binary Search Trees** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d38-a1",
        "problemId": "convert-sorted-array-to-binary-search-tree",
        "dayNumber": 38,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 38."
      },
      {
        "id": "d38-a2",
        "problemId": "merge-k-sorted-lists",
        "dayNumber": 38,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 38."
      },
      {
        "id": "d38-a3",
        "problemId": "online-stock-span",
        "dayNumber": 38,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 38."
      },
      {
        "id": "d38-a4",
        "problemId": "sort-colors",
        "dayNumber": 38,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 38."
      },
      {
        "id": "d38-a5",
        "problemId": "relative-sort-array",
        "dayNumber": 38,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 38."
      },
      {
        "id": "d38-a6",
        "problemId": "height-checker",
        "dayNumber": 38,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 38."
      },
      {
        "id": "d38-a7",
        "problemId": "kth-largest-element-in-an-array",
        "dayNumber": 38,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d38-a8",
        "problemId": "top-k-frequent-elements",
        "dayNumber": 38,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d38-a9",
        "problemId": "find-median-from-data-stream",
        "dayNumber": 38,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d38-a10",
        "problemId": "rotate-image",
        "dayNumber": 38,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d38-a11",
        "problemId": "permutation-in-string",
        "dayNumber": 38,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d38-a12",
        "problemId": "longest-palindrome",
        "dayNumber": 38,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 39,
    "phase": "Month 2: Core DSA Phase \u2014 Ordered Structures & Priority Processing",
    "phaseNumber": 6,
    "title": "Day 39: Height Checker & Sorting Mastery",
    "primaryPattern": "sorting",
    "relatedPatterns": [
      "arrays"
    ],
    "objectives": [
      "Master the sorting invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 39\nMaster the core invariants of **Sorting** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d39-a1",
        "problemId": "height-checker",
        "dayNumber": 39,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 39."
      },
      {
        "id": "d39-a2",
        "problemId": "kth-largest-element-in-an-array",
        "dayNumber": 39,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 39."
      },
      {
        "id": "d39-a3",
        "problemId": "top-k-frequent-elements",
        "dayNumber": 39,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 39."
      },
      {
        "id": "d39-a4",
        "problemId": "find-median-from-data-stream",
        "dayNumber": 39,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 39."
      },
      {
        "id": "d39-a5",
        "problemId": "k-closest-points-to-origin",
        "dayNumber": 39,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 39."
      },
      {
        "id": "d39-a6",
        "problemId": "task-scheduler",
        "dayNumber": 39,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 39."
      },
      {
        "id": "d39-a7",
        "problemId": "last-stone-weight",
        "dayNumber": 39,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d39-a8",
        "problemId": "kth-largest-element-in-a-stream",
        "dayNumber": 39,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d39-a9",
        "problemId": "search-in-a-binary-search-tree",
        "dayNumber": 39,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d39-a10",
        "problemId": "pascals-triangle-ii",
        "dayNumber": 39,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d39-a11",
        "problemId": "word-pattern",
        "dayNumber": 39,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d39-a12",
        "problemId": "linked-list-cycle",
        "dayNumber": 39,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 40,
    "phase": "Month 2: Core DSA Phase \u2014 Ordered Structures & Priority Processing",
    "phaseNumber": 6,
    "title": "Day 40: Task Scheduler & Top K Elements Heap Mastery",
    "primaryPattern": "top-k-elements-heap",
    "relatedPatterns": [
      "greedy"
    ],
    "objectives": [
      "Master the top k elements heap invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 40\nMaster the core invariants of **Top K Elements Heap** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d40-a1",
        "problemId": "task-scheduler",
        "dayNumber": 40,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 40."
      },
      {
        "id": "d40-a2",
        "problemId": "last-stone-weight",
        "dayNumber": 40,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 40."
      },
      {
        "id": "d40-a3",
        "problemId": "kth-largest-element-in-a-stream",
        "dayNumber": 40,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 40."
      },
      {
        "id": "d40-a4",
        "problemId": "search-in-a-binary-search-tree",
        "dayNumber": 40,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 40."
      },
      {
        "id": "d40-a5",
        "problemId": "insert-into-a-binary-search-tree",
        "dayNumber": 40,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 40."
      },
      {
        "id": "d40-a6",
        "problemId": "range-sum-of-bst",
        "dayNumber": 40,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 40."
      },
      {
        "id": "d40-a7",
        "problemId": "convert-sorted-array-to-binary-search-tree",
        "dayNumber": 40,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d40-a8",
        "problemId": "merge-k-sorted-lists",
        "dayNumber": 40,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d40-a9",
        "problemId": "online-stock-span",
        "dayNumber": 40,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d40-a10",
        "problemId": "permutation-in-string",
        "dayNumber": 40,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d40-a11",
        "problemId": "longest-palindrome",
        "dayNumber": 40,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d40-a12",
        "problemId": "lru-cache",
        "dayNumber": 40,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 41,
    "phase": "Month 2: Core DSA Phase \u2014 Ordered Structures & Priority Processing",
    "phaseNumber": 6,
    "title": "Day 41: Range Sum of BST & Binary Search Trees Mastery",
    "primaryPattern": "binary-search-trees",
    "relatedPatterns": [
      "recursion"
    ],
    "objectives": [
      "Master the binary search trees invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 41\nMaster the core invariants of **Binary Search Trees** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d41-a1",
        "problemId": "range-sum-of-bst",
        "dayNumber": 41,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 41."
      },
      {
        "id": "d41-a2",
        "problemId": "convert-sorted-array-to-binary-search-tree",
        "dayNumber": 41,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 41."
      },
      {
        "id": "d41-a3",
        "problemId": "merge-k-sorted-lists",
        "dayNumber": 41,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 41."
      },
      {
        "id": "d41-a4",
        "problemId": "online-stock-span",
        "dayNumber": 41,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 41."
      },
      {
        "id": "d41-a5",
        "problemId": "sort-colors",
        "dayNumber": 41,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 41."
      },
      {
        "id": "d41-a6",
        "problemId": "relative-sort-array",
        "dayNumber": 41,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 41."
      },
      {
        "id": "d41-a7",
        "problemId": "height-checker",
        "dayNumber": 41,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d41-a8",
        "problemId": "kth-largest-element-in-an-array",
        "dayNumber": 41,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d41-a9",
        "problemId": "top-k-frequent-elements",
        "dayNumber": 41,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d41-a10",
        "problemId": "first-unique-character-in-a-string",
        "dayNumber": 41,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d41-a11",
        "problemId": "middle-of-the-linked-list",
        "dayNumber": 41,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d41-a12",
        "problemId": "implement-queue-using-stacks",
        "dayNumber": 41,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 42,
    "phase": "Month 2: Core DSA Phase \u2014 Ordered Structures & Priority Processing",
    "phaseNumber": 6,
    "title": "Day 42: Relative Sort Array & Sorting Mastery",
    "primaryPattern": "sorting",
    "relatedPatterns": [
      "hash-map"
    ],
    "objectives": [
      "Master the sorting invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 42\nMaster the core invariants of **Sorting** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d42-a1",
        "problemId": "relative-sort-array",
        "dayNumber": 42,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 42."
      },
      {
        "id": "d42-a2",
        "problemId": "height-checker",
        "dayNumber": 42,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 42."
      },
      {
        "id": "d42-a3",
        "problemId": "kth-largest-element-in-an-array",
        "dayNumber": 42,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 42."
      },
      {
        "id": "d42-a4",
        "problemId": "top-k-frequent-elements",
        "dayNumber": 42,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 42."
      },
      {
        "id": "d42-a5",
        "problemId": "find-median-from-data-stream",
        "dayNumber": 42,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 42."
      },
      {
        "id": "d42-a6",
        "problemId": "k-closest-points-to-origin",
        "dayNumber": 42,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 42."
      },
      {
        "id": "d42-a7",
        "problemId": "task-scheduler",
        "dayNumber": 42,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d42-a8",
        "problemId": "last-stone-weight",
        "dayNumber": 42,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d42-a9",
        "problemId": "kth-largest-element-in-a-stream",
        "dayNumber": 42,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d42-a10",
        "problemId": "reverse-string",
        "dayNumber": 42,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d42-a11",
        "problemId": "merge-k-sorted-lists",
        "dayNumber": 42,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d42-a12",
        "problemId": "binary-search",
        "dayNumber": 42,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 43,
    "phase": "Month 2: Core DSA Phase \u2014 Graph Traversal & Connectivity",
    "phaseNumber": 7,
    "title": "Day 43: Number of Islands & Graph Bfs Dfs Mastery",
    "primaryPattern": "graph-bfs-dfs",
    "relatedPatterns": [
      "matrix"
    ],
    "objectives": [
      "Master the graph bfs dfs invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 43\nMaster the core invariants of **Graph Bfs Dfs** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d43-a1",
        "problemId": "number-of-islands",
        "dayNumber": 43,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 43."
      },
      {
        "id": "d43-a2",
        "problemId": "clone-graph",
        "dayNumber": 43,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 43."
      },
      {
        "id": "d43-a3",
        "problemId": "max-area-of-island",
        "dayNumber": 43,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 43."
      },
      {
        "id": "d43-a4",
        "problemId": "pacific-atlantic-water-flow",
        "dayNumber": 43,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 43."
      },
      {
        "id": "d43-a5",
        "problemId": "surrounded-regions",
        "dayNumber": 43,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 43."
      },
      {
        "id": "d43-a6",
        "problemId": "rotting-oranges",
        "dayNumber": 43,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 43."
      },
      {
        "id": "d43-a7",
        "problemId": "course-schedule",
        "dayNumber": 43,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d43-a8",
        "problemId": "course-schedule-ii",
        "dayNumber": 43,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d43-a9",
        "problemId": "redundant-connection",
        "dayNumber": 43,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d43-a10",
        "problemId": "longest-consecutive-sequence",
        "dayNumber": 43,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d43-a11",
        "problemId": "reverse-words-in-a-string-iii",
        "dayNumber": 43,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d43-a12",
        "problemId": "min-stack",
        "dayNumber": 43,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 44,
    "phase": "Month 2: Core DSA Phase \u2014 Graph Traversal & Connectivity",
    "phaseNumber": 7,
    "title": "Day 44: Rotting Oranges & Graph Bfs Dfs Mastery",
    "primaryPattern": "graph-bfs-dfs",
    "relatedPatterns": [
      "matrix"
    ],
    "objectives": [
      "Master the graph bfs dfs invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 44\nMaster the core invariants of **Graph Bfs Dfs** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d44-a1",
        "problemId": "rotting-oranges",
        "dayNumber": 44,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 44."
      },
      {
        "id": "d44-a2",
        "problemId": "course-schedule",
        "dayNumber": 44,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 44."
      },
      {
        "id": "d44-a3",
        "problemId": "course-schedule-ii",
        "dayNumber": 44,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 44."
      },
      {
        "id": "d44-a4",
        "problemId": "redundant-connection",
        "dayNumber": 44,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 44."
      },
      {
        "id": "d44-a5",
        "problemId": "number-of-provinces",
        "dayNumber": 44,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 44."
      },
      {
        "id": "d44-a6",
        "problemId": "graph-valid-tree",
        "dayNumber": 44,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 44."
      },
      {
        "id": "d44-a7",
        "problemId": "word-ladder",
        "dayNumber": 44,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d44-a8",
        "problemId": "network-delay-time",
        "dayNumber": 44,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d44-a9",
        "problemId": "cheapest-flights-within-k-stops",
        "dayNumber": 44,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d44-a10",
        "problemId": "permutation-in-string",
        "dayNumber": 44,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d44-a11",
        "problemId": "longest-palindrome",
        "dayNumber": 44,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d44-a12",
        "problemId": "lru-cache",
        "dayNumber": 44,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 45,
    "phase": "Month 2: Core DSA Phase \u2014 Graph Traversal & Connectivity",
    "phaseNumber": 7,
    "title": "Day 45: Graph Valid Tree & Union Find Mastery",
    "primaryPattern": "union-find",
    "relatedPatterns": [
      "graph-bfs-dfs"
    ],
    "objectives": [
      "Master the union find invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 45\nMaster the core invariants of **Union Find** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d45-a1",
        "problemId": "graph-valid-tree",
        "dayNumber": 45,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 45."
      },
      {
        "id": "d45-a2",
        "problemId": "word-ladder",
        "dayNumber": 45,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 45."
      },
      {
        "id": "d45-a3",
        "problemId": "network-delay-time",
        "dayNumber": 45,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 45."
      },
      {
        "id": "d45-a4",
        "problemId": "cheapest-flights-within-k-stops",
        "dayNumber": 45,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 45."
      },
      {
        "id": "d45-a5",
        "problemId": "flood-fill",
        "dayNumber": 45,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 45."
      },
      {
        "id": "d45-a6",
        "problemId": "island-perimeter",
        "dayNumber": 45,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 45."
      },
      {
        "id": "d45-a7",
        "problemId": "find-if-path-exists-in-graph",
        "dayNumber": 45,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d45-a8",
        "problemId": "number-of-islands",
        "dayNumber": 45,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d45-a9",
        "problemId": "clone-graph",
        "dayNumber": 45,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d45-a10",
        "problemId": "find-all-anagrams-in-a-string",
        "dayNumber": 45,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d45-a11",
        "problemId": "reverse-string",
        "dayNumber": 45,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d45-a12",
        "problemId": "merge-k-sorted-lists",
        "dayNumber": 45,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 46,
    "phase": "Month 2: Core DSA Phase \u2014 Graph Traversal & Connectivity",
    "phaseNumber": 7,
    "title": "Day 46: Island Perimeter & Matrix Mastery",
    "primaryPattern": "matrix",
    "relatedPatterns": [
      "arrays"
    ],
    "objectives": [
      "Master the matrix invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 46\nMaster the core invariants of **Matrix** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d46-a1",
        "problemId": "island-perimeter",
        "dayNumber": 46,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 46."
      },
      {
        "id": "d46-a2",
        "problemId": "find-if-path-exists-in-graph",
        "dayNumber": 46,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 46."
      },
      {
        "id": "d46-a3",
        "problemId": "number-of-islands",
        "dayNumber": 46,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 46."
      },
      {
        "id": "d46-a4",
        "problemId": "clone-graph",
        "dayNumber": 46,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 46."
      },
      {
        "id": "d46-a5",
        "problemId": "max-area-of-island",
        "dayNumber": 46,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 46."
      },
      {
        "id": "d46-a6",
        "problemId": "pacific-atlantic-water-flow",
        "dayNumber": 46,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 46."
      },
      {
        "id": "d46-a7",
        "problemId": "surrounded-regions",
        "dayNumber": 46,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d46-a8",
        "problemId": "rotting-oranges",
        "dayNumber": 46,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d46-a9",
        "problemId": "course-schedule",
        "dayNumber": 46,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d46-a10",
        "problemId": "first-unique-character-in-a-string",
        "dayNumber": 46,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d46-a11",
        "problemId": "middle-of-the-linked-list",
        "dayNumber": 46,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d46-a12",
        "problemId": "largest-rectangle-in-histogram",
        "dayNumber": 46,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 47,
    "phase": "Month 2: Core DSA Phase \u2014 Graph Traversal & Connectivity",
    "phaseNumber": 7,
    "title": "Day 47: Pacific Atlantic Water Flow & Graph Bfs Dfs Mastery",
    "primaryPattern": "graph-bfs-dfs",
    "relatedPatterns": [
      "matrix"
    ],
    "objectives": [
      "Master the graph bfs dfs invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 47\nMaster the core invariants of **Graph Bfs Dfs** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d47-a1",
        "problemId": "pacific-atlantic-water-flow",
        "dayNumber": 47,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 47."
      },
      {
        "id": "d47-a2",
        "problemId": "surrounded-regions",
        "dayNumber": 47,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 47."
      },
      {
        "id": "d47-a3",
        "problemId": "rotting-oranges",
        "dayNumber": 47,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 47."
      },
      {
        "id": "d47-a4",
        "problemId": "course-schedule",
        "dayNumber": 47,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 47."
      },
      {
        "id": "d47-a5",
        "problemId": "course-schedule-ii",
        "dayNumber": 47,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 47."
      },
      {
        "id": "d47-a6",
        "problemId": "redundant-connection",
        "dayNumber": 47,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 47."
      },
      {
        "id": "d47-a7",
        "problemId": "number-of-provinces",
        "dayNumber": 47,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d47-a8",
        "problemId": "graph-valid-tree",
        "dayNumber": 47,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d47-a9",
        "problemId": "word-ladder",
        "dayNumber": 47,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d47-a10",
        "problemId": "reverse-words-in-a-string",
        "dayNumber": 47,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d47-a11",
        "problemId": "valid-parentheses",
        "dayNumber": 47,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d47-a12",
        "problemId": "search-insert-position",
        "dayNumber": 47,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 48,
    "phase": "Month 2: Core DSA Phase \u2014 Graph Traversal & Connectivity",
    "phaseNumber": 7,
    "title": "Day 48: Redundant Connection & Union Find Mastery",
    "primaryPattern": "union-find",
    "relatedPatterns": [
      "graph-bfs-dfs"
    ],
    "objectives": [
      "Master the union find invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 48\nMaster the core invariants of **Union Find** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d48-a1",
        "problemId": "redundant-connection",
        "dayNumber": 48,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 48."
      },
      {
        "id": "d48-a2",
        "problemId": "number-of-provinces",
        "dayNumber": 48,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 48."
      },
      {
        "id": "d48-a3",
        "problemId": "graph-valid-tree",
        "dayNumber": 48,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 48."
      },
      {
        "id": "d48-a4",
        "problemId": "word-ladder",
        "dayNumber": 48,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 48."
      },
      {
        "id": "d48-a5",
        "problemId": "network-delay-time",
        "dayNumber": 48,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 48."
      },
      {
        "id": "d48-a6",
        "problemId": "cheapest-flights-within-k-stops",
        "dayNumber": 48,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 48."
      },
      {
        "id": "d48-a7",
        "problemId": "flood-fill",
        "dayNumber": 48,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d48-a8",
        "problemId": "island-perimeter",
        "dayNumber": 48,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d48-a9",
        "problemId": "find-if-path-exists-in-graph",
        "dayNumber": 48,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d48-a10",
        "problemId": "remove-nth-node-from-end-of-list",
        "dayNumber": 48,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d48-a11",
        "problemId": "sliding-window-maximum",
        "dayNumber": 48,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d48-a12",
        "problemId": "capacity-to-ship-packages-within-d-days",
        "dayNumber": 48,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 49,
    "phase": "Month 2: Core DSA Phase \u2014 Graph Traversal & Connectivity",
    "phaseNumber": 7,
    "title": "Day 49: Cheapest Flights Within K Stops & Graph Bfs Dfs Mastery",
    "primaryPattern": "graph-bfs-dfs",
    "relatedPatterns": [
      "dynamic-programming-1d"
    ],
    "objectives": [
      "Master the graph bfs dfs invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 49\nMaster the core invariants of **Graph Bfs Dfs** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d49-a1",
        "problemId": "cheapest-flights-within-k-stops",
        "dayNumber": 49,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 49."
      },
      {
        "id": "d49-a2",
        "problemId": "flood-fill",
        "dayNumber": 49,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 49."
      },
      {
        "id": "d49-a3",
        "problemId": "island-perimeter",
        "dayNumber": 49,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 49."
      },
      {
        "id": "d49-a4",
        "problemId": "find-if-path-exists-in-graph",
        "dayNumber": 49,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 49."
      },
      {
        "id": "d49-a5",
        "problemId": "number-of-islands",
        "dayNumber": 49,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 49."
      },
      {
        "id": "d49-a6",
        "problemId": "clone-graph",
        "dayNumber": 49,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 49."
      },
      {
        "id": "d49-a7",
        "problemId": "max-area-of-island",
        "dayNumber": 49,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d49-a8",
        "problemId": "pacific-atlantic-water-flow",
        "dayNumber": 49,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d49-a9",
        "problemId": "surrounded-regions",
        "dayNumber": 49,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d49-a10",
        "problemId": "min-stack",
        "dayNumber": 49,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d49-a11",
        "problemId": "search-in-rotated-sorted-array",
        "dayNumber": 49,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d49-a12",
        "problemId": "combination-sum",
        "dayNumber": 49,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 50,
    "phase": "Month 2: Core DSA Phase \u2014 Greedy & Interval Problems",
    "phaseNumber": 8,
    "title": "Day 50: Merge Intervals & Greedy Intervals Mastery",
    "primaryPattern": "greedy-intervals",
    "relatedPatterns": [
      "sorting"
    ],
    "objectives": [
      "Master the greedy intervals invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 50\nMaster the core invariants of **Greedy Intervals** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d50-a1",
        "problemId": "merge-intervals",
        "dayNumber": 50,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 50."
      },
      {
        "id": "d50-a2",
        "problemId": "insert-interval",
        "dayNumber": 50,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 50."
      },
      {
        "id": "d50-a3",
        "problemId": "non-overlapping-intervals",
        "dayNumber": 50,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 50."
      },
      {
        "id": "d50-a4",
        "problemId": "meeting-rooms",
        "dayNumber": 50,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 50."
      },
      {
        "id": "d50-a5",
        "problemId": "meeting-rooms-ii",
        "dayNumber": 50,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 50."
      },
      {
        "id": "d50-a6",
        "problemId": "jump-game",
        "dayNumber": 50,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 50."
      },
      {
        "id": "d50-a7",
        "problemId": "jump-game-ii",
        "dayNumber": 50,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d50-a8",
        "problemId": "gas-station",
        "dayNumber": 50,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d50-a9",
        "problemId": "partition-labels",
        "dayNumber": 50,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d50-a10",
        "problemId": "merge-two-sorted-lists",
        "dayNumber": 50,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d50-a11",
        "problemId": "daily-temperatures",
        "dayNumber": 50,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d50-a12",
        "problemId": "find-minimum-in-rotated-sorted-array",
        "dayNumber": 50,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 51,
    "phase": "Month 2: Core DSA Phase \u2014 Greedy & Interval Problems",
    "phaseNumber": 8,
    "title": "Day 51: Jump Game & Greedy Mastery",
    "primaryPattern": "greedy",
    "relatedPatterns": [
      "dynamic-programming-1d"
    ],
    "objectives": [
      "Master the greedy invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 51\nMaster the core invariants of **Greedy** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d51-a1",
        "problemId": "jump-game",
        "dayNumber": 51,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 51."
      },
      {
        "id": "d51-a2",
        "problemId": "jump-game-ii",
        "dayNumber": 51,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 51."
      },
      {
        "id": "d51-a3",
        "problemId": "gas-station",
        "dayNumber": 51,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 51."
      },
      {
        "id": "d51-a4",
        "problemId": "partition-labels",
        "dayNumber": 51,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 51."
      },
      {
        "id": "d51-a5",
        "problemId": "assign-cookies",
        "dayNumber": 51,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 51."
      },
      {
        "id": "d51-a6",
        "problemId": "can-place-flowers",
        "dayNumber": 51,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 51."
      },
      {
        "id": "d51-a7",
        "problemId": "best-time-to-buy-and-sell-stock-ii",
        "dayNumber": 51,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d51-a8",
        "problemId": "merge-intervals",
        "dayNumber": 51,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d51-a9",
        "problemId": "insert-interval",
        "dayNumber": 51,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d51-a10",
        "problemId": "linked-list-cycle",
        "dayNumber": 51,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d51-a11",
        "problemId": "online-stock-span",
        "dayNumber": 51,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d51-a12",
        "problemId": "find-peak-element",
        "dayNumber": 51,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 52,
    "phase": "Month 2: Core DSA Phase \u2014 Greedy & Interval Problems",
    "phaseNumber": 8,
    "title": "Day 52: Can Place Flowers & Greedy Mastery",
    "primaryPattern": "greedy",
    "relatedPatterns": [
      "arrays"
    ],
    "objectives": [
      "Master the greedy invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 52\nMaster the core invariants of **Greedy** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d52-a1",
        "problemId": "can-place-flowers",
        "dayNumber": 52,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 52."
      },
      {
        "id": "d52-a2",
        "problemId": "best-time-to-buy-and-sell-stock-ii",
        "dayNumber": 52,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 52."
      },
      {
        "id": "d52-a3",
        "problemId": "merge-intervals",
        "dayNumber": 52,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 52."
      },
      {
        "id": "d52-a4",
        "problemId": "insert-interval",
        "dayNumber": 52,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 52."
      },
      {
        "id": "d52-a5",
        "problemId": "non-overlapping-intervals",
        "dayNumber": 52,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 52."
      },
      {
        "id": "d52-a6",
        "problemId": "meeting-rooms",
        "dayNumber": 52,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 52."
      },
      {
        "id": "d52-a7",
        "problemId": "meeting-rooms-ii",
        "dayNumber": 52,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d52-a8",
        "problemId": "jump-game",
        "dayNumber": 52,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d52-a9",
        "problemId": "jump-game-ii",
        "dayNumber": 52,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d52-a10",
        "problemId": "lru-cache",
        "dayNumber": 52,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d52-a11",
        "problemId": "remove-duplicates-from-sorted-list",
        "dayNumber": 52,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d52-a12",
        "problemId": "valid-perfect-square",
        "dayNumber": 52,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 53,
    "phase": "Month 2: Core DSA Phase \u2014 Greedy & Interval Problems",
    "phaseNumber": 8,
    "title": "Day 53: Meeting Rooms & Greedy Intervals Mastery",
    "primaryPattern": "greedy-intervals",
    "relatedPatterns": [
      "sorting"
    ],
    "objectives": [
      "Master the greedy intervals invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 53\nMaster the core invariants of **Greedy Intervals** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d53-a1",
        "problemId": "meeting-rooms",
        "dayNumber": 53,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 53."
      },
      {
        "id": "d53-a2",
        "problemId": "meeting-rooms-ii",
        "dayNumber": 53,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 53."
      },
      {
        "id": "d53-a3",
        "problemId": "jump-game",
        "dayNumber": 53,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 53."
      },
      {
        "id": "d53-a4",
        "problemId": "jump-game-ii",
        "dayNumber": 53,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 53."
      },
      {
        "id": "d53-a5",
        "problemId": "gas-station",
        "dayNumber": 53,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 53."
      },
      {
        "id": "d53-a6",
        "problemId": "partition-labels",
        "dayNumber": 53,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 53."
      },
      {
        "id": "d53-a7",
        "problemId": "assign-cookies",
        "dayNumber": 53,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d53-a8",
        "problemId": "can-place-flowers",
        "dayNumber": 53,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d53-a9",
        "problemId": "best-time-to-buy-and-sell-stock-ii",
        "dayNumber": 53,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d53-a10",
        "problemId": "next-greater-element-i",
        "dayNumber": 53,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d53-a11",
        "problemId": "search-a-2d-matrix",
        "dayNumber": 53,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d53-a12",
        "problemId": "letter-combinations-of-a-phone-number",
        "dayNumber": 53,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 54,
    "phase": "Month 2: Core DSA Phase \u2014 Greedy & Interval Problems",
    "phaseNumber": 8,
    "title": "Day 54: Partition Labels & Greedy Mastery",
    "primaryPattern": "greedy",
    "relatedPatterns": [
      "hash-map"
    ],
    "objectives": [
      "Master the greedy invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 54\nMaster the core invariants of **Greedy** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d54-a1",
        "problemId": "partition-labels",
        "dayNumber": 54,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 54."
      },
      {
        "id": "d54-a2",
        "problemId": "assign-cookies",
        "dayNumber": 54,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 54."
      },
      {
        "id": "d54-a3",
        "problemId": "can-place-flowers",
        "dayNumber": 54,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 54."
      },
      {
        "id": "d54-a4",
        "problemId": "best-time-to-buy-and-sell-stock-ii",
        "dayNumber": 54,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 54."
      },
      {
        "id": "d54-a5",
        "problemId": "merge-intervals",
        "dayNumber": 54,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 54."
      },
      {
        "id": "d54-a6",
        "problemId": "insert-interval",
        "dayNumber": 54,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 54."
      },
      {
        "id": "d54-a7",
        "problemId": "non-overlapping-intervals",
        "dayNumber": 54,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d54-a8",
        "problemId": "meeting-rooms",
        "dayNumber": 54,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d54-a9",
        "problemId": "meeting-rooms-ii",
        "dayNumber": 54,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d54-a10",
        "problemId": "binary-search",
        "dayNumber": 54,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d54-a11",
        "problemId": "subsets",
        "dayNumber": 54,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d54-a12",
        "problemId": "symmetric-tree",
        "dayNumber": 54,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 55,
    "phase": "Month 2: Core DSA Phase \u2014 Greedy & Interval Problems",
    "phaseNumber": 8,
    "title": "Day 55: Insert Interval & Greedy Intervals Mastery",
    "primaryPattern": "greedy-intervals",
    "relatedPatterns": [
      "arrays"
    ],
    "objectives": [
      "Master the greedy intervals invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 55\nMaster the core invariants of **Greedy Intervals** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d55-a1",
        "problemId": "insert-interval",
        "dayNumber": 55,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 55."
      },
      {
        "id": "d55-a2",
        "problemId": "non-overlapping-intervals",
        "dayNumber": 55,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 55."
      },
      {
        "id": "d55-a3",
        "problemId": "meeting-rooms",
        "dayNumber": 55,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 55."
      },
      {
        "id": "d55-a4",
        "problemId": "meeting-rooms-ii",
        "dayNumber": 55,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 55."
      },
      {
        "id": "d55-a5",
        "problemId": "jump-game",
        "dayNumber": 55,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 55."
      },
      {
        "id": "d55-a6",
        "problemId": "jump-game-ii",
        "dayNumber": 55,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 55."
      },
      {
        "id": "d55-a7",
        "problemId": "gas-station",
        "dayNumber": 55,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d55-a8",
        "problemId": "partition-labels",
        "dayNumber": 55,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d55-a9",
        "problemId": "assign-cookies",
        "dayNumber": 55,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d55-a10",
        "problemId": "koko-eating-bananas",
        "dayNumber": 55,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d55-a11",
        "problemId": "palindrome-partitioning",
        "dayNumber": 55,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d55-a12",
        "problemId": "path-sum-ii",
        "dayNumber": 55,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 56,
    "phase": "Month 2: Core DSA Phase \u2014 Greedy & Interval Problems",
    "phaseNumber": 8,
    "title": "Day 56: Jump Game II & Greedy Mastery",
    "primaryPattern": "greedy",
    "relatedPatterns": [
      "dynamic-programming-1d"
    ],
    "objectives": [
      "Master the greedy invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 56\nMaster the core invariants of **Greedy** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d56-a1",
        "problemId": "jump-game-ii",
        "dayNumber": 56,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 56."
      },
      {
        "id": "d56-a2",
        "problemId": "gas-station",
        "dayNumber": 56,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 56."
      },
      {
        "id": "d56-a3",
        "problemId": "partition-labels",
        "dayNumber": 56,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 56."
      },
      {
        "id": "d56-a4",
        "problemId": "assign-cookies",
        "dayNumber": 56,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 56."
      },
      {
        "id": "d56-a5",
        "problemId": "can-place-flowers",
        "dayNumber": 56,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 56."
      },
      {
        "id": "d56-a6",
        "problemId": "best-time-to-buy-and-sell-stock-ii",
        "dayNumber": 56,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 56."
      },
      {
        "id": "d56-a7",
        "problemId": "merge-intervals",
        "dayNumber": 56,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d56-a8",
        "problemId": "insert-interval",
        "dayNumber": 56,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d56-a9",
        "problemId": "non-overlapping-intervals",
        "dayNumber": 56,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d56-a10",
        "problemId": "subsets-ii",
        "dayNumber": 56,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d56-a11",
        "problemId": "subtree-of-another-tree",
        "dayNumber": 56,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d56-a12",
        "problemId": "serialize-and-deserialize-binary-tree",
        "dayNumber": 56,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 57,
    "phase": "Month 3: Advanced Problem Solving \u2014 Dynamic Programming 1D & 2D",
    "phaseNumber": 9,
    "title": "Day 57: Climbing Stairs & Dynamic Programming 1D Mastery",
    "primaryPattern": "dynamic-programming-1d",
    "relatedPatterns": [
      "recursion"
    ],
    "objectives": [
      "Master the dynamic programming 1d invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 57\nMaster the core invariants of **Dynamic Programming 1D** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d57-a1",
        "problemId": "climbing-stairs",
        "dayNumber": 57,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 57."
      },
      {
        "id": "d57-a2",
        "problemId": "min-cost-climbing-stairs",
        "dayNumber": 57,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 57."
      },
      {
        "id": "d57-a3",
        "problemId": "house-robber",
        "dayNumber": 57,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 57."
      },
      {
        "id": "d57-a4",
        "problemId": "house-robber-ii",
        "dayNumber": 57,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 57."
      },
      {
        "id": "d57-a5",
        "problemId": "longest-palindromic-substring",
        "dayNumber": 57,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 57."
      },
      {
        "id": "d57-a6",
        "problemId": "palindromic-substrings",
        "dayNumber": 57,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 57."
      },
      {
        "id": "d57-a7",
        "problemId": "decode-ways",
        "dayNumber": 57,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d57-a8",
        "problemId": "coin-change",
        "dayNumber": 57,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d57-a9",
        "problemId": "coin-change-ii",
        "dayNumber": 57,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d57-a10",
        "problemId": "find-first-and-last-position-of-element-in-sorted-array",
        "dayNumber": 57,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d57-a11",
        "problemId": "combination-sum-ii",
        "dayNumber": 57,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d57-a12",
        "problemId": "binary-tree-right-side-view",
        "dayNumber": 57,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 58,
    "phase": "Month 3: Advanced Problem Solving \u2014 Dynamic Programming 1D & 2D",
    "phaseNumber": 9,
    "title": "Day 58: Palindromic Substrings & Two Pointers Mastery",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "dynamic-programming-1d"
    ],
    "objectives": [
      "Master the two pointers invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 58\nMaster the core invariants of **Two Pointers** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d58-a1",
        "problemId": "palindromic-substrings",
        "dayNumber": 58,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 58."
      },
      {
        "id": "d58-a2",
        "problemId": "decode-ways",
        "dayNumber": 58,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 58."
      },
      {
        "id": "d58-a3",
        "problemId": "coin-change",
        "dayNumber": 58,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 58."
      },
      {
        "id": "d58-a4",
        "problemId": "coin-change-ii",
        "dayNumber": 58,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 58."
      },
      {
        "id": "d58-a5",
        "problemId": "maximum-product-subarray",
        "dayNumber": 58,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 58."
      },
      {
        "id": "d58-a6",
        "problemId": "word-break",
        "dayNumber": 58,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 58."
      },
      {
        "id": "d58-a7",
        "problemId": "longest-increasing-subsequence",
        "dayNumber": 58,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d58-a8",
        "problemId": "partition-equal-subset-sum",
        "dayNumber": 58,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d58-a9",
        "problemId": "target-sum",
        "dayNumber": 58,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d58-a10",
        "problemId": "binary-search",
        "dayNumber": 58,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d58-a11",
        "problemId": "subsets",
        "dayNumber": 58,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d58-a12",
        "problemId": "symmetric-tree",
        "dayNumber": 58,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 59,
    "phase": "Month 3: Advanced Problem Solving \u2014 Dynamic Programming 1D & 2D",
    "phaseNumber": 9,
    "title": "Day 59: Word Break & Dynamic Programming 1D Mastery",
    "primaryPattern": "dynamic-programming-1d",
    "relatedPatterns": [
      "trie"
    ],
    "objectives": [
      "Master the dynamic programming 1d invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 59\nMaster the core invariants of **Dynamic Programming 1D** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d59-a1",
        "problemId": "word-break",
        "dayNumber": 59,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 59."
      },
      {
        "id": "d59-a2",
        "problemId": "longest-increasing-subsequence",
        "dayNumber": 59,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 59."
      },
      {
        "id": "d59-a3",
        "problemId": "partition-equal-subset-sum",
        "dayNumber": 59,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 59."
      },
      {
        "id": "d59-a4",
        "problemId": "target-sum",
        "dayNumber": 59,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 59."
      },
      {
        "id": "d59-a5",
        "problemId": "unique-paths",
        "dayNumber": 59,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 59."
      },
      {
        "id": "d59-a6",
        "problemId": "minimum-path-sum",
        "dayNumber": 59,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 59."
      },
      {
        "id": "d59-a7",
        "problemId": "longest-common-subsequence",
        "dayNumber": 59,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d59-a8",
        "problemId": "edit-distance",
        "dayNumber": 59,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d59-a9",
        "problemId": "interleaving-string",
        "dayNumber": 59,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d59-a10",
        "problemId": "implement-stack-using-queues",
        "dayNumber": 59,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d59-a11",
        "problemId": "sqrtx",
        "dayNumber": 59,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d59-a12",
        "problemId": "diameter-of-binary-tree",
        "dayNumber": 59,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 60,
    "phase": "Month 3: Advanced Problem Solving \u2014 Dynamic Programming 1D & 2D",
    "phaseNumber": 9,
    "title": "Day 60: Minimum Path Sum & Dynamic Programming 2D Mastery",
    "primaryPattern": "dynamic-programming-2d",
    "relatedPatterns": [
      "matrix"
    ],
    "objectives": [
      "Master the dynamic programming 2d invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 60\nMaster the core invariants of **Dynamic Programming 2D** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d60-a1",
        "problemId": "minimum-path-sum",
        "dayNumber": 60,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 60."
      },
      {
        "id": "d60-a2",
        "problemId": "longest-common-subsequence",
        "dayNumber": 60,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 60."
      },
      {
        "id": "d60-a3",
        "problemId": "edit-distance",
        "dayNumber": 60,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 60."
      },
      {
        "id": "d60-a4",
        "problemId": "interleaving-string",
        "dayNumber": 60,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 60."
      },
      {
        "id": "d60-a5",
        "problemId": "burst-balloons",
        "dayNumber": 60,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 60."
      },
      {
        "id": "d60-a6",
        "problemId": "climbing-stairs",
        "dayNumber": 60,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 60."
      },
      {
        "id": "d60-a7",
        "problemId": "min-cost-climbing-stairs",
        "dayNumber": 60,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d60-a8",
        "problemId": "house-robber",
        "dayNumber": 60,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d60-a9",
        "problemId": "house-robber-ii",
        "dayNumber": 60,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d60-a10",
        "problemId": "search-in-rotated-sorted-array",
        "dayNumber": 60,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d60-a11",
        "problemId": "combination-sum",
        "dayNumber": 60,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d60-a12",
        "problemId": "binary-tree-level-order-traversal",
        "dayNumber": 60,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 61,
    "phase": "Month 3: Advanced Problem Solving \u2014 Dynamic Programming 1D & 2D",
    "phaseNumber": 9,
    "title": "Day 61: Climbing Stairs & Dynamic Programming 1D Mastery",
    "primaryPattern": "dynamic-programming-1d",
    "relatedPatterns": [
      "recursion"
    ],
    "objectives": [
      "Master the dynamic programming 1d invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 61\nMaster the core invariants of **Dynamic Programming 1D** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d61-a1",
        "problemId": "climbing-stairs",
        "dayNumber": 61,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 61."
      },
      {
        "id": "d61-a2",
        "problemId": "min-cost-climbing-stairs",
        "dayNumber": 61,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 61."
      },
      {
        "id": "d61-a3",
        "problemId": "house-robber",
        "dayNumber": 61,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 61."
      },
      {
        "id": "d61-a4",
        "problemId": "house-robber-ii",
        "dayNumber": 61,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 61."
      },
      {
        "id": "d61-a5",
        "problemId": "longest-palindromic-substring",
        "dayNumber": 61,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 61."
      },
      {
        "id": "d61-a6",
        "problemId": "palindromic-substrings",
        "dayNumber": 61,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 61."
      },
      {
        "id": "d61-a7",
        "problemId": "decode-ways",
        "dayNumber": 61,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d61-a8",
        "problemId": "coin-change",
        "dayNumber": 61,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d61-a9",
        "problemId": "coin-change-ii",
        "dayNumber": 61,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d61-a10",
        "problemId": "split-array-largest-sum",
        "dayNumber": 61,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d61-a11",
        "problemId": "invert-binary-tree",
        "dayNumber": 61,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d61-a12",
        "problemId": "lowest-common-ancestor-of-a-binary-search-tree",
        "dayNumber": 61,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 62,
    "phase": "Month 3: Advanced Problem Solving \u2014 Dynamic Programming 1D & 2D",
    "phaseNumber": 9,
    "title": "Day 62: Palindromic Substrings & Two Pointers Mastery",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "dynamic-programming-1d"
    ],
    "objectives": [
      "Master the two pointers invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 62\nMaster the core invariants of **Two Pointers** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d62-a1",
        "problemId": "palindromic-substrings",
        "dayNumber": 62,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 62."
      },
      {
        "id": "d62-a2",
        "problemId": "decode-ways",
        "dayNumber": 62,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 62."
      },
      {
        "id": "d62-a3",
        "problemId": "coin-change",
        "dayNumber": 62,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 62."
      },
      {
        "id": "d62-a4",
        "problemId": "coin-change-ii",
        "dayNumber": 62,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 62."
      },
      {
        "id": "d62-a5",
        "problemId": "maximum-product-subarray",
        "dayNumber": 62,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 62."
      },
      {
        "id": "d62-a6",
        "problemId": "word-break",
        "dayNumber": 62,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 62."
      },
      {
        "id": "d62-a7",
        "problemId": "longest-increasing-subsequence",
        "dayNumber": 62,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d62-a8",
        "problemId": "partition-equal-subset-sum",
        "dayNumber": 62,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d62-a9",
        "problemId": "target-sum",
        "dayNumber": 62,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d62-a10",
        "problemId": "combination-sum-ii",
        "dayNumber": 62,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d62-a11",
        "problemId": "binary-tree-right-side-view",
        "dayNumber": 62,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d62-a12",
        "problemId": "binary-tree-inorder-traversal",
        "dayNumber": 62,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 63,
    "phase": "Month 3: Advanced Problem Solving \u2014 Dynamic Programming 1D & 2D",
    "phaseNumber": 9,
    "title": "Day 63: Word Break & Dynamic Programming 1D Mastery",
    "primaryPattern": "dynamic-programming-1d",
    "relatedPatterns": [
      "trie"
    ],
    "objectives": [
      "Master the dynamic programming 1d invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 63\nMaster the core invariants of **Dynamic Programming 1D** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d63-a1",
        "problemId": "word-break",
        "dayNumber": 63,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 63."
      },
      {
        "id": "d63-a2",
        "problemId": "longest-increasing-subsequence",
        "dayNumber": 63,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 63."
      },
      {
        "id": "d63-a3",
        "problemId": "partition-equal-subset-sum",
        "dayNumber": 63,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 63."
      },
      {
        "id": "d63-a4",
        "problemId": "target-sum",
        "dayNumber": 63,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 63."
      },
      {
        "id": "d63-a5",
        "problemId": "unique-paths",
        "dayNumber": 63,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 63."
      },
      {
        "id": "d63-a6",
        "problemId": "minimum-path-sum",
        "dayNumber": 63,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 63."
      },
      {
        "id": "d63-a7",
        "problemId": "longest-common-subsequence",
        "dayNumber": 63,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d63-a8",
        "problemId": "edit-distance",
        "dayNumber": 63,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d63-a9",
        "problemId": "interleaving-string",
        "dayNumber": 63,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d63-a10",
        "problemId": "diameter-of-binary-tree",
        "dayNumber": 63,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d63-a11",
        "problemId": "validate-binary-search-tree",
        "dayNumber": 63,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d63-a12",
        "problemId": "task-scheduler",
        "dayNumber": 63,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 64,
    "phase": "Month 3: Advanced Problem Solving \u2014 Bitmasking, Advanced Backtracking & Placement Readiness",
    "phaseNumber": 10,
    "title": "Day 64: Single Number & Bit Manipulation Mastery",
    "primaryPattern": "bit-manipulation",
    "relatedPatterns": [
      "arrays"
    ],
    "objectives": [
      "Master the bit manipulation invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 64\nMaster the core invariants of **Bit Manipulation** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d64-a1",
        "problemId": "single-number",
        "dayNumber": 64,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 64."
      },
      {
        "id": "d64-a2",
        "problemId": "single-number-ii",
        "dayNumber": 64,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 64."
      },
      {
        "id": "d64-a3",
        "problemId": "number-of-1-bits",
        "dayNumber": 64,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 64."
      },
      {
        "id": "d64-a4",
        "problemId": "counting-bits",
        "dayNumber": 64,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 64."
      },
      {
        "id": "d64-a5",
        "problemId": "reverse-bits",
        "dayNumber": 64,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 64."
      },
      {
        "id": "d64-a6",
        "problemId": "missing-number",
        "dayNumber": 64,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 64."
      },
      {
        "id": "d64-a7",
        "problemId": "sum-of-two-integers",
        "dayNumber": 64,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d64-a8",
        "problemId": "power-of-two",
        "dayNumber": 64,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d64-a9",
        "problemId": "implement-trie-prefix-tree",
        "dayNumber": 64,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d64-a10",
        "problemId": "valid-perfect-square",
        "dayNumber": 64,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d64-a11",
        "problemId": "same-tree",
        "dayNumber": 64,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d64-a12",
        "problemId": "construct-binary-tree-from-preorder-and-inorder-traversal",
        "dayNumber": 64,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 65,
    "phase": "Month 3: Advanced Problem Solving \u2014 Bitmasking, Advanced Backtracking & Placement Readiness",
    "phaseNumber": 10,
    "title": "Day 65: Missing Number & Bit Manipulation Mastery",
    "primaryPattern": "bit-manipulation",
    "relatedPatterns": [
      "math"
    ],
    "objectives": [
      "Master the bit manipulation invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 65\nMaster the core invariants of **Bit Manipulation** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d65-a1",
        "problemId": "missing-number",
        "dayNumber": 65,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 65."
      },
      {
        "id": "d65-a2",
        "problemId": "sum-of-two-integers",
        "dayNumber": 65,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 65."
      },
      {
        "id": "d65-a3",
        "problemId": "power-of-two",
        "dayNumber": 65,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 65."
      },
      {
        "id": "d65-a4",
        "problemId": "implement-trie-prefix-tree",
        "dayNumber": 65,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 65."
      },
      {
        "id": "d65-a5",
        "problemId": "design-add-and-search-words-data-structure",
        "dayNumber": 65,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 65."
      },
      {
        "id": "d65-a6",
        "problemId": "word-search-ii",
        "dayNumber": 65,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 65."
      },
      {
        "id": "d65-a7",
        "problemId": "n-queens",
        "dayNumber": 65,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d65-a8",
        "problemId": "trapping-rain-water",
        "dayNumber": 65,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d65-a9",
        "problemId": "largest-rectangle-in-histogram",
        "dayNumber": 65,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d65-a10",
        "problemId": "combination-sum",
        "dayNumber": 65,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d65-a11",
        "problemId": "binary-tree-level-order-traversal",
        "dayNumber": 65,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d65-a12",
        "problemId": "merge-two-binary-trees",
        "dayNumber": 65,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 66,
    "phase": "Month 3: Advanced Problem Solving \u2014 Bitmasking, Advanced Backtracking & Placement Readiness",
    "phaseNumber": 10,
    "title": "Day 66: Word Search II & Trie Mastery",
    "primaryPattern": "trie",
    "relatedPatterns": [
      "backtracking"
    ],
    "objectives": [
      "Master the trie invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 66\nMaster the core invariants of **Trie** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d66-a1",
        "problemId": "word-search-ii",
        "dayNumber": 66,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 66."
      },
      {
        "id": "d66-a2",
        "problemId": "n-queens",
        "dayNumber": 66,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 66."
      },
      {
        "id": "d66-a3",
        "problemId": "trapping-rain-water",
        "dayNumber": 66,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 66."
      },
      {
        "id": "d66-a4",
        "problemId": "largest-rectangle-in-histogram",
        "dayNumber": 66,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 66."
      },
      {
        "id": "d66-a5",
        "problemId": "sliding-window-maximum",
        "dayNumber": 66,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 66."
      },
      {
        "id": "d66-a6",
        "problemId": "find-median-from-data-stream",
        "dayNumber": 66,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 66."
      },
      {
        "id": "d66-a7",
        "problemId": "merge-k-sorted-lists",
        "dayNumber": 66,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d66-a8",
        "problemId": "binary-tree-maximum-path-sum",
        "dayNumber": 66,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d66-a9",
        "problemId": "alien-dictionary",
        "dayNumber": 66,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d66-a10",
        "problemId": "invert-binary-tree",
        "dayNumber": 66,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d66-a11",
        "problemId": "lowest-common-ancestor-of-a-binary-search-tree",
        "dayNumber": 66,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d66-a12",
        "problemId": "last-stone-weight",
        "dayNumber": 66,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 67,
    "phase": "Month 3: Advanced Problem Solving \u2014 Bitmasking, Advanced Backtracking & Placement Readiness",
    "phaseNumber": 10,
    "title": "Day 67: Find Median from Data Stream & Top K Elements Heap Mastery",
    "primaryPattern": "top-k-elements-heap",
    "relatedPatterns": [
      "design"
    ],
    "objectives": [
      "Master the top k elements heap invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 67\nMaster the core invariants of **Top K Elements Heap** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d67-a1",
        "problemId": "find-median-from-data-stream",
        "dayNumber": 67,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 67."
      },
      {
        "id": "d67-a2",
        "problemId": "merge-k-sorted-lists",
        "dayNumber": 67,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 67."
      },
      {
        "id": "d67-a3",
        "problemId": "binary-tree-maximum-path-sum",
        "dayNumber": 67,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 67."
      },
      {
        "id": "d67-a4",
        "problemId": "alien-dictionary",
        "dayNumber": 67,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 67."
      },
      {
        "id": "d67-a5",
        "problemId": "longest-valid-parentheses",
        "dayNumber": 67,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 67."
      },
      {
        "id": "d67-a6",
        "problemId": "sliding-puzzle",
        "dayNumber": 67,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 67."
      },
      {
        "id": "d67-a7",
        "problemId": "serialize-and-deserialize-binary-tree",
        "dayNumber": 67,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d67-a8",
        "problemId": "single-number",
        "dayNumber": 67,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d67-a9",
        "problemId": "single-number-ii",
        "dayNumber": 67,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d67-a10",
        "problemId": "invert-binary-tree",
        "dayNumber": 67,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d67-a11",
        "problemId": "lowest-common-ancestor-of-a-binary-search-tree",
        "dayNumber": 67,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d67-a12",
        "problemId": "kth-largest-element-in-a-stream",
        "dayNumber": 67,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 68,
    "phase": "Month 3: Advanced Problem Solving \u2014 Bitmasking, Advanced Backtracking & Placement Readiness",
    "phaseNumber": 10,
    "title": "Day 68: Sliding Puzzle & Graph Bfs Dfs Mastery",
    "primaryPattern": "graph-bfs-dfs",
    "relatedPatterns": [
      "matrix"
    ],
    "objectives": [
      "Master the graph bfs dfs invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 68\nMaster the core invariants of **Graph Bfs Dfs** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d68-a1",
        "problemId": "sliding-puzzle",
        "dayNumber": 68,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 68."
      },
      {
        "id": "d68-a2",
        "problemId": "serialize-and-deserialize-binary-tree",
        "dayNumber": 68,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 68."
      },
      {
        "id": "d68-a3",
        "problemId": "single-number",
        "dayNumber": 68,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 68."
      },
      {
        "id": "d68-a4",
        "problemId": "single-number-ii",
        "dayNumber": 68,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 68."
      },
      {
        "id": "d68-a5",
        "problemId": "number-of-1-bits",
        "dayNumber": 68,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 68."
      },
      {
        "id": "d68-a6",
        "problemId": "counting-bits",
        "dayNumber": 68,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 68."
      },
      {
        "id": "d68-a7",
        "problemId": "reverse-bits",
        "dayNumber": 68,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d68-a8",
        "problemId": "missing-number",
        "dayNumber": 68,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d68-a9",
        "problemId": "sum-of-two-integers",
        "dayNumber": 68,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d68-a10",
        "problemId": "binary-tree-level-order-traversal",
        "dayNumber": 68,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d68-a11",
        "problemId": "binary-tree-inorder-traversal",
        "dayNumber": 68,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d68-a12",
        "problemId": "convert-sorted-array-to-binary-search-tree",
        "dayNumber": 68,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 69,
    "phase": "Month 3: Advanced Problem Solving \u2014 Bitmasking, Advanced Backtracking & Placement Readiness",
    "phaseNumber": 10,
    "title": "Day 69: Counting Bits & Bit Manipulation Mastery",
    "primaryPattern": "bit-manipulation",
    "relatedPatterns": [
      "dynamic-programming-1d"
    ],
    "objectives": [
      "Master the bit manipulation invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 69\nMaster the core invariants of **Bit Manipulation** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d69-a1",
        "problemId": "counting-bits",
        "dayNumber": 69,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 69."
      },
      {
        "id": "d69-a2",
        "problemId": "reverse-bits",
        "dayNumber": 69,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 69."
      },
      {
        "id": "d69-a3",
        "problemId": "missing-number",
        "dayNumber": 69,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 69."
      },
      {
        "id": "d69-a4",
        "problemId": "sum-of-two-integers",
        "dayNumber": 69,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 69."
      },
      {
        "id": "d69-a5",
        "problemId": "power-of-two",
        "dayNumber": 69,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 69."
      },
      {
        "id": "d69-a6",
        "problemId": "implement-trie-prefix-tree",
        "dayNumber": 69,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 69."
      },
      {
        "id": "d69-a7",
        "problemId": "design-add-and-search-words-data-structure",
        "dayNumber": 69,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d69-a8",
        "problemId": "word-search-ii",
        "dayNumber": 69,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d69-a9",
        "problemId": "n-queens",
        "dayNumber": 69,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d69-a10",
        "problemId": "lowest-common-ancestor-of-a-binary-search-tree",
        "dayNumber": 69,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d69-a11",
        "problemId": "k-closest-points-to-origin",
        "dayNumber": 69,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d69-a12",
        "problemId": "pacific-atlantic-water-flow",
        "dayNumber": 69,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  },
  {
    "dayNumber": 70,
    "phase": "Month 3: Advanced Problem Solving \u2014 Bitmasking, Advanced Backtracking & Placement Readiness",
    "phaseNumber": 10,
    "title": "Day 70: Implement Trie (Prefix Tree) & Trie Mastery",
    "primaryPattern": "trie",
    "relatedPatterns": [
      "design"
    ],
    "objectives": [
      "Master the trie invariant and recognize its interview signals.",
      "Solve at least 4 problems completely independently without looking at hints.",
      "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
      "Cross-reference key takeaways into your physical handwritten revision register."
    ],
    "conceptSummary": "### Pedagogical Objectives for Day 70\nMaster the core invariants of **Trie** and related techniques.\n\n#### When to Apply\n- When the problem asks for optimal subarray, substring, or sequence boundaries.\n- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.\n- When state transitions can be cleanly decoupled into independent sub-problems.\n\n#### Common Failure Modes & C++ / Python Traps\n1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.\n2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.\n3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.\n",
    "estimatedMinutes": 150,
    "assignments": [
      {
        "id": "d70-a1",
        "problemId": "implement-trie-prefix-tree",
        "dayNumber": 70,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 70."
      },
      {
        "id": "d70-a2",
        "problemId": "design-add-and-search-words-data-structure",
        "dayNumber": 70,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 70."
      },
      {
        "id": "d70-a3",
        "problemId": "word-search-ii",
        "dayNumber": 70,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 70."
      },
      {
        "id": "d70-a4",
        "problemId": "n-queens",
        "dayNumber": 70,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 70."
      },
      {
        "id": "d70-a5",
        "problemId": "trapping-rain-water",
        "dayNumber": 70,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 70."
      },
      {
        "id": "d70-a6",
        "problemId": "largest-rectangle-in-histogram",
        "dayNumber": 70,
        "type": "new",
        "rationale": "Core concept problem demonstrating key pattern mechanics for Day 70."
      },
      {
        "id": "d70-a7",
        "problemId": "sliding-window-maximum",
        "dayNumber": 70,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d70-a8",
        "problemId": "find-median-from-data-stream",
        "dayNumber": 70,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d70-a9",
        "problemId": "merge-k-sorted-lists",
        "dayNumber": 70,
        "type": "reinforcement",
        "rationale": "Reinforces variation and edge-case handling without guidance."
      },
      {
        "id": "d70-a10",
        "problemId": "top-k-frequent-elements",
        "dayNumber": 70,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d70-a11",
        "problemId": "max-area-of-island",
        "dayNumber": 70,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      },
      {
        "id": "d70-a12",
        "problemId": "island-perimeter",
        "dayNumber": 70,
        "type": "revision",
        "rationale": "Spaced revision check to verify pattern retention and handwritten register rules."
      }
    ],
    "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
  }
];

export const DAYS_BY_NUMBER: Record<number, RoadmapDay> = ROADMAP_DAYS.reduce((acc, d) => {
  acc[d.dayNumber] = d;
  return acc;
}, {} as Record<number, RoadmapDay>);
