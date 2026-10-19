#!/usr/bin/env python3
import json
import os
import re

# Import the catalog entries
from test_catalog import PROBLEMS_DATA
from curate_catalog import PROBLEMS_CATALOG

# Merge catalogs deduplicating by slug
unique_problems = {}

# Process PROBLEMS_DATA (num, title, slug, diff, pattern, related, note, cpp, py)
for item in PROBLEMS_DATA:
    num, title, slug, diff, pattern, related, note, cpp, py = item
    unique_problems[slug] = {
        "id": slug,
        "title": title,
        "slug": slug,
        "leetcodeNumber": num,
        "difficulty": diff,
        "primaryPattern": pattern,
        "relatedPatterns": related,
        "url": f"https://leetcode.com/problems/{slug}/",
        "verified": True,
        "notesSnippet": note,
        "cppHint": cpp,
        "pythonHint": py
    }

# Process PROBLEMS_CATALOG (slug_id, title, slug, num, diff, pattern, related, note, cpp, py)
for item in PROBLEMS_CATALOG:
    slug_id, title, slug, num, diff, pattern, related, note, cpp, py = item
    if slug not in unique_problems:
        unique_problems[slug] = {
            "id": slug,
            "title": title,
            "slug": slug,
            "leetcodeNumber": num,
            "difficulty": diff,
            "primaryPattern": pattern,
            "relatedPatterns": related,
            "url": f"https://leetcode.com/problems/{slug}/",
            "verified": True,
            "notesSnippet": note,
            "cppHint": cpp,
            "pythonHint": py
        }

print(f"Total unique canonical problems in database: {len(unique_problems)}")

