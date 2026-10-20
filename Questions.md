# ALGORITHMA — 70-Day DSA Flagship Roadmap

**Owner:** Sonam | **Start:** Tue, 20 Oct 2026 | **Core 70 days end:** Mon, 28 Dec 2026 | **Week 11 (mocks) ends:** Mon, 04 Jan 2027

> Month 1 Foundation → Month 2 Core DSA → Month 3 Advanced → Week 11+ Mock Interviews. Every problem name below is a clickable link.

**Legend:** ⭐ = interview classic (Blind 75 / NeetCode 150 / Striver-style most-asked) | 🟢🟡🔴 = Easy / Medium / Hard | 🔒 = LeetCode Premium (use LintCode/GFG equivalent) | **Warm-up** = extra practice, not counted in weekly target | ☐ = tick when solved

---

## Daily Operating System

| Block | Time | What |
|---|---|---|
| Concept | 45 min | Learn the day's pattern; write its C++ template from scratch |
| Core problems | 4–5 hrs | 10–15 problems/day. Time caps: 🟢 ≤ 15 min, 🟡 ≤ 25 min, 🔴 ≤ 40 min, then read hints |
| Upsolve | 45 min | Unsolved problems: study solution, re-code without looking |
| Revision | 20 min | Yesterday's templates + 1 random ⭐ from an older week |
| Log | 10 min | Problem, pattern, time taken, mistake type |

**Rules:** (1) Brute force first, then optimize; say complexity before coding. (2) Fail a problem twice → Redo Bucket. (3) Day 7 of every week = Review + Weekly Test. (4) Short on time → do ⭐ first, then 🟢/🟡; 🔴 problems are stretch. (5) Light day (college/CRT)? Minimum = all ⭐ + 6 problems; carry the rest to the weekly review day.

---

## Roadmap at a Glance

| Week | Days | Dates | Focus | Site target | Planned (🟢/🟡/🔴) |
|---|---|---|---|---|---|
| 1 | 1–7 | 20 Oct → 26 Oct | Arrays & Two-Pointer Techniques | 28–30 problems | 72 (29/39/4) |
| 2 | 8–14 | 27 Oct → 02 Nov | Strings + Hashing | 30–35 problems | 72 (29/39/4) |
| 3 | 15–21 | 03 Nov → 09 Nov | Linked List + Stack + Queue | 25–28 problems | 72 (19/48/5) |
| 4 | 22–28 | 10 Nov → 16 Nov | Binary Search + Basic Recursion | 24–28 problems | 72 (16/48/8) |
| 5 | 29–35 | 17 Nov → 23 Nov | Trees & Hierarchical Traversal | 24–28 problems | 76 (21/48/7) |
| 6 | 36–42 | 24 Nov → 30 Nov | Ordered Structures & Priority Processing | 20–23 problems | 74 (13/45/16) |
| 7 | 43–49 | 01 Dec → 07 Dec | Graph Traversal | 26–29 problems | 74 (4/52/18) |
| 8 | 50–56 | 08 Dec → 14 Dec | Greedy & Interval Problems | 14–18 problems | 74 (10/55/9) |
| 9 | 57–63 | 15 Dec → 21 Dec | Dynamic Programming (1D) | 22–25 problems | 74 (7/55/12) |
| 10 | 64–70 | 22 Dec → 28 Dec | Advanced DP & Backtracking (2D) | 26–30 problems | 72 (1/40/31) |
| 11+ | 71–77 | 29 Dec → 04 Jan | Practice & Mock Interviews | 8–10 mocks | 9 mocks + 30 must-redo |

---

# Day-wise Plan

## Month 1 — Pure Foundation Phase

### Week 1 — Arrays & Two-Pointer Techniques

**Patterns:** Time & Space Complexity (deep) • Arrays (prefix, suffix, difference array) • Two pointer technique • Sliding window basics  
**Site target:** 28–30 problems (Easy 10, Medium 18–20, Hard 0–2 optional) | **Planned:** 72 (🟢 29 / 🟡 39 / 🔴 4)

**Week 1 schedule**

| Day | Date | Topic | What to learn |
|---|---|---|---|
| 1 | Tue, 20 Oct 2026 | Complexity Deep-Dive + Array Warm-up | Big-O for loops, recursion & amortized ops; STL operation costs; constraints → expected complexity (n ≤ 1e5 → O(n log n)); space vs time trade-offs |
| 2 | Wed, 21 Oct 2026 | Prefix, Suffix & Difference Arrays | Prefix sum + hashmap trick, suffix products, difference array for range updates |
| 3 | Thu, 22 Oct 2026 | In-Place Array Manipulation | Swap/overwrite patterns, Dutch National Flag, cyclic placement, reversal tricks |
| 4 | Fri, 23 Oct 2026 | Two Pointer Technique | Opposite-end pointers on sorted data, dedupe handling, greedy pointer movement |
| 5 | Sat, 24 Oct 2026 | Sliding Window Basics | Fixed vs variable window, expand-shrink template, invariant maintenance |
| 6 | Sun, 25 Oct 2026 | Mixed Arrays + Windows Set | Pick the right pattern from the problem statement; timed set |
| 7 | Mon, 26 Oct 2026 | **Review & Weekly Test** | Re-solve 5 ⭐ from this week (no notes) • clear Redo Bucket • 90-min test: 3 mixed problems on Time & Space Complexity (deep), Arrays (prefix, suffix, difference array), Two pointer technique • rewrite templates • update tracker |

**Week 1 problems**

