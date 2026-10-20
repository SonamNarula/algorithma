<div align="center">

# ALGORITHMA

### The 70-Day DSA Flagship Roadmap

**Pattern-first · Interview-oriented · C++ · LeetCode**

`Oct 20, 2026` → `Dec 28, 2026` · plus an optional 7-day mock extension (`Dec 29, 2026` → `Jan 4, 2027`)

</div>

---

> [!IMPORTANT]
> **Link and difficulty verification status:** every problem title links to `https://leetcode.com/problems/<slug>/`. The slugs and difficulty labels were written from knowledge and **have not been checked against the live LeetCode site** in the environment that generated this file (no network access to LeetCode). If a link 404s or a difficulty differs, trust LeetCode and fix the row. Problems marked 🔒 require LeetCode Premium.

## Contents

- [1. How to use this roadmap](#how-to-use)
- [2. Daily workflow](#daily-workflow)
- [3. Legend: tiers, status and difficulty](#legend)
- [4. Roadmap overview](#overview)
- [5. Weeks and daily plans](#weeks): [W1](#week-1) · [W2](#week-2) · [W3](#week-3) · [W4](#week-4) · [W5](#week-5) · [W6](#week-6) · [W7](#week-7) · [W8](#week-8) · [W9](#week-9) · [W10](#week-10)
- [6. Revision and reattempt system](#revision-system)
- [7. C++ reference and templates](#cpp-reference)
- [8. Pattern recognition reference](#patterns)
- [9. Optional 7-day mock interview extension](#extension)
- [10. Master revision checklist](#master-checklist)
- [11. Final completion tracker](#tracker)

---

<a id="how-to-use"></a>
## 1. How to use this roadmap

ALGORITHMA is a 10-week curriculum (70 days, 7 days per week). Days 1–6 of each week teach a pattern; **Day 7 of every week is a timed test plus review**. Days 68–70 are mixed pattern-identification sets and a final assessment.

- **Follow the order.** Later weeks assume earlier ones (e.g. Word Search II needs the Trie from Day 40 and Word Search from Day 27).
- **Tier A is your contract.** Only ⭐ Tier A problems decide whether a day is complete. 📘 Tier B is recommended reinforcement; 🚀 Tier C is stretch. Nothing in B or C ever becomes silent backlog.
- **New vs revision.** Each day's *planned items* = 🆕 new problems + 🔁 revision tasks. Optional (➕) items are extra and never counted.
- **Honest logging.** A problem solved after reading the solution is *not* mastered; log it and reattempt it (see [Revision system](#revision-system)).
- **Language.** Examples and templates use C++17. Any language works; the patterns are identical.

**Workload honesty.** The brief asks for 10–15 practice items per day. The plan averages **10.2 planned items/day over all 70 days** (**10.7** on the 58 teaching days), counting new + revision items. Days with fewer than 10 items are test/mixed/final days or dense concept days and are flagged with a note. Planned new problems per day are lower than the total because spaced revision fills the rest; revision is selective, not a replay of everything.

<a id="daily-workflow"></a>
## 2. Daily workflow

| Block | Time | What to do |
|---|---|---|
| 1. Warm-up recall | 10–15 min | Do the 🔁 revision tasks first (explain aloud / re-solve) |
| 2. Learn | 20–30 min | Read the *Learn and implement* note; do the dry-run exercise on paper |
| 3. Core | 60–150 min | Solve ⭐ Tier A problems: 20–30 min of honest effort, then a hint, then the solution |
| 4. Reinforce | as time allows | 📘 Tier B problems; ➕ optional items only if energy remains |
| 5. Close | 10 min | Update the mistake log, tick the day tracker, note what to revisit at D+1 / D+3 / D+7 |

**Struggle rule:** 20–30 minutes of real effort → read a hint → 15 more minutes → study the solution, close it, and re-implement from memory. Log it as 💡 or 👀.

<a id="legend"></a>
## 3. Legend: tiers, status and difficulty

| Tag | Meaning |
|---|---|
| ⭐ **TIER A** | **Must solve.** Establishes the day's pattern. The only tier that gates completion. |
| 📘 **TIER B** | Reinforcement: same pattern, different context. Recommended after Tier A. |
| 🚀 **TIER C** | Stretch: advanced or time-intensive. Never required. |
| 🆕 **NEW** | First attempt of this problem. Counted in planned workload. |
| 🔁 **REVISION** | Re-attempt or review of an earlier problem (always ⭐ A material). Counted in planned workload. |
| ➕ **OPTIONAL** | Extra practice. Not counted, never blocks progress. |
| 🟢 EASY / 🟡 MEDIUM / 🔴 HARD | LeetCode difficulty (from memory, unverified). |
| 🔒 | LeetCode Premium problem. |
| ✅ / 💡 / 👀 | Solved independently / with a hint / after seeing the solution. |

Status and tier are independent: a 📘 Tier B problem can be 🆕 NEW or ➕ OPTIONAL; revision items inherit ⭐ A because only Tier A problems are scheduled for revision.

<a id="overview"></a>
## 4. Roadmap overview

| Week | Days | Dates | Theme | ⭐ A | 📘 B | 🚀 C | Planned items |
|---|---|---|---|---:|---:|---:|---:|
| [Week 1](#week-1) | 1–7 | Oct 20 – Oct 26 | Arrays, Hashing and Fundamental Patterns | 28 | 31 | 1 | 63 |
| [Week 2](#week-2) | 8–14 | Oct 27 – Nov 2 | Two Pointers and Sliding Window | 24 | 28 | 4 | 69 |
| [Week 3](#week-3) | 15–21 | Nov 3 – Nov 9 | Linked Lists, Stacks and Queues | 26 | 28 | 2 | 76 |
| [Week 4](#week-4) | 22–28 | Nov 10 – Nov 16 | Binary Search, Recursion and Backtracking | 26 | 29 | 5 | 76 |
| [Week 5](#week-5) | 29–35 | Nov 17 – Nov 23 | Trees and Binary Search Trees | 28 | 33 | 2 | 80 |
| [Week 6](#week-6) | 36–42 | Nov 24 – Nov 30 | Heaps, Tries and Data-Structure Design | 24 | 23 | 6 | 69 |
| [Week 7](#week-7) | 43–49 | Dec 1 – Dec 7 | Graphs | 26 | 28 | 7 | 76 |
| [Week 8](#week-8) | 50–56 | Dec 8 – Dec 14 | Greedy Algorithms, Intervals and Advanced Binary Search | 27 | 28 | 8 | 75 |
| [Week 9](#week-9) | 57–63 | Dec 15 – Dec 21 | Dynamic Programming Fundamentals | 24 | 21 | 7 | 70 |
| [Week 10](#week-10) | 64–70 | Dec 22 – Dec 28 | Advanced DP, Tries and Mixed Interview Practice | 25 | 17 | 12 | 60 |
| **Total** | **70** | Oct 20 – Dec 28 | | **258** | **266** | **54** | **714** |

**How the numbers are computed (from the tables in this file, not estimated):** the ⭐/📘/🚀 columns count *distinct problems* authored in that week. There are **578 distinct problems** in the 70-day core (258 Tier A, 266 Tier B, 54 Tier C). *Planned items* = new problems (490) + scheduled revision tasks (224) = **714**, which excludes **88** ➕ optional problems.

Note: Tier B problems marked ➕ optional are counted in the 📘 column but not in planned items, and Tier C problems are always optional.

**Realistic expectation.** A comfortable pace is Tier A first (about 4.3 per teaching day on average), then Tier B as time permits. Tier A alone over the 60 teaching days is ~258 problems; the weekly Tier A counts in the table are the real core targets.

```text
Week  1  Tier A 28  ████████████████████████████░░░░░░░░░░░░
Week  2  Tier A 24  ████████████████████████░░░░░░░░░░░░░░░░
Week  3  Tier A 26  ██████████████████████████░░░░░░░░░░░░░░
Week  4  Tier A 26  ██████████████████████████░░░░░░░░░░░░░░
Week  5  Tier A 28  ████████████████████████████░░░░░░░░░░░░
Week  6  Tier A 24  ████████████████████████░░░░░░░░░░░░░░░░
Week  7  Tier A 26  ██████████████████████████░░░░░░░░░░░░░░
Week  8  Tier A 27  ███████████████████████████░░░░░░░░░░░░░
Week  9  Tier A 24  ████████████████████████░░░░░░░░░░░░░░░░
Week 10  Tier A 25  █████████████████████████░░░░░░░░░░░░░░░
```

<a id="weeks"></a>
## 5. Weeks and daily plans

<a id="week-1"></a>
## Week 1 — Arrays, Hashing and Fundamental Patterns

📅 Tue, Oct 20 → Mon, Oct 26 · ➡️ [Week 2](#week-2)

**Weekly objective:** Build the core toolkit: hash maps, prefix sums, Kadane and in-place array manipulation.  
**Prerequisite knowledge:** Basic C++ (vectors, loops, functions) and Big-O notation.  
**Pattern coverage:** Hash maps and sets · Prefix sums · Kadane / running best · In-place pointer writes · Matrix indexing

| Day | Date | Topic | ⭐ A | Planned items | Time |
|---|---|---|---:|---:|---|
| [01](#day-01) | Tue, Oct 20 | Hash Map Fundamentals | 4 | 8 | ≈ 2 h 16 min |
| [02](#day-02) | Wed, Oct 21 | Hashing Patterns: Grouping and Sets | 4 | 9 | ≈ 3 h 44 min |
| [03](#day-03) | Thu, Oct 22 | Prefix Sums | 5 | 9 | ≈ 3 h 44 min |
| [04](#day-04) | Fri, Oct 23 | Kadane's Algorithm and Array Optimisation | 4 | 10 | ≈ 4 h 15 min |
| [05](#day-05) | Sat, Oct 24 | In-Place Array Manipulation and Sorting Basics | 5 | 10 | ≈ 3 h 43 min |
| [06](#day-06) | Sun, Oct 25 | Matrix Traversal and Week-1 Consolidation | 3 | 10 | ≈ 3 h 59 min |
| [07](#day-07) | Mon, Oct 26 | Week 1 Test — Arrays and Hashing | 3 | 7 | ≈ 3 h 30 min |

**Weekly targets:** ⭐ Tier A **28** problems · 📘 Tier B **31** · 🚀 Tier C **1** (all authored this week, distinct) · 🔁 **12** revision tasks. Tier B/C are optional; only Tier A counts toward the weekly must-solve target.

<a id="day-01"></a>
### Day 01 — Hash Map Fundamentals

> 📅 Tue, Oct 20 · Week 1 · ⏱ ≈ 2 h 16 min · 🔗 [Back to Week 1](#week-1)

**Learning objective:** Trade O(n) scans for O(1) average lookups and recognise the complement, frequency and seen-before patterns.  
**Pattern:** Hash map / set lookup  
**Prerequisites:** None  
**Planned workload:** **8** items = 8 🆕 new + 0 🔁 revision · ⭐ 4 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 2 h 16 min (+≈ 0 h 12 min if you attempt the optional items)

> [!NOTE]
> Planned load is below 10 items on purpose: the concepts today are dense, so depth beats volume.

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Two Sum](https://leetcode.com/problems/two-sum/) | 🟢 EASY | ⭐ A | Hash map complement | 🆕 NEW |
| 2 | [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) | 🟢 EASY | ⭐ A | Hash set | 🆕 NEW |
| 3 | [Valid Anagram](https://leetcode.com/problems/valid-anagram/) | 🟢 EASY | ⭐ A | Frequency count | 🆕 NEW |
| 4 | [Majority Element](https://leetcode.com/problems/majority-element/) | 🟢 EASY | ⭐ A | Counting / Boyer-Moore | 🆕 NEW |
| 5 | [Single Number](https://leetcode.com/problems/single-number/) | 🟢 EASY | 📘 B | XOR identity | 🆕 NEW |
| 6 | [Missing Number](https://leetcode.com/problems/missing-number/) | 🟢 EASY | 📘 B | Sum / XOR | 🆕 NEW |
| 7 | [Ransom Note](https://leetcode.com/problems/ransom-note/) | 🟢 EASY | 📘 B | Frequency count | 🆕 NEW |
| 8 | [Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays/) | 🟢 EASY | 📘 B | Set intersection | 🆕 NEW |
| 9 | [Find All Numbers Disappeared in an Array](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/) | 🟢 EASY | 📘 B | In-place index marking | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Two Sum](https://leetcode.com/problems/two-sum/) — EASY
- [ ] [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) — EASY
- [ ] [Valid Anagram](https://leetcode.com/problems/valid-anagram/) — EASY
- [ ] [Majority Element](https://leetcode.com/problems/majority-element/) — EASY

**📘 Reinforcement (Tier B):** [Single Number](https://leetcode.com/problems/single-number/) · [Missing Number](https://leetcode.com/problems/missing-number/) · [Ransom Note](https://leetcode.com/problems/ransom-note/) · [Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays/) · [Find All Numbers Disappeared in an Array](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/) ➕

**Learn and implement:** Signal: 'have I seen this?', 'how many times?', 'find a pair'. Brute force is O(n²) pair checks; a hash map stores value→index/count so each element needs one lookup. Invariant: the map holds exactly the elements already processed. Time O(n), space O(n). Boyer-Moore voting is the O(1)-space alternative for Majority Element.

**Dry-run exercise:** Dry-run Two Sum on [2,7,11,15], target 9, writing the map after every step.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Can I explain why inserting after the lookup avoids using the same element twice?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-02"></a>
### Day 02 — Hashing Patterns: Grouping and Sets

> 📅 Wed, Oct 21 · Week 1 · ⏱ ≈ 3 h 44 min · 🔗 [Back to Week 1](#week-1)

**Learning objective:** Design canonical keys (sorted string, count signature) and use sets to avoid sorting.  
**Pattern:** Canonical keys, hash set scans  
**Prerequisites:** Day 01  
**Planned workload:** **9** items = 8 🆕 new + 1 🔁 revision · ⭐ 4 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 3 h 44 min (+≈ 0 h 12 min if you attempt the optional items)

> [!NOTE]
> Planned load is below 10 items on purpose: the concepts today are dense, so depth beats volume.

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Group Anagrams](https://leetcode.com/problems/group-anagrams/) | 🟡 MEDIUM | ⭐ A | Canonical key | 🆕 NEW |
| 2 | [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) | 🟡 MEDIUM | ⭐ A | Hash set, run starts | 🆕 NEW |
| 3 | [Valid Sudoku](https://leetcode.com/problems/valid-sudoku/) | 🟡 MEDIUM | ⭐ A | Sets per row/col/box | 🆕 NEW |
| 4 | [Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/) | 🟢 EASY | ⭐ A | Two-way mapping | 🆕 NEW |
| 5 | [Word Pattern](https://leetcode.com/problems/word-pattern/) | 🟢 EASY | 📘 B | Two-way mapping | 🆕 NEW |
| 6 | [Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/) | 🟡 MEDIUM | 📘 B | Hash map + array | 🆕 NEW |
| 7 | [Sort Characters By Frequency](https://leetcode.com/problems/sort-characters-by-frequency/) | 🟡 MEDIUM | 📘 B | Frequency + sort | 🆕 NEW |
| 8 | [Happy Number](https://leetcode.com/problems/happy-number/) | 🟢 EASY | 📘 B | Cycle via hash set | 🆕 NEW |
| 9 | [Majority Element](https://leetcode.com/problems/majority-element/) | 🟢 EASY | ⭐ A | Counting / Boyer-Moore | 🔁 REVISION |
| 10 | [Design HashMap](https://leetcode.com/problems/design-hashmap/) | 🟢 EASY | 📘 B | Bucket / chaining | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Group Anagrams](https://leetcode.com/problems/group-anagrams/) — MEDIUM
- [ ] [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) — MEDIUM
- [ ] [Valid Sudoku](https://leetcode.com/problems/valid-sudoku/) — MEDIUM
- [ ] [Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/) — EASY

**📘 Reinforcement (Tier B):** [Word Pattern](https://leetcode.com/problems/word-pattern/) · [Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/) · [Sort Characters By Frequency](https://leetcode.com/problems/sort-characters-by-frequency/) · [Happy Number](https://leetcode.com/problems/happy-number/) · [Design HashMap](https://leetcode.com/problems/design-hashmap/) ➕

**🔁 Revision tasks:**
- [ ] [Majority Element](https://leetcode.com/problems/majority-element/) — Explain the approach aloud: brute force, optimisation, complexity

**Learn and implement:** Signal: 'group by', 'same structure', 'consecutive'. Choose a key that is identical for equivalent items (sorted chars, frequency tuple, first-occurrence mapping). For Longest Consecutive Sequence only start counting at a number with no predecessor, giving O(n). Mistake: forgetting that unordered_set iteration is not sorted.

**Dry-run exercise:** Dry-run Longest Consecutive Sequence on [100,4,200,1,3,2] and show which numbers start a run.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Why is Longest Consecutive Sequence O(n) even with a nested while loop?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-03"></a>
### Day 03 — Prefix Sums

> 📅 Thu, Oct 22 · Week 1 · ⏱ ≈ 3 h 44 min · 🔗 [Back to Week 1](#week-1)

**Learning objective:** Turn range-sum and subarray-sum questions into differences of prefix values.  
**Pattern:** Prefix sum + hash map  
**Prerequisites:** Day 01–02  
**Planned workload:** **9** items = 8 🆕 new + 1 🔁 revision · ⭐ 5 Tier A must-solve · ➕ 2 optional (not counted) · ⏱ ≈ 3 h 44 min (+≈ 0 h 56 min if you attempt the optional items)

> [!NOTE]
> Planned load is below 10 items on purpose: the concepts today are dense, so depth beats volume.

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array/) | 🟢 EASY | ⭐ A | Prefix array | 🆕 NEW |
| 2 | [Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/) | 🟢 EASY | ⭐ A | Prefix array | 🆕 NEW |
| 3 | [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) | 🟡 MEDIUM | ⭐ A | Prefix sum + hash map | 🆕 NEW |
| 4 | [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) | 🟡 MEDIUM | ⭐ A | Prefix/suffix products | 🆕 NEW |
| 5 | [Contiguous Array](https://leetcode.com/problems/contiguous-array/) | 🟡 MEDIUM | ⭐ A | Prefix sum + hash map | 🆕 NEW |
| 6 | [Find Pivot Index](https://leetcode.com/problems/find-pivot-index/) | 🟢 EASY | 📘 B | Prefix vs total | 🆕 NEW |
| 7 | [Continuous Subarray Sum](https://leetcode.com/problems/continuous-subarray-sum/) | 🟡 MEDIUM | 📘 B | Prefix mod k | 🆕 NEW |
| 8 | [Subarray Sums Divisible by K](https://leetcode.com/problems/subarray-sums-divisible-by-k/) | 🟡 MEDIUM | 📘 B | Prefix mod k | 🆕 NEW |
| 9 | [Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/) | 🟢 EASY | ⭐ A | Two-way mapping | 🔁 REVISION |
| 10 | [Range Sum Query 2D - Immutable](https://leetcode.com/problems/range-sum-query-2d-immutable/) | 🟡 MEDIUM | 📘 B | 2D prefix sums | ➕ OPTIONAL |
| 11 | [Count Number of Nice Subarrays](https://leetcode.com/problems/count-number-of-nice-subarrays/) | 🟡 MEDIUM | 📘 B | Prefix count (parity) | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array/) — EASY
- [ ] [Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/) — EASY
- [ ] [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) — MEDIUM
- [ ] [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) — MEDIUM
- [ ] [Contiguous Array](https://leetcode.com/problems/contiguous-array/) — MEDIUM

**📘 Reinforcement (Tier B):** [Find Pivot Index](https://leetcode.com/problems/find-pivot-index/) · [Continuous Subarray Sum](https://leetcode.com/problems/continuous-subarray-sum/) · [Subarray Sums Divisible by K](https://leetcode.com/problems/subarray-sums-divisible-by-k/) · [Range Sum Query 2D - Immutable](https://leetcode.com/problems/range-sum-query-2d-immutable/) ➕ · [Count Number of Nice Subarrays](https://leetcode.com/problems/count-number-of-nice-subarrays/) ➕

**🔁 Revision tasks:**
- [ ] [Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/) — Explain the approach aloud: brute force, optimisation, complexity

**Learn and implement:** Signal: 'subarray sum equals / divisible by K', 'range sum queries'. sum(i..j) = P[j+1]-P[i]. Count subarrays by storing prefix-sum frequencies: at each j look up P-k. Seed the map with {0:1}. For divisibility use prefix % k (normalise negatives). Contiguous Array becomes sum-zero after mapping 0→-1. Time O(n), space O(n).

**Dry-run exercise:** Dry-run Subarray Sum Equals K on [1,2,3,-3,3], k=3, tracking the frequency map.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Why must the map start with {0:1}?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-04"></a>
### Day 04 — Kadane's Algorithm and Array Optimisation

> 📅 Fri, Oct 23 · Week 1 · ⏱ ≈ 4 h 15 min · 🔗 [Back to Week 1](#week-1)

**Learning objective:** Maintain a best-so-far state in one pass and extend it to products, circular arrays and stock profit.  
**Pattern:** Running best / DP on arrays  
**Prerequisites:** Day 03  
**Planned workload:** **10** items = 8 🆕 new + 2 🔁 revision · ⭐ 4 Tier A must-solve · ➕ 2 optional (not counted) · ⏱ ≈ 4 h 15 min (+≈ 0 h 56 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) | 🟡 MEDIUM | ⭐ A | Kadane | 🆕 NEW |
| 2 | [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | 🟢 EASY | ⭐ A | Running minimum | 🆕 NEW |
| 3 | [Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) | 🟡 MEDIUM | ⭐ A | Sum of positive deltas | 🆕 NEW |
| 4 | [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/) | 🟡 MEDIUM | ⭐ A | Track max and min | 🆕 NEW |
| 5 | [Rotate Array](https://leetcode.com/problems/rotate-array/) | 🟡 MEDIUM | 📘 B | Reverse trick | 🆕 NEW |
| 6 | [Maximum Sum Circular Subarray](https://leetcode.com/problems/maximum-sum-circular-subarray/) | 🟡 MEDIUM | 📘 B | Kadane + total - min | 🆕 NEW |
| 7 | [Max Consecutive Ones](https://leetcode.com/problems/max-consecutive-ones/) | 🟢 EASY | 📘 B | Running counter | 🆕 NEW |
| 8 | [Increasing Triplet Subsequence](https://leetcode.com/problems/increasing-triplet-subsequence/) | 🟡 MEDIUM | 📘 B | Two running minima | 🆕 NEW |
| 9 | [Contiguous Array](https://leetcode.com/problems/contiguous-array/) | 🟡 MEDIUM | ⭐ A | Prefix sum + hash map | 🔁 REVISION |
| 10 | [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) | 🟢 EASY | ⭐ A | Hash set | 🔁 REVISION |
| 11 | [Best Sightseeing Pair](https://leetcode.com/problems/best-sightseeing-pair/) | 🟡 MEDIUM | 📘 B | Running best prefix term | ➕ OPTIONAL |
| 12 | [Longest Turbulent Subarray](https://leetcode.com/problems/longest-turbulent-subarray/) | 🟡 MEDIUM | 📘 B | Sign alternation | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) — MEDIUM
- [ ] [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) — EASY
- [ ] [Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) — MEDIUM
- [ ] [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/) — MEDIUM

**📘 Reinforcement (Tier B):** [Rotate Array](https://leetcode.com/problems/rotate-array/) · [Maximum Sum Circular Subarray](https://leetcode.com/problems/maximum-sum-circular-subarray/) · [Max Consecutive Ones](https://leetcode.com/problems/max-consecutive-ones/) · [Increasing Triplet Subsequence](https://leetcode.com/problems/increasing-triplet-subsequence/) · [Best Sightseeing Pair](https://leetcode.com/problems/best-sightseeing-pair/) ➕ · [Longest Turbulent Subarray](https://leetcode.com/problems/longest-turbulent-subarray/) ➕

**🔁 Revision tasks:**
- [ ] [Contiguous Array](https://leetcode.com/problems/contiguous-array/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) — Re-solve from scratch, no hints (20 min cap)

**Learn and implement:** Signal: 'maximum subarray', 'best time to buy', 'maximum product'. Kadane: cur = max(a[i], cur+a[i]); ans = max(ans, cur). Invariant: cur is the best subarray ending at i. For products keep both max and min (negatives flip). Stock problems: track running minimum or sum all positive deltas. Time O(n), space O(1).

**Dry-run exercise:** Dry-run Maximum Product Subarray on [2,3,-2,4,-1], showing curMax and curMin.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Why does Maximum Product Subarray need curMin as well as curMax?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-05"></a>
### Day 05 — In-Place Array Manipulation and Sorting Basics

> 📅 Sat, Oct 24 · Week 1 · ⏱ ≈ 3 h 43 min · 🔗 [Back to Week 1](#week-1)

**Learning objective:** Rearrange arrays in O(1) extra space using read/write pointers, counting and permutation logic.  
**Pattern:** In-place writes, counting, permutation  
**Prerequisites:** Day 01–04  
**Planned workload:** **10** items = 8 🆕 new + 2 🔁 revision · ⭐ 5 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 3 h 43 min (+≈ 0 h 45 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Move Zeroes](https://leetcode.com/problems/move-zeroes/) | 🟢 EASY | ⭐ A | Read/write pointers | 🆕 NEW |
| 2 | [Remove Element](https://leetcode.com/problems/remove-element/) | 🟢 EASY | ⭐ A | Read/write pointers | 🆕 NEW |
| 3 | [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/) | 🟢 EASY | ⭐ A | Fill from the back | 🆕 NEW |
| 4 | [Sort Colors](https://leetcode.com/problems/sort-colors/) | 🟡 MEDIUM | ⭐ A | Dutch national flag | 🆕 NEW |
| 5 | [Next Permutation](https://leetcode.com/problems/next-permutation/) | 🟡 MEDIUM | ⭐ A | Rightmost ascent + reverse | 🆕 NEW |
| 6 | [Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/) | 🟢 EASY | 📘 B | Two pointers from ends | 🆕 NEW |
| 7 | [Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/) | 🟡 MEDIUM | 📘 B | Floyd cycle on indices | 🆕 NEW |
| 8 | [Majority Element II](https://leetcode.com/problems/majority-element-ii/) | 🟡 MEDIUM | 📘 B | Boyer-Moore, two candidates | 🆕 NEW |
| 9 | [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/) | 🟡 MEDIUM | ⭐ A | Track max and min | 🔁 REVISION |
| 10 | [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) | 🟡 MEDIUM | ⭐ A | Hash set, run starts | 🔁 REVISION |
| 11 | [First Missing Positive](https://leetcode.com/problems/first-missing-positive/) | 🔴 HARD | 🚀 C | Cyclic placement | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Move Zeroes](https://leetcode.com/problems/move-zeroes/) — EASY
- [ ] [Remove Element](https://leetcode.com/problems/remove-element/) — EASY
- [ ] [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/) — EASY
- [ ] [Sort Colors](https://leetcode.com/problems/sort-colors/) — MEDIUM
- [ ] [Next Permutation](https://leetcode.com/problems/next-permutation/) — MEDIUM

**📘 Reinforcement (Tier B):** [Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/) · [Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/) · [Majority Element II](https://leetcode.com/problems/majority-element-ii/)

**🚀 Stretch (Tier C, never mandatory):** [First Missing Positive](https://leetcode.com/problems/first-missing-positive/)

**🔁 Revision tasks:**
- [ ] [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) — Re-solve from scratch, no hints (20 min cap)

**Learn and implement:** Signal: 'in-place', 'O(1) extra space', 'move/remove'. Use a write index that trails the read index. Sort Colors is a three-way partition (Dutch flag). Next Permutation: find the rightmost ascent, swap with the next larger suffix element, reverse the suffix. Cyclic-index tricks solve Find the Duplicate Number via Floyd's cycle detection.

**Dry-run exercise:** Dry-run Next Permutation on [1,3,5,4,2] and name each of the three steps.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Can I state the invariant of the three pointers in Sort Colors?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-06"></a>
### Day 06 — Matrix Traversal and Week-1 Consolidation

> 📅 Sun, Oct 25 · Week 1 · ⏱ ≈ 3 h 59 min · 🔗 [Back to Week 1](#week-1)

**Learning objective:** Handle 2D array indexing, boundaries and in-place transformations without off-by-one errors.  
**Pattern:** 2D indexing, layer / boundary traversal  
**Prerequisites:** Day 01–05  
**Planned workload:** **10** items = 8 🆕 new + 2 🔁 revision · ⭐ 3 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 3 h 59 min (+≈ 0 h 28 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Rotate Image](https://leetcode.com/problems/rotate-image/) | 🟡 MEDIUM | ⭐ A | Transpose + reverse | 🆕 NEW |
| 2 | [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/) | 🟡 MEDIUM | ⭐ A | Boundary shrinking | 🆕 NEW |
| 3 | [Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/) | 🟡 MEDIUM | ⭐ A | In-place markers | 🆕 NEW |
| 4 | [Spiral Matrix II](https://leetcode.com/problems/spiral-matrix-ii/) | 🟡 MEDIUM | 📘 B | Boundary shrinking | 🆕 NEW |
| 5 | [Transpose Matrix](https://leetcode.com/problems/transpose-matrix/) | 🟢 EASY | 📘 B | Index swap | 🆕 NEW |
| 6 | [Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/) | 🟢 EASY | 📘 B | Row from previous row | 🆕 NEW |
| 7 | [Diagonal Traverse](https://leetcode.com/problems/diagonal-traverse/) | 🟡 MEDIUM | 📘 B | Direction flipping | 🆕 NEW |
| 8 | [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/) | 🟢 EASY | 📘 B | Vertical scan | 🆕 NEW |
| 9 | [Next Permutation](https://leetcode.com/problems/next-permutation/) | 🟡 MEDIUM | ⭐ A | Rightmost ascent + reverse | 🔁 REVISION |
| 10 | [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) | 🟡 MEDIUM | ⭐ A | Prefix/suffix products | 🔁 REVISION |
| 11 | [Game of Life](https://leetcode.com/problems/game-of-life/) | 🟡 MEDIUM | 📘 B | In-place state encoding | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Rotate Image](https://leetcode.com/problems/rotate-image/) — MEDIUM
- [ ] [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/) — MEDIUM
- [ ] [Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/) — MEDIUM

**📘 Reinforcement (Tier B):** [Spiral Matrix II](https://leetcode.com/problems/spiral-matrix-ii/) · [Transpose Matrix](https://leetcode.com/problems/transpose-matrix/) · [Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/) · [Diagonal Traverse](https://leetcode.com/problems/diagonal-traverse/) · [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/) · [Game of Life](https://leetcode.com/problems/game-of-life/) ➕

**🔁 Revision tasks:**
- [ ] [Next Permutation](https://leetcode.com/problems/next-permutation/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) — Re-solve from scratch, no hints (20 min cap)

**Learn and implement:** Signal: 'rotate', 'spiral', 'zero the row/column'. Rotate Image = transpose then reverse each row. Spiral Matrix: shrink four boundaries (top, bottom, left, right) after each side. Set Matrix Zeroes: reuse the first row/column as markers for O(1) space. Always test 1×n, n×1 and 1×1 matrices.

**Dry-run exercise:** Dry-run Rotate Image on a 3×3 matrix by transposing, then reversing rows.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Can I list four edge cases for matrix traversal?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-07"></a>
### Day 07 — Week 1 Test — Arrays and Hashing

> 📅 Mon, Oct 26 · Week 1 · ⏱ ≈ 3 h 30 min · 🔗 [Back to Week 1](#week-1)

**Learning objective:** Prove you can solve unseen array/hash problems under time pressure.  
**Pattern:** Mixed: hashing, prefix sums, Kadane, in-place  
**Prerequisites:** Day 01–06  
**Planned workload:** **7** items = 3 🆕 new + 4 🔁 revision · ⭐ 3 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 3 h 30 min (+≈ 0 h 28 min if you attempt the optional items)

> [!NOTE]
> Planned load is below 10 items on purpose: a timed test plus a structured review replaces a normal question set.

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/) | 🟡 MEDIUM | ⭐ A | In-place index marking | 🆕 NEW |
| 2 | [Pairs of Songs With Total Durations Divisible by 60](https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/) | 🟡 MEDIUM | ⭐ A | Remainder hash map | 🆕 NEW |
| 3 | [Maximum Absolute Sum of Any Subarray](https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/) | 🟡 MEDIUM | ⭐ A | Kadane (max and min) | 🆕 NEW |
| 4 | [Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) | 🟡 MEDIUM | ⭐ A | Sum of positive deltas | 🔁 REVISION |
| 5 | [Group Anagrams](https://leetcode.com/problems/group-anagrams/) | 🟡 MEDIUM | ⭐ A | Canonical key | 🔁 REVISION |
| 6 | [Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/) | 🟡 MEDIUM | ⭐ A | In-place markers | 🔁 REVISION |
| 7 | [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) | 🟡 MEDIUM | ⭐ A | Prefix sum + hash map | 🔁 REVISION |
| 8 | [Shortest Unsorted Continuous Subarray](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/) | 🟡 MEDIUM | 📘 B | Sort comparison / two scans | ➕ OPTIONAL |

**⏱ Timed test protocol:** 90 minutes · no hints · no solution lookup · 30 min cap per problem. Attempt the ⭐ problems first, then the optional one if time remains. After the clock stops, spend 45 minutes on the post-mortem (see the review below the week).

**⭐ Must solve (Tier A):**
- [ ] [Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/) — MEDIUM
- [ ] [Pairs of Songs With Total Durations Divisible by 60](https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/) — MEDIUM
- [ ] [Maximum Absolute Sum of Any Subarray](https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/) — MEDIUM

**📘 Reinforcement (Tier B):** [Shortest Unsorted Continuous Subarray](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/) ➕

**🔁 Revision tasks:**
- [ ] [Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Group Anagrams](https://leetcode.com/problems/group-anagrams/) — Weekly review: re-solve (prioritise anything you failed this week)
- [ ] [Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/) — Weekly review: re-solve (prioritise anything you failed this week)
- [ ] [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) — Weekly review: re-solve (prioritise anything you failed this week)

**Scope:** Mixed: hashing, prefix sums, Kadane, in-place. Prove you can solve unseen array/hash problems under time pressure. Every problem is a variation on patterns taught on Days 1–6; if the pattern is not obvious in 3 minutes, write the brute force first and look for the bottleneck.

**End-of-day checkpoint:**
- [ ] Did I name the pattern for each problem within 3 minutes?
- [ ] Did I solve at least two of the three ⭐ problems independently?
- [ ] For every failed problem, did I write the missed insight in my mistake log?
- [ ] Did I re-attempt each failed problem the next day without notes?
- [ ] Which pattern from this week do I trust the least?

**Completion rule:** Complete when the timed test was taken honestly, the post-mortem for every failed problem is written, and each Tier A weak spot is logged for the weekly remediation checklist. Optional problems never block progress.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

#### Week 1 review and assessment

- **Timed test:** Day 7 (Mon, Oct 26). Scope is limited to patterns taught in Days 1–6.
- **Revision plan:** D+1 / D+3 / D+7 tasks are already scheduled in each day's table. On Day 7 also re-solve this week's failed Tier A problems from the mistake log.
- **Weak-topic remediation checklist** (tick only after re-solving without hints):
  - [ ] Hash maps and sets
  - [ ] Prefix sums
  - [ ] Kadane / running best
  - [ ] In-place pointer writes
  - [ ] Matrix indexing
- **Weekly self-assessment** (rate confidence 1–5 after the test):

  | Pattern | Confidence (1–5) | Needs reattempt? |
  |---|:---:|:---:|
  | Hash maps and sets | | |
  | Prefix sums | | |
  | Kadane / running best | | |
  | In-place pointer writes | | |
  | Matrix indexing | | |

- **Weekly reflection:** What pattern did I confuse with another? Which mistake repeated? Which 3 problems will I re-solve first next week?

---

<a id="week-2"></a>
## Week 2 — Two Pointers and Sliding Window

📅 Tue, Oct 27 → Mon, Nov 2 · ⬅️ [Week 1](#week-1) · ➡️ [Week 3](#week-3)

**Weekly objective:** Learn to replace O(n²) pair/subarray scans with linear pointer and window techniques.  
**Prerequisite knowledge:** Week 1 (arrays, hash maps, prefix sums).  
**Pattern coverage:** Converging pointers · Read/write pointers · Fixed window · Variable window (longest / shortest) · Window counting trick and deque

| Day | Date | Topic | ⭐ A | Planned items | Time |
|---|---|---|---:|---:|---|
| [08](#day-08) | Tue, Oct 27 | Opposite-Direction Two Pointers | 4 | 11 | ≈ 4 h 14 min |
| [09](#day-09) | Wed, Oct 28 | Same-Direction Pointers and Trapping Rain Water | 4 | 11 | ≈ 3 h 59 min |
| [10](#day-10) | Thu, Oct 29 | Fixed-Size Sliding Window | 4 | 11 | ≈ 4 h 30 min |
| [11](#day-11) | Fri, Oct 30 | Variable Window: Longest Valid Window | 4 | 11 | ≈ 5 h 02 min |
| [12](#day-12) | Sat, Oct 31 | Variable Window: Shortest Window and Counting | 3 | 9 | ≈ 4 h 23 min |
| [13](#day-13) | Sun, Nov 1 | Window Counting Trick and Monotonic Deque | 2 | 8 | ≈ 4 h 12 min |
| [14](#day-14) | Mon, Nov 2 | Week 2 Test — Two Pointers and Sliding Window | 3 | 8 | ≈ 3 h 45 min |

**Weekly targets:** ⭐ Tier A **24** problems · 📘 Tier B **28** · 🚀 Tier C **4** (all authored this week, distinct) · 🔁 **23** revision tasks. Tier B/C are optional; only Tier A counts toward the weekly must-solve target.

<a id="day-08"></a>
### Day 08 — Opposite-Direction Two Pointers

> 📅 Tue, Oct 27 · Week 2 · ⏱ ≈ 4 h 14 min · 🔗 [Back to Week 2](#week-2)

**Learning objective:** Use sorted order or symmetry to move two pointers inward and discard impossible pairs.  
**Pattern:** Two pointers (converging)  
**Prerequisites:** Day 01, 05  
**Planned workload:** **11** items = 8 🆕 new + 3 🔁 revision · ⭐ 4 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 4 h 14 min (+≈ 0 h 28 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) | 🟢 EASY | ⭐ A | Converging pointers | 🆕 NEW |
| 2 | [Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) | 🟡 MEDIUM | ⭐ A | Converging pointers | 🆕 NEW |
| 3 | [3Sum](https://leetcode.com/problems/3sum/) | 🟡 MEDIUM | ⭐ A | Sort + two pointers | 🆕 NEW |
| 4 | [Container With Most Water](https://leetcode.com/problems/container-with-most-water/) | 🟡 MEDIUM | ⭐ A | Greedy pointer move | 🆕 NEW |
| 5 | [Reverse String](https://leetcode.com/problems/reverse-string/) | 🟢 EASY | 📘 B | Swap from ends | 🆕 NEW |
| 6 | [Valid Palindrome II](https://leetcode.com/problems/valid-palindrome-ii/) | 🟢 EASY | 📘 B | One skip allowed | 🆕 NEW |
| 7 | [3Sum Closest](https://leetcode.com/problems/3sum-closest/) | 🟡 MEDIUM | 📘 B | Sort + two pointers | 🆕 NEW |
| 8 | [Boats to Save People](https://leetcode.com/problems/boats-to-save-people/) | 🟡 MEDIUM | 📘 B | Sort + greedy pairing | 🆕 NEW |
| 9 | [Maximum Absolute Sum of Any Subarray](https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/) | 🟡 MEDIUM | ⭐ A | Kadane (max and min) | 🔁 REVISION |
| 10 | [Next Permutation](https://leetcode.com/problems/next-permutation/) | 🟡 MEDIUM | ⭐ A | Rightmost ascent + reverse | 🔁 REVISION |
| 11 | [Two Sum](https://leetcode.com/problems/two-sum/) | 🟢 EASY | ⭐ A | Hash map complement | 🔁 REVISION |
| 12 | [4Sum](https://leetcode.com/problems/4sum/) | 🟡 MEDIUM | 📘 B | Sort + nested two pointers | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) — EASY
- [ ] [Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) — MEDIUM
- [ ] [3Sum](https://leetcode.com/problems/3sum/) — MEDIUM
- [ ] [Container With Most Water](https://leetcode.com/problems/container-with-most-water/) — MEDIUM

**📘 Reinforcement (Tier B):** [Reverse String](https://leetcode.com/problems/reverse-string/) · [Valid Palindrome II](https://leetcode.com/problems/valid-palindrome-ii/) · [3Sum Closest](https://leetcode.com/problems/3sum-closest/) · [Boats to Save People](https://leetcode.com/problems/boats-to-save-people/) · [4Sum](https://leetcode.com/problems/4sum/) ➕

**🔁 Revision tasks:**
- [ ] [Maximum Absolute Sum of Any Subarray](https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Next Permutation](https://leetcode.com/problems/next-permutation/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Two Sum](https://leetcode.com/problems/two-sum/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: sorted array, pair/triplet sum, palindrome, maximise a two-ended quantity. Pointers l=0, r=n-1; if the sum is too small move l, too large move r. Why safe: moving the pointer at the smaller side can never improve Container With Most Water. 3Sum = sort, fix i, run two pointers, skip duplicates. Time O(n²), space O(1) beyond sorting.

**Dry-run exercise:** Dry-run 3Sum on [-1,0,1,2,-1,-4] after sorting, showing duplicate skips.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Why does moving the shorter wall in Container With Most Water never lose the optimum?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-09"></a>
### Day 09 — Same-Direction Pointers and Trapping Rain Water

> 📅 Wed, Oct 28 · Week 2 · ⏱ ≈ 3 h 59 min · 🔗 [Back to Week 2](#week-2)

**Learning objective:** Use a slow write pointer, subsequence matching and boundary maxima to solve in-place and trapping problems.  
**Pattern:** Two pointers (read/write, fast/slow)  
**Prerequisites:** Day 08  
**Planned workload:** **11** items = 8 🆕 new + 3 🔁 revision · ⭐ 4 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 3 h 59 min (+≈ 0 h 45 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) | 🟢 EASY | ⭐ A | Slow/fast pointers | 🆕 NEW |
| 2 | [Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/) | 🟡 MEDIUM | ⭐ A | Write pointer with k=2 | 🆕 NEW |
| 3 | [Is Subsequence](https://leetcode.com/problems/is-subsequence/) | 🟢 EASY | ⭐ A | Two-pointer matching | 🆕 NEW |
| 4 | [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) | 🔴 HARD | ⭐ A | Two pointers with maxima | 🆕 NEW |
| 5 | [Backspace String Compare](https://leetcode.com/problems/backspace-string-compare/) | 🟢 EASY | 📘 B | Reverse scan with skips | 🆕 NEW |
| 6 | [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) | 🟡 MEDIUM | 📘 B | Expand around centre | 🆕 NEW |
| 7 | [Intersection of Two Arrays II](https://leetcode.com/problems/intersection-of-two-arrays-ii/) | 🟢 EASY | 📘 B | Sort + pointers / counting | 🆕 NEW |
| 8 | [Sort Array By Parity](https://leetcode.com/problems/sort-array-by-parity/) | 🟢 EASY | 📘 B | Partition | 🆕 NEW |
| 9 | [Container With Most Water](https://leetcode.com/problems/container-with-most-water/) | 🟡 MEDIUM | ⭐ A | Greedy pointer move | 🔁 REVISION |
| 10 | [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/) | 🟡 MEDIUM | ⭐ A | Boundary shrinking | 🔁 REVISION |
| 11 | [Group Anagrams](https://leetcode.com/problems/group-anagrams/) | 🟡 MEDIUM | ⭐ A | Canonical key | 🔁 REVISION |
| 12 | [Trapping Rain Water II](https://leetcode.com/problems/trapping-rain-water-ii/) | 🔴 HARD | 🚀 C | Heap + BFS | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) — EASY
- [ ] [Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/) — MEDIUM
- [ ] [Is Subsequence](https://leetcode.com/problems/is-subsequence/) — EASY
- [ ] [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) — HARD

**📘 Reinforcement (Tier B):** [Backspace String Compare](https://leetcode.com/problems/backspace-string-compare/) · [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) · [Intersection of Two Arrays II](https://leetcode.com/problems/intersection-of-two-arrays-ii/) · [Sort Array By Parity](https://leetcode.com/problems/sort-array-by-parity/)

**🚀 Stretch (Tier C, never mandatory):** [Trapping Rain Water II](https://leetcode.com/problems/trapping-rain-water-ii/)

**🔁 Revision tasks:**
- [ ] [Container With Most Water](https://leetcode.com/problems/container-with-most-water/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Group Anagrams](https://leetcode.com/problems/group-anagrams/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: remove duplicates, merge, subsequence, 'water between bars'. Slow pointer marks the next write position. Trapping Rain Water: water at i = min(maxLeft, maxRight) - h[i]; two pointers advance the side with the smaller max. Time O(n), space O(1). Compare with the prefix-array version first, then optimise.

**Dry-run exercise:** Dry-run Trapping Rain Water on [0,1,0,2,1,0,1,3,2,1,2,1] with two pointers.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Can I derive Trapping Rain Water from the prefix-max/suffix-max version?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-10"></a>
### Day 10 — Fixed-Size Sliding Window

> 📅 Thu, Oct 29 · Week 2 · ⏱ ≈ 4 h 30 min · 🔗 [Back to Week 2](#week-2)

**Learning objective:** Maintain an aggregate over a window of constant length by adding one element and removing one.  
**Pattern:** Sliding window (fixed size)  
**Prerequisites:** Day 03, 09  
**Planned workload:** **11** items = 8 🆕 new + 3 🔁 revision · ⭐ 4 Tier A must-solve · ➕ 2 optional (not counted) · ⏱ ≈ 4 h 30 min (+≈ 1 h 13 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/) | 🟢 EASY | ⭐ A | Fixed window sum | 🆕 NEW |
| 2 | [Permutation in String](https://leetcode.com/problems/permutation-in-string/) | 🟡 MEDIUM | ⭐ A | Frequency window | 🆕 NEW |
| 3 | [Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/) | 🟡 MEDIUM | ⭐ A | Frequency window | 🆕 NEW |
| 4 | [Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/) | 🟢 EASY | ⭐ A | Window of size k | 🆕 NEW |
| 5 | [Maximum Number of Vowels in a Substring of Given Length](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/) | 🟡 MEDIUM | 📘 B | Fixed window count | 🆕 NEW |
| 6 | [Grumpy Bookstore Owner](https://leetcode.com/problems/grumpy-bookstore-owner/) | 🟡 MEDIUM | 📘 B | Fixed window gain | 🆕 NEW |
| 7 | [Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/) | 🟡 MEDIUM | 📘 B | Fixed window sum | 🆕 NEW |
| 8 | [Maximum Points You Can Obtain from Cards](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/) | 🟡 MEDIUM | 📘 B | Complement window | 🆕 NEW |
| 9 | [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) | 🔴 HARD | ⭐ A | Two pointers with maxima | 🔁 REVISION |
| 10 | [Pairs of Songs With Total Durations Divisible by 60](https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/) | 🟡 MEDIUM | ⭐ A | Remainder hash map | 🔁 REVISION |
| 11 | [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) | 🟡 MEDIUM | ⭐ A | Prefix sum + hash map | 🔁 REVISION |
| 12 | [Repeated DNA Sequences](https://leetcode.com/problems/repeated-dna-sequences/) | 🟡 MEDIUM | 📘 B | Rolling hash / set | ➕ OPTIONAL |
| 13 | [Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words/) | 🔴 HARD | 🚀 C | Word-level window | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/) — EASY
- [ ] [Permutation in String](https://leetcode.com/problems/permutation-in-string/) — MEDIUM
- [ ] [Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/) — MEDIUM
- [ ] [Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/) — EASY

**📘 Reinforcement (Tier B):** [Maximum Number of Vowels in a Substring of Given Length](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/) · [Grumpy Bookstore Owner](https://leetcode.com/problems/grumpy-bookstore-owner/) · [Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/) · [Maximum Points You Can Obtain from Cards](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/) · [Repeated DNA Sequences](https://leetcode.com/problems/repeated-dna-sequences/) ➕

**🚀 Stretch (Tier C, never mandatory):** [Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words/)

**🔁 Revision tasks:**
- [ ] [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Pairs of Songs With Total Durations Divisible by 60](https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'subarray of size k', 'permutation/anagram of a pattern'. Window sum or count updates in O(1): add a[i], subtract a[i-k]. For anagram problems compare a 26-length frequency array (or a 'matches' counter). Time O(n), space O(1). Difference from prefix sums: the window slides and keeps only the current state.

**Dry-run exercise:** Dry-run Find All Anagrams in a String for s='cbaebabacd', p='abc' with a frequency array.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] How does a fixed window differ from a variable window?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-11"></a>
### Day 11 — Variable Window: Longest Valid Window

> 📅 Fri, Oct 30 · Week 2 · ⏱ ≈ 5 h 02 min · 🔗 [Back to Week 2](#week-2)

**Learning objective:** Grow the right edge, shrink the left edge only while the window is invalid, and record the maximum length.  
**Pattern:** Sliding window (expand, shrink while invalid)  
**Prerequisites:** Day 10  
**Planned workload:** **11** items = 8 🆕 new + 3 🔁 revision · ⭐ 4 Tier A must-solve · ➕ 2 optional (not counted) · ⏱ ≈ 5 h 02 min (+≈ 0 h 56 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | 🟡 MEDIUM | ⭐ A | Variable window + set/map | 🆕 NEW |
| 2 | [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) | 🟡 MEDIUM | ⭐ A | Window with max frequency | 🆕 NEW |
| 3 | [Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/) | 🟡 MEDIUM | ⭐ A | Window with k flips | 🆕 NEW |
| 4 | [Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/) | 🟡 MEDIUM | ⭐ A | At most 2 distinct | 🆕 NEW |
| 5 | [Get Equal Substrings Within Budget](https://leetcode.com/problems/get-equal-substrings-within-budget/) | 🟡 MEDIUM | 📘 B | Window on cost | 🆕 NEW |
| 6 | [Longest Subarray of 1's After Deleting One Element](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/) | 🟡 MEDIUM | 📘 B | Window with one deletion | 🆕 NEW |
| 7 | [Frequency of the Most Frequent Element](https://leetcode.com/problems/frequency-of-the-most-frequent-element/) | 🟡 MEDIUM | 📘 B | Sort + window | 🆕 NEW |
| 8 | [Maximum Erasure Value](https://leetcode.com/problems/maximum-erasure-value/) | 🟡 MEDIUM | 📘 B | Unique-elements window | 🆕 NEW |
| 9 | [Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/) | 🟢 EASY | ⭐ A | Window of size k | 🔁 REVISION |
| 10 | [3Sum](https://leetcode.com/problems/3sum/) | 🟡 MEDIUM | ⭐ A | Sort + two pointers | 🔁 REVISION |
| 11 | [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) | 🟡 MEDIUM | ⭐ A | Kadane | 🔁 REVISION |
| 12 | [Minimum Operations to Reduce X to Zero](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/) | 🟡 MEDIUM | 📘 B | Complement window | ➕ OPTIONAL |
| 13 | [Longest Nice Subarray](https://leetcode.com/problems/longest-nice-subarray/) | 🟡 MEDIUM | 📘 B | Bitmask window | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) — MEDIUM
- [ ] [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) — MEDIUM
- [ ] [Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/) — MEDIUM
- [ ] [Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/) — MEDIUM

**📘 Reinforcement (Tier B):** [Get Equal Substrings Within Budget](https://leetcode.com/problems/get-equal-substrings-within-budget/) · [Longest Subarray of 1's After Deleting One Element](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/) · [Frequency of the Most Frequent Element](https://leetcode.com/problems/frequency-of-the-most-frequent-element/) · [Maximum Erasure Value](https://leetcode.com/problems/maximum-erasure-value/) · [Minimum Operations to Reduce X to Zero](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/) ➕ · [Longest Nice Subarray](https://leetcode.com/problems/longest-nice-subarray/) ➕

**🔁 Revision tasks:**
- [ ] [Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [3Sum](https://leetcode.com/problems/3sum/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'longest substring/subarray with at most K of …', 'without repeating'. Template: for r in range: add s[r]; while invalid: remove s[l++]; ans=max(ans,r-l+1). Invariant: window [l,r] is valid after the while loop. Works only when removing elements can restore validity (monotonic). Time O(n) amortised, space O(alphabet).

**Dry-run exercise:** Dry-run Longest Repeating Character Replacement on 'AABABBA', k=1 with maxFreq tracking.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] What property of the constraint makes shrinking from the left correct?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-12"></a>
### Day 12 — Variable Window: Shortest Window and Counting

> 📅 Sat, Oct 31 · Week 2 · ⏱ ≈ 4 h 23 min · 🔗 [Back to Week 2](#week-2)

**Learning objective:** Shrink while the window is valid to find minimum length, and count windows using 'at most' logic.  
**Pattern:** Sliding window (shrink while valid)  
**Prerequisites:** Day 11  
**Planned workload:** **9** items = 6 🆕 new + 3 🔁 revision · ⭐ 3 Tier A must-solve · ➕ 2 optional (not counted) · ⏱ ≈ 4 h 23 min (+≈ 0 h 56 min if you attempt the optional items)

> [!NOTE]
> Planned load is below 10 items on purpose: the concepts today are dense, so depth beats volume.

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) | 🟡 MEDIUM | ⭐ A | Shrink while valid | 🆕 NEW |
| 2 | [Subarray Product Less Than K](https://leetcode.com/problems/subarray-product-less-than-k/) | 🟡 MEDIUM | ⭐ A | Count windows ending at r | 🆕 NEW |
| 3 | [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) | 🔴 HARD | ⭐ A | Need/have counters | 🆕 NEW |
| 4 | [Binary Subarrays With Sum](https://leetcode.com/problems/binary-subarrays-with-sum/) | 🟡 MEDIUM | 📘 B | At-most trick | 🆕 NEW |
| 5 | [Number of Substrings Containing All Three Characters](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/) | 🟡 MEDIUM | 📘 B | Last-seen / shrink | 🆕 NEW |
| 6 | [Replace the Substring for Balanced String](https://leetcode.com/problems/replace-the-substring-for-balanced-string/) | 🟡 MEDIUM | 📘 B | Shrink while valid | 🆕 NEW |
| 7 | [Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/) | 🟡 MEDIUM | ⭐ A | At most 2 distinct | 🔁 REVISION |
| 8 | [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) | 🔴 HARD | ⭐ A | Two pointers with maxima | 🔁 REVISION |
| 9 | [Sort Colors](https://leetcode.com/problems/sort-colors/) | 🟡 MEDIUM | ⭐ A | Dutch national flag | 🔁 REVISION |
| 10 | [Longest Substring with At Least K Repeating Characters](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/) | 🟡 MEDIUM | 📘 B | Divide by invalid char | ➕ OPTIONAL |
| 11 | [Take K of Each Character From Left and Right](https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/) | 🟡 MEDIUM | 📘 B | Complement window | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) — MEDIUM
- [ ] [Subarray Product Less Than K](https://leetcode.com/problems/subarray-product-less-than-k/) — MEDIUM
- [ ] [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) — HARD

**📘 Reinforcement (Tier B):** [Binary Subarrays With Sum](https://leetcode.com/problems/binary-subarrays-with-sum/) · [Number of Substrings Containing All Three Characters](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/) · [Replace the Substring for Balanced String](https://leetcode.com/problems/replace-the-substring-for-balanced-string/) · [Longest Substring with At Least K Repeating Characters](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/) ➕ · [Take K of Each Character From Left and Right](https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/) ➕

**🔁 Revision tasks:**
- [ ] [Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Sort Colors](https://leetcode.com/problems/sort-colors/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'minimum size subarray with sum ≥ s', 'smallest window containing all chars', 'count subarrays with product < k'. Template: expand r; while valid: update answer, then shrink l. For counting, each r contributes (r-l+1) valid subarrays ending at r. Minimum Window Substring: track need/have counts and a 'formed' counter. Time O(n).

**Dry-run exercise:** Dry-run Minimum Window Substring for s='ADOBECODEBANC', t='ABC' showing need, have and formed.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] When do I shrink while valid vs while invalid?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-13"></a>
### Day 13 — Window Counting Trick and Monotonic Deque

> 📅 Sun, Nov 1 · Week 2 · ⏱ ≈ 4 h 12 min · 🔗 [Back to Week 2](#week-2)

**Learning objective:** Count exactly-K windows with the at-most trick and track window maxima with a monotonic deque.  
**Pattern:** Count = atMost(k) - atMost(k-1); monotonic deque  
**Prerequisites:** Day 10–12  
**Planned workload:** **8** items = 5 🆕 new + 3 🔁 revision · ⭐ 2 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 4 h 12 min (+≈ 0 h 45 min if you attempt the optional items)

> [!NOTE]
> Planned load is below 10 items on purpose: the concepts today are dense, so depth beats volume.

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/) | 🔴 HARD | ⭐ A | Monotonic deque | 🆕 NEW |
| 2 | [Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers/) | 🔴 HARD | ⭐ A | atMost(k) - atMost(k-1) | 🆕 NEW |
| 3 | [Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/) | 🟡 MEDIUM | 📘 B | Two monotonic deques | 🆕 NEW |
| 4 | [Number of Subarrays with Bounded Maximum](https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/) | 🟡 MEDIUM | 📘 B | Window counting | 🆕 NEW |
| 5 | [Maximum Sum of Distinct Subarrays With Length K](https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/) | 🟡 MEDIUM | 📘 B | Fixed window + set | 🆕 NEW |
| 6 | [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) | 🔴 HARD | ⭐ A | Need/have counters | 🔁 REVISION |
| 7 | [Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/) | 🟡 MEDIUM | ⭐ A | Frequency window | 🔁 REVISION |
| 8 | [Rotate Image](https://leetcode.com/problems/rotate-image/) | 🟡 MEDIUM | ⭐ A | Transpose + reverse | 🔁 REVISION |
| 9 | [Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/) | 🔴 HARD | 🚀 C | Prefix sums + deque | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/) — HARD
- [ ] [Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers/) — HARD

**📘 Reinforcement (Tier B):** [Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/) · [Number of Subarrays with Bounded Maximum](https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/) · [Maximum Sum of Distinct Subarrays With Length K](https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/)

**🚀 Stretch (Tier C, never mandatory):** [Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/)

**🔁 Revision tasks:**
- [ ] [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Rotate Image](https://leetcode.com/problems/rotate-image/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'exactly K distinct', 'maximum of every window of size k'. exactly(k) = atMost(k) - atMost(k-1). Sliding Window Maximum: deque of indices with decreasing values; pop back while smaller than the new element, pop front when out of window. Each index enters and leaves once, so O(n). Distinguish from two pointers: here the window state is a deque/map, not just two indices.

**Dry-run exercise:** Dry-run Sliding Window Maximum on [1,3,-1,-3,5,3,6,7], k=3, printing the deque of indices.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Why does the deque store indices rather than values?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-14"></a>
### Day 14 — Week 2 Test — Two Pointers and Sliding Window

> 📅 Mon, Nov 2 · Week 2 · ⏱ ≈ 3 h 45 min · 🔗 [Back to Week 2](#week-2)

**Learning objective:** Prove you can pick between two pointers and the right sliding-window variant on unseen problems.  
**Pattern:** Mixed: converging pointers, fixed and variable windows  
**Prerequisites:** Day 08–13  
**Planned workload:** **8** items = 3 🆕 new + 5 🔁 revision · ⭐ 3 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 3 h 45 min (+≈ 0 h 45 min if you attempt the optional items)

> [!NOTE]
> Planned load is below 10 items on purpose: a timed test plus a structured review replaces a normal question set.

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Valid Triangle Number](https://leetcode.com/problems/valid-triangle-number/) | 🟡 MEDIUM | ⭐ A | Sort + two pointers | 🆕 NEW |
| 2 | [Maximum Number of Occurrences of a Substring](https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/) | 🟡 MEDIUM | ⭐ A | Fixed window + counts | 🆕 NEW |
| 3 | [Longest Substring Of All Vowels in Order](https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/) | 🟡 MEDIUM | ⭐ A | Variable window | 🆕 NEW |
| 4 | [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) | 🟡 MEDIUM | ⭐ A | Window with max frequency | 🔁 REVISION |
| 5 | [Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/) | 🟡 MEDIUM | ⭐ A | In-place index marking | 🔁 REVISION |
| 6 | [Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) | 🟡 MEDIUM | ⭐ A | Converging pointers | 🔁 REVISION |
| 7 | [Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers/) | 🔴 HARD | ⭐ A | atMost(k) - atMost(k-1) | 🔁 REVISION |
| 8 | [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) | 🔴 HARD | ⭐ A | Two pointers with maxima | 🔁 REVISION |
| 9 | [Maximum Fruits Harvested After at Most K Steps](https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/) | 🔴 HARD | 🚀 C | Window over positions | ➕ OPTIONAL |

**⏱ Timed test protocol:** 90 minutes · no hints · no solution lookup · 30 min cap per problem. Attempt the ⭐ problems first, then the optional one if time remains. After the clock stops, spend 45 minutes on the post-mortem (see the review below the week).

**⭐ Must solve (Tier A):**
- [ ] [Valid Triangle Number](https://leetcode.com/problems/valid-triangle-number/) — MEDIUM
- [ ] [Maximum Number of Occurrences of a Substring](https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/) — MEDIUM
- [ ] [Longest Substring Of All Vowels in Order](https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/) — MEDIUM

**🚀 Stretch (Tier C, never mandatory):** [Maximum Fruits Harvested After at Most K Steps](https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/)

**🔁 Revision tasks:**
- [ ] [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/) — Re-solve under a 25-min timer, then compare with your notes
- [ ] [Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) — Weekly review: re-solve (prioritise anything you failed this week)
- [ ] [Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers/) — Weekly review: re-solve (prioritise anything you failed this week)
- [ ] [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) — Weekly review: re-solve (prioritise anything you failed this week)

**Scope:** Mixed: converging pointers, fixed and variable windows. Prove you can pick between two pointers and the right sliding-window variant on unseen problems. Every problem is a variation on patterns taught on Days 8–13; if the pattern is not obvious in 3 minutes, write the brute force first and look for the bottleneck.

**End-of-day checkpoint:**
- [ ] Did I name the pattern for each problem within 3 minutes?
- [ ] Did I solve at least two of the three ⭐ problems independently?
- [ ] For every failed problem, did I write the missed insight in my mistake log?
- [ ] Did I re-attempt each failed problem the next day without notes?
- [ ] Which pattern from this week do I trust the least?

**Completion rule:** Complete when the timed test was taken honestly, the post-mortem for every failed problem is written, and each Tier A weak spot is logged for the weekly remediation checklist. Optional problems never block progress.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

#### Week 2 review and assessment

- **Timed test:** Day 14 (Mon, Nov 2). Scope is limited to patterns taught in Days 8–13.
- **Revision plan:** D+1 / D+3 / D+7 tasks are already scheduled in each day's table. On Day 14 also re-solve this week's failed Tier A problems from the mistake log.
- **Weak-topic remediation checklist** (tick only after re-solving without hints):
  - [ ] Converging pointers
  - [ ] Read/write pointers
  - [ ] Fixed window
  - [ ] Variable window (longest / shortest)
  - [ ] Window counting trick and deque
- **Weekly self-assessment** (rate confidence 1–5 after the test):

  | Pattern | Confidence (1–5) | Needs reattempt? |
  |---|:---:|:---:|
  | Converging pointers | | |
  | Read/write pointers | | |
  | Fixed window | | |
  | Variable window (longest / shortest) | | |
  | Window counting trick and deque | | |

- **Weekly reflection:** What pattern did I confuse with another? Which mistake repeated? Which 3 problems will I re-solve first next week?

---

<a id="week-3"></a>
## Week 3 — Linked Lists, Stacks and Queues

📅 Tue, Nov 3 → Mon, Nov 9 · ⬅️ [Week 2](#week-2) · ➡️ [Week 4](#week-4)

**Weekly objective:** Master pointer manipulation, then use stacks and monotonic stacks for matching and next-greater queries.  
**Prerequisite knowledge:** Weeks 1–2; comfort with pointers and structs.  
**Pattern coverage:** List reversal and merging · Fast/slow pointers · Deep copy and k-way merge · Stack matching · Monotonic stack

| Day | Date | Topic | ⭐ A | Planned items | Time |
|---|---|---|---:|---:|---|
| [15](#day-15) | Tue, Nov 3 | Linked List Fundamentals | 4 | 11 | ≈ 3 h 10 min |
| [16](#day-16) | Wed, Nov 4 | Fast/Slow Pointers and Cycle Detection | 4 | 11 | ≈ 4 h 33 min |
| [17](#day-17) | Thu, Nov 5 | Advanced Linked Lists | 4 | 10 | ≈ 4 h 51 min |
| [18](#day-18) | Fri, Nov 6 | Stacks and Queues Fundamentals | 4 | 12 | ≈ 4 h 10 min |
| [19](#day-19) | Sat, Nov 7 | Monotonic Stack: Next Greater and Smaller | 4 | 12 | ≈ 4 h 58 min |
| [20](#day-20) | Sun, Nov 8 | Histogram, Rectangles and Parentheses Depth | 3 | 12 | ≈ 6 h 08 min |
| [21](#day-21) | Mon, Nov 9 | Week 3 Test — Lists, Stacks and Queues | 3 | 8 | ≈ 3 h 45 min |

**Weekly targets:** ⭐ Tier A **26** problems · 📘 Tier B **28** · 🚀 Tier C **2** (all authored this week, distinct) · 🔁 **25** revision tasks. Tier B/C are optional; only Tier A counts toward the weekly must-solve target.

<a id="day-15"></a>
### Day 15 — Linked List Fundamentals

> 📅 Tue, Nov 3 · Week 3 · ⏱ ≈ 3 h 10 min · 🔗 [Back to Week 3](#week-3)

**Learning objective:** Reverse, merge and inspect linked lists with confidence, using a dummy node to remove edge cases.  
**Pattern:** Pointer rewiring, dummy node  
**Prerequisites:** Day 01 (arrays), basic pointers  
**Planned workload:** **11** items = 8 🆕 new + 3 🔁 revision · ⭐ 4 Tier A must-solve · ➕ 0 optional (not counted) · ⏱ ≈ 3 h 10 min

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) | 🟢 EASY | ⭐ A | Iterative reversal | 🆕 NEW |
| 2 | [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) | 🟢 EASY | ⭐ A | Dummy node merge | 🆕 NEW |
| 3 | [Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/) | 🟢 EASY | ⭐ A | Slow/fast pointers | 🆕 NEW |
| 4 | [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/) | 🟢 EASY | ⭐ A | Middle + reverse half | 🆕 NEW |
| 5 | [Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/) | 🟢 EASY | 📘 B | Dummy node | 🆕 NEW |
| 6 | [Delete Node in a Linked List](https://leetcode.com/problems/delete-node-in-a-linked-list/) | 🟡 MEDIUM | 📘 B | Value copy trick | 🆕 NEW |
| 7 | [Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/) | 🟢 EASY | 📘 B | Two-pointer switch | 🆕 NEW |
| 8 | [Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/) | 🟢 EASY | 📘 B | Single pass | 🆕 NEW |
| 9 | [Longest Substring Of All Vowels in Order](https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/) | 🟡 MEDIUM | ⭐ A | Variable window | 🔁 REVISION |
| 10 | [Subarray Product Less Than K](https://leetcode.com/problems/subarray-product-less-than-k/) | 🟡 MEDIUM | ⭐ A | Count windows ending at r | 🔁 REVISION |
| 11 | [Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) | 🟡 MEDIUM | ⭐ A | Converging pointers | 🔁 REVISION |

**⭐ Must solve (Tier A):**
- [ ] [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) — EASY
- [ ] [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) — EASY
- [ ] [Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/) — EASY
- [ ] [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/) — EASY

**📘 Reinforcement (Tier B):** [Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/) · [Delete Node in a Linked List](https://leetcode.com/problems/delete-node-in-a-linked-list/) · [Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/) · [Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)

**🔁 Revision tasks:**
- [ ] [Longest Substring Of All Vowels in Order](https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Subarray Product Less Than K](https://leetcode.com/problems/subarray-product-less-than-k/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'in-place', 'merge', 'reverse', 'middle'. Iterative reversal keeps prev/cur/next; invariant: everything before cur is already reversed. A dummy head removes the special case for the first node. Slow/fast pointers find the middle (slow ends at the middle or second middle). Always draw boxes and arrows. Time O(n), space O(1).

**Dry-run exercise:** Dry-run Reverse Linked List on 1→2→3→null, redrawing the arrows after each iteration.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Can I write iterative reversal from memory and explain every pointer assignment?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-16"></a>
### Day 16 — Fast/Slow Pointers and Cycle Detection

> 📅 Wed, Nov 4 · Week 3 · ⏱ ≈ 4 h 33 min · 🔗 [Back to Week 3](#week-3)

**Learning objective:** Detect and locate cycles, find the n-th node from the end, and rearrange lists with pointer gaps.  
**Pattern:** Fast/slow pointers, gap pointers  
**Prerequisites:** Day 15  
**Planned workload:** **11** items = 7 🆕 new + 4 🔁 revision · ⭐ 4 Tier A must-solve · ➕ 0 optional (not counted) · ⏱ ≈ 4 h 33 min

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) | 🟢 EASY | ⭐ A | Floyd cycle detection | 🆕 NEW |
| 2 | [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/) | 🟡 MEDIUM | ⭐ A | Floyd entry point | 🆕 NEW |
| 3 | [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) | 🟡 MEDIUM | ⭐ A | Gap pointers | 🆕 NEW |
| 4 | [Reorder List](https://leetcode.com/problems/reorder-list/) | 🟡 MEDIUM | ⭐ A | Middle + reverse + merge | 🆕 NEW |
| 5 | [Odd Even Linked List](https://leetcode.com/problems/odd-even-linked-list/) | 🟡 MEDIUM | 📘 B | Two chains | 🆕 NEW |
| 6 | [Rotate List](https://leetcode.com/problems/rotate-list/) | 🟡 MEDIUM | 📘 B | Length + relink | 🆕 NEW |
| 7 | [Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/) | 🟡 MEDIUM | 📘 B | Dummy + pair swap | 🆕 NEW |
| 8 | [Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/) | 🟡 MEDIUM | ⭐ A | Floyd cycle on indices | 🔁 REVISION |
| 9 | [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/) | 🟢 EASY | ⭐ A | Middle + reverse half | 🔁 REVISION |
| 10 | [Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers/) | 🔴 HARD | ⭐ A | atMost(k) - atMost(k-1) | 🔁 REVISION |
| 11 | [Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/) | 🟡 MEDIUM | ⭐ A | Write pointer with k=2 | 🔁 REVISION |

**⭐ Must solve (Tier A):**
- [ ] [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) — EASY
- [ ] [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/) — MEDIUM
- [ ] [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) — MEDIUM
- [ ] [Reorder List](https://leetcode.com/problems/reorder-list/) — MEDIUM

**📘 Reinforcement (Tier B):** [Odd Even Linked List](https://leetcode.com/problems/odd-even-linked-list/) · [Rotate List](https://leetcode.com/problems/rotate-list/) · [Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/)

**🔁 Revision tasks:**
- [ ] [Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/) — Re-solve using the Floyd cycle idea
- [ ] [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'cycle', 'n-th from end', 'reorder'. Floyd: slow moves 1, fast moves 2; they meet iff a cycle exists. To find the entry, reset one pointer to head and move both by 1. Remove Nth From End: advance the lead pointer n steps, then move both. Reorder List = find middle + reverse second half + interleave. Time O(n), space O(1).

**Dry-run exercise:** Dry-run Linked List Cycle II on a list with a cycle starting at node 3 and show the entry-finding phase.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Why does resetting one pointer to the head find the cycle start?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-17"></a>
### Day 17 — Advanced Linked Lists

> 📅 Thu, Nov 5 · Week 3 · ⏱ ≈ 4 h 51 min · 🔗 [Back to Week 3](#week-3)

**Learning objective:** Combine reversal, merging and hashing/interleaving to solve multi-step list problems.  
**Pattern:** Reversal with sublists, deep copy, k-way merge  
**Prerequisites:** Day 15–16  
**Planned workload:** **10** items = 7 🆕 new + 3 🔁 revision · ⭐ 4 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 4 h 51 min (+≈ 0 h 45 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/) | 🟡 MEDIUM | ⭐ A | Carry simulation | 🆕 NEW |
| 2 | [Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/) | 🟡 MEDIUM | ⭐ A | Hash map / interleave | 🆕 NEW |
| 3 | [Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/) | 🟡 MEDIUM | ⭐ A | Segment reversal | 🆕 NEW |
| 4 | [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) | 🔴 HARD | ⭐ A | Divide and conquer merge | 🆕 NEW |
| 5 | [Partition List](https://leetcode.com/problems/partition-list/) | 🟡 MEDIUM | 📘 B | Two dummy lists | 🆕 NEW |
| 6 | [Add Two Numbers II](https://leetcode.com/problems/add-two-numbers-ii/) | 🟡 MEDIUM | 📘 B | Stack / reverse | 🆕 NEW |
| 7 | [Sort List](https://leetcode.com/problems/sort-list/) | 🟡 MEDIUM | 📘 B | Merge sort on list | 🆕 NEW |
| 8 | [Reorder List](https://leetcode.com/problems/reorder-list/) | 🟡 MEDIUM | ⭐ A | Middle + reverse + merge | 🔁 REVISION |
| 9 | [Maximum Number of Occurrences of a Substring](https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/) | 🟡 MEDIUM | ⭐ A | Fixed window + counts | 🔁 REVISION |
| 10 | [Permutation in String](https://leetcode.com/problems/permutation-in-string/) | 🟡 MEDIUM | ⭐ A | Frequency window | 🔁 REVISION |
| 11 | [Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/) | 🔴 HARD | 🚀 C | Group reversal | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/) — MEDIUM
- [ ] [Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/) — MEDIUM
- [ ] [Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/) — MEDIUM
- [ ] [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) — HARD

**📘 Reinforcement (Tier B):** [Partition List](https://leetcode.com/problems/partition-list/) · [Add Two Numbers II](https://leetcode.com/problems/add-two-numbers-ii/) · [Sort List](https://leetcode.com/problems/sort-list/)

**🚀 Stretch (Tier C, never mandatory):** [Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/)

**🔁 Revision tasks:**
- [ ] [Reorder List](https://leetcode.com/problems/reorder-list/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Maximum Number of Occurrences of a Substring](https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Permutation in String](https://leetcode.com/problems/permutation-in-string/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'add numbers as lists', 'deep copy with random pointer', 'merge k lists', 'reverse a segment'. Add Two Numbers: carry loop over both lists. Copy List with Random Pointer: hash old→new or interleave copies (O(1) space). Reverse Linked List II: walk to the segment, reverse with a counter, reconnect both ends. Merge k Lists: divide and conquer (O(N log k)); a heap version comes in Week 6.

**Dry-run exercise:** Dry-run Copy List with Random Pointer using the interleaving technique on a 3-node list.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Can I explain the three-step interleaving copy aloud?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-18"></a>
### Day 18 — Stacks and Queues Fundamentals

> 📅 Fri, Nov 6 · Week 3 · ⏱ ≈ 4 h 10 min · 🔗 [Back to Week 3](#week-3)

**Learning objective:** Use a stack for matching and nesting, and implement queues/stacks from each other.  
**Pattern:** Stack (LIFO), queue (FIFO), simulation  
**Prerequisites:** None  
**Planned workload:** **12** items = 9 🆕 new + 3 🔁 revision · ⭐ 4 Tier A must-solve · ➕ 2 optional (not counted) · ⏱ ≈ 4 h 10 min (+≈ 0 h 56 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) | 🟢 EASY | ⭐ A | Stack matching | 🆕 NEW |
| 2 | [Min Stack](https://leetcode.com/problems/min-stack/) | 🟡 MEDIUM | ⭐ A | Stack with running min | 🆕 NEW |
| 3 | [Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/) | 🟡 MEDIUM | ⭐ A | Operand stack | 🆕 NEW |
| 4 | [Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/) | 🟢 EASY | ⭐ A | Two stacks | 🆕 NEW |
| 5 | [Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/) | 🟢 EASY | 📘 B | Queue rotation | 🆕 NEW |
| 6 | [Baseball Game](https://leetcode.com/problems/baseball-game/) | 🟢 EASY | 📘 B | Stack simulation | 🆕 NEW |
| 7 | [Remove All Adjacent Duplicates In String](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/) | 🟢 EASY | 📘 B | Stack | 🆕 NEW |
| 8 | [Simplify Path](https://leetcode.com/problems/simplify-path/) | 🟡 MEDIUM | 📘 B | Stack of segments | 🆕 NEW |
| 9 | [Decode String](https://leetcode.com/problems/decode-string/) | 🟡 MEDIUM | 📘 B | Stack of (count, string) | 🆕 NEW |
| 10 | [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) | 🔴 HARD | ⭐ A | Divide and conquer merge | 🔁 REVISION |
| 11 | [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) | 🟢 EASY | ⭐ A | Dummy node merge | 🔁 REVISION |
| 12 | [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | 🟡 MEDIUM | ⭐ A | Variable window + set/map | 🔁 REVISION |
| 13 | [Design Circular Queue](https://leetcode.com/problems/design-circular-queue/) | 🟡 MEDIUM | 📘 B | Array + head/tail | ➕ OPTIONAL |
| 14 | [Basic Calculator II](https://leetcode.com/problems/basic-calculator-ii/) | 🟡 MEDIUM | 📘 B | Stack with last operator | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) — EASY
- [ ] [Min Stack](https://leetcode.com/problems/min-stack/) — MEDIUM
- [ ] [Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/) — MEDIUM
- [ ] [Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/) — EASY

**📘 Reinforcement (Tier B):** [Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/) · [Baseball Game](https://leetcode.com/problems/baseball-game/) · [Remove All Adjacent Duplicates In String](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/) · [Simplify Path](https://leetcode.com/problems/simplify-path/) · [Decode String](https://leetcode.com/problems/decode-string/) · [Design Circular Queue](https://leetcode.com/problems/design-circular-queue/) ➕ · [Basic Calculator II](https://leetcode.com/problems/basic-calculator-ii/) ➕

**🔁 Revision tasks:**
- [ ] [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'matching brackets', 'most recent unmatched', 'undo', 'evaluate expression'. Push openers, pop on closers; the stack is empty at the end iff balanced. Min Stack stores (value, currentMin) pairs. Implement Queue using Stacks: amortised O(1) with an input and output stack. Decode String uses a stack of (count, prefix).

**Dry-run exercise:** Dry-run Decode String on '3[a2[c]]' showing the stack contents at every bracket.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] What does the stack's top represent at each step of Valid Parentheses?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-19"></a>
### Day 19 — Monotonic Stack: Next Greater and Smaller

> 📅 Sat, Nov 7 · Week 3 · ⏱ ≈ 4 h 58 min · 🔗 [Back to Week 3](#week-3)

**Learning objective:** Answer 'next greater/smaller element' queries for all indices in O(n) using a monotonic stack.  
**Pattern:** Monotonic stack  
**Prerequisites:** Day 18  
**Planned workload:** **12** items = 9 🆕 new + 3 🔁 revision · ⭐ 4 Tier A must-solve · ➕ 0 optional (not counted) · ⏱ ≈ 4 h 58 min

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) | 🟡 MEDIUM | ⭐ A | Decreasing stack | 🆕 NEW |
| 2 | [Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/) | 🟢 EASY | ⭐ A | Stack + hash map | 🆕 NEW |
| 3 | [Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/) | 🟡 MEDIUM | ⭐ A | Circular stack (2n) | 🆕 NEW |
| 4 | [Online Stock Span](https://leetcode.com/problems/online-stock-span/) | 🟡 MEDIUM | ⭐ A | Stack of (price, span) | 🆕 NEW |
| 5 | [Remove K Digits](https://leetcode.com/problems/remove-k-digits/) | 🟡 MEDIUM | 📘 B | Greedy monotonic stack | 🆕 NEW |
| 6 | [Asteroid Collision](https://leetcode.com/problems/asteroid-collision/) | 🟡 MEDIUM | 📘 B | Stack simulation | 🆕 NEW |
| 7 | [Remove Duplicate Letters](https://leetcode.com/problems/remove-duplicate-letters/) | 🟡 MEDIUM | 📘 B | Monotonic stack + last index | 🆕 NEW |
| 8 | [Final Prices With a Special Discount in a Shop](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/) | 🟢 EASY | 📘 B | Next smaller | 🆕 NEW |
| 9 | [Car Fleet](https://leetcode.com/problems/car-fleet/) | 🟡 MEDIUM | 📘 B | Sort + stack | 🆕 NEW |
| 10 | [Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/) | 🟢 EASY | ⭐ A | Two stacks | 🔁 REVISION |
| 11 | [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) | 🟡 MEDIUM | ⭐ A | Gap pointers | 🔁 REVISION |
| 12 | [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) | 🟡 MEDIUM | ⭐ A | Shrink while valid | 🔁 REVISION |

**⭐ Must solve (Tier A):**
- [ ] [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) — MEDIUM
- [ ] [Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/) — EASY
- [ ] [Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/) — MEDIUM
- [ ] [Online Stock Span](https://leetcode.com/problems/online-stock-span/) — MEDIUM

**📘 Reinforcement (Tier B):** [Remove K Digits](https://leetcode.com/problems/remove-k-digits/) · [Asteroid Collision](https://leetcode.com/problems/asteroid-collision/) · [Remove Duplicate Letters](https://leetcode.com/problems/remove-duplicate-letters/) · [Final Prices With a Special Discount in a Shop](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/) · [Car Fleet](https://leetcode.com/problems/car-fleet/)

**🔁 Revision tasks:**
- [ ] [Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'next greater', 'next warmer day', 'span', 'remove digits to minimise'. Keep indices on a stack with monotone values; when a new element violates monotonicity, pop and resolve those indices. Each index is pushed and popped once: O(n). Decreasing stack → next greater; increasing stack → next smaller. For circular arrays iterate 2n.

**Dry-run exercise:** Dry-run Daily Temperatures on [73,74,75,71,69,72,76,73] and list the stack after each day.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Which monotonic order (increasing/decreasing) do I need for 'next greater'?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-20"></a>
### Day 20 — Histogram, Rectangles and Parentheses Depth

> 📅 Sun, Nov 8 · Week 3 · ⏱ ≈ 6 h 08 min · 🔗 [Back to Week 3](#week-3)

**Learning objective:** Compute largest rectangles and contribution counts by finding each element's left and right boundaries.  
**Pattern:** Monotonic stack (areas, contribution)  
**Prerequisites:** Day 19  
**Planned workload:** **12** items = 8 🆕 new + 4 🔁 revision · ⭐ 3 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 6 h 08 min (+≈ 0 h 45 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/) | 🔴 HARD | ⭐ A | Monotonic stack areas | 🆕 NEW |
| 2 | [Sum of Subarray Minimums](https://leetcode.com/problems/sum-of-subarray-minimums/) | 🟡 MEDIUM | ⭐ A | Contribution technique | 🆕 NEW |
| 3 | [Minimum Add to Make Parentheses Valid](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/) | 🟡 MEDIUM | ⭐ A | Balance counter | 🆕 NEW |
| 4 | [Valid Parenthesis String](https://leetcode.com/problems/valid-parenthesis-string/) | 🟡 MEDIUM | 📘 B | Range of open counts | 🆕 NEW |
| 5 | [Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle/) | 🔴 HARD | 📘 B | Histogram per row | 🆕 NEW |
| 6 | [132 Pattern](https://leetcode.com/problems/132-pattern/) | 🟡 MEDIUM | 📘 B | Monotonic stack from right | 🆕 NEW |
| 7 | [Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses/) | 🔴 HARD | 📘 B | Stack of indices | 🆕 NEW |
| 8 | [Maximum Width Ramp](https://leetcode.com/problems/maximum-width-ramp/) | 🟡 MEDIUM | 📘 B | Monotonic stack | 🆕 NEW |
| 9 | [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) | 🔴 HARD | ⭐ A | Two pointers with maxima | 🔁 REVISION |
| 10 | [Online Stock Span](https://leetcode.com/problems/online-stock-span/) | 🟡 MEDIUM | ⭐ A | Stack of (price, span) | 🔁 REVISION |
| 11 | [Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/) | 🟡 MEDIUM | ⭐ A | Hash map / interleave | 🔁 REVISION |
| 12 | [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/) | 🔴 HARD | ⭐ A | Monotonic deque | 🔁 REVISION |
| 13 | [Basic Calculator](https://leetcode.com/problems/basic-calculator/) | 🔴 HARD | 🚀 C | Stack with signs | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/) — HARD
- [ ] [Sum of Subarray Minimums](https://leetcode.com/problems/sum-of-subarray-minimums/) — MEDIUM
- [ ] [Minimum Add to Make Parentheses Valid](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/) — MEDIUM

**📘 Reinforcement (Tier B):** [Valid Parenthesis String](https://leetcode.com/problems/valid-parenthesis-string/) · [Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle/) · [132 Pattern](https://leetcode.com/problems/132-pattern/) · [Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses/) · [Maximum Width Ramp](https://leetcode.com/problems/maximum-width-ramp/)

**🚀 Stretch (Tier C, never mandatory):** [Basic Calculator](https://leetcode.com/problems/basic-calculator/)

**🔁 Revision tasks:**
- [ ] [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) — Re-solve using a monotonic stack instead of two pointers
- [ ] [Online Stock Span](https://leetcode.com/problems/online-stock-span/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'largest rectangle', 'sum of subarray minimums', 'longest valid parentheses'. For each bar find the previous smaller and next smaller index; width = right-left-1, area = h*width. A sentinel bar of height 0 flushes the stack. Contribution technique: element i is the minimum of (i-left)*(right-i) subarrays. Time O(n).

**Dry-run exercise:** Dry-run Largest Rectangle in Histogram on [2,1,5,6,2,3], showing the stack and each popped area.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Can I explain why each bar is popped exactly once?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-21"></a>
### Day 21 — Week 3 Test — Lists, Stacks and Queues

> 📅 Mon, Nov 9 · Week 3 · ⏱ ≈ 3 h 45 min · 🔗 [Back to Week 3](#week-3)

**Learning objective:** Solve unseen list and stack problems under time pressure.  
**Pattern:** Mixed: list manipulation, stack matching, monotonic stack  
**Prerequisites:** Day 15–20  
**Planned workload:** **8** items = 3 🆕 new + 5 🔁 revision · ⭐ 3 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 3 h 45 min (+≈ 0 h 28 min if you attempt the optional items)

> [!NOTE]
> Planned load is below 10 items on purpose: a timed test plus a structured review replaces a normal question set.

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/) | 🟡 MEDIUM | ⭐ A | Dummy node | 🆕 NEW |
| 2 | [Next Greater Node In Linked List](https://leetcode.com/problems/next-greater-node-in-linked-list/) | 🟡 MEDIUM | ⭐ A | Monotonic stack on list | 🆕 NEW |
| 3 | [Score of Parentheses](https://leetcode.com/problems/score-of-parentheses/) | 🟡 MEDIUM | ⭐ A | Stack / depth | 🆕 NEW |
| 4 | [Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/) | 🟡 MEDIUM | ⭐ A | Operand stack | 🔁 REVISION |
| 5 | [Valid Triangle Number](https://leetcode.com/problems/valid-triangle-number/) | 🟡 MEDIUM | ⭐ A | Sort + two pointers | 🔁 REVISION |
| 6 | [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/) | 🟡 MEDIUM | ⭐ A | Floyd entry point | 🔁 REVISION |
| 7 | [Min Stack](https://leetcode.com/problems/min-stack/) | 🟡 MEDIUM | ⭐ A | Stack with running min | 🔁 REVISION |
| 8 | [Minimum Add to Make Parentheses Valid](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/) | 🟡 MEDIUM | ⭐ A | Balance counter | 🔁 REVISION |
| 9 | [Maximum Subarray Min-Product](https://leetcode.com/problems/maximum-subarray-min-product/) | 🟡 MEDIUM | 📘 B | Prefix sums + monotonic stack | ➕ OPTIONAL |

**⏱ Timed test protocol:** 90 minutes · no hints · no solution lookup · 30 min cap per problem. Attempt the ⭐ problems first, then the optional one if time remains. After the clock stops, spend 45 minutes on the post-mortem (see the review below the week).

**⭐ Must solve (Tier A):**
- [ ] [Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/) — MEDIUM
- [ ] [Next Greater Node In Linked List](https://leetcode.com/problems/next-greater-node-in-linked-list/) — MEDIUM
- [ ] [Score of Parentheses](https://leetcode.com/problems/score-of-parentheses/) — MEDIUM

**📘 Reinforcement (Tier B):** [Maximum Subarray Min-Product](https://leetcode.com/problems/maximum-subarray-min-product/) ➕

**🔁 Revision tasks:**
- [ ] [Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Valid Triangle Number](https://leetcode.com/problems/valid-triangle-number/) — Re-solve under a 25-min timer, then compare with your notes
- [ ] [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/) — Weekly review: re-solve (prioritise anything you failed this week)
- [ ] [Min Stack](https://leetcode.com/problems/min-stack/) — Weekly review: re-solve (prioritise anything you failed this week)
- [ ] [Minimum Add to Make Parentheses Valid](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/) — Weekly review: re-solve (prioritise anything you failed this week)

**Scope:** Mixed: list manipulation, stack matching, monotonic stack. Solve unseen list and stack problems under time pressure. Every problem is a variation on patterns taught on Days 15–20; if the pattern is not obvious in 3 minutes, write the brute force first and look for the bottleneck.

**End-of-day checkpoint:**
- [ ] Did I name the pattern for each problem within 3 minutes?
- [ ] Did I solve at least two of the three ⭐ problems independently?
- [ ] For every failed problem, did I write the missed insight in my mistake log?
- [ ] Did I re-attempt each failed problem the next day without notes?
- [ ] Which pattern from this week do I trust the least?

**Completion rule:** Complete when the timed test was taken honestly, the post-mortem for every failed problem is written, and each Tier A weak spot is logged for the weekly remediation checklist. Optional problems never block progress.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

#### Week 3 review and assessment

- **Timed test:** Day 21 (Mon, Nov 9). Scope is limited to patterns taught in Days 15–20.
- **Revision plan:** D+1 / D+3 / D+7 tasks are already scheduled in each day's table. On Day 21 also re-solve this week's failed Tier A problems from the mistake log.
- **Weak-topic remediation checklist** (tick only after re-solving without hints):
  - [ ] List reversal and merging
  - [ ] Fast/slow pointers
  - [ ] Deep copy and k-way merge
  - [ ] Stack matching
  - [ ] Monotonic stack
- **Weekly self-assessment** (rate confidence 1–5 after the test):

  | Pattern | Confidence (1–5) | Needs reattempt? |
  |---|:---:|:---:|
  | List reversal and merging | | |
  | Fast/slow pointers | | |
  | Deep copy and k-way merge | | |
  | Stack matching | | |
  | Monotonic stack | | |

- **Weekly reflection:** What pattern did I confuse with another? Which mistake repeated? Which 3 problems will I re-solve first next week?

---

<a id="week-4"></a>
## Week 4 — Binary Search, Recursion and Backtracking

📅 Tue, Nov 10 → Mon, Nov 16 · ⬅️ [Week 3](#week-3) · ➡️ [Week 5](#week-5)

**Weekly objective:** Learn a precise binary-search template, binary search on the answer, and systematic recursive search.  
**Prerequisite knowledge:** Weeks 1–3; recursion comfort is built on Day 25.  
**Pattern coverage:** Binary search templates · Rotated arrays and boundaries · Binary search on answer · Subsets / combinations · Permutations and pruning

| Day | Date | Topic | ⭐ A | Planned items | Time |
|---|---|---|---:|---:|---|
| [22](#day-22) | Tue, Nov 10 | Binary Search Fundamentals | 5 | 12 | ≈ 3 h 22 min |
| [23](#day-23) | Wed, Nov 11 | Boundaries, Rotated Arrays and Peaks | 4 | 12 | ≈ 5 h 30 min |
| [24](#day-24) | Thu, Nov 12 | Binary Search on the Answer | 3 | 11 | ≈ 5 h 02 min |
| [25](#day-25) | Fri, Nov 13 | Recursion and Subset Backtracking | 5 | 13 | ≈ 5 h 26 min |
| [26](#day-26) | Sat, Nov 14 | Permutations and Generating Valid Strings | 3 | 11 | ≈ 4 h 46 min |
| [27](#day-27) | Sun, Nov 15 | Constraint-Based Backtracking on Grids and Sets | 3 | 9 | ≈ 4 h 06 min |
| [28](#day-28) | Mon, Nov 16 | Week 4 Test — Binary Search and Backtracking | 3 | 8 | ≈ 3 h 45 min |

**Weekly targets:** ⭐ Tier A **26** problems · 📘 Tier B **29** · 🚀 Tier C **5** (all authored this week, distinct) · 🔁 **23** revision tasks. Tier B/C are optional; only Tier A counts toward the weekly must-solve target.

<a id="day-22"></a>
### Day 22 — Binary Search Fundamentals

> 📅 Tue, Nov 10 · Week 4 · ⏱ ≈ 3 h 22 min · 🔗 [Back to Week 4](#week-4)

**Learning objective:** Write a bug-free binary search and reason about boundaries, mid computation and termination.  
**Pattern:** Binary search on sorted data  
**Prerequisites:** Day 01 (arrays)  
**Planned workload:** **12** items = 9 🆕 new + 3 🔁 revision · ⭐ 5 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 3 h 22 min (+≈ 0 h 28 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Binary Search](https://leetcode.com/problems/binary-search/) | 🟢 EASY | ⭐ A | Classic binary search | 🆕 NEW |
| 2 | [Search Insert Position](https://leetcode.com/problems/search-insert-position/) | 🟢 EASY | ⭐ A | Lower bound | 🆕 NEW |
| 3 | [Sqrt(x)](https://leetcode.com/problems/sqrtx/) | 🟢 EASY | ⭐ A | Search on answer space | 🆕 NEW |
| 4 | [First Bad Version](https://leetcode.com/problems/first-bad-version/) | 🟢 EASY | ⭐ A | First true boundary | 🆕 NEW |
| 5 | [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/) | 🟡 MEDIUM | ⭐ A | Flattened index | 🆕 NEW |
| 6 | [Guess Number Higher or Lower](https://leetcode.com/problems/guess-number-higher-or-lower/) | 🟢 EASY | 📘 B | Binary search | 🆕 NEW |
| 7 | [Valid Perfect Square](https://leetcode.com/problems/valid-perfect-square/) | 🟢 EASY | 📘 B | Search on answer space | 🆕 NEW |
| 8 | [Find Smallest Letter Greater Than Target](https://leetcode.com/problems/find-smallest-letter-greater-than-target/) | 🟢 EASY | 📘 B | Upper bound | 🆕 NEW |
| 9 | [Arranging Coins](https://leetcode.com/problems/arranging-coins/) | 🟢 EASY | 📘 B | Search on answer space | 🆕 NEW |
| 10 | [Score of Parentheses](https://leetcode.com/problems/score-of-parentheses/) | 🟡 MEDIUM | ⭐ A | Stack / depth | 🔁 REVISION |
| 11 | [Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/) | 🟡 MEDIUM | ⭐ A | Circular stack (2n) | 🔁 REVISION |
| 12 | [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) | 🟢 EASY | ⭐ A | Iterative reversal | 🔁 REVISION |
| 13 | [Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii/) | 🟡 MEDIUM | 📘 B | Staircase search | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Binary Search](https://leetcode.com/problems/binary-search/) — EASY
- [ ] [Search Insert Position](https://leetcode.com/problems/search-insert-position/) — EASY
- [ ] [Sqrt(x)](https://leetcode.com/problems/sqrtx/) — EASY
- [ ] [First Bad Version](https://leetcode.com/problems/first-bad-version/) — EASY
- [ ] [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/) — MEDIUM

**📘 Reinforcement (Tier B):** [Guess Number Higher or Lower](https://leetcode.com/problems/guess-number-higher-or-lower/) · [Valid Perfect Square](https://leetcode.com/problems/valid-perfect-square/) · [Find Smallest Letter Greater Than Target](https://leetcode.com/problems/find-smallest-letter-greater-than-target/) · [Arranging Coins](https://leetcode.com/problems/arranging-coins/) · [Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii/) ➕

**🔁 Revision tasks:**
- [ ] [Score of Parentheses](https://leetcode.com/problems/score-of-parentheses/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: sorted data, 'find position', O(log n). Template: lo=0, hi=n-1; while lo<=hi: mid=lo+(hi-lo)/2; compare; move lo=mid+1 or hi=mid-1. Invariant: if the target exists, it lies in [lo,hi]. Use lo+(hi-lo)/2 to avoid overflow. For insert position return lo. Search a 2D Matrix treats the matrix as a flattened sorted array: row=mid/m, col=mid%m.

**Dry-run exercise:** Dry-run Search Insert Position on [1,3,5,6] for target 2, writing lo, hi, mid each step.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Can I state the loop invariant and why the loop terminates?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-23"></a>
### Day 23 — Boundaries, Rotated Arrays and Peaks

> 📅 Wed, Nov 11 · Week 4 · ⏱ ≈ 5 h 30 min · 🔗 [Back to Week 4](#week-4)

**Learning objective:** Find first/last occurrences, search rotated arrays and locate peaks by deciding which half to discard.  
**Pattern:** Lower/upper bound, rotated search, peak finding  
**Prerequisites:** Day 22  
**Planned workload:** **12** items = 9 🆕 new + 3 🔁 revision · ⭐ 4 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 5 h 30 min (+≈ 0 h 45 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) | 🟡 MEDIUM | ⭐ A | Lower/upper bound | 🆕 NEW |
| 2 | [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) | 🟡 MEDIUM | ⭐ A | Sorted half test | 🆕 NEW |
| 3 | [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) | 🟡 MEDIUM | ⭐ A | Compare with right end | 🆕 NEW |
| 4 | [Find Peak Element](https://leetcode.com/problems/find-peak-element/) | 🟡 MEDIUM | ⭐ A | Follow the slope | 🆕 NEW |
| 5 | [Search in Rotated Sorted Array II](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/) | 🟡 MEDIUM | 📘 B | Rotated search with duplicates | 🆕 NEW |
| 6 | [Single Element in a Sorted Array](https://leetcode.com/problems/single-element-in-a-sorted-array/) | 🟡 MEDIUM | 📘 B | Index parity | 🆕 NEW |
| 7 | [Find K Closest Elements](https://leetcode.com/problems/find-k-closest-elements/) | 🟡 MEDIUM | 📘 B | Binary search on window start | 🆕 NEW |
| 8 | [Peak Index in a Mountain Array](https://leetcode.com/problems/peak-index-in-a-mountain-array/) | 🟡 MEDIUM | 📘 B | Follow the slope | 🆕 NEW |
| 9 | [Pow(x, n)](https://leetcode.com/problems/powx-n/) | 🟡 MEDIUM | 📘 B | Binary exponentiation | 🆕 NEW |
| 10 | [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/) | 🟡 MEDIUM | ⭐ A | Flattened index | 🔁 REVISION |
| 11 | [Sum of Subarray Minimums](https://leetcode.com/problems/sum-of-subarray-minimums/) | 🟡 MEDIUM | ⭐ A | Contribution technique | 🔁 REVISION |
| 12 | [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/) | 🟡 MEDIUM | ⭐ A | Floyd entry point | 🔁 REVISION |
| 13 | [Find Minimum in Rotated Sorted Array II](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/) | 🔴 HARD | 🚀 C | Rotated search with duplicates | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) — MEDIUM
- [ ] [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) — MEDIUM
- [ ] [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) — MEDIUM
- [ ] [Find Peak Element](https://leetcode.com/problems/find-peak-element/) — MEDIUM

**📘 Reinforcement (Tier B):** [Search in Rotated Sorted Array II](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/) · [Single Element in a Sorted Array](https://leetcode.com/problems/single-element-in-a-sorted-array/) · [Find K Closest Elements](https://leetcode.com/problems/find-k-closest-elements/) · [Peak Index in a Mountain Array](https://leetcode.com/problems/peak-index-in-a-mountain-array/) · [Pow(x, n)](https://leetcode.com/problems/powx-n/)

**🚀 Stretch (Tier C, never mandatory):** [Find Minimum in Rotated Sorted Array II](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/)

**🔁 Revision tasks:**
- [ ] [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Sum of Subarray Minimums](https://leetcode.com/problems/sum-of-subarray-minimums/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'first/last position', 'rotated sorted', 'peak'. Lower bound = first index with a[i] >= x; upper bound = first index with a[i] > x. In rotated arrays at least one half is sorted: test whether the target lies inside the sorted half. Peak finding compares a[mid] with a[mid+1] and follows the rising side. Time O(log n); duplicates can degrade to O(n).

**Dry-run exercise:** Dry-run Search in Rotated Sorted Array on [4,5,6,7,0,1,2], target 0, naming the sorted half each step.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] How do I know which half is sorted in a rotated array?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-24"></a>
### Day 24 — Binary Search on the Answer

> 📅 Thu, Nov 12 · Week 4 · ⏱ ≈ 5 h 02 min · 🔗 [Back to Week 4](#week-4)

**Learning objective:** Convert 'minimise the maximum' / 'smallest feasible value' problems into a monotone feasibility check.  
**Pattern:** Binary search on answer + feasibility check  
**Prerequisites:** Day 22–23  
**Planned workload:** **11** items = 8 🆕 new + 3 🔁 revision · ⭐ 3 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 5 h 02 min (+≈ 0 h 28 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) | 🟡 MEDIUM | ⭐ A | Binary search on answer | 🆕 NEW |
| 2 | [Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/) | 🟡 MEDIUM | ⭐ A | Binary search on answer | 🆕 NEW |
| 3 | [Minimum Number of Days to Make m Bouquets](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/) | 🟡 MEDIUM | ⭐ A | Binary search on answer | 🆕 NEW |
| 4 | [Find the Smallest Divisor Given a Threshold](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/) | 🟡 MEDIUM | 📘 B | Binary search on answer | 🆕 NEW |
| 5 | [Magnetic Force Between Two Balls](https://leetcode.com/problems/magnetic-force-between-two-balls/) | 🟡 MEDIUM | 📘 B | Maximise the minimum | 🆕 NEW |
| 6 | [Maximum Candies Allocated to K Children](https://leetcode.com/problems/maximum-candies-allocated-to-k-children/) | 🟡 MEDIUM | 📘 B | Binary search on answer | 🆕 NEW |
| 7 | [Minimized Maximum of Products Distributed to Any Store](https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/) | 🟡 MEDIUM | 📘 B | Minimise the maximum | 🆕 NEW |
| 8 | [Successful Pairs of Spells and Potions](https://leetcode.com/problems/successful-pairs-of-spells-and-potions/) | 🟡 MEDIUM | 📘 B | Sort + lower bound | 🆕 NEW |
| 9 | [Find Peak Element](https://leetcode.com/problems/find-peak-element/) | 🟡 MEDIUM | ⭐ A | Follow the slope | 🔁 REVISION |
| 10 | [Next Greater Node In Linked List](https://leetcode.com/problems/next-greater-node-in-linked-list/) | 🟡 MEDIUM | ⭐ A | Monotonic stack on list | 🔁 REVISION |
| 11 | [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/) | 🟡 MEDIUM | ⭐ A | Carry simulation | 🔁 REVISION |
| 12 | [Minimum Time to Complete Trips](https://leetcode.com/problems/minimum-time-to-complete-trips/) | 🟡 MEDIUM | 📘 B | Binary search on time | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) — MEDIUM
- [ ] [Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/) — MEDIUM
- [ ] [Minimum Number of Days to Make m Bouquets](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/) — MEDIUM

**📘 Reinforcement (Tier B):** [Find the Smallest Divisor Given a Threshold](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/) · [Magnetic Force Between Two Balls](https://leetcode.com/problems/magnetic-force-between-two-balls/) · [Maximum Candies Allocated to K Children](https://leetcode.com/problems/maximum-candies-allocated-to-k-children/) · [Minimized Maximum of Products Distributed to Any Store](https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/) · [Successful Pairs of Spells and Potions](https://leetcode.com/problems/successful-pairs-of-spells-and-potions/) · [Minimum Time to Complete Trips](https://leetcode.com/problems/minimum-time-to-complete-trips/) ➕

**🔁 Revision tasks:**
- [ ] [Find Peak Element](https://leetcode.com/problems/find-peak-element/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Next Greater Node In Linked List](https://leetcode.com/problems/next-greater-node-in-linked-list/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'minimum speed/capacity/days such that …', 'maximise the minimum'. Define feasible(x) that is monotone (false…false true…true). Search x in [lo,hi] and move toward the boundary. Cost O(log(range) × cost of check). Differs from searching sorted data: the 'array' is the implicit answer space. Pick tight bounds (e.g. max element to sum).

**Dry-run exercise:** Dry-run Koko Eating Bananas on [3,6,7,11], h=8, writing feasible(speed) for each mid.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Can I prove feasibility is monotone for Capacity To Ship Packages?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-25"></a>
### Day 25 — Recursion and Subset Backtracking

> 📅 Fri, Nov 13 · Week 4 · ⏱ ≈ 5 h 26 min · 🔗 [Back to Week 4](#week-4)

**Learning objective:** Model choices as a decision tree and generate subsets and combinations with a choose-explore-unchoose template.  
**Pattern:** Decision tree: include / exclude  
**Prerequisites:** None (recursion basics are taught today)  
**Planned workload:** **13** items = 10 🆕 new + 3 🔁 revision · ⭐ 5 Tier A must-solve · ➕ 0 optional (not counted) · ⏱ ≈ 5 h 26 min

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Subsets](https://leetcode.com/problems/subsets/) | 🟡 MEDIUM | ⭐ A | Include/exclude | 🆕 NEW |
| 2 | [Subsets II](https://leetcode.com/problems/subsets-ii/) | 🟡 MEDIUM | ⭐ A | Sort + skip duplicates | 🆕 NEW |
| 3 | [Combinations](https://leetcode.com/problems/combinations/) | 🟡 MEDIUM | ⭐ A | Backtracking with start index | 🆕 NEW |
| 4 | [Combination Sum](https://leetcode.com/problems/combination-sum/) | 🟡 MEDIUM | ⭐ A | Unbounded reuse | 🆕 NEW |
| 5 | [Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) | 🟡 MEDIUM | ⭐ A | Digit-by-digit backtracking | 🆕 NEW |
| 6 | [Fibonacci Number](https://leetcode.com/problems/fibonacci-number/) | 🟢 EASY | 📘 B | Recursion and memoisation preview | 🆕 NEW |
| 7 | [Combination Sum II](https://leetcode.com/problems/combination-sum-ii/) | 🟡 MEDIUM | 📘 B | Sort + skip duplicates | 🆕 NEW |
| 8 | [Combination Sum III](https://leetcode.com/problems/combination-sum-iii/) | 🟡 MEDIUM | 📘 B | Fixed size + sum | 🆕 NEW |
| 9 | [Letter Case Permutation](https://leetcode.com/problems/letter-case-permutation/) | 🟡 MEDIUM | 📘 B | Branch per letter | 🆕 NEW |
| 10 | [Sum of All Subset XOR Totals](https://leetcode.com/problems/sum-of-all-subset-xor-totals/) | 🟢 EASY | 📘 B | Subset enumeration | 🆕 NEW |
| 11 | [Minimum Number of Days to Make m Bouquets](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/) | 🟡 MEDIUM | ⭐ A | Binary search on answer | 🔁 REVISION |
| 12 | [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/) | 🟡 MEDIUM | ⭐ A | Flattened index | 🔁 REVISION |
| 13 | [Min Stack](https://leetcode.com/problems/min-stack/) | 🟡 MEDIUM | ⭐ A | Stack with running min | 🔁 REVISION |

**⭐ Must solve (Tier A):**
- [ ] [Subsets](https://leetcode.com/problems/subsets/) — MEDIUM
- [ ] [Subsets II](https://leetcode.com/problems/subsets-ii/) — MEDIUM
- [ ] [Combinations](https://leetcode.com/problems/combinations/) — MEDIUM
- [ ] [Combination Sum](https://leetcode.com/problems/combination-sum/) — MEDIUM
- [ ] [Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) — MEDIUM

**📘 Reinforcement (Tier B):** [Fibonacci Number](https://leetcode.com/problems/fibonacci-number/) · [Combination Sum II](https://leetcode.com/problems/combination-sum-ii/) · [Combination Sum III](https://leetcode.com/problems/combination-sum-iii/) · [Letter Case Permutation](https://leetcode.com/problems/letter-case-permutation/) · [Sum of All Subset XOR Totals](https://leetcode.com/problems/sum-of-all-subset-xor-totals/)

**🔁 Revision tasks:**
- [ ] [Minimum Number of Days to Make m Bouquets](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Min Stack](https://leetcode.com/problems/min-stack/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'all subsets', 'all combinations', 'generate all'. Template: path.push(x); recurse(i+1); path.pop(). Record the path at every node for subsets, or only when the size/sum condition is met. Duplicates: sort, then skip a[i]==a[i-1] when i>start. Time is output-sensitive (e.g. O(n·2ⁿ) for subsets). Draw the recursion tree before coding.

**Dry-run exercise:** Draw the recursion tree for Subsets on [1,2,3] and mark where each subset is recorded.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Why does 'i>start' (not 'i>0') avoid duplicate subsets?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-26"></a>
### Day 26 — Permutations and Generating Valid Strings

> 📅 Sat, Nov 14 · Week 4 · ⏱ ≈ 4 h 46 min · 🔗 [Back to Week 4](#week-4)

**Learning objective:** Generate permutations and constrained strings while pruning invalid branches early.  
**Pattern:** Backtracking with used[] / swaps, pruning  
**Prerequisites:** Day 25  
**Planned workload:** **11** items = 8 🆕 new + 3 🔁 revision · ⭐ 3 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 4 h 46 min (+≈ 0 h 45 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Permutations](https://leetcode.com/problems/permutations/) | 🟡 MEDIUM | ⭐ A | used[] backtracking | 🆕 NEW |
| 2 | [Permutations II](https://leetcode.com/problems/permutations-ii/) | 🟡 MEDIUM | ⭐ A | Skip duplicate branches | 🆕 NEW |
| 3 | [Generate Parentheses](https://leetcode.com/problems/generate-parentheses/) | 🟡 MEDIUM | ⭐ A | Pruned generation | 🆕 NEW |
| 4 | [Beautiful Arrangement](https://leetcode.com/problems/beautiful-arrangement/) | 🟡 MEDIUM | 📘 B | Backtracking with constraint | 🆕 NEW |
| 5 | [Letter Tile Possibilities](https://leetcode.com/problems/letter-tile-possibilities/) | 🟡 MEDIUM | 📘 B | Frequency backtracking | 🆕 NEW |
| 6 | [Gray Code](https://leetcode.com/problems/gray-code/) | 🟡 MEDIUM | 📘 B | Backtracking / bit formula | 🆕 NEW |
| 7 | [Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses/) | 🟡 MEDIUM | 📘 B | Segmented backtracking | 🆕 NEW |
| 8 | [Binary Watch](https://leetcode.com/problems/binary-watch/) | 🟢 EASY | 📘 B | Combination enumeration | 🆕 NEW |
| 9 | [Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) | 🟡 MEDIUM | ⭐ A | Digit-by-digit backtracking | 🔁 REVISION |
| 10 | [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) | 🟡 MEDIUM | ⭐ A | Sorted half test | 🔁 REVISION |
| 11 | [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) | 🟡 MEDIUM | ⭐ A | Decreasing stack | 🔁 REVISION |
| 12 | [Permutation Sequence](https://leetcode.com/problems/permutation-sequence/) | 🔴 HARD | 🚀 C | Factorial number system | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Permutations](https://leetcode.com/problems/permutations/) — MEDIUM
- [ ] [Permutations II](https://leetcode.com/problems/permutations-ii/) — MEDIUM
- [ ] [Generate Parentheses](https://leetcode.com/problems/generate-parentheses/) — MEDIUM

**📘 Reinforcement (Tier B):** [Beautiful Arrangement](https://leetcode.com/problems/beautiful-arrangement/) · [Letter Tile Possibilities](https://leetcode.com/problems/letter-tile-possibilities/) · [Gray Code](https://leetcode.com/problems/gray-code/) · [Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses/) · [Binary Watch](https://leetcode.com/problems/binary-watch/)

**🚀 Stretch (Tier C, never mandatory):** [Permutation Sequence](https://leetcode.com/problems/permutation-sequence/)

**🔁 Revision tasks:**
- [ ] [Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'all orderings', 'all valid strings of length n'. Permutations: used[] array or swap-in-place. Duplicates: sort and skip a[i]==a[i-1] when a[i-1] is unused. Generate Parentheses: add '(' if open<n, add ')' if close<open. Pruning turns a 2^(2n) search into a Catalan-sized one. State the branching factor and depth to bound complexity.

**Dry-run exercise:** Draw the Generate Parentheses decision tree for n=3 and count the leaves.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Can I state the pruning rule that guarantees only valid parentheses are generated?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-27"></a>
### Day 27 — Constraint-Based Backtracking on Grids and Sets

> 📅 Sun, Nov 15 · Week 4 · ⏱ ≈ 4 h 06 min · 🔗 [Back to Week 4](#week-4)

**Learning objective:** Search grids and partitions with a visited state and prune on constraint violation.  
**Pattern:** Backtracking with visited / bucket state  
**Prerequisites:** Day 25–26  
**Planned workload:** **9** items = 6 🆕 new + 3 🔁 revision · ⭐ 3 Tier A must-solve · ➕ 2 optional (not counted) · ⏱ ≈ 4 h 06 min (+≈ 1 h 30 min if you attempt the optional items)

> [!NOTE]
> Planned load is below 10 items on purpose: the concepts today are dense, so depth beats volume.

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Word Search](https://leetcode.com/problems/word-search/) | 🟡 MEDIUM | ⭐ A | Grid DFS backtracking | 🆕 NEW |
| 2 | [Matchsticks to Square](https://leetcode.com/problems/matchsticks-to-square/) | 🟡 MEDIUM | ⭐ A | Bucket backtracking | 🆕 NEW |
| 3 | [Maximum Length of a Concatenated String with Unique Characters](https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/) | 🟡 MEDIUM | ⭐ A | Bitmask backtracking | 🆕 NEW |
| 4 | [Partition to K Equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/) | 🟡 MEDIUM | 📘 B | Bucket backtracking | 🆕 NEW |
| 5 | [Split a String Into the Max Number of Unique Substrings](https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/) | 🟡 MEDIUM | 📘 B | Backtracking with set | 🆕 NEW |
| 6 | [The k-th Lexicographical String of All Happy Strings of Length n](https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/) | 🟡 MEDIUM | 📘 B | Ordered generation | 🆕 NEW |
| 7 | [Generate Parentheses](https://leetcode.com/problems/generate-parentheses/) | 🟡 MEDIUM | ⭐ A | Pruned generation | 🔁 REVISION |
| 8 | [Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/) | 🟡 MEDIUM | ⭐ A | Binary search on answer | 🔁 REVISION |
| 9 | [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/) | 🔴 HARD | ⭐ A | Monotonic stack areas | 🔁 REVISION |
| 10 | [Sudoku Solver](https://leetcode.com/problems/sudoku-solver/) | 🔴 HARD | 🚀 C | Constraint backtracking | ➕ OPTIONAL |
| 11 | [Unique Paths III](https://leetcode.com/problems/unique-paths-iii/) | 🔴 HARD | 🚀 C | Grid backtracking | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Word Search](https://leetcode.com/problems/word-search/) — MEDIUM
- [ ] [Matchsticks to Square](https://leetcode.com/problems/matchsticks-to-square/) — MEDIUM
- [ ] [Maximum Length of a Concatenated String with Unique Characters](https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/) — MEDIUM

**📘 Reinforcement (Tier B):** [Partition to K Equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/) · [Split a String Into the Max Number of Unique Substrings](https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/) · [The k-th Lexicographical String of All Happy Strings of Length n](https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/)

**🚀 Stretch (Tier C, never mandatory):** [Sudoku Solver](https://leetcode.com/problems/sudoku-solver/) · [Unique Paths III](https://leetcode.com/problems/unique-paths-iii/)

**🔁 Revision tasks:**
- [ ] [Generate Parentheses](https://leetcode.com/problems/generate-parentheses/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'does a path/word exist', 'partition into k groups'. Word Search: DFS from each cell, mark visited (temporarily overwrite), restore on return. Partition problems: sort descending and try each bucket, skipping equal states. Always undo changes. Worst-case exponential: state the bound and the pruning that makes it practical.

**Dry-run exercise:** Trace Word Search for 'ABCCED' on the standard 3×4 board, listing cells visited and un-visited.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] What state must be restored when a DFS branch fails?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-28"></a>
### Day 28 — Week 4 Test — Binary Search and Backtracking

> 📅 Mon, Nov 16 · Week 4 · ⏱ ≈ 3 h 45 min · 🔗 [Back to Week 4](#week-4)

**Learning objective:** Solve unseen binary-search and backtracking problems and pick the correct template.  
**Pattern:** Mixed: binary search variants, backtracking  
**Prerequisites:** Day 22–27  
**Planned workload:** **8** items = 3 🆕 new + 5 🔁 revision · ⭐ 3 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 3 h 45 min (+≈ 0 h 45 min if you attempt the optional items)

> [!NOTE]
> Planned load is below 10 items on purpose: a timed test plus a structured review replaces a normal question set.

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [H-Index II](https://leetcode.com/problems/h-index-ii/) | 🟡 MEDIUM | ⭐ A | Binary search on sorted counts | 🆕 NEW |
| 2 | [Maximum Value at a Given Index in a Bounded Array](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/) | 🟡 MEDIUM | ⭐ A | Binary search on answer | 🆕 NEW |
| 3 | [Increasing Subsequences](https://leetcode.com/problems/increasing-subsequences/) | 🟡 MEDIUM | ⭐ A | Backtracking with set per level | 🆕 NEW |
| 4 | [Subsets II](https://leetcode.com/problems/subsets-ii/) | 🟡 MEDIUM | ⭐ A | Sort + skip duplicates | 🔁 REVISION |
| 5 | [Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/) | 🟡 MEDIUM | ⭐ A | Dummy node | 🔁 REVISION |
| 6 | [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/) | 🟡 MEDIUM | ⭐ A | Flattened index | 🔁 REVISION |
| 7 | [Maximum Length of a Concatenated String with Unique Characters](https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/) | 🟡 MEDIUM | ⭐ A | Bitmask backtracking | 🔁 REVISION |
| 8 | [Find Peak Element](https://leetcode.com/problems/find-peak-element/) | 🟡 MEDIUM | ⭐ A | Follow the slope | 🔁 REVISION |
| 9 | [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/) | 🔴 HARD | 🚀 C | Partition binary search | ➕ OPTIONAL |

**⏱ Timed test protocol:** 90 minutes · no hints · no solution lookup · 30 min cap per problem. Attempt the ⭐ problems first, then the optional one if time remains. After the clock stops, spend 45 minutes on the post-mortem (see the review below the week).

**⭐ Must solve (Tier A):**
- [ ] [H-Index II](https://leetcode.com/problems/h-index-ii/) — MEDIUM
- [ ] [Maximum Value at a Given Index in a Bounded Array](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/) — MEDIUM
- [ ] [Increasing Subsequences](https://leetcode.com/problems/increasing-subsequences/) — MEDIUM

**🚀 Stretch (Tier C, never mandatory):** [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/)

**🔁 Revision tasks:**
- [ ] [Subsets II](https://leetcode.com/problems/subsets-ii/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/) — Re-solve under a 25-min timer, then compare with your notes
- [ ] [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/) — Weekly review: re-solve (prioritise anything you failed this week)
- [ ] [Maximum Length of a Concatenated String with Unique Characters](https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/) — Weekly review: re-solve (prioritise anything you failed this week)
- [ ] [Find Peak Element](https://leetcode.com/problems/find-peak-element/) — Weekly review: re-solve (prioritise anything you failed this week)

**Scope:** Mixed: binary search variants, backtracking. Solve unseen binary-search and backtracking problems and pick the correct template. Every problem is a variation on patterns taught on Days 22–27; if the pattern is not obvious in 3 minutes, write the brute force first and look for the bottleneck.

**End-of-day checkpoint:**
- [ ] Did I name the pattern for each problem within 3 minutes?
- [ ] Did I solve at least two of the three ⭐ problems independently?
- [ ] For every failed problem, did I write the missed insight in my mistake log?
- [ ] Did I re-attempt each failed problem the next day without notes?
- [ ] Which pattern from this week do I trust the least?

**Completion rule:** Complete when the timed test was taken honestly, the post-mortem for every failed problem is written, and each Tier A weak spot is logged for the weekly remediation checklist. Optional problems never block progress.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

#### Week 4 review and assessment

- **Timed test:** Day 28 (Mon, Nov 16). Scope is limited to patterns taught in Days 22–27.
- **Revision plan:** D+1 / D+3 / D+7 tasks are already scheduled in each day's table. On Day 28 also re-solve this week's failed Tier A problems from the mistake log.
- **Weak-topic remediation checklist** (tick only after re-solving without hints):
  - [ ] Binary search templates
  - [ ] Rotated arrays and boundaries
  - [ ] Binary search on answer
  - [ ] Subsets / combinations
  - [ ] Permutations and pruning
- **Weekly self-assessment** (rate confidence 1–5 after the test):

  | Pattern | Confidence (1–5) | Needs reattempt? |
  |---|:---:|:---:|
  | Binary search templates | | |
  | Rotated arrays and boundaries | | |
  | Binary search on answer | | |
  | Subsets / combinations | | |
  | Permutations and pruning | | |

- **Weekly reflection:** What pattern did I confuse with another? Which mistake repeated? Which 3 problems will I re-solve first next week?

---

<a id="week-5"></a>
## Week 5 — Trees and Binary Search Trees

📅 Tue, Nov 17 → Mon, Nov 23 · ⬅️ [Week 4](#week-4) · ➡️ [Week 6](#week-6)

**Weekly objective:** Think recursively on trees, use BFS for levels, and exploit BST ordering.  
**Prerequisite knowledge:** Week 4 (recursion), Week 3 (queues).  
**Pattern coverage:** DFS traversals · Level-order BFS · Height / path DP on trees · BST invariants · Tree construction and serialization

| Day | Date | Topic | ⭐ A | Planned items | Time |
|---|---|---|---:|---:|---|
| [29](#day-29) | Tue, Nov 17 | Binary Tree Basics: Recursion and DFS Traversals | 5 | 14 | ≈ 3 h 30 min |
| [30](#day-30) | Wed, Nov 18 | Level-Order Traversal and Tree BFS | 3 | 12 | ≈ 4 h 58 min |
| [31](#day-31) | Thu, Nov 19 | Height, Diameter and Path Problems | 5 | 12 | ≈ 4 h 43 min |
| [32](#day-32) | Fri, Nov 20 | Binary Search Trees | 5 | 13 | ≈ 4 h 54 min |
| [33](#day-33) | Sat, Nov 21 | LCA and Tree Construction | 4 | 11 | ≈ 5 h 02 min |
| [34](#day-34) | Sun, Nov 22 | Serialization and Advanced Tree Patterns | 3 | 10 | ≈ 5 h 08 min |
| [35](#day-35) | Mon, Nov 23 | Week 5 Test — Trees and BSTs | 3 | 8 | ≈ 3 h 45 min |

**Weekly targets:** ⭐ Tier A **28** problems · 📘 Tier B **33** · 🚀 Tier C **2** (all authored this week, distinct) · 🔁 **23** revision tasks. Tier B/C are optional; only Tier A counts toward the weekly must-solve target.

<a id="day-29"></a>
### Day 29 — Binary Tree Basics: Recursion and DFS Traversals

> 📅 Tue, Nov 17 · Week 5 · ⏱ ≈ 3 h 30 min · 🔗 [Back to Week 5](#week-5)

**Learning objective:** Think of each tree problem as 'solve left, solve right, combine' and implement all three DFS orders.  
**Pattern:** Tree DFS (pre/in/post), recursion on subtrees  
**Prerequisites:** Day 25 (recursion)  
**Planned workload:** **14** items = 11 🆕 new + 3 🔁 revision · ⭐ 5 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 3 h 30 min (+≈ 0 h 12 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) | 🟢 EASY | ⭐ A | Recursive DFS | 🆕 NEW |
| 2 | [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/) | 🟢 EASY | ⭐ A | Recursive DFS | 🆕 NEW |
| 3 | [Same Tree](https://leetcode.com/problems/same-tree/) | 🟢 EASY | ⭐ A | Parallel DFS | 🆕 NEW |
| 4 | [Symmetric Tree](https://leetcode.com/problems/symmetric-tree/) | 🟢 EASY | ⭐ A | Mirror DFS | 🆕 NEW |
| 5 | [Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/) | 🟢 EASY | ⭐ A | Recursive + iterative inorder | 🆕 NEW |
| 6 | [Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/) | 🟢 EASY | 📘 B | DFS + same-tree check | 🆕 NEW |
| 7 | [Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/) | 🟢 EASY | 📘 B | Iterative preorder | 🆕 NEW |
| 8 | [Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/) | 🟢 EASY | 📘 B | Iterative postorder | 🆕 NEW |
| 9 | [Path Sum](https://leetcode.com/problems/path-sum/) | 🟢 EASY | 📘 B | Root-to-leaf DFS | 🆕 NEW |
| 10 | [Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/) | 🟢 EASY | 📘 B | DFS / BFS leaf check | 🆕 NEW |
| 11 | [Merge Two Binary Trees](https://leetcode.com/problems/merge-two-binary-trees/) | 🟢 EASY | 📘 B | Parallel DFS | 🆕 NEW |
| 12 | [Increasing Subsequences](https://leetcode.com/problems/increasing-subsequences/) | 🟡 MEDIUM | ⭐ A | Backtracking with set per level | 🔁 REVISION |
| 13 | [Permutations II](https://leetcode.com/problems/permutations-ii/) | 🟡 MEDIUM | ⭐ A | Skip duplicate branches | 🔁 REVISION |
| 14 | [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/) | 🟡 MEDIUM | ⭐ A | Flattened index | 🔁 REVISION |
| 15 | [Sum of Left Leaves](https://leetcode.com/problems/sum-of-left-leaves/) | 🟢 EASY | 📘 B | DFS with flag | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) — EASY
- [ ] [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/) — EASY
- [ ] [Same Tree](https://leetcode.com/problems/same-tree/) — EASY
- [ ] [Symmetric Tree](https://leetcode.com/problems/symmetric-tree/) — EASY
- [ ] [Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/) — EASY

**📘 Reinforcement (Tier B):** [Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/) · [Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/) · [Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/) · [Path Sum](https://leetcode.com/problems/path-sum/) · [Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/) · [Merge Two Binary Trees](https://leetcode.com/problems/merge-two-binary-trees/) · [Sum of Left Leaves](https://leetcode.com/problems/sum-of-left-leaves/) ➕

**🔁 Revision tasks:**
- [ ] [Increasing Subsequences](https://leetcode.com/problems/increasing-subsequences/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Permutations II](https://leetcode.com/problems/permutations-ii/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: any tree problem. Recursive template: base case null; get results from left and right; combine at the node. Preorder = node-left-right, inorder = left-node-right, postorder = left-right-node. Iterative inorder uses an explicit stack: go left as far as possible, pop, visit, go right. Time O(n), space O(h).

**Dry-run exercise:** Write the call order of preorder, inorder and postorder for a 5-node tree.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Can I convert recursive inorder to iterative without notes?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-30"></a>
### Day 30 — Level-Order Traversal and Tree BFS

> 📅 Wed, Nov 18 · Week 5 · ⏱ ≈ 4 h 58 min · 🔗 [Back to Week 5](#week-5)

**Learning objective:** Process a tree level by level and use the level structure to answer views, averages and widths.  
**Pattern:** Tree BFS (queue, level size)  
**Prerequisites:** Day 18 (queues), Day 29  
**Planned workload:** **12** items = 9 🆕 new + 3 🔁 revision · ⭐ 3 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 4 h 58 min (+≈ 0 h 28 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) | 🟡 MEDIUM | ⭐ A | BFS by level | 🆕 NEW |
| 2 | [Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/) | 🟡 MEDIUM | ⭐ A | Last node of level | 🆕 NEW |
| 3 | [Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) | 🟡 MEDIUM | ⭐ A | BFS with direction flip | 🆕 NEW |
| 4 | [Average of Levels in Binary Tree](https://leetcode.com/problems/average-of-levels-in-binary-tree/) | 🟢 EASY | 📘 B | BFS by level | 🆕 NEW |
| 5 | [Populating Next Right Pointers in Each Node](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/) | 🟡 MEDIUM | 📘 B | Level linking | 🆕 NEW |
| 6 | [N-ary Tree Level Order Traversal](https://leetcode.com/problems/n-ary-tree-level-order-traversal/) | 🟡 MEDIUM | 📘 B | BFS on n-ary tree | 🆕 NEW |
| 7 | [Maximum Width of Binary Tree](https://leetcode.com/problems/maximum-width-of-binary-tree/) | 🟡 MEDIUM | 📘 B | BFS with indices | 🆕 NEW |
| 8 | [Find Largest Value in Each Tree Row](https://leetcode.com/problems/find-largest-value-in-each-tree-row/) | 🟡 MEDIUM | 📘 B | BFS by level | 🆕 NEW |
| 9 | [Cousins in Binary Tree](https://leetcode.com/problems/cousins-in-binary-tree/) | 🟢 EASY | 📘 B | BFS depth + parent | 🆕 NEW |
| 10 | [Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/) | 🟢 EASY | ⭐ A | Recursive + iterative inorder | 🔁 REVISION |
| 11 | [Matchsticks to Square](https://leetcode.com/problems/matchsticks-to-square/) | 🟡 MEDIUM | ⭐ A | Bucket backtracking | 🔁 REVISION |
| 12 | [Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) | 🟡 MEDIUM | ⭐ A | Lower/upper bound | 🔁 REVISION |
| 13 | [Add One Row to Tree](https://leetcode.com/problems/add-one-row-to-tree/) | 🟡 MEDIUM | 📘 B | Level-targeted BFS | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) — MEDIUM
- [ ] [Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/) — MEDIUM
- [ ] [Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) — MEDIUM

**📘 Reinforcement (Tier B):** [Average of Levels in Binary Tree](https://leetcode.com/problems/average-of-levels-in-binary-tree/) · [Populating Next Right Pointers in Each Node](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/) · [N-ary Tree Level Order Traversal](https://leetcode.com/problems/n-ary-tree-level-order-traversal/) · [Maximum Width of Binary Tree](https://leetcode.com/problems/maximum-width-of-binary-tree/) · [Find Largest Value in Each Tree Row](https://leetcode.com/problems/find-largest-value-in-each-tree-row/) · [Cousins in Binary Tree](https://leetcode.com/problems/cousins-in-binary-tree/) · [Add One Row to Tree](https://leetcode.com/problems/add-one-row-to-tree/) ➕

**🔁 Revision tasks:**
- [ ] [Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Matchsticks to Square](https://leetcode.com/problems/matchsticks-to-square/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'level', 'right-side view', 'zigzag', 'shortest depth'. Queue + for(size=q.size()) loop processes exactly one level per iteration. Right-side view = last node of each level. Zigzag: reverse alternating levels or use a deque. Maximum Width: index nodes as 2i, 2i+1 and subtract the level's first index. Time O(n), space O(w).

**Dry-run exercise:** Dry-run Level Order Traversal on a 7-node tree and list the queue size at each level.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Why do I capture q.size() before the inner loop?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-31"></a>
### Day 31 — Height, Diameter and Path Problems

> 📅 Thu, Nov 19 · Week 5 · ⏱ ≈ 4 h 43 min · 🔗 [Back to Week 5](#week-5)

**Learning objective:** Separate 'what I return to my parent' from 'what I record as a candidate answer' in tree DP.  
**Pattern:** Post-order return value vs global answer  
**Prerequisites:** Day 29  
**Planned workload:** **12** items = 9 🆕 new + 3 🔁 revision · ⭐ 5 Tier A must-solve · ➕ 0 optional (not counted) · ⏱ ≈ 4 h 43 min

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/) | 🟢 EASY | ⭐ A | Height + global answer | 🆕 NEW |
| 2 | [Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/) | 🟢 EASY | ⭐ A | Height with early exit | 🆕 NEW |
| 3 | [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/) | 🔴 HARD | ⭐ A | Gain from children | 🆕 NEW |
| 4 | [Path Sum II](https://leetcode.com/problems/path-sum-ii/) | 🟡 MEDIUM | ⭐ A | DFS path collection | 🆕 NEW |
| 5 | [Path Sum III](https://leetcode.com/problems/path-sum-iii/) | 🟡 MEDIUM | ⭐ A | Prefix sums on a path | 🆕 NEW |
| 6 | [Longest Univalue Path](https://leetcode.com/problems/longest-univalue-path/) | 🟡 MEDIUM | 📘 B | Postorder with global | 🆕 NEW |
| 7 | [Binary Tree Tilt](https://leetcode.com/problems/binary-tree-tilt/) | 🟢 EASY | 📘 B | Postorder sums | 🆕 NEW |
| 8 | [Sum Root to Leaf Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/) | 🟡 MEDIUM | 📘 B | DFS carrying value | 🆕 NEW |
| 9 | [Binary Tree Paths](https://leetcode.com/problems/binary-tree-paths/) | 🟢 EASY | 📘 B | DFS path strings | 🆕 NEW |
| 10 | [Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) | 🟡 MEDIUM | ⭐ A | BFS with direction flip | 🔁 REVISION |
| 11 | [Maximum Value at a Given Index in a Bounded Array](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/) | 🟡 MEDIUM | ⭐ A | Binary search on answer | 🔁 REVISION |
| 12 | [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) | 🟡 MEDIUM | ⭐ A | Binary search on answer | 🔁 REVISION |

**⭐ Must solve (Tier A):**
- [ ] [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/) — EASY
- [ ] [Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/) — EASY
- [ ] [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/) — HARD
- [ ] [Path Sum II](https://leetcode.com/problems/path-sum-ii/) — MEDIUM
- [ ] [Path Sum III](https://leetcode.com/problems/path-sum-iii/) — MEDIUM

**📘 Reinforcement (Tier B):** [Longest Univalue Path](https://leetcode.com/problems/longest-univalue-path/) · [Binary Tree Tilt](https://leetcode.com/problems/binary-tree-tilt/) · [Sum Root to Leaf Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/) · [Binary Tree Paths](https://leetcode.com/problems/binary-tree-paths/)

**🔁 Revision tasks:**
- [ ] [Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Maximum Value at a Given Index in a Bounded Array](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'diameter', 'maximum path sum', 'balanced', 'count paths'. A postorder function returns height (or best downward path); a global variable updates the answer using both children. Diameter = left+right heights; Max Path Sum = node + max(0,left) + max(0,right). Path Sum III: prefix-sum hash map along the root path, undo on exit. Time O(n).

**Dry-run exercise:** Dry-run Binary Tree Maximum Path Sum on [-10,9,20,null,null,15,7].

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] What is the difference between the value a node returns and the value it records?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-32"></a>
### Day 32 — Binary Search Trees

> 📅 Fri, Nov 20 · Week 5 · ⏱ ≈ 4 h 54 min · 🔗 [Back to Week 5](#week-5)

**Learning objective:** Use the BST ordering invariant for search, validation, insertion and deletion.  
**Pattern:** BST invariant, inorder = sorted  
**Prerequisites:** Day 29, 31  
**Planned workload:** **13** items = 10 🆕 new + 3 🔁 revision · ⭐ 5 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 4 h 54 min (+≈ 0 h 28 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) | 🟡 MEDIUM | ⭐ A | Bounds recursion | 🆕 NEW |
| 2 | [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) | 🟡 MEDIUM | ⭐ A | Inorder traversal | 🆕 NEW |
| 3 | [Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) | 🟡 MEDIUM | ⭐ A | Split point | 🆕 NEW |
| 4 | [Search in a Binary Search Tree](https://leetcode.com/problems/search-in-a-binary-search-tree/) | 🟢 EASY | ⭐ A | BST descent | 🆕 NEW |
| 5 | [Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/) | 🟡 MEDIUM | ⭐ A | Successor replacement | 🆕 NEW |
| 6 | [Insert into a Binary Search Tree](https://leetcode.com/problems/insert-into-a-binary-search-tree/) | 🟡 MEDIUM | 📘 B | BST descent | 🆕 NEW |
| 7 | [Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/) | 🟢 EASY | 📘 B | Mid as root | 🆕 NEW |
| 8 | [Minimum Absolute Difference in BST](https://leetcode.com/problems/minimum-absolute-difference-in-bst/) | 🟢 EASY | 📘 B | Inorder neighbours | 🆕 NEW |
| 9 | [Two Sum IV - Input is a BST](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/) | 🟢 EASY | 📘 B | Inorder + two pointers / set | 🆕 NEW |
| 10 | [Binary Search Tree Iterator](https://leetcode.com/problems/binary-search-tree-iterator/) | 🟡 MEDIUM | 📘 B | Controlled inorder | 🆕 NEW |
| 11 | [Path Sum III](https://leetcode.com/problems/path-sum-iii/) | 🟡 MEDIUM | ⭐ A | Prefix sums on a path | 🔁 REVISION |
| 12 | [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/) | 🟢 EASY | ⭐ A | Recursive DFS | 🔁 REVISION |
| 13 | [Subsets](https://leetcode.com/problems/subsets/) | 🟡 MEDIUM | ⭐ A | Include/exclude | 🔁 REVISION |
| 14 | [Recover Binary Search Tree](https://leetcode.com/problems/recover-binary-search-tree/) | 🟡 MEDIUM | 🚀 C | Inorder anomaly | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) — MEDIUM
- [ ] [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) — MEDIUM
- [ ] [Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) — MEDIUM
- [ ] [Search in a Binary Search Tree](https://leetcode.com/problems/search-in-a-binary-search-tree/) — EASY
- [ ] [Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/) — MEDIUM

**📘 Reinforcement (Tier B):** [Insert into a Binary Search Tree](https://leetcode.com/problems/insert-into-a-binary-search-tree/) · [Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/) · [Minimum Absolute Difference in BST](https://leetcode.com/problems/minimum-absolute-difference-in-bst/) · [Two Sum IV - Input is a BST](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/) · [Binary Search Tree Iterator](https://leetcode.com/problems/binary-search-tree-iterator/)

**🚀 Stretch (Tier C, never mandatory):** [Recover Binary Search Tree](https://leetcode.com/problems/recover-binary-search-tree/)

**🔁 Revision tasks:**
- [ ] [Path Sum III](https://leetcode.com/problems/path-sum-iii/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Subsets](https://leetcode.com/problems/subsets/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'BST', 'sorted order', 'kth smallest'. Invariant: left < node < right for the whole subtree, so validate with (min,max) bounds, not just parent comparison. Inorder traversal of a BST is sorted. Search/insert go left or right in O(h). Delete: leaf → remove; one child → splice; two children → replace with inorder successor. LCA in a BST: split point.

**Dry-run exercise:** Dry-run Delete Node in a BST for a node with two children, naming the successor.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Why is comparing only with the parent not enough to validate a BST?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-33"></a>
### Day 33 — LCA and Tree Construction

> 📅 Sat, Nov 21 · Week 5 · ⏱ ≈ 5 h 02 min · 🔗 [Back to Week 5](#week-5)

**Learning objective:** Find common ancestors and rebuild trees from traversals by locating the root and splitting subtrees.  
**Pattern:** LCA, divide by root index  
**Prerequisites:** Day 29–32  
**Planned workload:** **11** items = 8 🆕 new + 3 🔁 revision · ⭐ 4 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 5 h 02 min (+≈ 0 h 28 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) | 🟡 MEDIUM | ⭐ A | Postorder LCA | 🆕 NEW |
| 2 | [Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) | 🟡 MEDIUM | ⭐ A | Root split with hash map | 🆕 NEW |
| 3 | [Count Good Nodes in Binary Tree](https://leetcode.com/problems/count-good-nodes-in-binary-tree/) | 🟡 MEDIUM | ⭐ A | DFS carrying max | 🆕 NEW |
| 4 | [Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/) | 🟡 MEDIUM | ⭐ A | Reverse postorder / Morris-like | 🆕 NEW |
| 5 | [Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/) | 🟡 MEDIUM | 📘 B | Root split from the right | 🆕 NEW |
| 6 | [Convert Sorted List to Binary Search Tree](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/) | 🟡 MEDIUM | 📘 B | Slow/fast + recursion | 🆕 NEW |
| 7 | [Construct Binary Search Tree from Preorder Traversal](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/) | 🟡 MEDIUM | 📘 B | Bounds recursion | 🆕 NEW |
| 8 | [All Nodes Distance K in Binary Tree](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/) | 🟡 MEDIUM | 📘 B | Parent map + BFS | 🆕 NEW |
| 9 | [Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/) | 🟡 MEDIUM | ⭐ A | Successor replacement | 🔁 REVISION |
| 10 | [Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/) | 🟡 MEDIUM | ⭐ A | Last node of level | 🔁 REVISION |
| 11 | [Permutations](https://leetcode.com/problems/permutations/) | 🟡 MEDIUM | ⭐ A | used[] backtracking | 🔁 REVISION |
| 12 | [Delete Nodes And Return Forest](https://leetcode.com/problems/delete-nodes-and-return-forest/) | 🟡 MEDIUM | 📘 B | Postorder with set | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) — MEDIUM
- [ ] [Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) — MEDIUM
- [ ] [Count Good Nodes in Binary Tree](https://leetcode.com/problems/count-good-nodes-in-binary-tree/) — MEDIUM
- [ ] [Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/) — MEDIUM

**📘 Reinforcement (Tier B):** [Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/) · [Convert Sorted List to Binary Search Tree](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/) · [Construct Binary Search Tree from Preorder Traversal](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/) · [All Nodes Distance K in Binary Tree](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/) · [Delete Nodes And Return Forest](https://leetcode.com/problems/delete-nodes-and-return-forest/) ➕

**🔁 Revision tasks:**
- [ ] [Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Permutations](https://leetcode.com/problems/permutations/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'ancestor', 'construct from traversals'. LCA (general tree): return node if it equals p or q; if both sides return non-null, the node is the LCA. Construct from preorder+inorder: preorder[0] is the root; locate it in inorder (hash map for O(1)) to size the left subtree. Count Good Nodes: DFS carrying the max seen on the path. Time O(n).

**Dry-run exercise:** Build the tree from preorder [3,9,20,15,7] and inorder [9,3,15,20,7] on paper.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Why does the inorder index tell me the size of the left subtree?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-34"></a>
### Day 34 — Serialization and Advanced Tree Patterns

> 📅 Sun, Nov 22 · Week 5 · ⏱ ≈ 5 h 08 min · 🔗 [Back to Week 5](#week-5)

**Learning objective:** Encode and decode trees, detect duplicate structures and handle deepest-node queries.  
**Pattern:** Tree encoding, subtree hashing  
**Prerequisites:** Day 29–33  
**Planned workload:** **10** items = 7 🆕 new + 3 🔁 revision · ⭐ 3 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 5 h 08 min (+≈ 0 h 45 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) | 🔴 HARD | ⭐ A | Preorder with null markers | 🆕 NEW |
| 2 | [Find Duplicate Subtrees](https://leetcode.com/problems/find-duplicate-subtrees/) | 🟡 MEDIUM | ⭐ A | Subtree serialisation | 🆕 NEW |
| 3 | [Lowest Common Ancestor of Deepest Leaves](https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/) | 🟡 MEDIUM | ⭐ A | Return (depth, node) | 🆕 NEW |
| 4 | [Serialize and Deserialize BST](https://leetcode.com/problems/serialize-and-deserialize-bst/) | 🟡 MEDIUM | 📘 B | Preorder with bounds | 🆕 NEW |
| 5 | [Vertical Order Traversal of a Binary Tree](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/) | 🔴 HARD | 📘 B | Column/row sorting | 🆕 NEW |
| 6 | [Populating Next Right Pointers in Each Node II](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/) | 🟡 MEDIUM | 📘 B | Level linking in O(1) space | 🆕 NEW |
| 7 | [Smallest Subtree with all the Deepest Nodes](https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/) | 🟡 MEDIUM | 📘 B | Return (depth, node) | 🆕 NEW |
| 8 | [Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/) | 🟡 MEDIUM | ⭐ A | Reverse postorder / Morris-like | 🔁 REVISION |
| 9 | [Path Sum II](https://leetcode.com/problems/path-sum-ii/) | 🟡 MEDIUM | ⭐ A | DFS path collection | 🔁 REVISION |
| 10 | [Word Search](https://leetcode.com/problems/word-search/) | 🟡 MEDIUM | ⭐ A | Grid DFS backtracking | 🔁 REVISION |
| 11 | [Binary Tree Cameras](https://leetcode.com/problems/binary-tree-cameras/) | 🔴 HARD | 🚀 C | Greedy tree states | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) — HARD
- [ ] [Find Duplicate Subtrees](https://leetcode.com/problems/find-duplicate-subtrees/) — MEDIUM
- [ ] [Lowest Common Ancestor of Deepest Leaves](https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/) — MEDIUM

**📘 Reinforcement (Tier B):** [Serialize and Deserialize BST](https://leetcode.com/problems/serialize-and-deserialize-bst/) · [Vertical Order Traversal of a Binary Tree](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/) · [Populating Next Right Pointers in Each Node II](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/) · [Smallest Subtree with all the Deepest Nodes](https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/)

**🚀 Stretch (Tier C, never mandatory):** [Binary Tree Cameras](https://leetcode.com/problems/binary-tree-cameras/)

**🔁 Revision tasks:**
- [ ] [Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Path Sum II](https://leetcode.com/problems/path-sum-ii/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Word Search](https://leetcode.com/problems/word-search/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'serialize', 'duplicate subtrees', 'deepest leaves'. Serialization: preorder with null markers (or BFS with null markers) lets you rebuild uniquely. Duplicate subtrees: serialise each subtree to a string key and count in a map. Deepest-leaf LCA: return (depth, node) from each child and combine. State space O(n) but string keys can be O(n²) in the worst case.

**Dry-run exercise:** Serialize [1,2,3,null,null,4,5] with preorder and null markers and then deserialize it.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] How do I ensure the serialized form is unambiguous?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-35"></a>
### Day 35 — Week 5 Test — Trees and BSTs

> 📅 Mon, Nov 23 · Week 5 · ⏱ ≈ 3 h 45 min · 🔗 [Back to Week 5](#week-5)

**Learning objective:** Solve unseen tree problems by choosing between DFS, BFS and BST properties.  
**Pattern:** Mixed: tree DFS, BFS, BST properties  
**Prerequisites:** Day 29–34  
**Planned workload:** **8** items = 3 🆕 new + 5 🔁 revision · ⭐ 3 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 3 h 45 min (+≈ 0 h 28 min if you attempt the optional items)

> [!NOTE]
> Planned load is below 10 items on purpose: a timed test plus a structured review replaces a normal question set.

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Maximum Difference Between Node and Ancestor](https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/) | 🟡 MEDIUM | ⭐ A | DFS carrying min/max | 🆕 NEW |
| 2 | [Trim a Binary Search Tree](https://leetcode.com/problems/trim-a-binary-search-tree/) | 🟡 MEDIUM | ⭐ A | BST recursion | 🆕 NEW |
| 3 | [Pseudo-Palindromic Paths in a Binary Tree](https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/) | 🟡 MEDIUM | ⭐ A | DFS with bitmask | 🆕 NEW |
| 4 | [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) | 🟡 MEDIUM | ⭐ A | Inorder traversal | 🔁 REVISION |
| 5 | [H-Index II](https://leetcode.com/problems/h-index-ii/) | 🟡 MEDIUM | ⭐ A | Binary search on sorted counts | 🔁 REVISION |
| 6 | [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) | 🟡 MEDIUM | ⭐ A | BFS by level | 🔁 REVISION |
| 7 | [Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) | 🟡 MEDIUM | ⭐ A | Split point | 🔁 REVISION |
| 8 | [Lowest Common Ancestor of Deepest Leaves](https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/) | 🟡 MEDIUM | ⭐ A | Return (depth, node) | 🔁 REVISION |
| 9 | [Longest ZigZag Path in a Binary Tree](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/) | 🟡 MEDIUM | 📘 B | Tree DP | ➕ OPTIONAL |

**⏱ Timed test protocol:** 90 minutes · no hints · no solution lookup · 30 min cap per problem. Attempt the ⭐ problems first, then the optional one if time remains. After the clock stops, spend 45 minutes on the post-mortem (see the review below the week).

**⭐ Must solve (Tier A):**
- [ ] [Maximum Difference Between Node and Ancestor](https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/) — MEDIUM
- [ ] [Trim a Binary Search Tree](https://leetcode.com/problems/trim-a-binary-search-tree/) — MEDIUM
- [ ] [Pseudo-Palindromic Paths in a Binary Tree](https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/) — MEDIUM

**📘 Reinforcement (Tier B):** [Longest ZigZag Path in a Binary Tree](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/) ➕

**🔁 Revision tasks:**
- [ ] [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [H-Index II](https://leetcode.com/problems/h-index-ii/) — Re-solve under a 25-min timer, then compare with your notes
- [ ] [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) — Weekly review: re-solve (prioritise anything you failed this week)
- [ ] [Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) — Weekly review: re-solve (prioritise anything you failed this week)
- [ ] [Lowest Common Ancestor of Deepest Leaves](https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/) — Weekly review: re-solve (prioritise anything you failed this week)

**Scope:** Mixed: tree DFS, BFS, BST properties. Solve unseen tree problems by choosing between DFS, BFS and BST properties. Every problem is a variation on patterns taught on Days 29–34; if the pattern is not obvious in 3 minutes, write the brute force first and look for the bottleneck.

**End-of-day checkpoint:**
- [ ] Did I name the pattern for each problem within 3 minutes?
- [ ] Did I solve at least two of the three ⭐ problems independently?
- [ ] For every failed problem, did I write the missed insight in my mistake log?
- [ ] Did I re-attempt each failed problem the next day without notes?
- [ ] Which pattern from this week do I trust the least?

**Completion rule:** Complete when the timed test was taken honestly, the post-mortem for every failed problem is written, and each Tier A weak spot is logged for the weekly remediation checklist. Optional problems never block progress.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

#### Week 5 review and assessment

- **Timed test:** Day 35 (Mon, Nov 23). Scope is limited to patterns taught in Days 29–34.
- **Revision plan:** D+1 / D+3 / D+7 tasks are already scheduled in each day's table. On Day 35 also re-solve this week's failed Tier A problems from the mistake log.
- **Weak-topic remediation checklist** (tick only after re-solving without hints):
  - [ ] DFS traversals
  - [ ] Level-order BFS
  - [ ] Height / path DP on trees
  - [ ] BST invariants
  - [ ] Tree construction and serialization
- **Weekly self-assessment** (rate confidence 1–5 after the test):

  | Pattern | Confidence (1–5) | Needs reattempt? |
  |---|:---:|:---:|
  | DFS traversals | | |
  | Level-order BFS | | |
  | Height / path DP on trees | | |
  | BST invariants | | |
  | Tree construction and serialization | | |

- **Weekly reflection:** What pattern did I confuse with another? Which mistake repeated? Which 3 problems will I re-solve first next week?

---

<a id="week-6"></a>
## Week 6 — Heaps, Tries and Data-Structure Design

📅 Tue, Nov 24 → Mon, Nov 30 · ⬅️ [Week 5](#week-5) · ➡️ [Week 7](#week-7)

**Weekly objective:** Use priority queues for top-k, merging and scheduling; learn prefix trees and O(1) design patterns.  
**Prerequisite knowledge:** Weeks 1–5, especially sorting and linked lists.  
**Pattern coverage:** Top-k with heaps · K-way merge · Two heaps · Scheduling heaps · Trie · LRU-style design

| Day | Date | Topic | ⭐ A | Planned items | Time |
|---|---|---|---:|---:|---|
| [36](#day-36) | Tue, Nov 24 | Heap Fundamentals and Top-K | 5 | 11 | ≈ 3 h 58 min |
| [37](#day-37) | Wed, Nov 25 | K-Way Merge and Streaming Heaps | 4 | 11 | ≈ 4 h 50 min |
| [38](#day-38) | Thu, Nov 26 | Two Heaps and Median Maintenance | 3 | 9 | ≈ 4 h 57 min |
| [39](#day-39) | Fri, Nov 27 | Scheduling and Frequency Heaps | 3 | 10 | ≈ 4 h 34 min |
| [40](#day-40) | Sat, Nov 28 | Trie Fundamentals | 3 | 11 | ≈ 4 h 49 min |
| [41](#day-41) | Sun, Nov 29 | Design Data Structures | 3 | 9 | ≈ 4 h 06 min |
| [42](#day-42) | Mon, Nov 30 | Week 6 Test — Heaps, Tries and Design | 3 | 8 | ≈ 3 h 45 min |

**Weekly targets:** ⭐ Tier A **24** problems · 📘 Tier B **23** · 🚀 Tier C **6** (all authored this week, distinct) · 🔁 **25** revision tasks. Tier B/C are optional; only Tier A counts toward the weekly must-solve target.

<a id="day-36"></a>
### Day 36 — Heap Fundamentals and Top-K

> 📅 Tue, Nov 24 · Week 6 · ⏱ ≈ 3 h 58 min · 🔗 [Back to Week 6](#week-6)

**Learning objective:** Maintain the k largest/smallest elements with a size-k heap and know when a heap beats sorting.  
**Pattern:** Heap / priority queue, top-k  
**Prerequisites:** Day 05 (sorting basics)  
**Planned workload:** **11** items = 8 🆕 new + 3 🔁 revision · ⭐ 5 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 3 h 58 min (+≈ 0 h 28 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/) | 🟢 EASY | ⭐ A | Size-k min-heap | 🆕 NEW |
| 2 | [Last Stone Weight](https://leetcode.com/problems/last-stone-weight/) | 🟢 EASY | ⭐ A | Max-heap simulation | 🆕 NEW |
| 3 | [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) | 🟡 MEDIUM | ⭐ A | Heap / quickselect | 🆕 NEW |
| 4 | [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) | 🟡 MEDIUM | ⭐ A | Frequency + heap / buckets | 🆕 NEW |
| 5 | [K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/) | 🟡 MEDIUM | ⭐ A | Heap by distance | 🆕 NEW |
| 6 | [Relative Ranks](https://leetcode.com/problems/relative-ranks/) | 🟢 EASY | 📘 B | Sort / heap | 🆕 NEW |
| 7 | [Sort Array by Increasing Frequency](https://leetcode.com/problems/sort-array-by-increasing-frequency/) | 🟢 EASY | 📘 B | Frequency + custom sort | 🆕 NEW |
| 8 | [Reorganize String](https://leetcode.com/problems/reorganize-string/) | 🟡 MEDIUM | 📘 B | Max-heap by frequency | 🆕 NEW |
| 9 | [Pseudo-Palindromic Paths in a Binary Tree](https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/) | 🟡 MEDIUM | ⭐ A | DFS with bitmask | 🔁 REVISION |
| 10 | [Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) | 🟡 MEDIUM | ⭐ A | Root split with hash map | 🔁 REVISION |
| 11 | [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) | 🟢 EASY | ⭐ A | Recursive DFS | 🔁 REVISION |
| 12 | [Furthest Building You Can Reach](https://leetcode.com/problems/furthest-building-you-can-reach/) | 🟡 MEDIUM | 📘 B | Min-heap of climbs | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/) — EASY
- [ ] [Last Stone Weight](https://leetcode.com/problems/last-stone-weight/) — EASY
- [ ] [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) — MEDIUM
- [ ] [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) — MEDIUM
- [ ] [K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/) — MEDIUM

**📘 Reinforcement (Tier B):** [Relative Ranks](https://leetcode.com/problems/relative-ranks/) · [Sort Array by Increasing Frequency](https://leetcode.com/problems/sort-array-by-increasing-frequency/) · [Reorganize String](https://leetcode.com/problems/reorganize-string/) · [Furthest Building You Can Reach](https://leetcode.com/problems/furthest-building-you-can-reach/) ➕

**🔁 Revision tasks:**
- [ ] [Pseudo-Palindromic Paths in a Binary Tree](https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'k-th largest', 'top k', 'closest k', 'repeatedly take the max'. For the k largest keep a MIN-heap of size k (pop when size>k); the top is the k-th largest. Cost O(n log k) vs O(n log n) for sorting. In C++ priority_queue is a max-heap; use greater<> or negate for a min-heap. Quickselect gives O(n) average as a follow-up.

**Dry-run exercise:** Dry-run Kth Largest Element in an Array on [3,2,1,5,6,4], k=2, showing the heap after each push.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Why a min-heap for the k largest elements?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-37"></a>
### Day 37 — K-Way Merge and Streaming Heaps

> 📅 Wed, Nov 25 · Week 6 · ⏱ ≈ 4 h 50 min · 🔗 [Back to Week 6](#week-6)

**Learning objective:** Merge sorted sources lazily by keeping one frontier element per source in a heap.  
**Pattern:** Heap over multiple sorted sources  
**Prerequisites:** Day 36  
**Planned workload:** **11** items = 7 🆕 new + 4 🔁 revision · ⭐ 4 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 4 h 50 min (+≈ 0 h 28 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/) | 🟡 MEDIUM | ⭐ A | Heap frontier | 🆕 NEW |
| 2 | [Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/) | 🟡 MEDIUM | ⭐ A | Heap frontier / binary search | 🆕 NEW |
| 3 | [Ugly Number II](https://leetcode.com/problems/ugly-number-ii/) | 🟡 MEDIUM | ⭐ A | Heap / three pointers | 🆕 NEW |
| 4 | [Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/) | 🟡 MEDIUM | ⭐ A | Heap with comparator | 🆕 NEW |
| 5 | [Smallest Range Covering Elements from K Lists](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/) | 🔴 HARD | 📘 B | Heap + current max | 🆕 NEW |
| 6 | [Kth Largest Sum in a Binary Tree](https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/) | 🟡 MEDIUM | 📘 B | Level sums + heap | 🆕 NEW |
| 7 | [The K Weakest Rows in a Matrix](https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/) | 🟢 EASY | 📘 B | Heap / sort | 🆕 NEW |
| 8 | [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) | 🔴 HARD | ⭐ A | Divide and conquer merge | 🔁 REVISION |
| 9 | [K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/) | 🟡 MEDIUM | ⭐ A | Heap by distance | 🔁 REVISION |
| 10 | [Find Duplicate Subtrees](https://leetcode.com/problems/find-duplicate-subtrees/) | 🟡 MEDIUM | ⭐ A | Subtree serialisation | 🔁 REVISION |
| 11 | [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) | 🟡 MEDIUM | ⭐ A | BFS by level | 🔁 REVISION |
| 12 | [Super Ugly Number](https://leetcode.com/problems/super-ugly-number/) | 🟡 MEDIUM | 🚀 C | Heap / pointers | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/) — MEDIUM
- [ ] [Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/) — MEDIUM
- [ ] [Ugly Number II](https://leetcode.com/problems/ugly-number-ii/) — MEDIUM
- [ ] [Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/) — MEDIUM

**📘 Reinforcement (Tier B):** [Smallest Range Covering Elements from K Lists](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/) · [Kth Largest Sum in a Binary Tree](https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/) · [The K Weakest Rows in a Matrix](https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/)

**🚀 Stretch (Tier C, never mandatory):** [Super Ugly Number](https://leetcode.com/problems/super-ugly-number/)

**🔁 Revision tasks:**
- [ ] [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) — Re-solve using a min-heap this time
- [ ] [K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Find Duplicate Subtrees](https://leetcode.com/problems/find-duplicate-subtrees/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'k sorted lists/rows', 'k smallest pairs', 'nth ugly number'. Push the first element of each source with (value, source, index); pop the smallest and push its successor. Time O(N log k). Kth Smallest in a Sorted Matrix and Find K Pairs use the same idea with implicit frontiers. Ugly Number II can use three pointers instead.

**Dry-run exercise:** Dry-run Find K Pairs with Smallest Sums on nums1=[1,7,11], nums2=[2,4,6], k=3.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] What does the heap contain at any moment in a k-way merge?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-38"></a>
### Day 38 — Two Heaps and Median Maintenance

> 📅 Thu, Nov 26 · Week 6 · ⏱ ≈ 4 h 57 min · 🔗 [Back to Week 6](#week-6)

**Learning objective:** Maintain a running median or schedule with two coordinated heaps.  
**Pattern:** Two heaps (max-heap low half, min-heap high half)  
**Prerequisites:** Day 36–37  
**Planned workload:** **9** items = 6 🆕 new + 3 🔁 revision · ⭐ 3 Tier A must-solve · ➕ 2 optional (not counted) · ⏱ ≈ 4 h 57 min (+≈ 1 h 30 min if you attempt the optional items)

> [!NOTE]
> Planned load is below 10 items on purpose: the concepts today are dense, so depth beats volume.

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) | 🔴 HARD | ⭐ A | Two heaps | 🆕 NEW |
| 2 | [Single-Threaded CPU](https://leetcode.com/problems/single-threaded-cpu/) | 🟡 MEDIUM | ⭐ A | Sort + min-heap by duration | 🆕 NEW |
| 3 | [Total Cost to Hire K Workers](https://leetcode.com/problems/total-cost-to-hire-k-workers/) | 🟡 MEDIUM | ⭐ A | Two heaps | 🆕 NEW |
| 4 | [Seat Reservation Manager](https://leetcode.com/problems/seat-reservation-manager/) | 🟡 MEDIUM | 📘 B | Min-heap of free seats | 🆕 NEW |
| 5 | [IPO](https://leetcode.com/problems/ipo/) | 🔴 HARD | 📘 B | Sort + max-heap of profits | 🆕 NEW |
| 6 | [Meeting Rooms III](https://leetcode.com/problems/meeting-rooms-iii/) | 🔴 HARD | 📘 B | Two heaps (free / busy) | 🆕 NEW |
| 7 | [Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/) | 🟡 MEDIUM | ⭐ A | Heap with comparator | 🔁 REVISION |
| 8 | [Trim a Binary Search Tree](https://leetcode.com/problems/trim-a-binary-search-tree/) | 🟡 MEDIUM | ⭐ A | BST recursion | 🔁 REVISION |
| 9 | [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/) | 🔴 HARD | ⭐ A | Gain from children | 🔁 REVISION |
| 10 | [Sliding Window Median](https://leetcode.com/problems/sliding-window-median/) | 🔴 HARD | 🚀 C | Two heaps with lazy deletion | ➕ OPTIONAL |
| 11 | [Minimize Deviation in Array](https://leetcode.com/problems/minimize-deviation-in-array/) | 🔴 HARD | 🚀 C | Max-heap with normalisation | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) — HARD
- [ ] [Single-Threaded CPU](https://leetcode.com/problems/single-threaded-cpu/) — MEDIUM
- [ ] [Total Cost to Hire K Workers](https://leetcode.com/problems/total-cost-to-hire-k-workers/) — MEDIUM

**📘 Reinforcement (Tier B):** [Seat Reservation Manager](https://leetcode.com/problems/seat-reservation-manager/) · [IPO](https://leetcode.com/problems/ipo/) · [Meeting Rooms III](https://leetcode.com/problems/meeting-rooms-iii/)

**🚀 Stretch (Tier C, never mandatory):** [Sliding Window Median](https://leetcode.com/problems/sliding-window-median/) · [Minimize Deviation in Array](https://leetcode.com/problems/minimize-deviation-in-array/)

**🔁 Revision tasks:**
- [ ] [Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Trim a Binary Search Tree](https://leetcode.com/problems/trim-a-binary-search-tree/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'median of a stream', 'balance two halves', 'assign tasks to the cheapest worker'. Keep lower half in a max-heap and upper half in a min-heap; sizes differ by at most 1; rebalance after every insert. Median = top of larger heap or average of both tops. Insert O(log n), median O(1). Hiring/CPU problems use two heaps keyed differently (by cost, by time).

**Dry-run exercise:** Dry-run Find Median from Data Stream on 5, 15, 1, 3, drawing both heaps after each insert.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] How do I guarantee every element in the max-heap is ≤ every element in the min-heap?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-39"></a>
### Day 39 — Scheduling and Frequency Heaps

> 📅 Fri, Nov 27 · Week 6 · ⏱ ≈ 4 h 34 min · 🔗 [Back to Week 6](#week-6)

**Learning objective:** Use a heap to always process the most urgent or most frequent item next.  
**Pattern:** Greedy + heap  
**Prerequisites:** Day 36–38  
**Planned workload:** **10** items = 7 🆕 new + 3 🔁 revision · ⭐ 3 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 4 h 34 min (+≈ 0 h 45 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Task Scheduler](https://leetcode.com/problems/task-scheduler/) | 🟡 MEDIUM | ⭐ A | Frequency greedy / heap | 🆕 NEW |
| 2 | [Maximum Number of Events That Can Be Attended](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/) | 🟡 MEDIUM | ⭐ A | Sort + min-heap of end days | 🆕 NEW |
| 3 | [Longest Happy String](https://leetcode.com/problems/longest-happy-string/) | 🟡 MEDIUM | ⭐ A | Max-heap with constraint | 🆕 NEW |
| 4 | [Distant Barcodes](https://leetcode.com/problems/distant-barcodes/) | 🟡 MEDIUM | 📘 B | Max-heap by frequency | 🆕 NEW |
| 5 | [Maximum Product After K Increments](https://leetcode.com/problems/maximum-product-after-k-increments/) | 🟡 MEDIUM | 📘 B | Min-heap | 🆕 NEW |
| 6 | [Remove Stones to Minimize the Total](https://leetcode.com/problems/remove-stones-to-minimize-the-total/) | 🟡 MEDIUM | 📘 B | Max-heap | 🆕 NEW |
| 7 | [Reduce Array Size to The Half](https://leetcode.com/problems/reduce-array-size-to-the-half/) | 🟡 MEDIUM | 📘 B | Frequency greedy | 🆕 NEW |
| 8 | [Total Cost to Hire K Workers](https://leetcode.com/problems/total-cost-to-hire-k-workers/) | 🟡 MEDIUM | ⭐ A | Two heaps | 🔁 REVISION |
| 9 | [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) | 🟡 MEDIUM | ⭐ A | Frequency + heap / buckets | 🔁 REVISION |
| 10 | [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) | 🟡 MEDIUM | ⭐ A | Bounds recursion | 🔁 REVISION |
| 11 | [Course Schedule III](https://leetcode.com/problems/course-schedule-iii/) | 🔴 HARD | 🚀 C | Max-heap regret greedy | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Task Scheduler](https://leetcode.com/problems/task-scheduler/) — MEDIUM
- [ ] [Maximum Number of Events That Can Be Attended](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/) — MEDIUM
- [ ] [Longest Happy String](https://leetcode.com/problems/longest-happy-string/) — MEDIUM

**📘 Reinforcement (Tier B):** [Distant Barcodes](https://leetcode.com/problems/distant-barcodes/) · [Maximum Product After K Increments](https://leetcode.com/problems/maximum-product-after-k-increments/) · [Remove Stones to Minimize the Total](https://leetcode.com/problems/remove-stones-to-minimize-the-total/) · [Reduce Array Size to The Half](https://leetcode.com/problems/reduce-array-size-to-the-half/)

**🚀 Stretch (Tier C, never mandatory):** [Course Schedule III](https://leetcode.com/problems/course-schedule-iii/)

**🔁 Revision tasks:**
- [ ] [Total Cost to Hire K Workers](https://leetcode.com/problems/total-cost-to-hire-k-workers/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'schedule with cooldown', 'maximum events attended', 'arrange so no two adjacent are equal'. Task Scheduler: count frequencies, the answer is max((maxFreq-1)*(n+1)+countMax, tasks). Events Attended: sort by start; each day push end days, pop expired, attend the earliest end. Heap gives the greedy choice in O(log n). Justify greedy by an exchange argument.

**Dry-run exercise:** Dry-run Maximum Number of Events That Can Be Attended on [[1,2],[2,3],[3,4],[1,2]].

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Why is choosing the earliest-ending available event optimal?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-40"></a>
### Day 40 — Trie Fundamentals

> 📅 Sat, Nov 28 · Week 6 · ⏱ ≈ 4 h 49 min · 🔗 [Back to Week 6](#week-6)

**Learning objective:** Implement a trie and use it for prefix lookup, dictionary search with wildcards and prefix replacement.  
**Pattern:** Trie (prefix tree)  
**Prerequisites:** Day 01–02 (strings, maps)  
**Planned workload:** **11** items = 7 🆕 new + 4 🔁 revision · ⭐ 3 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 4 h 49 min (+≈ 0 h 45 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/) | 🟡 MEDIUM | ⭐ A | Trie insert/search | 🆕 NEW |
| 2 | [Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/) | 🟡 MEDIUM | ⭐ A | Trie with wildcard DFS | 🆕 NEW |
| 3 | [Replace Words](https://leetcode.com/problems/replace-words/) | 🟡 MEDIUM | ⭐ A | Trie shortest prefix | 🆕 NEW |
| 4 | [Map Sum Pairs](https://leetcode.com/problems/map-sum-pairs/) | 🟡 MEDIUM | 📘 B | Trie with sums | 🆕 NEW |
| 5 | [Search Suggestions System](https://leetcode.com/problems/search-suggestions-system/) | 🟡 MEDIUM | 📘 B | Trie / sort + binary search | 🆕 NEW |
| 6 | [Longest Word in Dictionary](https://leetcode.com/problems/longest-word-in-dictionary/) | 🟡 MEDIUM | 📘 B | Trie / sorting | 🆕 NEW |
| 7 | [Short Encoding of Words](https://leetcode.com/problems/short-encoding-of-words/) | 🟡 MEDIUM | 📘 B | Trie of reversed words | 🆕 NEW |
| 8 | [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/) | 🟢 EASY | ⭐ A | Vertical scan | 🔁 REVISION |
| 9 | [Longest Happy String](https://leetcode.com/problems/longest-happy-string/) | 🟡 MEDIUM | ⭐ A | Max-heap with constraint | 🔁 REVISION |
| 10 | [Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/) | 🟡 MEDIUM | ⭐ A | Heap frontier / binary search | 🔁 REVISION |
| 11 | [Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) | 🟡 MEDIUM | ⭐ A | Postorder LCA | 🔁 REVISION |
| 12 | [Prefix and Suffix Search](https://leetcode.com/problems/prefix-and-suffix-search/) | 🔴 HARD | 🚀 C | Trie with combined keys | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/) — MEDIUM
- [ ] [Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/) — MEDIUM
- [ ] [Replace Words](https://leetcode.com/problems/replace-words/) — MEDIUM

**📘 Reinforcement (Tier B):** [Map Sum Pairs](https://leetcode.com/problems/map-sum-pairs/) · [Search Suggestions System](https://leetcode.com/problems/search-suggestions-system/) · [Longest Word in Dictionary](https://leetcode.com/problems/longest-word-in-dictionary/) · [Short Encoding of Words](https://leetcode.com/problems/short-encoding-of-words/)

**🚀 Stretch (Tier C, never mandatory):** [Prefix and Suffix Search](https://leetcode.com/problems/prefix-and-suffix-search/)

**🔁 Revision tasks:**
- [ ] [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/) — Re-solve using a trie and compare with the vertical scan
- [ ] [Longest Happy String](https://leetcode.com/problems/longest-happy-string/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'prefix', 'dictionary of words', 'autocomplete', 'wildcard search'. Node = array[26] children + isEnd flag. Insert/search/startsWith cost O(L). Wildcard search ('.') recurses over all children at that position. Replace Words: stop at the first isEnd node. Compare with hash set: a trie shares prefixes and answers prefix queries without scanning every word.

**Dry-run exercise:** Insert 'apple' and 'app' into a trie on paper and mark isEnd nodes.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] How does search differ from startsWith in a trie?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-41"></a>
### Day 41 — Design Data Structures

> 📅 Sun, Nov 29 · Week 6 · ⏱ ≈ 4 h 06 min · 🔗 [Back to Week 6](#week-6)

**Learning objective:** Combine hash maps with lists or arrays to meet O(1) operations in design problems.  
**Pattern:** Hash map + linked list / ordered structures  
**Prerequisites:** Day 15–18, 36–40  
**Planned workload:** **9** items = 6 🆕 new + 3 🔁 revision · ⭐ 3 Tier A must-solve · ➕ 2 optional (not counted) · ⏱ ≈ 4 h 06 min (+≈ 1 h 13 min if you attempt the optional items)

> [!NOTE]
> Planned load is below 10 items on purpose: the concepts today are dense, so depth beats volume.

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [LRU Cache](https://leetcode.com/problems/lru-cache/) | 🟡 MEDIUM | ⭐ A | Hash map + doubly linked list | 🆕 NEW |
| 2 | [Design Browser History](https://leetcode.com/problems/design-browser-history/) | 🟡 MEDIUM | ⭐ A | Array + cursor | 🆕 NEW |
| 3 | [Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/) | 🟡 MEDIUM | ⭐ A | Map + binary search | 🆕 NEW |
| 4 | [Snapshot Array](https://leetcode.com/problems/snapshot-array/) | 🟡 MEDIUM | 📘 B | Versioned values + binary search | 🆕 NEW |
| 5 | [Design Twitter](https://leetcode.com/problems/design-twitter/) | 🟡 MEDIUM | 📘 B | Hash map + heap merge | 🆕 NEW |
| 6 | [Design Underground System](https://leetcode.com/problems/design-underground-system/) | 🟡 MEDIUM | 📘 B | Hash maps | 🆕 NEW |
| 7 | [Replace Words](https://leetcode.com/problems/replace-words/) | 🟡 MEDIUM | ⭐ A | Trie shortest prefix | 🔁 REVISION |
| 8 | [Single-Threaded CPU](https://leetcode.com/problems/single-threaded-cpu/) | 🟡 MEDIUM | ⭐ A | Sort + min-heap by duration | 🔁 REVISION |
| 9 | [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) | 🔴 HARD | ⭐ A | Preorder with null markers | 🔁 REVISION |
| 10 | [Design Circular Deque](https://leetcode.com/problems/design-circular-deque/) | 🟡 MEDIUM | 📘 B | Array + head/tail | ➕ OPTIONAL |
| 11 | [LFU Cache](https://leetcode.com/problems/lfu-cache/) | 🔴 HARD | 🚀 C | Frequency lists | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [LRU Cache](https://leetcode.com/problems/lru-cache/) — MEDIUM
- [ ] [Design Browser History](https://leetcode.com/problems/design-browser-history/) — MEDIUM
- [ ] [Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/) — MEDIUM

**📘 Reinforcement (Tier B):** [Snapshot Array](https://leetcode.com/problems/snapshot-array/) · [Design Twitter](https://leetcode.com/problems/design-twitter/) · [Design Underground System](https://leetcode.com/problems/design-underground-system/) · [Design Circular Deque](https://leetcode.com/problems/design-circular-deque/) ➕

**🚀 Stretch (Tier C, never mandatory):** [LFU Cache](https://leetcode.com/problems/lfu-cache/)

**🔁 Revision tasks:**
- [ ] [Replace Words](https://leetcode.com/problems/replace-words/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Single-Threaded CPU](https://leetcode.com/problems/single-threaded-cpu/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'design a data structure supporting get/put in O(1)'. LRU Cache = hash map from key to list iterator + doubly linked list ordered by recency; move to front on access, evict from the back. Browser History = array/stack with a cursor. Time Based Key-Value Store = map of key→sorted (timestamp,value) with binary search. State API, complexity and invariants first.

**Dry-run exercise:** Draw the LRU Cache state (map + list) after: put(1), put(2), get(1), put(3) with capacity 2.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] What invariants does the doubly linked list maintain in LRU Cache?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-42"></a>
### Day 42 — Week 6 Test — Heaps, Tries and Design

> 📅 Mon, Nov 30 · Week 6 · ⏱ ≈ 3 h 45 min · 🔗 [Back to Week 6](#week-6)

**Learning objective:** Solve unseen heap, trie and design problems and justify each data-structure choice.  
**Pattern:** Mixed: heaps, trie, design  
**Prerequisites:** Day 36–41  
**Planned workload:** **8** items = 3 🆕 new + 5 🔁 revision · ⭐ 3 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 3 h 45 min (+≈ 0 h 28 min if you attempt the optional items)

> [!NOTE]
> Planned load is below 10 items on purpose: a timed test plus a structured review replaces a normal question set.

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Find the Kth Largest Integer in the Array](https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/) | 🟡 MEDIUM | ⭐ A | Heap with string comparator | 🆕 NEW |
| 2 | [Stock Price Fluctuation](https://leetcode.com/problems/stock-price-fluctuation/) | 🟡 MEDIUM | ⭐ A | Map + two heaps | 🆕 NEW |
| 3 | [Maximum XOR of Two Numbers in an Array](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/) | 🟡 MEDIUM | ⭐ A | Binary trie | 🆕 NEW |
| 4 | [Maximum Number of Events That Can Be Attended](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/) | 🟡 MEDIUM | ⭐ A | Sort + min-heap of end days | 🔁 REVISION |
| 5 | [Maximum Difference Between Node and Ancestor](https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/) | 🟡 MEDIUM | ⭐ A | DFS carrying min/max | 🔁 REVISION |
| 6 | [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) | 🟡 MEDIUM | ⭐ A | Heap / quickselect | 🔁 REVISION |
| 7 | [Total Cost to Hire K Workers](https://leetcode.com/problems/total-cost-to-hire-k-workers/) | 🟡 MEDIUM | ⭐ A | Two heaps | 🔁 REVISION |
| 8 | [Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/) | 🟡 MEDIUM | ⭐ A | Map + binary search | 🔁 REVISION |
| 9 | [Maximum Subsequence Score](https://leetcode.com/problems/maximum-subsequence-score/) | 🟡 MEDIUM | 📘 B | Sort + min-heap | ➕ OPTIONAL |

**⏱ Timed test protocol:** 90 minutes · no hints · no solution lookup · 30 min cap per problem. Attempt the ⭐ problems first, then the optional one if time remains. After the clock stops, spend 45 minutes on the post-mortem (see the review below the week).

**⭐ Must solve (Tier A):**
- [ ] [Find the Kth Largest Integer in the Array](https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/) — MEDIUM
- [ ] [Stock Price Fluctuation](https://leetcode.com/problems/stock-price-fluctuation/) — MEDIUM
- [ ] [Maximum XOR of Two Numbers in an Array](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/) — MEDIUM

**📘 Reinforcement (Tier B):** [Maximum Subsequence Score](https://leetcode.com/problems/maximum-subsequence-score/) ➕

**🔁 Revision tasks:**
- [ ] [Maximum Number of Events That Can Be Attended](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Maximum Difference Between Node and Ancestor](https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/) — Re-solve under a 25-min timer, then compare with your notes
- [ ] [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) — Weekly review: re-solve (prioritise anything you failed this week)
- [ ] [Total Cost to Hire K Workers](https://leetcode.com/problems/total-cost-to-hire-k-workers/) — Weekly review: re-solve (prioritise anything you failed this week)
- [ ] [Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/) — Weekly review: re-solve (prioritise anything you failed this week)

**Scope:** Mixed: heaps, trie, design. Solve unseen heap, trie and design problems and justify each data-structure choice. Every problem is a variation on patterns taught on Days 36–41; if the pattern is not obvious in 3 minutes, write the brute force first and look for the bottleneck.

**End-of-day checkpoint:**
- [ ] Did I name the pattern for each problem within 3 minutes?
- [ ] Did I solve at least two of the three ⭐ problems independently?
- [ ] For every failed problem, did I write the missed insight in my mistake log?
- [ ] Did I re-attempt each failed problem the next day without notes?
- [ ] Which pattern from this week do I trust the least?

**Completion rule:** Complete when the timed test was taken honestly, the post-mortem for every failed problem is written, and each Tier A weak spot is logged for the weekly remediation checklist. Optional problems never block progress.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

#### Week 6 review and assessment

- **Timed test:** Day 42 (Mon, Nov 30). Scope is limited to patterns taught in Days 36–41.
- **Revision plan:** D+1 / D+3 / D+7 tasks are already scheduled in each day's table. On Day 42 also re-solve this week's failed Tier A problems from the mistake log.
- **Weak-topic remediation checklist** (tick only after re-solving without hints):
  - [ ] Top-k with heaps
  - [ ] K-way merge
  - [ ] Two heaps
  - [ ] Scheduling heaps
  - [ ] Trie
  - [ ] LRU-style design
- **Weekly self-assessment** (rate confidence 1–5 after the test):

  | Pattern | Confidence (1–5) | Needs reattempt? |
  |---|:---:|:---:|
  | Top-k with heaps | | |
  | K-way merge | | |
  | Two heaps | | |
  | Scheduling heaps | | |
  | Trie | | |
  | LRU-style design | | |

- **Weekly reflection:** What pattern did I confuse with another? Which mistake repeated? Which 3 problems will I re-solve first next week?

---

<a id="week-7"></a>
## Week 7 — Graphs

📅 Tue, Dec 1 → Mon, Dec 7 · ⬅️ [Week 6](#week-6) · ➡️ [Week 8](#week-8)

**Weekly objective:** Go from graph representation and traversal to topological sorting, DSU, shortest paths and MST.  
**Prerequisite knowledge:** Weeks 3, 5 and 6 (queues, DFS, heaps).  
**Pattern coverage:** Graph DFS / components · BFS and multi-source BFS · Cycle detection / topo sort · DSU · Dijkstra / Bellman-Ford · MST

| Day | Date | Topic | ⭐ A | Planned items | Time |
|---|---|---|---:|---:|---|
| [43](#day-43) | Tue, Dec 1 | Graph Representation, DFS and Connected Components | 6 | 13 | ≈ 5 h 10 min |
| [44](#day-44) | Wed, Dec 2 | BFS, Shortest Paths in Unweighted Graphs and Multi-Source BFS | 5 | 13 | ≈ 6 h 15 min |
| [45](#day-45) | Thu, Dec 3 | Cycle Detection and Topological Sort | 3 | 11 | ≈ 5 h 02 min |
| [46](#day-46) | Fri, Dec 4 | Disjoint Set Union (Union-Find) | 3 | 11 | ≈ 4 h 49 min |
| [47](#day-47) | Sat, Dec 5 | Dijkstra, Weighted Shortest Paths and Bellman-Ford | 3 | 11 | ≈ 5 h 06 min |
| [48](#day-48) | Sun, Dec 6 | Minimum Spanning Tree and Graph Consolidation | 3 | 9 | ≈ 4 h 23 min |
| [49](#day-49) | Mon, Dec 7 | Week 7 Test — Graphs | 3 | 8 | ≈ 3 h 45 min |

**Weekly targets:** ⭐ Tier A **26** problems · 📘 Tier B **28** · 🚀 Tier C **7** (all authored this week, distinct) · 🔁 **25** revision tasks. Tier B/C are optional; only Tier A counts toward the weekly must-solve target.

<a id="day-43"></a>
### Day 43 — Graph Representation, DFS and Connected Components

> 📅 Tue, Dec 1 · Week 7 · ⏱ ≈ 5 h 10 min · 🔗 [Back to Week 7](#week-7)

**Learning objective:** Represent graphs, traverse them with a visited set and count connected components on grids and adjacency lists.  
**Pattern:** Graph DFS, flood fill, connected components  
**Prerequisites:** Day 29–32 (tree DFS), Day 25–26  
**Planned workload:** **13** items = 10 🆕 new + 3 🔁 revision · ⭐ 6 Tier A must-solve · ➕ 2 optional (not counted) · ⏱ ≈ 5 h 10 min (+≈ 0 h 56 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Number of Islands](https://leetcode.com/problems/number-of-islands/) | 🟡 MEDIUM | ⭐ A | Grid DFS components | 🆕 NEW |
| 2 | [Max Area of Island](https://leetcode.com/problems/max-area-of-island/) | 🟡 MEDIUM | ⭐ A | Grid DFS with size | 🆕 NEW |
| 3 | [Flood Fill](https://leetcode.com/problems/flood-fill/) | 🟢 EASY | ⭐ A | Grid DFS | 🆕 NEW |
| 4 | [Find if Path Exists in Graph](https://leetcode.com/problems/find-if-path-exists-in-graph/) | 🟢 EASY | ⭐ A | Graph DFS/BFS | 🆕 NEW |
| 5 | [Clone Graph](https://leetcode.com/problems/clone-graph/) | 🟡 MEDIUM | ⭐ A | DFS + hash map | 🆕 NEW |
| 6 | [Number of Provinces](https://leetcode.com/problems/number-of-provinces/) | 🟡 MEDIUM | ⭐ A | Components on adjacency matrix | 🆕 NEW |
| 7 | [Island Perimeter](https://leetcode.com/problems/island-perimeter/) | 🟢 EASY | 📘 B | Grid counting | 🆕 NEW |
| 8 | [Surrounded Regions](https://leetcode.com/problems/surrounded-regions/) | 🟡 MEDIUM | 📘 B | Border DFS | 🆕 NEW |
| 9 | [Keys and Rooms](https://leetcode.com/problems/keys-and-rooms/) | 🟡 MEDIUM | 📘 B | Graph DFS | 🆕 NEW |
| 10 | [All Paths From Source to Target](https://leetcode.com/problems/all-paths-from-source-to-target/) | 🟡 MEDIUM | 📘 B | DFS with path | 🆕 NEW |
| 11 | [Maximum XOR of Two Numbers in an Array](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/) | 🟡 MEDIUM | ⭐ A | Binary trie | 🔁 REVISION |
| 12 | [Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/) | 🟡 MEDIUM | ⭐ A | Trie with wildcard DFS | 🔁 REVISION |
| 13 | [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) | 🟡 MEDIUM | ⭐ A | Heap / quickselect | 🔁 REVISION |
| 14 | [Count Sub Islands](https://leetcode.com/problems/count-sub-islands/) | 🟡 MEDIUM | 📘 B | Grid DFS comparison | ➕ OPTIONAL |
| 15 | [Number of Closed Islands](https://leetcode.com/problems/number-of-closed-islands/) | 🟡 MEDIUM | 📘 B | Border-aware DFS | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Number of Islands](https://leetcode.com/problems/number-of-islands/) — MEDIUM
- [ ] [Max Area of Island](https://leetcode.com/problems/max-area-of-island/) — MEDIUM
- [ ] [Flood Fill](https://leetcode.com/problems/flood-fill/) — EASY
- [ ] [Find if Path Exists in Graph](https://leetcode.com/problems/find-if-path-exists-in-graph/) — EASY
- [ ] [Clone Graph](https://leetcode.com/problems/clone-graph/) — MEDIUM
- [ ] [Number of Provinces](https://leetcode.com/problems/number-of-provinces/) — MEDIUM

**📘 Reinforcement (Tier B):** [Island Perimeter](https://leetcode.com/problems/island-perimeter/) · [Surrounded Regions](https://leetcode.com/problems/surrounded-regions/) · [Keys and Rooms](https://leetcode.com/problems/keys-and-rooms/) · [All Paths From Source to Target](https://leetcode.com/problems/all-paths-from-source-to-target/) · [Count Sub Islands](https://leetcode.com/problems/count-sub-islands/) ➕ · [Number of Closed Islands](https://leetcode.com/problems/number-of-closed-islands/) ➕

**🔁 Revision tasks:**
- [ ] [Maximum XOR of Two Numbers in an Array](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'islands', 'connected', 'reachable', 'clone'. Build vector<vector<int>> adj (or use grid neighbours). DFS marks visited on entry to avoid revisits. Components = number of DFS launches from unvisited nodes. Grid DFS: 4 directions + bounds check. Time O(V+E), recursion depth O(V) — mention iterative DFS for deep inputs. Trees are acyclic graphs; graphs need a visited set.

**Dry-run exercise:** Dry-run Number of Islands on a 4×5 grid, writing the grid after each DFS flood.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Why is a visited set mandatory in graph DFS but not in tree DFS?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-44"></a>
### Day 44 — BFS, Shortest Paths in Unweighted Graphs and Multi-Source BFS

> 📅 Wed, Dec 2 · Week 7 · ⏱ ≈ 6 h 15 min · 🔗 [Back to Week 7](#week-7)

**Learning objective:** Use BFS to find shortest paths in unweighted graphs and to spread from many sources at once.  
**Pattern:** BFS (queue), multi-source BFS  
**Prerequisites:** Day 30, 43  
**Planned workload:** **13** items = 10 🆕 new + 3 🔁 revision · ⭐ 5 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 6 h 15 min (+≈ 0 h 45 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) | 🟡 MEDIUM | ⭐ A | Multi-source BFS | 🆕 NEW |
| 2 | [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/) | 🟡 MEDIUM | ⭐ A | Reverse multi-source DFS/BFS | 🆕 NEW |
| 3 | [01 Matrix](https://leetcode.com/problems/01-matrix/) | 🟡 MEDIUM | ⭐ A | Multi-source BFS | 🆕 NEW |
| 4 | [Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/) | 🟡 MEDIUM | ⭐ A | Grid BFS (8 directions) | 🆕 NEW |
| 5 | [Word Ladder](https://leetcode.com/problems/word-ladder/) | 🔴 HARD | ⭐ A | State-space BFS | 🆕 NEW |
| 6 | [Nearest Exit from Entrance in Maze](https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/) | 🟡 MEDIUM | 📘 B | Grid BFS | 🆕 NEW |
| 7 | [Open the Lock](https://leetcode.com/problems/open-the-lock/) | 🟡 MEDIUM | 📘 B | State-space BFS | 🆕 NEW |
| 8 | [Minimum Genetic Mutation](https://leetcode.com/problems/minimum-genetic-mutation/) | 🟡 MEDIUM | 📘 B | State-space BFS | 🆕 NEW |
| 9 | [As Far from Land as Possible](https://leetcode.com/problems/as-far-from-land-as-possible/) | 🟡 MEDIUM | 📘 B | Multi-source BFS | 🆕 NEW |
| 10 | [Snakes and Ladders](https://leetcode.com/problems/snakes-and-ladders/) | 🟡 MEDIUM | 📘 B | BFS on board states | 🆕 NEW |
| 11 | [Number of Provinces](https://leetcode.com/problems/number-of-provinces/) | 🟡 MEDIUM | ⭐ A | Components on adjacency matrix | 🔁 REVISION |
| 12 | [Design Browser History](https://leetcode.com/problems/design-browser-history/) | 🟡 MEDIUM | ⭐ A | Array + cursor | 🔁 REVISION |
| 13 | [Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/) | 🟡 MEDIUM | ⭐ A | Heap frontier | 🔁 REVISION |
| 14 | [Word Ladder II](https://leetcode.com/problems/word-ladder-ii/) | 🔴 HARD | 🚀 C | BFS + path reconstruction | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) — MEDIUM
- [ ] [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/) — MEDIUM
- [ ] [01 Matrix](https://leetcode.com/problems/01-matrix/) — MEDIUM
- [ ] [Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/) — MEDIUM
- [ ] [Word Ladder](https://leetcode.com/problems/word-ladder/) — HARD

**📘 Reinforcement (Tier B):** [Nearest Exit from Entrance in Maze](https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/) · [Open the Lock](https://leetcode.com/problems/open-the-lock/) · [Minimum Genetic Mutation](https://leetcode.com/problems/minimum-genetic-mutation/) · [As Far from Land as Possible](https://leetcode.com/problems/as-far-from-land-as-possible/) · [Snakes and Ladders](https://leetcode.com/problems/snakes-and-ladders/)

**🚀 Stretch (Tier C, never mandatory):** [Word Ladder II](https://leetcode.com/problems/word-ladder-ii/)

**🔁 Revision tasks:**
- [ ] [Number of Provinces](https://leetcode.com/problems/number-of-provinces/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Design Browser History](https://leetcode.com/problems/design-browser-history/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'minimum number of steps/moves', 'nearest', 'spread simultaneously'. BFS explores in rings of equal distance, so the first time a node is reached is the shortest path (unweighted only). Multi-source BFS: push all sources at distance 0. State-space BFS (Word Ladder, Open the Lock) treats each configuration as a node. Mark visited when enqueuing. Time O(V+E).

**Dry-run exercise:** Dry-run Rotting Oranges on a 3×3 grid and write the time at which each orange rots.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Why does BFS give shortest paths only on unweighted graphs?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-45"></a>
### Day 45 — Cycle Detection and Topological Sort

> 📅 Thu, Dec 3 · Week 7 · ⏱ ≈ 5 h 02 min · 🔗 [Back to Week 7](#week-7)

**Learning objective:** Detect cycles in directed graphs, order tasks by dependencies, and test bipartiteness.  
**Pattern:** DFS colours, Kahn's algorithm, bipartite colouring  
**Prerequisites:** Day 43–44  
**Planned workload:** **11** items = 8 🆕 new + 3 🔁 revision · ⭐ 3 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 5 h 02 min (+≈ 0 h 45 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Course Schedule](https://leetcode.com/problems/course-schedule/) | 🟡 MEDIUM | ⭐ A | Cycle detection / Kahn | 🆕 NEW |
| 2 | [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) | 🟡 MEDIUM | ⭐ A | Topological order | 🆕 NEW |
| 3 | [Is Graph Bipartite?](https://leetcode.com/problems/is-graph-bipartite/) | 🟡 MEDIUM | ⭐ A | Two-colouring | 🆕 NEW |
| 4 | [Find Eventual Safe States](https://leetcode.com/problems/find-eventual-safe-states/) | 🟡 MEDIUM | 📘 B | Reverse graph + topo | 🆕 NEW |
| 5 | [Minimum Height Trees](https://leetcode.com/problems/minimum-height-trees/) | 🟡 MEDIUM | 📘 B | Leaf peeling (topo) | 🆕 NEW |
| 6 | [Course Schedule IV](https://leetcode.com/problems/course-schedule-iv/) | 🟡 MEDIUM | 📘 B | Reachability via topo | 🆕 NEW |
| 7 | [All Ancestors of a Node in a DAG](https://leetcode.com/problems/all-ancestors-of-a-node-in-a-dag/) | 🟡 MEDIUM | 📘 B | DAG reachability | 🆕 NEW |
| 8 | [Possible Bipartition](https://leetcode.com/problems/possible-bipartition/) | 🟡 MEDIUM | 📘 B | Two-colouring | 🆕 NEW |
| 9 | [Word Ladder](https://leetcode.com/problems/word-ladder/) | 🔴 HARD | ⭐ A | State-space BFS | 🔁 REVISION |
| 10 | [Stock Price Fluctuation](https://leetcode.com/problems/stock-price-fluctuation/) | 🟡 MEDIUM | ⭐ A | Map + two heaps | 🔁 REVISION |
| 11 | [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) | 🔴 HARD | ⭐ A | Two heaps | 🔁 REVISION |
| 12 | [Sort Items by Groups Respecting Dependencies](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/) | 🔴 HARD | 🚀 C | Two-level topo sort | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Course Schedule](https://leetcode.com/problems/course-schedule/) — MEDIUM
- [ ] [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) — MEDIUM
- [ ] [Is Graph Bipartite?](https://leetcode.com/problems/is-graph-bipartite/) — MEDIUM

**📘 Reinforcement (Tier B):** [Find Eventual Safe States](https://leetcode.com/problems/find-eventual-safe-states/) · [Minimum Height Trees](https://leetcode.com/problems/minimum-height-trees/) · [Course Schedule IV](https://leetcode.com/problems/course-schedule-iv/) · [All Ancestors of a Node in a DAG](https://leetcode.com/problems/all-ancestors-of-a-node-in-a-dag/) · [Possible Bipartition](https://leetcode.com/problems/possible-bipartition/)

**🚀 Stretch (Tier C, never mandatory):** [Sort Items by Groups Respecting Dependencies](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/)

**🔁 Revision tasks:**
- [ ] [Word Ladder](https://leetcode.com/problems/word-ladder/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Stock Price Fluctuation](https://leetcode.com/problems/stock-price-fluctuation/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'prerequisites', 'ordering', 'is it possible to finish', 'two groups'. Kahn: compute indegrees, queue zero-indegree nodes, pop and decrement neighbours; if processed < V there is a cycle. DFS alternative uses states (unvisited, visiting, done). Bipartite: 2-colour with BFS/DFS; a same-colour edge means odd cycle. Time O(V+E).

**Dry-run exercise:** Run Kahn's algorithm on 4 courses with prerequisites [[1,0],[2,0],[3,1],[3,2]] and write the queue each step.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] How can Kahn's algorithm tell me a cycle exists?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-46"></a>
### Day 46 — Disjoint Set Union (Union-Find)

> 📅 Fri, Dec 4 · Week 7 · ⏱ ≈ 4 h 49 min · 🔗 [Back to Week 7](#week-7)

**Learning objective:** Maintain connectivity under edge additions in near-constant time and recognise DSU-shaped problems.  
**Pattern:** DSU with path compression and union by size  
**Prerequisites:** Day 43, 45  
**Planned workload:** **11** items = 7 🆕 new + 4 🔁 revision · ⭐ 3 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 4 h 49 min (+≈ 0 h 28 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Redundant Connection](https://leetcode.com/problems/redundant-connection/) | 🟡 MEDIUM | ⭐ A | DSU cycle detection | 🆕 NEW |
| 2 | [Accounts Merge](https://leetcode.com/problems/accounts-merge/) | 🟡 MEDIUM | ⭐ A | DSU on emails | 🆕 NEW |
| 3 | [Number of Operations to Make Network Connected](https://leetcode.com/problems/number-of-operations-to-make-network-connected/) | 🟡 MEDIUM | ⭐ A | DSU components | 🆕 NEW |
| 4 | [Most Stones Removed with Same Row or Column](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/) | 🟡 MEDIUM | 📘 B | DSU on rows/cols | 🆕 NEW |
| 5 | [Satisfiability of Equality Equations](https://leetcode.com/problems/satisfiability-of-equality-equations/) | 🟡 MEDIUM | 📘 B | DSU two passes | 🆕 NEW |
| 6 | [Smallest String With Swaps](https://leetcode.com/problems/smallest-string-with-swaps/) | 🟡 MEDIUM | 📘 B | DSU + sorting groups | 🆕 NEW |
| 7 | [Evaluate Division](https://leetcode.com/problems/evaluate-division/) | 🟡 MEDIUM | 📘 B | Weighted graph / DSU | 🆕 NEW |
| 8 | [Number of Provinces](https://leetcode.com/problems/number-of-provinces/) | 🟡 MEDIUM | ⭐ A | Components on adjacency matrix | 🔁 REVISION |
| 9 | [Is Graph Bipartite?](https://leetcode.com/problems/is-graph-bipartite/) | 🟡 MEDIUM | ⭐ A | Two-colouring | 🔁 REVISION |
| 10 | [Max Area of Island](https://leetcode.com/problems/max-area-of-island/) | 🟡 MEDIUM | ⭐ A | Grid DFS with size | 🔁 REVISION |
| 11 | [Task Scheduler](https://leetcode.com/problems/task-scheduler/) | 🟡 MEDIUM | ⭐ A | Frequency greedy / heap | 🔁 REVISION |
| 12 | [Regions Cut By Slashes](https://leetcode.com/problems/regions-cut-by-slashes/) | 🟡 MEDIUM | 🚀 C | DSU on subcells | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Redundant Connection](https://leetcode.com/problems/redundant-connection/) — MEDIUM
- [ ] [Accounts Merge](https://leetcode.com/problems/accounts-merge/) — MEDIUM
- [ ] [Number of Operations to Make Network Connected](https://leetcode.com/problems/number-of-operations-to-make-network-connected/) — MEDIUM

**📘 Reinforcement (Tier B):** [Most Stones Removed with Same Row or Column](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/) · [Satisfiability of Equality Equations](https://leetcode.com/problems/satisfiability-of-equality-equations/) · [Smallest String With Swaps](https://leetcode.com/problems/smallest-string-with-swaps/) · [Evaluate Division](https://leetcode.com/problems/evaluate-division/)

**🚀 Stretch (Tier C, never mandatory):** [Regions Cut By Slashes](https://leetcode.com/problems/regions-cut-by-slashes/)

**🔁 Revision tasks:**
- [ ] [Number of Provinces](https://leetcode.com/problems/number-of-provinces/) — Re-solve using DSU instead of DFS
- [ ] [Is Graph Bipartite?](https://leetcode.com/problems/is-graph-bipartite/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Max Area of Island](https://leetcode.com/problems/max-area-of-island/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Task Scheduler](https://leetcode.com/problems/task-scheduler/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'merge groups', 'are these connected', 'detect redundant edge', 'equivalence classes'. find(x) with path compression, unite(a,b) with union by size/rank; amortised near O(α(n)). Redundant Connection: the first edge whose endpoints already share a root creates the cycle. Accounts Merge: union emails that share an account. Compare: DFS recounts components from scratch, DSU updates incrementally.

**Dry-run exercise:** Run DSU on edges [[1,2],[1,3],[2,3]] and show the parent array after each union.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] What do path compression and union by size each improve?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-47"></a>
### Day 47 — Dijkstra, Weighted Shortest Paths and Bellman-Ford

> 📅 Sat, Dec 5 · Week 7 · ⏱ ≈ 5 h 06 min · 🔗 [Back to Week 7](#week-7)

**Learning objective:** Compute shortest paths on weighted graphs and choose between BFS, Dijkstra, Bellman-Ford and Floyd-Warshall.  
**Pattern:** Dijkstra (min-heap), Bellman-Ford, Floyd-Warshall  
**Prerequisites:** Day 36 (heaps), Day 44  
**Planned workload:** **11** items = 7 🆕 new + 4 🔁 revision · ⭐ 3 Tier A must-solve · ➕ 2 optional (not counted) · ⏱ ≈ 5 h 06 min (+≈ 1 h 30 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Network Delay Time](https://leetcode.com/problems/network-delay-time/) | 🟡 MEDIUM | ⭐ A | Dijkstra | 🆕 NEW |
| 2 | [Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/) | 🟡 MEDIUM | ⭐ A | Dijkstra on grid (max-edge) | 🆕 NEW |
| 3 | [Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/) | 🟡 MEDIUM | ⭐ A | Bellman-Ford / BFS levels | 🆕 NEW |
| 4 | [Swim in Rising Water](https://leetcode.com/problems/swim-in-rising-water/) | 🔴 HARD | 📘 B | Dijkstra / binary search + BFS | 🆕 NEW |
| 5 | [Path with Maximum Probability](https://leetcode.com/problems/path-with-maximum-probability/) | 🟡 MEDIUM | 📘 B | Dijkstra (max-product) | 🆕 NEW |
| 6 | [Find the City With the Smallest Number of Neighbors at a Threshold Distance](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/) | 🟡 MEDIUM | 📘 B | Floyd-Warshall | 🆕 NEW |
| 7 | [Number of Ways to Arrive at Destination](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/) | 🟡 MEDIUM | 📘 B | Dijkstra with path counts | 🆕 NEW |
| 8 | [Word Ladder](https://leetcode.com/problems/word-ladder/) | 🔴 HARD | ⭐ A | State-space BFS | 🔁 REVISION |
| 9 | [Number of Operations to Make Network Connected](https://leetcode.com/problems/number-of-operations-to-make-network-connected/) | 🟡 MEDIUM | ⭐ A | DSU components | 🔁 REVISION |
| 10 | [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/) | 🟡 MEDIUM | ⭐ A | Reverse multi-source DFS/BFS | 🔁 REVISION |
| 11 | [Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/) | 🟡 MEDIUM | ⭐ A | Trie insert/search | 🔁 REVISION |
| 12 | [Shortest Path Visiting All Nodes](https://leetcode.com/problems/shortest-path-visiting-all-nodes/) | 🔴 HARD | 🚀 C | BFS with bitmask | ➕ OPTIONAL |
| 13 | [Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/) | 🔴 HARD | 🚀 C | Eulerian path (Hierholzer) | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Network Delay Time](https://leetcode.com/problems/network-delay-time/) — MEDIUM
- [ ] [Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/) — MEDIUM
- [ ] [Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/) — MEDIUM

**📘 Reinforcement (Tier B):** [Swim in Rising Water](https://leetcode.com/problems/swim-in-rising-water/) · [Path with Maximum Probability](https://leetcode.com/problems/path-with-maximum-probability/) · [Find the City With the Smallest Number of Neighbors at a Threshold Distance](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/) · [Number of Ways to Arrive at Destination](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/)

**🚀 Stretch (Tier C, never mandatory):** [Shortest Path Visiting All Nodes](https://leetcode.com/problems/shortest-path-visiting-all-nodes/) · [Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/)

**🔁 Revision tasks:**
- [ ] [Word Ladder](https://leetcode.com/problems/word-ladder/) — Explain why this is BFS and not Dijkstra
- [ ] [Number of Operations to Make Network Connected](https://leetcode.com/problems/number-of-operations-to-make-network-connected/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'minimum time/cost', non-negative weights → Dijkstra. Min-heap of (dist,node); skip stale entries; relax edges. Time O((V+E) log V). Bellman-Ford relaxes all edges up to k times: right for 'at most K stops' (Cheapest Flights) and negative weights. Floyd-Warshall (O(V³)) for all-pairs on small graphs. Dijkstra generalises BFS by replacing the queue with a heap.

**Dry-run exercise:** Run Dijkstra on Network Delay Time example [[2,1,1],[2,3,1],[3,4,1]], n=4, k=2 and list the heap each step.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Why does Dijkstra fail with negative edge weights?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-48"></a>
### Day 48 — Minimum Spanning Tree and Graph Consolidation

> 📅 Sun, Dec 6 · Week 7 · ⏱ ≈ 4 h 23 min · 🔗 [Back to Week 7](#week-7)

**Learning objective:** Build minimum spanning trees with Kruskal (DSU) or Prim (heap) and consolidate graph traversal patterns.  
**Pattern:** Kruskal / Prim, grid graph variants  
**Prerequisites:** Day 46–47  
**Planned workload:** **9** items = 6 🆕 new + 3 🔁 revision · ⭐ 3 Tier A must-solve · ➕ 2 optional (not counted) · ⏱ ≈ 4 h 23 min (+≈ 1 h 30 min if you attempt the optional items)

> [!NOTE]
> Planned load is below 10 items on purpose: the concepts today are dense, so depth beats volume.

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/) | 🟡 MEDIUM | ⭐ A | Kruskal / Prim | 🆕 NEW |
| 2 | [Number of Enclaves](https://leetcode.com/problems/number-of-enclaves/) | 🟡 MEDIUM | ⭐ A | Border DFS/BFS | 🆕 NEW |
| 3 | [Shortest Bridge](https://leetcode.com/problems/shortest-bridge/) | 🟡 MEDIUM | ⭐ A | DFS + multi-source BFS | 🆕 NEW |
| 4 | [Count Unreachable Pairs of Nodes in an Undirected Graph](https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/) | 🟡 MEDIUM | 📘 B | Components counting | 🆕 NEW |
| 5 | [Minimum Cost to Make at Least One Valid Path in a Grid](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/) | 🔴 HARD | 📘 B | 0-1 BFS / Dijkstra | 🆕 NEW |
| 6 | [Detonate the Maximum Bombs](https://leetcode.com/problems/detonate-the-maximum-bombs/) | 🟡 MEDIUM | 📘 B | Directed graph DFS | 🆕 NEW |
| 7 | [Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/) | 🟡 MEDIUM | ⭐ A | Bellman-Ford / BFS levels | 🔁 REVISION |
| 8 | [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) | 🟡 MEDIUM | ⭐ A | Topological order | 🔁 REVISION |
| 9 | [LRU Cache](https://leetcode.com/problems/lru-cache/) | 🟡 MEDIUM | ⭐ A | Hash map + doubly linked list | 🔁 REVISION |
| 10 | [Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree](https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/) | 🔴 HARD | 🚀 C | Kruskal variations | ➕ OPTIONAL |
| 11 | [Making A Large Island](https://leetcode.com/problems/making-a-large-island/) | 🔴 HARD | 🚀 C | Components + sizes | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/) — MEDIUM
- [ ] [Number of Enclaves](https://leetcode.com/problems/number-of-enclaves/) — MEDIUM
- [ ] [Shortest Bridge](https://leetcode.com/problems/shortest-bridge/) — MEDIUM

**📘 Reinforcement (Tier B):** [Count Unreachable Pairs of Nodes in an Undirected Graph](https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/) · [Minimum Cost to Make at Least One Valid Path in a Grid](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/) · [Detonate the Maximum Bombs](https://leetcode.com/problems/detonate-the-maximum-bombs/)

**🚀 Stretch (Tier C, never mandatory):** [Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree](https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/) · [Making A Large Island](https://leetcode.com/problems/making-a-large-island/)

**🔁 Revision tasks:**
- [ ] [Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [LRU Cache](https://leetcode.com/problems/lru-cache/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'connect all points at minimum total cost'. Kruskal: sort edges by weight, add an edge if it joins two different DSU components; stop at V-1 edges. Prim: grow from a node using a min-heap of crossing edges. Time O(E log E). MST ≠ shortest path: MST minimises total edge weight, Dijkstra minimises distance from a source. Also practise grid-based graph problems.

**Dry-run exercise:** Run Kruskal on 4 points and list sorted edges and which are accepted or rejected.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] How do I explain the difference between an MST and a shortest-path tree?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-49"></a>
### Day 49 — Week 7 Test — Graphs

> 📅 Mon, Dec 7 · Week 7 · ⏱ ≈ 3 h 45 min · 🔗 [Back to Week 7](#week-7)

**Learning objective:** Solve unseen graph problems and name the algorithm before coding.  
**Pattern:** Mixed: BFS/DFS, topological sort, DSU  
**Prerequisites:** Day 43–48  
**Planned workload:** **8** items = 3 🆕 new + 5 🔁 revision · ⭐ 3 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 3 h 45 min (+≈ 0 h 45 min if you attempt the optional items)

> [!NOTE]
> Planned load is below 10 items on purpose: a timed test plus a structured review replaces a normal question set.

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Time Needed to Inform All Employees](https://leetcode.com/problems/time-needed-to-inform-all-employees/) | 🟡 MEDIUM | ⭐ A | Tree DFS/BFS | 🆕 NEW |
| 2 | [Shortest Path with Alternating Colors](https://leetcode.com/problems/shortest-path-with-alternating-colors/) | 🟡 MEDIUM | ⭐ A | BFS with state | 🆕 NEW |
| 3 | [Find All Possible Recipes from Given Supplies](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/) | 🟡 MEDIUM | ⭐ A | Topological sort | 🆕 NEW |
| 4 | [Accounts Merge](https://leetcode.com/problems/accounts-merge/) | 🟡 MEDIUM | ⭐ A | DSU on emails | 🔁 REVISION |
| 5 | [Find the Kth Largest Integer in the Array](https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/) | 🟡 MEDIUM | ⭐ A | Heap with string comparator | 🔁 REVISION |
| 6 | [Number of Islands](https://leetcode.com/problems/number-of-islands/) | 🟡 MEDIUM | ⭐ A | Grid DFS components | 🔁 REVISION |
| 7 | [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) | 🟡 MEDIUM | ⭐ A | Topological order | 🔁 REVISION |
| 8 | [Shortest Bridge](https://leetcode.com/problems/shortest-bridge/) | 🟡 MEDIUM | ⭐ A | DFS + multi-source BFS | 🔁 REVISION |
| 9 | [Remove Max Number of Edges to Keep Graph Fully Traversable](https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/) | 🔴 HARD | 📘 B | Two DSUs | ➕ OPTIONAL |

**⏱ Timed test protocol:** 90 minutes · no hints · no solution lookup · 30 min cap per problem. Attempt the ⭐ problems first, then the optional one if time remains. After the clock stops, spend 45 minutes on the post-mortem (see the review below the week).

**⭐ Must solve (Tier A):**
- [ ] [Time Needed to Inform All Employees](https://leetcode.com/problems/time-needed-to-inform-all-employees/) — MEDIUM
- [ ] [Shortest Path with Alternating Colors](https://leetcode.com/problems/shortest-path-with-alternating-colors/) — MEDIUM
- [ ] [Find All Possible Recipes from Given Supplies](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/) — MEDIUM

**📘 Reinforcement (Tier B):** [Remove Max Number of Edges to Keep Graph Fully Traversable](https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/) ➕

**🔁 Revision tasks:**
- [ ] [Accounts Merge](https://leetcode.com/problems/accounts-merge/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Find the Kth Largest Integer in the Array](https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/) — Re-solve under a 25-min timer, then compare with your notes
- [ ] [Number of Islands](https://leetcode.com/problems/number-of-islands/) — Weekly review: re-solve (prioritise anything you failed this week)
- [ ] [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) — Weekly review: re-solve (prioritise anything you failed this week)
- [ ] [Shortest Bridge](https://leetcode.com/problems/shortest-bridge/) — Weekly review: re-solve (prioritise anything you failed this week)

**Scope:** Mixed: BFS/DFS, topological sort, DSU. Solve unseen graph problems and name the algorithm before coding. Every problem is a variation on patterns taught on Days 43–48; if the pattern is not obvious in 3 minutes, write the brute force first and look for the bottleneck.

**End-of-day checkpoint:**
- [ ] Did I name the pattern for each problem within 3 minutes?
- [ ] Did I solve at least two of the three ⭐ problems independently?
- [ ] For every failed problem, did I write the missed insight in my mistake log?
- [ ] Did I re-attempt each failed problem the next day without notes?
- [ ] Which pattern from this week do I trust the least?

**Completion rule:** Complete when the timed test was taken honestly, the post-mortem for every failed problem is written, and each Tier A weak spot is logged for the weekly remediation checklist. Optional problems never block progress.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

#### Week 7 review and assessment

- **Timed test:** Day 49 (Mon, Dec 7). Scope is limited to patterns taught in Days 43–48.
- **Revision plan:** D+1 / D+3 / D+7 tasks are already scheduled in each day's table. On Day 49 also re-solve this week's failed Tier A problems from the mistake log.
- **Weak-topic remediation checklist** (tick only after re-solving without hints):
  - [ ] Graph DFS / components
  - [ ] BFS and multi-source BFS
  - [ ] Cycle detection / topo sort
  - [ ] DSU
  - [ ] Dijkstra / Bellman-Ford
  - [ ] MST
- **Weekly self-assessment** (rate confidence 1–5 after the test):

  | Pattern | Confidence (1–5) | Needs reattempt? |
  |---|:---:|:---:|
  | Graph DFS / components | | |
  | BFS and multi-source BFS | | |
  | Cycle detection / topo sort | | |
  | DSU | | |
  | Dijkstra / Bellman-Ford | | |
  | MST | | |

- **Weekly reflection:** What pattern did I confuse with another? Which mistake repeated? Which 3 problems will I re-solve first next week?

---

<a id="week-8"></a>
## Week 8 — Greedy Algorithms, Intervals and Advanced Binary Search

📅 Tue, Dec 8 → Mon, Dec 14 · ⬅️ [Week 7](#week-7) · ➡️ [Week 9](#week-9)

**Weekly objective:** Learn when a local choice is provably optimal, sweep intervals, and extend binary search.  
**Prerequisite knowledge:** Weeks 1–7; sorting and heaps.  
**Pattern coverage:** Interval merging · Activity selection · Jump / gas station feasibility · Greedy proof thinking · Advanced binary search (cumulative)

| Day | Date | Topic | ⭐ A | Planned items | Time |
|---|---|---|---:|---:|---|
| [50](#day-50) | Tue, Dec 8 | Interval Fundamentals: Merging and Inserting | 4 | 11 | ≈ 4 h 30 min |
| [51](#day-51) | Wed, Dec 9 | Activity Selection and Scheduling Greedy | 4 | 12 | ≈ 4 h 42 min |
| [52](#day-52) | Thu, Dec 10 | Jump Game, Gas Station and Feasibility Greedy | 5 | 12 | ≈ 5 h 31 min |
| [53](#day-53) | Fri, Dec 11 | Greedy Strategies and Proof Thinking | 3 | 10 | ≈ 4 h 34 min |
| [54](#day-54) | Sat, Dec 12 | Advanced Binary Search (Cumulative Extension) | 4 | 11 | ≈ 5 h 21 min |
| [55](#day-55) | Sun, Dec 13 | Greedy Consolidation and Sorting Tricks | 4 | 11 | ≈ 4 h 46 min |
| [56](#day-56) | Mon, Dec 14 | Week 8 Test — Greedy and Intervals | 3 | 8 | ≈ 3 h 45 min |

**Weekly targets:** ⭐ Tier A **27** problems · 📘 Tier B **28** · 🚀 Tier C **8** (all authored this week, distinct) · 🔁 **23** revision tasks. Tier B/C are optional; only Tier A counts toward the weekly must-solve target.

<a id="day-50"></a>
### Day 50 — Interval Fundamentals: Merging and Inserting

> 📅 Tue, Dec 8 · Week 8 · ⏱ ≈ 4 h 30 min · 🔗 [Back to Week 8](#week-8)

**Learning objective:** Sort intervals and sweep to merge, insert and intersect them without missing edge cases.  
**Pattern:** Sort by start, sweep, merge  
**Prerequisites:** Day 05 (sorting basics)  
**Planned workload:** **11** items = 8 🆕 new + 3 🔁 revision · ⭐ 4 Tier A must-solve · ➕ 2 optional (not counted) · ⏱ ≈ 4 h 30 min (+≈ 1 h 13 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Merge Intervals](https://leetcode.com/problems/merge-intervals/) | 🟡 MEDIUM | ⭐ A | Sort + sweep | 🆕 NEW |
| 2 | [Insert Interval](https://leetcode.com/problems/insert-interval/) | 🟡 MEDIUM | ⭐ A | Linear merge | 🆕 NEW |
| 3 | [Interval List Intersections](https://leetcode.com/problems/interval-list-intersections/) | 🟡 MEDIUM | ⭐ A | Two pointers on intervals | 🆕 NEW |
| 4 | [My Calendar I](https://leetcode.com/problems/my-calendar-i/) | 🟡 MEDIUM | ⭐ A | Overlap test / ordered set | 🆕 NEW |
| 5 | [Summary Ranges](https://leetcode.com/problems/summary-ranges/) | 🟢 EASY | 📘 B | Consecutive runs | 🆕 NEW |
| 6 | [Remove Covered Intervals](https://leetcode.com/problems/remove-covered-intervals/) | 🟡 MEDIUM | 📘 B | Sort by start, end desc | 🆕 NEW |
| 7 | [Meeting Rooms II 🔒](https://leetcode.com/problems/meeting-rooms-ii/) | 🟡 MEDIUM | 📘 B | Sweep line / min-heap | 🆕 NEW |
| 8 | [Teemo Attacking](https://leetcode.com/problems/teemo-attacking/) | 🟢 EASY | 📘 B | Interval union | 🆕 NEW |
| 9 | [Find All Possible Recipes from Given Supplies](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/) | 🟡 MEDIUM | ⭐ A | Topological sort | 🔁 REVISION |
| 10 | [Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/) | 🟡 MEDIUM | ⭐ A | Dijkstra on grid (max-edge) | 🔁 REVISION |
| 11 | [Number of Islands](https://leetcode.com/problems/number-of-islands/) | 🟡 MEDIUM | ⭐ A | Grid DFS components | 🔁 REVISION |
| 12 | [My Calendar II](https://leetcode.com/problems/my-calendar-ii/) | 🟡 MEDIUM | 📘 B | Overlap counting | ➕ OPTIONAL |
| 13 | [Data Stream as Disjoint Intervals](https://leetcode.com/problems/data-stream-as-disjoint-intervals/) | 🔴 HARD | 🚀 C | Ordered map | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Merge Intervals](https://leetcode.com/problems/merge-intervals/) — MEDIUM
- [ ] [Insert Interval](https://leetcode.com/problems/insert-interval/) — MEDIUM
- [ ] [Interval List Intersections](https://leetcode.com/problems/interval-list-intersections/) — MEDIUM
- [ ] [My Calendar I](https://leetcode.com/problems/my-calendar-i/) — MEDIUM

**📘 Reinforcement (Tier B):** [Summary Ranges](https://leetcode.com/problems/summary-ranges/) · [Remove Covered Intervals](https://leetcode.com/problems/remove-covered-intervals/) · [Meeting Rooms II 🔒](https://leetcode.com/problems/meeting-rooms-ii/) · [Teemo Attacking](https://leetcode.com/problems/teemo-attacking/) · [My Calendar II](https://leetcode.com/problems/my-calendar-ii/) ➕

**🚀 Stretch (Tier C, never mandatory):** [Data Stream as Disjoint Intervals](https://leetcode.com/problems/data-stream-as-disjoint-intervals/)

**🔁 Revision tasks:**
- [ ] [Find All Possible Recipes from Given Supplies](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Number of Islands](https://leetcode.com/problems/number-of-islands/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'overlapping', 'merge', 'insert', 'intersect'. Sort by start; keep a current interval; if next.start <= cur.end merge (cur.end=max), else emit. Two overlapping intervals: a.start <= b.end && b.start <= a.end. Insert Interval needs no sort: add left non-overlaps, merge overlaps, add right. Time O(n log n).

**Dry-run exercise:** Dry-run Merge Intervals on [[1,3],[2,6],[8,10],[15,18]] and show the output list per step.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Do touching intervals like [1,2] and [2,3] overlap — and how does my code decide?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-51"></a>
### Day 51 — Activity Selection and Scheduling Greedy

> 📅 Wed, Dec 9 · Week 8 · ⏱ ≈ 4 h 42 min · 🔗 [Back to Week 8](#week-8)

**Learning objective:** Apply the earliest-finish-time greedy to maximise non-overlapping selections and minimise removals.  
**Pattern:** Greedy by earliest end / exchange argument  
**Prerequisites:** Day 50  
**Planned workload:** **12** items = 9 🆕 new + 3 🔁 revision · ⭐ 4 Tier A must-solve · ➕ 2 optional (not counted) · ⏱ ≈ 4 h 42 min (+≈ 1 h 13 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/) | 🟡 MEDIUM | ⭐ A | Sort by end | 🆕 NEW |
| 2 | [Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) | 🟡 MEDIUM | ⭐ A | Sort by end | 🆕 NEW |
| 3 | [Car Pooling](https://leetcode.com/problems/car-pooling/) | 🟡 MEDIUM | ⭐ A | Difference array / sweep | 🆕 NEW |
| 4 | [Assign Cookies](https://leetcode.com/problems/assign-cookies/) | 🟢 EASY | ⭐ A | Sort + two pointers | 🆕 NEW |
| 5 | [Two City Scheduling](https://leetcode.com/problems/two-city-scheduling/) | 🟡 MEDIUM | 📘 B | Sort by cost difference | 🆕 NEW |
| 6 | [Maximum Units on a Truck](https://leetcode.com/problems/maximum-units-on-a-truck/) | 🟢 EASY | 📘 B | Sort by value | 🆕 NEW |
| 7 | [Lemonade Change](https://leetcode.com/problems/lemonade-change/) | 🟢 EASY | 📘 B | Greedy counters | 🆕 NEW |
| 8 | [Maximum Length of Pair Chain](https://leetcode.com/problems/maximum-length-of-pair-chain/) | 🟡 MEDIUM | 📘 B | Sort by end | 🆕 NEW |
| 9 | [Largest Number](https://leetcode.com/problems/largest-number/) | 🟡 MEDIUM | 📘 B | Custom comparator | 🆕 NEW |
| 10 | [My Calendar I](https://leetcode.com/problems/my-calendar-i/) | 🟡 MEDIUM | ⭐ A | Overlap test / ordered set | 🔁 REVISION |
| 11 | [Number of Enclaves](https://leetcode.com/problems/number-of-enclaves/) | 🟡 MEDIUM | ⭐ A | Border DFS/BFS | 🔁 REVISION |
| 12 | [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) | 🟡 MEDIUM | ⭐ A | Multi-source BFS | 🔁 REVISION |
| 13 | [Video Stitching](https://leetcode.com/problems/video-stitching/) | 🟡 MEDIUM | 📘 B | Greedy reach | ➕ OPTIONAL |
| 14 | [Minimum Number of Taps to Open to Water a Garden](https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/) | 🔴 HARD | 🚀 C | Greedy reach | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/) — MEDIUM
- [ ] [Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) — MEDIUM
- [ ] [Car Pooling](https://leetcode.com/problems/car-pooling/) — MEDIUM
- [ ] [Assign Cookies](https://leetcode.com/problems/assign-cookies/) — EASY

**📘 Reinforcement (Tier B):** [Two City Scheduling](https://leetcode.com/problems/two-city-scheduling/) · [Maximum Units on a Truck](https://leetcode.com/problems/maximum-units-on-a-truck/) · [Lemonade Change](https://leetcode.com/problems/lemonade-change/) · [Maximum Length of Pair Chain](https://leetcode.com/problems/maximum-length-of-pair-chain/) · [Largest Number](https://leetcode.com/problems/largest-number/) · [Video Stitching](https://leetcode.com/problems/video-stitching/) ➕

**🚀 Stretch (Tier C, never mandatory):** [Minimum Number of Taps to Open to Water a Garden](https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/)

**🔁 Revision tasks:**
- [ ] [My Calendar I](https://leetcode.com/problems/my-calendar-i/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Number of Enclaves](https://leetcode.com/problems/number-of-enclaves/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'maximum number of non-overlapping', 'minimum arrows', 'minimum removals'. Sort by END time; take an interval if start >= last end. Non-overlapping Intervals answer = n - maxKept. Arrows: sort by end and shoot at end positions. Car Pooling: difference array/sweep. Prove greedy with an exchange argument: swapping any optimal choice for the earliest-ending one never hurts.

**Dry-run exercise:** Dry-run Non-overlapping Intervals on [[1,2],[2,3],[3,4],[1,3]] sorted by end.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Why sort by end time rather than start time?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-52"></a>
### Day 52 — Jump Game, Gas Station and Feasibility Greedy

> 📅 Thu, Dec 10 · Week 8 · ⏱ ≈ 5 h 31 min · 🔗 [Back to Week 8](#week-8)

**Learning objective:** Track the furthest reachable point or running surplus to decide feasibility in one pass.  
**Pattern:** Greedy reachability, running balance  
**Prerequisites:** Day 51  
**Planned workload:** **12** items = 9 🆕 new + 3 🔁 revision · ⭐ 5 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 5 h 31 min (+≈ 0 h 45 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Jump Game](https://leetcode.com/problems/jump-game/) | 🟡 MEDIUM | ⭐ A | Furthest reach | 🆕 NEW |
| 2 | [Jump Game II](https://leetcode.com/problems/jump-game-ii/) | 🟡 MEDIUM | ⭐ A | Greedy layers | 🆕 NEW |
| 3 | [Gas Station](https://leetcode.com/problems/gas-station/) | 🟡 MEDIUM | ⭐ A | Running tank | 🆕 NEW |
| 4 | [Partition Labels](https://leetcode.com/problems/partition-labels/) | 🟡 MEDIUM | ⭐ A | Last occurrence | 🆕 NEW |
| 5 | [Hand of Straights](https://leetcode.com/problems/hand-of-straights/) | 🟡 MEDIUM | ⭐ A | Greedy + ordered counts | 🆕 NEW |
| 6 | [Merge Triplets to Form Target Triplet](https://leetcode.com/problems/merge-triplets-to-form-target-triplet/) | 🟡 MEDIUM | 📘 B | Filtering greedy | 🆕 NEW |
| 7 | [Candy](https://leetcode.com/problems/candy/) | 🔴 HARD | 📘 B | Two-pass greedy | 🆕 NEW |
| 8 | [Can Place Flowers](https://leetcode.com/problems/can-place-flowers/) | 🟢 EASY | 📘 B | Greedy scan | 🆕 NEW |
| 9 | [Jump Game III](https://leetcode.com/problems/jump-game-iii/) | 🟡 MEDIUM | 📘 B | BFS/DFS on indices | 🆕 NEW |
| 10 | [Assign Cookies](https://leetcode.com/problems/assign-cookies/) | 🟢 EASY | ⭐ A | Sort + two pointers | 🔁 REVISION |
| 11 | [Shortest Path with Alternating Colors](https://leetcode.com/problems/shortest-path-with-alternating-colors/) | 🟡 MEDIUM | ⭐ A | BFS with state | 🔁 REVISION |
| 12 | [Course Schedule](https://leetcode.com/problems/course-schedule/) | 🟡 MEDIUM | ⭐ A | Cycle detection / Kahn | 🔁 REVISION |
| 13 | [Minimum Number of Increments on Subarrays to Form a Target Array](https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/) | 🔴 HARD | 🚀 C | Positive differences | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Jump Game](https://leetcode.com/problems/jump-game/) — MEDIUM
- [ ] [Jump Game II](https://leetcode.com/problems/jump-game-ii/) — MEDIUM
- [ ] [Gas Station](https://leetcode.com/problems/gas-station/) — MEDIUM
- [ ] [Partition Labels](https://leetcode.com/problems/partition-labels/) — MEDIUM
- [ ] [Hand of Straights](https://leetcode.com/problems/hand-of-straights/) — MEDIUM

**📘 Reinforcement (Tier B):** [Merge Triplets to Form Target Triplet](https://leetcode.com/problems/merge-triplets-to-form-target-triplet/) · [Candy](https://leetcode.com/problems/candy/) · [Can Place Flowers](https://leetcode.com/problems/can-place-flowers/) · [Jump Game III](https://leetcode.com/problems/jump-game-iii/)

**🚀 Stretch (Tier C, never mandatory):** [Minimum Number of Increments on Subarrays to Form a Target Array](https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/)

**🔁 Revision tasks:**
- [ ] [Assign Cookies](https://leetcode.com/problems/assign-cookies/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Shortest Path with Alternating Colors](https://leetcode.com/problems/shortest-path-with-alternating-colors/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Course Schedule](https://leetcode.com/problems/course-schedule/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'can reach the end', 'minimum jumps', 'circular route'. Jump Game: maintain furthest reach; fail if i > reach. Jump Game II: BFS-like layers (curEnd, farthest). Gas Station: if total gas >= total cost a solution exists; the start is the index after the point where the running tank last went negative. Partition Labels: extend the current end by last occurrence. Time O(n).

**Dry-run exercise:** Dry-run Gas Station on gas=[1,2,3,4,5], cost=[3,4,5,1,2] with the tank and start values.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Why does resetting the start after a negative tank never skip a valid start?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-53"></a>
### Day 53 — Greedy Strategies and Proof Thinking

> 📅 Fri, Dec 11 · Week 8 · ⏱ ≈ 4 h 34 min · 🔗 [Back to Week 8](#week-8)

**Learning objective:** Choose a local rule, justify it, and know when greedy fails and DP is required.  
**Pattern:** Greedy with sorting / digit and frequency tricks  
**Prerequisites:** Day 50–52  
**Planned workload:** **10** items = 7 🆕 new + 3 🔁 revision · ⭐ 3 Tier A must-solve · ➕ 2 optional (not counted) · ⏱ ≈ 4 h 34 min (+≈ 1 h 13 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Queue Reconstruction by Height](https://leetcode.com/problems/queue-reconstruction-by-height/) | 🟡 MEDIUM | ⭐ A | Sort + insert | 🆕 NEW |
| 2 | [Maximum Swap](https://leetcode.com/problems/maximum-swap/) | 🟡 MEDIUM | ⭐ A | Last occurrence of digits | 🆕 NEW |
| 3 | [Minimum Deletions to Make Character Frequencies Unique](https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/) | 🟡 MEDIUM | ⭐ A | Frequency greedy | 🆕 NEW |
| 4 | [Monotone Increasing Digits](https://leetcode.com/problems/monotone-increasing-digits/) | 🟡 MEDIUM | 📘 B | Digit greedy | 🆕 NEW |
| 5 | [Bag of Tokens](https://leetcode.com/problems/bag-of-tokens/) | 🟡 MEDIUM | 📘 B | Two pointers greedy | 🆕 NEW |
| 6 | [Broken Calculator](https://leetcode.com/problems/broken-calculator/) | 🟡 MEDIUM | 📘 B | Reverse greedy | 🆕 NEW |
| 7 | [Maximum Score From Removing Substrings](https://leetcode.com/problems/maximum-score-from-removing-substrings/) | 🟡 MEDIUM | 📘 B | Stack greedy | 🆕 NEW |
| 8 | [Hand of Straights](https://leetcode.com/problems/hand-of-straights/) | 🟡 MEDIUM | ⭐ A | Greedy + ordered counts | 🔁 REVISION |
| 9 | [Insert Interval](https://leetcode.com/problems/insert-interval/) | 🟡 MEDIUM | ⭐ A | Linear merge | 🔁 REVISION |
| 10 | [Redundant Connection](https://leetcode.com/problems/redundant-connection/) | 🟡 MEDIUM | ⭐ A | DSU cycle detection | 🔁 REVISION |
| 11 | [Split Array into Consecutive Subsequences](https://leetcode.com/problems/split-array-into-consecutive-subsequences/) | 🟡 MEDIUM | 🚀 C | Greedy with counts | ➕ OPTIONAL |
| 12 | [Patching Array](https://leetcode.com/problems/patching-array/) | 🔴 HARD | 🚀 C | Greedy coverage | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Queue Reconstruction by Height](https://leetcode.com/problems/queue-reconstruction-by-height/) — MEDIUM
- [ ] [Maximum Swap](https://leetcode.com/problems/maximum-swap/) — MEDIUM
- [ ] [Minimum Deletions to Make Character Frequencies Unique](https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/) — MEDIUM

**📘 Reinforcement (Tier B):** [Monotone Increasing Digits](https://leetcode.com/problems/monotone-increasing-digits/) · [Bag of Tokens](https://leetcode.com/problems/bag-of-tokens/) · [Broken Calculator](https://leetcode.com/problems/broken-calculator/) · [Maximum Score From Removing Substrings](https://leetcode.com/problems/maximum-score-from-removing-substrings/)

**🚀 Stretch (Tier C, never mandatory):** [Split Array into Consecutive Subsequences](https://leetcode.com/problems/split-array-into-consecutive-subsequences/) · [Patching Array](https://leetcode.com/problems/patching-array/)

**🔁 Revision tasks:**
- [ ] [Hand of Straights](https://leetcode.com/problems/hand-of-straights/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Insert Interval](https://leetcode.com/problems/insert-interval/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Redundant Connection](https://leetcode.com/problems/redundant-connection/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'rearrange to maximise/minimise', 'smallest/largest number', 'reconstruct'. Typical rules: sort by a key, choose the best now, fix the leftmost digit. Test greedy with a counter-example search: if a small case breaks it, use DP. Greedy vs DP: greedy never reconsiders; DP keeps multiple states. Queue Reconstruction: sort by height desc, insert by k.

**Dry-run exercise:** Find a counter-example showing why 'take the largest coin first' fails for coins {1,3,4}, amount 6.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Can I give an exchange argument for at least one problem today?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-54"></a>
### Day 54 — Advanced Binary Search (Cumulative Extension)

> 📅 Sat, Dec 12 · Week 8 · ⏱ ≈ 5 h 21 min · 🔗 [Back to Week 8](#week-8)

**Learning objective:** Extend binary search to 'minimise the maximum partition', counting-based and boundary-heavy problems (this day is cumulative revision of the technique, not new greedy content).  
**Pattern:** Binary search on answer, bounds, count-based search  
**Prerequisites:** Day 22–24, 28  
**Planned workload:** **11** items = 8 🆕 new + 3 🔁 revision · ⭐ 4 Tier A must-solve · ➕ 2 optional (not counted) · ⏱ ≈ 5 h 21 min (+≈ 1 h 30 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/) | 🔴 HARD | ⭐ A | Binary search on answer + greedy check | 🆕 NEW |
| 2 | [Kth Missing Positive Number](https://leetcode.com/problems/kth-missing-positive-number/) | 🟢 EASY | ⭐ A | Binary search on missing count | 🆕 NEW |
| 3 | [Heaters](https://leetcode.com/problems/heaters/) | 🟡 MEDIUM | ⭐ A | Binary search nearest | 🆕 NEW |
| 4 | [Minimum Speed to Arrive on Time](https://leetcode.com/problems/minimum-speed-to-arrive-on-time/) | 🟡 MEDIUM | ⭐ A | Binary search on answer | 🆕 NEW |
| 5 | [Sum of Mutated Array Closest to Target](https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/) | 🟡 MEDIUM | 📘 B | Binary search on cap | 🆕 NEW |
| 6 | [Nth Magical Number](https://leetcode.com/problems/nth-magical-number/) | 🔴 HARD | 📘 B | Binary search + LCM | 🆕 NEW |
| 7 | [Find K-th Smallest Pair Distance](https://leetcode.com/problems/find-k-th-smallest-pair-distance/) | 🔴 HARD | 📘 B | Binary search + two pointers | 🆕 NEW |
| 8 | [Special Array With X Elements Greater Than or Equal X](https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/) | 🟢 EASY | 📘 B | Binary search on count | 🆕 NEW |
| 9 | [Minimum Deletions to Make Character Frequencies Unique](https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/) | 🟡 MEDIUM | ⭐ A | Frequency greedy | 🔁 REVISION |
| 10 | [Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) | 🟡 MEDIUM | ⭐ A | Sort by end | 🔁 REVISION |
| 11 | [Network Delay Time](https://leetcode.com/problems/network-delay-time/) | 🟡 MEDIUM | ⭐ A | Dijkstra | 🔁 REVISION |
| 12 | [Kth Smallest Number in Multiplication Table](https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/) | 🔴 HARD | 🚀 C | Binary search on count | ➕ OPTIONAL |
| 13 | [Maximum Running Time of N Computers](https://leetcode.com/problems/maximum-running-time-of-n-computers/) | 🔴 HARD | 🚀 C | Binary search on time | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/) — HARD
- [ ] [Kth Missing Positive Number](https://leetcode.com/problems/kth-missing-positive-number/) — EASY
- [ ] [Heaters](https://leetcode.com/problems/heaters/) — MEDIUM
- [ ] [Minimum Speed to Arrive on Time](https://leetcode.com/problems/minimum-speed-to-arrive-on-time/) — MEDIUM

**📘 Reinforcement (Tier B):** [Sum of Mutated Array Closest to Target](https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/) · [Nth Magical Number](https://leetcode.com/problems/nth-magical-number/) · [Find K-th Smallest Pair Distance](https://leetcode.com/problems/find-k-th-smallest-pair-distance/) · [Special Array With X Elements Greater Than or Equal X](https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/)

**🚀 Stretch (Tier C, never mandatory):** [Kth Smallest Number in Multiplication Table](https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/) · [Maximum Running Time of N Computers](https://leetcode.com/problems/maximum-running-time-of-n-computers/)

**🔁 Revision tasks:**
- [ ] [Minimum Deletions to Make Character Frequencies Unique](https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Network Delay Time](https://leetcode.com/problems/network-delay-time/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'split into m parts minimising the largest sum', 'k-th smallest in a structure', 'smallest x with count(x) >= k'. Pattern: search value range, compute count/feasibility with a greedy or two-pointer scan. Split Array Largest Sum: feasible(maxSum) greedily counts subarrays. Kth Missing Positive uses a[i]-(i+1) as the missing count. Time O(n log range).

**Dry-run exercise:** Dry-run Split Array Largest Sum on [7,2,5,10,8], m=2, listing the bounds and feasibility per mid.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Can I write the greedy feasibility check for Split Array Largest Sum from memory?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-55"></a>
### Day 55 — Greedy Consolidation and Sorting Tricks

> 📅 Sun, Dec 13 · Week 8 · ⏱ ≈ 4 h 46 min · 🔗 [Back to Week 8](#week-8)

**Learning objective:** Practise recognising which greedy rule applies when several sort keys are plausible.  
**Pattern:** Sorting + greedy mixed practice  
**Prerequisites:** Day 50–54  
**Planned workload:** **11** items = 8 🆕 new + 3 🔁 revision · ⭐ 4 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 4 h 46 min (+≈ 0 h 45 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Non-decreasing Array](https://leetcode.com/problems/non-decreasing-array/) | 🟡 MEDIUM | ⭐ A | Greedy single violation | 🆕 NEW |
| 2 | [Advantage Shuffle](https://leetcode.com/problems/advantage-shuffle/) | 🟡 MEDIUM | ⭐ A | Sort + greedy matching | 🆕 NEW |
| 3 | [Minimum Domino Rotations For Equal Row](https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/) | 🟡 MEDIUM | ⭐ A | Candidate check | 🆕 NEW |
| 4 | [Divide Array in Sets of K Consecutive Numbers](https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/) | 🟡 MEDIUM | ⭐ A | Ordered counts | 🆕 NEW |
| 5 | [Maximum Ice Cream Bars](https://leetcode.com/problems/maximum-ice-cream-bars/) | 🟡 MEDIUM | 📘 B | Sort + budget | 🆕 NEW |
| 6 | [Minimum Number of Moves to Seat Everyone](https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/) | 🟢 EASY | 📘 B | Sort + match | 🆕 NEW |
| 7 | [Maximum Number of Coins You Can Get](https://leetcode.com/problems/maximum-number-of-coins-you-can-get/) | 🟡 MEDIUM | 📘 B | Sort + pick pairs | 🆕 NEW |
| 8 | [Minimum Time to Make Rope Colorful](https://leetcode.com/problems/minimum-time-to-make-rope-colorful/) | 🟡 MEDIUM | 📘 B | Greedy per group | 🆕 NEW |
| 9 | [Minimum Speed to Arrive on Time](https://leetcode.com/problems/minimum-speed-to-arrive-on-time/) | 🟡 MEDIUM | ⭐ A | Binary search on answer | 🔁 REVISION |
| 10 | [Jump Game II](https://leetcode.com/problems/jump-game-ii/) | 🟡 MEDIUM | ⭐ A | Greedy layers | 🔁 REVISION |
| 11 | [Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/) | 🟡 MEDIUM | ⭐ A | Kruskal / Prim | 🔁 REVISION |
| 12 | [Minimum Number of Refueling Stops](https://leetcode.com/problems/minimum-number-of-refueling-stops/) | 🔴 HARD | 🚀 C | Max-heap greedy | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Non-decreasing Array](https://leetcode.com/problems/non-decreasing-array/) — MEDIUM
- [ ] [Advantage Shuffle](https://leetcode.com/problems/advantage-shuffle/) — MEDIUM
- [ ] [Minimum Domino Rotations For Equal Row](https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/) — MEDIUM
- [ ] [Divide Array in Sets of K Consecutive Numbers](https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/) — MEDIUM

**📘 Reinforcement (Tier B):** [Maximum Ice Cream Bars](https://leetcode.com/problems/maximum-ice-cream-bars/) · [Minimum Number of Moves to Seat Everyone](https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/) · [Maximum Number of Coins You Can Get](https://leetcode.com/problems/maximum-number-of-coins-you-can-get/) · [Minimum Time to Make Rope Colorful](https://leetcode.com/problems/minimum-time-to-make-rope-colorful/)

**🚀 Stretch (Tier C, never mandatory):** [Minimum Number of Refueling Stops](https://leetcode.com/problems/minimum-number-of-refueling-stops/)

**🔁 Revision tasks:**
- [ ] [Minimum Speed to Arrive on Time](https://leetcode.com/problems/minimum-speed-to-arrive-on-time/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Jump Game II](https://leetcode.com/problems/jump-game-ii/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'match elements from two arrays', 'minimum rotations/moves', 'fix at most one violation'. Sort both arrays and match greedily (Advantage Shuffle, Seat Everyone). Non-decreasing Array: fix the earlier or later element depending on a[i-2]. Pick the sorting key deliberately and test it on two tiny counter-examples before coding.

**Dry-run exercise:** Test two different sort keys on the Two City Scheduling example and show which one fails.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] For each problem today, what was the sort key and why?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-56"></a>
### Day 56 — Week 8 Test — Greedy and Intervals

> 📅 Mon, Dec 14 · Week 8 · ⏱ ≈ 3 h 45 min · 🔗 [Back to Week 8](#week-8)

**Learning objective:** Solve unseen greedy and interval problems; the optional item is cumulative binary-search revision.  
**Pattern:** Mixed: intervals, greedy, sorting (with one cumulative binary-search item)  
**Prerequisites:** Day 50–55  
**Planned workload:** **8** items = 3 🆕 new + 5 🔁 revision · ⭐ 3 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 3 h 45 min (+≈ 0 h 28 min if you attempt the optional items)

> [!NOTE]
> Planned load is below 10 items on purpose: a timed test plus a structured review replaces a normal question set.

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Partition Array Such That Maximum Difference Is K](https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/) | 🟡 MEDIUM | ⭐ A | Sort + greedy grouping | 🆕 NEW |
| 2 | [Remove Colored Pieces if Both Neighbors are the Same Color](https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/) | 🟡 MEDIUM | ⭐ A | Counting greedy | 🆕 NEW |
| 3 | [Maximum Matching of Players With Trainers](https://leetcode.com/problems/maximum-matching-of-players-with-trainers/) | 🟡 MEDIUM | ⭐ A | Sort + two pointers | 🆕 NEW |
| 4 | [Maximum Swap](https://leetcode.com/problems/maximum-swap/) | 🟡 MEDIUM | ⭐ A | Last occurrence of digits | 🔁 REVISION |
| 5 | [Time Needed to Inform All Employees](https://leetcode.com/problems/time-needed-to-inform-all-employees/) | 🟡 MEDIUM | ⭐ A | Tree DFS/BFS | 🔁 REVISION |
| 6 | [Merge Intervals](https://leetcode.com/problems/merge-intervals/) | 🟡 MEDIUM | ⭐ A | Sort + sweep | 🔁 REVISION |
| 7 | [Hand of Straights](https://leetcode.com/problems/hand-of-straights/) | 🟡 MEDIUM | ⭐ A | Greedy + ordered counts | 🔁 REVISION |
| 8 | [Divide Array in Sets of K Consecutive Numbers](https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/) | 🟡 MEDIUM | ⭐ A | Ordered counts | 🔁 REVISION |
| 9 | [Maximum Tastiness of Candy Basket](https://leetcode.com/problems/maximum-tastiness-of-candy-basket/) | 🟡 MEDIUM | 📘 B | CUMULATIVE: binary search on answer | ➕ OPTIONAL |

**⏱ Timed test protocol:** 90 minutes · no hints · no solution lookup · 30 min cap per problem. Attempt the ⭐ problems first, then the optional one if time remains. After the clock stops, spend 45 minutes on the post-mortem (see the review below the week).

**⭐ Must solve (Tier A):**
- [ ] [Partition Array Such That Maximum Difference Is K](https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/) — MEDIUM
- [ ] [Remove Colored Pieces if Both Neighbors are the Same Color](https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/) — MEDIUM
- [ ] [Maximum Matching of Players With Trainers](https://leetcode.com/problems/maximum-matching-of-players-with-trainers/) — MEDIUM

**📘 Reinforcement (Tier B):** [Maximum Tastiness of Candy Basket](https://leetcode.com/problems/maximum-tastiness-of-candy-basket/) ➕

**🔁 Revision tasks:**
- [ ] [Maximum Swap](https://leetcode.com/problems/maximum-swap/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Time Needed to Inform All Employees](https://leetcode.com/problems/time-needed-to-inform-all-employees/) — Re-solve under a 25-min timer, then compare with your notes
- [ ] [Merge Intervals](https://leetcode.com/problems/merge-intervals/) — Weekly review: re-solve (prioritise anything you failed this week)
- [ ] [Hand of Straights](https://leetcode.com/problems/hand-of-straights/) — Weekly review: re-solve (prioritise anything you failed this week)
- [ ] [Divide Array in Sets of K Consecutive Numbers](https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/) — Weekly review: re-solve (prioritise anything you failed this week)

**Scope:** Mixed: intervals, greedy, sorting (with one cumulative binary-search item). Solve unseen greedy and interval problems; the optional item is cumulative binary-search revision. Every problem is a variation on patterns taught on Days 50–55; if the pattern is not obvious in 3 minutes, write the brute force first and look for the bottleneck.

**End-of-day checkpoint:**
- [ ] Did I name the pattern for each problem within 3 minutes?
- [ ] Did I solve at least two of the three ⭐ problems independently?
- [ ] For every failed problem, did I write the missed insight in my mistake log?
- [ ] Did I re-attempt each failed problem the next day without notes?
- [ ] Which pattern from this week do I trust the least?

**Completion rule:** Complete when the timed test was taken honestly, the post-mortem for every failed problem is written, and each Tier A weak spot is logged for the weekly remediation checklist. Optional problems never block progress.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

#### Week 8 review and assessment

- **Timed test:** Day 56 (Mon, Dec 14). Scope is limited to patterns taught in Days 50–55 (the optional test item is labelled cumulative).
- **Revision plan:** D+1 / D+3 / D+7 tasks are already scheduled in each day's table. On Day 56 also re-solve this week's failed Tier A problems from the mistake log.
- **Weak-topic remediation checklist** (tick only after re-solving without hints):
  - [ ] Interval merging
  - [ ] Activity selection
  - [ ] Jump / gas station feasibility
  - [ ] Greedy proof thinking
  - [ ] Advanced binary search (cumulative)
- **Weekly self-assessment** (rate confidence 1–5 after the test):

  | Pattern | Confidence (1–5) | Needs reattempt? |
  |---|:---:|:---:|
  | Interval merging | | |
  | Activity selection | | |
  | Jump / gas station feasibility | | |
  | Greedy proof thinking | | |
  | Advanced binary search (cumulative) | | |

- **Weekly reflection:** What pattern did I confuse with another? Which mistake repeated? Which 3 problems will I re-solve first next week?

---

<a id="week-9"></a>
## Week 9 — Dynamic Programming Fundamentals

📅 Tue, Dec 15 → Mon, Dec 21 · ⬅️ [Week 8](#week-8) · ➡️ [Week 10](#week-10)

**Weekly objective:** Define states and transitions, then apply them to 1D, grid, knapsack, sequence and string DP.  
**Prerequisite knowledge:** Weeks 4 and 8 (recursion, greedy vs DP).  
**Pattern coverage:** State definition and recurrence · Coin-change DP · LIS and word break · Grid DP · 0/1 knapsack · String DP

| Day | Date | Topic | ⭐ A | Planned items | Time |
|---|---|---|---:|---:|---|
| [57](#day-57) | Tue, Dec 15 | DP Foundations: State, Transition, Memoisation | 4 | 11 | ≈ 3 h 45 min |
| [58](#day-58) | Wed, Dec 16 | 1D DP: Choices, Coins and Partitions | 4 | 11 | ≈ 5 h 02 min |
| [59](#day-59) | Thu, Dec 17 | Sequence DP: Increasing Subsequences and Word Break | 3 | 10 | ≈ 4 h 21 min |
| [60](#day-60) | Fri, Dec 18 | Grid DP | 4 | 11 | ≈ 5 h 19 min |
| [61](#day-61) | Sat, Dec 19 | Knapsack-Style DP | 3 | 9 | ≈ 3 h 53 min |
| [62](#day-62) | Sun, Dec 20 | String DP: Subsequences and Palindromes | 3 | 10 | ≈ 4 h 51 min |
| [63](#day-63) | Mon, Dec 21 | Week 9 Test — Dynamic Programming Fundamentals | 3 | 8 | ≈ 3 h 45 min |

**Weekly targets:** ⭐ Tier A **24** problems · 📘 Tier B **21** · 🚀 Tier C **7** (all authored this week, distinct) · 🔁 **26** revision tasks. Tier B/C are optional; only Tier A counts toward the weekly must-solve target.

<a id="day-57"></a>
### Day 57 — DP Foundations: State, Transition, Memoisation

> 📅 Tue, Dec 15 · Week 9 · ⏱ ≈ 3 h 45 min · 🔗 [Back to Week 9](#week-9)

**Learning objective:** Define a DP state, write the recurrence from the recursion tree, memoise it and convert it to tabulation with O(1) space.  
**Pattern:** 1D DP, recursion → memo → tabulation  
**Prerequisites:** Day 25 (recursion)  
**Planned workload:** **11** items = 7 🆕 new + 4 🔁 revision · ⭐ 4 Tier A must-solve · ➕ 0 optional (not counted) · ⏱ ≈ 3 h 45 min

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) | 🟢 EASY | ⭐ A | 1D DP | 🆕 NEW |
| 2 | [Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/) | 🟢 EASY | ⭐ A | 1D DP | 🆕 NEW |
| 3 | [House Robber](https://leetcode.com/problems/house-robber/) | 🟡 MEDIUM | ⭐ A | Take / skip DP | 🆕 NEW |
| 4 | [Delete and Earn](https://leetcode.com/problems/delete-and-earn/) | 🟡 MEDIUM | ⭐ A | Reduces to House Robber | 🆕 NEW |
| 5 | [N-th Tribonacci Number](https://leetcode.com/problems/n-th-tribonacci-number/) | 🟢 EASY | 📘 B | Rolling variables | 🆕 NEW |
| 6 | [Counting Bits](https://leetcode.com/problems/counting-bits/) | 🟢 EASY | 📘 B | DP on bits | 🆕 NEW |
| 7 | [Maximum Alternating Subsequence Sum](https://leetcode.com/problems/maximum-alternating-subsequence-sum/) | 🟡 MEDIUM | 📘 B | Two-state DP | 🆕 NEW |
| 8 | [Fibonacci Number](https://leetcode.com/problems/fibonacci-number/) | 🟢 EASY | ⭐ A | Recursion and memoisation preview | 🔁 REVISION |
| 9 | [Maximum Matching of Players With Trainers](https://leetcode.com/problems/maximum-matching-of-players-with-trainers/) | 🟡 MEDIUM | ⭐ A | Sort + two pointers | 🔁 REVISION |
| 10 | [Heaters](https://leetcode.com/problems/heaters/) | 🟡 MEDIUM | ⭐ A | Binary search nearest | 🔁 REVISION |
| 11 | [Merge Intervals](https://leetcode.com/problems/merge-intervals/) | 🟡 MEDIUM | ⭐ A | Sort + sweep | 🔁 REVISION |

**⭐ Must solve (Tier A):**
- [ ] [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) — EASY
- [ ] [Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/) — EASY
- [ ] [House Robber](https://leetcode.com/problems/house-robber/) — MEDIUM
- [ ] [Delete and Earn](https://leetcode.com/problems/delete-and-earn/) — MEDIUM

**📘 Reinforcement (Tier B):** [N-th Tribonacci Number](https://leetcode.com/problems/n-th-tribonacci-number/) · [Counting Bits](https://leetcode.com/problems/counting-bits/) · [Maximum Alternating Subsequence Sum](https://leetcode.com/problems/maximum-alternating-subsequence-sum/)

**🔁 Revision tasks:**
- [ ] [Fibonacci Number](https://leetcode.com/problems/fibonacci-number/) — Re-solve with memoisation, then with O(1) space
- [ ] [Maximum Matching of Players With Trainers](https://leetcode.com/problems/maximum-matching-of-players-with-trainers/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Heaters](https://leetcode.com/problems/heaters/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Merge Intervals](https://leetcode.com/problems/merge-intervals/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'count ways', 'min/max cost', overlapping subproblems. Steps: (1) define dp[i] in words, (2) base cases, (3) transition, (4) order of evaluation, (5) answer location, (6) space optimisation. Climbing Stairs: dp[i]=dp[i-1]+dp[i-2]. House Robber: dp[i]=max(dp[i-1], dp[i-2]+a[i]). Memoisation = recursion + cache; tabulation = iterative bottom-up.

**Dry-run exercise:** Write the recursion tree for Climbing Stairs n=5, circle repeated subproblems, then write dp[].

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Can I state dp[i] in one English sentence for every problem today?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-58"></a>
### Day 58 — 1D DP: Choices, Coins and Partitions

> 📅 Wed, Dec 16 · Week 9 · ⏱ ≈ 5 h 02 min · 🔗 [Back to Week 9](#week-9)

**Learning objective:** Handle 'minimum number of items to reach a target' and 'ways to decode' using dp over amounts or positions.  
**Pattern:** Unbounded knapsack / decode-style DP  
**Prerequisites:** Day 57  
**Planned workload:** **11** items = 8 🆕 new + 3 🔁 revision · ⭐ 4 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 5 h 02 min (+≈ 0 h 28 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [House Robber II](https://leetcode.com/problems/house-robber-ii/) | 🟡 MEDIUM | ⭐ A | Circular → two linear runs | 🆕 NEW |
| 2 | [Decode Ways](https://leetcode.com/problems/decode-ways/) | 🟡 MEDIUM | ⭐ A | 1- and 2-digit transitions | 🆕 NEW |
| 3 | [Coin Change](https://leetcode.com/problems/coin-change/) | 🟡 MEDIUM | ⭐ A | Unbounded knapsack (min) | 🆕 NEW |
| 4 | [Perfect Squares](https://leetcode.com/problems/perfect-squares/) | 🟡 MEDIUM | ⭐ A | Unbounded knapsack (min) | 🆕 NEW |
| 5 | [Coin Change II](https://leetcode.com/problems/coin-change-ii/) | 🟡 MEDIUM | 📘 B | Unbounded knapsack (count combos) | 🆕 NEW |
| 6 | [Combination Sum IV](https://leetcode.com/problems/combination-sum-iv/) | 🟡 MEDIUM | 📘 B | Count permutations | 🆕 NEW |
| 7 | [Minimum Cost For Tickets](https://leetcode.com/problems/minimum-cost-for-tickets/) | 🟡 MEDIUM | 📘 B | DP over days | 🆕 NEW |
| 8 | [Arithmetic Slices](https://leetcode.com/problems/arithmetic-slices/) | 🟡 MEDIUM | 📘 B | Run-length DP | 🆕 NEW |
| 9 | [Delete and Earn](https://leetcode.com/problems/delete-and-earn/) | 🟡 MEDIUM | ⭐ A | Reduces to House Robber | 🔁 REVISION |
| 10 | [Advantage Shuffle](https://leetcode.com/problems/advantage-shuffle/) | 🟡 MEDIUM | ⭐ A | Sort + greedy matching | 🔁 REVISION |
| 11 | [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/) | 🟡 MEDIUM | ⭐ A | Sort by end | 🔁 REVISION |
| 12 | [Domino and Tromino Tiling](https://leetcode.com/problems/domino-and-tromino-tiling/) | 🟡 MEDIUM | 📘 B | Linear recurrence | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [House Robber II](https://leetcode.com/problems/house-robber-ii/) — MEDIUM
- [ ] [Decode Ways](https://leetcode.com/problems/decode-ways/) — MEDIUM
- [ ] [Coin Change](https://leetcode.com/problems/coin-change/) — MEDIUM
- [ ] [Perfect Squares](https://leetcode.com/problems/perfect-squares/) — MEDIUM

**📘 Reinforcement (Tier B):** [Coin Change II](https://leetcode.com/problems/coin-change-ii/) · [Combination Sum IV](https://leetcode.com/problems/combination-sum-iv/) · [Minimum Cost For Tickets](https://leetcode.com/problems/minimum-cost-for-tickets/) · [Arithmetic Slices](https://leetcode.com/problems/arithmetic-slices/) · [Domino and Tromino Tiling](https://leetcode.com/problems/domino-and-tromino-tiling/) ➕

**🔁 Revision tasks:**
- [ ] [Delete and Earn](https://leetcode.com/problems/delete-and-earn/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Advantage Shuffle](https://leetcode.com/problems/advantage-shuffle/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'fewest coins', 'number of ways to form', 'decode'. Coin Change: dp[a]=min(dp[a-c]+1) over coins; unreachable = INF. Counting combinations loops coins outer, amounts inner; counting permutations (Combination Sum IV) loops amounts outer. Decode Ways: dp[i] depends on one-digit and two-digit validity. Time O(n·k), space O(n).

**Dry-run exercise:** Fill the dp table for Coin Change with coins [1,2,5], amount 11.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Why does loop order change combinations vs permutations?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-59"></a>
### Day 59 — Sequence DP: Increasing Subsequences and Word Break

> 📅 Thu, Dec 17 · Week 9 · ⏱ ≈ 4 h 21 min · 🔗 [Back to Week 9](#week-9)

**Learning objective:** Model 'best sequence ending at i' and 'can this prefix be segmented' with DP, and speed LIS up with binary search.  
**Pattern:** LIS DP, prefix-based DP  
**Prerequisites:** Day 57–58  
**Planned workload:** **10** items = 6 🆕 new + 4 🔁 revision · ⭐ 3 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 4 h 21 min (+≈ 0 h 45 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) | 🟡 MEDIUM | ⭐ A | LIS DP / tails + binary search | 🆕 NEW |
| 2 | [Word Break](https://leetcode.com/problems/word-break/) | 🟡 MEDIUM | ⭐ A | Prefix DP | 🆕 NEW |
| 3 | [Longest String Chain](https://leetcode.com/problems/longest-string-chain/) | 🟡 MEDIUM | ⭐ A | Sorted DP over predecessors | 🆕 NEW |
| 4 | [Number of Longest Increasing Subsequence](https://leetcode.com/problems/number-of-longest-increasing-subsequence/) | 🟡 MEDIUM | 📘 B | LIS with counts | 🆕 NEW |
| 5 | [Largest Divisible Subset](https://leetcode.com/problems/largest-divisible-subset/) | 🟡 MEDIUM | 📘 B | LIS-style DP | 🆕 NEW |
| 6 | [Wiggle Subsequence](https://leetcode.com/problems/wiggle-subsequence/) | 🟡 MEDIUM | 📘 B | Two-state DP | 🆕 NEW |
| 7 | [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/) | 🟡 MEDIUM | ⭐ A | Track max and min | 🔁 REVISION |
| 8 | [Perfect Squares](https://leetcode.com/problems/perfect-squares/) | 🟡 MEDIUM | ⭐ A | Unbounded knapsack (min) | 🔁 REVISION |
| 9 | [Remove Colored Pieces if Both Neighbors are the Same Color](https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/) | 🟡 MEDIUM | ⭐ A | Counting greedy | 🔁 REVISION |
| 10 | [Jump Game](https://leetcode.com/problems/jump-game/) | 🟡 MEDIUM | ⭐ A | Furthest reach | 🔁 REVISION |
| 11 | [Russian Doll Envelopes](https://leetcode.com/problems/russian-doll-envelopes/) | 🔴 HARD | 🚀 C | Sort + LIS | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) — MEDIUM
- [ ] [Word Break](https://leetcode.com/problems/word-break/) — MEDIUM
- [ ] [Longest String Chain](https://leetcode.com/problems/longest-string-chain/) — MEDIUM

**📘 Reinforcement (Tier B):** [Number of Longest Increasing Subsequence](https://leetcode.com/problems/number-of-longest-increasing-subsequence/) · [Largest Divisible Subset](https://leetcode.com/problems/largest-divisible-subset/) · [Wiggle Subsequence](https://leetcode.com/problems/wiggle-subsequence/)

**🚀 Stretch (Tier C, never mandatory):** [Russian Doll Envelopes](https://leetcode.com/problems/russian-doll-envelopes/)

**🔁 Revision tasks:**
- [ ] [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/) — Re-solve and explain it as a DP with two states
- [ ] [Perfect Squares](https://leetcode.com/problems/perfect-squares/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Remove Colored Pieces if Both Neighbors are the Same Color](https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Jump Game](https://leetcode.com/problems/jump-game/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'longest increasing', 'can the string be split', 'chain'. LIS O(n²): dp[i]=1+max dp[j] for j<i with a[j]<a[i]; O(n log n): maintain tails[] and binary-search the position. Word Break: dp[i]=true if some j<i has dp[j] and s[j:i] in dict. Longest String Chain: sort by length then DP over predecessors. State the meaning of dp[i] before coding.

**Dry-run exercise:** Run both LIS methods on [10,9,2,5,3,7,101,18] and compare dp[] with tails[].

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] What does the tails[] array represent and why is it sorted?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-60"></a>
### Day 60 — Grid DP

> 📅 Fri, Dec 18 · Week 9 · ⏱ ≈ 5 h 19 min · 🔗 [Back to Week 9](#week-9)

**Learning objective:** Define dp[i][j] for paths and costs on grids and compress rows to reduce space.  
**Pattern:** 2D DP over cells  
**Prerequisites:** Day 57–59  
**Planned workload:** **11** items = 8 🆕 new + 3 🔁 revision · ⭐ 4 Tier A must-solve · ➕ 2 optional (not counted) · ⏱ ≈ 5 h 19 min (+≈ 1 h 30 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Unique Paths](https://leetcode.com/problems/unique-paths/) | 🟡 MEDIUM | ⭐ A | Grid DP | 🆕 NEW |
| 2 | [Unique Paths II](https://leetcode.com/problems/unique-paths-ii/) | 🟡 MEDIUM | ⭐ A | Grid DP with obstacles | 🆕 NEW |
| 3 | [Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/) | 🟡 MEDIUM | ⭐ A | Grid DP (min) | 🆕 NEW |
| 4 | [Maximal Square](https://leetcode.com/problems/maximal-square/) | 🟡 MEDIUM | ⭐ A | Min of three neighbours | 🆕 NEW |
| 5 | [Triangle](https://leetcode.com/problems/triangle/) | 🟡 MEDIUM | 📘 B | Bottom-up DP | 🆕 NEW |
| 6 | [Minimum Falling Path Sum](https://leetcode.com/problems/minimum-falling-path-sum/) | 🟡 MEDIUM | 📘 B | Grid DP | 🆕 NEW |
| 7 | [Count Square Submatrices with All Ones](https://leetcode.com/problems/count-square-submatrices-with-all-ones/) | 🟡 MEDIUM | 📘 B | Square DP | 🆕 NEW |
| 8 | [Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/) | 🔴 HARD | 📘 B | DFS + memo | 🆕 NEW |
| 9 | [Longest String Chain](https://leetcode.com/problems/longest-string-chain/) | 🟡 MEDIUM | ⭐ A | Sorted DP over predecessors | 🔁 REVISION |
| 10 | [Delete and Earn](https://leetcode.com/problems/delete-and-earn/) | 🟡 MEDIUM | ⭐ A | Reduces to House Robber | 🔁 REVISION |
| 11 | [Queue Reconstruction by Height](https://leetcode.com/problems/queue-reconstruction-by-height/) | 🟡 MEDIUM | ⭐ A | Sort + insert | 🔁 REVISION |
| 12 | [Dungeon Game](https://leetcode.com/problems/dungeon-game/) | 🔴 HARD | 🚀 C | Reverse grid DP | ➕ OPTIONAL |
| 13 | [Cherry Pickup](https://leetcode.com/problems/cherry-pickup/) | 🔴 HARD | 🚀 C | Two-walker DP | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Unique Paths](https://leetcode.com/problems/unique-paths/) — MEDIUM
- [ ] [Unique Paths II](https://leetcode.com/problems/unique-paths-ii/) — MEDIUM
- [ ] [Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/) — MEDIUM
- [ ] [Maximal Square](https://leetcode.com/problems/maximal-square/) — MEDIUM

**📘 Reinforcement (Tier B):** [Triangle](https://leetcode.com/problems/triangle/) · [Minimum Falling Path Sum](https://leetcode.com/problems/minimum-falling-path-sum/) · [Count Square Submatrices with All Ones](https://leetcode.com/problems/count-square-submatrices-with-all-ones/) · [Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/)

**🚀 Stretch (Tier C, never mandatory):** [Dungeon Game](https://leetcode.com/problems/dungeon-game/) · [Cherry Pickup](https://leetcode.com/problems/cherry-pickup/)

**🔁 Revision tasks:**
- [ ] [Longest String Chain](https://leetcode.com/problems/longest-string-chain/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Delete and Earn](https://leetcode.com/problems/delete-and-earn/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Queue Reconstruction by Height](https://leetcode.com/problems/queue-reconstruction-by-height/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'paths from top-left to bottom-right', 'minimum path sum', 'largest square'. dp[i][j] depends on up/left (and diagonal for squares). Initialise first row/column carefully; obstacles set dp to 0. Maximal Square: dp[i][j]=1+min(up,left,diag). Space: roll to one row. Time O(mn).

**Dry-run exercise:** Fill the Unique Paths II table for a 3×3 grid with an obstacle in the centre.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Can I explain the Maximal Square recurrence geometrically?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-61"></a>
### Day 61 — Knapsack-Style DP

> 📅 Sat, Dec 19 · Week 9 · ⏱ ≈ 3 h 53 min · 🔗 [Back to Week 9](#week-9)

**Learning objective:** Recognise 0/1 knapsack in subset-sum disguises and iterate capacity backwards to avoid reusing an item.  
**Pattern:** 0/1 knapsack, subset sum, target sum  
**Prerequisites:** Day 57–58  
**Planned workload:** **9** items = 5 🆕 new + 4 🔁 revision · ⭐ 3 Tier A must-solve · ➕ 2 optional (not counted) · ⏱ ≈ 3 h 53 min (+≈ 1 h 30 min if you attempt the optional items)

> [!NOTE]
> Planned load is below 10 items on purpose: the concepts today are dense, so depth beats volume.

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/) | 🟡 MEDIUM | ⭐ A | 0/1 knapsack (feasibility) | 🆕 NEW |
| 2 | [Target Sum](https://leetcode.com/problems/target-sum/) | 🟡 MEDIUM | ⭐ A | Subset-sum counting | 🆕 NEW |
| 3 | [Last Stone Weight II](https://leetcode.com/problems/last-stone-weight-ii/) | 🟡 MEDIUM | ⭐ A | Minimise difference via subset sum | 🆕 NEW |
| 4 | [Ones and Zeroes](https://leetcode.com/problems/ones-and-zeroes/) | 🟡 MEDIUM | 📘 B | 2D 0/1 knapsack | 🆕 NEW |
| 5 | [Number of Dice Rolls With Target Sum](https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/) | 🟡 MEDIUM | 📘 B | Counting DP | 🆕 NEW |
| 6 | [Coin Change II](https://leetcode.com/problems/coin-change-ii/) | 🟡 MEDIUM | ⭐ A | Unbounded knapsack (count combos) | 🔁 REVISION |
| 7 | [Maximal Square](https://leetcode.com/problems/maximal-square/) | 🟡 MEDIUM | ⭐ A | Min of three neighbours | 🔁 REVISION |
| 8 | [Decode Ways](https://leetcode.com/problems/decode-ways/) | 🟡 MEDIUM | ⭐ A | 1- and 2-digit transitions | 🔁 REVISION |
| 9 | [Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/) | 🔴 HARD | ⭐ A | Binary search on answer + greedy check | 🔁 REVISION |
| 10 | [Profitable Schemes](https://leetcode.com/problems/profitable-schemes/) | 🔴 HARD | 🚀 C | Knapsack with two constraints | ➕ OPTIONAL |
| 11 | [Tallest Billboard](https://leetcode.com/problems/tallest-billboard/) | 🔴 HARD | 🚀 C | DP on difference | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/) — MEDIUM
- [ ] [Target Sum](https://leetcode.com/problems/target-sum/) — MEDIUM
- [ ] [Last Stone Weight II](https://leetcode.com/problems/last-stone-weight-ii/) — MEDIUM

**📘 Reinforcement (Tier B):** [Ones and Zeroes](https://leetcode.com/problems/ones-and-zeroes/) · [Number of Dice Rolls With Target Sum](https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/)

**🚀 Stretch (Tier C, never mandatory):** [Profitable Schemes](https://leetcode.com/problems/profitable-schemes/) · [Tallest Billboard](https://leetcode.com/problems/tallest-billboard/)

**🔁 Revision tasks:**
- [ ] [Coin Change II](https://leetcode.com/problems/coin-change-ii/) — Re-solve and contrast forward vs backward loops
- [ ] [Maximal Square](https://leetcode.com/problems/maximal-square/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Decode Ways](https://leetcode.com/problems/decode-ways/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'can we partition', 'number of ways to reach a target sum', 'pick items at most once'. dp[s]=true if some subset sums to s. 0/1: iterate s from target down to a[i]. Target Sum reduces to subset-sum count with (total+target)/2. Unbounded (coins) iterates forward. Compare with greedy: here choices interact, so greedy fails.

**Dry-run exercise:** Fill dp[] for Partition Equal Subset Sum on [1,5,11,5], target 11.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Why iterate capacity backwards in 0/1 knapsack but forwards in unbounded?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-62"></a>
### Day 62 — String DP: Subsequences and Palindromes

> 📅 Sun, Dec 20 · Week 9 · ⏱ ≈ 4 h 51 min · 🔗 [Back to Week 9](#week-9)

**Learning objective:** Define dp[i][j] over two prefixes and fill a table for subsequence-style comparisons.  
**Pattern:** 2D string DP (LCS family)  
**Prerequisites:** Day 57–61  
**Planned workload:** **10** items = 7 🆕 new + 3 🔁 revision · ⭐ 3 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 4 h 51 min (+≈ 0 h 45 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/) | 🟡 MEDIUM | ⭐ A | 2D string DP | 🆕 NEW |
| 2 | [Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/) | 🟡 MEDIUM | ⭐ A | Expand around centre | 🆕 NEW |
| 3 | [Delete Operation for Two Strings](https://leetcode.com/problems/delete-operation-for-two-strings/) | 🟡 MEDIUM | ⭐ A | LCS length | 🆕 NEW |
| 4 | [Uncrossed Lines](https://leetcode.com/problems/uncrossed-lines/) | 🟡 MEDIUM | 📘 B | LCS in disguise | 🆕 NEW |
| 5 | [Minimum ASCII Delete Sum for Two Strings](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/) | 🟡 MEDIUM | 📘 B | LCS-style weighted DP | 🆕 NEW |
| 6 | [Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/) | 🔴 HARD | 📘 B | Counting 2D DP | 🆕 NEW |
| 7 | [Interleaving String](https://leetcode.com/problems/interleaving-string/) | 🟡 MEDIUM | 📘 B | 2D DP | 🆕 NEW |
| 8 | [Last Stone Weight II](https://leetcode.com/problems/last-stone-weight-ii/) | 🟡 MEDIUM | ⭐ A | Minimise difference via subset sum | 🔁 REVISION |
| 9 | [Word Break](https://leetcode.com/problems/word-break/) | 🟡 MEDIUM | ⭐ A | Prefix DP | 🔁 REVISION |
| 10 | [Non-decreasing Array](https://leetcode.com/problems/non-decreasing-array/) | 🟡 MEDIUM | ⭐ A | Greedy single violation | 🔁 REVISION |
| 11 | [Shortest Common Supersequence](https://leetcode.com/problems/shortest-common-supersequence/) | 🔴 HARD | 🚀 C | LCS + reconstruction | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/) — MEDIUM
- [ ] [Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/) — MEDIUM
- [ ] [Delete Operation for Two Strings](https://leetcode.com/problems/delete-operation-for-two-strings/) — MEDIUM

**📘 Reinforcement (Tier B):** [Uncrossed Lines](https://leetcode.com/problems/uncrossed-lines/) · [Minimum ASCII Delete Sum for Two Strings](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/) · [Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/) · [Interleaving String](https://leetcode.com/problems/interleaving-string/)

**🚀 Stretch (Tier C, never mandatory):** [Shortest Common Supersequence](https://leetcode.com/problems/shortest-common-supersequence/)

**🔁 Revision tasks:**
- [ ] [Last Stone Weight II](https://leetcode.com/problems/last-stone-weight-ii/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Word Break](https://leetcode.com/problems/word-break/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Non-decreasing Array](https://leetcode.com/problems/non-decreasing-array/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'two strings', 'common subsequence', 'minimum deletions to equalise', 'count palindromic substrings'. LCS: if s[i]==t[j] dp[i][j]=dp[i-1][j-1]+1 else max(dp[i-1][j], dp[i][j-1]). Delete Operation = len1+len2-2·LCS. Palindromic Substrings: expand around centres (O(n²), O(1) space). Reconstruct the string by walking the table backwards.

**Dry-run exercise:** Fill the LCS table for 'abcde' and 'ace' and trace the common subsequence back.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Can I derive Delete Operation for Two Strings from LCS?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-63"></a>
### Day 63 — Week 9 Test — Dynamic Programming Fundamentals

> 📅 Mon, Dec 21 · Week 9 · ⏱ ≈ 3 h 45 min · 🔗 [Back to Week 9](#week-9)

**Learning objective:** Define the state and recurrence for unseen DP problems before writing code.  
**Pattern:** Mixed: 1D, grid, knapsack, string DP  
**Prerequisites:** Day 57–62  
**Planned workload:** **8** items = 3 🆕 new + 5 🔁 revision · ⭐ 3 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 3 h 45 min (+≈ 0 h 45 min if you attempt the optional items)

> [!NOTE]
> Planned load is below 10 items on purpose: a timed test plus a structured review replaces a normal question set.

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Count Sorted Vowel Strings](https://leetcode.com/problems/count-sorted-vowel-strings/) | 🟡 MEDIUM | ⭐ A | 1D / 2D counting DP | 🆕 NEW |
| 2 | [Maximum Length of Repeated Subarray](https://leetcode.com/problems/maximum-length-of-repeated-subarray/) | 🟡 MEDIUM | ⭐ A | Substring DP table | 🆕 NEW |
| 3 | [Knight Dialer](https://leetcode.com/problems/knight-dialer/) | 🟡 MEDIUM | ⭐ A | State-transition DP | 🆕 NEW |
| 4 | [Unique Paths II](https://leetcode.com/problems/unique-paths-ii/) | 🟡 MEDIUM | ⭐ A | Grid DP with obstacles | 🔁 REVISION |
| 5 | [Partition Array Such That Maximum Difference Is K](https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/) | 🟡 MEDIUM | ⭐ A | Sort + greedy grouping | 🔁 REVISION |
| 6 | [House Robber](https://leetcode.com/problems/house-robber/) | 🟡 MEDIUM | ⭐ A | Take / skip DP | 🔁 REVISION |
| 7 | [Unique Paths](https://leetcode.com/problems/unique-paths/) | 🟡 MEDIUM | ⭐ A | Grid DP | 🔁 REVISION |
| 8 | [Delete Operation for Two Strings](https://leetcode.com/problems/delete-operation-for-two-strings/) | 🟡 MEDIUM | ⭐ A | LCS length | 🔁 REVISION |
| 9 | [Minimum Cost to Cut a Stick](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/) | 🔴 HARD | 🚀 C | Interval DP | ➕ OPTIONAL |

**⏱ Timed test protocol:** 90 minutes · no hints · no solution lookup · 30 min cap per problem. Attempt the ⭐ problems first, then the optional one if time remains. After the clock stops, spend 45 minutes on the post-mortem (see the review below the week).

**⭐ Must solve (Tier A):**
- [ ] [Count Sorted Vowel Strings](https://leetcode.com/problems/count-sorted-vowel-strings/) — MEDIUM
- [ ] [Maximum Length of Repeated Subarray](https://leetcode.com/problems/maximum-length-of-repeated-subarray/) — MEDIUM
- [ ] [Knight Dialer](https://leetcode.com/problems/knight-dialer/) — MEDIUM

**🚀 Stretch (Tier C, never mandatory):** [Minimum Cost to Cut a Stick](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/)

**🔁 Revision tasks:**
- [ ] [Unique Paths II](https://leetcode.com/problems/unique-paths-ii/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Partition Array Such That Maximum Difference Is K](https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/) — Re-solve under a 25-min timer, then compare with your notes
- [ ] [House Robber](https://leetcode.com/problems/house-robber/) — Weekly review: re-solve (prioritise anything you failed this week)
- [ ] [Unique Paths](https://leetcode.com/problems/unique-paths/) — Weekly review: re-solve (prioritise anything you failed this week)
- [ ] [Delete Operation for Two Strings](https://leetcode.com/problems/delete-operation-for-two-strings/) — Weekly review: re-solve (prioritise anything you failed this week)

**Scope:** Mixed: 1D, grid, knapsack, string DP. Define the state and recurrence for unseen DP problems before writing code. Every problem is a variation on patterns taught on Days 57–62; if the pattern is not obvious in 3 minutes, write the brute force first and look for the bottleneck.

**End-of-day checkpoint:**
- [ ] Did I name the pattern for each problem within 3 minutes?
- [ ] Did I solve at least two of the three ⭐ problems independently?
- [ ] For every failed problem, did I write the missed insight in my mistake log?
- [ ] Did I re-attempt each failed problem the next day without notes?
- [ ] Which pattern from this week do I trust the least?

**Completion rule:** Complete when the timed test was taken honestly, the post-mortem for every failed problem is written, and each Tier A weak spot is logged for the weekly remediation checklist. Optional problems never block progress.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

#### Week 9 review and assessment

- **Timed test:** Day 63 (Mon, Dec 21). Scope is limited to patterns taught in Days 57–62.
- **Revision plan:** D+1 / D+3 / D+7 tasks are already scheduled in each day's table. On Day 63 also re-solve this week's failed Tier A problems from the mistake log.
- **Weak-topic remediation checklist** (tick only after re-solving without hints):
  - [ ] State definition and recurrence
  - [ ] Coin-change DP
  - [ ] LIS and word break
  - [ ] Grid DP
  - [ ] 0/1 knapsack
  - [ ] String DP
- **Weekly self-assessment** (rate confidence 1–5 after the test):

  | Pattern | Confidence (1–5) | Needs reattempt? |
  |---|:---:|:---:|
  | State definition and recurrence | | |
  | Coin-change DP | | |
  | LIS and word break | | |
  | Grid DP | | |
  | 0/1 knapsack | | |
  | String DP | | |

- **Weekly reflection:** What pattern did I confuse with another? Which mistake repeated? Which 3 problems will I re-solve first next week?

---

<a id="week-10"></a>
## Week 10 — Advanced DP, Tries and Mixed Interview Practice

📅 Tue, Dec 22 → Mon, Dec 28 · ⬅️ [Week 9](#week-9) · ➡️ [Mock extension](#extension)

**Weekly objective:** Close the DP and backtracking gaps, then rehearse interviews with pattern identification under time pressure.  
**Prerequisite knowledge:** Weeks 1–9.  
**Pattern coverage:** Edit distance / palindromic DP · State-machine DP · Advanced backtracking · Trie + grid DFS · Pattern identification · Full interview simulation

| Day | Date | Topic | ⭐ A | Planned items | Time |
|---|---|---|---:|---:|---|
| [64](#day-64) | Tue, Dec 22 | Edit Distance and Palindromic Subsequences | 3 | 7 | ≈ 3 h 44 min |
| [65](#day-65) | Wed, Dec 23 | DP State Machines and Tree/Game DP | 4 | 12 | ≈ 5 h 47 min |
| [66](#day-66) | Thu, Dec 24 | Advanced Backtracking | 3 | 10 | ≈ 5 h 25 min |
| [67](#day-67) | Fri, Dec 25 | Tries in Practice and String Search | 2 | 9 | ≈ 4 h 44 min |
| [68](#day-68) | Sat, Dec 26 | Mixed Timed Set A — Identify the Pattern First | 5 | 7 | ≈ 3 h 10 min |
| [69](#day-69) | Sun, Dec 27 | Mixed Timed Set B — Mock Interview Simulation | 5 | 6 | ≈ 3 h 10 min |
| [70](#day-70) | Mon, Dec 28 | Final Assessment and Capstone Review | 3 | 9 | ≈ 5 h 30 min |

**Weekly targets:** ⭐ Tier A **25** problems · 📘 Tier B **17** · 🚀 Tier C **12** (all authored this week, distinct) · 🔁 **19** revision tasks. Tier B/C are optional; only Tier A counts toward the weekly must-solve target.

<a id="day-64"></a>
### Day 64 — Edit Distance and Palindromic Subsequences

> 📅 Tue, Dec 22 · Week 10 · ⏱ ≈ 3 h 44 min · 🔗 [Back to Week 10](#week-10)

**Learning objective:** Derive edit-distance and palindromic-subsequence recurrences from the choices at each position.  
**Pattern:** 2D DP (edit operations, palindromes)  
**Prerequisites:** Day 62  
**Planned workload:** **7** items = 4 🆕 new + 3 🔁 revision · ⭐ 3 Tier A must-solve · ➕ 3 optional (not counted) · ⏱ ≈ 3 h 44 min (+≈ 2 h 15 min if you attempt the optional items)

> [!NOTE]
> Planned load is below 10 items on purpose: the concepts today are dense, so depth beats volume.

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Edit Distance](https://leetcode.com/problems/edit-distance/) | 🟡 MEDIUM | ⭐ A | 2D edit DP | 🆕 NEW |
| 2 | [Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/) | 🟡 MEDIUM | ⭐ A | Interval DP / LCS with reverse | 🆕 NEW |
| 3 | [Minimum Insertion Steps to Make a String Palindrome](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/) | 🔴 HARD | ⭐ A | n - LPS | 🆕 NEW |
| 4 | [Palindrome Partitioning II](https://leetcode.com/problems/palindrome-partitioning-ii/) | 🔴 HARD | 📘 B | Cut DP + palindrome table | 🆕 NEW |
| 5 | [Knight Dialer](https://leetcode.com/problems/knight-dialer/) | 🟡 MEDIUM | ⭐ A | State-transition DP | 🔁 REVISION |
| 6 | [Target Sum](https://leetcode.com/problems/target-sum/) | 🟡 MEDIUM | ⭐ A | Subset-sum counting | 🔁 REVISION |
| 7 | [House Robber](https://leetcode.com/problems/house-robber/) | 🟡 MEDIUM | ⭐ A | Take / skip DP | 🔁 REVISION |
| 8 | [Wildcard Matching](https://leetcode.com/problems/wildcard-matching/) | 🔴 HARD | 🚀 C | 2D matching DP | ➕ OPTIONAL |
| 9 | [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/) | 🔴 HARD | 🚀 C | 2D matching DP | ➕ OPTIONAL |
| 10 | [Make Array Strictly Increasing](https://leetcode.com/problems/make-array-strictly-increasing/) | 🔴 HARD | 🚀 C | DP + binary search | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Edit Distance](https://leetcode.com/problems/edit-distance/) — MEDIUM
- [ ] [Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/) — MEDIUM
- [ ] [Minimum Insertion Steps to Make a String Palindrome](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/) — HARD

**📘 Reinforcement (Tier B):** [Palindrome Partitioning II](https://leetcode.com/problems/palindrome-partitioning-ii/)

**🚀 Stretch (Tier C, never mandatory):** [Wildcard Matching](https://leetcode.com/problems/wildcard-matching/) · [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/) · [Make Array Strictly Increasing](https://leetcode.com/problems/make-array-strictly-increasing/)

**🔁 Revision tasks:**
- [ ] [Knight Dialer](https://leetcode.com/problems/knight-dialer/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Target Sum](https://leetcode.com/problems/target-sum/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [House Robber](https://leetcode.com/problems/house-robber/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'minimum operations to convert', 'longest palindromic subsequence', 'make palindrome'. Edit Distance: dp[i][j]=dp[i-1][j-1] if equal else 1+min(insert,delete,replace). Longest Palindromic Subsequence = LCS(s, reverse(s)) or interval DP dp[l][r]. Min Insertions to make a palindrome = n - LPS. Explain each transition in terms of the operation it models.

**Dry-run exercise:** Fill the Edit Distance table for 'horse' → 'ros' and label which operation each cell uses.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Can I explain the three edit-distance transitions in words?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-65"></a>
### Day 65 — DP State Machines and Tree/Game DP

> 📅 Wed, Dec 23 · Week 10 · ⏱ ≈ 5 h 47 min · 🔗 [Back to Week 10](#week-10)

**Learning objective:** Model problems as states with transitions: holding/not holding, take/skip on a tree, and optimal-play differences.  
**Pattern:** Stock state machine, tree DP, game DP  
**Prerequisites:** Day 57–63  
**Planned workload:** **12** items = 9 🆕 new + 3 🔁 revision · ⭐ 4 Tier A must-solve · ➕ 2 optional (not counted) · ⏱ ≈ 5 h 47 min (+≈ 1 h 30 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Best Time to Buy and Sell Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/) | 🟡 MEDIUM | ⭐ A | State machine DP | 🆕 NEW |
| 2 | [Best Time to Buy and Sell Stock with Transaction Fee](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/) | 🟡 MEDIUM | ⭐ A | Two-state DP | 🆕 NEW |
| 3 | [Unique Binary Search Trees](https://leetcode.com/problems/unique-binary-search-trees/) | 🟡 MEDIUM | ⭐ A | Catalan DP | 🆕 NEW |
| 4 | [House Robber III](https://leetcode.com/problems/house-robber-iii/) | 🟡 MEDIUM | ⭐ A | Tree DP (rob, skip) | 🆕 NEW |
| 5 | [Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/) | 🔴 HARD | 📘 B | Four-state DP | 🆕 NEW |
| 6 | [Integer Break](https://leetcode.com/problems/integer-break/) | 🟡 MEDIUM | 📘 B | 1D DP | 🆕 NEW |
| 7 | [Out of Boundary Paths](https://leetcode.com/problems/out-of-boundary-paths/) | 🟡 MEDIUM | 📘 B | Grid DP over moves | 🆕 NEW |
| 8 | [Knight Probability in Chessboard](https://leetcode.com/problems/knight-probability-in-chessboard/) | 🟡 MEDIUM | 📘 B | Grid DP over moves | 🆕 NEW |
| 9 | [Stone Game](https://leetcode.com/problems/stone-game/) | 🟡 MEDIUM | 📘 B | Interval / game DP | 🆕 NEW |
| 10 | [Minimum Insertion Steps to Make a String Palindrome](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/) | 🔴 HARD | ⭐ A | n - LPS | 🔁 REVISION |
| 11 | [Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/) | 🟡 MEDIUM | ⭐ A | Expand around centre | 🔁 REVISION |
| 12 | [House Robber II](https://leetcode.com/problems/house-robber-ii/) | 🟡 MEDIUM | ⭐ A | Circular → two linear runs | 🔁 REVISION |
| 13 | [Best Time to Buy and Sell Stock IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/) | 🔴 HARD | 🚀 C | k-transaction DP | ➕ OPTIONAL |
| 14 | [Burst Balloons](https://leetcode.com/problems/burst-balloons/) | 🔴 HARD | 🚀 C | Interval DP | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Best Time to Buy and Sell Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/) — MEDIUM
- [ ] [Best Time to Buy and Sell Stock with Transaction Fee](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/) — MEDIUM
- [ ] [Unique Binary Search Trees](https://leetcode.com/problems/unique-binary-search-trees/) — MEDIUM
- [ ] [House Robber III](https://leetcode.com/problems/house-robber-iii/) — MEDIUM

**📘 Reinforcement (Tier B):** [Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/) · [Integer Break](https://leetcode.com/problems/integer-break/) · [Out of Boundary Paths](https://leetcode.com/problems/out-of-boundary-paths/) · [Knight Probability in Chessboard](https://leetcode.com/problems/knight-probability-in-chessboard/) · [Stone Game](https://leetcode.com/problems/stone-game/)

**🚀 Stretch (Tier C, never mandatory):** [Best Time to Buy and Sell Stock IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/) · [Burst Balloons](https://leetcode.com/problems/burst-balloons/)

**🔁 Revision tasks:**
- [ ] [Minimum Insertion Steps to Make a String Palindrome](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [House Robber II](https://leetcode.com/problems/house-robber-ii/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'cooldown', 'transaction fee', 'at most k transactions', 'rob houses in a tree', 'both players play optimally'. Stock with Cooldown: states hold, sold, rest. Transaction fee: hold/free two states. House Robber III returns (rob, skip) per node. Stone Game: dp[l][r] = best score difference for the player to move. Draw the state graph, then code.

**Dry-run exercise:** Draw the state diagram for Best Time to Buy and Sell Stock with Cooldown and write each transition.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Can I list the states and transitions without looking at code?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-66"></a>
### Day 66 — Advanced Backtracking

> 📅 Thu, Dec 24 · Week 10 · ⏱ ≈ 5 h 25 min · 🔗 [Back to Week 10](#week-10)

**Learning objective:** Solve constraint-heavy search problems (N-Queens, palindrome partitions) with efficient pruning.  
**Pattern:** Backtracking with strong pruning  
**Prerequisites:** Day 25–27  
**Planned workload:** **10** items = 7 🆕 new + 3 🔁 revision · ⭐ 3 Tier A must-solve · ➕ 2 optional (not counted) · ⏱ ≈ 5 h 25 min (+≈ 1 h 30 min if you attempt the optional items)

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [N-Queens](https://leetcode.com/problems/n-queens/) | 🔴 HARD | ⭐ A | Constraint backtracking | 🆕 NEW |
| 2 | [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/) | 🟡 MEDIUM | ⭐ A | Cut backtracking | 🆕 NEW |
| 3 | [Find Unique Binary String](https://leetcode.com/problems/find-unique-binary-string/) | 🟡 MEDIUM | ⭐ A | Backtracking / diagonal argument | 🆕 NEW |
| 4 | [Word Break II](https://leetcode.com/problems/word-break-ii/) | 🔴 HARD | 📘 B | Backtracking + memo | 🆕 NEW |
| 5 | [N-Queens II](https://leetcode.com/problems/n-queens-ii/) | 🔴 HARD | 📘 B | Constraint backtracking (count) | 🆕 NEW |
| 6 | [Construct the Lexicographically Largest Valid Sequence](https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/) | 🟡 MEDIUM | 📘 B | Greedy backtracking | 🆕 NEW |
| 7 | [Fair Distribution of Cookies](https://leetcode.com/problems/fair-distribution-of-cookies/) | 🟡 MEDIUM | 📘 B | Bucket backtracking | 🆕 NEW |
| 8 | [House Robber III](https://leetcode.com/problems/house-robber-iii/) | 🟡 MEDIUM | ⭐ A | Tree DP (rob, skip) | 🔁 REVISION |
| 9 | [Maximum Length of Repeated Subarray](https://leetcode.com/problems/maximum-length-of-repeated-subarray/) | 🟡 MEDIUM | ⭐ A | Substring DP table | 🔁 REVISION |
| 10 | [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) | 🟡 MEDIUM | ⭐ A | LIS DP / tails + binary search | 🔁 REVISION |
| 11 | [Expression Add Operators](https://leetcode.com/problems/expression-add-operators/) | 🔴 HARD | 🚀 C | Backtracking with evaluation state | ➕ OPTIONAL |
| 12 | [Remove Invalid Parentheses](https://leetcode.com/problems/remove-invalid-parentheses/) | 🔴 HARD | 🚀 C | BFS / backtracking | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [N-Queens](https://leetcode.com/problems/n-queens/) — HARD
- [ ] [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/) — MEDIUM
- [ ] [Find Unique Binary String](https://leetcode.com/problems/find-unique-binary-string/) — MEDIUM

**📘 Reinforcement (Tier B):** [Word Break II](https://leetcode.com/problems/word-break-ii/) · [N-Queens II](https://leetcode.com/problems/n-queens-ii/) · [Construct the Lexicographically Largest Valid Sequence](https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/) · [Fair Distribution of Cookies](https://leetcode.com/problems/fair-distribution-of-cookies/)

**🚀 Stretch (Tier C, never mandatory):** [Expression Add Operators](https://leetcode.com/problems/expression-add-operators/) · [Remove Invalid Parentheses](https://leetcode.com/problems/remove-invalid-parentheses/)

**🔁 Revision tasks:**
- [ ] [House Robber III](https://leetcode.com/problems/house-robber-iii/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Maximum Length of Repeated Subarray](https://leetcode.com/problems/maximum-length-of-repeated-subarray/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'place N items with no conflicts', 'all partitions where each part satisfies P'. N-Queens: track used columns, diagonals (r-c) and anti-diagonals (r+c) in sets/bitmasks for O(1) conflict checks. Palindrome Partitioning: backtrack on cut positions, precompute a palindrome table to avoid recomputation. Memoisation can turn some backtracking into DP (Word Break II).

**Dry-run exercise:** Draw the N-Queens (n=4) search tree and mark where pruning cuts branches.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] What three sets make N-Queens conflict checks O(1)?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-67"></a>
### Day 67 — Tries in Practice and String Search

> 📅 Fri, Dec 25 · Week 10 · ⏱ ≈ 4 h 44 min · 🔗 [Back to Week 10](#week-10)

**Learning objective:** Combine a trie with grid DFS to search many words at once and apply tries to streams.  
**Pattern:** Trie + DFS on grid, streaming match  
**Prerequisites:** Day 40, 27  
**Planned workload:** **9** items = 5 🆕 new + 4 🔁 revision · ⭐ 2 Tier A must-solve · ➕ 2 optional (not counted) · ⏱ ≈ 4 h 44 min (+≈ 1 h 30 min if you attempt the optional items)

> [!NOTE]
> Planned load is below 10 items on purpose: the concepts today are dense, so depth beats volume.

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Word Search II](https://leetcode.com/problems/word-search-ii/) | 🔴 HARD | ⭐ A | Trie + grid DFS | 🆕 NEW |
| 2 | [Number of Matching Subsequences](https://leetcode.com/problems/number-of-matching-subsequences/) | 🟡 MEDIUM | ⭐ A | Pointers per word / buckets | 🆕 NEW |
| 3 | [Stream of Characters](https://leetcode.com/problems/stream-of-characters/) | 🔴 HARD | 📘 B | Trie of reversed words | 🆕 NEW |
| 4 | [Implement Magic Dictionary](https://leetcode.com/problems/implement-magic-dictionary/) | 🟡 MEDIUM | 📘 B | Trie / hash with one change | 🆕 NEW |
| 5 | [Sum of Prefix Scores of Strings](https://leetcode.com/problems/sum-of-prefix-scores-of-strings/) | 🔴 HARD | 📘 B | Trie with counts | 🆕 NEW |
| 6 | [Word Search](https://leetcode.com/problems/word-search/) | 🟡 MEDIUM | ⭐ A | Grid DFS backtracking | 🔁 REVISION |
| 7 | [Find Unique Binary String](https://leetcode.com/problems/find-unique-binary-string/) | 🟡 MEDIUM | ⭐ A | Backtracking / diagonal argument | 🔁 REVISION |
| 8 | [Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/) | 🟡 MEDIUM | ⭐ A | Interval DP / LCS with reverse | 🔁 REVISION |
| 9 | [Unique Paths](https://leetcode.com/problems/unique-paths/) | 🟡 MEDIUM | ⭐ A | Grid DP | 🔁 REVISION |
| 10 | [Palindrome Pairs](https://leetcode.com/problems/palindrome-pairs/) | 🔴 HARD | 🚀 C | Trie / hashing | ➕ OPTIONAL |
| 11 | [Concatenated Words](https://leetcode.com/problems/concatenated-words/) | 🔴 HARD | 🚀 C | Trie / DP | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Word Search II](https://leetcode.com/problems/word-search-ii/) — HARD
- [ ] [Number of Matching Subsequences](https://leetcode.com/problems/number-of-matching-subsequences/) — MEDIUM

**📘 Reinforcement (Tier B):** [Stream of Characters](https://leetcode.com/problems/stream-of-characters/) · [Implement Magic Dictionary](https://leetcode.com/problems/implement-magic-dictionary/) · [Sum of Prefix Scores of Strings](https://leetcode.com/problems/sum-of-prefix-scores-of-strings/)

**🚀 Stretch (Tier C, never mandatory):** [Palindrome Pairs](https://leetcode.com/problems/palindrome-pairs/) · [Concatenated Words](https://leetcode.com/problems/concatenated-words/)

**🔁 Revision tasks:**
- [ ] [Word Search](https://leetcode.com/problems/word-search/) — Re-solve and state how Word Search II improves it
- [ ] [Find Unique Binary String](https://leetcode.com/problems/find-unique-binary-string/) — Explain the approach aloud: brute force, optimisation, complexity
- [ ] [Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/) — Re-solve from scratch, no hints (20 min cap)
- [ ] [Unique Paths](https://leetcode.com/problems/unique-paths/) — Re-solve under a 25-min timer, then compare with your notes

**Learn and implement:** Signal: 'find all words from a dictionary in a grid'. Build a trie of the words, then DFS the grid following trie edges; prune when no child exists and remove found words from the trie to avoid duplicates. Complexity far better than running Word Search per word. Stream of Characters stores words reversed. Link back to Word Search from Week 4.

**Dry-run exercise:** Build the trie for ['oath','pea','eat','rain'] and trace the DFS from the cell 'o'.

**End-of-day checkpoint:**
- [ ] Can I explain the brute-force approach and its complexity?
- [ ] Can I derive the optimised solution independently?
- [ ] Can I state the invariant or key observation?
- [ ] Can I analyse time and space complexity and name two edge cases?
- [ ] Can I recognise this pattern in an unseen problem?
- [ ] Why is Word Search II faster than calling Word Search for each word?

**Completion rule:** Complete when all ⭐ Tier A problems were attempted (independently, with a hint, or after studying the solution, logged honestly), the revision tasks are done, and mistakes are documented. Tier B and C never block progression.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

<a id="day-68"></a>
### Day 68 — Mixed Timed Set A — Identify the Pattern First

> 📅 Sat, Dec 26 · Week 10 · ⏱ ≈ 3 h 10 min · 🔗 [Back to Week 10](#week-10)

**Learning objective:** Read the problem, name the pattern and complexity in 3 minutes, then solve; patterns are revealed only after the set.  
**Pattern:** Pattern identification (topic labels hidden)  
**Prerequisites:** All previous weeks  
**Planned workload:** **7** items = 7 🆕 new + 0 🔁 revision · ⭐ 5 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 3 h 10 min (+≈ 0 h 45 min if you attempt the optional items)

> [!NOTE]
> Planned load is below 10 items on purpose: a timed interview-style set plus its review replaces a normal question set.

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Longest Mountain in Array](https://leetcode.com/problems/longest-mountain-in-array/) | 🟡 MEDIUM | ⭐ A | ❓ identify | 🆕 NEW |
| 2 | [Random Pick with Weight](https://leetcode.com/problems/random-pick-with-weight/) | 🟡 MEDIUM | ⭐ A | ❓ identify | 🆕 NEW |
| 3 | [Minimum Remove to Make Valid Parentheses](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/) | 🟡 MEDIUM | ⭐ A | ❓ identify | 🆕 NEW |
| 4 | [Maximum Sum of Two Non-Overlapping Subarrays](https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/) | 🟡 MEDIUM | ⭐ A | ❓ identify | 🆕 NEW |
| 5 | [Validate Stack Sequences](https://leetcode.com/problems/validate-stack-sequences/) | 🟡 MEDIUM | ⭐ A | ❓ identify | 🆕 NEW |
| 6 | [Check If Array Pairs Are Divisible by k](https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/) | 🟡 MEDIUM | 📘 B | ❓ identify | 🆕 NEW |
| 7 | [Shortest Path in a Grid with Obstacles Elimination](https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/) | 🔴 HARD | 📘 B | ❓ identify | 🆕 NEW |
| 8 | [Maximum Frequency Stack](https://leetcode.com/problems/maximum-frequency-stack/) | 🔴 HARD | 🚀 C | ❓ identify | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Longest Mountain in Array](https://leetcode.com/problems/longest-mountain-in-array/) — MEDIUM
- [ ] [Random Pick with Weight](https://leetcode.com/problems/random-pick-with-weight/) — MEDIUM
- [ ] [Minimum Remove to Make Valid Parentheses](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/) — MEDIUM
- [ ] [Maximum Sum of Two Non-Overlapping Subarrays](https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/) — MEDIUM
- [ ] [Validate Stack Sequences](https://leetcode.com/problems/validate-stack-sequences/) — MEDIUM

**📘 Reinforcement (Tier B):** [Check If Array Pairs Are Divisible by k](https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/) · [Shortest Path in a Grid with Obstacles Elimination](https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/)

**🚀 Stretch (Tier C, never mandatory):** [Maximum Frequency Stack](https://leetcode.com/problems/maximum-frequency-stack/)

**Format:** Read the problem, name the pattern and complexity in 3 minutes, then solve; patterns are revealed only after the set. Timer: 150 minutes for the whole set. For each problem write down (1) pattern, (2) brute-force complexity, (3) target complexity before coding. Pattern answer key is at the end of today's section.

**End-of-day checkpoint:**
- [ ] Did I identify the pattern and complexity before coding?
- [ ] Did I test edge cases (empty, single element, duplicates, extremes) before submitting?
- [ ] Could I explain each solution aloud in under 3 minutes?
- [ ] Which problems needed hints or solution lookup? (Log them for reattempt.)
- [ ] What is my weakest pattern right now, and when will I revisit it?

**Completion rule:** Complete when every Tier A problem was attempted under the timer, the pattern key was compared with your guesses, and mistakes are logged. Optional items never block progress.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

<details><summary>Pattern answer key (open after the timed set)</summary>

- Longest Mountain in Array — **Two pointers / single pass on slopes**
- Random Pick with Weight — **Prefix sums + binary search**
- Minimum Remove to Make Valid Parentheses — **Stack of indices (or two-pass counters)**
- Maximum Sum of Two Non-Overlapping Subarrays — **Prefix sums + best-so-far (sliding window)**
- Validate Stack Sequences — **Stack simulation**
- Check If Array Pairs Are Divisible by k — **Remainder frequency hashing**
- Shortest Path in a Grid with Obstacles Elimination — **BFS with state (row, col, eliminations left)**
- Maximum Frequency Stack — **Hash maps + stack per frequency**

</details>

---

<a id="day-69"></a>
### Day 69 — Mixed Timed Set B — Mock Interview Simulation

> 📅 Sun, Dec 27 · Week 10 · ⏱ ≈ 3 h 10 min · 🔗 [Back to Week 10](#week-10)

**Learning objective:** Simulate an interview: think aloud, state brute force, optimise, code, test edge cases and analyse complexity.  
**Pattern:** Pattern identification + verbal explanation  
**Prerequisites:** All previous weeks  
**Planned workload:** **6** items = 6 🆕 new + 0 🔁 revision · ⭐ 5 Tier A must-solve · ➕ 2 optional (not counted) · ⏱ ≈ 3 h 10 min (+≈ 1 h 30 min if you attempt the optional items)

> [!NOTE]
> Planned load is below 10 items on purpose: a timed interview-style set plus its review replaces a normal question set.

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/) | 🟡 MEDIUM | ⭐ A | ❓ identify | 🆕 NEW |
| 2 | [Maximum Level Sum of a Binary Tree](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/) | 🟡 MEDIUM | ⭐ A | ❓ identify | 🆕 NEW |
| 3 | [House Robber IV](https://leetcode.com/problems/house-robber-iv/) | 🟡 MEDIUM | ⭐ A | ❓ identify | 🆕 NEW |
| 4 | [Longest Cycle in a Graph](https://leetcode.com/problems/longest-cycle-in-a-graph/) | 🔴 HARD | ⭐ A | ❓ identify | 🆕 NEW |
| 5 | [Number of Subsequences That Satisfy the Given Sum Condition](https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/) | 🟡 MEDIUM | ⭐ A | ❓ identify | 🆕 NEW |
| 6 | [Rearrange Array Elements by Sign](https://leetcode.com/problems/rearrange-array-elements-by-sign/) | 🟡 MEDIUM | 📘 B | ❓ identify | 🆕 NEW |
| 7 | [Stone Game III](https://leetcode.com/problems/stone-game-iii/) | 🔴 HARD | 🚀 C | ❓ identify | ➕ OPTIONAL |
| 8 | [Minimum Cost to Hire K Workers](https://leetcode.com/problems/minimum-cost-to-hire-k-workers/) | 🔴 HARD | 🚀 C | ❓ identify | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/) — MEDIUM
- [ ] [Maximum Level Sum of a Binary Tree](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/) — MEDIUM
- [ ] [House Robber IV](https://leetcode.com/problems/house-robber-iv/) — MEDIUM
- [ ] [Longest Cycle in a Graph](https://leetcode.com/problems/longest-cycle-in-a-graph/) — HARD
- [ ] [Number of Subsequences That Satisfy the Given Sum Condition](https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/) — MEDIUM

**📘 Reinforcement (Tier B):** [Rearrange Array Elements by Sign](https://leetcode.com/problems/rearrange-array-elements-by-sign/)

**🚀 Stretch (Tier C, never mandatory):** [Stone Game III](https://leetcode.com/problems/stone-game-iii/) · [Minimum Cost to Hire K Workers](https://leetcode.com/problems/minimum-cost-to-hire-k-workers/)

**Format:** Simulate an interview: think aloud, state brute force, optimise, code, test edge cases and analyse complexity. Timer: 150 minutes for the whole set. For each problem write down (1) pattern, (2) brute-force complexity, (3) target complexity before coding. Pattern answer key is at the end of today's section.

**End-of-day checkpoint:**
- [ ] Did I identify the pattern and complexity before coding?
- [ ] Did I test edge cases (empty, single element, duplicates, extremes) before submitting?
- [ ] Could I explain each solution aloud in under 3 minutes?
- [ ] Which problems needed hints or solution lookup? (Log them for reattempt.)
- [ ] What is my weakest pattern right now, and when will I revisit it?

**Completion rule:** Complete when every Tier A problem was attempted under the timer, the pattern key was compared with your guesses, and mistakes are logged. Optional items never block progress.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

<details><summary>Pattern answer key (open after the timed set)</summary>

- Reverse Words in a String — **Two pointers / in-place reversal**
- Maximum Level Sum of a Binary Tree — **Tree BFS by level**
- House Robber IV — **Binary search on answer + greedy check**
- Longest Cycle in a Graph — **Functional-graph DFS with visit timestamps**
- Number of Subsequences That Satisfy the Given Sum Condition — **Sort + two pointers + powers of 2**
- Rearrange Array Elements by Sign — **Two pointers / index placement**
- Stone Game III — **1D game DP (suffix score difference)**
- Minimum Cost to Hire K Workers — **Sort by ratio + max-heap**

</details>

---

<a id="day-70"></a>
### Day 70 — Final Assessment and Capstone Review

> 📅 Mon, Dec 28 · Week 10 · ⏱ ≈ 5 h 30 min · 🔗 [Back to Week 10](#week-10)

**Learning objective:** Demonstrate readiness with a cumulative timed assessment and a capstone re-solve of the highest-value problems.  
**Pattern:** Cumulative: everything  
**Prerequisites:** Day 01–69  
**Planned workload:** **9** items = 3 🆕 new + 6 🔁 revision · ⭐ 3 Tier A must-solve · ➕ 1 optional (not counted) · ⏱ ≈ 5 h 30 min (+≈ 0 h 45 min if you attempt the optional items)

> [!NOTE]
> Planned load is below 10 items on purpose: a timed assessment plus capstone review replaces a normal question set.

| # | Problem | Difficulty | Tier | Pattern | Status |
|---|---|---|---|---|---|
| 1 | [Minimum Time to Collect All Apples in a Tree](https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/) | 🟡 MEDIUM | ⭐ A | Unseen: tree DFS | 🆕 NEW |
| 2 | [Maximum Product of Splitted Binary Tree](https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/) | 🟡 MEDIUM | ⭐ A | Unseen: tree DFS | 🆕 NEW |
| 3 | [Number of Good Ways to Split a String](https://leetcode.com/problems/number-of-good-ways-to-split-a-string/) | 🟡 MEDIUM | ⭐ A | Unseen: prefix counts | 🆕 NEW |
| 4 | [LRU Cache](https://leetcode.com/problems/lru-cache/) | 🟡 MEDIUM | ⭐ A | Hash map + doubly linked list | 🔁 REVISION |
| 5 | [Merge Intervals](https://leetcode.com/problems/merge-intervals/) | 🟡 MEDIUM | ⭐ A | Sort + sweep | 🔁 REVISION |
| 6 | [Course Schedule](https://leetcode.com/problems/course-schedule/) | 🟡 MEDIUM | ⭐ A | Cycle detection / Kahn | 🔁 REVISION |
| 7 | [Coin Change](https://leetcode.com/problems/coin-change/) | 🟡 MEDIUM | ⭐ A | Unbounded knapsack (min) | 🔁 REVISION |
| 8 | [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | 🟡 MEDIUM | ⭐ A | Variable window + set/map | 🔁 REVISION |
| 9 | [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/) | 🔴 HARD | ⭐ A | Gain from children | 🔁 REVISION |
| 10 | [Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/) | 🔴 HARD | 📘 B | Unseen: DP + binary search | ➕ OPTIONAL |

**⭐ Must solve (Tier A):**
- [ ] [Minimum Time to Collect All Apples in a Tree](https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/) — MEDIUM
- [ ] [Maximum Product of Splitted Binary Tree](https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/) — MEDIUM
- [ ] [Number of Good Ways to Split a String](https://leetcode.com/problems/number-of-good-ways-to-split-a-string/) — MEDIUM

**📘 Reinforcement (Tier B):** [Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/) ➕

**🔁 Revision tasks:**
- [ ] [LRU Cache](https://leetcode.com/problems/lru-cache/) — Capstone: implement from scratch, 25 min
- [ ] [Merge Intervals](https://leetcode.com/problems/merge-intervals/) — Capstone: re-solve from scratch, 15 min
- [ ] [Course Schedule](https://leetcode.com/problems/course-schedule/) — Capstone: re-solve from scratch, 20 min
- [ ] [Coin Change](https://leetcode.com/problems/coin-change/) — Capstone: re-solve from scratch, 15 min
- [ ] [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) — Capstone: re-solve from scratch, 15 min
- [ ] [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/) — Capstone: explain aloud and dry-run

**Format:** Demonstrate readiness with a cumulative timed assessment and a capstone re-solve of the highest-value problems. Block 180 minutes for the three unseen problems (optional fourth if time remains), then capstone re-solves from the revision list. No hints.

**End-of-day checkpoint:**
- [ ] Did I identify the pattern and complexity before coding?
- [ ] Did I test edge cases (empty, single element, duplicates, extremes) before submitting?
- [ ] Could I explain each solution aloud in under 3 minutes?
- [ ] Which problems needed hints or solution lookup? (Log them for reattempt.)
- [ ] What is my weakest pattern right now, and when will I revisit it?

**Completion rule:** Complete when the unseen set and capstone re-solves are done, every unresolved problem is on the Master Revision Checklist, and the extension plan (or your own plan) is decided.

**Daily tracker:** `[ ]` Tier A done · `[ ]` revision done · `[ ]` mistake log updated · Result codes: ✅ independent · 💡 hint · 👀 solution seen

---

#### Week 10 review and assessment

- **Timed test:** Day 70 (Mon, Dec 28). Scope is limited to patterns taught in Days 64–69.
- **Revision plan:** D+1 / D+3 / D+7 tasks are already scheduled in each day's table. On Day 70 also re-solve this week's failed Tier A problems from the mistake log.
- **Weak-topic remediation checklist** (tick only after re-solving without hints):
  - [ ] Edit distance / palindromic DP
  - [ ] State-machine DP
  - [ ] Advanced backtracking
  - [ ] Trie + grid DFS
  - [ ] Pattern identification
  - [ ] Full interview simulation
- **Weekly self-assessment** (rate confidence 1–5 after the test):

  | Pattern | Confidence (1–5) | Needs reattempt? |
  |---|:---:|:---:|
  | Edit distance / palindromic DP | | |
  | State-machine DP | | |
  | Advanced backtracking | | |
  | Trie + grid DFS | | |
  | Pattern identification | | |
  | Full interview simulation | | |

- **Weekly reflection:** What pattern did I confuse with another? Which mistake repeated? Which 3 problems will I re-solve first next week?

---

<a id="revision-system"></a>
## 6. Revision and reattempt system

Revision is scheduled automatically in each day's table. The rule set:

| Interval | Task | Typical activity | Time |
|---|---|---|---|
| **D+1** | Last ⭐ problem of the previous day | Explain the approach aloud, state complexity, recall the invariant | ≈ 8 min |
| **D+3** | A ⭐ Medium/Hard problem from 3 days ago | Re-solve from scratch, no hints (20 min cap) | ≈ 15 min |
| **D+7** | A ⭐ Medium/Hard problem from 7 days ago | Re-solve timed (25 min cap), compare with notes | ≈ 15 min |
| **Weekly (Day 7)** | Three hard/medium ⭐ problems from the week + failed-attempt review | Re-solve; prioritise anything marked 💡 or 👀 | ≈ 45 min |
| **Final** | Capstone list on Day 70 and the Master Revision Checklist | Re-solve from scratch, timed | see below |

**Activity types:** re-solve from scratch · reconstruct the algorithm · explain verbally · dry-run a hard example · review the previous mistake · recall complexity and edge cases.

**Mastery states** (track per problem in your own sheet or notes):

| State | Definition |
|---|---|
| ✅ Mastered | Solved independently first time **and** re-solved independently at a later revision |
| 💡 Learning | Solved with a hint, or independently once but not yet reattempted |
| 👀 Not mastered | Solution seen. A copied solution never counts as mastery; reattempt at D+1, D+3 and D+7 |
| ❌ Failed | Unsolved after the struggle rule; goes on the next test day's review |

**Mistake log template** (one line per problem you did not solve independently):

```text
Day | Problem | Result (✅/💡/👀/❌) | Missed insight | Pattern | Reattempt dates | Reattempt result
```

**Not every problem is revised.** Revision targets ⭐ Tier A problems only, one to three per day, so the load stays near 10.2 total items/day rather than snowballing.

<a id="cpp-reference"></a>
## 7. C++ reference and templates

### Containers used throughout

| Container | Use | Key operations / complexity |
|---|---|---|
| `vector<T>` | dynamic array, adjacency lists, DP tables | `push_back` O(1) amortised, index O(1), `sort` O(n log n) |
| `string` | text | `substr` O(k), `+=` amortised O(1); compare by index, not by copying |
| `unordered_map` / `unordered_set` | counting, lookup, seen-sets | average O(1); no ordering |
| `map` / `set` | ordered keys, `lower_bound`, ranges | O(log n) |
| `stack`, `queue`, `deque` | matching, BFS, monotonic deque | O(1) push/pop at ends |
| `priority_queue` | heap (max-heap by default) | push/pop O(log n), top O(1); min-heap: `priority_queue<T, vector<T>, greater<T>>` |
| `pair`, `tuple` | heap entries, graph edges | structured bindings: `auto [d, u] = pq.top();` |

**Sorting with comparators:** `sort(v.begin(), v.end(), [](auto& a, auto& b){ return a[1] < b[1]; });` (strict weak ordering: never use `<=`).
**Binary-search utilities:** `lower_bound(first, last, x)` = first element `>= x`; `upper_bound` = first element `> x`; both need sorted input.
**Graphs:** `vector<vector<int>> adj(n);` for unweighted, `vector<vector<pair<int,int>>> g(n);` for `(neighbour, weight)`.
**Complexity cheat-sheet:** n ≤ 10⁵ → O(n log n) · n ≤ 10³ → O(n²) · n ≤ 20 → O(2ⁿ) / backtracking · n ≤ 10⁶ → O(n).

### Templates (compiled and assertion-tested with `g++ -std=c++17`)

```cpp
#include <bits/stdc++.h>
using namespace std;

// ---- Binary search: first index with a[i] >= x (lower bound) ----
int lowerBound(const vector<int>& a, int x) {
    int lo = 0, hi = (int)a.size();            // answer in [0, n]
    while (lo < hi) {
        int mid = lo + (hi - lo) / 2;
        if (a[mid] >= x) hi = mid; else lo = mid + 1;
    }
    return lo;
}
// ---- Binary search on answer: smallest x in [lo,hi] with feasible(x) ----
template <class F> long long searchAnswer(long long lo, long long hi, F feasible) {
    while (lo < hi) {
        long long mid = lo + (hi - lo) / 2;
        if (feasible(mid)) hi = mid; else lo = mid + 1;
    }
    return lo;
}
// ---- Variable sliding window: longest valid window ----
int longestNoRepeat(const string& s) {
    vector<int> cnt(256, 0); int l = 0, best = 0;
    for (int r = 0; r < (int)s.size(); ++r) {
        ++cnt[(unsigned char)s[r]];
        while (cnt[(unsigned char)s[r]] > 1) --cnt[(unsigned char)s[l++]];
        best = max(best, r - l + 1);
    }
    return best;
}
// ---- Monotonic stack: next greater element index (or -1) ----
vector<int> nextGreater(const vector<int>& a) {
    int n = a.size(); vector<int> res(n, -1); stack<int> st;
    for (int i = 0; i < n; ++i) {
        while (!st.empty() && a[st.top()] < a[i]) { res[st.top()] = i; st.pop(); }
        st.push(i);
    }
    return res;
}
// ---- Backtracking: subsets ----
void subsets(int i, vector<int>& a, vector<int>& path, vector<vector<int>>& out) {
    if (i == (int)a.size()) { out.push_back(path); return; }
    subsets(i + 1, a, path, out);              // exclude
    path.push_back(a[i]);                      // choose
    subsets(i + 1, a, path, out);              // explore
    path.pop_back();                           // un-choose
}
// ---- Graph BFS on adjacency list (unweighted shortest distance) ----
vector<int> bfs(int src, const vector<vector<int>>& adj) {
    vector<int> dist(adj.size(), -1); queue<int> q;
    dist[src] = 0; q.push(src);
    while (!q.empty()) {
        int u = q.front(); q.pop();
        for (int v : adj[u]) if (dist[v] == -1) { dist[v] = dist[u] + 1; q.push(v); }
    }
    return dist;
}
// ---- Grid DFS (flood fill) ----
void dfs(vector<vector<char>>& g, int r, int c) {
    int m = g.size(), n = g[0].size();
    if (r < 0 || c < 0 || r >= m || c >= n || g[r][c] != '1') return;
    g[r][c] = '0';
    dfs(g, r + 1, c); dfs(g, r - 1, c); dfs(g, r, c + 1); dfs(g, r, c - 1);
}
// ---- DSU ----
struct DSU {
    vector<int> p, sz;
    DSU(int n) : p(n), sz(n, 1) { iota(p.begin(), p.end(), 0); }
    int find(int x) { return p[x] == x ? x : p[x] = find(p[x]); }
    bool unite(int a, int b) {
        a = find(a); b = find(b); if (a == b) return false;
        if (sz[a] < sz[b]) swap(a, b);
        p[b] = a; sz[a] += sz[b]; return true;
    }
};
// ---- Dijkstra with min-heap ----
vector<long long> dijkstra(int src, const vector<vector<pair<int,int>>>& g) {
    const long long INF = LLONG_MAX / 4;
    vector<long long> dist(g.size(), INF);
    priority_queue<pair<long long,int>, vector<pair<long long,int>>, greater<>> pq;
    dist[src] = 0; pq.push({0, src});
    while (!pq.empty()) {
        auto [d, u] = pq.top(); pq.pop();
        if (d > dist[u]) continue;                       // stale entry
        for (auto [v, w] : g[u]) if (d + w < dist[v]) { dist[v] = d + w; pq.push({dist[v], v}); }
    }
    return dist;
}
// ---- Trie ----
struct Trie {
    struct Node { array<int,26> nxt; bool end = false; Node() { nxt.fill(-1); } };
    vector<Node> t{Node()};
    void insert(const string& w) {
        int u = 0;
        for (char ch : w) { int c = ch - 'a'; if (t[u].nxt[c] == -1) { t[u].nxt[c] = t.size(); t.emplace_back(); } u = t[u].nxt[c]; }
        t[u].end = true;
    }
    bool search(const string& w) const {
        int u = 0; for (char ch : w) { u = t[u].nxt[ch - 'a']; if (u == -1) return false; } return t[u].end;
    }
};
// ---- DP: Coin Change (unbounded knapsack, min coins) ----
int coinChange(const vector<int>& coins, int amount) {
    vector<int> dp(amount + 1, INT_MAX); dp[0] = 0;
    for (int a = 1; a <= amount; ++a)
        for (int c : coins) if (a >= c && dp[a - c] != INT_MAX) dp[a] = min(dp[a], dp[a - c] + 1);
    return dp[amount] == INT_MAX ? -1 : dp[amount];
}
// ---- Custom comparator / sort by end time ----
void sortIntervals(vector<vector<int>>& v) {
    sort(v.begin(), v.end(), [](const vector<int>& a, const vector<int>& b) { return a[1] < b[1]; });
}
```

**Recursion/backtracking skeleton:** choose → explore → un-choose (see `subsets`). **DP skeleton:** (1) define state in words, (2) base cases, (3) transition, (4) fill order, (5) answer cell, (6) optimise space (see `coinChange`).

<a id="patterns"></a>
## 8. Pattern recognition reference

| Pattern | Signals | Brute force → optimisation | Time / Space | Common mistakes and follow-ups |
|---|---|---|---|---|
| Hash map / set | pairs, duplicates, frequency, 'seen before' | O(n²) scan → map of value→index/count | O(n) / O(n) | Insert-before-lookup bugs; follow-up: O(1) space with sorting/two pointers |
| Prefix sum | subarray sum, range queries, divisible by K | recompute sums → P[j]-P[i] with frequency map | O(n) / O(n) | Forgetting `{0:1}`; negative modulo; follow-up: 2D prefix sums |
| Two pointers | sorted pairs, palindrome, in-place | all pairs → move pointers by comparison | O(n) / O(1) | Not sorting first; duplicate handling in 3Sum |
| Sliding window | contiguous subarray/substring with a constraint | all substrings → expand/shrink | O(n) / O(Σ) | Shrinking with `if` instead of `while`; constraint must be monotone |
| Binary search | sorted data, 'minimum x such that…' | linear scan → halve the space | O(log n) / O(1) | Infinite loops from wrong `mid`/bounds; overflow in `lo+hi` |
| Monotonic stack | next greater/smaller, histogram, spans | nested loops → one pass with a stack | O(n) / O(n) | Wrong monotone direction; storing values instead of indices |
| Linked-list pointers | reverse, cycle, n-th from end | extra array → pointer gaps / Floyd | O(n) / O(1) | Losing `next`; no dummy head; null checks |
| Tree DFS/BFS | any tree, levels, paths | — (recursion is the baseline) | O(n) / O(h) | Mixing returned value with recorded answer; skewed tree depth |
| BST | ordered tree, kth smallest | full traversal → use ordering | O(h) / O(h) | Validating only against the parent |
| Heap / top-k | k-th, k closest, merge k, scheduling | full sort → size-k heap | O(n log k) / O(k) | Max vs min heap confusion; comparator direction |
| Trie | prefix queries, dictionary search | scan all words → shared prefix tree | O(L) per op / O(ΣL) | Forgetting `isEnd`; memory for large alphabets |
| Graph BFS/DFS | grid, connectivity, shortest steps | — | O(V+E) / O(V) | Marking visited late (duplicates in queue); missing bounds checks |
| Topological sort | dependencies, ordering, cycle in directed graph | try all orders → indegrees (Kahn) | O(V+E) / O(V) | Treating undirected graphs as DAGs |
| DSU | merge groups, redundant edge | rerun DFS → incremental union | ≈ O(α(n)) / O(n) | No path compression; forgetting to find roots |
| Shortest path (Dijkstra) | weighted min cost | try all paths → heap + relaxation | O((V+E) log V) | Negative edges; not skipping stale heap entries |
| Greedy | local rule, sorting, intervals | try all choices → pick provably best | O(n log n) / O(1) | No exchange argument; wrong sort key |
| Backtracking | generate all, constraints | enumerate everything → prune early | exponential | Not undoing state; duplicates from unsorted input |
| Dynamic programming | overlapping subproblems, count/min/max | recursion → memo → table | varies | Unclear state meaning; wrong loop direction (0/1 vs unbounded) |

### Distinguishing similar patterns

- **Fixed vs variable window:** fixed has a given size `k` (add one, drop one); variable resizes using a validity condition (expand right, shrink left).
- **Two pointers vs sliding window:** two pointers usually exploits sorted order or symmetry to discard pairs; a window maintains an aggregate over a contiguous range.
- **Prefix sums vs running sums:** prefix sums are stored for arbitrary range queries and hash lookups; a running sum is a single variable for one pass (Kadane, window sums).
- **BFS vs DFS:** BFS for minimum steps/levels in unweighted graphs; DFS for existence, components, path enumeration, and tree recursion.
- **Dijkstra vs BFS:** BFS is Dijkstra when every edge weight is 1; weights force the heap. Negative edges need Bellman-Ford.
- **Greedy vs DP:** greedy commits to one choice per step and needs a proof; DP keeps all sub-results when choices interact. Try a counter-example first.
- **Memoisation vs tabulation:** memoisation is top-down and computes only reachable states; tabulation is bottom-up, easier to space-optimise, but needs the right order.
- **Binary search on sorted data vs on answer:** the first searches an array index; the second searches a value range using a monotone `feasible(x)` check.
- **MST vs shortest path:** MST minimises total edge weight over all nodes; shortest paths minimise the distance from a source.

### Explaining a solution aloud (use every time)

1. Restate the problem and confirm constraints and edge cases. 2. State the brute force and its complexity. 3. Name the bottleneck. 4. Present the key observation / invariant. 5. Walk through one example. 6. Code. 7. Test edge cases. 8. State time and space complexity. 9. Mention follow-ups (streaming input, memory limit, duplicates).

<a id="extension"></a>
## 9. Optional 7-day mock interview extension

> [!NOTE]
> This extension is **not part of the 70-day count**. Day 70 is Dec 28, 2026; the extension runs Dec 29, 2026 – Jan 4, 2027. It introduces **no new problem backlog**: it re-solves problems already in the roadmap.

| Day | Date | Focus |
|---|---|---|
| E1 | Dec 29, 2026 | Arrays, Hashing, Windows — Mock Round 1 |
| E2 | Dec 30, 2026 | Lists, Stacks, Search and Backtracking — Mock Round 2 |
| E3 | Dec 31, 2026 | Trees, Heaps, Tries and Design — Mock Round 3 |
| E4 | Jan 1, 2027 | Graphs — Mock Round 4 |
| E5 | Jan 2, 2027 | Greedy and DP — Mock Round 5 |
| E6 | Jan 3, 2027 | Full Mock Interview Day |
| E7 | Jan 4, 2027 | Retrospective and Final Weak-Area Plan |

### E1 — Arrays, Hashing, Windows — Mock Round 1 (Dec 29, 2026)

**Re-solve (⭐ Tier A material from earlier weeks):** [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) · [3Sum](https://leetcode.com/problems/3sum/) · [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) · [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) · [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) · [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)

**Format:** Two timed rounds (45 min each, 2 problems per round, no topic labels). Then a 15-min verbal explanation of the hardest problem.

- [ ] Pattern identified before coding · [ ] edge cases listed · [ ] complexity stated aloud · [ ] mistakes logged · [ ] verbal explanation delivered

### E2 — Lists, Stacks, Search and Backtracking — Mock Round 2 (Dec 30, 2026)

**Re-solve (⭐ Tier A material from earlier weeks):** [Reorder List](https://leetcode.com/problems/reorder-list/) · [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) · [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/) · [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) · [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) · [Combination Sum](https://leetcode.com/problems/combination-sum/) · [Word Search](https://leetcode.com/problems/word-search/)

**Format:** Two timed rounds; speak your complexity analysis aloud; write edge cases before coding.

- [ ] Pattern identified before coding · [ ] edge cases listed · [ ] complexity stated aloud · [ ] mistakes logged · [ ] verbal explanation delivered

### E3 — Trees, Heaps, Tries and Design — Mock Round 3 (Dec 31, 2026)

**Re-solve (⭐ Tier A material from earlier weeks):** [Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) · [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/) · [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) · [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) · [LRU Cache](https://leetcode.com/problems/lru-cache/) · [Word Search II](https://leetcode.com/problems/word-search-ii/)

**Format:** Two timed rounds; practise interviewer-style follow-ups (iterative version, O(1) space, streaming input).

- [ ] Pattern identified before coding · [ ] edge cases listed · [ ] complexity stated aloud · [ ] mistakes logged · [ ] verbal explanation delivered

### E4 — Graphs — Mock Round 4 (Jan 1, 2027)

**Re-solve (⭐ Tier A material from earlier weeks):** [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) · [Word Ladder](https://leetcode.com/problems/word-ladder/) · [Network Delay Time](https://leetcode.com/problems/network-delay-time/) · [Accounts Merge](https://leetcode.com/problems/accounts-merge/) · [Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/) · [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/)

**Format:** Name the algorithm (BFS / topo / DSU / Dijkstra) within 2 minutes before coding each problem.

- [ ] Pattern identified before coding · [ ] edge cases listed · [ ] complexity stated aloud · [ ] mistakes logged · [ ] verbal explanation delivered

### E5 — Greedy and DP — Mock Round 5 (Jan 2, 2027)

**Re-solve (⭐ Tier A material from earlier weeks):** [Jump Game II](https://leetcode.com/problems/jump-game-ii/) · [Merge Intervals](https://leetcode.com/problems/merge-intervals/) · [Coin Change](https://leetcode.com/problems/coin-change/) · [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) · [Edit Distance](https://leetcode.com/problems/edit-distance/) · [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/) · [Best Time to Buy and Sell Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)

**Format:** Define the DP state in one sentence before writing any code; justify every greedy choice.

- [ ] Pattern identified before coding · [ ] edge cases listed · [ ] complexity stated aloud · [ ] mistakes logged · [ ] verbal explanation delivered

### E6 — Full Mock Interview Day (Jan 3, 2027)

**Format:** Run two 45-minute interview simulations (a friend, a timer, or a peer platform): 1 Medium + 1 follow-up, then 1 Medium/Hard. Choose the problems from your mistake log: previously failed ⭐ Tier A items first. Talk throughout; submit only after dry-running edge cases.

- [ ] Pattern identified before coding · [ ] edge cases listed · [ ] complexity stated aloud · [ ] mistakes logged · [ ] verbal explanation delivered

### E7 — Retrospective and Final Weak-Area Plan (Jan 4, 2027)

**Format:** No new problems. Review the mistake log, rank your five weakest patterns, schedule a re-solve for each with dates, and note three interview habits to improve (communication, edge cases, complexity statements).

- [ ] Pattern identified before coding · [ ] edge cases listed · [ ] complexity stated aloud · [ ] mistakes logged · [ ] verbal explanation delivered

<a id="master-checklist"></a>
## 10. Master revision checklist

The 82 highest-value problems from the roadmap (all ⭐ Tier A). Re-solve each one from scratch, timed, in the final weeks; tick it only when you solved it independently.

**Arrays and hashing**
- [ ] [Two Sum](https://leetcode.com/problems/two-sum/)
- [ ] [Group Anagrams](https://leetcode.com/problems/group-anagrams/)
- [ ] [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/)
- [ ] [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)
- [ ] [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)
- [ ] [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)
- [ ] [Sort Colors](https://leetcode.com/problems/sort-colors/)
- [ ] [Next Permutation](https://leetcode.com/problems/next-permutation/)
- [ ] [Rotate Image](https://leetcode.com/problems/rotate-image/)
- [ ] [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/)

**Two pointers and sliding window**
- [ ] [3Sum](https://leetcode.com/problems/3sum/)
- [ ] [Container With Most Water](https://leetcode.com/problems/container-with-most-water/)
- [ ] [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/)
- [ ] [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
- [ ] [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)
- [ ] [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)
- [ ] [Permutation in String](https://leetcode.com/problems/permutation-in-string/)
- [ ] [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)

**Linked lists and stacks**
- [ ] [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)
- [ ] [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/)
- [ ] [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)
- [ ] [Reorder List](https://leetcode.com/problems/reorder-list/)
- [ ] [Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/)
- [ ] [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
- [ ] [Min Stack](https://leetcode.com/problems/min-stack/)
- [ ] [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)
- [ ] [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/)
- [ ] [Decode String](https://leetcode.com/problems/decode-string/)

**Binary search and backtracking**
- [ ] [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)
- [ ] [Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
- [ ] [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/)
- [ ] [Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/)
- [ ] [Subsets](https://leetcode.com/problems/subsets/)
- [ ] [Combination Sum](https://leetcode.com/problems/combination-sum/)
- [ ] [Permutations](https://leetcode.com/problems/permutations/)
- [ ] [Word Search](https://leetcode.com/problems/word-search/)
- [ ] [Generate Parentheses](https://leetcode.com/problems/generate-parentheses/)
- [ ] [N-Queens](https://leetcode.com/problems/n-queens/)

**Trees**
- [ ] [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)
- [ ] [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/)
- [ ] [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)
- [ ] [Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)
- [ ] [Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)
- [ ] [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)
- [ ] [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/)
- [ ] [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)

**Heaps, tries and design**
- [ ] [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)
- [ ] [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)
- [ ] [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/)
- [ ] [Task Scheduler](https://leetcode.com/problems/task-scheduler/)
- [ ] [Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/)
- [ ] [LRU Cache](https://leetcode.com/problems/lru-cache/)
- [ ] [Word Search II](https://leetcode.com/problems/word-search-ii/)

**Graphs**
- [ ] [Number of Islands](https://leetcode.com/problems/number-of-islands/)
- [ ] [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/)
- [ ] [Course Schedule](https://leetcode.com/problems/course-schedule/)
- [ ] [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)
- [ ] [Clone Graph](https://leetcode.com/problems/clone-graph/)
- [ ] [Accounts Merge](https://leetcode.com/problems/accounts-merge/)
- [ ] [Network Delay Time](https://leetcode.com/problems/network-delay-time/)
- [ ] [Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/)
- [ ] [Word Ladder](https://leetcode.com/problems/word-ladder/)
- [ ] [Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/)
- [ ] [Redundant Connection](https://leetcode.com/problems/redundant-connection/)
- [ ] [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/)

**Greedy and intervals**
- [ ] [Merge Intervals](https://leetcode.com/problems/merge-intervals/)
- [ ] [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/)
- [ ] [Jump Game II](https://leetcode.com/problems/jump-game-ii/)
- [ ] [Gas Station](https://leetcode.com/problems/gas-station/)
- [ ] [Partition Labels](https://leetcode.com/problems/partition-labels/)
- [ ] [Hand of Straights](https://leetcode.com/problems/hand-of-straights/)

**Dynamic programming**
- [ ] [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)
- [ ] [House Robber](https://leetcode.com/problems/house-robber/)
- [ ] [Decode Ways](https://leetcode.com/problems/decode-ways/)
- [ ] [Coin Change](https://leetcode.com/problems/coin-change/)
- [ ] [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)
- [ ] [Word Break](https://leetcode.com/problems/word-break/)
- [ ] [Unique Paths](https://leetcode.com/problems/unique-paths/)
- [ ] [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)
- [ ] [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/)
- [ ] [Edit Distance](https://leetcode.com/problems/edit-distance/)
- [ ] [Best Time to Buy and Sell Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)

<a id="tracker"></a>
## 11. Final completion tracker

| Week | Dates | Tier A done | Test score | Weak patterns logged | Complete |
|---|---|:---:|:---:|:---:|:---:|
| [Week 1](#week-1) | Oct 20 – Oct 26 | __ / 28 | __ / 3 | `[ ]` | `[ ]` |
| [Week 2](#week-2) | Oct 27 – Nov 2 | __ / 24 | __ / 3 | `[ ]` | `[ ]` |
| [Week 3](#week-3) | Nov 3 – Nov 9 | __ / 26 | __ / 3 | `[ ]` | `[ ]` |
| [Week 4](#week-4) | Nov 10 – Nov 16 | __ / 26 | __ / 3 | `[ ]` | `[ ]` |
| [Week 5](#week-5) | Nov 17 – Nov 23 | __ / 28 | __ / 3 | `[ ]` | `[ ]` |
| [Week 6](#week-6) | Nov 24 – Nov 30 | __ / 24 | __ / 3 | `[ ]` | `[ ]` |
| [Week 7](#week-7) | Dec 1 – Dec 7 | __ / 26 | __ / 3 | `[ ]` | `[ ]` |
| [Week 8](#week-8) | Dec 8 – Dec 14 | __ / 27 | __ / 3 | `[ ]` | `[ ]` |
| [Week 9](#week-9) | Dec 15 – Dec 21 | __ / 24 | __ / 3 | `[ ]` | `[ ]` |
| [Week 10](#week-10) | Dec 22 – Dec 28 | __ / 25 | __ / 3 | `[ ]` | `[ ]` |

**Overall progress**

```text
Weeks   [░░░░░░░░░░] 0 / 10
Tier A  [░░░░░░░░░░] 0 / 258
Master  [░░░░░░░░░░] 0 / 82
```

- [ ] All 10 weekly tests taken · [ ] Day 70 assessment done · [ ] Master Revision Checklist complete · [ ] Optional mock extension done · [ ] Five weakest patterns re-solved without hints

> Built to be followed, not admired: do the day, log the mistakes, revise on schedule.