# 10 Phases directly mapping the 70 Days DSA Roadmap from Whimsical Mind Map
PHASES_INFO = [
    {
        "phaseNumber": 1,
        "phase": "Month 1: Pure Foundation Phase — Arrays & Two-Pointers",
        "days": list(range(1, 8)),
        "focus": "Time & space complexity, array traversal, prefix sum, Kadane's algorithm, two pointers, sliding window fundamentals",
        "pool": [
            "two-sum", "remove-duplicates-from-sorted-array", "remove-element", "move-zeroes",
            "squares-of-a-sorted-array", "sort-array-by-parity", "running-sum-of-1d-array",
            "find-pivot-index", "range-sum-query-immutable", "maximum-subarray",
            "best-time-to-buy-and-sell-stock", "product-of-array-except-self", "subarray-sum-equals-k",
            "continuous-subarray-sum", "subarray-sums-divisible-by-k", "container-with-most-water",
            "3sum", "3sum-closest", "4sum", "trapping-rain-water", "rotate-image", "spiral-matrix",
            "set-matrix-zeroes", "find-the-duplicate-number", "sort-colors", "next-permutation",
            "pascals-triangle", "pascals-triangle-ii", "majority-element"
        ]
    },
    {
        "phaseNumber": 2,
        "phase": "Month 1: Pure Foundation Phase — Strings & Hashing",
        "days": list(range(8, 15)),
        "focus": "HashMap, HashSet, frequency counting, anagram patterns, sliding window on strings, substring search",
        "pool": [
            "valid-anagram", "group-anagrams", "longest-substring-without-repeating-characters",
            "minimum-window-substring", "longest-repeating-character-replacement", "permutation-in-string",
            "find-all-anagrams-in-a-string", "valid-palindrome", "longest-consecutive-sequence",
            "minimum-size-subarray-sum", "isomorphic-strings", "word-pattern", "ransom-note",
            "first-unique-character-in-a-string", "find-the-difference", "jewels-and-stones",
            "unique-number-of-occurrences", "sum-of-unique-elements", "longest-palindrome",
            "reverse-string", "reverse-words-in-a-string", "reverse-words-in-a-string-iii"
        ]
    },
    {
        "phaseNumber": 3,
        "phase": "Month 1: Pure Foundation Phase — Linked Lists, Stacks & Queues",
        "days": list(range(15, 22)),
        "focus": "Fast & slow pointers, reverse linked list, cycle detection, monotonic stack, stack/queue design, sliding window maximum",
        "pool": [
            "reverse-linked-list", "merge-two-sorted-lists", "linked-list-cycle", "linked-list-cycle-ii",
            "middle-of-the-linked-list", "remove-nth-node-from-end-of-list", "reorder-list",
            "palindrome-linked-list", "copy-list-with-random-pointer", "lru-cache", "merge-k-sorted-lists",
            "valid-parentheses", "min-stack", "evaluate-reverse-polish-notation", "daily-temperatures",
            "online-stock-span", "next-greater-element-i", "largest-rectangle-in-histogram",
            "sliding-window-maximum", "implement-queue-using-stacks", "implement-stack-using-queues",
            "remove-linked-list-elements", "remove-duplicates-from-sorted-list"
        ]
    },
    {
        "phaseNumber": 4,
        "phase": "Month 1: Pure Foundation Phase — Binary Search & Basic Recursion",
        "days": list(range(22, 29)),
        "focus": "Classic binary search, first/last occurrence, search in rotated sorted array, backtracking, divide and conquer",
        "pool": [
            "binary-search", "search-insert-position", "search-in-rotated-sorted-array",
            "find-first-and-last-position-of-element-in-sorted-array", "find-minimum-in-rotated-sorted-array",
            "find-peak-element", "search-a-2d-matrix", "koko-eating-bananas", "capacity-to-ship-packages-within-d-days",
            "split-array-largest-sum", "sqrtx", "first-bad-version", "valid-perfect-square",
            "subsets", "subsets-ii", "combination-sum", "combination-sum-ii", "permutations",
            "word-search", "letter-combinations-of-a-phone-number", "palindrome-partitioning"
        ]
    },
    {
        "phaseNumber": 5,
        "phase": "Month 2: Core DSA Phase — Trees & Hierarchical Traversal",
        "days": list(range(29, 36)),
        "focus": "In-order, pre-order, post-order, level-order, height & diameter, lowest common ancestor, path sum",
        "pool": [
            "maximum-depth-of-binary-tree", "invert-binary-tree", "diameter-of-binary-tree",
            "balanced-binary-tree", "same-tree", "symmetric-tree", "subtree-of-another-tree",
            "binary-tree-level-order-traversal", "binary-tree-right-side-view", "binary-tree-zigzag-level-order-traversal",
            "count-good-nodes-in-binary-tree", "path-sum", "path-sum-ii", "lowest-common-ancestor-of-a-binary-tree",
            "lowest-common-ancestor-of-a-binary-search-tree", "validate-binary-search-tree",
            "kth-smallest-element-in-a-bst", "construct-binary-tree-from-preorder-and-inorder-traversal",
            "binary-tree-maximum-path-sum", "serialize-and-deserialize-binary-tree", "merge-two-binary-trees",
            "binary-tree-inorder-traversal", "binary-tree-preorder-traversal", "binary-tree-postorder-traversal"
        ]
    },
    {
        "phaseNumber": 6,
        "phase": "Month 2: Core DSA Phase — Ordered Structures & Priority Processing",
        "days": list(range(36, 43)),
        "focus": "Binary search tree operations, kth smallest/largest, priority queue fundamentals, top K frequent, median stream",
        "pool": [
            "kth-largest-element-in-an-array", "top-k-frequent-elements", "find-median-from-data-stream",
            "k-closest-points-to-origin", "task-scheduler", "last-stone-weight", "kth-largest-element-in-a-stream",
            "search-in-a-binary-search-tree", "insert-into-a-binary-search-tree", "range-sum-of-bst",
            "convert-sorted-array-to-binary-search-tree", "merge-k-sorted-lists", "online-stock-span",
            "sort-colors", "relative-sort-array", "height-checker"
        ]
    },
    {
        "phaseNumber": 7,
        "phase": "Month 2: Core DSA Phase — Graph Traversal & Connectivity",
        "days": list(range(43, 50)),
        "focus": "Breadth-first search, depth-first search, cycle detection, topological ordering, disjoint set (Union-Find), shortest path",
        "pool": [
            "number-of-islands", "clone-graph", "max-area-of-island", "pacific-atlantic-water-flow",
            "surrounded-regions", "rotting-oranges", "course-schedule", "course-schedule-ii",
            "redundant-connection", "number-of-provinces", "graph-valid-tree", "word-ladder",
            "network-delay-time", "cheapest-flights-within-k-stops", "flood-fill", "island-perimeter",
            "find-if-path-exists-in-graph"
        ]
    },
    {
        "phaseNumber": 8,
        "phase": "Month 2: Core DSA Phase — Greedy & Interval Problems",
        "days": list(range(50, 57)),
        "focus": "First/last occurrence, interval merging, meeting rooms, jump game, greedy choices, scheduling",
        "pool": [
            "merge-intervals", "insert-interval", "non-overlapping-intervals", "meeting-rooms",
            "meeting-rooms-ii", "jump-game", "jump-game-ii", "gas-station", "partition-labels",
            "assign-cookies", "can-place-flowers", "best-time-to-buy-and-sell-stock-ii"
        ]
    },
    {
        "phaseNumber": 9,
        "phase": "Month 3: Advanced Problem Solving — Dynamic Programming 1D & 2D",
        "days": list(range(57, 64)),
        "focus": "Maximum subarray sum, longest increasing subsequence, coin change, knapsack, DP on strings/grids, edit distance",
        "pool": [
            "climbing-stairs", "min-cost-climbing-stairs", "house-robber", "house-robber-ii",
            "longest-palindromic-substring", "palindromic-substrings", "decode-ways", "coin-change",
            "coin-change-ii", "maximum-product-subarray", "word-break", "longest-increasing-subsequence",
            "partition-equal-subset-sum", "target-sum", "unique-paths", "minimum-path-sum",
            "longest-common-subsequence", "edit-distance", "interleaving-string", "burst-balloons"
        ]
    },
    {
        "phaseNumber": 10,
        "phase": "Month 3: Advanced Problem Solving — Bitmasking, Advanced Backtracking & Placement Readiness",
        "days": list(range(64, 71)),
        "focus": "Bitwise operations, Trie, N-Queens, hard interview problems, timed practice, mock placements, final pattern consolidation",
        "pool": [
            "single-number", "single-number-ii", "number-of-1-bits", "counting-bits", "reverse-bits",
            "missing-number", "sum-of-two-integers", "power-of-two", "implement-trie-prefix-tree",
            "design-add-and-search-words-data-structure", "word-search-ii", "n-queens",
            "trapping-rain-water", "largest-rectangle-in-histogram", "sliding-window-maximum",
            "find-median-from-data-stream", "merge-k-sorted-lists", "binary-tree-maximum-path-sum",
            "alien-dictionary", "longest-valid-parentheses", "sliding-puzzle", "serialize-and-deserialize-binary-tree"
        ]
    }
]