| Day | # | Problem | Difficulty | ⭐ | Type | Status |
|---|---|---|---|---|---|---|
| 1 | 1 | [Two Sum](https://leetcode.com/problems/two-sum/) | 🟢 Easy | ⭐ | Core | ☐ |
|  | 2 | [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) | 🟢 Easy | ⭐ | Core | ☐ |
|  | 3 | [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | 🟢 Easy | ⭐ | Core | ☐ |
|  | 4 | [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 5 | [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 6 | [Single Number](https://leetcode.com/problems/single-number/) | 🟢 Easy | ⭐ | Core | ☐ |
|  | 7 | [Missing Number](https://leetcode.com/problems/missing-number/) | 🟢 Easy |  | Core | ☐ |
|  | 8 | [Plus One](https://leetcode.com/problems/plus-one/) | 🟢 Easy |  | Core | ☐ |
|  | 9 | [Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array/) | 🟢 Easy |  | Core | ☐ |
|  | 10 | [Find All Numbers Disappeared in an Array](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/) | 🟢 Easy |  | Core | ☐ |
|  | 11 | [Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/) | 🟡 Medium | ⭐ | Core | ☐ |
| 2 | 1 | [Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/) | 🟢 Easy |  | Core | ☐ |
|  | 2 | [Find Pivot Index](https://leetcode.com/problems/find-pivot-index/) | 🟢 Easy |  | Core | ☐ |
|  | 3 | [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 4 | [Corporate Flight Bookings](https://leetcode.com/problems/corporate-flight-bookings/) | 🟡 Medium |  | Core | ☐ |
|  | 5 | [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 6 | [Range Sum Query 2D - Immutable](https://leetcode.com/problems/range-sum-query-2d-immutable/) | 🟡 Medium |  | Core | ☐ |
|  | 7 | [Maximum Points You Can Obtain from Cards](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/) | 🟡 Medium |  | Core | ☐ |
|  | 8 | [Minimum Value to Get Positive Step by Step Sum](https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/) | 🟢 Easy |  | Core | ☐ |
|  | 9 | [Left and Right Sum Differences](https://leetcode.com/problems/left-and-right-sum-differences/) | 🟢 Easy |  | Core | ☐ |
|  | 10 | [Count Number of Nice Subarrays](https://leetcode.com/problems/count-number-of-nice-subarrays/) | 🟡 Medium |  | Core | ☐ |
|  | 11 | [Binary Subarrays With Sum](https://leetcode.com/problems/binary-subarrays-with-sum/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Number of Ways to Split Array](https://leetcode.com/problems/number-of-ways-to-split-array/) | 🟡 Medium |  | Core | ☐ |
| 3 | 1 | [Move Zeroes](https://leetcode.com/problems/move-zeroes/) | 🟢 Easy |  | Core | ☐ |
|  | 2 | [Rotate Array](https://leetcode.com/problems/rotate-array/) | 🟡 Medium |  | Core | ☐ |
|  | 3 | [Sort Colors](https://leetcode.com/problems/sort-colors/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 4 | [Next Permutation](https://leetcode.com/problems/next-permutation/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 5 | [First Missing Positive](https://leetcode.com/problems/first-missing-positive/) | 🔴 Hard | ⭐ | Core | ☐ |
|  | 6 | [Remove Element](https://leetcode.com/problems/remove-element/) | 🟢 Easy |  | Core | ☐ |
|  | 7 | [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/) | 🟢 Easy | ⭐ | Core | ☐ |
|  | 8 | [Rotate Image](https://leetcode.com/problems/rotate-image/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 9 | [Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/) | 🟢 Easy |  | Core | ☐ |
|  | 10 | [Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 11 | [Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/) | 🟢 Easy |  | Core | ☐ |
|  | 12 | [Sort Array By Parity](https://leetcode.com/problems/sort-array-by-parity/) | 🟢 Easy |  | Core | ☐ |
| 4 | 1 | [Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) | 🟢 Easy |  | Core | ☐ |
|  | 2 | [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) | 🟢 Easy |  | Core | ☐ |
|  | 3 | [3Sum](https://leetcode.com/problems/3sum/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 4 | [Container With Most Water](https://leetcode.com/problems/container-with-most-water/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 5 | [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) | 🔴 Hard | ⭐ | Core | ☐ |
|  | 6 | [Reverse String](https://leetcode.com/problems/reverse-string/) | 🟢 Easy |  | Core | ☐ |
|  | 7 | [Valid Palindrome II](https://leetcode.com/problems/valid-palindrome-ii/) | 🟢 Easy |  | Core | ☐ |
|  | 8 | [Is Subsequence](https://leetcode.com/problems/is-subsequence/) | 🟢 Easy |  | Core | ☐ |
|  | 9 | [Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/) | 🟡 Medium |  | Core | ☐ |
|  | 10 | [3Sum Closest](https://leetcode.com/problems/3sum-closest/) | 🟡 Medium |  | Core | ☐ |
|  | 11 | [Boats to Save People](https://leetcode.com/problems/boats-to-save-people/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Backspace String Compare](https://leetcode.com/problems/backspace-string-compare/) | 🟢 Easy |  | Core | ☐ |
| 5 | 1 | [Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/) | 🟢 Easy |  | Core | ☐ |
|  | 2 | [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 3 | [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 4 | [Permutation in String](https://leetcode.com/problems/permutation-in-string/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 5 | [Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/) | 🟡 Medium |  | Core | ☐ |
|  | 6 | [Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/) | 🟢 Easy |  | Core | ☐ |
|  | 7 | [Maximum Number of Vowels in a Substring of Given Length](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/) | 🟡 Medium |  | Core | ☐ |
|  | 8 | [Grumpy Bookstore Owner](https://leetcode.com/problems/grumpy-bookstore-owner/) | 🟡 Medium |  | Core | ☐ |
|  | 9 | [Longest Subarray of 1's After Deleting One Element](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/) | 🟡 Medium |  | Core | ☐ |
|  | 10 | [Get Equal Substrings Within Budget](https://leetcode.com/problems/get-equal-substrings-within-budget/) | 🟡 Medium |  | Core | ☐ |
|  | 11 | [Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/) | 🔴 Hard | ⭐ | Core | ☐ |
| 6 | 1 | [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) | 🟢 Easy |  | Core | ☐ |
|  | 2 | [4Sum](https://leetcode.com/problems/4sum/) | 🟡 Medium |  | Core | ☐ |
|  | 3 | [Subarray Product Less Than K](https://leetcode.com/problems/subarray-product-less-than-k/) | 🟡 Medium |  | Core | ☐ |
|  | 4 | [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 5 | [Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/) | 🟡 Medium |  | Core | ☐ |
|  | 6 | [Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers/) | 🔴 Hard |  | Core | ☐ |
|  | 7 | [Maximum Erasure Value](https://leetcode.com/problems/maximum-erasure-value/) | 🟡 Medium |  | Core | ☐ |
|  | 8 | [Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/) | 🟡 Medium |  | Core | ☐ |
|  | 9 | [Minimum Operations to Reduce X to Zero](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/) | 🟡 Medium |  | Core | ☐ |
|  | 10 | [Shortest Unsorted Continuous Subarray](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/) | 🟡 Medium |  | Core | ☐ |
|  | 11 | [Valid Mountain Array](https://leetcode.com/problems/valid-mountain-array/) | 🟢 Easy |  | Core | ☐ |
|  | 12 | [Longest Continuous Increasing Subsequence](https://leetcode.com/problems/longest-continuous-increasing-subsequence/) | 🟢 Easy |  | Core | ☐ |

### Week 2 — Strings + Hashing

**Patterns:** HashMap / HashSet • Frequency Count • Anagram Patterns • Substring Problems  
**Site target:** 30–35 problems (Easy 8–10, Medium 20–22, Hard 2) | **Planned:** 72 (🟢 29 / 🟡 39 / 🔴 4)

**Week 2 schedule**

| Day | Date | Topic | What to learn |
|---|---|---|---|
| 8 | Tue, 27 Oct 2026 | HashMap & HashSet | O(1) lookup design, sets for existence, custom keys |
| 9 | Wed, 28 Oct 2026 | Frequency Count | Count arrays vs maps, bucket sort for frequency, majority logic |
| 10 | Thu, 29 Oct 2026 | Anagram Patterns | Canonical keys (sorted / count signature), window + frequency match |
| 11 | Fri, 30 Oct 2026 | Substring Problems | Expand-around-center, window with constraints, palindromic structure |
| 12 | Sat, 31 Oct 2026 | String Manipulation | Parsing, simulation, edge-case discipline |
| 13 | Sun, 01 Nov 2026 | Hashing + Prefix Sum Mix | Prefix-sum remainder tricks, validity checks with sets |
| 14 | Mon, 02 Nov 2026 | **Review & Weekly Test** | Re-solve 5 ⭐ from this week (no notes) • clear Redo Bucket • 90-min test: 3 mixed problems on HashMap / HashSet, Frequency Count, Anagram Patterns • rewrite templates • update tracker |

**Week 2 problems**

| Day | # | Problem | Difficulty | ⭐ | Type | Status |
|---|---|---|---|---|---|---|
| 8 | 1 | [Ransom Note](https://leetcode.com/problems/ransom-note/) | 🟢 Easy |  | Core | ☐ |
|  | 2 | [Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/) | 🟢 Easy |  | Core | ☐ |
|  | 3 | [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 4 | [4Sum II](https://leetcode.com/problems/4sum-ii/) | 🟡 Medium |  | Core | ☐ |
|  | 5 | [Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 6 | [Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays/) | 🟢 Easy |  | Core | ☐ |
|  | 7 | [Intersection of Two Arrays II](https://leetcode.com/problems/intersection-of-two-arrays-ii/) | 🟢 Easy |  | Core | ☐ |
|  | 8 | [Happy Number](https://leetcode.com/problems/happy-number/) | 🟢 Easy |  | Core | ☐ |
|  | 9 | [Design HashMap](https://leetcode.com/problems/design-hashmap/) | 🟢 Easy |  | Core | ☐ |
|  | 10 | [Design HashSet](https://leetcode.com/problems/design-hashset/) | 🟢 Easy |  | Core | ☐ |
|  | 11 | [Brick Wall](https://leetcode.com/problems/brick-wall/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Number of Boomerangs](https://leetcode.com/problems/number-of-boomerangs/) | 🟡 Medium |  | Core | ☐ |
| 9 | 1 | [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 2 | [Sort Characters By Frequency](https://leetcode.com/problems/sort-characters-by-frequency/) | 🟡 Medium |  | Core | ☐ |
|  | 3 | [First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/) | 🟢 Easy |  | Core | ☐ |
|  | 4 | [Majority Element](https://leetcode.com/problems/majority-element/) | 🟢 Easy | ⭐ | Core | ☐ |
|  | 5 | [Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/) | 🟡 Medium |  | Core | ☐ |
|  | 6 | [Find the Difference](https://leetcode.com/problems/find-the-difference/) | 🟢 Easy |  | Core | ☐ |
|  | 7 | [Maximum Number of Balloons](https://leetcode.com/problems/maximum-number-of-balloons/) | 🟢 Easy |  | Core | ☐ |
|  | 8 | [Sort Array by Increasing Frequency](https://leetcode.com/problems/sort-array-by-increasing-frequency/) | 🟢 Easy |  | Core | ☐ |
|  | 9 | [Least Number of Unique Integers after K Removals](https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/) | 🟡 Medium |  | Core | ☐ |
|  | 10 | [Minimum Number of Steps to Make Two Strings Anagram](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/) | 🟡 Medium |  | Core | ☐ |
|  | 11 | [Reduce Array Size to The Half](https://leetcode.com/problems/reduce-array-size-to-the-half/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Determine if Two Strings Are Close](https://leetcode.com/problems/determine-if-two-strings-are-close/) | 🟡 Medium |  | Core | ☐ |
| 10 | 1 | [Valid Anagram](https://leetcode.com/problems/valid-anagram/) | 🟢 Easy | ⭐ | Core | ☐ |
|  | 2 | [Group Anagrams](https://leetcode.com/problems/group-anagrams/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 3 | [Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 4 | [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) | 🔴 Hard | ⭐ | Core | ☐ |
|  | 5 | [Longest Palindrome](https://leetcode.com/problems/longest-palindrome/) | 🟢 Easy |  | Core | ☐ |
|  | 6 | [Verifying an Alien Dictionary](https://leetcode.com/problems/verifying-an-alien-dictionary/) | 🟢 Easy |  | Core | ☐ |
|  | 7 | [Custom Sort String](https://leetcode.com/problems/custom-sort-string/) | 🟡 Medium |  | Core | ☐ |
|  | 8 | [Longest Substring with At Least K Repeating Characters](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/) | 🟡 Medium |  | Core | ☐ |
|  | 9 | [Number of Substrings Containing All Three Characters](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/) | 🟡 Medium |  | Core | ☐ |
|  | 10 | [Check If a String Contains All Binary Codes of Size K](https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/) | 🟡 Medium |  | Core | ☐ |
|  | 11 | [Rearrange Characters to Make Target String](https://leetcode.com/problems/rearrange-characters-to-make-target-string/) | 🟢 Easy |  | Core | ☐ |
|  | 12 | [Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/) | 🟢 Easy | ⭐ | Core | ☐ |
| 11 | 1 | [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/) | 🟢 Easy |  | Core | ☐ |
|  | 2 | [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 3 | [Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/) | 🟡 Medium |  | Core | ☐ |
|  | 4 | [Longest Substring with At Most K Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/) 🔒 | 🟡 Medium |  | Core | ☐ |
|  | 5 | [Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words/) | 🔴 Hard |  | Core | ☐ |
|  | 6 | [Repeated Substring Pattern](https://leetcode.com/problems/repeated-substring-pattern/) | 🟢 Easy |  | Core | ☐ |
|  | 7 | [Count Binary Substrings](https://leetcode.com/problems/count-binary-substrings/) | 🟢 Easy |  | Core | ☐ |
|  | 8 | [Repeated String Match](https://leetcode.com/problems/repeated-string-match/) | 🟡 Medium |  | Core | ☐ |
|  | 9 | [Longest Nice Substring](https://leetcode.com/problems/longest-nice-substring/) | 🟢 Easy |  | Core | ☐ |
|  | 10 | [Length of Last Word](https://leetcode.com/problems/length-of-last-word/) | 🟢 Easy |  | Core | ☐ |
|  | 11 | [Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome/) | 🔴 Hard |  | Core | ☐ |
|  | 12 | [Maximum Length of a Concatenated String with Unique Characters](https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/) | 🟡 Medium |  | Core | ☐ |
| 12 | 1 | [String to Integer (atoi)](https://leetcode.com/problems/string-to-integer-atoi/) | 🟡 Medium |  | Core | ☐ |
|  | 2 | [Encode and Decode Strings](https://leetcode.com/problems/encode-and-decode-strings/) 🔒 | 🟡 Medium | ⭐ | Core | ☐ |
|  | 3 | [Zigzag Conversion](https://leetcode.com/problems/zigzag-conversion/) | 🟡 Medium |  | Core | ☐ |
|  | 4 | [Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/) | 🟡 Medium |  | Core | ☐ |
|  | 5 | [Multiply Strings](https://leetcode.com/problems/multiply-strings/) | 🟡 Medium |  | Core | ☐ |
|  | 6 | [Roman to Integer](https://leetcode.com/problems/roman-to-integer/) | 🟢 Easy | ⭐ | Core | ☐ |
|  | 7 | [Integer to Roman](https://leetcode.com/problems/integer-to-roman/) | 🟡 Medium |  | Core | ☐ |
|  | 8 | [Add Binary](https://leetcode.com/problems/add-binary/) | 🟢 Easy |  | Core | ☐ |
|  | 9 | [Add Strings](https://leetcode.com/problems/add-strings/) | 🟢 Easy |  | Core | ☐ |
|  | 10 | [Compare Version Numbers](https://leetcode.com/problems/compare-version-numbers/) | 🟡 Medium |  | Core | ☐ |
|  | 11 | [Simplify Path](https://leetcode.com/problems/simplify-path/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Count and Say](https://leetcode.com/problems/count-and-say/) | 🟡 Medium |  | Core | ☐ |
| 13 | 1 | [Continuous Subarray Sum](https://leetcode.com/problems/continuous-subarray-sum/) | 🟡 Medium |  | Core | ☐ |
|  | 2 | [Contiguous Array](https://leetcode.com/problems/contiguous-array/) | 🟡 Medium |  | Core | ☐ |
|  | 3 | [Subarray Sums Divisible by K](https://leetcode.com/problems/subarray-sums-divisible-by-k/) | 🟡 Medium |  | Core | ☐ |
|  | 4 | [Valid Sudoku](https://leetcode.com/problems/valid-sudoku/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 5 | [Word Pattern](https://leetcode.com/problems/word-pattern/) | 🟢 Easy |  | Core | ☐ |
|  | 6 | [Number of Good Pairs](https://leetcode.com/problems/number-of-good-pairs/) | 🟢 Easy |  | Core | ☐ |
|  | 7 | [Count Nice Pairs in an Array](https://leetcode.com/problems/count-nice-pairs-in-an-array/) | 🟡 Medium |  | Core | ☐ |
|  | 8 | [Fraction to Recurring Decimal](https://leetcode.com/problems/fraction-to-recurring-decimal/) | 🟡 Medium |  | Core | ☐ |
|  | 9 | [Find Duplicate File in System](https://leetcode.com/problems/find-duplicate-file-in-system/) | 🟡 Medium |  | Core | ☐ |
|  | 10 | [Max Points on a Line](https://leetcode.com/problems/max-points-on-a-line/) | 🔴 Hard |  | Core | ☐ |
|  | 11 | [Minimum Index Sum of Two Lists](https://leetcode.com/problems/minimum-index-sum-of-two-lists/) | 🟢 Easy |  | Core | ☐ |
|  | 12 | [Sum of Unique Elements](https://leetcode.com/problems/sum-of-unique-elements/) | 🟢 Easy |  | Core | ☐ |

### Week 3 — Linked List + Stack + Queue

**Patterns:** Fast & Slow Pointer • Reverse Linked List • Cycle Detection • Monotonic Stack • Stack / Queue Design  
**Site target:** 25–28 problems (Easy 6–8, Medium 14–16, Hard 2–3) | **Planned:** 72 (🟢 19 / 🟡 48 / 🔴 5)

**Week 3 schedule**

| Day | Date | Topic | What to learn |
|---|---|---|---|
| 15 | Tue, 03 Nov 2026 | Linked List Basics + Fast/Slow Pointer | Reverse in place (iterative + recursive), Floyd cycle detection, dummy node technique |
| 16 | Wed, 04 Nov 2026 | Linked List Manipulation | Merge, remove, reorder, deep copy — pointer hygiene |
| 17 | Thu, 05 Nov 2026 | Advanced Linked List | Sorting lists, k-way merge, group reversal |
| 18 | Fri, 06 Nov 2026 | Stack Fundamentals | Matching & nesting, stack with auxiliary state, expression evaluation |
| 19 | Sat, 07 Nov 2026 | Monotonic Stack | Next greater/smaller templates, contribution technique, histogram logic |
| 20 | Sun, 08 Nov 2026 | Stack / Queue Design | Design-style problems: stack-queue conversions, circular buffers, LRU |
| 21 | Mon, 09 Nov 2026 | **Review & Weekly Test** | Re-solve 5 ⭐ from this week (no notes) • clear Redo Bucket • 90-min test: 3 mixed problems on Fast & Slow Pointer, Reverse Linked List, Cycle Detection • rewrite templates • update tracker |

**Week 3 problems**

| Day | # | Problem | Difficulty | ⭐ | Type | Status |
|---|---|---|---|---|---|---|
| 15 | 1 | [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) | 🟢 Easy | ⭐ | Core | ☐ |
|  | 2 | [Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/) | 🟢 Easy |  | Core | ☐ |
|  | 3 | [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) | 🟢 Easy | ⭐ | Core | ☐ |
|  | 4 | [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 5 | [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/) | 🟢 Easy | ⭐ | Core | ☐ |
|  | 6 | [Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/) | 🟢 Easy |  | Core | ☐ |
|  | 7 | [Delete Node in a Linked List](https://leetcode.com/problems/delete-node-in-a-linked-list/) | 🟡 Medium |  | Core | ☐ |
|  | 8 | [Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/) | 🟢 Easy |  | Core | ☐ |
|  | 9 | [Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 10 | [Rotate List](https://leetcode.com/problems/rotate-list/) | 🟡 Medium |  | Core | ☐ |
|  | 11 | [Partition List](https://leetcode.com/problems/partition-list/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/) | 🟡 Medium |  | Core | ☐ |
| 16 | 1 | [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) | 🟢 Easy | ⭐ | Core | ☐ |
|  | 2 | [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 3 | [Reorder List](https://leetcode.com/problems/reorder-list/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 4 | [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 5 | [Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 6 | [Add Two Numbers II](https://leetcode.com/problems/add-two-numbers-ii/) | 🟡 Medium |  | Core | ☐ |
|  | 7 | [Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 8 | [Delete the Middle Node of a Linked List](https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/) | 🟡 Medium |  | Core | ☐ |
|  | 9 | [Maximum Twin Sum of a Linked List](https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/) | 🟡 Medium |  | Core | ☐ |
|  | 10 | [Split Linked List in Parts](https://leetcode.com/problems/split-linked-list-in-parts/) | 🟡 Medium |  | Core | ☐ |
|  | 11 | [Merge Nodes in Between Zeros](https://leetcode.com/problems/merge-nodes-in-between-zeros/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Flatten a Multilevel Doubly Linked List](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/) | 🟡 Medium |  | Core | ☐ |
| 17 | 1 | [Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/) | 🟢 Easy |  | Core | ☐ |
|  | 2 | [Sort List](https://leetcode.com/problems/sort-list/) | 🟡 Medium |  | Core | ☐ |
|  | 3 | [Odd Even Linked List](https://leetcode.com/problems/odd-even-linked-list/) | 🟡 Medium |  | Core | ☐ |
|  | 4 | [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) | 🔴 Hard | ⭐ | Core | ☐ |
|  | 5 | [Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/) | 🔴 Hard | ⭐ | Core | ☐ |
|  | 6 | [Design Linked List](https://leetcode.com/problems/design-linked-list/) | 🟡 Medium |  | Core | ☐ |
|  | 7 | [Insertion Sort List](https://leetcode.com/problems/insertion-sort-list/) | 🟡 Medium |  | Core | ☐ |
|  | 8 | [Swapping Nodes in a Linked List](https://leetcode.com/problems/swapping-nodes-in-a-linked-list/) | 🟡 Medium |  | Core | ☐ |
|  | 9 | [Merge In Between Linked Lists](https://leetcode.com/problems/merge-in-between-linked-lists/) | 🟡 Medium |  | Core | ☐ |
|  | 10 | [Remove Zero Sum Consecutive Nodes from Linked List](https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/) | 🟡 Medium |  | Core | ☐ |
|  | 11 | [Linked List Random Node](https://leetcode.com/problems/linked-list-random-node/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Convert Sorted List to Binary Search Tree](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/) | 🟡 Medium |  | Core | ☐ |
| 18 | 1 | [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) | 🟢 Easy | ⭐ | Core | ☐ |
|  | 2 | [Min Stack](https://leetcode.com/problems/min-stack/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 3 | [Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/) | 🟡 Medium |  | Core | ☐ |
|  | 4 | [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 5 | [Decode String](https://leetcode.com/problems/decode-string/) | 🟡 Medium |  | Core | ☐ |
|  | 6 | [Baseball Game](https://leetcode.com/problems/baseball-game/) | 🟢 Easy |  | Core | ☐ |
|  | 7 | [Remove All Adjacent Duplicates In String](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/) | 🟢 Easy |  | Core | ☐ |
|  | 8 | [Make The String Great](https://leetcode.com/problems/make-the-string-great/) | 🟢 Easy |  | Core | ☐ |
|  | 9 | [Minimum Remove to Make Valid Parentheses](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 10 | [Minimum Add to Make Parentheses Valid](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/) | 🟡 Medium |  | Core | ☐ |
|  | 11 | [Basic Calculator II](https://leetcode.com/problems/basic-calculator-ii/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 12 | [Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/) | 🟢 Easy |  | Core | ☐ |
| 19 | 1 | [Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/) | 🟡 Medium |  | Core | ☐ |
|  | 2 | [Online Stock Span](https://leetcode.com/problems/online-stock-span/) | 🟡 Medium |  | Core | ☐ |
|  | 3 | [Remove K Digits](https://leetcode.com/problems/remove-k-digits/) | 🟡 Medium |  | Core | ☐ |
|  | 4 | [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/) | 🔴 Hard | ⭐ | Core | ☐ |
|  | 5 | [132 Pattern](https://leetcode.com/problems/132-pattern/) | 🟡 Medium |  | Core | ☐ |
|  | 6 | [Sum of Subarray Minimums](https://leetcode.com/problems/sum-of-subarray-minimums/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 7 | [Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle/) | 🔴 Hard | ⭐ | Core | ☐ |
|  | 8 | [Car Fleet](https://leetcode.com/problems/car-fleet/) | 🟡 Medium |  | Core | ☐ |
|  | 9 | [Remove Duplicate Letters](https://leetcode.com/problems/remove-duplicate-letters/) | 🟡 Medium |  | Core | ☐ |
|  | 10 | [Final Prices With a Special Discount in a Shop](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/) | 🟢 Easy |  | Core | ☐ |
|  | 11 | [Maximum Width Ramp](https://leetcode.com/problems/maximum-width-ramp/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Sum of Subarray Ranges](https://leetcode.com/problems/sum-of-subarray-ranges/) | 🟡 Medium |  | Core | ☐ |
| 20 | 1 | [Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/) | 🟢 Easy |  | Core | ☐ |
|  | 2 | [Design Circular Queue](https://leetcode.com/problems/design-circular-queue/) | 🟡 Medium |  | Core | ☐ |
|  | 3 | [LRU Cache](https://leetcode.com/problems/lru-cache/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 4 | [Asteroid Collision](https://leetcode.com/problems/asteroid-collision/) | 🟡 Medium |  | Core | ☐ |
|  | 5 | [Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/) | 🟢 Easy |  | Core | ☐ |
|  | 6 | [Number of Recent Calls](https://leetcode.com/problems/number-of-recent-calls/) | 🟢 Easy |  | Core | ☐ |
|  | 7 | [Design Circular Deque](https://leetcode.com/problems/design-circular-deque/) | 🟡 Medium |  | Core | ☐ |
|  | 8 | [Design Browser History](https://leetcode.com/problems/design-browser-history/) | 🟡 Medium |  | Core | ☐ |
|  | 9 | [Time Needed to Buy Tickets](https://leetcode.com/problems/time-needed-to-buy-tickets/) | 🟢 Easy |  | Core | ☐ |
|  | 10 | [Number of Students Unable to Eat Lunch](https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/) | 🟢 Easy |  | Core | ☐ |
|  | 11 | [LFU Cache](https://leetcode.com/problems/lfu-cache/) | 🔴 Hard | ⭐ | Core | ☐ |
|  | 12 | [Design Twitter](https://leetcode.com/problems/design-twitter/) | 🟡 Medium |  | Core | ☐ |

### Week 4 — Binary Search + Basic Recursion

**Patterns:** Classic Binary Search pattern • First / Last Occurrence pattern • Search in Rotated Sorted Array • Backtracking • Divide and Conquer  
**Site target:** 24–28 problems (Easy 4–6, Medium 14–16, Hard 1–2) | **Planned:** 72 (🟢 16 / 🟡 48 / 🔴 8)

**Week 4 schedule**

| Day | Date | Topic | What to learn |
|---|---|---|---|
| 22 | Tue, 10 Nov 2026 | Classic Binary Search | Loop invariants, lo/hi/mid conventions, avoiding overflow & off-by-one |
| 23 | Wed, 11 Nov 2026 | First/Last Occurrence + Rotated Arrays | lower_bound / upper_bound, identify the sorted half |
| 24 | Thu, 12 Nov 2026 | Binary Search on 2D / Hard BS | Flattened-index search, kth via BS, partition-based median |
| 25 | Fri, 13 Nov 2026 | Backtracking Basics | Choose → explore → un-choose; decision tree drawing; pruning |
| 26 | Sat, 14 Nov 2026 | Divide & Conquer | Merge-sort style splits, quickselect, counting across halves |
| 27 | Sun, 15 Nov 2026 | Mixed Binary Search + Recursion Set | Timed mixed set: pick binary search vs recursion vs math from the statement alone |
| 28 | Mon, 16 Nov 2026 | **Review & Weekly Test** | Re-solve 5 ⭐ from this week (no notes) • clear Redo Bucket • 90-min test: 3 mixed problems on Classic Binary Search pattern, First / Last Occurrence pattern, Search in Rotated Sorted Array • rewrite templates • update tracker |

**Week 4 problems**

| Day | # | Problem | Difficulty | ⭐ | Type | Status |
|---|---|---|---|---|---|---|
| 22 | 1 | [Binary Search](https://leetcode.com/problems/binary-search/) | 🟢 Easy |  | Core | ☐ |
|  | 2 | [Search Insert Position](https://leetcode.com/problems/search-insert-position/) | 🟢 Easy |  | Core | ☐ |
|  | 3 | [Sqrt(x)](https://leetcode.com/problems/sqrtx/) | 🟢 Easy |  | Core | ☐ |
|  | 4 | [First Bad Version](https://leetcode.com/problems/first-bad-version/) | 🟢 Easy |  | Core | ☐ |
|  | 5 | [Peak Index in a Mountain Array](https://leetcode.com/problems/peak-index-in-a-mountain-array/) | 🟢 Easy |  | Core | ☐ |
|  | 6 | [Find Peak Element](https://leetcode.com/problems/find-peak-element/) | 🟡 Medium |  | Core | ☐ |
|  | 7 | [Guess Number Higher or Lower](https://leetcode.com/problems/guess-number-higher-or-lower/) | 🟢 Easy |  | Core | ☐ |
|  | 8 | [Valid Perfect Square](https://leetcode.com/problems/valid-perfect-square/) | 🟢 Easy |  | Core | ☐ |
|  | 9 | [Find Smallest Letter Greater Than Target](https://leetcode.com/problems/find-smallest-letter-greater-than-target/) | 🟢 Easy |  | Core | ☐ |
|  | 10 | [Kth Missing Positive Number](https://leetcode.com/problems/kth-missing-positive-number/) | 🟢 Easy |  | Core | ☐ |
|  | 11 | [Count Negative Numbers in a Sorted Matrix](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/) | 🟢 Easy |  | Core | ☐ |
|  | 12 | [Special Array With X Elements Greater Than or Equal X](https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/) | 🟢 Easy |  | Core | ☐ |
| 23 | 1 | [Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 2 | [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 3 | [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 4 | [Search in Rotated Sorted Array II](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/) | 🟡 Medium |  | Core | ☐ |
|  | 5 | [Single Element in a Sorted Array](https://leetcode.com/problems/single-element-in-a-sorted-array/) | 🟡 Medium |  | Core | ☐ |
|  | 6 | [Find Minimum in Rotated Sorted Array II](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/) | 🔴 Hard |  | Core | ☐ |
|  | 7 | [Check if Array Is Sorted and Rotated](https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/) | 🟢 Easy |  | Core | ☐ |
|  | 8 | [Find in Mountain Array](https://leetcode.com/problems/find-in-mountain-array/) | 🔴 Hard |  | Core | ☐ |
|  | 9 | [Find Right Interval](https://leetcode.com/problems/find-right-interval/) | 🟡 Medium |  | Core | ☐ |
|  | 10 | [Maximum Count of Positive Integer and Negative Integer](https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/) | 🟢 Easy |  | Core | ☐ |
|  | 11 | [Successful Pairs of Spells and Potions](https://leetcode.com/problems/successful-pairs-of-spells-and-potions/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Find Peak Element II](https://leetcode.com/problems/find-peak-element-ii/) | 🟡 Medium |  | Core | ☐ |
| 24 | 1 | [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/) | 🟡 Medium |  | Core | ☐ |
|  | 2 | [Find K Closest Elements](https://leetcode.com/problems/find-k-closest-elements/) | 🟡 Medium |  | Core | ☐ |
|  | 3 | [Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/) | 🟡 Medium |  | Core | ☐ |
|  | 4 | [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/) | 🔴 Hard | ⭐ | Core | ☐ |
|  | 5 | [Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 6 | [Random Pick with Weight](https://leetcode.com/problems/random-pick-with-weight/) | 🟡 Medium |  | Core | ☐ |
|  | 7 | [Find K-th Smallest Pair Distance](https://leetcode.com/problems/find-k-th-smallest-pair-distance/) | 🔴 Hard |  | Core | ☐ |
|  | 8 | [Minimum Time to Complete Trips](https://leetcode.com/problems/minimum-time-to-complete-trips/) | 🟡 Medium |  | Core | ☐ |
|  | 9 | [Heaters](https://leetcode.com/problems/heaters/) | 🟡 Medium |  | Core | ☐ |
|  | 10 | [Count Complete Tree Nodes](https://leetcode.com/problems/count-complete-tree-nodes/) | 🟡 Medium |  | Core | ☐ |
|  | 11 | [Nth Digit](https://leetcode.com/problems/nth-digit/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Kth Smallest Number in Multiplication Table](https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/) | 🔴 Hard |  | Core | ☐ |
| 25 | 1 | [Subsets](https://leetcode.com/problems/subsets/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 2 | [Generate Parentheses](https://leetcode.com/problems/generate-parentheses/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 3 | [Combination Sum](https://leetcode.com/problems/combination-sum/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 4 | [Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 5 | [Word Search](https://leetcode.com/problems/word-search/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 6 | [Combinations](https://leetcode.com/problems/combinations/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 7 | [Combination Sum III](https://leetcode.com/problems/combination-sum-iii/) | 🟡 Medium |  | Core | ☐ |
|  | 8 | [Letter Case Permutation](https://leetcode.com/problems/letter-case-permutation/) | 🟡 Medium |  | Core | ☐ |
|  | 9 | [Binary Watch](https://leetcode.com/problems/binary-watch/) | 🟢 Easy |  | Core | ☐ |
|  | 10 | [Beautiful Arrangement](https://leetcode.com/problems/beautiful-arrangement/) | 🟡 Medium |  | Core | ☐ |
|  | 11 | [Gray Code](https://leetcode.com/problems/gray-code/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Letter Tile Possibilities](https://leetcode.com/problems/letter-tile-possibilities/) | 🟡 Medium |  | Core | ☐ |
| 26 | 1 | [Pow(x, n)](https://leetcode.com/problems/powx-n/) | 🟡 Medium |  | Core | ☐ |
|  | 2 | [Sort an Array (Merge Sort)](https://leetcode.com/problems/sort-an-array/) | 🟡 Medium |  | Core | ☐ |
|  | 3 | [Kth Largest Element in an Array (Quickselect)](https://leetcode.com/problems/kth-largest-element-in-an-array/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 4 | [Reverse Pairs](https://leetcode.com/problems/reverse-pairs/) | 🔴 Hard |  | Core | ☐ |
|  | 5 | [Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/) | 🔴 Hard | ⭐ | Core | ☐ |
|  | 6 | [Different Ways to Add Parentheses](https://leetcode.com/problems/different-ways-to-add-parentheses/) | 🟡 Medium |  | Core | ☐ |
|  | 7 | [Unique Binary Search Trees II](https://leetcode.com/problems/unique-binary-search-trees-ii/) | 🟡 Medium |  | Core | ☐ |
|  | 8 | [Largest Number](https://leetcode.com/problems/largest-number/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 9 | [Super Pow](https://leetcode.com/problems/super-pow/) | 🟡 Medium |  | Core | ☐ |
|  | 10 | [The Skyline Problem](https://leetcode.com/problems/the-skyline-problem/) | 🔴 Hard | ⭐ | Core | ☐ |
|  | 11 | [Beautiful Array](https://leetcode.com/problems/beautiful-array/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Wiggle Sort II](https://leetcode.com/problems/wiggle-sort-ii/) | 🟡 Medium |  | Core | ☐ |
| 27 | 1 | [Kth Symbol in Grammar](https://leetcode.com/problems/k-th-symbol-in-grammar/) | 🟡 Medium |  | Core | ☐ |
|  | 2 | [Count Good Numbers](https://leetcode.com/problems/count-good-numbers/) | 🟡 Medium |  | Core | ☐ |
|  | 3 | [Elimination Game](https://leetcode.com/problems/elimination-game/) | 🟡 Medium |  | Core | ☐ |
|  | 4 | [Lexicographical Numbers](https://leetcode.com/problems/lexicographical-numbers/) | 🟡 Medium |  | Core | ☐ |
|  | 5 | [Search Suggestions System](https://leetcode.com/problems/search-suggestions-system/) | 🟡 Medium |  | Core | ☐ |
|  | 6 | [Maximum Distance Between a Pair of Values](https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/) | 🟡 Medium |  | Core | ☐ |
|  | 7 | [Longest Subsequence With Limited Sum](https://leetcode.com/problems/longest-subsequence-with-limited-sum/) | 🟢 Easy |  | Core | ☐ |
|  | 8 | [Sum of Square Numbers](https://leetcode.com/problems/sum-of-square-numbers/) | 🟡 Medium |  | Core | ☐ |
|  | 9 | [Fair Candy Swap](https://leetcode.com/problems/fair-candy-swap/) | 🟢 Easy |  | Core | ☐ |
|  | 10 | [Minimum Absolute Sum Difference](https://leetcode.com/problems/minimum-absolute-sum-difference/) | 🟡 Medium |  | Core | ☐ |
|  | 11 | [Maximum Number of Integers to Choose From a Range I](https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Valid Triangle Number](https://leetcode.com/problems/valid-triangle-number/) | 🟡 Medium |  | Core | ☐ |

## Month 2 — Core DSA Phase

### Week 5 — Trees & Hierarchical Traversal

**Patterns:** Inorder traversal • Preorder traversal • Postorder traversal • Level order traversal • Height and diameter of tree • Lowest common ancestor • Path sum problems  
**Site target:** 24–28 problems (Medium 20–22, Hard 4–6); warm-up Easy problems are extra | **Planned:** 76 (🟢 21 / 🟡 48 / 🔴 7)

**Week 5 schedule**

| Day | Date | Topic | What to learn |
|---|---|---|---|
| 29 | Tue, 17 Nov 2026 | Tree Traversals | Recursive + iterative DFS, BFS with queue, level-size loop |
| 30 | Wed, 18 Nov 2026 | Height, Diameter & Construction | Return-value vs global-variable recursion; build trees from traversals |
| 31 | Thu, 19 Nov 2026 | Lowest Common Ancestor | Bottom-up LCA, parent-pointer tricks, tree → graph conversion |
| 32 | Fri, 20 Nov 2026 | Path Sum Problems | Root-to-leaf vs any-path sums, prefix-sum on trees, max path logic |
| 33 | Sat, 21 Nov 2026 | Tree Mixed Set | Timed mixed set: construction, DP on trees, forests |
| 34 | Sun, 22 Nov 2026 | Tree Mixed & Hard Set | Timed mixed set: construction, flips, subtree aggregates, tree DP |
| 35 | Mon, 23 Nov 2026 | **Review & Weekly Test** | Re-solve 5 ⭐ from this week (no notes) • clear Redo Bucket • 90-min test: 3 mixed problems on Inorder traversal, Preorder traversal, Postorder traversal • rewrite templates • update tracker |

**Week 5 problems**

| Day | # | Problem | Difficulty | ⭐ | Type | Status |
|---|---|---|---|---|---|---|
| 29 | 1 | [Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/) | 🟢 Easy |  | Warm-up | ☐ |
|  | 2 | [Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/) | 🟢 Easy |  | Warm-up | ☐ |
|  | 3 | [Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/) | 🟢 Easy |  | Warm-up | ☐ |
|  | 4 | [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) | 🟢 Easy | ⭐ | Warm-up | ☐ |
|  | 5 | [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/) | 🟢 Easy | ⭐ | Warm-up | ☐ |
|  | 6 | [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 7 | [Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) | 🟡 Medium |  | Core | ☐ |
|  | 8 | [Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 9 | [Vertical Order Traversal of a Binary Tree](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/) | 🔴 Hard |  | Core | ☐ |
|  | 10 | [Average of Levels in Binary Tree](https://leetcode.com/problems/average-of-levels-in-binary-tree/) | 🟢 Easy |  | Core | ☐ |
|  | 11 | [Binary Tree Level Order Traversal II](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Find Largest Value in Each Tree Row](https://leetcode.com/problems/find-largest-value-in-each-tree-row/) | 🟡 Medium |  | Core | ☐ |
|  | 13 | [Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/) | 🟢 Easy |  | Core | ☐ |
| 30 | 1 | [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/) | 🟢 Easy | ⭐ | Warm-up | ☐ |
|  | 2 | [Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/) | 🟢 Easy |  | Warm-up | ☐ |
|  | 3 | [Same Tree](https://leetcode.com/problems/same-tree/) | 🟢 Easy |  | Warm-up | ☐ |
|  | 4 | [Symmetric Tree](https://leetcode.com/problems/symmetric-tree/) | 🟢 Easy | ⭐ | Warm-up | ☐ |
|  | 5 | [Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 6 | [Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/) | 🟡 Medium |  | Core | ☐ |
|  | 7 | [Populating Next Right Pointers in Each Node](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/) | 🟡 Medium |  | Core | ☐ |
|  | 8 | [Count Good Nodes in Binary Tree](https://leetcode.com/problems/count-good-nodes-in-binary-tree/) | 🟡 Medium |  | Core | ☐ |
|  | 9 | [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) | 🔴 Hard | ⭐ | Core | ☐ |
|  | 10 | [Merge Two Binary Trees](https://leetcode.com/problems/merge-two-binary-trees/) | 🟢 Easy |  | Core | ☐ |
|  | 11 | [Sum of Left Leaves](https://leetcode.com/problems/sum-of-left-leaves/) | 🟢 Easy |  | Core | ☐ |
|  | 12 | [Binary Tree Paths](https://leetcode.com/problems/binary-tree-paths/) | 🟢 Easy |  | Core | ☐ |
|  | 13 | [Populating Next Right Pointers in Each Node II](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/) | 🟡 Medium |  | Core | ☐ |
| 31 | 1 | [Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/) | 🟢 Easy | ⭐ | Warm-up | ☐ |
|  | 2 | [Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 3 | [Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 4 | [All Nodes Distance K in Binary Tree](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/) | 🟡 Medium |  | Core | ☐ |
|  | 5 | [Amount of Time for Binary Tree to Be Infected](https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/) | 🟡 Medium |  | Core | ☐ |
|  | 6 | [Smallest Subtree with all the Deepest Nodes](https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/) | 🟡 Medium |  | Core | ☐ |
|  | 7 | [Binary Tree Tilt](https://leetcode.com/problems/binary-tree-tilt/) | 🟢 Easy |  | Core | ☐ |
|  | 8 | [Cousins in Binary Tree](https://leetcode.com/problems/cousins-in-binary-tree/) | 🟢 Easy |  | Core | ☐ |
|  | 9 | [Find Bottom Left Tree Value](https://leetcode.com/problems/find-bottom-left-tree-value/) | 🟡 Medium |  | Core | ☐ |
|  | 10 | [Binary Tree Pruning](https://leetcode.com/problems/binary-tree-pruning/) | 🟡 Medium |  | Core | ☐ |
|  | 11 | [Distribute Coins in Binary Tree](https://leetcode.com/problems/distribute-coins-in-binary-tree/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Maximum Depth of N-ary Tree](https://leetcode.com/problems/maximum-depth-of-n-ary-tree/) | 🟢 Easy |  | Core | ☐ |
|  | 13 | [Find Duplicate Subtrees](https://leetcode.com/problems/find-duplicate-subtrees/) | 🟡 Medium | ⭐ | Core | ☐ |
| 32 | 1 | [Path Sum](https://leetcode.com/problems/path-sum/) | 🟢 Easy |  | Warm-up | ☐ |
|  | 2 | [Path Sum II](https://leetcode.com/problems/path-sum-ii/) | 🟡 Medium |  | Core | ☐ |
|  | 3 | [Path Sum III](https://leetcode.com/problems/path-sum-iii/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 4 | [Sum Root to Leaf Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/) | 🟡 Medium |  | Core | ☐ |
|  | 5 | [Longest Univalue Path](https://leetcode.com/problems/longest-univalue-path/) | 🟡 Medium |  | Core | ☐ |
|  | 6 | [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/) | 🔴 Hard | ⭐ | Core | ☐ |
|  | 7 | [Sum of Root To Leaf Binary Numbers](https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/) | 🟢 Easy |  | Core | ☐ |
|  | 8 | [Maximum Difference Between Node and Ancestor](https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/) | 🟡 Medium |  | Core | ☐ |
|  | 9 | [Longest ZigZag Path in a Binary Tree](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/) | 🟡 Medium |  | Core | ☐ |
|  | 10 | [Most Frequent Subtree Sum](https://leetcode.com/problems/most-frequent-subtree-sum/) | 🟡 Medium |  | Core | ☐ |
|  | 11 | [Maximum Product of Splitted Binary Tree](https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Smallest String Starting From Leaf](https://leetcode.com/problems/smallest-string-starting-from-leaf/) | 🟡 Medium |  | Core | ☐ |
|  | 13 | [Insufficient Nodes in Root to Leaf Paths](https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/) | 🟡 Medium |  | Core | ☐ |
| 33 | 1 | [Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/) | 🟡 Medium |  | Core | ☐ |
|  | 2 | [House Robber III](https://leetcode.com/problems/house-robber-iii/) | 🟡 Medium |  | Core | ☐ |
|  | 3 | [Maximum Width of Binary Tree](https://leetcode.com/problems/maximum-width-of-binary-tree/) | 🟡 Medium |  | Core | ☐ |
|  | 4 | [Delete Nodes And Return Forest](https://leetcode.com/problems/delete-nodes-and-return-forest/) | 🟡 Medium |  | Core | ☐ |
|  | 5 | [Binary Tree Cameras](https://leetcode.com/problems/binary-tree-cameras/) | 🔴 Hard |  | Core | ☐ |
|  | 6 | [Check Completeness of a Binary Tree](https://leetcode.com/problems/check-completeness-of-a-binary-tree/) | 🟡 Medium |  | Core | ☐ |
|  | 7 | [Even Odd Tree](https://leetcode.com/problems/even-odd-tree/) | 🟡 Medium |  | Core | ☐ |
|  | 8 | [Deepest Leaves Sum](https://leetcode.com/problems/deepest-leaves-sum/) | 🟡 Medium |  | Core | ☐ |
|  | 9 | [Add One Row to Tree](https://leetcode.com/problems/add-one-row-to-tree/) | 🟡 Medium |  | Core | ☐ |
|  | 10 | [Sum of Nodes with Even-Valued Grandparent](https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/) | 🟡 Medium |  | Core | ☐ |
|  | 11 | [All Possible Full Binary Trees](https://leetcode.com/problems/all-possible-full-binary-trees/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Validate Binary Tree Nodes](https://leetcode.com/problems/validate-binary-tree-nodes/) | 🟡 Medium |  | Core | ☐ |
| 34 | 1 | [Maximum Binary Tree](https://leetcode.com/problems/maximum-binary-tree/) | 🟡 Medium |  | Core | ☐ |
|  | 2 | [Flip Equivalent Binary Trees](https://leetcode.com/problems/flip-equivalent-binary-trees/) | 🟡 Medium |  | Core | ☐ |
|  | 3 | [Construct String from Binary Tree](https://leetcode.com/problems/construct-string-from-binary-tree/) | 🟢 Easy |  | Core | ☐ |
|  | 4 | [Maximum Level Sum of a Binary Tree](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/) | 🟡 Medium |  | Core | ☐ |
|  | 5 | [Count Nodes Equal to Average of Subtree](https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/) | 🟡 Medium |  | Core | ☐ |
|  | 6 | [Number of Good Leaf Nodes Pairs](https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/) | 🟡 Medium |  | Core | ☐ |
|  | 7 | [Step-By-Step Directions From a Binary Tree Node to Another](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/) | 🟡 Medium |  | Core | ☐ |
|  | 8 | [Reverse Odd Levels of Binary Tree](https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/) | 🟡 Medium |  | Core | ☐ |
|  | 9 | [Unique Binary Search Trees](https://leetcode.com/problems/unique-binary-search-trees/) | 🟡 Medium |  | Core | ☐ |
|  | 10 | [Maximum Sum BST in Binary Tree](https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/) | 🔴 Hard |  | Core | ☐ |
|  | 11 | [Longest Path With Different Adjacent Characters](https://leetcode.com/problems/longest-path-with-different-adjacent-characters/) | 🔴 Hard |  | Core | ☐ |
|  | 12 | [Sum of Distances in Tree](https://leetcode.com/problems/sum-of-distances-in-tree/) | 🔴 Hard |  | Core | ☐ |

### Week 6 — Ordered Structures & Priority Processing

**Patterns:** Binary Search Tree operations • Kth smallest element • Kth largest element • Priority queue fundamentals • Top K frequent elements • Median from data stream  
**Site target:** 20–23 problems (Medium 16–18, Hard 4–5) | **Planned:** 74 (🟢 13 / 🟡 45 / 🔴 16)

**Week 6 schedule**

| Day | Date | Topic | What to learn |
|---|---|---|---|
| 36 | Tue, 24 Nov 2026 | BST Operations | Inorder = sorted, bounds technique, insert/delete cases |
| 37 | Wed, 25 Nov 2026 | Kth Smallest & BST Iterators | Controlled inorder, stack-based iterators, BST ↔ sorted list |
| 38 | Thu, 26 Nov 2026 | Priority Queue Fundamentals | Min/max heap, custom comparators, top-K template with size-K heap |
| 39 | Fri, 27 Nov 2026 | Top K Frequent & Scheduling | Frequency + heap, greedy scheduling with heaps |
| 40 | Sat, 28 Nov 2026 | Median from Data Stream & Hard Heaps | Two-heap balance, lazy deletion, heap + greedy |
| 41 | Sun, 29 Nov 2026 | BST + Heap Mixed Set | Choose between sorted structures and heaps; heap simulations |
| 42 | Mon, 30 Nov 2026 | **Review & Weekly Test** | Re-solve 5 ⭐ from this week (no notes) • clear Redo Bucket • 90-min test: 3 mixed problems on Binary Search Tree operations, Kth smallest element, Kth largest element • rewrite templates • update tracker |

**Week 6 problems**

| Day | # | Problem | Difficulty | ⭐ | Type | Status |
|---|---|---|---|---|---|---|
| 36 | 1 | [Search in a Binary Search Tree](https://leetcode.com/problems/search-in-a-binary-search-tree/) | 🟢 Easy |  | Warm-up | ☐ |
|  | 2 | [Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/) | 🟢 Easy |  | Warm-up | ☐ |
|  | 3 | [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 4 | [Insert into a Binary Search Tree](https://leetcode.com/problems/insert-into-a-binary-search-tree/) | 🟡 Medium |  | Core | ☐ |
|  | 5 | [Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 6 | [Recover Binary Search Tree](https://leetcode.com/problems/recover-binary-search-tree/) | 🟡 Medium |  | Core | ☐ |
|  | 7 | [Trim a Binary Search Tree](https://leetcode.com/problems/trim-a-binary-search-tree/) | 🟡 Medium |  | Core | ☐ |
|  | 8 | [Minimum Absolute Difference in BST](https://leetcode.com/problems/minimum-absolute-difference-in-bst/) | 🟢 Easy |  | Core | ☐ |
|  | 9 | [Range Sum of BST](https://leetcode.com/problems/range-sum-of-bst/) | 🟢 Easy |  | Core | ☐ |
|  | 10 | [Increasing Order Search Tree](https://leetcode.com/problems/increasing-order-search-tree/) | 🟢 Easy |  | Core | ☐ |
|  | 11 | [Find Mode in Binary Search Tree](https://leetcode.com/problems/find-mode-in-binary-search-tree/) | 🟢 Easy |  | Core | ☐ |
|  | 12 | [Minimum Distance Between BST Nodes](https://leetcode.com/problems/minimum-distance-between-bst-nodes/) | 🟢 Easy |  | Core | ☐ |
|  | 13 | [Construct Binary Search Tree from Preorder Traversal](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/) | 🟡 Medium |  | Core | ☐ |
| 37 | 1 | [Two Sum IV - Input is a BST](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/) | 🟢 Easy |  | Warm-up | ☐ |
|  | 2 | [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 3 | [Binary Search Tree Iterator](https://leetcode.com/problems/binary-search-tree-iterator/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 4 | [Convert BST to Greater Tree](https://leetcode.com/problems/convert-bst-to-greater-tree/) | 🟡 Medium |  | Core | ☐ |
|  | 5 | [Balance a Binary Search Tree](https://leetcode.com/problems/balance-a-binary-search-tree/) | 🟡 Medium |  | Core | ☐ |
|  | 6 | [Serialize and Deserialize BST](https://leetcode.com/problems/serialize-and-deserialize-bst/) | 🟡 Medium |  | Core | ☐ |
|  | 7 | [All Elements in Two Binary Search Trees](https://leetcode.com/problems/all-elements-in-two-binary-search-trees/) | 🟡 Medium |  | Core | ☐ |
|  | 8 | [My Calendar I](https://leetcode.com/problems/my-calendar-i/) | 🟡 Medium |  | Core | ☐ |
|  | 9 | [My Calendar II](https://leetcode.com/problems/my-calendar-ii/) | 🟡 Medium |  | Core | ☐ |
|  | 10 | [Contains Duplicate III](https://leetcode.com/problems/contains-duplicate-iii/) | 🔴 Hard |  | Core | ☐ |
|  | 11 | [Stock Price Fluctuation](https://leetcode.com/problems/stock-price-fluctuation/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/) | 🔴 Hard |  | Core | ☐ |
| 38 | 1 | [Last Stone Weight](https://leetcode.com/problems/last-stone-weight/) | 🟢 Easy |  | Warm-up | ☐ |
|  | 2 | [Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/) | 🟢 Easy |  | Warm-up | ☐ |
|  | 3 | [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 4 | [K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 5 | [Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/) | 🟡 Medium |  | Core | ☐ |
|  | 6 | [Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/) 🔒 | 🟡 Medium | ⭐ | Core | ☐ |
|  | 7 | [Relative Ranks](https://leetcode.com/problems/relative-ranks/) | 🟢 Easy |  | Core | ☐ |
|  | 8 | [The K Weakest Rows in a Matrix](https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/) | 🟢 Easy |  | Core | ☐ |
|  | 9 | [Maximum Product of Two Elements in an Array](https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/) | 🟢 Easy |  | Core | ☐ |
|  | 10 | [Seat Reservation Manager](https://leetcode.com/problems/seat-reservation-manager/) | 🟡 Medium |  | Core | ☐ |
|  | 11 | [Single-Threaded CPU](https://leetcode.com/problems/single-threaded-cpu/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Remove Stones to Minimize the Total](https://leetcode.com/problems/remove-stones-to-minimize-the-total/) | 🟡 Medium |  | Core | ☐ |
|  | 13 | [Total Cost to Hire K Workers](https://leetcode.com/problems/total-cost-to-hire-k-workers/) | 🟡 Medium |  | Core | ☐ |
| 39 | 1 | [Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 2 | [Reorganize String](https://leetcode.com/problems/reorganize-string/) | 🟡 Medium |  | Core | ☐ |
|  | 3 | [Task Scheduler](https://leetcode.com/problems/task-scheduler/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 4 | [Car Pooling](https://leetcode.com/problems/car-pooling/) | 🟡 Medium |  | Core | ☐ |
|  | 5 | [Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/) | 🟡 Medium |  | Core | ☐ |
|  | 6 | [Distant Barcodes](https://leetcode.com/problems/distant-barcodes/) | 🟡 Medium |  | Core | ☐ |
|  | 7 | [Maximum Frequency Stack](https://leetcode.com/problems/maximum-frequency-stack/) | 🔴 Hard | ⭐ | Core | ☐ |
|  | 8 | [Longest Happy String](https://leetcode.com/problems/longest-happy-string/) | 🟡 Medium |  | Core | ☐ |
|  | 9 | [Meeting Rooms III](https://leetcode.com/problems/meeting-rooms-iii/) | 🔴 Hard |  | Core | ☐ |
|  | 10 | [Maximal Score After Applying K Operations](https://leetcode.com/problems/maximal-score-after-applying-k-operations/) | 🟡 Medium |  | Core | ☐ |
|  | 11 | [Ugly Number II](https://leetcode.com/problems/ugly-number-ii/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Kth Smallest Prime Fraction](https://leetcode.com/problems/kth-smallest-prime-fraction/) | 🟡 Medium |  | Core | ☐ |
| 40 | 1 | [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) | 🔴 Hard | ⭐ | Core | ☐ |
|  | 2 | [Sliding Window Median](https://leetcode.com/problems/sliding-window-median/) | 🔴 Hard |  | Core | ☐ |
|  | 3 | [IPO](https://leetcode.com/problems/ipo/) | 🔴 Hard |  | Core | ☐ |
|  | 4 | [Smallest Range Covering Elements from K Lists](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/) | 🔴 Hard |  | Core | ☐ |
|  | 5 | [Furthest Building You Can Reach](https://leetcode.com/problems/furthest-building-you-can-reach/) | 🟡 Medium |  | Core | ☐ |
|  | 6 | [Minimum Cost to Hire K Workers](https://leetcode.com/problems/minimum-cost-to-hire-k-workers/) | 🔴 Hard |  | Core | ☐ |
|  | 7 | [Maximum Performance of a Team](https://leetcode.com/problems/maximum-performance-of-a-team/) | 🔴 Hard |  | Core | ☐ |
|  | 8 | [Course Schedule III](https://leetcode.com/problems/course-schedule-iii/) | 🔴 Hard |  | Core | ☐ |
|  | 9 | [Minimum Number of Refueling Stops](https://leetcode.com/problems/minimum-number-of-refueling-stops/) | 🔴 Hard |  | Core | ☐ |
|  | 10 | [Maximum Number of Events That Can Be Attended](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/) | 🟡 Medium |  | Core | ☐ |
|  | 11 | [Maximum Average Pass Ratio](https://leetcode.com/problems/maximum-average-pass-ratio/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Minimize Deviation in Array](https://leetcode.com/problems/minimize-deviation-in-array/) | 🔴 Hard |  | Core | ☐ |
| 41 | 1 | [Hand of Straights](https://leetcode.com/problems/hand-of-straights/) | 🟡 Medium |  | Core | ☐ |
|  | 2 | [Divide Array in Sets of K Consecutive Numbers](https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/) | 🟡 Medium |  | Core | ☐ |
|  | 3 | [Minimum Operations to Halve Array Sum](https://leetcode.com/problems/minimum-operations-to-halve-array-sum/) | 🟡 Medium |  | Core | ☐ |
|  | 4 | [Find the Kth Largest Integer in the Array](https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/) | 🟡 Medium |  | Core | ☐ |
|  | 5 | [Construct Target Array With Multiple Sums](https://leetcode.com/problems/construct-target-array-with-multiple-sums/) | 🔴 Hard |  | Core | ☐ |
|  | 6 | [Closest Nodes Queries in a Binary Search Tree](https://leetcode.com/problems/closest-nodes-queries-in-a-binary-search-tree/) | 🟡 Medium |  | Core | ☐ |
|  | 7 | [Split BST](https://leetcode.com/problems/split-bst/) | 🟡 Medium |  | Core | ☐ |
|  | 8 | [Minimum Interval to Include Each Query](https://leetcode.com/problems/minimum-interval-to-include-each-query/) | 🔴 Hard |  | Core | ☐ |
|  | 9 | [Number of Orders in the Backlog](https://leetcode.com/problems/number-of-orders-in-the-backlog/) | 🟡 Medium |  | Core | ☐ |
|  | 10 | [Maximum Number of Eaten Apples](https://leetcode.com/problems/maximum-number-of-eaten-apples/) | 🟡 Medium |  | Core | ☐ |
|  | 11 | [Online Election](https://leetcode.com/problems/online-election/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Exam Room](https://leetcode.com/problems/exam-room/) | 🔴 Hard |  | Core | ☐ |

### Week 7 — Graph Traversal

**Patterns:** Breadth first search • Depth first search • Cycle detection in graph • Topological ordering • Disjoint set data structure • Shortest path basics  
**Site target:** 26–29 problems (Medium 20–22, Hard 6–7) | **Planned:** 74 (🟢 4 / 🟡 52 / 🔴 18)

**Week 7 schedule**

| Day | Date | Topic | What to learn |
|---|---|---|---|
| 43 | Tue, 01 Dec 2026 | BFS & DFS on Grids/Graphs | Adjacency list vs grid, visited handling, connected components, multi-source BFS |
| 44 | Wed, 02 Dec 2026 | Cycle Detection & Bipartite | DFS colouring, undirected vs directed cycle detection, 2-colouring |
| 45 | Thu, 03 Dec 2026 | Topological Ordering | Kahn's algorithm (BFS) and DFS postorder, dependency resolution |
| 46 | Fri, 04 Dec 2026 | Disjoint Set Union | Path compression, union by rank/size, DSU on grids |
| 47 | Sat, 05 Dec 2026 | Shortest Path Basics | BFS for unweighted, Dijkstra with priority queue, relaxation intuition |
| 48 | Sun, 06 Dec 2026 | Graph Mixed Set | State-space BFS, jump games, grid graphs, cycles in functional graphs |
| 49 | Mon, 07 Dec 2026 | **Review & Weekly Test** | Re-solve 5 ⭐ from this week (no notes) • clear Redo Bucket • 90-min test: 3 mixed problems on Breadth first search, Depth first search, Cycle detection in graph • rewrite templates • update tracker |

**Week 7 problems**

| Day | # | Problem | Difficulty | ⭐ | Type | Status |
|---|---|---|---|---|---|---|
| 43 | 1 | [Flood Fill](https://leetcode.com/problems/flood-fill/) | 🟢 Easy |  | Warm-up | ☐ |
|  | 2 | [Find if Path Exists in Graph](https://leetcode.com/problems/find-if-path-exists-in-graph/) | 🟢 Easy |  | Warm-up | ☐ |
|  | 3 | [Number of Islands](https://leetcode.com/problems/number-of-islands/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 4 | [Clone Graph](https://leetcode.com/problems/clone-graph/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 5 | [Max Area of Island](https://leetcode.com/problems/max-area-of-island/) | 🟡 Medium |  | Core | ☐ |
|  | 6 | [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 7 | [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 8 | [Island Perimeter](https://leetcode.com/problems/island-perimeter/) | 🟢 Easy |  | Core | ☐ |
|  | 9 | [Keys and Rooms](https://leetcode.com/problems/keys-and-rooms/) | 🟡 Medium |  | Core | ☐ |
|  | 10 | [Number of Closed Islands](https://leetcode.com/problems/number-of-closed-islands/) | 🟡 Medium |  | Core | ☐ |
|  | 11 | [Number of Enclaves](https://leetcode.com/problems/number-of-enclaves/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Open the Lock](https://leetcode.com/problems/open-the-lock/) | 🟡 Medium |  | Core | ☐ |
|  | 13 | [Minimum Genetic Mutation](https://leetcode.com/problems/minimum-genetic-mutation/) | 🟡 Medium |  | Core | ☐ |
|  | 14 | [01 Matrix](https://leetcode.com/problems/01-matrix/) | 🟡 Medium |  | Core | ☐ |
| 44 | 1 | [Number of Provinces](https://leetcode.com/problems/number-of-provinces/) | 🟡 Medium |  | Core | ☐ |
|  | 2 | [Is Graph Bipartite?](https://leetcode.com/problems/is-graph-bipartite/) | 🟡 Medium |  | Core | ☐ |
|  | 3 | [Course Schedule](https://leetcode.com/problems/course-schedule/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 4 | [Find Eventual Safe States](https://leetcode.com/problems/find-eventual-safe-states/) | 🟡 Medium |  | Core | ☐ |
|  | 5 | [Surrounded Regions](https://leetcode.com/problems/surrounded-regions/) | 🟡 Medium |  | Core | ☐ |
|  | 6 | [Possible Bipartition](https://leetcode.com/problems/possible-bipartition/) | 🟡 Medium |  | Core | ☐ |
|  | 7 | [Evaluate Division](https://leetcode.com/problems/evaluate-division/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 8 | [Find the Town Judge](https://leetcode.com/problems/find-the-town-judge/) | 🟢 Easy |  | Core | ☐ |
|  | 9 | [All Paths From Source to Target](https://leetcode.com/problems/all-paths-from-source-to-target/) | 🟡 Medium |  | Core | ☐ |
|  | 10 | [Reorder Routes to Make All Paths Lead to the City Zero](https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/) | 🟡 Medium |  | Core | ☐ |
|  | 11 | [Number of Operations to Make Network Connected](https://leetcode.com/problems/number-of-operations-to-make-network-connected/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Minimum Number of Vertices to Reach All Nodes](https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/) | 🟡 Medium |  | Core | ☐ |
| 45 | 1 | [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 2 | [Alien Dictionary](https://leetcode.com/problems/alien-dictionary/) 🔒 | 🔴 Hard | ⭐ | Core | ☐ |
|  | 3 | [Minimum Height Trees](https://leetcode.com/problems/minimum-height-trees/) | 🟡 Medium |  | Core | ☐ |
|  | 4 | [Find All Possible Recipes from Given Supplies](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/) | 🟡 Medium |  | Core | ☐ |
|  | 5 | [Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/) | 🔴 Hard |  | Core | ☐ |
|  | 6 | [Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/) | 🔴 Hard |  | Core | ☐ |
|  | 7 | [Course Schedule IV](https://leetcode.com/problems/course-schedule-iv/) | 🟡 Medium |  | Core | ☐ |
|  | 8 | [Parallel Courses III](https://leetcode.com/problems/parallel-courses-iii/) | 🔴 Hard |  | Core | ☐ |
|  | 9 | [Build a Matrix With Conditions](https://leetcode.com/problems/build-a-matrix-with-conditions/) | 🔴 Hard |  | Core | ☐ |
|  | 10 | [Largest Color Value in a Directed Graph](https://leetcode.com/problems/largest-color-value-in-a-directed-graph/) | 🔴 Hard |  | Core | ☐ |
|  | 11 | [Time Needed to Inform All Employees](https://leetcode.com/problems/time-needed-to-inform-all-employees/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Loud and Rich](https://leetcode.com/problems/loud-and-rich/) | 🟡 Medium |  | Core | ☐ |
| 46 | 1 | [Redundant Connection](https://leetcode.com/problems/redundant-connection/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 2 | [Accounts Merge](https://leetcode.com/problems/accounts-merge/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 3 | [Most Stones Removed with Same Row or Column](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/) | 🟡 Medium |  | Core | ☐ |
|  | 4 | [Satisfiability of Equality Equations](https://leetcode.com/problems/satisfiability-of-equality-equations/) | 🟡 Medium |  | Core | ☐ |
|  | 5 | [Number of Islands II](https://leetcode.com/problems/number-of-islands-ii/) 🔒 | 🔴 Hard |  | Core | ☐ |
|  | 6 | [Swim in Rising Water](https://leetcode.com/problems/swim-in-rising-water/) | 🔴 Hard |  | Core | ☐ |
|  | 7 | [Smallest String With Swaps](https://leetcode.com/problems/smallest-string-with-swaps/) | 🟡 Medium |  | Core | ☐ |
|  | 8 | [Regions Cut By Slashes](https://leetcode.com/problems/regions-cut-by-slashes/) | 🟡 Medium |  | Core | ☐ |
|  | 9 | [Lexicographically Smallest Equivalent String](https://leetcode.com/problems/lexicographically-smallest-equivalent-string/) | 🟡 Medium |  | Core | ☐ |
|  | 10 | [Making A Large Island](https://leetcode.com/problems/making-a-large-island/) | 🔴 Hard |  | Core | ☐ |
|  | 11 | [Number of Good Paths](https://leetcode.com/problems/number-of-good-paths/) | 🔴 Hard |  | Core | ☐ |
|  | 12 | [Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/) | 🟡 Medium |  | Core | ☐ |
| 47 | 1 | [Network Delay Time](https://leetcode.com/problems/network-delay-time/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 2 | [Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 3 | [Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/) | 🟡 Medium |  | Core | ☐ |
|  | 4 | [Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/) | 🟡 Medium |  | Core | ☐ |
|  | 5 | [Word Ladder](https://leetcode.com/problems/word-ladder/) | 🔴 Hard | ⭐ | Core | ☐ |
|  | 6 | [Word Ladder II](https://leetcode.com/problems/word-ladder-ii/) | 🔴 Hard |  | Core | ☐ |
|  | 7 | [Path with Maximum Probability](https://leetcode.com/problems/path-with-maximum-probability/) | 🟡 Medium |  | Core | ☐ |
|  | 8 | [Number of Ways to Arrive at Destination](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/) | 🟡 Medium |  | Core | ☐ |
|  | 9 | [Find the City With the Smallest Number of Neighbors at a Threshold Distance](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/) | 🟡 Medium |  | Core | ☐ |
|  | 10 | [Shortest Path with Alternating Colors](https://leetcode.com/problems/shortest-path-with-alternating-colors/) | 🟡 Medium |  | Core | ☐ |
|  | 11 | [Shortest Path in a Grid with Obstacles Elimination](https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/) | 🔴 Hard |  | Core | ☐ |
|  | 12 | [Minimum Cost to Make at Least One Valid Path in a Grid](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/) | 🔴 Hard |  | Core | ☐ |
| 48 | 1 | [Jump Game III](https://leetcode.com/problems/jump-game-iii/) | 🟡 Medium |  | Core | ☐ |
|  | 2 | [Snakes and Ladders](https://leetcode.com/problems/snakes-and-ladders/) | 🟡 Medium |  | Core | ☐ |
|  | 3 | [Bus Routes](https://leetcode.com/problems/bus-routes/) | 🔴 Hard |  | Core | ☐ |
|  | 4 | [As Far from Land as Possible](https://leetcode.com/problems/as-far-from-land-as-possible/) | 🟡 Medium |  | Core | ☐ |
|  | 5 | [Shortest Path Visiting All Nodes](https://leetcode.com/problems/shortest-path-visiting-all-nodes/) | 🔴 Hard |  | Core | ☐ |
|  | 6 | [Detonate the Maximum Bombs](https://leetcode.com/problems/detonate-the-maximum-bombs/) | 🟡 Medium |  | Core | ☐ |
|  | 7 | [Find the Safest Path in a Grid](https://leetcode.com/problems/find-the-safest-path-in-a-grid/) | 🟡 Medium |  | Core | ☐ |
|  | 8 | [Path with Maximum Gold](https://leetcode.com/problems/path-with-maximum-gold/) | 🟡 Medium |  | Core | ☐ |
|  | 9 | [Maximum Number of Moves in a Grid](https://leetcode.com/problems/maximum-number-of-moves-in-a-grid/) | 🟡 Medium |  | Core | ☐ |
|  | 10 | [Minimum Jumps to Reach Home](https://leetcode.com/problems/minimum-jumps-to-reach-home/) | 🟡 Medium |  | Core | ☐ |
|  | 11 | [Longest Cycle in a Graph](https://leetcode.com/problems/longest-cycle-in-a-graph/) | 🔴 Hard |  | Core | ☐ |
|  | 12 | [Jump Game IV](https://leetcode.com/problems/jump-game-iv/) | 🔴 Hard |  | Core | ☐ |

### Week 8 — Greedy & Interval Problems

**Patterns:** First / last occurrence • Lower & upper bound • Simple search on answers • Subsets & permutations  
**Site target:** 14–18 problems (Medium 14–15, Hard 2–3) | **Planned:** 74 (🟢 10 / 🟡 55 / 🔴 9)

**Week 8 schedule**

| Day | Date | Topic | What to learn |
|---|---|---|---|
| 50 | Tue, 08 Dec 2026 | Greedy I | Local choice → global optimum; prove with exchange argument |
| 51 | Wed, 09 Dec 2026 | Greedy II | Sort + choose, two-pass greedy, partition by last occurrence |
| 52 | Thu, 10 Dec 2026 | Interval Problems | Sort by start/end, merge, sweep, overlap counting |
| 53 | Fri, 11 Dec 2026 | Lower/Upper Bound & Search on Answer | Monotonic predicate, feasibility check, minimize-the-maximum |
| 54 | Sat, 12 Dec 2026 | Subsets & Permutations Variants | Duplicate handling (sort + skip), used-array vs swap, kth permutation maths |
| 55 | Sun, 13 Dec 2026 | Greedy, Intervals & Search Mixed Set | Prove greedy via exchange argument; mixed greedy patterns under a timer |
| 56 | Mon, 14 Dec 2026 | **Review & Weekly Test** | Re-solve 5 ⭐ from this week (no notes) • clear Redo Bucket • 90-min test: 3 mixed problems on First / last occurrence, Lower & upper bound, Simple search on answers • rewrite templates • update tracker |

**Week 8 problems**

| Day | # | Problem | Difficulty | ⭐ | Type | Status |
|---|---|---|---|---|---|---|
| 50 | 1 | [Assign Cookies](https://leetcode.com/problems/assign-cookies/) | 🟢 Easy |  | Warm-up | ☐ |
|  | 2 | [Jump Game](https://leetcode.com/problems/jump-game/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 3 | [Jump Game II](https://leetcode.com/problems/jump-game-ii/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 4 | [Gas Station](https://leetcode.com/problems/gas-station/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 5 | [Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 6 | [Two City Scheduling](https://leetcode.com/problems/two-city-scheduling/) | 🟡 Medium |  | Core | ☐ |
|  | 7 | [Queue Reconstruction by Height](https://leetcode.com/problems/queue-reconstruction-by-height/) | 🟡 Medium |  | Core | ☐ |
|  | 8 | [Wiggle Subsequence](https://leetcode.com/problems/wiggle-subsequence/) | 🟡 Medium |  | Core | ☐ |
|  | 9 | [Maximum Units on a Truck](https://leetcode.com/problems/maximum-units-on-a-truck/) | 🟢 Easy |  | Core | ☐ |
|  | 10 | [Array Partition](https://leetcode.com/problems/array-partition/) | 🟢 Easy |  | Core | ☐ |
|  | 11 | [Can Place Flowers](https://leetcode.com/problems/can-place-flowers/) | 🟢 Easy |  | Core | ☐ |
|  | 12 | [Valid Parenthesis String](https://leetcode.com/problems/valid-parenthesis-string/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 13 | [Bag of Tokens](https://leetcode.com/problems/bag-of-tokens/) | 🟡 Medium |  | Core | ☐ |
| 51 | 1 | [Lemonade Change](https://leetcode.com/problems/lemonade-change/) | 🟢 Easy |  | Warm-up | ☐ |
|  | 2 | [Partition Labels](https://leetcode.com/problems/partition-labels/) | 🟡 Medium |  | Core | ☐ |
|  | 3 | [Candy](https://leetcode.com/problems/candy/) | 🔴 Hard |  | Core | ☐ |
|  | 4 | [Minimum Cost to Move Chips to The Same Position](https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/) | 🟢 Easy |  | Core | ☐ |
|  | 5 | [Advantage Shuffle](https://leetcode.com/problems/advantage-shuffle/) | 🟡 Medium |  | Core | ☐ |
|  | 6 | [Minimum Domino Rotations For Equal Row](https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/) | 🟡 Medium |  | Core | ☐ |
|  | 7 | [Maximum Ice Cream Bars](https://leetcode.com/problems/maximum-ice-cream-bars/) | 🟡 Medium |  | Core | ☐ |
|  | 8 | [Largest Perimeter Triangle](https://leetcode.com/problems/largest-perimeter-triangle/) | 🟢 Easy |  | Core | ☐ |
|  | 9 | [Split a String in Balanced Strings](https://leetcode.com/problems/split-a-string-in-balanced-strings/) | 🟢 Easy |  | Core | ☐ |
|  | 10 | [Monotone Increasing Digits](https://leetcode.com/problems/monotone-increasing-digits/) | 🟡 Medium |  | Core | ☐ |
|  | 11 | [Non-decreasing Array](https://leetcode.com/problems/non-decreasing-array/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Maximum Swap](https://leetcode.com/problems/maximum-swap/) | 🟡 Medium |  | Core | ☐ |
| 52 | 1 | [Merge Intervals](https://leetcode.com/problems/merge-intervals/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 2 | [Insert Interval](https://leetcode.com/problems/insert-interval/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 3 | [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 4 | [Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) | 🟡 Medium |  | Core | ☐ |
|  | 5 | [Interval List Intersections](https://leetcode.com/problems/interval-list-intersections/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 6 | [Remove Covered Intervals](https://leetcode.com/problems/remove-covered-intervals/) | 🟡 Medium |  | Core | ☐ |
|  | 7 | [Summary Ranges](https://leetcode.com/problems/summary-ranges/) | 🟢 Easy |  | Core | ☐ |
|  | 8 | [Count Days Without Meetings](https://leetcode.com/problems/count-days-without-meetings/) | 🟡 Medium |  | Core | ☐ |
|  | 9 | [Divide Intervals Into Minimum Number of Groups](https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/) | 🟡 Medium |  | Core | ☐ |
|  | 10 | [Teemo Attacking](https://leetcode.com/problems/teemo-attacking/) | 🟢 Easy |  | Core | ☐ |
|  | 11 | [Video Stitching](https://leetcode.com/problems/video-stitching/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Set Intersection Size At Least Two](https://leetcode.com/problems/set-intersection-size-at-least-two/) | 🔴 Hard |  | Core | ☐ |
|  | 13 | [Range Module](https://leetcode.com/problems/range-module/) | 🔴 Hard |  | Core | ☐ |
| 53 | 1 | [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 2 | [Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/) | 🟡 Medium |  | Core | ☐ |
|  | 3 | [Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/) | 🔴 Hard |  | Core | ☐ |
|  | 4 | [Find the Smallest Divisor Given a Threshold](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/) | 🟡 Medium |  | Core | ☐ |
|  | 5 | [Minimum Days to Make m Bouquets](https://leetcode.com/problems/minimum-days-to-make-m-bouquets/) | 🟡 Medium |  | Core | ☐ |
|  | 6 | [Magnetic Force Between Two Balls](https://leetcode.com/problems/magnetic-force-between-two-balls/) | 🟡 Medium |  | Core | ☐ |
|  | 7 | [Maximum Candies Allocated to K Children](https://leetcode.com/problems/maximum-candies-allocated-to-k-children/) | 🟡 Medium |  | Core | ☐ |
|  | 8 | [Minimized Maximum of Products Distributed to Any Store](https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/) | 🟡 Medium |  | Core | ☐ |
|  | 9 | [Minimum Speed to Arrive on Time](https://leetcode.com/problems/minimum-speed-to-arrive-on-time/) | 🟡 Medium |  | Core | ☐ |
|  | 10 | [Maximum Value at a Given Index in a Bounded Array](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/) | 🟡 Medium |  | Core | ☐ |
|  | 11 | [Minimum Time to Repair Cars](https://leetcode.com/problems/minimum-time-to-repair-cars/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Maximum Running Time of N Computers](https://leetcode.com/problems/maximum-running-time-of-n-computers/) | 🔴 Hard |  | Core | ☐ |
| 54 | 1 | [Permutations](https://leetcode.com/problems/permutations/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 2 | [Permutations II](https://leetcode.com/problems/permutations-ii/) | 🟡 Medium |  | Core | ☐ |
|  | 3 | [Subsets II](https://leetcode.com/problems/subsets-ii/) | 🟡 Medium |  | Core | ☐ |
|  | 4 | [Combination Sum II](https://leetcode.com/problems/combination-sum-ii/) | 🟡 Medium |  | Core | ☐ |
|  | 5 | [Permutation Sequence](https://leetcode.com/problems/permutation-sequence/) | 🔴 Hard |  | Core | ☐ |
|  | 6 | [Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses/) | 🟡 Medium |  | Core | ☐ |
|  | 7 | [Unique Paths III](https://leetcode.com/problems/unique-paths-iii/) | 🔴 Hard |  | Core | ☐ |
|  | 8 | [Fair Distribution of Cookies](https://leetcode.com/problems/fair-distribution-of-cookies/) | 🟡 Medium |  | Core | ☐ |
|  | 9 | [Find Unique Binary String](https://leetcode.com/problems/find-unique-binary-string/) | 🟡 Medium |  | Core | ☐ |
|  | 10 | [Split a String Into the Max Number of Unique Substrings](https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/) | 🟡 Medium |  | Core | ☐ |
|  | 11 | [Construct the Lexicographically Largest Valid Sequence](https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Count Sorted Vowel Strings](https://leetcode.com/problems/count-sorted-vowel-strings/) | 🟡 Medium |  | Core | ☐ |
| 55 | 1 | [Maximum Length of Pair Chain](https://leetcode.com/problems/maximum-length-of-pair-chain/) | 🟡 Medium |  | Core | ☐ |
|  | 2 | [Eliminate Maximum Number of Monsters](https://leetcode.com/problems/eliminate-maximum-number-of-monsters/) | 🟡 Medium |  | Core | ☐ |
|  | 3 | [Minimum Number of Taps to Open to Water a Garden](https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/) | 🔴 Hard |  | Core | ☐ |
|  | 4 | [Broken Calculator](https://leetcode.com/problems/broken-calculator/) | 🟡 Medium |  | Core | ☐ |
|  | 5 | [Largest Number After Digit Swaps by Parity](https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/) | 🟡 Medium |  | Core | ☐ |
|  | 6 | [Minimum Number of Swaps to Make the String Balanced](https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/) | 🟡 Medium |  | Core | ☐ |
|  | 7 | [Maximum Total Importance of Roads](https://leetcode.com/problems/maximum-total-importance-of-roads/) | 🟡 Medium |  | Core | ☐ |
|  | 8 | [Minimum Deletions to Make Character Frequencies Unique](https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/) | 🟡 Medium |  | Core | ☐ |
|  | 9 | [Maximum Score From Removing Substrings](https://leetcode.com/problems/maximum-score-from-removing-substrings/) | 🟡 Medium |  | Core | ☐ |
|  | 10 | [Maximum Number of Coins You Can Get](https://leetcode.com/problems/maximum-number-of-coins-you-can-get/) | 🟡 Medium |  | Core | ☐ |
|  | 11 | [Maximize Greatness of an Array](https://leetcode.com/problems/maximize-greatness-of-an-array/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Minimum Cost to Make Array Equal](https://leetcode.com/problems/minimum-cost-to-make-array-equal/) | 🔴 Hard |  | Core | ☐ |

## Month 3 — Advanced Problem Solving

### Week 9 — Dynamic Programming (1D)

**Patterns:** Maximum subarray sum • Longest increasing subsequence • Coin change problems • Knapsack style problems  
**Site target:** 22–25 problems (Medium 18–20, Hard 4–5) | **Planned:** 74 (🟢 7 / 🟡 55 / 🔴 12)

**Week 9 schedule**

| Day | Date | Topic | What to learn |
|---|---|---|---|
| 57 | Tue, 15 Dec 2026 | 1D DP Basics | State definition → recurrence → memo → tabulation → space optimisation |
| 58 | Wed, 16 Dec 2026 | Longest Increasing Subsequence | O(n²) DP and O(n log n) patience sorting; LIS variants |
| 59 | Thu, 17 Dec 2026 | Coin Change & Counting | Min ways vs count ways, order matters vs doesn't |
| 60 | Fri, 18 Dec 2026 | Knapsack Style | 0/1 knapsack, subset-sum reductions, 2D → 1D optimisation |
| 61 | Sat, 19 Dec 2026 | Word Break & Misc 1D | Prefix DP with dictionary, state machines for stocks, circular arrays |
| 62 | Sun, 20 Dec 2026 | 1D DP Mixed Set | State design under pressure: subarray, sequence, game and counting DP |
| 63 | Mon, 21 Dec 2026 | **Review & Weekly Test** | Re-solve 5 ⭐ from this week (no notes) • clear Redo Bucket • 90-min test: 3 mixed problems on Maximum subarray sum, Longest increasing subsequence, Coin change problems • rewrite templates • update tracker |

**Week 9 problems**

| Day | # | Problem | Difficulty | ⭐ | Type | Status |
|---|---|---|---|---|---|---|
| 57 | 1 | [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) | 🟢 Easy | ⭐ | Warm-up | ☐ |
|  | 2 | [Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/) | 🟢 Easy |  | Warm-up | ☐ |
|  | 3 | [N-th Tribonacci Number](https://leetcode.com/problems/n-th-tribonacci-number/) | 🟢 Easy |  | Warm-up | ☐ |
|  | 4 | [House Robber](https://leetcode.com/problems/house-robber/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 5 | [House Robber II](https://leetcode.com/problems/house-robber-ii/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 6 | [Decode Ways](https://leetcode.com/problems/decode-ways/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 7 | [Delete and Earn](https://leetcode.com/problems/delete-and-earn/) | 🟡 Medium |  | Core | ☐ |
|  | 8 | [Fibonacci Number](https://leetcode.com/problems/fibonacci-number/) | 🟢 Easy |  | Core | ☐ |
|  | 9 | [Counting Bits](https://leetcode.com/problems/counting-bits/) | 🟢 Easy |  | Core | ☐ |
|  | 10 | [Pascal's Triangle II](https://leetcode.com/problems/pascals-triangle-ii/) | 🟢 Easy |  | Core | ☐ |
|  | 11 | [Integer Break](https://leetcode.com/problems/integer-break/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Count Ways To Build Good Strings](https://leetcode.com/problems/count-ways-to-build-good-strings/) | 🟡 Medium |  | Core | ☐ |
|  | 13 | [Maximum Alternating Subsequence Sum](https://leetcode.com/problems/maximum-alternating-subsequence-sum/) | 🟡 Medium |  | Core | ☐ |
|  | 14 | [Knight Dialer](https://leetcode.com/problems/knight-dialer/) | 🟡 Medium |  | Core | ☐ |
| 58 | 1 | [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 2 | [Number of Longest Increasing Subsequence](https://leetcode.com/problems/number-of-longest-increasing-subsequence/) | 🟡 Medium |  | Core | ☐ |
|  | 3 | [Largest Divisible Subset](https://leetcode.com/problems/largest-divisible-subset/) | 🟡 Medium |  | Core | ☐ |
|  | 4 | [Russian Doll Envelopes](https://leetcode.com/problems/russian-doll-envelopes/) | 🔴 Hard |  | Core | ☐ |
|  | 5 | [Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/) | 🔴 Hard |  | Core | ☐ |
|  | 6 | [Longest String Chain](https://leetcode.com/problems/longest-string-chain/) | 🟡 Medium |  | Core | ☐ |
|  | 7 | [Increasing Triplet Subsequence](https://leetcode.com/problems/increasing-triplet-subsequence/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 8 | [Longest Arithmetic Subsequence](https://leetcode.com/problems/longest-arithmetic-subsequence/) | 🟡 Medium |  | Core | ☐ |
|  | 9 | [Longest Arithmetic Subsequence of Given Difference](https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/) | 🟡 Medium |  | Core | ☐ |
|  | 10 | [Maximum Length of Repeated Subarray](https://leetcode.com/problems/maximum-length-of-repeated-subarray/) | 🟡 Medium |  | Core | ☐ |
|  | 11 | [Minimum Number of Removals to Make Mountain Array](https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/) | 🔴 Hard |  | Core | ☐ |
|  | 12 | [Best Team With No Conflicts](https://leetcode.com/problems/best-team-with-no-conflicts/) | 🟡 Medium |  | Core | ☐ |
| 59 | 1 | [Coin Change](https://leetcode.com/problems/coin-change/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 2 | [Coin Change II](https://leetcode.com/problems/coin-change-ii/) | 🟡 Medium |  | Core | ☐ |
|  | 3 | [Combination Sum IV](https://leetcode.com/problems/combination-sum-iv/) | 🟡 Medium |  | Core | ☐ |
|  | 4 | [Perfect Squares](https://leetcode.com/problems/perfect-squares/) | 🟡 Medium |  | Core | ☐ |
|  | 5 | [Minimum Cost For Tickets](https://leetcode.com/problems/minimum-cost-for-tickets/) | 🟡 Medium |  | Core | ☐ |
|  | 6 | [Number of Dice Rolls With Target Sum](https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/) | 🟡 Medium |  | Core | ☐ |
|  | 7 | [Divisor Game](https://leetcode.com/problems/divisor-game/) | 🟢 Easy |  | Core | ☐ |
|  | 8 | [Predict the Winner](https://leetcode.com/problems/predict-the-winner/) | 🟡 Medium |  | Core | ☐ |
|  | 9 | [Stone Game](https://leetcode.com/problems/stone-game/) | 🟡 Medium |  | Core | ☐ |
|  | 10 | [Stone Game II](https://leetcode.com/problems/stone-game-ii/) | 🟡 Medium |  | Core | ☐ |
|  | 11 | [Guess Number Higher or Lower II](https://leetcode.com/problems/guess-number-higher-or-lower-ii/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Count Number of Ways to Place Houses](https://leetcode.com/problems/count-number-of-ways-to-place-houses/) | 🟡 Medium |  | Core | ☐ |
| 60 | 1 | [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 2 | [Target Sum](https://leetcode.com/problems/target-sum/) | 🟡 Medium |  | Core | ☐ |
|  | 3 | [Last Stone Weight II](https://leetcode.com/problems/last-stone-weight-ii/) | 🟡 Medium |  | Core | ☐ |
|  | 4 | [Ones and Zeroes](https://leetcode.com/problems/ones-and-zeroes/) | 🟡 Medium |  | Core | ☐ |
|  | 5 | [Best Time to Buy and Sell Stock IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/) | 🔴 Hard |  | Core | ☐ |
|  | 6 | [Profitable Schemes](https://leetcode.com/problems/profitable-schemes/) | 🔴 Hard |  | Core | ☐ |
|  | 7 | [Maximum Value of K Coins From Piles](https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/) | 🔴 Hard |  | Core | ☐ |
|  | 8 | [Minimum Cost Tree From Leaf Values](https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/) | 🟡 Medium |  | Core | ☐ |
|  | 9 | [Maximum Length of Subarray With Positive Product](https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/) | 🟡 Medium |  | Core | ☐ |
|  | 10 | [Ways to Express an Integer as Sum of Powers](https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/) | 🟡 Medium |  | Core | ☐ |
|  | 11 | [Number of Ways to Select Buildings](https://leetcode.com/problems/number-of-ways-to-select-buildings/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Maximum Number of Points with Cost](https://leetcode.com/problems/maximum-number-of-points-with-cost/) | 🟡 Medium |  | Core | ☐ |
| 61 | 1 | [Word Break](https://leetcode.com/problems/word-break/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 2 | [Maximum Sum Circular Subarray](https://leetcode.com/problems/maximum-sum-circular-subarray/) | 🟡 Medium |  | Core | ☐ |
|  | 3 | [Best Time to Buy and Sell Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/) | 🟡 Medium |  | Core | ☐ |
|  | 4 | [Domino and Tromino Tiling](https://leetcode.com/problems/domino-and-tromino-tiling/) | 🟡 Medium |  | Core | ☐ |
|  | 5 | [Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses/) | 🔴 Hard |  | Core | ☐ |
|  | 6 | [Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/) | 🔴 Hard |  | Core | ☐ |
|  | 7 | [Best Time to Buy and Sell Stock with Transaction Fee](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/) | 🟡 Medium |  | Core | ☐ |
|  | 8 | [Solving Questions With Brainpower](https://leetcode.com/problems/solving-questions-with-brainpower/) | 🟡 Medium |  | Core | ☐ |
|  | 9 | [Maximum Earnings From Taxi](https://leetcode.com/problems/maximum-earnings-from-taxi/) | 🟡 Medium |  | Core | ☐ |
|  | 10 | [Out of Boundary Paths](https://leetcode.com/problems/out-of-boundary-paths/) | 🟡 Medium |  | Core | ☐ |
|  | 11 | [Knight Probability in Chessboard](https://leetcode.com/problems/knight-probability-in-chessboard/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Jump Game VI](https://leetcode.com/problems/jump-game-vi/) | 🟡 Medium |  | Core | ☐ |
| 62 | 1 | [Arithmetic Slices](https://leetcode.com/problems/arithmetic-slices/) | 🟡 Medium |  | Core | ☐ |
|  | 2 | [Greatest Sum Divisible by Three](https://leetcode.com/problems/greatest-sum-divisible-by-three/) | 🟡 Medium |  | Core | ☐ |
|  | 3 | [Best Sightseeing Pair](https://leetcode.com/problems/best-sightseeing-pair/) | 🟡 Medium |  | Core | ☐ |
|  | 4 | [Maximum Subarray Sum with One Deletion](https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/) | 🟡 Medium |  | Core | ☐ |
|  | 5 | [House Robber IV](https://leetcode.com/problems/house-robber-iv/) | 🟡 Medium |  | Core | ☐ |
|  | 6 | [Soup Servings](https://leetcode.com/problems/soup-servings/) | 🟡 Medium |  | Core | ☐ |
|  | 7 | [Maximize the Confusion of an Exam](https://leetcode.com/problems/maximize-the-confusion-of-an-exam/) | 🟡 Medium |  | Core | ☐ |
|  | 8 | [Maximum Number of Consecutive Values You Can Make](https://leetcode.com/problems/maximum-number-of-consecutive-values-you-can-make/) | 🟡 Medium |  | Core | ☐ |
|  | 9 | [Decode Ways II](https://leetcode.com/problems/decode-ways-ii/) | 🔴 Hard |  | Core | ☐ |
|  | 10 | [Maximum Sum of 3 Non-Overlapping Subarrays](https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/) | 🔴 Hard |  | Core | ☐ |
|  | 11 | [Arithmetic Slices II - Subsequence](https://leetcode.com/problems/arithmetic-slices-ii-subsequence/) | 🔴 Hard |  | Core | ☐ |
|  | 12 | [Minimum Swaps To Make Sequences Increasing](https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/) | 🔴 Hard |  | Core | ☐ |

### Week 10 — Advanced DP & Backtracking (2D)

**Patterns:** Dynamic programming on strings • Dynamic programming on grids • Edit distance • Word segmentation • N-Queens problem  
**Site target:** 26–30 problems (Medium 18–20, Hard 8–10) | **Planned:** 72 (🟢 1 / 🟡 40 / 🔴 31)

**Week 10 schedule**

| Day | Date | Topic | What to learn |
|---|---|---|---|
| 64 | Tue, 22 Dec 2026 | DP on Strings | LCS family, subsequence vs substring, reconstructing the answer |
| 65 | Wed, 23 Dec 2026 | Edit Distance & Pattern Matching | Insert/delete/replace transitions, 2D matching DP |
| 66 | Thu, 24 Dec 2026 | DP on Grids | Path counting, min-cost paths, square/rectangle DP, reverse DP |
| 67 | Fri, 25 Dec 2026 | Word Segmentation & Partition DP | Partition DP, interval DP, memoised backtracking |
| 68 | Sat, 26 Dec 2026 | N-Queens & Hard Backtracking | Constraint sets, bitmask pruning, symmetry |
| 69 | Sun, 27 Dec 2026 | Hard DP Mixed Set (Stretch Day) | Interval DP, game DP, state compression. Cap each problem at 40 min; Hard ones are stretch |
| 70 | Mon, 28 Dec 2026 | **Review & Weekly Test** | Re-solve 5 ⭐ from this week (no notes) • clear Redo Bucket • 90-min test: 3 mixed problems on Dynamic programming on strings, Dynamic programming on grids, Edit distance • rewrite templates • update tracker |

**Week 10 problems**

| Day | # | Problem | Difficulty | ⭐ | Type | Status |
|---|---|---|---|---|---|---|
| 64 | 1 | [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 2 | [Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/) | 🟡 Medium |  | Core | ☐ |
|  | 3 | [Minimum ASCII Delete Sum for Two Strings](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/) | 🟡 Medium |  | Core | ☐ |
|  | 4 | [Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/) | 🔴 Hard |  | Core | ☐ |
|  | 5 | [Shortest Common Supersequence](https://leetcode.com/problems/shortest-common-supersequence/) | 🔴 Hard |  | Core | ☐ |
|  | 6 | [Uncrossed Lines](https://leetcode.com/problems/uncrossed-lines/) | 🟡 Medium |  | Core | ☐ |
|  | 7 | [Minimum Insertion Steps to Make a String Palindrome](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/) | 🔴 Hard |  | Core | ☐ |
|  | 8 | [Number of Matching Subsequences](https://leetcode.com/problems/number-of-matching-subsequences/) | 🟡 Medium |  | Core | ☐ |
|  | 9 | [Append Characters to String to Make Subsequence](https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/) | 🟡 Medium |  | Core | ☐ |
|  | 10 | [Make String a Subsequence Using Cyclic Increments](https://leetcode.com/problems/make-string-a-subsequence-using-cyclic-increments/) | 🟡 Medium |  | Core | ☐ |
|  | 11 | [Maximum Number of Occurrences of a Substring](https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Number of Subsequences That Satisfy the Given Sum Condition](https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/) | 🟡 Medium |  | Core | ☐ |
| 65 | 1 | [Edit Distance](https://leetcode.com/problems/edit-distance/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 2 | [Interleaving String](https://leetcode.com/problems/interleaving-string/) | 🟡 Medium |  | Core | ☐ |
|  | 3 | [Delete Operation for Two Strings](https://leetcode.com/problems/delete-operation-for-two-strings/) | 🟡 Medium |  | Core | ☐ |
|  | 4 | [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/) | 🔴 Hard | ⭐ | Core | ☐ |
|  | 5 | [Wildcard Matching](https://leetcode.com/problems/wildcard-matching/) | 🔴 Hard |  | Core | ☐ |
|  | 6 | [Shortest Way to Form String](https://leetcode.com/problems/shortest-way-to-form-string/) | 🟡 Medium |  | Core | ☐ |
|  | 7 | [Count Substrings That Differ by One Character](https://leetcode.com/problems/count-substrings-that-differ-by-one-character/) | 🟡 Medium |  | Core | ☐ |
|  | 8 | [Longest Substring Of All Vowels in Order](https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/) | 🟡 Medium |  | Core | ☐ |
|  | 9 | [Number of Ways to Split a String](https://leetcode.com/problems/number-of-ways-to-split-a-string/) | 🟡 Medium |  | Core | ☐ |
|  | 10 | [Maximum Score After Splitting a String](https://leetcode.com/problems/maximum-score-after-splitting-a-string/) | 🟢 Easy |  | Core | ☐ |
|  | 11 | [Scramble String](https://leetcode.com/problems/scramble-string/) | 🔴 Hard |  | Core | ☐ |
|  | 12 | [Strange Printer](https://leetcode.com/problems/strange-printer/) | 🔴 Hard |  | Core | ☐ |
| 66 | 1 | [Unique Paths](https://leetcode.com/problems/unique-paths/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 2 | [Unique Paths II](https://leetcode.com/problems/unique-paths-ii/) | 🟡 Medium |  | Core | ☐ |
|  | 3 | [Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/) | 🟡 Medium |  | Core | ☐ |
|  | 4 | [Triangle](https://leetcode.com/problems/triangle/) | 🟡 Medium |  | Core | ☐ |
|  | 5 | [Minimum Falling Path Sum](https://leetcode.com/problems/minimum-falling-path-sum/) | 🟡 Medium |  | Core | ☐ |
|  | 6 | [Maximal Square](https://leetcode.com/problems/maximal-square/) | 🟡 Medium |  | Core | ☐ |
|  | 7 | [Dungeon Game](https://leetcode.com/problems/dungeon-game/) | 🔴 Hard |  | Core | ☐ |
|  | 8 | [Count Square Submatrices with All Ones](https://leetcode.com/problems/count-square-submatrices-with-all-ones/) | 🟡 Medium |  | Core | ☐ |
|  | 9 | [Matrix Block Sum](https://leetcode.com/problems/matrix-block-sum/) | 🟡 Medium |  | Core | ☐ |
|  | 10 | [Largest Plus Sign](https://leetcode.com/problems/largest-plus-sign/) | 🟡 Medium |  | Core | ☐ |
|  | 11 | [Maximum Non Negative Product in a Matrix](https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Cherry Pickup](https://leetcode.com/problems/cherry-pickup/) | 🔴 Hard |  | Core | ☐ |
| 67 | 1 | [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/) | 🟡 Medium | ⭐ | Core | ☐ |
|  | 2 | [Partition Array for Maximum Sum](https://leetcode.com/problems/partition-array-for-maximum-sum/) | 🟡 Medium |  | Core | ☐ |
|  | 3 | [Word Break II](https://leetcode.com/problems/word-break-ii/) | 🔴 Hard | ⭐ | Core | ☐ |
|  | 4 | [Palindrome Partitioning II](https://leetcode.com/problems/palindrome-partitioning-ii/) | 🔴 Hard |  | Core | ☐ |
|  | 5 | [Burst Balloons](https://leetcode.com/problems/burst-balloons/) | 🔴 Hard |  | Core | ☐ |
|  | 6 | [Extra Characters in a String](https://leetcode.com/problems/extra-characters-in-a-string/) | 🟡 Medium |  | Core | ☐ |
|  | 7 | [Filling Bookcase Shelves](https://leetcode.com/problems/filling-bookcase-shelves/) | 🟡 Medium |  | Core | ☐ |
|  | 8 | [Split Array into Consecutive Subsequences](https://leetcode.com/problems/split-array-into-consecutive-subsequences/) | 🟡 Medium |  | Core | ☐ |
|  | 9 | [Longest Ideal Subsequence](https://leetcode.com/problems/longest-ideal-subsequence/) | 🟡 Medium |  | Core | ☐ |
|  | 10 | [Minimum Difficulty of a Job Schedule](https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/) | 🔴 Hard |  | Core | ☐ |
|  | 11 | [Minimum Cost to Cut a Stick](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/) | 🔴 Hard |  | Core | ☐ |
|  | 12 | [Count Vowels Permutation](https://leetcode.com/problems/count-vowels-permutation/) | 🔴 Hard |  | Core | ☐ |
| 68 | 1 | [N-Queens](https://leetcode.com/problems/n-queens/) | 🔴 Hard | ⭐ | Core | ☐ |
|  | 2 | [Sudoku Solver](https://leetcode.com/problems/sudoku-solver/) | 🔴 Hard |  | Core | ☐ |
|  | 3 | [Partition to K Equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/) | 🟡 Medium |  | Core | ☐ |
|  | 4 | [Matchsticks to Square](https://leetcode.com/problems/matchsticks-to-square/) | 🟡 Medium |  | Core | ☐ |
|  | 5 | [Rat in a Maze (GFG)](https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1) | 🟡 Medium |  | Core | ☐ |
|  | 6 | [N-Queens II](https://leetcode.com/problems/n-queens-ii/) | 🔴 Hard |  | Core | ☐ |
|  | 7 | [Word Search II](https://leetcode.com/problems/word-search-ii/) | 🔴 Hard | ⭐ | Core | ☐ |
|  | 8 | [Expression Add Operators](https://leetcode.com/problems/expression-add-operators/) | 🔴 Hard |  | Core | ☐ |
|  | 9 | [Remove Invalid Parentheses](https://leetcode.com/problems/remove-invalid-parentheses/) | 🔴 Hard |  | Core | ☐ |
|  | 10 | [The Number of Beautiful Subsets](https://leetcode.com/problems/the-number-of-beautiful-subsets/) | 🟡 Medium |  | Core | ☐ |
|  | 11 | [Closest Dessert Cost](https://leetcode.com/problems/closest-dessert-cost/) | 🟡 Medium |  | Core | ☐ |
|  | 12 | [Minimum Number of Work Sessions to Finish the Tasks](https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/) | 🟡 Medium |  | Core | ☐ |
| 69 | 1 | [Egg Drop With 2 Eggs and N Floors](https://leetcode.com/problems/egg-drop-with-2-eggs-and-n-floors/) | 🟡 Medium |  | Core | ☐ |
|  | 2 | [Count Number of Teams](https://leetcode.com/problems/count-number-of-teams/) | 🟡 Medium |  | Core | ☐ |
|  | 3 | [Frog Jump](https://leetcode.com/problems/frog-jump/) | 🔴 Hard |  | Core | ☐ |
|  | 4 | [Number of Music Playlists](https://leetcode.com/problems/number-of-music-playlists/) | 🔴 Hard |  | Core | ☐ |
|  | 5 | [Student Attendance Record II](https://leetcode.com/problems/student-attendance-record-ii/) | 🔴 Hard |  | Core | ☐ |
|  | 6 | [Allocate Mailboxes](https://leetcode.com/problems/allocate-mailboxes/) | 🔴 Hard |  | Core | ☐ |
|  | 7 | [Minimum Cost to Merge Stones](https://leetcode.com/problems/minimum-cost-to-merge-stones/) | 🔴 Hard |  | Core | ☐ |
|  | 8 | [Remove Boxes](https://leetcode.com/problems/remove-boxes/) | 🔴 Hard |  | Core | ☐ |
|  | 9 | [Palindrome Partitioning III](https://leetcode.com/problems/palindrome-partitioning-iii/) | 🔴 Hard |  | Core | ☐ |
|  | 10 | [Stone Game III](https://leetcode.com/problems/stone-game-iii/) | 🔴 Hard |  | Core | ☐ |
|  | 11 | [Number of Ways to Wear Different Hats](https://leetcode.com/problems/number-of-ways-to-wear-different-hats/) | 🔴 Hard |  | Core | ☐ |
|  | 12 | [Super Egg Drop](https://leetcode.com/problems/super-egg-drop/) | 🔴 Hard |  | Core | ☐ |

## Week 11 Onward — Practice & Mock Interviews

**Targets:** 8–10 full mock interviews • 45-minute timed solving • verbal explanation practice  
**Revision plan:** re-solve the 30 most important problems (Appendix A) • revise all patterns once

| Day | Date | Theme | Mocks (45 min each) | Re-solve | Verbal practice | Status |
|---|---|---|---|---|---|---|
| 71 | Tue, 29 Dec 2026 | Arrays, Strings, Hashing | 1 | Appendix A #1–9 | Pattern → brute force → optimize → complexity → edge cases | ☐ |
| 72 | Wed, 30 Dec 2026 | Linked List, Stack, Binary Search | 1 | Appendix A #10–17 | Pattern → brute force → optimize → complexity → edge cases | ☐ |
| 73 | Thu, 31 Dec 2026 | Trees, BST, Heaps, Graphs | 2 | Appendix A #18–24 | Pattern → brute force → optimize → complexity → edge cases | ☐ |
| 74 | Fri, 01 Jan 2027 | Greedy, Intervals, DP, Backtracking | 1 | Appendix A #25–30 | Pattern → brute force → optimize → complexity → edge cases | ☐ |
| 75 | Sat, 02 Jan 2027 | Mixed company-style rounds | 2 | 2 weakest patterns from Scorecard | Pattern → brute force → optimize → complexity → edge cases | ☐ |
| 76 | Sun, 03 Jan 2027 | Verbal explanation day | 1 | Re-teach 5 ⭐ problems out loud | Pattern → brute force → optimize → complexity → edge cases | ☐ |
| 77 | Mon, 04 Jan 2027 | Final mock + retrospective | 1 | Compare vs Mock 1; plan next 30 days | Pattern → brute force → optimize → complexity → edge cases | ☐ |

**After Day 77:** 1 mock every 3 days, 2 new Medium/Hard daily, monthly full-pattern sweep.

---

## Appendix A — The 30 Must-Re-Solve Problems

| # | Problem | Difficulty | Day(s) | Status |
|---|---|---|---|---|
| 1 | [Two Sum](https://leetcode.com/problems/two-sum/) | 🟢 Easy | 71 | ☐ |
| 2 | [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | 🟢 Easy | 71 | ☐ |
| 3 | [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) | 🟡 Medium | 71 | ☐ |
| 4 | [3Sum](https://leetcode.com/problems/3sum/) | 🟡 Medium | 71 | ☐ |
| 5 | [Container With Most Water](https://leetcode.com/problems/container-with-most-water/) | 🟡 Medium | 71 | ☐ |
| 6 | [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | 🟡 Medium | 71 | ☐ |
| 7 | [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) | 🔴 Hard | 71 | ☐ |
| 8 | [Group Anagrams](https://leetcode.com/problems/group-anagrams/) | 🟡 Medium | 71 | ☐ |
| 9 | [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) | 🟡 Medium | 71 | ☐ |
| 10 | [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) | 🟢 Easy | 72 | ☐ |
| 11 | [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/) | 🟡 Medium | 72 | ☐ |
| 12 | [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) | 🔴 Hard | 72 | ☐ |
| 13 | [LRU Cache](https://leetcode.com/problems/lru-cache/) | 🟡 Medium | 72 | ☐ |
| 14 | [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) | 🟢 Easy | 72 | ☐ |
| 15 | [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) | 🟡 Medium | 72 | ☐ |
| 16 | [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) | 🟡 Medium | 72 | ☐ |
| 17 | [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/) | 🔴 Hard | 72 | ☐ |
| 18 | [Number of Islands](https://leetcode.com/problems/number-of-islands/) | 🟡 Medium | 73 | ☐ |
| 19 | [Course Schedule](https://leetcode.com/problems/course-schedule/) | 🟡 Medium | 73 | ☐ |
| 20 | [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) | 🟡 Medium | 73 | ☐ |
| 21 | [Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) | 🟡 Medium | 73 | ☐ |
| 22 | [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) | 🟡 Medium | 73 | ☐ |
| 23 | [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/) | 🔴 Hard | 73 | ☐ |
| 24 | [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) | 🔴 Hard | 73 | ☐ |
| 25 | [Merge Intervals](https://leetcode.com/problems/merge-intervals/) | 🟡 Medium | 74 | ☐ |
| 26 | [Coin Change](https://leetcode.com/problems/coin-change/) | 🟡 Medium | 74 | ☐ |
| 27 | [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) | 🟡 Medium | 74 | ☐ |
| 28 | [Edit Distance](https://leetcode.com/problems/edit-distance/) | 🟡 Medium | 74 | ☐ |
| 29 | [Word Break](https://leetcode.com/problems/word-break/) | 🟡 Medium | 74 | ☐ |
| 30 | [N-Queens](https://leetcode.com/problems/n-queens/) | 🔴 Hard | 74 | ☐ |

---

## Appendix B — Most-Asked Interview Questions by Pattern (⭐ Index)

| Week | Pattern | ⭐ Must-do problems |
|---|---|---|
| 1 | Arrays & Two-Pointer Techniques | [Two Sum](https://leetcode.com/problems/two-sum/) • [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) • [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) • [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) • [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) • [Single Number](https://leetcode.com/problems/single-number/) • [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/) • [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) • [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/) • [Sort Colors](https://leetcode.com/problems/sort-colors/) • [Next Permutation](https://leetcode.com/problems/next-permutation/) • [First Missing Positive](https://leetcode.com/problems/first-missing-positive/) • [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/) • [Rotate Image](https://leetcode.com/problems/rotate-image/) • [Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/) • [3Sum](https://leetcode.com/problems/3sum/) • [Container With Most Water](https://leetcode.com/problems/container-with-most-water/) • [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) • [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) • [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) • [Permutation in String](https://leetcode.com/problems/permutation-in-string/) • [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/) • [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) |
| 2 | Strings + Hashing | [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) • [Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/) • [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) • [Majority Element](https://leetcode.com/problems/majority-element/) • [Valid Anagram](https://leetcode.com/problems/valid-anagram/) • [Group Anagrams](https://leetcode.com/problems/group-anagrams/) • [Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/) • [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) • [Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/) • [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) • [Encode and Decode Strings](https://leetcode.com/problems/encode-and-decode-strings/) 🔒 • [Roman to Integer](https://leetcode.com/problems/roman-to-integer/) • [Valid Sudoku](https://leetcode.com/problems/valid-sudoku/) |
| 3 | Linked List + Stack + Queue | [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) • [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) • [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/) • [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/) • [Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/) • [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) • [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) • [Reorder List](https://leetcode.com/problems/reorder-list/) • [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/) • [Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/) • [Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/) • [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) • [Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/) • [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) • [Min Stack](https://leetcode.com/problems/min-stack/) • [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) • [Minimum Remove to Make Valid Parentheses](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/) • [Basic Calculator II](https://leetcode.com/problems/basic-calculator-ii/) • [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/) • [Sum of Subarray Minimums](https://leetcode.com/problems/sum-of-subarray-minimums/) • [Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle/) • [LRU Cache](https://leetcode.com/problems/lru-cache/) • [LFU Cache](https://leetcode.com/problems/lfu-cache/) |
| 4 | Binary Search + Basic Recursion | [Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) • [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) • [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) • [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/) • [Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii/) • [Subsets](https://leetcode.com/problems/subsets/) • [Generate Parentheses](https://leetcode.com/problems/generate-parentheses/) • [Combination Sum](https://leetcode.com/problems/combination-sum/) • [Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) • [Word Search](https://leetcode.com/problems/word-search/) • [Combinations](https://leetcode.com/problems/combinations/) • [Kth Largest Element in an Array (Quickselect)](https://leetcode.com/problems/kth-largest-element-in-an-array/) • [Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/) • [Largest Number](https://leetcode.com/problems/largest-number/) • [The Skyline Problem](https://leetcode.com/problems/the-skyline-problem/) |
| 5 | Trees & Hierarchical Traversal | [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) • [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/) • [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) • [Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/) • [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/) • [Symmetric Tree](https://leetcode.com/problems/symmetric-tree/) • [Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) • [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) • [Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/) • [Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) • [Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) • [Find Duplicate Subtrees](https://leetcode.com/problems/find-duplicate-subtrees/) • [Path Sum III](https://leetcode.com/problems/path-sum-iii/) • [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/) |
| 6 | Ordered Structures & Priority Processing | [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) • [Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/) • [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) • [Binary Search Tree Iterator](https://leetcode.com/problems/binary-search-tree-iterator/) • [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) • [K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/) • [Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/) 🔒 • [Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/) • [Task Scheduler](https://leetcode.com/problems/task-scheduler/) • [Maximum Frequency Stack](https://leetcode.com/problems/maximum-frequency-stack/) • [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) |
| 7 | Graph Traversal | [Number of Islands](https://leetcode.com/problems/number-of-islands/) • [Clone Graph](https://leetcode.com/problems/clone-graph/) • [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) • [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/) • [Course Schedule](https://leetcode.com/problems/course-schedule/) • [Evaluate Division](https://leetcode.com/problems/evaluate-division/) • [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) • [Alien Dictionary](https://leetcode.com/problems/alien-dictionary/) 🔒 • [Redundant Connection](https://leetcode.com/problems/redundant-connection/) • [Accounts Merge](https://leetcode.com/problems/accounts-merge/) • [Network Delay Time](https://leetcode.com/problems/network-delay-time/) • [Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/) • [Word Ladder](https://leetcode.com/problems/word-ladder/) |
| 8 | Greedy & Interval Problems | [Jump Game](https://leetcode.com/problems/jump-game/) • [Jump Game II](https://leetcode.com/problems/jump-game-ii/) • [Gas Station](https://leetcode.com/problems/gas-station/) • [Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) • [Valid Parenthesis String](https://leetcode.com/problems/valid-parenthesis-string/) • [Merge Intervals](https://leetcode.com/problems/merge-intervals/) • [Insert Interval](https://leetcode.com/problems/insert-interval/) • [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/) • [Interval List Intersections](https://leetcode.com/problems/interval-list-intersections/) • [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) • [Permutations](https://leetcode.com/problems/permutations/) |
| 9 | Dynamic Programming (1D) | [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) • [House Robber](https://leetcode.com/problems/house-robber/) • [House Robber II](https://leetcode.com/problems/house-robber-ii/) • [Decode Ways](https://leetcode.com/problems/decode-ways/) • [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) • [Increasing Triplet Subsequence](https://leetcode.com/problems/increasing-triplet-subsequence/) • [Coin Change](https://leetcode.com/problems/coin-change/) • [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/) • [Word Break](https://leetcode.com/problems/word-break/) |
| 10 | Advanced DP & Backtracking (2D) | [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/) • [Edit Distance](https://leetcode.com/problems/edit-distance/) • [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/) • [Unique Paths](https://leetcode.com/problems/unique-paths/) • [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/) • [Word Break II](https://leetcode.com/problems/word-break-ii/) • [N-Queens](https://leetcode.com/problems/n-queens/) • [Word Search II](https://leetcode.com/problems/word-search-ii/) |

---

## Appendix C — Mock Interview Protocol (45 min)

| Minutes | Step |
|---|---|
| 0–5 | Restate problem, clarify, confirm constraints and edge cases |
| 5–15 | Brute force → optimized approach, spoken aloud, with time/space complexity |
| 15–35 | Code cleanly in C++, narrate as you write |
| 35–40 | Dry-run on a sample + 2 edge cases |
| 40–45 | Follow-ups, variations, trade-offs |

---

## Scorecard

| Week | Solved | Redo Bucket | Weakest pattern | Weekly test score |
|---|---|---|---|---|
| 1 |  |  |  |  |
| 2 |  |  |  |  |
| 3 |  |  |  |  |
| 4 |  |  |  |  |
| 5 |  |  |  |  |
| 6 |  |  |  |  |
| 7 |  |  |  |  |
| 8 |  |  |  |  |
| 9 |  |  |  |  |
| 10 |  |  |  |  |

| Mock | Date | Topic | Result | Mistake type |
|---|---|---|---|---|
| 1 |  |  |  |  |
| 2 |  |  |  |  |
| 3 |  |  |  |  |
| 4 |  |  |  |  |
| 5 |  |  |  |  |
| 6 |  |  |  |  |
| 7 |  |  |  |  |
| 8 |  |  |  |  |
| 9 |  |  |  |  |

---

*Links point to LeetCode problem pages (one GFG link for Rat in a Maze). Daily volume is 10–15 problems, well above the site's weekly targets (which are the minimum).*