# Generate exactly 70 days
# Rule: Every day has 10 to 15 problem assignments!
# Mix: 6-8 core/new, 2-3 reinforcement, 2-4 revision
days_output = []

# Cumulative pool of introduced problems to draw revision items from
introduced_problem_ids = []

for phase_info in PHASES_INFO:
    phase_num = phase_info["phaseNumber"]
    phase_title = phase_info["phase"]
    phase_days = phase_info["days"]
    phase_pool = phase_info["pool"]

    # Filter pool to valid problems
    valid_phase_pool = [pid for pid in phase_pool if pid in unique_problems]

    for d_idx, day_num in enumerate(phase_days):
        # Determine day specific focus & pattern
        # Select 6-8 core/new problems from valid_phase_pool
        # Rotating slice of phase pool
        pool_len = len(valid_phase_pool)
        start_idx = (d_idx * 5) % pool_len
        
        # Pick 6 new/core problems
        core_ids = []
        for i in range(6):
            pid = valid_phase_pool[(start_idx + i) % pool_len]
            if pid not in core_ids:
                core_ids.append(pid)

        # Pick 3 reinforcement problems from remainder of phase pool
        reinf_ids = []
        for i in range(6, 12):
            pid = valid_phase_pool[(start_idx + i) % pool_len]
            if pid not in core_ids and pid not in reinf_ids:
                reinf_ids.append(pid)
            if len(reinf_ids) >= 3:
                break

        # Pick 2-3 revision problems from previously introduced problems
        rev_ids = []
        if len(introduced_problem_ids) >= 3:
            # Pick from earliest introduced that aren't in core/reinf
            rev_candidates = [p for p in introduced_problem_ids if p not in core_ids and p not in reinf_ids]
            # Use deterministic rotation based on day_num
            for k in range(3):
                if rev_candidates:
                    idx = (day_num * 7 + k * 13) % len(rev_candidates)
                    chosen = rev_candidates[idx]
                    if chosen not in rev_ids:
                        rev_ids.append(chosen)

        # Fallback if revision pool is small (early days): pick extra reinforcement
        while len(core_ids) + len(reinf_ids) + len(rev_ids) < 11:
            for pid in valid_phase_pool:
                if pid not in core_ids and pid not in reinf_ids and pid not in rev_ids:
                    reinf_ids.append(pid)
                    break
            else:
                break

        # Add all new problems to introduced_problem_ids
        for pid in core_ids + reinf_ids:
            if pid not in introduced_problem_ids:
                introduced_problem_ids.append(pid)

        # Build assignment list
        assignments = []
        assign_idx = 1

        for pid in core_ids:
            assignments.append({
                "id": f"d{day_num}-a{assign_idx}",
                "problemId": pid,
                "dayNumber": day_num,
                "type": "new",
                "rationale": f"Core concept problem demonstrating key pattern mechanics for Day {day_num}."
            })
            assign_idx += 1

        for pid in reinf_ids:
            assignments.append({
                "id": f"d{day_num}-a{assign_idx}",
                "problemId": pid,
                "dayNumber": day_num,
                "type": "reinforcement",
                "rationale": f"Reinforces variation and edge-case handling without guidance."
            })
            assign_idx += 1

        for pid in rev_ids:
            assignments.append({
                "id": f"d{day_num}-a{assign_idx}",
                "problemId": pid,
                "dayNumber": day_num,
                "type": "revision",
                "rationale": f"Spaced revision check to verify pattern retention and handwritten register rules."
            })
            assign_idx += 1

        # Double check assignment count is 10-15
        assert 10 <= len(assignments) <= 15, f"Day {day_num} has {len(assignments)} assignments (must be 10-15)"

        # Infer primary pattern from core problem
        primary_pat = unique_problems[core_ids[0]]["primaryPattern"]

        # Topic title tailored for day
        day_topic = f"Day {day_num}: {unique_problems[core_ids[0]]['title']} & {primary_pat.replace('-', ' ').title()} Mastery"

        # Concept summary
        concept_summary = f"""### Pedagogical Objectives for Day {day_num}
Master the core invariants of **{primary_pat.replace('-', ' ').title()}** and related techniques.

#### When to Apply
- When the problem asks for optimal subarray, substring, or sequence boundaries.
- When monotonicity allows eliminating branch exploration in $O(N)$ or $O(\\log N)$.
- When state transitions can be cleanly decoupled into independent sub-problems.

#### Common Failure Modes & C++ / Python Traps
1. **Integer Overflow**: When accumulating sums, `int` in C++ overflows at $2 \\times 10^9$. Always promote prefix sums to `long long`.
2. **Boundary Checks**: Check bounds *before* dereferencing array indices or linked list next pointers.
3. **Register Notes**: Write down the invariant equation in your rough notebook before writing code.
"""

        days_output.append({
            "dayNumber": day_num,
            "phase": phase_title,
            "phaseNumber": phase_num,
            "title": day_topic,
            "primaryPattern": primary_pat,
            "relatedPatterns": unique_problems[core_ids[0]]["relatedPatterns"],
            "objectives": [
                f"Master the {primary_pat.replace('-', ' ')} invariant and recognize its interview signals.",
                "Solve at least 4 problems completely independently without looking at hints.",
                "Log all syntax bugs, edge case mistakes, or off-by-one errors into the Mistake Journal.",
                "Cross-reference key takeaways into your physical handwritten revision register."
            ],
            "conceptSummary": concept_summary,
            "estimatedMinutes": 150,
            "assignments": assignments,
            "completionCriteria": "Complete all core assignments, review revision questions, and record reflection with confidence rating."
        })

print(f"Generated {len(days_output)} roadmap days.")
for d in days_output:
    count = len(d["assignments"])
    if count < 10 or count > 15:
        print(f"ERROR: Day {d['dayNumber']} has {count} assignments!")

# Export to TypeScript files
# 1. src/data/problems.ts
problems_list = list(unique_problems.values())

with open("src/data/problems.ts", "w") as f:
    f.write('import { Problem } from "../types/curriculum";\n\n')
    f.write('export const PROBLEMS: Problem[] = ')
    f.write(json.dumps(problems_list, indent=2))
    f.write(';\n\n')
    f.write('export const PROBLEMS_BY_ID: Record<string, Problem> = PROBLEMS.reduce((acc, p) => {\n')
    f.write('  acc[p.id] = p;\n')
    f.write('  return acc;\n')
    f.write('}, {} as Record<string, Problem>);\n')

# 2. src/data/curriculum.ts
with open("src/data/curriculum.ts", "w") as f:
    f.write('import { RoadmapDay } from "../types/curriculum";\n\n')
    f.write('export const ROADMAP_DAYS: RoadmapDay[] = ')
    f.write(json.dumps(days_output, indent=2))
    f.write(';\n\n')
    f.write('export const DAYS_BY_NUMBER: Record<number, RoadmapDay> = ROADMAP_DAYS.reduce((acc, d) => {\n')
    f.write('  acc[d.dayNumber] = d;\n')
    f.write('  return acc;\n')
    f.write('}, {} as Record<number, RoadmapDay>);\n')

print("Successfully written src/data/problems.ts and src/data/curriculum.ts!")
