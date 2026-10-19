import { Problem } from "../types/curriculum";

export const PROBLEMS: Problem[] = [
  {
    "id": "two-sum",
    "title": "Two Sum",
    "slug": "two-sum",
    "leetcodeNumber": 1,
    "difficulty": "Easy",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "hash-map"
    ],
    "url": "https://leetcode.com/problems/two-sum/",
    "verified": true,
    "notesSnippet": "Check complement in hash map for O(N). In C++, use unordered_map. In Python, dict.",
    "cppHint": "Use std::unordered_map. reserve(nums.size()) prevents re-hashing.",
    "pythonHint": "Use dict for O(1) average lookup."
  },
  {
    "id": "add-two-numbers",
    "title": "Add Two Numbers",
    "slug": "add-two-numbers",
    "leetcodeNumber": 2,
    "difficulty": "Medium",
    "primaryPattern": "linked-lists",
    "relatedPatterns": [
      "recursion"
    ],
    "url": "https://leetcode.com/problems/add-two-numbers/",
    "verified": true,
    "notesSnippet": "Maintain carry bit across digit sums; create dummy head.",
    "cppHint": "Use dummy node: ListNode dummy(0); ListNode* tail = &dummy;",
    "pythonHint": "Handle carry after while loop terminates."
  },
  {
    "id": "longest-substring-without-repeating-characters",
    "title": "Longest Substring Without Repeating Characters",
    "slug": "longest-substring-without-repeating-characters",
    "leetcodeNumber": 3,
    "difficulty": "Medium",
    "primaryPattern": "sliding-window",
    "relatedPatterns": [
      "hash-map"
    ],
    "url": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    "verified": true,
    "notesSnippet": "Sliding window with last seen character index map.",
    "cppHint": "vector<int> last(128, -1) is faster than unordered_map for ASCII.",
    "pythonHint": "Use last_idx = {} with left = max(left, last_idx[c] + 1)."
  },
  {
    "id": "median-of-two-sorted-arrays",
    "title": "Median of Two Sorted Arrays",
    "slug": "median-of-two-sorted-arrays",
    "leetcodeNumber": 4,
    "difficulty": "Hard",
    "primaryPattern": "binary-search",
    "relatedPatterns": [
      "divide-and-conquer"
    ],
    "url": "https://leetcode.com/problems/median-of-two-sorted-arrays/",
    "verified": true,
    "notesSnippet": "Binary search on partition point of smaller array.",
    "cppHint": "Ensure partitionX + partitionY = (m + n + 1) / 2.",
    "pythonHint": "Handle INT_MIN/INT_MAX edge boundaries."
  },
  {
    "id": "longest-palindromic-substring",
    "title": "Longest Palindromic Substring",
    "slug": "longest-palindromic-substring",
    "leetcodeNumber": 5,
    "difficulty": "Medium",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "dynamic-programming-1d"
    ],
    "url": "https://leetcode.com/problems/longest-palindromic-substring/",
    "verified": true,
    "notesSnippet": "Expand around centers (odd and even) or DP table.",
    "cppHint": "Avoid substr inside loop; record start and maxLen.",
    "pythonHint": "Expand around i and i+1."
  },
  {
    "id": "container-with-most-water",
    "title": "Container With Most Water",
    "slug": "container-with-most-water",
    "leetcodeNumber": 11,
    "difficulty": "Medium",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "greedy"
    ],
    "url": "https://leetcode.com/problems/container-with-most-water/",
    "verified": true,
    "notesSnippet": "Two pointers from ends; move pointer with smaller height inwards.",
    "cppHint": "while (l < r) calculate area, advance smaller height.",
    "pythonHint": "min(h[l], h[r]) * (r - l)."
  },
  {
    "id": "3sum",
    "title": "3Sum",
    "slug": "3sum",
    "leetcodeNumber": 15,
    "difficulty": "Medium",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "sorting"
    ],
    "url": "https://leetcode.com/problems/3sum/",
    "verified": true,
    "notesSnippet": "Sort array, fix first element, two pointers for remaining two. Skip duplicates carefully.",
    "cppHint": "sort(nums.begin(), nums.end()); skip duplicates on i and l/r.",
    "pythonHint": "Avoid set conversion overhead; handle duplicates manually."
  },
  {
    "id": "3sum-closest",
    "title": "3Sum Closest",
    "slug": "3sum-closest",
    "leetcodeNumber": 16,
    "difficulty": "Medium",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "sorting"
    ],
    "url": "https://leetcode.com/problems/3sum-closest/",
    "verified": true,
    "notesSnippet": "Sort array; two pointers tracking minimum abs(sum - target).",
    "cppHint": "Watch for INT_MAX overflow when subtracting negative targets.",
    "pythonHint": "abs(curr - target) < abs(best - target)."
  },
  {
    "id": "remove-nth-node-from-end-of-list",
    "title": "Remove Nth Node From End of List",
    "slug": "remove-nth-node-from-end-of-list",
    "leetcodeNumber": 19,
    "difficulty": "Medium",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "linked-lists"
    ],
    "url": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    "verified": true,
    "notesSnippet": "Fast pointer advances N steps ahead; move both until fast reaches end.",
    "cppHint": "Dummy head simplifies removing the first node.",
    "pythonHint": "dummy.next = head; slow = fast = &dummy."
  },
  {
    "id": "valid-parentheses",
    "title": "Valid Parentheses",
    "slug": "valid-parentheses",
    "leetcodeNumber": 20,
    "difficulty": "Easy",
    "primaryPattern": "stacks",
    "relatedPatterns": [
      "hash-map"
    ],
    "url": "https://leetcode.com/problems/valid-parentheses/",
    "verified": true,
    "notesSnippet": "Use stack to match opening with closing brackets.",
    "cppHint": "Check !st.empty() before st.top() to avoid segfault.",
    "pythonHint": "stack.pop() matching matching dict mapping."
  },
  {
    "id": "merge-two-sorted-lists",
    "title": "Merge Two Sorted Lists",
    "slug": "merge-two-sorted-lists",
    "leetcodeNumber": 21,
    "difficulty": "Easy",
    "primaryPattern": "linked-lists",
    "relatedPatterns": [
      "recursion"
    ],
    "url": "https://leetcode.com/problems/merge-two-sorted-lists/",
    "verified": true,
    "notesSnippet": "Iterative with dummy head or clean recursive merge.",
    "cppHint": "ListNode dummy(0); ListNode* tail = &dummy;",
    "pythonHint": "tail.next = l1 if l1 else l2."
  },
  {
    "id": "merge-k-sorted-lists",
    "title": "Merge k Sorted Lists",
    "slug": "merge-k-sorted-lists",
    "leetcodeNumber": 23,
    "difficulty": "Hard",
    "primaryPattern": "top-k-elements-heap",
    "relatedPatterns": [
      "linked-lists",
      "divide-and-conquer"
    ],
    "url": "https://leetcode.com/problems/merge-k-sorted-lists/",
    "verified": true,
    "notesSnippet": "Min-heap storing current node heads or divide-and-conquer merge.",
    "cppHint": "Custom comparator struct for priority_queue with greater.",
    "pythonHint": "heapq with tuple (node.val, id(node), node)."
  },
  {
    "id": "remove-duplicates-from-sorted-array",
    "title": "Remove Duplicates from Sorted Array",
    "slug": "remove-duplicates-from-sorted-array",
    "leetcodeNumber": 26,
    "difficulty": "Easy",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
    "verified": true,
    "notesSnippet": "Slow pointer writes unique elements; fast pointer scans.",
    "cppHint": "nums[writeIdx++] = nums[readIdx];",
    "pythonHint": "In-place modification without extra list."
  },
  {
    "id": "remove-element",
    "title": "Remove Element",
    "slug": "remove-element",
    "leetcodeNumber": 27,
    "difficulty": "Easy",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/remove-element/",
    "verified": true,
    "notesSnippet": "Two pointers in-place element filtering.",
    "cppHint": "k tracks write index.",
    "pythonHint": "nums[k] = nums[i]."
  },
  {
    "id": "next-permutation",
    "title": "Next Permutation",
    "slug": "next-permutation",
    "leetcodeNumber": 31,
    "difficulty": "Medium",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/next-permutation/",
    "verified": true,
    "notesSnippet": "Find pivot from right where nums[i] < nums[i+1], swap with successor, reverse suffix.",
    "cppHint": "std::next_permutation exists, but implement manual algorithm for interviews.",
    "pythonHint": "Reverse suffix in-place."
  },
  {
    "id": "search-in-rotated-sorted-array",
    "title": "Search in Rotated Sorted Array",
    "slug": "search-in-rotated-sorted-array",
    "leetcodeNumber": 33,
    "difficulty": "Medium",
    "primaryPattern": "binary-search",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    "verified": true,
    "notesSnippet": "One half is always sorted; determine which half target lies in.",
    "cppHint": "Check nums[low] <= nums[mid] to identify left sorted half.",
    "pythonHint": "Binary search invariant preservation."
  },
  {
    "id": "find-first-and-last-position-of-element-in-sorted-array",
    "title": "Find First and Last Position of Element in Sorted Array",
    "slug": "find-first-and-last-position-of-element-in-sorted-array",
    "leetcodeNumber": 34,
    "difficulty": "Medium",
    "primaryPattern": "binary-search",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
    "verified": true,
    "notesSnippet": "Two binary searches: lower bound and upper bound.",
    "cppHint": "std::lower_bound and std::upper_bound logic.",
    "pythonHint": "bisect_left and bisect_right."
  },
  {
    "id": "search-insert-position",
    "title": "Search Insert Position",
    "slug": "search-insert-position",
    "leetcodeNumber": 35,
    "difficulty": "Easy",
    "primaryPattern": "binary-search",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/search-insert-position/",
    "verified": true,
    "notesSnippet": "Standard binary search; low is insertion index when loop ends.",
    "cppHint": "while (l <= r) with mid = l + (r-l)/2.",
    "pythonHint": "bisect_left."
  },
  {
    "id": "combination-sum",
    "title": "Combination Sum",
    "slug": "combination-sum",
    "leetcodeNumber": 39,
    "difficulty": "Medium",
    "primaryPattern": "backtracking",
    "relatedPatterns": [
      "recursion"
    ],
    "url": "https://leetcode.com/problems/combination-sum/",
    "verified": true,
    "notesSnippet": "Backtracking with reuse of elements; sort to enable pruning.",
    "cppHint": "if (remain < 0) return; for loop starts from current idx.",
    "pythonHint": "curr.append() ... backtrack ... curr.pop()."
  },
  {
    "id": "combination-sum-ii",
    "title": "Combination Sum II",
    "slug": "combination-sum-ii",
    "leetcodeNumber": 40,
    "difficulty": "Medium",
    "primaryPattern": "backtracking",
    "relatedPatterns": [
      "recursion"
    ],
    "url": "https://leetcode.com/problems/combination-sum-ii/",
    "verified": true,
    "notesSnippet": "Backtracking with single use; skip duplicates at same tree depth.",
    "cppHint": "if (i > start && candidates[i] == candidates[i-1]) continue;",
    "pythonHint": "Sort candidates first to prune."
  },
  {
    "id": "first-missing-positive",
    "title": "First Missing Positive",
    "slug": "first-missing-positive",
    "leetcodeNumber": 41,
    "difficulty": "Hard",
    "primaryPattern": "arrays",
    "relatedPatterns": [
      "hash-map"
    ],
    "url": "https://leetcode.com/problems/first-missing-positive/",
    "verified": true,
    "notesSnippet": "Index-as-hash-key: place each number X in nums[X-1].",
    "cppHint": "while (nums[i] > 0 && nums[i] <= n && nums[nums[i]-1] != nums[i]) swap.",
    "pythonHint": "O(N) time and O(1) space."
  },
  {
    "id": "trapping-rain-water",
    "title": "Trapping Rain Water",
    "slug": "trapping-rain-water",
    "leetcodeNumber": 42,
    "difficulty": "Hard",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "monotonic-stack"
    ],
    "url": "https://leetcode.com/problems/trapping-rain-water/",
    "verified": true,
    "notesSnippet": "Two pointers tracking leftMax and rightMax, or monotonic decreasing stack.",
    "cppHint": "Water trapped at i is min(leftMax, rightMax) - height[i].",
    "pythonHint": "Two pointers achieves O(1) auxiliary space."
  },
  {
    "id": "permutations",
    "title": "Permutations",
    "slug": "permutations",
    "leetcodeNumber": 46,
    "difficulty": "Medium",
    "primaryPattern": "backtracking",
    "relatedPatterns": [
      "recursion"
    ],
    "url": "https://leetcode.com/problems/permutations/",
    "verified": true,
    "notesSnippet": "Backtrack using boolean used array or swapping in-place.",
    "cppHint": "swap(nums[start], nums[i]) and swap back.",
    "pythonHint": "Recursion with remaining elements."
  },
  {
    "id": "rotate-image",
    "title": "Rotate Image",
    "slug": "rotate-image",
    "leetcodeNumber": 48,
    "difficulty": "Medium",
    "primaryPattern": "matrix",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/rotate-image/",
    "verified": true,
    "notesSnippet": "Transpose matrix (swap matrix[i][j] with matrix[j][i]), then reverse each row.",
    "cppHint": "In-place transpose + reverse.",
    "pythonHint": "matrix.reverse() then zip in python."
  },
  {
    "id": "group-anagrams",
    "title": "Group Anagrams",
    "slug": "group-anagrams",
    "leetcodeNumber": 49,
    "difficulty": "Medium",
    "primaryPattern": "hash-map",
    "relatedPatterns": [
      "sorting"
    ],
    "url": "https://leetcode.com/problems/group-anagrams/",
    "verified": true,
    "notesSnippet": "Hash map with sorted string key or 26-element character frequency tuple.",
    "cppHint": "unordered_map<string, vector<string>>",
    "pythonHint": "defaultdict(list) keyed by tuple(counts)."
  },
  {
    "id": "maximum-subarray",
    "title": "Maximum Subarray",
    "slug": "maximum-subarray",
    "leetcodeNumber": 53,
    "difficulty": "Medium",
    "primaryPattern": "prefix-sum",
    "relatedPatterns": [
      "dynamic-programming-1d"
    ],
    "url": "https://leetcode.com/problems/maximum-subarray/",
    "verified": true,
    "notesSnippet": "Kadane's algorithm: currSum = max(nums[i], currSum + nums[i]).",
    "cppHint": "Reset running sum if currSum < 0.",
    "pythonHint": "max_so_far = max(curr, max_so_far)."
  },
  {
    "id": "spiral-matrix",
    "title": "Spiral Matrix",
    "slug": "spiral-matrix",
    "leetcodeNumber": 54,
    "difficulty": "Medium",
    "primaryPattern": "matrix",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/spiral-matrix/",
    "verified": true,
    "notesSnippet": "Maintain 4 boundary pointers (top, bottom, left, right); peel outer layers.",
    "cppHint": "Watch out for single row or column edge cases.",
    "pythonHint": "top <= bottom and left <= right conditions."
  },
  {
    "id": "jump-game",
    "title": "Jump Game",
    "slug": "jump-game",
    "leetcodeNumber": 55,
    "difficulty": "Medium",
    "primaryPattern": "greedy",
    "relatedPatterns": [
      "dynamic-programming-1d"
    ],
    "url": "https://leetcode.com/problems/jump-game/",
    "verified": true,
    "notesSnippet": "Greedy maximum reachable index tracking; return false if i > maxReach.",
    "cppHint": "maxReach = max(maxReach, i + nums[i]);",
    "pythonHint": "Linear scan with early exit."
  },
  {
    "id": "merge-intervals",
    "title": "Merge Intervals",
    "slug": "merge-intervals",
    "leetcodeNumber": 56,
    "difficulty": "Medium",
    "primaryPattern": "greedy-intervals",
    "relatedPatterns": [
      "sorting"
    ],
    "url": "https://leetcode.com/problems/merge-intervals/",
    "verified": true,
    "notesSnippet": "Sort by start time, merge overlapping intervals with max(end).",
    "cppHint": "sort(intervals.begin(), intervals.end());",
    "pythonHint": "Check if curr.start <= last.end."
  },
  {
    "id": "insert-interval",
    "title": "Insert Interval",
    "slug": "insert-interval",
    "leetcodeNumber": 57,
    "difficulty": "Medium",
    "primaryPattern": "greedy-intervals",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/insert-interval/",
    "verified": true,
    "notesSnippet": "Add all before newInterval, merge overlaps, add all after.",
    "cppHint": "Three clean phases in a single pass.",
    "pythonHint": "O(N) single loop."
  },
  {
    "id": "unique-paths",
    "title": "Unique Paths",
    "slug": "unique-paths",
    "leetcodeNumber": 62,
    "difficulty": "Medium",
    "primaryPattern": "dynamic-programming-2d",
    "relatedPatterns": [
      "combinatorics"
    ],
    "url": "https://leetcode.com/problems/unique-paths/",
    "verified": true,
    "notesSnippet": "Grid DP: dp[r][c] = dp[r-1][c] + dp[r][c-1]. Space optimize to 1D.",
    "cppHint": "vector<int> dp(n, 1); dp[c] += dp[c-1];",
    "pythonHint": "math.comb(m+n-2, m-1)."
  },
  {
    "id": "minimum-path-sum",
    "title": "Minimum Path Sum",
    "slug": "minimum-path-sum",
    "leetcodeNumber": 64,
    "difficulty": "Medium",
    "primaryPattern": "dynamic-programming-2d",
    "relatedPatterns": [
      "matrix"
    ],
    "url": "https://leetcode.com/problems/minimum-path-sum/",
    "verified": true,
    "notesSnippet": "dp[r][c] = grid[r][c] + min(dp[r-1][c], dp[r][c-1]). In-place grid update possible.",
    "cppHint": "Can modify grid in-place to achieve O(1) space.",
    "pythonHint": "1D array optimization."
  },
  {
    "id": "climbing-stairs",
    "title": "Climbing Stairs",
    "slug": "climbing-stairs",
    "leetcodeNumber": 70,
    "difficulty": "Easy",
    "primaryPattern": "dynamic-programming-1d",
    "relatedPatterns": [
      "recursion"
    ],
    "url": "https://leetcode.com/problems/climbing-stairs/",
    "verified": true,
    "notesSnippet": "Fibonacci sequence: dp[i] = dp[i-1] + dp[i-2].",
    "cppHint": "Two rolling variables prev1 and prev2 for O(1) space.",
    "pythonHint": "a, b = b, a + b."
  },
  {
    "id": "edit-distance",
    "title": "Edit Distance",
    "slug": "edit-distance",
    "leetcodeNumber": 72,
    "difficulty": "Medium",
    "primaryPattern": "dynamic-programming-2d",
    "relatedPatterns": [
      "strings"
    ],
    "url": "https://leetcode.com/problems/edit-distance/",
    "verified": true,
    "notesSnippet": "Levenshtein distance: insert, delete, replace transitions.",
    "cppHint": "dp[i][j] = 1 + min({dp[i-1][j], dp[i][j-1], dp[i-1][j-1]});",
    "pythonHint": "1D array optimization using prev_diag variable."
  },
  {
    "id": "set-matrix-zeroes",
    "title": "Set Matrix Zeroes",
    "slug": "set-matrix-zeroes",
    "leetcodeNumber": 73,
    "difficulty": "Medium",
    "primaryPattern": "matrix",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/set-matrix-zeroes/",
    "verified": true,
    "notesSnippet": "Use first row and first column as markers for O(1) space.",
    "cppHint": "Record whether first row and col originally had zeroes.",
    "pythonHint": "Avoid modifying markers before scanning inner cells."
  },
  {
    "id": "search-a-2d-matrix",
    "title": "Search a 2D Matrix",
    "slug": "search-a-2d-matrix",
    "leetcodeNumber": 74,
    "difficulty": "Medium",
    "primaryPattern": "binary-search",
    "relatedPatterns": [
      "matrix"
    ],
    "url": "https://leetcode.com/problems/search-a-2d-matrix/",
    "verified": true,
    "notesSnippet": "Treat M x N matrix as flat 1D sorted array of length M*N.",
    "cppHint": "row = mid / n; col = mid % n;",
    "pythonHint": "Binary search over range 0 to m*n - 1."
  },
  {
    "id": "sort-colors",
    "title": "Sort Colors",
    "slug": "sort-colors",
    "leetcodeNumber": 75,
    "difficulty": "Medium",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/sort-colors/",
    "verified": true,
    "notesSnippet": "Dutch National Flag algorithm with low, mid, high pointers.",
    "cppHint": "swap(nums[mid], nums[low]) vs swap(nums[mid], nums[high]).",
    "pythonHint": "mid pointer advances on 0 and 1, stays on 2."
  },
  {
    "id": "minimum-window-substring",
    "title": "Minimum Window Substring",
    "slug": "minimum-window-substring",
    "leetcodeNumber": 76,
    "difficulty": "Hard",
    "primaryPattern": "sliding-window",
    "relatedPatterns": [
      "hash-map"
    ],
    "url": "https://leetcode.com/problems/minimum-window-substring/",
    "verified": true,
    "notesSnippet": "Sliding window with character frequency count and formed matches tracker.",
    "cppHint": "vector<int> target(128, 0), window(128, 0);",
    "pythonHint": "Expand right until valid, shrink left to minimize."
  },
  {
    "id": "subsets",
    "title": "Subsets",
    "slug": "subsets",
    "leetcodeNumber": 78,
    "difficulty": "Medium",
    "primaryPattern": "backtracking",
    "relatedPatterns": [
      "bit-manipulation"
    ],
    "url": "https://leetcode.com/problems/subsets/",
    "verified": true,
    "notesSnippet": "Generate power set via backtracking or bitmask (0 to 2^N - 1).",
    "cppHint": "Include element, recurse, pop element, backtrack.",
    "pythonHint": "res.append(list(curr)) at every step."
  },
  {
    "id": "word-search",
    "title": "Word Search",
    "slug": "word-search",
    "leetcodeNumber": 79,
    "difficulty": "Medium",
    "primaryPattern": "backtracking",
    "relatedPatterns": [
      "matrix"
    ],
    "url": "https://leetcode.com/problems/word-search/",
    "verified": true,
    "notesSnippet": "Grid DFS with in-place character masking to mark visited.",
    "cppHint": "char temp = board[r][c]; board[r][c] = '#'; backtrack; board[r][c] = temp;",
    "pythonHint": "Prune if word character frequency exceeds board frequency."
  },
  {
    "id": "largest-rectangle-in-histogram",
    "title": "Largest Rectangle in Histogram",
    "slug": "largest-rectangle-in-histogram",
    "leetcodeNumber": 84,
    "difficulty": "Hard",
    "primaryPattern": "monotonic-stack",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
    "verified": true,
    "notesSnippet": "Monotonic increasing stack; pop when smaller height seen, width = i - st.top() - 1.",
    "cppHint": "Append dummy 0 height at end to flush stack.",
    "pythonHint": "Stack stores indices."
  },
  {
    "id": "subsets-ii",
    "title": "Subsets II",
    "slug": "subsets-ii",
    "leetcodeNumber": 90,
    "difficulty": "Medium",
    "primaryPattern": "backtracking",
    "relatedPatterns": [
      "sorting"
    ],
    "url": "https://leetcode.com/problems/subsets-ii/",
    "verified": true,
    "notesSnippet": "Sort first; skip duplicates if nums[i] == nums[i-1] and i > start.",
    "cppHint": "sort(nums.begin(), nums.end());",
    "pythonHint": "Tree-level duplicate pruning."
  },
  {
    "id": "decode-ways",
    "title": "Decode Ways",
    "slug": "decode-ways",
    "leetcodeNumber": 91,
    "difficulty": "Medium",
    "primaryPattern": "dynamic-programming-1d",
    "relatedPatterns": [
      "strings"
    ],
    "url": "https://leetcode.com/problems/decode-ways/",
    "verified": true,
    "notesSnippet": "1D DP: check 1-digit valid ('1'-'9') and 2-digit valid ('10'-'26').",
    "cppHint": "Handle leading zeroes: '0' has 0 ways.",
    "pythonHint": "dp1 and dp2 rolling state."
  },
  {
    "id": "binary-tree-inorder-traversal",
    "title": "Binary Tree Inorder Traversal",
    "slug": "binary-tree-inorder-traversal",
    "leetcodeNumber": 94,
    "difficulty": "Easy",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "stacks"
    ],
    "url": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
    "verified": true,
    "notesSnippet": "Recursive or iterative with explicit stack, or Morris traversal.",
    "cppHint": "Push all left nodes onto stack, process, then move right.",
    "pythonHint": "yield from inorder(root.left) ..."
  },
  {
    "id": "validate-binary-search-tree",
    "title": "Validate Binary Search Tree",
    "slug": "validate-binary-search-tree",
    "leetcodeNumber": 98,
    "difficulty": "Medium",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "binary-search-trees"
    ],
    "url": "https://leetcode.com/problems/validate-binary-search-tree/",
    "verified": true,
    "notesSnippet": "DFS passing valid range (minVal, maxVal) or in-order traversal strictly increasing.",
    "cppHint": "Use long long min/max to avoid INT_MIN/INT_MAX overflow.",
    "pythonHint": "prev < node.val check in in-order traversal."
  },
  {
    "id": "same-tree",
    "title": "Same Tree",
    "slug": "same-tree",
    "leetcodeNumber": 100,
    "difficulty": "Easy",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "recursion"
    ],
    "url": "https://leetcode.com/problems/same-tree/",
    "verified": true,
    "notesSnippet": "Recursive DFS comparing current node values and subtrees.",
    "cppHint": "if (!p || !q) return p == q;",
    "pythonHint": "p.val == q.val and sameTree(p.left, q.left)..."
  },
  {
    "id": "symmetric-tree",
    "title": "Symmetric Tree",
    "slug": "symmetric-tree",
    "leetcodeNumber": 101,
    "difficulty": "Easy",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "recursion"
    ],
    "url": "https://leetcode.com/problems/symmetric-tree/",
    "verified": true,
    "notesSnippet": "Check mirror symmetry between left and right subtrees.",
    "cppHint": "isMirror(t1->left, t2->right) && isMirror(t1->right, t2->left)",
    "pythonHint": "Queue BFS pair comparison."
  },
  {
    "id": "binary-tree-level-order-traversal",
    "title": "Binary Tree Level Order Traversal",
    "slug": "binary-tree-level-order-traversal",
    "leetcodeNumber": 102,
    "difficulty": "Medium",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "queue"
    ],
    "url": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    "verified": true,
    "notesSnippet": "BFS with queue; capture size = q.size() for current level.",
    "cppHint": "int levelSize = q.size(); loop levelSize times.",
    "pythonHint": "deque with level list."
  },
  {
    "id": "maximum-depth-of-binary-tree",
    "title": "Maximum Depth of Binary Tree",
    "slug": "maximum-depth-of-binary-tree",
    "leetcodeNumber": 104,
    "difficulty": "Easy",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "recursion"
    ],
    "url": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    "verified": true,
    "notesSnippet": "1 + max(maxDepth(root->left), maxDepth(root->right)).",
    "cppHint": "Base case: if (!root) return 0;",
    "pythonHint": "Single line recursive return."
  },
  {
    "id": "construct-binary-tree-from-preorder-and-inorder-traversal",
    "title": "Construct Binary Tree from Preorder and Inorder Traversal",
    "slug": "construct-binary-tree-from-preorder-and-inorder-traversal",
    "leetcodeNumber": 105,
    "difficulty": "Medium",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "hash-map"
    ],
    "url": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
    "verified": true,
    "notesSnippet": "Preorder root is first element; find root in inorder map to split left/right subtrees.",
    "cppHint": "unordered_map<int, int> inorderIdxMap for O(1) lookup.",
    "pythonHint": "Recursively construct left and right subtrees."
  },
  {
    "id": "convert-sorted-array-to-binary-search-tree",
    "title": "Convert Sorted Array to Binary Search Tree",
    "slug": "convert-sorted-array-to-binary-search-tree",
    "leetcodeNumber": 108,
    "difficulty": "Easy",
    "primaryPattern": "binary-search-trees",
    "relatedPatterns": [
      "divide-and-conquer"
    ],
    "url": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
    "verified": true,
    "notesSnippet": "Pick middle element as root, recursively build left and right subtrees.",
    "cppHint": "mid = left + (right - left) / 2;",
    "pythonHint": "Guarantees height-balanced BST."
  },
  {
    "id": "balanced-binary-tree",
    "title": "Balanced Binary Tree",
    "slug": "balanced-binary-tree",
    "leetcodeNumber": 110,
    "difficulty": "Easy",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "recursion"
    ],
    "url": "https://leetcode.com/problems/balanced-binary-tree/",
    "verified": true,
    "notesSnippet": "Bottom-up DFS returning height or -1 if unbalanced.",
    "cppHint": "Return -1 immediately if subtree unbalanced (early pruning).",
    "pythonHint": "abs(left - right) <= 1 check."
  },
  {
    "id": "path-sum",
    "title": "Path Sum",
    "slug": "path-sum",
    "leetcodeNumber": 112,
    "difficulty": "Easy",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "recursion"
    ],
    "url": "https://leetcode.com/problems/path-sum/",
    "verified": true,
    "notesSnippet": "Check if leaf node and targetSum == node->val.",
    "cppHint": "Must verify node is a leaf (no left and no right).",
    "pythonHint": "hasPathSum(root.left, target - root.val)..."
  },
  {
    "id": "path-sum-ii",
    "title": "Path Sum II",
    "slug": "path-sum-ii",
    "leetcodeNumber": 113,
    "difficulty": "Medium",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "backtracking"
    ],
    "url": "https://leetcode.com/problems/path-sum-ii/",
    "verified": true,
    "notesSnippet": "Collect all root-to-leaf paths equaling targetSum.",
    "cppHint": "currPath.push_back(node->val); pop_back() on return.",
    "pythonHint": "Deep copy current path on leaf match."
  },
  {
    "id": "best-time-to-buy-and-sell-stock",
    "title": "Best Time to Buy and Sell Stock",
    "slug": "best-time-to-buy-and-sell-stock",
    "leetcodeNumber": 121,
    "difficulty": "Easy",
    "primaryPattern": "prefix-sum",
    "relatedPatterns": [
      "dynamic-programming-1d"
    ],
    "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    "verified": true,
    "notesSnippet": "Track minimum price seen so far, max profit is price - minPrice.",
    "cppHint": "minPrice = min(minPrice, price); maxProfit = max(maxProfit, price - minPrice);",
    "pythonHint": "Single pass O(N) time and O(1) space."
  },
  {
    "id": "best-time-to-buy-and-sell-stock-ii",
    "title": "Best Time to Buy and Sell Stock II",
    "slug": "best-time-to-buy-and-sell-stock-ii",
    "leetcodeNumber": 122,
    "difficulty": "Medium",
    "primaryPattern": "greedy",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
    "verified": true,
    "notesSnippet": "Greedy: accumulate every positive price difference prices[i] - prices[i-1].",
    "cppHint": "if (prices[i] > prices[i-1]) total += prices[i] - prices[i-1];",
    "pythonHint": "Sum of all upward slopes."
  },
  {
    "id": "binary-tree-maximum-path-sum",
    "title": "Binary Tree Maximum Path Sum",
    "slug": "binary-tree-maximum-path-sum",
    "leetcodeNumber": 124,
    "difficulty": "Hard",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "recursion"
    ],
    "url": "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
    "verified": true,
    "notesSnippet": "Post-order DFS: return max contribution of branch, update global max across node + left + right.",
    "cppHint": "max(0, maxGain(node->left)) to ignore negative contributions.",
    "pythonHint": "Global max path sum updated at each node."
  },
  {
    "id": "valid-palindrome",
    "title": "Valid Palindrome",
    "slug": "valid-palindrome",
    "leetcodeNumber": 125,
    "difficulty": "Easy",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "strings"
    ],
    "url": "https://leetcode.com/problems/valid-palindrome/",
    "verified": true,
    "notesSnippet": "Two pointers skipping non-alphanumeric characters and comparing lowercase.",
    "cppHint": "isalnum() and tolower() in <cctype>.",
    "pythonHint": "char.isalnum() with lower()."
  },
  {
    "id": "longest-consecutive-sequence",
    "title": "Longest Consecutive Sequence",
    "slug": "longest-consecutive-sequence",
    "leetcodeNumber": 128,
    "difficulty": "Medium",
    "primaryPattern": "hash-map",
    "relatedPatterns": [
      "union-find"
    ],
    "url": "https://leetcode.com/problems/longest-consecutive-sequence/",
    "verified": true,
    "notesSnippet": "Insert all in hash set; only start counting from `num` if `num-1` is not in set.",
    "cppHint": "unordered_set<int> lookup; if (!set.count(x - 1)) while (set.count(x++)) len++;",
    "pythonHint": "O(N) time despite nested loop because each number visited at most twice."
  },
  {
    "id": "clone-graph",
    "title": "Clone Graph",
    "slug": "clone-graph",
    "leetcodeNumber": 133,
    "difficulty": "Medium",
    "primaryPattern": "graph-bfs-dfs",
    "relatedPatterns": [
      "hash-map"
    ],
    "url": "https://leetcode.com/problems/clone-graph/",
    "verified": true,
    "notesSnippet": "DFS/BFS with hash map mapping original node pointer to cloned node pointer.",
    "cppHint": "unordered_map<Node*, Node*> visited;",
    "pythonHint": "Recursively clone neighbors and memoize."
  },
  {
    "id": "single-number",
    "title": "Single Number",
    "slug": "single-number",
    "leetcodeNumber": 136,
    "difficulty": "Easy",
    "primaryPattern": "bit-manipulation",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/single-number/",
    "verified": true,
    "notesSnippet": "XOR all elements together; duplicates cancel out (A ^ A = 0, A ^ 0 = A).",
    "cppHint": "int res = 0; for (int x : nums) res ^= x;",
    "pythonHint": "reduce(lambda x, y: x ^ y, nums)."
  },
  {
    "id": "copy-list-with-random-pointer",
    "title": "Copy List with Random Pointer",
    "slug": "copy-list-with-random-pointer",
    "leetcodeNumber": 138,
    "difficulty": "Medium",
    "primaryPattern": "linked-lists",
    "relatedPatterns": [
      "hash-map"
    ],
    "url": "https://leetcode.com/problems/copy-list-with-random-pointer/",
    "verified": true,
    "notesSnippet": "Hash map or interweave original and copied nodes for O(1) space.",
    "cppHint": "curr->next->random = curr->random ? curr->random->next : nullptr;",
    "pythonHint": "Two-pass interweaving is elegant O(1) auxiliary space."
  },
  {
    "id": "word-break",
    "title": "Word Break",
    "slug": "word-break",
    "leetcodeNumber": 139,
    "difficulty": "Medium",
    "primaryPattern": "dynamic-programming-1d",
    "relatedPatterns": [
      "trie"
    ],
    "url": "https://leetcode.com/problems/word-break/",
    "verified": true,
    "notesSnippet": "dp[i] = true if dp[j] is true and s[j..i] in dictionary.",
    "cppHint": "unordered_set<string> dict; limit j to max word length.",
    "pythonHint": "dp = [True] + [False] * len(s)."
  },
  {
    "id": "linked-list-cycle",
    "title": "Linked List Cycle",
    "slug": "linked-list-cycle",
    "leetcodeNumber": 141,
    "difficulty": "Easy",
    "primaryPattern": "fast-slow-pointers",
    "relatedPatterns": [
      "linked-lists"
    ],
    "url": "https://leetcode.com/problems/linked-list-cycle/",
    "verified": true,
    "notesSnippet": "Floyd's cycle detection: slow advances 1, fast advances 2.",
    "cppHint": "while (fast && fast->next) { slow = slow->next; fast = fast->next->next; if (slow == fast) return true; }",
    "pythonHint": "O(1) space cycle check."
  },
  {
    "id": "linked-list-cycle-ii",
    "title": "Linked List Cycle II",
    "slug": "linked-list-cycle-ii",
    "leetcodeNumber": 142,
    "difficulty": "Medium",
    "primaryPattern": "fast-slow-pointers",
    "relatedPatterns": [
      "linked-lists"
    ],
    "url": "https://leetcode.com/problems/linked-list-cycle-ii/",
    "verified": true,
    "notesSnippet": "Find meeting point; reset one pointer to head; both move 1 step to find cycle entry.",
    "cppHint": "entry = head; while (entry != slow) { entry = entry->next; slow = slow->next; }",
    "pythonHint": "Mathematical proof: distance from head to cycle = meeting to cycle."
  },
  {
    "id": "reorder-list",
    "title": "Reorder List",
    "slug": "reorder-list",
    "leetcodeNumber": 143,
    "difficulty": "Medium",
    "primaryPattern": "fast-slow-pointers",
    "relatedPatterns": [
      "linked-lists"
    ],
    "url": "https://leetcode.com/problems/reorder-list/",
    "verified": true,
    "notesSnippet": "Find middle, reverse second half, interleave two halves.",
    "cppHint": "Three distinct sub-problems combined.",
    "pythonHint": "Modular helpers for middle, reverse, and merge."
  },
  {
    "id": "lru-cache",
    "title": "LRU Cache",
    "slug": "lru-cache",
    "leetcodeNumber": 146,
    "difficulty": "Medium",
    "primaryPattern": "linked-lists",
    "relatedPatterns": [
      "hash-map"
    ],
    "url": "https://leetcode.com/problems/lru-cache/",
    "verified": true,
    "notesSnippet": "Hash map to doubly linked list nodes; move accessed node to head, evict from tail.",
    "cppHint": "unordered_map<int, list<pair<int,int>>::iterator>",
    "pythonHint": "OrderedDict in Python, or custom DoublyLinkedList."
  },
  {
    "id": "sort-list",
    "title": "Sort List",
    "slug": "sort-list",
    "leetcodeNumber": 148,
    "difficulty": "Medium",
    "primaryPattern": "linked-lists",
    "relatedPatterns": [
      "divide-and-conquer"
    ],
    "url": "https://leetcode.com/problems/sort-list/",
    "verified": true,
    "notesSnippet": "Merge sort on linked list: split by fast/slow pointer, recursively sort, merge.",
    "cppHint": "fast = head->next ensures split is even on 2-element list.",
    "pythonHint": "O(N log N) time and O(log N) stack space."
  },
  {
    "id": "evaluate-reverse-polish-notation",
    "title": "Evaluate Reverse Polish Notation",
    "slug": "evaluate-reverse-polish-notation",
    "leetcodeNumber": 150,
    "difficulty": "Medium",
    "primaryPattern": "stacks",
    "relatedPatterns": [
      "math"
    ],
    "url": "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
    "verified": true,
    "notesSnippet": "Stack evaluates operands; operators pop two operands and push result.",
    "cppHint": "Be careful with order of operands in division: b = st.top(); st.pop(); a = st.top();",
    "pythonHint": "int(a / b) handles truncation toward zero."
  },
  {
    "id": "maximum-product-subarray",
    "title": "Maximum Product Subarray",
    "slug": "maximum-product-subarray",
    "leetcodeNumber": 152,
    "difficulty": "Medium",
    "primaryPattern": "dynamic-programming-1d",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/maximum-product-subarray/",
    "verified": true,
    "notesSnippet": "Track both maxProd and minProd because negative times negative is positive.",
    "cppHint": "if (nums[i] < 0) swap(maxProd, minProd);",
    "pythonHint": "Kadane variant with sign inversion."
  },
  {
    "id": "find-minimum-in-rotated-sorted-array",
    "title": "Find Minimum in Rotated Sorted Array",
    "slug": "find-minimum-in-rotated-sorted-array",
    "leetcodeNumber": 153,
    "difficulty": "Medium",
    "primaryPattern": "binary-search",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
    "verified": true,
    "notesSnippet": "Binary search: if nums[mid] > nums[right], minimum lies in right half (low = mid + 1).",
    "cppHint": "while (l < r) mid = l + (r - l)/2; if (nums[mid] > nums[r]) l = mid + 1; else r = mid;",
    "pythonHint": "Never compare with nums[left]; compare with nums[right]."
  },
  {
    "id": "min-stack",
    "title": "Min Stack",
    "slug": "min-stack",
    "leetcodeNumber": 155,
    "difficulty": "Medium",
    "primaryPattern": "stacks",
    "relatedPatterns": [
      "design"
    ],
    "url": "https://leetcode.com/problems/min-stack/",
    "verified": true,
    "notesSnippet": "Store pair (val, currentMin) on stack or maintain dedicated minStack.",
    "cppHint": "stack<pair<int,int>> st;",
    "pythonHint": "Auxiliary min stack keeps track of running min."
  },
  {
    "id": "intersection-of-two-linked-lists",
    "title": "Intersection of Two Linked Lists",
    "slug": "intersection-of-two-linked-lists",
    "leetcodeNumber": 160,
    "difficulty": "Easy",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "linked-lists"
    ],
    "url": "https://leetcode.com/problems/intersection-of-two-linked-lists/",
    "verified": true,
    "notesSnippet": "Two pointers switch heads when reaching null: pA = pA ? pA->next : headB.",
    "cppHint": "Equalizes total traversal distance (a + b = b + a).",
    "pythonHint": "Clean O(N) time and O(1) space."
  },
  {
    "id": "find-peak-element",
    "title": "Find Peak Element",
    "slug": "find-peak-element",
    "leetcodeNumber": 162,
    "difficulty": "Medium",
    "primaryPattern": "binary-search",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/find-peak-element/",
    "verified": true,
    "notesSnippet": "Binary search: if nums[mid] < nums[mid+1], a peak must exist to the right.",
    "cppHint": "while (l < r) if (nums[mid] < nums[mid+1]) l = mid + 1; else r = mid;",
    "pythonHint": "Guaranteed peak existence due to boundary conditions."
  },
  {
    "id": "two-sum-ii-input-array-is-sorted",
    "title": "Two Sum II - Input Array Is Sorted",
    "slug": "two-sum-ii-input-array-is-sorted",
    "leetcodeNumber": 167,
    "difficulty": "Medium",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "binary-search"
    ],
    "url": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
    "verified": true,
    "notesSnippet": "Two pointers from left and right; sum < target move left, sum > target move right.",
    "cppHint": "while (l < r) { int s = numbers[l] + numbers[r]; if (s == target) ... }",
    "pythonHint": "1-indexed output as required by problem."
  },
  {
    "id": "majority-element",
    "title": "Majority Element",
    "slug": "majority-element",
    "leetcodeNumber": 169,
    "difficulty": "Easy",
    "primaryPattern": "greedy",
    "relatedPatterns": [
      "bit-manipulation"
    ],
    "url": "https://leetcode.com/problems/majority-element/",
    "verified": true,
    "notesSnippet": "Boyer-Moore voting algorithm: count increments on match, decrements on mismatch.",
    "cppHint": "int candidate = 0, count = 0; for (int x : nums) { if (count == 0) candidate = x; count += (x == candidate ? 1 : -1); }",
    "pythonHint": "O(N) time and O(1) space."
  },
  {
    "id": "house-robber",
    "title": "House Robber",
    "slug": "house-robber",
    "leetcodeNumber": 198,
    "difficulty": "Medium",
    "primaryPattern": "dynamic-programming-1d",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/house-robber/",
    "verified": true,
    "notesSnippet": "dp[i] = max(dp[i-1], dp[i-2] + nums[i]); space optimize to two variables.",
    "cppHint": "rob1, rob2 = 0, 0; for (int x : nums) { int temp = max(x + rob1, rob2); rob1 = rob2; rob2 = temp; }",
    "pythonHint": "State decision: rob current vs skip current."
  },
  {
    "id": "binary-tree-right-side-view",
    "title": "Binary Tree Right Side View",
    "slug": "binary-tree-right-side-view",
    "leetcodeNumber": 199,
    "difficulty": "Medium",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "queue"
    ],
    "url": "https://leetcode.com/problems/binary-tree-right-side-view/",
    "verified": true,
    "notesSnippet": "BFS taking last element of each level, or DFS visiting right subtree first.",
    "cppHint": "if (level == result.size()) result.push_back(node->val); dfs(node->right, level + 1);",
    "pythonHint": "DFS right-first is very concise."
  },
  {
    "id": "number-of-islands",
    "title": "Number of Islands",
    "slug": "number-of-islands",
    "leetcodeNumber": 200,
    "difficulty": "Medium",
    "primaryPattern": "graph-bfs-dfs",
    "relatedPatterns": [
      "matrix"
    ],
    "url": "https://leetcode.com/problems/number-of-islands/",
    "verified": true,
    "notesSnippet": "Grid DFS/BFS sink visited land cells ('1' -> '0'). Count connected components.",
    "cppHint": "Sink in-place to avoid auxiliary visited set.",
    "pythonHint": "Bound check r >= 0 && r < m && c >= 0 && c < n."
  },
  {
    "id": "reverse-linked-list",
    "title": "Reverse Linked List",
    "slug": "reverse-linked-list",
    "leetcodeNumber": 206,
    "difficulty": "Easy",
    "primaryPattern": "fast-slow-pointers",
    "relatedPatterns": [
      "linked-lists"
    ],
    "url": "https://leetcode.com/problems/reverse-linked-list/",
    "verified": true,
    "notesSnippet": "Iterative with prev, curr, nextNode pointers, or recursive reverse.",
    "cppHint": "ListNode* prev = nullptr; while (curr) { auto nxt = curr->next; curr->next = prev; prev = curr; curr = nxt; }",
    "pythonHint": "Fundamental pointer reversal primitive."
  },
  {
    "id": "course-schedule",
    "title": "Course Schedule",
    "slug": "course-schedule",
    "leetcodeNumber": 207,
    "difficulty": "Medium",
    "primaryPattern": "topological-sort",
    "relatedPatterns": [
      "graph-bfs-dfs"
    ],
    "url": "https://leetcode.com/problems/course-schedule/",
    "verified": true,
    "notesSnippet": "Detect cycle in directed graph using Kahn's algorithm (in-degrees) or 3-color DFS.",
    "cppHint": "vector<int> inDegree(numCourses, 0); queue<int> q;",
    "pythonHint": "If topological sort count < numCourses, cycle exists."
  },
  {
    "id": "implement-trie-prefix-tree",
    "title": "Implement Trie (Prefix Tree)",
    "slug": "implement-trie-prefix-tree",
    "leetcodeNumber": 208,
    "difficulty": "Medium",
    "primaryPattern": "trie",
    "relatedPatterns": [
      "design"
    ],
    "url": "https://leetcode.com/problems/implement-trie-prefix-tree/",
    "verified": true,
    "notesSnippet": "Tree of 26-element child arrays with isEndOfWord boolean flag.",
    "cppHint": "struct Node { Node* next[26] = {}; bool isEnd = false; };",
    "pythonHint": "Use dict for dynamic character branches in Python."
  },
  {
    "id": "minimum-size-subarray-sum",
    "title": "Minimum Size Subarray Sum",
    "slug": "minimum-size-subarray-sum",
    "leetcodeNumber": 209,
    "difficulty": "Medium",
    "primaryPattern": "sliding-window",
    "relatedPatterns": [
      "prefix-sum"
    ],
    "url": "https://leetcode.com/problems/minimum-size-subarray-sum/",
    "verified": true,
    "notesSnippet": "Sliding window expanding right, shrinking left while windowSum >= target.",
    "cppHint": "while (sum >= target) { minLen = min(minLen, r - l + 1); sum -= nums[l++]; }",
    "pythonHint": "All positive numbers ensures monotonic window behavior."
  },
  {
    "id": "course-schedule-ii",
    "title": "Course Schedule II",
    "slug": "course-schedule-ii",
    "leetcodeNumber": 210,
    "difficulty": "Medium",
    "primaryPattern": "topological-sort",
    "relatedPatterns": [
      "graph-bfs-dfs"
    ],
    "url": "https://leetcode.com/problems/course-schedule-ii/",
    "verified": true,
    "notesSnippet": "Kahn's BFS queue: record nodes as dequeued; return order if valid.",
    "cppHint": "if (order.size() == numCourses) return order; return {};",
    "pythonHint": "Breadth-first topological sort."
  },
  {
    "id": "house-robber-ii",
    "title": "House Robber II",
    "slug": "house-robber-ii",
    "leetcodeNumber": 213,
    "difficulty": "Medium",
    "primaryPattern": "dynamic-programming-1d",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/house-robber-ii/",
    "verified": true,
    "notesSnippet": "Houses are circular; solve two linear House Robber problems: [0..N-2] and [1..N-1].",
    "cppHint": "max(robLinear(nums, 0, n-2), robLinear(nums, 1, n-1))",
    "pythonHint": "Special case when n == 1."
  },
  {
    "id": "kth-largest-element-in-an-array",
    "title": "Kth Largest Element in an Array",
    "slug": "kth-largest-element-in-an-array",
    "leetcodeNumber": 215,
    "difficulty": "Medium",
    "primaryPattern": "top-k-elements-heap",
    "relatedPatterns": [
      "sorting"
    ],
    "url": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    "verified": true,
    "notesSnippet": "Min-heap of size K, or QuickSelect average O(N) partitioning.",
    "cppHint": "priority_queue<int, vector<int>, greater<int>> minH; if (minH.size() > k) minH.pop();",
    "pythonHint": "heapq.nlargest or quickselect."
  },
  {
    "id": "contains-duplicate",
    "title": "Contains Duplicate",
    "slug": "contains-duplicate",
    "leetcodeNumber": 217,
    "difficulty": "Easy",
    "primaryPattern": "hash-map",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/contains-duplicate/",
    "verified": true,
    "notesSnippet": "Hash set insertion or compare set size with array size.",
    "cppHint": "unordered_set<int> seen; if (!seen.insert(x).second) return true;",
    "pythonHint": "len(nums) != len(set(nums))."
  },
  {
    "id": "invert-binary-tree",
    "title": "Invert Binary Tree",
    "slug": "invert-binary-tree",
    "leetcodeNumber": 226,
    "difficulty": "Easy",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "recursion"
    ],
    "url": "https://leetcode.com/problems/invert-binary-tree/",
    "verified": true,
    "notesSnippet": "Swap left and right children recursively.",
    "cppHint": "swap(root->left, root->right); invertTree(root->left); invertTree(root->right);",
    "pythonHint": "Base case if not root return None."
  },
  {
    "id": "kth-smallest-element-in-a-bst",
    "title": "Kth Smallest Element in a BST",
    "slug": "kth-smallest-element-in-a-bst",
    "leetcodeNumber": 230,
    "difficulty": "Medium",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "binary-search-trees"
    ],
    "url": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
    "verified": true,
    "notesSnippet": "In-order traversal visits BST elements in ascending sorted order; return Kth visited.",
    "cppHint": "Iterative in-order with stack; decrement k on pop.",
    "pythonHint": "BST in-order property guarantees sorted order."
  },
  {
    "id": "implement-queue-using-stacks",
    "title": "Implement Queue using Stacks",
    "slug": "implement-queue-using-stacks",
    "leetcodeNumber": 232,
    "difficulty": "Easy",
    "primaryPattern": "stacks",
    "relatedPatterns": [
      "design"
    ],
    "url": "https://leetcode.com/problems/implement-queue-using-stacks/",
    "verified": true,
    "notesSnippet": "Two stacks: inputStack and outputStack; transfer only when outputStack is empty.",
    "cppHint": "Amortized O(1) operations.",
    "pythonHint": "Clean amortized analysis."
  },
  {
    "id": "palindrome-linked-list",
    "title": "Palindrome Linked List",
    "slug": "palindrome-linked-list",
    "leetcodeNumber": 234,
    "difficulty": "Easy",
    "primaryPattern": "fast-slow-pointers",
    "relatedPatterns": [
      "linked-lists"
    ],
    "url": "https://leetcode.com/problems/palindrome-linked-list/",
    "verified": true,
    "notesSnippet": "Find middle with fast/slow pointers, reverse second half, compare halves.",
    "cppHint": "Restore second half if required to preserve list.",
    "pythonHint": "O(N) time and O(1) space."
  },
  {
    "id": "lowest-common-ancestor-of-a-binary-search-tree",
    "title": "Lowest Common Ancestor of a Binary Search Tree",
    "slug": "lowest-common-ancestor-of-a-binary-search-tree",
    "leetcodeNumber": 235,
    "difficulty": "Medium",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "binary-search-trees"
    ],
    "url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
    "verified": true,
    "notesSnippet": "Take advantage of BST: if both < root go left, if both > root go right, else root is LCA.",
    "cppHint": "No need to search entire tree; single O(H) branch traversal.",
    "pythonHint": "Direct comparison root.val vs p.val and q.val."
  },
  {
    "id": "lowest-common-ancestor-of-a-binary-tree",
    "title": "Lowest Common Ancestor of a Binary Tree",
    "slug": "lowest-common-ancestor-of-a-binary-tree",
    "leetcodeNumber": 236,
    "difficulty": "Medium",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "recursion"
    ],
    "url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
    "verified": true,
    "notesSnippet": "Recursive DFS: if root is p or q return root; if left and right both non-null, root is LCA.",
    "cppHint": "TreeNode* left = LCA(root->left, p, q); TreeNode* right = LCA(root->right, p, q);",
    "pythonHint": "Return left ? left : right if one side null."
  },
  {
    "id": "product-of-array-except-self",
    "title": "Product of Array Except Self",
    "slug": "product-of-array-except-self",
    "leetcodeNumber": 238,
    "difficulty": "Medium",
    "primaryPattern": "prefix-sum",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/product-of-array-except-self/",
    "verified": true,
    "notesSnippet": "Two passes: prefix products left-to-right, then running suffix products right-to-left.",
    "cppHint": "vector<int> res(n, 1); calculate prefix, then backward multiply suffix.",
    "pythonHint": "O(1) extra space excluding output array."
  },
  {
    "id": "sliding-window-maximum",
    "title": "Sliding Window Maximum",
    "slug": "sliding-window-maximum",
    "leetcodeNumber": 239,
    "difficulty": "Hard",
    "primaryPattern": "monotonic-stack",
    "relatedPatterns": [
      "queue",
      "sliding-window"
    ],
    "url": "https://leetcode.com/problems/sliding-window-maximum/",
    "verified": true,
    "notesSnippet": "Monotonic decreasing deque storing indices; remove out-of-window and smaller elements.",
    "cppHint": "deque<int> dq; pop_back while nums[dq.back()] < nums[i]; pop_front if dq.front() <= i - k;",
    "pythonHint": "Amortized O(N) time across entire array."
  },
  {
    "id": "valid-anagram",
    "title": "Valid Anagram",
    "slug": "valid-anagram",
    "leetcodeNumber": 242,
    "difficulty": "Easy",
    "primaryPattern": "hash-map",
    "relatedPatterns": [
      "strings"
    ],
    "url": "https://leetcode.com/problems/valid-anagram/",
    "verified": true,
    "notesSnippet": "Frequency count array of size 26; increment for s, decrement for t.",
    "cppHint": "int count[26] = {}; for (char c : s) count[c - 'a']++; for (char c : t) if (--count[c - 'a'] < 0) return false;",
    "pythonHint": "Counter(s) == Counter(t)."
  },
  {
    "id": "meeting-rooms",
    "title": "Meeting Rooms",
    "slug": "meeting-rooms",
    "leetcodeNumber": 252,
    "difficulty": "Easy",
    "primaryPattern": "greedy-intervals",
    "relatedPatterns": [
      "sorting"
    ],
    "url": "https://leetcode.com/problems/meeting-rooms/",
    "verified": true,
    "notesSnippet": "Sort by start time; return false if intervals[i][0] < intervals[i-1][1].",
    "cppHint": "sort(intervals.begin(), intervals.end());",
    "pythonHint": "Check adjacent overlaps."
  },
  {
    "id": "meeting-rooms-ii",
    "title": "Meeting Rooms II",
    "slug": "meeting-rooms-ii",
    "leetcodeNumber": 253,
    "difficulty": "Medium",
    "primaryPattern": "greedy-intervals",
    "relatedPatterns": [
      "top-k-elements-heap"
    ],
    "url": "https://leetcode.com/problems/meeting-rooms-ii/",
    "verified": true,
    "notesSnippet": "Min-heap storing end times of active meetings, or two-pointer start/end arrays.",
    "cppHint": "priority_queue<int, vector<int>, greater<int>> minHeap; if (start >= minHeap.top()) minHeap.pop(); minHeap.push(end);",
    "pythonHint": "Chronological event sweep."
  },
  {
    "id": "missing-number",
    "title": "Missing Number",
    "slug": "missing-number",
    "leetcodeNumber": 268,
    "difficulty": "Easy",
    "primaryPattern": "bit-manipulation",
    "relatedPatterns": [
      "math"
    ],
    "url": "https://leetcode.com/problems/missing-number/",
    "verified": true,
    "notesSnippet": "XOR numbers from 0 to N with array values, or Gauss sum formula n*(n+1)/2 - sum.",
    "cppHint": "int res = n; for (int i = 0; i < n; ++i) res ^= i ^ nums[i];",
    "pythonHint": "XOR prevents integer overflow."
  },
  {
    "id": "move-zeroes",
    "title": "Move Zeroes",
    "slug": "move-zeroes",
    "leetcodeNumber": 283,
    "difficulty": "Easy",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/move-zeroes/",
    "verified": true,
    "notesSnippet": "Two pointers: non-zero write pointer; swap with current element.",
    "cppHint": "if (nums[i] != 0) swap(nums[writeIdx++], nums[i]);",
    "pythonHint": "Minimizes unnecessary writes."
  },
  {
    "id": "find-the-duplicate-number",
    "title": "Find the Duplicate Number",
    "slug": "find-the-duplicate-number",
    "leetcodeNumber": 287,
    "difficulty": "Medium",
    "primaryPattern": "fast-slow-pointers",
    "relatedPatterns": [
      "binary-search"
    ],
    "url": "https://leetcode.com/problems/find-the-duplicate-number/",
    "verified": true,
    "notesSnippet": "Floyd's cycle detection treating array values as next pointers (nums[i] is next node).",
    "cppHint": "slow = nums[slow]; fast = nums[nums[fast]];",
    "pythonHint": "Guarantees O(1) space without modifying array."
  },
  {
    "id": "find-median-from-data-stream",
    "title": "Find Median from Data Stream",
    "slug": "find-median-from-data-stream",
    "leetcodeNumber": 295,
    "difficulty": "Hard",
    "primaryPattern": "top-k-elements-heap",
    "relatedPatterns": [
      "design"
    ],
    "url": "https://leetcode.com/problems/find-median-from-data-stream/",
    "verified": true,
    "notesSnippet": "Two heaps: maxHeap for lower half, minHeap for upper half; balance sizes.",
    "cppHint": "maxHeap.size() == minHeap.size() or maxHeap.size() == minHeap.size() + 1;",
    "pythonHint": "O(log N) insertion, O(1) median query."
  },
  {
    "id": "longest-increasing-subsequence",
    "title": "Longest Increasing Subsequence",
    "slug": "longest-increasing-subsequence",
    "leetcodeNumber": 300,
    "difficulty": "Medium",
    "primaryPattern": "dynamic-programming-1d",
    "relatedPatterns": [
      "binary-search"
    ],
    "url": "https://leetcode.com/problems/longest-increasing-subsequence/",
    "verified": true,
    "notesSnippet": "Patience sorting / tails array with binary search (std::lower_bound) for O(N log N).",
    "cppHint": "auto it = lower_bound(tails.begin(), tails.end(), x); if (it == tails.end()) tails.push_back(x); else *it = x;",
    "pythonHint": "O(N log N) patience sort."
  },
  {
    "id": "coin-change",
    "title": "Coin Change",
    "slug": "coin-change",
    "leetcodeNumber": 322,
    "difficulty": "Medium",
    "primaryPattern": "dynamic-programming-1d",
    "relatedPatterns": [
      "breadth-first-search"
    ],
    "url": "https://leetcode.com/problems/coin-change/",
    "verified": true,
    "notesSnippet": "Unbounded knapsack: dp[i] = min(dp[i], dp[i - coin] + 1). Base case dp[0] = 0.",
    "cppHint": "Initialize with amount + 1; check if dp[amount] > amount return -1.",
    "pythonHint": "Bottom-up 1D DP table."
  },
  {
    "id": "top-k-frequent-elements",
    "title": "Top K Frequent Elements",
    "slug": "top-k-frequent-elements",
    "leetcodeNumber": 347,
    "difficulty": "Medium",
    "primaryPattern": "top-k-elements-heap",
    "relatedPatterns": [
      "hash-map"
    ],
    "url": "https://leetcode.com/problems/top-k-frequent-elements/",
    "verified": true,
    "notesSnippet": "Frequency hash map + min-heap of size K, or Bucket Sort for O(N).",
    "cppHint": "Bucket sort where index is frequency achieves true O(N).",
    "pythonHint": "Counter + heapq or bucket list."
  },
  {
    "id": "sum-of-two-integers",
    "title": "Sum of Two Integers",
    "slug": "sum-of-two-integers",
    "leetcodeNumber": 371,
    "difficulty": "Medium",
    "primaryPattern": "bit-manipulation",
    "relatedPatterns": [
      "math"
    ],
    "url": "https://leetcode.com/problems/sum-of-two-integers/",
    "verified": true,
    "notesSnippet": "Bitwise addition: sum without carry is a ^ b; carry is (a & b) << 1.",
    "cppHint": "while (b) { unsigned carry = (unsigned)(a & b) << 1; a ^= b; b = carry; }",
    "pythonHint": "Handle 32-bit integer mask in Python."
  },
  {
    "id": "combination-sum-iv",
    "title": "Combination Sum IV",
    "slug": "combination-sum-iv",
    "leetcodeNumber": 377,
    "difficulty": "Medium",
    "primaryPattern": "dynamic-programming-1d",
    "relatedPatterns": [
      "recursion"
    ],
    "url": "https://leetcode.com/problems/combination-sum-iv/",
    "verified": true,
    "notesSnippet": "Order matters (permutations sum to target): outer loop target, inner loop nums.",
    "cppHint": "unsigned int dp to avoid overflow on invalid test cases.",
    "pythonHint": "DP counting distinct sequences."
  },
  {
    "id": "partition-equal-subset-sum",
    "title": "Partition Equal Subset Sum",
    "slug": "partition-equal-subset-sum",
    "leetcodeNumber": 416,
    "difficulty": "Medium",
    "primaryPattern": "dynamic-programming-1d",
    "relatedPatterns": [
      "bit-manipulation"
    ],
    "url": "https://leetcode.com/problems/partition-equal-subset-sum/",
    "verified": true,
    "notesSnippet": "0/1 Knapsack: can subset sum to totalSum / 2? Use bitset<10001> for ultra-fast C++.",
    "cppHint": "bitset<10001> dp; dp[0] = 1; for (int n : nums) dp |= (dp << n);",
    "pythonHint": "Iterate capacity backwards in 1D array."
  },
  {
    "id": "pacific-atlantic-water-flow",
    "title": "Pacific Atlantic Water Flow",
    "slug": "pacific-atlantic-water-flow",
    "leetcodeNumber": 417,
    "difficulty": "Medium",
    "primaryPattern": "graph-bfs-dfs",
    "relatedPatterns": [
      "matrix"
    ],
    "url": "https://leetcode.com/problems/pacific-atlantic-water-flow/",
    "verified": true,
    "notesSnippet": "Reverse thinking: BFS/DFS from ocean borders inland climbing up (height >= prevHeight).",
    "cppHint": "Two boolean grids pacific and atlantic; return cells true in both.",
    "pythonHint": "Start from borders and flow upward."
  },
  {
    "id": "longest-repeating-character-replacement",
    "title": "Longest Repeating Character Replacement",
    "slug": "longest-repeating-character-replacement",
    "leetcodeNumber": 424,
    "difficulty": "Medium",
    "primaryPattern": "sliding-window",
    "relatedPatterns": [
      "hash-map"
    ],
    "url": "https://leetcode.com/problems/longest-repeating-character-replacement/",
    "verified": true,
    "notesSnippet": "Sliding window: valid if (windowLen - maxFreq) <= k.",
    "cppHint": "maxFreq does not need to shrink when window slides right.",
    "pythonHint": "O(26 * N) or O(N) frequency tracking."
  },
  {
    "id": "non-overlapping-intervals",
    "title": "Non-overlapping Intervals",
    "slug": "non-overlapping-intervals",
    "leetcodeNumber": 435,
    "difficulty": "Medium",
    "primaryPattern": "greedy-intervals",
    "relatedPatterns": [
      "sorting"
    ],
    "url": "https://leetcode.com/problems/non-overlapping-intervals/",
    "verified": true,
    "notesSnippet": "Greedy interval scheduling: sort by end time; keep intervals with earliest end times.",
    "cppHint": "sort(intervals.begin(), intervals.end(), [](auto& a, auto& b){ return a[1] < b[1]; });",
    "pythonHint": "Count removals = total - compatible."
  },
  {
    "id": "diameter-of-binary-tree",
    "title": "Diameter of Binary Tree",
    "slug": "diameter-of-binary-tree",
    "leetcodeNumber": 543,
    "difficulty": "Easy",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "recursion"
    ],
    "url": "https://leetcode.com/problems/diameter-of-binary-tree/",
    "verified": true,
    "notesSnippet": "DFS returns max depth; update global diameter with leftDepth + rightDepth.",
    "cppHint": "int left = depth(node->left), right = depth(node->right); maxD = max(maxD, left + right);",
    "pythonHint": "Diameter is number of edges on longest path."
  },
  {
    "id": "subarray-sum-equals-k",
    "title": "Subarray Sum Equals K",
    "slug": "subarray-sum-equals-k",
    "leetcodeNumber": 560,
    "difficulty": "Medium",
    "primaryPattern": "prefix-sum",
    "relatedPatterns": [
      "hash-map"
    ],
    "url": "https://leetcode.com/problems/subarray-sum-equals-k/",
    "verified": true,
    "notesSnippet": "Prefix sum with hash map counting frequency of seen prefix sums.",
    "cppHint": "unordered_map<int, int> count; count[0] = 1; sum += x; ans += count[sum - k]; count[sum]++;",
    "pythonHint": "Essential canonical prefix sum problem."
  },
  {
    "id": "permutation-in-string",
    "title": "Permutation in String",
    "slug": "permutation-in-string",
    "leetcodeNumber": 567,
    "difficulty": "Medium",
    "primaryPattern": "sliding-window",
    "relatedPatterns": [
      "hash-map"
    ],
    "url": "https://leetcode.com/problems/permutation-in-string/",
    "verified": true,
    "notesSnippet": "Fixed-size sliding window of length len(s1); match character frequency counts.",
    "cppHint": "vector<int> c1(26, 0), c2(26, 0); maintain matches count.",
    "pythonHint": "Fixed window size sliding."
  },
  {
    "id": "subtree-of-another-tree",
    "title": "Subtree of Another Tree",
    "slug": "subtree-of-another-tree",
    "leetcodeNumber": 572,
    "difficulty": "Easy",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "recursion"
    ],
    "url": "https://leetcode.com/problems/subtree-of-another-tree/",
    "verified": true,
    "notesSnippet": "For each node in root, check if isSameTree(node, subRoot).",
    "cppHint": "isSameTree(root, subRoot) || isSubtree(root->left, subRoot) || isSubtree(root->right, subRoot)",
    "pythonHint": "Pre-order serialization also works."
  },
  {
    "id": "palindromic-substrings",
    "title": "Palindromic Substrings",
    "slug": "palindromic-substrings",
    "leetcodeNumber": 647,
    "difficulty": "Medium",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "dynamic-programming-1d"
    ],
    "url": "https://leetcode.com/problems/palindromic-substrings/",
    "verified": true,
    "notesSnippet": "Expand around centers for all 2N - 1 center positions (odd and even).",
    "cppHint": "int count(string& s, int l, int r) { int c = 0; while (l >= 0 && r < s.size() && s[l--] == s[r++]) c++; return c; }",
    "pythonHint": "O(N^2) time and O(1) space."
  },
  {
    "id": "redundant-connection",
    "title": "Redundant Connection",
    "slug": "redundant-connection",
    "leetcodeNumber": 684,
    "difficulty": "Medium",
    "primaryPattern": "union-find",
    "relatedPatterns": [
      "graph-bfs-dfs"
    ],
    "url": "https://leetcode.com/problems/redundant-connection/",
    "verified": true,
    "notesSnippet": "Union-Find on edges; the edge whose endpoints already share the same root is redundant.",
    "cppHint": "if (!dsu.unite(u, v)) return edge;",
    "pythonHint": "First edge that forms cycle."
  },
  {
    "id": "binary-search",
    "title": "Binary Search",
    "slug": "binary-search",
    "leetcodeNumber": 704,
    "difficulty": "Easy",
    "primaryPattern": "binary-search",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/binary-search/",
    "verified": true,
    "notesSnippet": "Classic binary search on sorted array.",
    "cppHint": "int mid = low + (high - low) / 2;",
    "pythonHint": "Check nums[mid] == target."
  },
  {
    "id": "daily-temperatures",
    "title": "Daily Temperatures",
    "slug": "daily-temperatures",
    "leetcodeNumber": 739,
    "difficulty": "Medium",
    "primaryPattern": "monotonic-stack",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/daily-temperatures/",
    "verified": true,
    "notesSnippet": "Monotonic decreasing stack storing indices of temperatures.",
    "cppHint": "while (!st.empty() && t[i] > t[st.top()]) { ans[st.top()] = i - st.top(); st.pop(); }",
    "pythonHint": "Stack of indices."
  },
  {
    "id": "network-delay-time",
    "title": "Network Delay Time",
    "slug": "network-delay-time",
    "leetcodeNumber": 743,
    "difficulty": "Medium",
    "primaryPattern": "graph-bfs-dfs",
    "relatedPatterns": [
      "top-k-elements-heap"
    ],
    "url": "https://leetcode.com/problems/network-delay-time/",
    "verified": true,
    "notesSnippet": "Dijkstra's shortest path algorithm using priority queue with (dist, node).",
    "cppHint": "priority_queue<pair<int,int>, vector<pair<int,int>>, greater<pair<int,int>>> pq;",
    "pythonHint": "Max distance in dist table is answer."
  },
  {
    "id": "cheapest-flights-within-k-stops",
    "title": "Cheapest Flights Within K Stops",
    "slug": "cheapest-flights-within-k-stops",
    "leetcodeNumber": 787,
    "difficulty": "Medium",
    "primaryPattern": "graph-bfs-dfs",
    "relatedPatterns": [
      "dynamic-programming-1d"
    ],
    "url": "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
    "verified": true,
    "notesSnippet": "Bellman-Ford variant run K + 1 times or BFS with distance pruning.",
    "cppHint": "Copy previous distance array before relaxing edges to enforce stop count.",
    "pythonHint": "prev_dist = list(dist) each iteration."
  },
  {
    "id": "koko-eating-bananas",
    "title": "Koko Eating Bananas",
    "slug": "koko-eating-bananas",
    "leetcodeNumber": 875,
    "difficulty": "Medium",
    "primaryPattern": "binary-search-answer",
    "relatedPatterns": [
      "greedy"
    ],
    "url": "https://leetcode.com/problems/koko-eating-bananas/",
    "verified": true,
    "notesSnippet": "Binary search on eating speed between 1 and max(piles).",
    "cppHint": "int hours = 0; for (int p : piles) hours += (p + mid - 1) / mid; if (hours <= h) high = mid; else low = mid + 1;",
    "pythonHint": "Ceiling division using (p + mid - 1) / mid."
  },
  {
    "id": "k-closest-points-to-origin",
    "title": "K Closest Points to Origin",
    "slug": "k-closest-points-to-origin",
    "leetcodeNumber": 973,
    "difficulty": "Medium",
    "primaryPattern": "top-k-elements-heap",
    "relatedPatterns": [
      "sorting"
    ],
    "url": "https://leetcode.com/problems/k-closest-points-to-origin/",
    "verified": true,
    "notesSnippet": "Max-heap of size K tracking points with smallest x^2 + y^2 distance.",
    "cppHint": "Avoid sqrt; compare raw x*x + y*y.",
    "pythonHint": "heapq with negative distance."
  },
  {
    "id": "time-based-key-value-store",
    "title": "Time Based Key-Value Store",
    "slug": "time-based-key-value-store",
    "leetcodeNumber": 981,
    "difficulty": "Medium",
    "primaryPattern": "binary-search",
    "relatedPatterns": [
      "hash-map"
    ],
    "url": "https://leetcode.com/problems/time-based-key-value-store/",
    "verified": true,
    "notesSnippet": "Hash map from key to vector of pairs (timestamp, value); binary search timestamp.",
    "cppHint": "upper_bound on timestamps then step backward.",
    "pythonHint": "bisect_right on timestamps."
  },
  {
    "id": "rotting-oranges",
    "title": "Rotting Oranges",
    "slug": "rotting-oranges",
    "leetcodeNumber": 994,
    "difficulty": "Medium",
    "primaryPattern": "graph-bfs-dfs",
    "relatedPatterns": [
      "matrix"
    ],
    "url": "https://leetcode.com/problems/rotting-oranges/",
    "verified": true,
    "notesSnippet": "Multi-source BFS from all initial rotten oranges; track elapsed minutes and fresh count.",
    "cppHint": "Enqueue all '2's initially; fresh count decrements.",
    "pythonHint": "Return fresh == 0 ? minutes : -1."
  },
  {
    "id": "last-stone-weight",
    "title": "Last Stone Weight",
    "slug": "last-stone-weight",
    "leetcodeNumber": 1046,
    "difficulty": "Easy",
    "primaryPattern": "top-k-elements-heap",
    "relatedPatterns": [
      "greedy"
    ],
    "url": "https://leetcode.com/problems/last-stone-weight/",
    "verified": true,
    "notesSnippet": "Max-heap repeatedly smashing two largest stones.",
    "cppHint": "priority_queue<int> pq(stones.begin(), stones.end());",
    "pythonHint": "heapq with negated values in Python."
  },
  {
    "id": "longest-common-subsequence",
    "title": "Longest Common Subsequence",
    "slug": "longest-common-subsequence",
    "leetcodeNumber": 1143,
    "difficulty": "Medium",
    "primaryPattern": "dynamic-programming-2d",
    "relatedPatterns": [
      "strings"
    ],
    "url": "https://leetcode.com/problems/longest-common-subsequence/",
    "verified": true,
    "notesSnippet": "2D DP: match gives 1 + dp[i-1][j-1], mismatch gives max(dp[i-1][j], dp[i][j-1]).",
    "cppHint": "vector<vector<int>> dp(m+1, vector<int>(n+1, 0));",
    "pythonHint": "1D rolling array optimization."
  },
  {
    "id": "count-good-nodes-in-binary-tree",
    "title": "Count Good Nodes in Binary Tree",
    "slug": "count-good-nodes-in-binary-tree",
    "leetcodeNumber": 1448,
    "difficulty": "Medium",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "recursion"
    ],
    "url": "https://leetcode.com/problems/count-good-nodes-in-binary-tree/",
    "verified": true,
    "notesSnippet": "DFS passing maximum value seen on path from root to current node.",
    "cppHint": "if (node->val >= maxVal) { count++; maxVal = node->val; }",
    "pythonHint": "Traverse left and right with updated maxVal."
  },
  {
    "id": "find-if-path-exists-in-graph",
    "title": "Find if Path Exists in Graph",
    "slug": "find-if-path-exists-in-graph",
    "leetcodeNumber": 1971,
    "difficulty": "Easy",
    "primaryPattern": "union-find",
    "relatedPatterns": [
      "graph-bfs-dfs"
    ],
    "url": "https://leetcode.com/problems/find-if-path-exists-in-graph/",
    "verified": true,
    "notesSnippet": "Union-Find or simple BFS/DFS from source to destination.",
    "cppHint": "dsu.find(source) == dsu.find(destination);",
    "pythonHint": "DSU provides instant connectivity check."
  },
  {
    "id": "palindrome-number",
    "title": "Palindrome Number",
    "slug": "palindrome-number",
    "leetcodeNumber": 9,
    "difficulty": "Easy",
    "primaryPattern": "math",
    "relatedPatterns": [
      "two-pointers"
    ],
    "url": "https://leetcode.com/problems/palindrome-number/",
    "verified": true,
    "notesSnippet": "Revert half of integer and compare; no string conversion needed.",
    "cppHint": "Revert half: while (x > reverted) { reverted = reverted * 10 + x % 10; x /= 10; }",
    "pythonHint": "x == reverted or x == reverted // 10."
  },
  {
    "id": "roman-to-integer",
    "title": "Roman to Integer",
    "slug": "roman-to-integer",
    "leetcodeNumber": 13,
    "difficulty": "Easy",
    "primaryPattern": "hash-map",
    "relatedPatterns": [
      "strings"
    ],
    "url": "https://leetcode.com/problems/roman-to-integer/",
    "verified": true,
    "notesSnippet": "If current Roman numeral < next Roman numeral, subtract it; else add it.",
    "cppHint": "unordered_map<char, int> vals = {{'I', 1}, {'V', 5}, ...};",
    "pythonHint": "Check s[i] < s[i+1]."
  },
  {
    "id": "longest-common-prefix",
    "title": "Longest Common Prefix",
    "slug": "longest-common-prefix",
    "leetcodeNumber": 14,
    "difficulty": "Easy",
    "primaryPattern": "strings",
    "relatedPatterns": [
      "trie"
    ],
    "url": "https://leetcode.com/problems/longest-common-prefix/",
    "verified": true,
    "notesSnippet": "Vertical scanning across characters of all strings.",
    "cppHint": "Compare characters column by column.",
    "pythonHint": "all(s[i] == first[i] for s in strs)."
  },
  {
    "id": "find-the-index-of-the-first-occurrence-in-a-string",
    "title": "Find the Index of the First Occurrence in a String",
    "slug": "find-the-index-of-the-first-occurrence-in-a-string",
    "leetcodeNumber": 28,
    "difficulty": "Easy",
    "primaryPattern": "strings",
    "relatedPatterns": [
      "two-pointers"
    ],
    "url": "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
    "verified": true,
    "notesSnippet": "KMP algorithm or simple sliding window substring comparison.",
    "cppHint": "KMP LPS array precomputation for O(N + M).",
    "pythonHint": "s.find(needle)."
  },
  {
    "id": "plus-one",
    "title": "Plus One",
    "slug": "plus-one",
    "leetcodeNumber": 66,
    "difficulty": "Easy",
    "primaryPattern": "arrays",
    "relatedPatterns": [
      "math"
    ],
    "url": "https://leetcode.com/problems/plus-one/",
    "verified": true,
    "notesSnippet": "Traverse from right; if digit is 9 set to 0, else increment and return.",
    "cppHint": "digits.insert(digits.begin(), 1) if all were 9.",
    "pythonHint": "Carry propagation."
  },
  {
    "id": "add-binary",
    "title": "Add Binary",
    "slug": "add-binary",
    "leetcodeNumber": 67,
    "difficulty": "Easy",
    "primaryPattern": "bit-manipulation",
    "relatedPatterns": [
      "strings"
    ],
    "url": "https://leetcode.com/problems/add-binary/",
    "verified": true,
    "notesSnippet": "Two pointers from ends of binary strings adding digits with carry.",
    "cppHint": "carry = sum / 2; res += (sum % 2) + '0';",
    "pythonHint": "bin(int(a, 2) + int(b, 2))[2:]."
  },
  {
    "id": "sqrtx",
    "title": "Sqrt(x)",
    "slug": "sqrtx",
    "leetcodeNumber": 69,
    "difficulty": "Easy",
    "primaryPattern": "binary-search-answer",
    "relatedPatterns": [
      "math"
    ],
    "url": "https://leetcode.com/problems/sqrtx/",
    "verified": true,
    "notesSnippet": "Binary search for integer square root in range 0 to x.",
    "cppHint": "mid <= x / mid avoids overflow.",
    "pythonHint": "Binary search invariant."
  },
  {
    "id": "remove-duplicates-from-sorted-list",
    "title": "Remove Duplicates from Sorted List",
    "slug": "remove-duplicates-from-sorted-list",
    "leetcodeNumber": 83,
    "difficulty": "Easy",
    "primaryPattern": "linked-lists",
    "relatedPatterns": [
      "two-pointers"
    ],
    "url": "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
    "verified": true,
    "notesSnippet": "If curr->val == curr->next->val, bypass curr->next.",
    "cppHint": "while (curr && curr->next) { if (curr->val == curr->next->val) curr->next = curr->next->next; else curr = curr->next; }",
    "pythonHint": "Single pointer skip."
  },
  {
    "id": "merge-sorted-array",
    "title": "Merge Sorted Array",
    "slug": "merge-sorted-array",
    "leetcodeNumber": 88,
    "difficulty": "Easy",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/merge-sorted-array/",
    "verified": true,
    "notesSnippet": "Three pointers filling nums1 from back to front to avoid overwriting.",
    "cppHint": "int p1 = m - 1, p2 = n - 1, p = m + n - 1;",
    "pythonHint": "Compare from back and place largest."
  },
  {
    "id": "binary-tree-zigzag-level-order-traversal",
    "title": "Binary Tree Zigzag Level Order Traversal",
    "slug": "binary-tree-zigzag-level-order-traversal",
    "leetcodeNumber": 103,
    "difficulty": "Medium",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "queue"
    ],
    "url": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
    "verified": true,
    "notesSnippet": "BFS with bool leftToRight toggle; reverse level vector when false.",
    "cppHint": "if (!leftToRight) reverse(level.begin(), level.end());",
    "pythonHint": "collections.deque with rotate or reverse."
  },
  {
    "id": "binary-tree-level-order-traversal-ii",
    "title": "Binary Tree Level Order Traversal II",
    "slug": "binary-tree-level-order-traversal-ii",
    "leetcodeNumber": 107,
    "difficulty": "Medium",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "queue"
    ],
    "url": "https://leetcode.com/problems/binary-tree-level-order-traversal-ii/",
    "verified": true,
    "notesSnippet": "Standard BFS level order, then reverse entire list of levels.",
    "cppHint": "reverse(result.begin(), result.end());",
    "pythonHint": "result[::-1]."
  },
  {
    "id": "minimum-depth-of-binary-tree",
    "title": "Minimum Depth of Binary Tree",
    "slug": "minimum-depth-of-binary-tree",
    "leetcodeNumber": 111,
    "difficulty": "Easy",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "queue"
    ],
    "url": "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
    "verified": true,
    "notesSnippet": "BFS early return on first leaf node encountered.",
    "cppHint": "if (!node->left && !node->right) return depth;",
    "pythonHint": "BFS finds shortest leaf distance first."
  },
  {
    "id": "pascals-triangle",
    "title": "Pascal's Triangle",
    "slug": "pascals-triangle",
    "leetcodeNumber": 118,
    "difficulty": "Easy",
    "primaryPattern": "arrays",
    "relatedPatterns": [
      "dynamic-programming-1d"
    ],
    "url": "https://leetcode.com/problems/pascals-triangle/",
    "verified": true,
    "notesSnippet": "Generate row by row: row[j] = prev[j-1] + prev[j].",
    "cppHint": "Outer loop 0 to numRows-1.",
    "pythonHint": "Dynamic table building."
  },
  {
    "id": "pascals-triangle-ii",
    "title": "Pascal's Triangle II",
    "slug": "pascals-triangle-ii",
    "leetcodeNumber": 119,
    "difficulty": "Easy",
    "primaryPattern": "arrays",
    "relatedPatterns": [
      "dynamic-programming-1d"
    ],
    "url": "https://leetcode.com/problems/pascals-triangle-ii/",
    "verified": true,
    "notesSnippet": "Compute row in-place backwards: row[j] += row[j-1].",
    "cppHint": "Backwards loop achieves O(k) space.",
    "pythonHint": "In-place updates."
  },
  {
    "id": "sum-root-to-leaf-numbers",
    "title": "Sum Root to Leaf Numbers",
    "slug": "sum-root-to-leaf-numbers",
    "leetcodeNumber": 129,
    "difficulty": "Medium",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "recursion"
    ],
    "url": "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
    "verified": true,
    "notesSnippet": "DFS passing currSum = currSum * 10 + node->val.",
    "cppHint": "Return currSum when reaching leaf node.",
    "pythonHint": "Tree path accumulation."
  },
  {
    "id": "surrounded-regions",
    "title": "Surrounded Regions",
    "slug": "surrounded-regions",
    "leetcodeNumber": 130,
    "difficulty": "Medium",
    "primaryPattern": "graph-bfs-dfs",
    "relatedPatterns": [
      "matrix"
    ],
    "url": "https://leetcode.com/problems/surrounded-regions/",
    "verified": true,
    "notesSnippet": "BFS/DFS from border 'O's marking them safe; flip remaining 'O's to 'X'.",
    "cppHint": "Border-connected components can never be captured.",
    "pythonHint": "Mark borders '#', then swap."
  },
  {
    "id": "palindrome-partitioning",
    "title": "Palindrome Partitioning",
    "slug": "palindrome-partitioning",
    "leetcodeNumber": 131,
    "difficulty": "Medium",
    "primaryPattern": "backtracking",
    "relatedPatterns": [
      "dynamic-programming-1d"
    ],
    "url": "https://leetcode.com/problems/palindrome-partitioning/",
    "verified": true,
    "notesSnippet": "Backtracking partition points; only recurse if substring s[start..i] is palindrome.",
    "cppHint": "Precompute palindrome table or two-pointer check.",
    "pythonHint": "backtrack(i + 1, path + [s[start:i+1]])."
  },
  {
    "id": "gas-station",
    "title": "Gas Station",
    "slug": "gas-station",
    "leetcodeNumber": 134,
    "difficulty": "Medium",
    "primaryPattern": "greedy",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/gas-station/",
    "verified": true,
    "notesSnippet": "If total gas < total cost, impossible. If tank < 0, reset start = i + 1.",
    "cppHint": "totalSurplus >= 0 check at end.",
    "pythonHint": "Greedy restart invariant."
  },
  {
    "id": "single-number-ii",
    "title": "Single Number II",
    "slug": "single-number-ii",
    "leetcodeNumber": 137,
    "difficulty": "Medium",
    "primaryPattern": "bit-manipulation",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/single-number-ii/",
    "verified": true,
    "notesSnippet": "Count set bits at each bit position modulo 3.",
    "cppHint": "int ones = 0, twos = 0; ones = (ones ^ x) & ~twos; twos = (twos ^ x) & ~ones;",
    "pythonHint": "Bitwise digital logic gate simulation."
  },
  {
    "id": "binary-tree-preorder-traversal",
    "title": "Binary Tree Preorder Traversal",
    "slug": "binary-tree-preorder-traversal",
    "leetcodeNumber": 144,
    "difficulty": "Easy",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "stacks"
    ],
    "url": "https://leetcode.com/problems/binary-tree-preorder-traversal/",
    "verified": true,
    "notesSnippet": "Pre-order: root, left, right. Stack pushes right child then left child.",
    "cppHint": "st.push(root); while (!st.empty()) ...",
    "pythonHint": "Stack traversal."
  },
  {
    "id": "binary-tree-postorder-traversal",
    "title": "Binary Tree Postorder Traversal",
    "slug": "binary-tree-postorder-traversal",
    "leetcodeNumber": 145,
    "difficulty": "Easy",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "stacks"
    ],
    "url": "https://leetcode.com/problems/binary-tree-postorder-traversal/",
    "verified": true,
    "notesSnippet": "Post-order: left, right, root. Reverse of modified pre-order (root, right, left).",
    "cppHint": "Traverse root, right, left then reverse output.",
    "pythonHint": "Two-stack or reversed stack."
  },
  {
    "id": "reverse-words-in-a-string",
    "title": "Reverse Words in a String",
    "slug": "reverse-words-in-a-string",
    "leetcodeNumber": 151,
    "difficulty": "Medium",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "strings"
    ],
    "url": "https://leetcode.com/problems/reverse-words-in-a-string/",
    "verified": true,
    "notesSnippet": "In-place: reverse entire string, reverse each word, clean extra spaces.",
    "cppHint": "Two pointers remove redundant whitespace.",
    "pythonHint": "' '.join(s.split()[::-1])."
  },
  {
    "id": "excel-sheet-column-title",
    "title": "Excel Sheet Column Title",
    "slug": "excel-sheet-column-title",
    "leetcodeNumber": 168,
    "difficulty": "Easy",
    "primaryPattern": "math",
    "relatedPatterns": [
      "strings"
    ],
    "url": "https://leetcode.com/problems/excel-sheet-column-title/",
    "verified": true,
    "notesSnippet": "Base 26 conversion with 1-based indexing: (n - 1) % 26.",
    "cppHint": "n = (n - 1) / 26;",
    "pythonHint": "chr((n-1)%26 + 65)."
  },
  {
    "id": "excel-sheet-column-number",
    "title": "Excel Sheet Column Number",
    "slug": "excel-sheet-column-number",
    "leetcodeNumber": 171,
    "difficulty": "Easy",
    "primaryPattern": "math",
    "relatedPatterns": [
      "strings"
    ],
    "url": "https://leetcode.com/problems/excel-sheet-column-number/",
    "verified": true,
    "notesSnippet": "Base 26 polynomial evaluation: ans = ans * 26 + (c - 'A' + 1).",
    "cppHint": "Linear scan left to right.",
    "pythonHint": "Accumulate base 26."
  },
  {
    "id": "rotate-array",
    "title": "Rotate Array",
    "slug": "rotate-array",
    "leetcodeNumber": 189,
    "difficulty": "Medium",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/rotate-array/",
    "verified": true,
    "notesSnippet": "Triple reverse: reverse entire array, reverse first k, reverse remaining n-k.",
    "cppHint": "k %= n; reverse(nums, 0, n-1); reverse(nums, 0, k-1); reverse(nums, k, n-1);",
    "pythonHint": "O(1) space in-place rotation."
  },
  {
    "id": "reverse-bits",
    "title": "Reverse Bits",
    "slug": "reverse-bits",
    "leetcodeNumber": 190,
    "difficulty": "Easy",
    "primaryPattern": "bit-manipulation",
    "relatedPatterns": [
      "math"
    ],
    "url": "https://leetcode.com/problems/reverse-bits/",
    "verified": true,
    "notesSnippet": "Bitwise shift loop 32 times: res = (res << 1) | (n & 1); n >>= 1.",
    "cppHint": "Loop exactly 32 iterations.",
    "pythonHint": "Binary bit reversal."
  },
  {
    "id": "number-of-1-bits",
    "title": "Number of 1 Bits",
    "slug": "number-of-1-bits",
    "leetcodeNumber": 191,
    "difficulty": "Easy",
    "primaryPattern": "bit-manipulation",
    "relatedPatterns": [
      "math"
    ],
    "url": "https://leetcode.com/problems/number-of-1-bits/",
    "verified": true,
    "notesSnippet": "Brian Kernighan's algorithm: n &= (n - 1) clears lowest set bit.",
    "cppHint": "while (n) { n &= (n - 1); count++; }",
    "pythonHint": "Runs in O(number of 1 bits)."
  },
  {
    "id": "happy-number",
    "title": "Happy Number",
    "slug": "happy-number",
    "leetcodeNumber": 202,
    "difficulty": "Easy",
    "primaryPattern": "fast-slow-pointers",
    "relatedPatterns": [
      "hash-map"
    ],
    "url": "https://leetcode.com/problems/happy-number/",
    "verified": true,
    "notesSnippet": "Fast and slow pointers detecting cycle in sum-of-squares sequence.",
    "cppHint": "slow = getNext(slow); fast = getNext(getNext(fast));",
    "pythonHint": "Floyd's cycle detection applies to sequence."
  },
  {
    "id": "remove-linked-list-elements",
    "title": "Remove Linked List Elements",
    "slug": "remove-linked-list-elements",
    "leetcodeNumber": 203,
    "difficulty": "Easy",
    "primaryPattern": "linked-lists",
    "relatedPatterns": [
      "two-pointers"
    ],
    "url": "https://leetcode.com/problems/remove-linked-list-elements/",
    "verified": true,
    "notesSnippet": "Dummy node before head; if curr->next->val == val, bypass curr->next.",
    "cppHint": "ListNode dummy(0, head);",
    "pythonHint": "Eliminates special case for head removal."
  },
  {
    "id": "isomorphic-strings",
    "title": "Isomorphic Strings",
    "slug": "isomorphic-strings",
    "leetcodeNumber": 205,
    "difficulty": "Easy",
    "primaryPattern": "hash-map",
    "relatedPatterns": [
      "strings"
    ],
    "url": "https://leetcode.com/problems/isomorphic-strings/",
    "verified": true,
    "notesSnippet": "Two hash maps or arrays storing last seen index of characters in s and t.",
    "cppHint": "int m1[256] = {}, m2[256] = {}; if (m1[s[i]] != m2[t[i]]) return false;",
    "pythonHint": "Bidirectional mapping verification."
  },
  {
    "id": "contains-duplicate-ii",
    "title": "Contains Duplicate II",
    "slug": "contains-duplicate-ii",
    "leetcodeNumber": 219,
    "difficulty": "Easy",
    "primaryPattern": "sliding-window",
    "relatedPatterns": [
      "hash-map"
    ],
    "url": "https://leetcode.com/problems/contains-duplicate-ii/",
    "verified": true,
    "notesSnippet": "Sliding window hash set of size k, or hash map tracking last seen index.",
    "cppHint": "if (seen.size() > k) seen.erase(nums[i - k]);",
    "pythonHint": "Maintain size k window."
  },
  {
    "id": "implement-stack-using-queues",
    "title": "Implement Stack using Queues",
    "slug": "implement-stack-using-queues",
    "leetcodeNumber": 225,
    "difficulty": "Easy",
    "primaryPattern": "stacks",
    "relatedPatterns": [
      "design"
    ],
    "url": "https://leetcode.com/problems/implement-stack-using-queues/",
    "verified": true,
    "notesSnippet": "Single queue: on push, rotate previous elements behind new element.",
    "cppHint": "q.push(x); for (int i = 0; i < q.size() - 1; ++i) { q.push(q.front()); q.pop(); }",
    "pythonHint": "Makes pop O(1)."
  },
  {
    "id": "summary-ranges",
    "title": "Summary Ranges",
    "slug": "summary-ranges",
    "leetcodeNumber": 228,
    "difficulty": "Easy",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/summary-ranges/",
    "verified": true,
    "notesSnippet": "Two pointers scanning contiguous ranges where nums[i+1] == nums[i] + 1.",
    "cppHint": "Check if start == end for single element formatting.",
    "pythonHint": "Linear range collection."
  },
  {
    "id": "power-of-two",
    "title": "Power of Two",
    "slug": "power-of-two",
    "leetcodeNumber": 231,
    "difficulty": "Easy",
    "primaryPattern": "bit-manipulation",
    "relatedPatterns": [
      "math"
    ],
    "url": "https://leetcode.com/problems/power-of-two/",
    "verified": true,
    "notesSnippet": "n > 0 && (n & ((long long)n - 1)) == 0.",
    "cppHint": "Power of two has exactly one set bit.",
    "pythonHint": "n > 0 and (n & (n - 1)) == 0."
  },
  {
    "id": "binary-tree-paths",
    "title": "Binary Tree Paths",
    "slug": "binary-tree-paths",
    "leetcodeNumber": 257,
    "difficulty": "Easy",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "recursion"
    ],
    "url": "https://leetcode.com/problems/binary-tree-paths/",
    "verified": true,
    "notesSnippet": "DFS collecting root-to-leaf paths formatted with '->'.",
    "cppHint": "Append '->' only if not leaf.",
    "pythonHint": "path + '->' recursion."
  },
  {
    "id": "ugly-number",
    "title": "Ugly Number",
    "slug": "ugly-number",
    "leetcodeNumber": 263,
    "difficulty": "Easy",
    "primaryPattern": "math",
    "relatedPatterns": [
      "recursion"
    ],
    "url": "https://leetcode.com/problems/ugly-number/",
    "verified": true,
    "notesSnippet": "Divide by 2, 3, 5 while divisible; check if remainder is 1.",
    "cppHint": "for (int p : {2, 3, 5}) while (n % p == 0) n /= p; return n == 1;",
    "pythonHint": "Division loop."
  },
  {
    "id": "first-bad-version",
    "title": "First Bad Version",
    "slug": "first-bad-version",
    "leetcodeNumber": 278,
    "difficulty": "Easy",
    "primaryPattern": "binary-search",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/first-bad-version/",
    "verified": true,
    "notesSnippet": "Binary search: if isBadVersion(mid) high = mid, else low = mid + 1.",
    "cppHint": "while (l < r) mid = l + (r-l)/2; if (isBad(mid)) r = mid; else l = mid + 1;",
    "pythonHint": "Standard lower bound pattern."
  },
  {
    "id": "word-pattern",
    "title": "Word Pattern",
    "slug": "word-pattern",
    "leetcodeNumber": 290,
    "difficulty": "Easy",
    "primaryPattern": "hash-map",
    "relatedPatterns": [
      "strings"
    ],
    "url": "https://leetcode.com/problems/word-pattern/",
    "verified": true,
    "notesSnippet": "Bijection between pattern characters and words in string.",
    "cppHint": "Two maps or map + set for one-to-one mapping.",
    "pythonHint": "zip_longest or double dict."
  },
  {
    "id": "range-sum-query-immutable",
    "title": "Range Sum Query - Immutable",
    "slug": "range-sum-query-immutable",
    "leetcodeNumber": 303,
    "difficulty": "Easy",
    "primaryPattern": "prefix-sum",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/range-sum-query-immutable/",
    "verified": true,
    "notesSnippet": "Precompute prefix sum array: sumRange(i, j) = prefix[j+1] - prefix[i].",
    "cppHint": "prefix.resize(n + 1, 0); for (int i = 0; i < n; ++i) prefix[i+1] = prefix[i] + nums[i];",
    "pythonHint": "O(1) query time."
  },
  {
    "id": "counting-bits",
    "title": "Counting Bits",
    "slug": "counting-bits",
    "leetcodeNumber": 338,
    "difficulty": "Easy",
    "primaryPattern": "bit-manipulation",
    "relatedPatterns": [
      "dynamic-programming-1d"
    ],
    "url": "https://leetcode.com/problems/counting-bits/",
    "verified": true,
    "notesSnippet": "dp[i] = dp[i >> 1] + (i & 1);",
    "cppHint": "dp[i] = dp[i & (i - 1)] + 1 also works.",
    "pythonHint": "O(N) single pass."
  },
  {
    "id": "reverse-string",
    "title": "Reverse String",
    "slug": "reverse-string",
    "leetcodeNumber": 344,
    "difficulty": "Easy",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "strings"
    ],
    "url": "https://leetcode.com/problems/reverse-string/",
    "verified": true,
    "notesSnippet": "Two pointers swapping from ends until left >= right.",
    "cppHint": "swap(s[l++], s[r--]);",
    "pythonHint": "s.reverse() in-place."
  },
  {
    "id": "reverse-vowels-of-a-string",
    "title": "Reverse Vowels of a String",
    "slug": "reverse-vowels-of-a-string",
    "leetcodeNumber": 345,
    "difficulty": "Easy",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "strings"
    ],
    "url": "https://leetcode.com/problems/reverse-vowels-of-a-string/",
    "verified": true,
    "notesSnippet": "Two pointers advancing until both point to vowels, then swap.",
    "cppHint": "Use string lookup 'aeiouAEIOU'.",
    "pythonHint": "Two pointer vowel swap."
  },
  {
    "id": "intersection-of-two-arrays",
    "title": "Intersection of Two Arrays",
    "slug": "intersection-of-two-arrays",
    "leetcodeNumber": 349,
    "difficulty": "Easy",
    "primaryPattern": "hash-map",
    "relatedPatterns": [
      "two-pointers"
    ],
    "url": "https://leetcode.com/problems/intersection-of-two-arrays/",
    "verified": true,
    "notesSnippet": "Hash set of first array, filter elements of second array present in set.",
    "cppHint": "unordered_set<int> s(nums1.begin(), nums1.end());",
    "pythonHint": "set(nums1) & set(nums2)."
  },
  {
    "id": "intersection-of-two-arrays-ii",
    "title": "Intersection of Two Arrays II",
    "slug": "intersection-of-two-arrays-ii",
    "leetcodeNumber": 350,
    "difficulty": "Easy",
    "primaryPattern": "hash-map",
    "relatedPatterns": [
      "two-pointers"
    ],
    "url": "https://leetcode.com/problems/intersection-of-two-arrays-ii/",
    "verified": true,
    "notesSnippet": "Frequency hash map of nums1; decrement frequency when seen in nums2.",
    "cppHint": "unordered_map<int, int> count; if (count[x]-- > 0) res.push_back(x);",
    "pythonHint": "Two pointers if already sorted."
  },
  {
    "id": "valid-perfect-square",
    "title": "Valid Perfect Square",
    "slug": "valid-perfect-square",
    "leetcodeNumber": 367,
    "difficulty": "Easy",
    "primaryPattern": "binary-search-answer",
    "relatedPatterns": [
      "math"
    ],
    "url": "https://leetcode.com/problems/valid-perfect-square/",
    "verified": true,
    "notesSnippet": "Binary search in range [1, num] checking if mid * mid == num.",
    "cppHint": "Use long long to prevent mid * mid overflow.",
    "pythonHint": "Integer binary search."
  },
  {
    "id": "ransom-note",
    "title": "Ransom Note",
    "slug": "ransom-note",
    "leetcodeNumber": 383,
    "difficulty": "Easy",
    "primaryPattern": "hash-map",
    "relatedPatterns": [
      "strings"
    ],
    "url": "https://leetcode.com/problems/ransom-note/",
    "verified": true,
    "notesSnippet": "Character frequency array of size 26 for magazine; decrement for ransomNote.",
    "cppHint": "int counts[26] = {}; for (char c : magazine) counts[c - 'a']++; for (char c : ransomNote) if (--counts[c - 'a'] < 0) return false;",
    "pythonHint": "Counter(ransomNote) <= Counter(magazine)."
  },
  {
    "id": "first-unique-character-in-a-string",
    "title": "First Unique Character in a String",
    "slug": "first-unique-character-in-a-string",
    "leetcodeNumber": 387,
    "difficulty": "Easy",
    "primaryPattern": "hash-map",
    "relatedPatterns": [
      "strings"
    ],
    "url": "https://leetcode.com/problems/first-unique-character-in-a-string/",
    "verified": true,
    "notesSnippet": "Frequency count pass, followed by scan to find first index with count == 1.",
    "cppHint": "int freq[26] = {}; for (char c : s) freq[c - 'a']++; for (int i = 0; i < s.size(); ++i) if (freq[s[i] - 'a'] == 1) return i;",
    "pythonHint": "Two pass O(N) time."
  },
  {
    "id": "find-the-difference",
    "title": "Find the Difference",
    "slug": "find-the-difference",
    "leetcodeNumber": 389,
    "difficulty": "Easy",
    "primaryPattern": "bit-manipulation",
    "relatedPatterns": [
      "hash-map"
    ],
    "url": "https://leetcode.com/problems/find-the-difference/",
    "verified": true,
    "notesSnippet": "XOR all characters of s and t; remaining char is the added difference.",
    "cppHint": "char res = 0; for (char c : s) res ^= c; for (char c : t) res ^= c; return res;",
    "pythonHint": "chr(reduce(xor, map(ord, s + t)))."
  },
  {
    "id": "is-subsequence",
    "title": "Is Subsequence",
    "slug": "is-subsequence",
    "leetcodeNumber": 392,
    "difficulty": "Easy",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "dynamic-programming-1d"
    ],
    "url": "https://leetcode.com/problems/is-subsequence/",
    "verified": true,
    "notesSnippet": "Two pointers: pointer i for s, pointer j for t. Check if i reaches s.size().",
    "cppHint": "while (i < s.size() && j < t.size()) if (s[i] == t[j++]) i++;",
    "pythonHint": "Greedy character match."
  },
  {
    "id": "sum-of-left-leaves",
    "title": "Sum of Left Leaves",
    "slug": "sum-of-left-leaves",
    "leetcodeNumber": 404,
    "difficulty": "Easy",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "recursion"
    ],
    "url": "https://leetcode.com/problems/sum-of-left-leaves/",
    "verified": true,
    "notesSnippet": "DFS passing isLeft boolean flag; accumulate if isLeft and isLeaf.",
    "cppHint": "if (isLeft && !node->left && !node->right) return node->val;",
    "pythonHint": "Tree branch recursion."
  },
  {
    "id": "longest-palindrome",
    "title": "Longest Palindrome",
    "slug": "longest-palindrome",
    "leetcodeNumber": 409,
    "difficulty": "Easy",
    "primaryPattern": "hash-map",
    "relatedPatterns": [
      "greedy"
    ],
    "url": "https://leetcode.com/problems/longest-palindrome/",
    "verified": true,
    "notesSnippet": "Add all even frequencies; add (odd - 1); add 1 if any odd exists for center.",
    "cppHint": "int length = 0; bool hasOdd = false; for (auto& [c, count] : map) { length += count / 2 * 2; if (count % 2) hasOdd = true; } return length + hasOdd;",
    "pythonHint": "Greedy character pairing."
  },
  {
    "id": "find-all-numbers-disappeared-in-an-array",
    "title": "Find All Numbers Disappeared in an Array",
    "slug": "find-all-numbers-disappeared-in-an-array",
    "leetcodeNumber": 448,
    "difficulty": "Easy",
    "primaryPattern": "arrays",
    "relatedPatterns": [
      "hash-map"
    ],
    "url": "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/",
    "verified": true,
    "notesSnippet": "Negate value at index abs(nums[i]) - 1 to mark presence in O(1) extra space.",
    "cppHint": "int idx = abs(nums[i]) - 1; if (nums[idx] > 0) nums[idx] = -nums[idx];",
    "pythonHint": "In-place sign marking."
  },
  {
    "id": "assign-cookies",
    "title": "Assign Cookies",
    "slug": "assign-cookies",
    "leetcodeNumber": 455,
    "difficulty": "Easy",
    "primaryPattern": "greedy",
    "relatedPatterns": [
      "two-pointers"
    ],
    "url": "https://leetcode.com/problems/assign-cookies/",
    "verified": true,
    "notesSnippet": "Sort greed factors and cookie sizes; satisfy smallest greed with smallest viable cookie.",
    "cppHint": "sort(g.begin(), g.end()); sort(s.begin(), s.end()); while (i < g.size() && j < s.size()) if (s[j++] >= g[i]) i++;",
    "pythonHint": "Greedy two pointers."
  },
  {
    "id": "hamming-distance",
    "title": "Hamming Distance",
    "slug": "hamming-distance",
    "leetcodeNumber": 461,
    "difficulty": "Easy",
    "primaryPattern": "bit-manipulation",
    "relatedPatterns": [
      "math"
    ],
    "url": "https://leetcode.com/problems/hamming-distance/",
    "verified": true,
    "notesSnippet": "Count number of set bits in x ^ y using __builtin_popcount or n & (n - 1).",
    "cppHint": "return __builtin_popcount(x ^ y);",
    "pythonHint": "bin(x ^ y).count('1')."
  },
  {
    "id": "island-perimeter",
    "title": "Island Perimeter",
    "slug": "island-perimeter",
    "leetcodeNumber": 463,
    "difficulty": "Easy",
    "primaryPattern": "matrix",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/island-perimeter/",
    "verified": true,
    "notesSnippet": "Each land cell contributes 4 sides; subtract 2 for each adjacent land neighbor.",
    "cppHint": "perimeter += 4; if (r > 0 && grid[r-1][c]) perimeter -= 2; if (c > 0 && grid[r][c-1]) perimeter -= 2;",
    "pythonHint": "Scan top and left neighbors."
  },
  {
    "id": "number-complement",
    "title": "Number Complement",
    "slug": "number-complement",
    "leetcodeNumber": 476,
    "difficulty": "Easy",
    "primaryPattern": "bit-manipulation",
    "relatedPatterns": [
      "math"
    ],
    "url": "https://leetcode.com/problems/number-complement/",
    "verified": true,
    "notesSnippet": "Create mask of all 1s with same bit length as num: mask ^ num.",
    "cppHint": "unsigned mask = ~0; while (mask & num) mask <<= 1; return ~mask ^ num;",
    "pythonHint": "Bitwise inversion with mask."
  },
  {
    "id": "max-consecutive-ones",
    "title": "Max Consecutive Ones",
    "slug": "max-consecutive-ones",
    "leetcodeNumber": 485,
    "difficulty": "Easy",
    "primaryPattern": "arrays",
    "relatedPatterns": [
      "two-pointers"
    ],
    "url": "https://leetcode.com/problems/max-consecutive-ones/",
    "verified": true,
    "notesSnippet": "Single pass tracking current streak of 1s and maximum streak.",
    "cppHint": "curr = (x == 1) ? curr + 1 : 0; maxCount = max(maxCount, curr);",
    "pythonHint": "Linear counter."
  },
  {
    "id": "next-greater-element-i",
    "title": "Next Greater Element I",
    "slug": "next-greater-element-i",
    "leetcodeNumber": 496,
    "difficulty": "Easy",
    "primaryPattern": "monotonic-stack",
    "relatedPatterns": [
      "hash-map"
    ],
    "url": "https://leetcode.com/problems/next-greater-element-i/",
    "verified": true,
    "notesSnippet": "Monotonic decreasing stack on nums2; map each number to its next greater element.",
    "cppHint": "unordered_map<int, int> nextG; for (int x : nums2) { while (!st.empty() && x > st.top()) { nextG[st.top()] = x; st.pop(); } st.push(x); }",
    "pythonHint": "Map lookup for nums1."
  },
  {
    "id": "fibonacci-number",
    "title": "Fibonacci Number",
    "slug": "fibonacci-number",
    "leetcodeNumber": 509,
    "difficulty": "Easy",
    "primaryPattern": "dynamic-programming-1d",
    "relatedPatterns": [
      "recursion"
    ],
    "url": "https://leetcode.com/problems/fibonacci-number/",
    "verified": true,
    "notesSnippet": "Iterative rolling variables: a, b = b, a + b.",
    "cppHint": "int a = 0, b = 1; for (int i = 2; i <= n; ++i) { int c = a + b; a = b; b = c; }",
    "pythonHint": "O(1) space."
  },
  {
    "id": "reverse-string-ii",
    "title": "Reverse String II",
    "slug": "reverse-string-ii",
    "leetcodeNumber": 541,
    "difficulty": "Easy",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "strings"
    ],
    "url": "https://leetcode.com/problems/reverse-string-ii/",
    "verified": true,
    "notesSnippet": "Jump by 2k: reverse min(i + k, n) characters.",
    "cppHint": "for (int i = 0; i < n; i += 2 * k) reverse(s.begin() + i, s.begin() + min(i + k, n));",
    "pythonHint": "Step by 2k."
  },
  {
    "id": "reverse-words-in-a-string-iii",
    "title": "Reverse Words in a String III",
    "slug": "reverse-words-in-a-string-iii",
    "leetcodeNumber": 557,
    "difficulty": "Easy",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "strings"
    ],
    "url": "https://leetcode.com/problems/reverse-words-in-a-string-iii/",
    "verified": true,
    "notesSnippet": "Two pointers find space delimiter; reverse individual word in-place.",
    "cppHint": "reverse(s.begin() + start, s.begin() + end);",
    "pythonHint": "' '.join(w[::-1] for w in s.split(' '))."
  },
  {
    "id": "longest-harmonious-subsequence",
    "title": "Longest Harmonious Subsequence",
    "slug": "longest-harmonious-subsequence",
    "leetcodeNumber": 594,
    "difficulty": "Easy",
    "primaryPattern": "hash-map",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/longest-harmonious-subsequence/",
    "verified": true,
    "notesSnippet": "Frequency map: check if map.count(x + 1), then ans = max(ans, count[x] + count[x+1]).",
    "cppHint": "unordered_map<int, int> count; for (auto& [x, c] : count) if (count.count(x + 1)) ans = max(ans, c + count[x + 1]);",
    "pythonHint": "Hash map pair evaluation."
  },
  {
    "id": "can-place-flowers",
    "title": "Can Place Flowers",
    "slug": "can-place-flowers",
    "leetcodeNumber": 605,
    "difficulty": "Easy",
    "primaryPattern": "greedy",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/can-place-flowers/",
    "verified": true,
    "notesSnippet": "Check if current, left, and right plots are all 0; plant flower and decrement n.",
    "cppHint": "bool leftEmpty = (i == 0 || flowerbed[i-1] == 0); bool rightEmpty = (i == size - 1 || flowerbed[i+1] == 0);",
    "pythonHint": "Greedy early return if n <= 0."
  },
  {
    "id": "merge-two-binary-trees",
    "title": "Merge Two Binary Trees",
    "slug": "merge-two-binary-trees",
    "leetcodeNumber": 617,
    "difficulty": "Easy",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "recursion"
    ],
    "url": "https://leetcode.com/problems/merge-two-binary-trees/",
    "verified": true,
    "notesSnippet": "Add overlapping node values; recursively merge left and right subtrees.",
    "cppHint": "if (!t1) return t2; if (!t2) return t1; t1->val += t2->val; t1->left = merge(t1->left, t2->left);",
    "pythonHint": "In-place merge into t1."
  },
  {
    "id": "average-of-levels-in-binary-tree",
    "title": "Average of Levels in Binary Tree",
    "slug": "average-of-levels-in-binary-tree",
    "leetcodeNumber": 637,
    "difficulty": "Easy",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "queue"
    ],
    "url": "https://leetcode.com/problems/average-of-levels-in-binary-tree/",
    "verified": true,
    "notesSnippet": "BFS queue: calculate sum of node values at each level divided by levelSize.",
    "cppHint": "double sum = 0; for (int i = 0; i < sz; ++i) sum += q.front()->val;",
    "pythonHint": "Watch out for integer overflow on sum; use double."
  },
  {
    "id": "maximum-average-subarray-i",
    "title": "Maximum Average Subarray I",
    "slug": "maximum-average-subarray-i",
    "leetcodeNumber": 643,
    "difficulty": "Easy",
    "primaryPattern": "sliding-window",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/maximum-average-subarray-i/",
    "verified": true,
    "notesSnippet": "Fixed window of size k: add nums[i], subtract nums[i-k], track max sum.",
    "cppHint": "double maxAvg = (double)maxSum / k;",
    "pythonHint": "Fixed sliding window."
  },
  {
    "id": "longest-continuous-increasing-subsequence",
    "title": "Longest Continuous Increasing Subsequence",
    "slug": "longest-continuous-increasing-subsequence",
    "leetcodeNumber": 674,
    "difficulty": "Easy",
    "primaryPattern": "arrays",
    "relatedPatterns": [
      "two-pointers"
    ],
    "url": "https://leetcode.com/problems/longest-continuous-increasing-subsequence/",
    "verified": true,
    "notesSnippet": "Track anchor pointer where nums[i] <= nums[i-1]; maxLen = max(maxLen, i - anchor + 1).",
    "cppHint": "if (i > 0 && nums[i] <= nums[i-1]) anchor = i;",
    "pythonHint": "Contiguous increasing segment."
  },
  {
    "id": "valid-palindrome-ii",
    "title": "Valid Palindrome II",
    "slug": "valid-palindrome-ii",
    "leetcodeNumber": 680,
    "difficulty": "Easy",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "strings"
    ],
    "url": "https://leetcode.com/problems/valid-palindrome-ii/",
    "verified": true,
    "notesSnippet": "Two pointers: on mismatch s[l] != s[r], check if isPal(l+1, r) or isPal(l, r-1).",
    "cppHint": "Helper function isPalindrome(s, l, r).",
    "pythonHint": "At most one deletion allowed."
  },
  {
    "id": "baseball-game",
    "title": "Baseball Game",
    "slug": "baseball-game",
    "leetcodeNumber": 682,
    "difficulty": "Easy",
    "primaryPattern": "stacks",
    "relatedPatterns": [
      "design"
    ],
    "url": "https://leetcode.com/problems/baseball-game/",
    "verified": true,
    "notesSnippet": "Stack simulates operations: '+', 'D', 'C', integer.",
    "cppHint": "vector<int> record; switch on operation.",
    "pythonHint": "Stack evaluation."
  },
  {
    "id": "search-in-a-binary-search-tree",
    "title": "Search in a Binary Search Tree",
    "slug": "search-in-a-binary-search-tree",
    "leetcodeNumber": 700,
    "difficulty": "Easy",
    "primaryPattern": "binary-search-trees",
    "relatedPatterns": [
      "recursion"
    ],
    "url": "https://leetcode.com/problems/search-in-a-binary-search-tree/",
    "verified": true,
    "notesSnippet": "If val < root->val search left, if val > root->val search right, else return root.",
    "cppHint": "while (root && val != root->val) root = val < root->val ? root->left : root->right;",
    "pythonHint": "Iterative O(1) space search."
  },
  {
    "id": "insert-into-a-binary-search-tree",
    "title": "Insert into a Binary Search Tree",
    "slug": "insert-into-a-binary-search-tree",
    "leetcodeNumber": 701,
    "difficulty": "Medium",
    "primaryPattern": "binary-search-trees",
    "relatedPatterns": [
      "recursion"
    ],
    "url": "https://leetcode.com/problems/insert-into-a-binary-search-tree/",
    "verified": true,
    "notesSnippet": "Traverse down BST; attach new TreeNode(val) to appropriate null branch.",
    "cppHint": "if (!root) return new TreeNode(val);",
    "pythonHint": "Standard BST insertion."
  },
  {
    "id": "kth-largest-element-in-a-stream",
    "title": "Kth Largest Element in a Stream",
    "slug": "kth-largest-element-in-a-stream",
    "leetcodeNumber": 703,
    "difficulty": "Easy",
    "primaryPattern": "top-k-elements-heap",
    "relatedPatterns": [
      "design"
    ],
    "url": "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
    "verified": true,
    "notesSnippet": "Min-heap of size K: push incoming elements, pop if size > K, return top().",
    "cppHint": "priority_queue<int, vector<int>, greater<int>> minH;",
    "pythonHint": "Kth largest is always minH.top()."
  },
  {
    "id": "design-hashset",
    "title": "Design HashSet",
    "slug": "design-hashset",
    "leetcodeNumber": 705,
    "difficulty": "Easy",
    "primaryPattern": "hash-map",
    "relatedPatterns": [
      "design"
    ],
    "url": "https://leetcode.com/problems/design-hashset/",
    "verified": true,
    "notesSnippet": "Chaining with vector of lists or buckets with prime size.",
    "cppHint": "vector<list<int>> table(1009);",
    "pythonHint": "Simple hash bucket array."
  },
  {
    "id": "design-hashmap",
    "title": "Design HashMap",
    "slug": "design-hashmap",
    "leetcodeNumber": 706,
    "difficulty": "Easy",
    "primaryPattern": "hash-map",
    "relatedPatterns": [
      "design"
    ],
    "url": "https://leetcode.com/problems/design-hashmap/",
    "verified": true,
    "notesSnippet": "Chaining with list of pairs (key, value) in prime-sized buckets.",
    "cppHint": "vector<list<pair<int,int>>> buckets(1009);",
    "pythonHint": "Bucket search and update."
  },
  {
    "id": "find-pivot-index",
    "title": "Find Pivot Index",
    "slug": "find-pivot-index",
    "leetcodeNumber": 724,
    "difficulty": "Easy",
    "primaryPattern": "prefix-sum",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/find-pivot-index/",
    "verified": true,
    "notesSnippet": "totalSum = sum(nums); leftSum = 0; if (leftSum == totalSum - leftSum - nums[i]) return i.",
    "cppHint": "Prefix sum algebraic identity.",
    "pythonHint": "O(N) time and O(1) space."
  },
  {
    "id": "flood-fill",
    "title": "Flood Fill",
    "slug": "flood-fill",
    "leetcodeNumber": 733,
    "difficulty": "Easy",
    "primaryPattern": "graph-bfs-dfs",
    "relatedPatterns": [
      "matrix"
    ],
    "url": "https://leetcode.com/problems/flood-fill/",
    "verified": true,
    "notesSnippet": "DFS/BFS from starting pixel (sr, sc); replace initial color with newColor.",
    "cppHint": "if (color == newColor) return image; avoids infinite recursion.",
    "pythonHint": "Standard 4-directional DFS."
  },
  {
    "id": "min-cost-climbing-stairs",
    "title": "Min Cost Climbing Stairs",
    "slug": "min-cost-climbing-stairs",
    "leetcodeNumber": 746,
    "difficulty": "Easy",
    "primaryPattern": "dynamic-programming-1d",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/min-cost-climbing-stairs/",
    "verified": true,
    "notesSnippet": "dp[i] = cost[i] + min(dp[i-1], dp[i-2]); return min(dp[n-1], dp[n-2]).",
    "cppHint": "Two rolling variables cost1, cost2.",
    "pythonHint": "Space optimized DP."
  },
  {
    "id": "jewels-and-stones",
    "title": "Jewels and Stones",
    "slug": "jewels-and-stones",
    "leetcodeNumber": 771,
    "difficulty": "Easy",
    "primaryPattern": "hash-map",
    "relatedPatterns": [
      "strings"
    ],
    "url": "https://leetcode.com/problems/jewels-and-stones/",
    "verified": true,
    "notesSnippet": "Hash set of jewels; count stones present in set.",
    "cppHint": "unordered_set<char> jewelSet(jewels.begin(), jewels.end());",
    "pythonHint": "sum(s in jewels for s in stones)."
  },
  {
    "id": "backspace-string-compare",
    "title": "Backspace String Compare",
    "slug": "backspace-string-compare",
    "leetcodeNumber": 844,
    "difficulty": "Easy",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "stacks"
    ],
    "url": "https://leetcode.com/problems/backspace-string-compare/",
    "verified": true,
    "notesSnippet": "Two pointers scanning from right to left tracking skip counts, or stack simulation.",
    "cppHint": "Two pointer from right achieves O(1) space.",
    "pythonHint": "stack simulate string building."
  },
  {
    "id": "middle-of-the-linked-list",
    "title": "Middle of the Linked List",
    "slug": "middle-of-the-linked-list",
    "leetcodeNumber": 876,
    "difficulty": "Easy",
    "primaryPattern": "fast-slow-pointers",
    "relatedPatterns": [
      "linked-lists"
    ],
    "url": "https://leetcode.com/problems/middle-of-the-linked-list/",
    "verified": true,
    "notesSnippet": "Fast advances 2, slow advances 1; when fast hits end, slow is at middle.",
    "cppHint": "while (fast && fast->next) { slow = slow->next; fast = fast->next->next; } return slow;",
    "pythonHint": "Floyd's midpoint primitive."
  },
  {
    "id": "monotonic-array",
    "title": "Monotonic Array",
    "slug": "monotonic-array",
    "leetcodeNumber": 896,
    "difficulty": "Easy",
    "primaryPattern": "arrays",
    "relatedPatterns": [
      "two-pointers"
    ],
    "url": "https://leetcode.com/problems/monotonic-array/",
    "verified": true,
    "notesSnippet": "Single pass checking if both increasing and decreasing flags can remain true.",
    "cppHint": "bool inc = true, dec = true; if (nums[i] < nums[i-1]) inc = false; if (nums[i] > nums[i-1]) dec = false;",
    "pythonHint": "Return inc || dec."
  },
  {
    "id": "sort-array-by-parity",
    "title": "Sort Array By Parity",
    "slug": "sort-array-by-parity",
    "leetcodeNumber": 905,
    "difficulty": "Easy",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/sort-array-by-parity/",
    "verified": true,
    "notesSnippet": "Two pointers: swap evens to front and odds to back.",
    "cppHint": "while (l < r) if (nums[l] % 2 > nums[r] % 2) swap(nums[l], nums[r]);",
    "pythonHint": "Two pointer partition."
  },
  {
    "id": "reverse-only-letters",
    "title": "Reverse Only Letters",
    "slug": "reverse-only-letters",
    "leetcodeNumber": 917,
    "difficulty": "Easy",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "strings"
    ],
    "url": "https://leetcode.com/problems/reverse-only-letters/",
    "verified": true,
    "notesSnippet": "Two pointers skipping non-letters (isalpha check) and swapping.",
    "cppHint": "while (l < r && !isalpha(s[l])) l++; while (l < r && !isalpha(s[r])) r--;",
    "pythonHint": "In-place letter reversal."
  },
  {
    "id": "sort-array-by-parity-ii",
    "title": "Sort Array By Parity II",
    "slug": "sort-array-by-parity-ii",
    "leetcodeNumber": 922,
    "difficulty": "Easy",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/sort-array-by-parity-ii/",
    "verified": true,
    "notesSnippet": "Two pointers: one at even index 0, one at odd index 1; find mismatched and swap.",
    "cppHint": "while (i < n && nums[i] % 2 == 0) i += 2; while (j < n && nums[j] % 2 == 1) j += 2; swap(nums[i], nums[j]);",
    "pythonHint": "Dual index traversal."
  },
  {
    "id": "range-sum-of-bst",
    "title": "Range Sum of BST",
    "slug": "range-sum-of-bst",
    "leetcodeNumber": 938,
    "difficulty": "Easy",
    "primaryPattern": "binary-search-trees",
    "relatedPatterns": [
      "recursion"
    ],
    "url": "https://leetcode.com/problems/range-sum-of-bst/",
    "verified": true,
    "notesSnippet": "DFS pruning: if node->val < low search right, if node->val > high search left.",
    "cppHint": "Prune subtrees outside [low, high] range.",
    "pythonHint": "BST range query."
  },
  {
    "id": "valid-mountain-array",
    "title": "Valid Mountain Array",
    "slug": "valid-mountain-array",
    "leetcodeNumber": 941,
    "difficulty": "Easy",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/valid-mountain-array/",
    "verified": true,
    "notesSnippet": "Walk up strictly increasing, walk down strictly decreasing. Peak cannot be first or last.",
    "cppHint": "while (i + 1 < n && nums[i] < nums[i+1]) i++; if (i == 0 || i == n - 1) return false;",
    "pythonHint": "Two climbers meeting at peak."
  },
  {
    "id": "univalued-binary-tree",
    "title": "Univalued Binary Tree",
    "slug": "univalued-binary-tree",
    "leetcodeNumber": 965,
    "difficulty": "Easy",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "recursion"
    ],
    "url": "https://leetcode.com/problems/univalued-binary-tree/",
    "verified": true,
    "notesSnippet": "DFS checking all nodes equal root->val.",
    "cppHint": "if (!root) return true; if (root->val != val) return false;",
    "pythonHint": "All node values match."
  },
  {
    "id": "squares-of-a-sorted-array",
    "title": "Squares of a Sorted Array",
    "slug": "squares-of-a-sorted-array",
    "leetcodeNumber": 977,
    "difficulty": "Easy",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/squares-of-a-sorted-array/",
    "verified": true,
    "notesSnippet": "Two pointers from ends: largest absolute value squared placed from back of result array.",
    "cppHint": "int l = 0, r = n - 1, p = n - 1; while (l <= r) ...",
    "pythonHint": "O(N) time without sorting."
  },
  {
    "id": "cousins-in-binary-tree",
    "title": "Cousins in Binary Tree",
    "slug": "cousins-in-binary-tree",
    "leetcodeNumber": 993,
    "difficulty": "Easy",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "queue"
    ],
    "url": "https://leetcode.com/problems/cousins-in-binary-tree/",
    "verified": true,
    "notesSnippet": "Same depth but different parents; BFS level order tracking (node, parent).",
    "cppHint": "Track depth and parent of x and y.",
    "pythonHint": "Level order cousin check."
  },
  {
    "id": "find-common-characters",
    "title": "Find Common Characters",
    "slug": "find-common-characters",
    "leetcodeNumber": 1002,
    "difficulty": "Easy",
    "primaryPattern": "hash-map",
    "relatedPatterns": [
      "strings"
    ],
    "url": "https://leetcode.com/problems/find-common-characters/",
    "verified": true,
    "notesSnippet": "Track minimum frequency of each character across all words.",
    "cppHint": "vector<int> minFreq(26, INT_MAX); for (auto& w : words) ...",
    "pythonHint": "Element-wise minimum frequency."
  },
  {
    "id": "remove-outermost-parentheses",
    "title": "Remove Outermost Parentheses",
    "slug": "remove-outermost-parentheses",
    "leetcodeNumber": 1021,
    "difficulty": "Easy",
    "primaryPattern": "stacks",
    "relatedPatterns": [
      "strings"
    ],
    "url": "https://leetcode.com/problems/remove-outermost-parentheses/",
    "verified": true,
    "notesSnippet": "Track balance count: only append '(' if balance > 0; only append ')' if balance > 1.",
    "cppHint": "int opened = 0; if (c == '(' && opened++ > 0) res += c; if (c == ')' && opened-- > 1) res += c;",
    "pythonHint": "Balance primitive."
  },
  {
    "id": "remove-all-adjacent-duplicates-in-string",
    "title": "Remove All Adjacent Duplicates In String",
    "slug": "remove-all-adjacent-duplicates-in-string",
    "leetcodeNumber": 1047,
    "difficulty": "Easy",
    "primaryPattern": "stacks",
    "relatedPatterns": [
      "strings"
    ],
    "url": "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/",
    "verified": true,
    "notesSnippet": "String as stack: if c == st.back() st.pop_back(), else st.push_back(c).",
    "cppHint": "string res; for (char c : s) if (!res.empty() && res.back() == c) res.pop_back(); else res.push_back(c);",
    "pythonHint": "String acts as stack."
  },
  {
    "id": "height-checker",
    "title": "Height Checker",
    "slug": "height-checker",
    "leetcodeNumber": 1051,
    "difficulty": "Easy",
    "primaryPattern": "sorting",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/height-checker/",
    "verified": true,
    "notesSnippet": "Sort expected heights and count mismatch indices.",
    "cppHint": "vector<int> expected = heights; sort(expected.begin(), expected.end());",
    "pythonHint": "Compare with sorted copy."
  },
  {
    "id": "relative-sort-array",
    "title": "Relative Sort Array",
    "slug": "relative-sort-array",
    "leetcodeNumber": 1122,
    "difficulty": "Easy",
    "primaryPattern": "sorting",
    "relatedPatterns": [
      "hash-map"
    ],
    "url": "https://leetcode.com/problems/relative-sort-array/",
    "verified": true,
    "notesSnippet": "Counting sort / frequency map: place elements in order of arr2, then sort remaining.",
    "cppHint": "int count[1001] = {}; for (int x : arr1) count[x]++;",
    "pythonHint": "Counting sort handles constraint easily."
  },
  {
    "id": "unique-number-of-occurrences",
    "title": "Unique Number of Occurrences",
    "slug": "unique-number-of-occurrences",
    "leetcodeNumber": 1207,
    "difficulty": "Easy",
    "primaryPattern": "hash-map",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/unique-number-of-occurrences/",
    "verified": true,
    "notesSnippet": "Frequency map: check if number of unique frequencies equals map size.",
    "cppHint": "unordered_map<int, int> count; unordered_set<int> freqs; for (auto& [k, v] : count) if (!freqs.insert(v).second) return false;",
    "pythonHint": "Set insertion test."
  },
  {
    "id": "find-numbers-with-even-number-of-digits",
    "title": "Find Numbers with Even Number of Digits",
    "slug": "find-numbers-with-even-number-of-digits",
    "leetcodeNumber": 1295,
    "difficulty": "Easy",
    "primaryPattern": "math",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/find-numbers-with-even-number-of-digits/",
    "verified": true,
    "notesSnippet": "Check if (int)log10(num) + 1 is even, or string length is even.",
    "cppHint": "int digits = (int)log10(x) + 1; count += (digits % 2 == 0);",
    "pythonHint": "Math vs string length."
  },
  {
    "id": "replace-elements-with-greatest-element-on-right-side",
    "title": "Replace Elements with Greatest Element on Right Side",
    "slug": "replace-elements-with-greatest-element-on-right-side",
    "leetcodeNumber": 1299,
    "difficulty": "Easy",
    "primaryPattern": "arrays",
    "relatedPatterns": [
      "two-pointers"
    ],
    "url": "https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/",
    "verified": true,
    "notesSnippet": "Iterate backwards from n-1 tracking maxRight; current becomes maxRight.",
    "cppHint": "int maxRight = -1; for (int i = n - 1; i >= 0; --i) { int temp = arr[i]; arr[i] = maxRight; maxRight = max(maxRight, temp); }",
    "pythonHint": "Backward pass in-place."
  },
  {
    "id": "find-n-unique-integers-sum-up-to-zero",
    "title": "Find N Unique Integers Sum up to Zero",
    "slug": "find-n-unique-integers-sum-up-to-zero",
    "leetcodeNumber": 1304,
    "difficulty": "Easy",
    "primaryPattern": "math",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/",
    "verified": true,
    "notesSnippet": "Pair symmetric opposites: -i and +i; add 0 if n is odd.",
    "cppHint": "for (int i = 1; i <= n / 2; ++i) { res.push_back(i); res.push_back(-i); } if (n % 2) res.push_back(0);",
    "pythonHint": "Symmetric pair generation."
  },
  {
    "id": "check-if-n-and-its-double-exist",
    "title": "Check If N and Its Double Exist",
    "slug": "check-if-n-and-its-double-exist",
    "leetcodeNumber": 1346,
    "difficulty": "Easy",
    "primaryPattern": "hash-map",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/check-if-n-and-its-double-exist/",
    "verified": true,
    "notesSnippet": "Hash set: check if 2*x is in set or (x % 2 == 0 && x/2 in set).",
    "cppHint": "unordered_set<int> seen; if (seen.count(2 * x) || (x % 2 == 0 && seen.count(x / 2))) return true;",
    "pythonHint": "Handle zero count."
  },
  {
    "id": "how-many-numbers-are-smaller-than-the-current-number",
    "title": "How Many Numbers Are Smaller Than the Current Number",
    "slug": "how-many-numbers-are-smaller-than-the-current-number",
    "leetcodeNumber": 1365,
    "difficulty": "Easy",
    "primaryPattern": "hash-map",
    "relatedPatterns": [
      "sorting"
    ],
    "url": "https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/",
    "verified": true,
    "notesSnippet": "Sort sorted array copy and map first occurrence index, or counting sort array.",
    "cppHint": "unordered_map<int, int> firstSeen; for (int i = 0; i < n; ++i) firstSeen.insert({sorted[i], i});",
    "pythonHint": "Bucket sort on 0-100 values."
  },
  {
    "id": "destination-city",
    "title": "Destination City",
    "slug": "destination-city",
    "leetcodeNumber": 1436,
    "difficulty": "Easy",
    "primaryPattern": "hash-map",
    "relatedPatterns": [
      "graphs"
    ],
    "url": "https://leetcode.com/problems/destination-city/",
    "verified": true,
    "notesSnippet": "Collect all source cities in hash set; find destination city that is not in sources.",
    "cppHint": "unordered_set<string> sources; for (auto& p : paths) sources.insert(p[0]);",
    "pythonHint": "Out-degree 0 destination node."
  },
  {
    "id": "shuffle-the-array",
    "title": "Shuffle the Array",
    "slug": "shuffle-the-array",
    "leetcodeNumber": 1470,
    "difficulty": "Easy",
    "primaryPattern": "arrays",
    "relatedPatterns": [
      "two-pointers"
    ],
    "url": "https://leetcode.com/problems/shuffle-the-array/",
    "verified": true,
    "notesSnippet": "Interleave x_i and y_i into result array: res[2*i] = nums[i], res[2*i+1] = nums[i+n].",
    "cppHint": "In-place bit manipulation encoding possible if O(1) space required.",
    "pythonHint": "Interleaving indices."
  },
  {
    "id": "running-sum-of-1d-array",
    "title": "Running Sum of 1d Array",
    "slug": "running-sum-of-1d-array",
    "leetcodeNumber": 1480,
    "difficulty": "Easy",
    "primaryPattern": "prefix-sum",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/running-sum-of-1d-array/",
    "verified": true,
    "notesSnippet": "nums[i] += nums[i-1] in-place prefix accumulation.",
    "cppHint": "for (int i = 1; i < nums.size(); ++i) nums[i] += nums[i-1];",
    "pythonHint": "In-place running sum."
  },
  {
    "id": "number-of-good-pairs",
    "title": "Number of Good Pairs",
    "slug": "number-of-good-pairs",
    "leetcodeNumber": 1512,
    "difficulty": "Easy",
    "primaryPattern": "hash-map",
    "relatedPatterns": [
      "math"
    ],
    "url": "https://leetcode.com/problems/number-of-good-pairs/",
    "verified": true,
    "notesSnippet": "Frequency map: each time number appears, it forms count pairs with previous occurrences.",
    "cppHint": "unordered_map<int, int> count; int ans = 0; for (int x : nums) ans += count[x]++;",
    "pythonHint": "Combination counting n*(n-1)/2."
  },
  {
    "id": "shuffle-string",
    "title": "Shuffle String",
    "slug": "shuffle-string",
    "leetcodeNumber": 1528,
    "difficulty": "Easy",
    "primaryPattern": "strings",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/shuffle-string/",
    "verified": true,
    "notesSnippet": "res[indices[i]] = s[i].",
    "cppHint": "string res = s; for (int i = 0; i < s.size(); ++i) res[indices[i]] = s[i];",
    "pythonHint": "Direct index assignment."
  },
  {
    "id": "richest-customer-wealth",
    "title": "Richest Customer Wealth",
    "slug": "richest-customer-wealth",
    "leetcodeNumber": 1672,
    "difficulty": "Easy",
    "primaryPattern": "matrix",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/richest-customer-wealth/",
    "verified": true,
    "notesSnippet": "Max row sum: accumulate each customer's accounts and track maximum.",
    "cppHint": "for (auto& row : accounts) maxW = max(maxW, accumulate(row.begin(), row.end(), 0));",
    "pythonHint": "Max sum of rows."
  },
  {
    "id": "decode-xored-array",
    "title": "Decode XORed Array",
    "slug": "decode-xored-array",
    "leetcodeNumber": 1720,
    "difficulty": "Easy",
    "primaryPattern": "bit-manipulation",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/decode-xored-array/",
    "verified": true,
    "notesSnippet": "encoded[i] = arr[i] ^ arr[i+1] => arr[i+1] = encoded[i] ^ arr[i].",
    "cppHint": "res.push_back(res.back() ^ encoded[i]);",
    "pythonHint": "XOR inverse property."
  },
  {
    "id": "find-the-highest-altitude",
    "title": "Find the Highest Altitude",
    "slug": "find-the-highest-altitude",
    "leetcodeNumber": 1732,
    "difficulty": "Easy",
    "primaryPattern": "prefix-sum",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/find-the-highest-altitude/",
    "verified": true,
    "notesSnippet": "Running sum of gains, track maximum altitude reached.",
    "cppHint": "curr += g; maxAlt = max(maxAlt, curr);",
    "pythonHint": "Prefix sum peak tracking."
  },
  {
    "id": "sum-of-unique-elements",
    "title": "Sum of Unique Elements",
    "slug": "sum-of-unique-elements",
    "leetcodeNumber": 1748,
    "difficulty": "Easy",
    "primaryPattern": "hash-map",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/sum-of-unique-elements/",
    "verified": true,
    "notesSnippet": "Frequency map: sum all elements with frequency count == 1.",
    "cppHint": "unordered_map<int, int> count; for (int x : nums) count[x]++; int s = 0; for (auto& [x, c] : count) if (c == 1) s += x;",
    "pythonHint": "Filtering single occurrences."
  },
  {
    "id": "merge-strings-alternately",
    "title": "Merge Strings Alternately",
    "slug": "merge-strings-alternately",
    "leetcodeNumber": 1768,
    "difficulty": "Easy",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "strings"
    ],
    "url": "https://leetcode.com/problems/merge-strings-alternately/",
    "verified": true,
    "notesSnippet": "Two pointers taking characters alternately until both strings are exhausted.",
    "cppHint": "while (i < m || j < n) { if (i < m) res += word1[i++]; if (j < n) res += word2[j++]; }",
    "pythonHint": "Interleave characters."
  },
  {
    "id": "sign-of-the-product-of-an-array",
    "title": "Sign of the Product of an Array",
    "slug": "sign-of-the-product-of-an-array",
    "leetcodeNumber": 1822,
    "difficulty": "Easy",
    "primaryPattern": "math",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/sign-of-the-product-of-an-array/",
    "verified": true,
    "notesSnippet": "Count negative numbers; if any element is 0 return 0 immediately.",
    "cppHint": "if (x == 0) return 0; if (x < 0) sign = -sign;",
    "pythonHint": "Track sign flip."
  },
  {
    "id": "check-if-the-sentence-is-pangram",
    "title": "Check if the Sentence Is Pangram",
    "slug": "check-if-the-sentence-is-pangram",
    "leetcodeNumber": 1832,
    "difficulty": "Easy",
    "primaryPattern": "hash-map",
    "relatedPatterns": [
      "strings"
    ],
    "url": "https://leetcode.com/problems/check-if-the-sentence-is-pangram/",
    "verified": true,
    "notesSnippet": "Bitmask or hash set of seen letters; check if size == 26 or mask == (1 << 26) - 1.",
    "cppHint": "int mask = 0; for (char c : sentence) mask |= (1 << (c - 'a')); return mask == ((1 << 26) - 1);",
    "pythonHint": "Bitmask pangram check."
  },
  {
    "id": "sorting-the-sentence",
    "title": "Sorting the Sentence",
    "slug": "sorting-the-sentence",
    "leetcodeNumber": 1859,
    "difficulty": "Easy",
    "primaryPattern": "sorting",
    "relatedPatterns": [
      "strings"
    ],
    "url": "https://leetcode.com/problems/sorting-the-sentence/",
    "verified": true,
    "notesSnippet": "Extract trailing digit from each word to determine original 1-based position.",
    "cppHint": "res[word.back() - '1'] = word.substr(0, word.size() - 1);",
    "pythonHint": "Parse word and index."
  },
  {
    "id": "build-array-from-permutation",
    "title": "Build Array from Permutation",
    "slug": "build-array-from-permutation",
    "leetcodeNumber": 1920,
    "difficulty": "Easy",
    "primaryPattern": "arrays",
    "relatedPatterns": [
      "math"
    ],
    "url": "https://leetcode.com/problems/build-array-from-permutation/",
    "verified": true,
    "notesSnippet": "ans[i] = nums[nums[i]]; in-place encoding using nums[i] += (nums[nums[i]] % n) * n.",
    "cppHint": "Modulo and integer division trick allows O(1) extra space.",
    "pythonHint": "ans = [nums[x] for x in nums]."
  },
  {
    "id": "concatenation-of-array",
    "title": "Concatenation of Array",
    "slug": "concatenation-of-array",
    "leetcodeNumber": 1929,
    "difficulty": "Easy",
    "primaryPattern": "arrays",
    "relatedPatterns": [
      "math"
    ],
    "url": "https://leetcode.com/problems/concatenation-of-array/",
    "verified": true,
    "notesSnippet": "Create array of size 2n; ans[i] = ans[i+n] = nums[i].",
    "cppHint": "res.insert(res.end(), nums.begin(), nums.end());",
    "pythonHint": "nums + nums."
  },
  {
    "id": "reverse-prefix-of-word",
    "title": "Reverse Prefix of Word",
    "slug": "reverse-prefix-of-word",
    "leetcodeNumber": 2000,
    "difficulty": "Easy",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "strings"
    ],
    "url": "https://leetcode.com/problems/reverse-prefix-of-word/",
    "verified": true,
    "notesSnippet": "Find first occurrence of ch, reverse prefix up to that index.",
    "cppHint": "int idx = word.find(ch); if (idx != string::npos) reverse(word.begin(), word.begin() + idx + 1);",
    "pythonHint": "In-place prefix reversal."
  },
  {
    "id": "final-value-of-variable-after-performing-operations",
    "title": "Final Value of Variable After Performing Operations",
    "slug": "final-value-of-variable-after-performing-operations",
    "leetcodeNumber": 2011,
    "difficulty": "Easy",
    "primaryPattern": "strings",
    "relatedPatterns": [
      "math"
    ],
    "url": "https://leetcode.com/problems/final-value-of-variable-after-performing-operations/",
    "verified": true,
    "notesSnippet": "Check if op[1] == '+': increment if true, decrement if false.",
    "cppHint": "for (auto& op : operations) x += (op[1] == '+') ? 1 : -1;",
    "pythonHint": "Check middle character."
  },
  {
    "id": "maximum-number-of-words-found-in-sentences",
    "title": "Maximum Number of Words Found in Sentences",
    "slug": "maximum-number-of-words-found-in-sentences",
    "leetcodeNumber": 2114,
    "difficulty": "Easy",
    "primaryPattern": "strings",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/",
    "verified": true,
    "notesSnippet": "Count spaces in sentence + 1; track maximum words.",
    "cppHint": "count(s.begin(), s.end(), ' ') + 1;",
    "pythonHint": "Space count equals word count minus 1."
  },
  {
    "id": "count-equal-and-divisible-pairs-in-an-array",
    "title": "Count Equal and Divisible Pairs in an Array",
    "slug": "count-equal-and-divisible-pairs-in-an-array",
    "leetcodeNumber": 2176,
    "difficulty": "Easy",
    "primaryPattern": "hash-map",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/",
    "verified": true,
    "notesSnippet": "Check pairs where nums[i] == nums[j] and (i * j) % k == 0.",
    "cppHint": "Map values to vector of indices.",
    "pythonHint": "Index pair condition."
  },
  {
    "id": "find-the-difference-of-two-arrays",
    "title": "Find the Difference of Two Arrays",
    "slug": "find-the-difference-of-two-arrays",
    "leetcodeNumber": 2215,
    "difficulty": "Easy",
    "primaryPattern": "hash-map",
    "relatedPatterns": [
      "arrays"
    ],
    "url": "https://leetcode.com/problems/find-the-difference-of-two-arrays/",
    "verified": true,
    "notesSnippet": "Convert both to sets; set difference s1 - s2 and s2 - s1.",
    "cppHint": "unordered_set<int> s1(nums1.begin(), nums1.end()), s2(nums2.begin(), nums2.end());",
    "pythonHint": "Set difference operations."
  },
  {
    "id": "continuous-subarray-sum",
    "title": "Continuous Subarray Sum",
    "slug": "continuous-subarray-sum",
    "leetcodeNumber": 523,
    "difficulty": "Medium",
    "primaryPattern": "prefix-sum",
    "relatedPatterns": [
      "math"
    ],
    "url": "https://leetcode.com/problems/continuous-subarray-sum/",
    "verified": true,
    "notesSnippet": "Prefix sum modulo k: if remainder seen before at distance >= 2, return true.",
    "cppHint": "unordered_map<int, int> remMap; remMap[0] = -1; rem = (rem + x) % k;",
    "pythonHint": "Track earliest index of each modulo remainder."
  },
  {
    "id": "subarray-sums-divisible-by-k",
    "title": "Subarray Sums Divisible by K",
    "slug": "subarray-sums-divisible-by-k",
    "leetcodeNumber": 974,
    "difficulty": "Medium",
    "primaryPattern": "prefix-sum",
    "relatedPatterns": [
      "hash-map"
    ],
    "url": "https://leetcode.com/problems/subarray-sums-divisible-by-k/",
    "verified": true,
    "notesSnippet": "Modulo remainder count array of size K: (sum % k + k) % k.",
    "cppHint": "int rem = ((sum % k) + k) % k; ans += count[rem]++;",
    "pythonHint": "Handle negative modulo in C++ with (rem + k) % k."
  },
  {
    "id": "4sum",
    "title": "4Sum",
    "slug": "4sum",
    "leetcodeNumber": 18,
    "difficulty": "Medium",
    "primaryPattern": "two-pointers",
    "relatedPatterns": [
      "sorting"
    ],
    "url": "https://leetcode.com/problems/4sum/",
    "verified": true,
    "notesSnippet": "Sort array, nested loops for first two indices, two pointers for last two.",
    "cppHint": "Use long long for sums to avoid 32-bit integer overflow.",
    "pythonHint": "kSum generalization."
  },
  {
    "id": "find-all-anagrams-in-a-string",
    "title": "Find All Anagrams in a String",
    "slug": "find-all-anagrams-in-a-string",
    "leetcodeNumber": 438,
    "difficulty": "Medium",
    "primaryPattern": "sliding-window",
    "relatedPatterns": [
      "hash-map"
    ],
    "url": "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
    "verified": true,
    "notesSnippet": "Fixed window of size len(p): sliding frequency count matching.",
    "cppHint": "c2[s[i] - 'a']++; c2[s[i - p.size()] - 'a']--;",
    "pythonHint": "Compare frequency arrays or maintain matches variable."
  },
  {
    "id": "capacity-to-ship-packages-within-d-days",
    "title": "Capacity To Ship Packages Within D Days",
    "slug": "capacity-to-ship-packages-within-d-days",
    "leetcodeNumber": 1011,
    "difficulty": "Medium",
    "primaryPattern": "binary-search-answer",
    "relatedPatterns": [
      "greedy"
    ],
    "url": "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
    "verified": true,
    "notesSnippet": "Binary search on ship capacity: range [max(weights), sum(weights)].",
    "cppHint": "Greedy simulation counts days required for capacity mid.",
    "pythonHint": "Monotonic feasibility predicate."
  },
  {
    "id": "split-array-largest-sum",
    "title": "Split Array Largest Sum",
    "slug": "split-array-largest-sum",
    "leetcodeNumber": 410,
    "difficulty": "Hard",
    "primaryPattern": "binary-search-answer",
    "relatedPatterns": [
      "dynamic-programming-1d"
    ],
    "url": "https://leetcode.com/problems/split-array-largest-sum/",
    "verified": true,
    "notesSnippet": "Binary search on max subarray sum: verify if array can be split into <= k parts.",
    "cppHint": "Greedily accumulate until sum exceeds mid.",
    "pythonHint": "Identical feasibility logic to ship packages."
  },
  {
    "id": "online-stock-span",
    "title": "Online Stock Span",
    "slug": "online-stock-span",
    "leetcodeNumber": 901,
    "difficulty": "Medium",
    "primaryPattern": "monotonic-stack",
    "relatedPatterns": [
      "design"
    ],
    "url": "https://leetcode.com/problems/online-stock-span/",
    "verified": true,
    "notesSnippet": "Monotonic decreasing stack storing pairs of (price, span).",
    "cppHint": "int span = 1; while (!st.empty() && price >= st.top().first) { span += st.top().second; st.pop(); }",
    "pythonHint": "Amortized O(1) per call."
  },
  {
    "id": "letter-combinations-of-a-phone-number",
    "title": "Letter Combinations of a Phone Number",
    "slug": "letter-combinations-of-a-phone-number",
    "leetcodeNumber": 17,
    "difficulty": "Medium",
    "primaryPattern": "backtracking",
    "relatedPatterns": [
      "strings"
    ],
    "url": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
    "verified": true,
    "notesSnippet": "Backtrack mapping phone digits to letters.",
    "cppHint": "vector<string> pad = {\"\", \"\", \"abc\", \"def\", ...};",
    "pythonHint": "Cartesian product via recursion."
  },
  {
    "id": "n-queens",
    "title": "N-Queens",
    "slug": "n-queens",
    "leetcodeNumber": 51,
    "difficulty": "Hard",
    "primaryPattern": "backtracking",
    "relatedPatterns": [
      "bit-manipulation"
    ],
    "url": "https://leetcode.com/problems/n-queens/",
    "verified": true,
    "notesSnippet": "Place queens row by row; track columns, diag1 (r - c), diag2 (r + c).",
    "cppHint": "unordered_set or bitmasks for cols, posDiag, negDiag.",
    "pythonHint": "Backtracking with O(1) conflict validation."
  },
  {
    "id": "task-scheduler",
    "title": "Task Scheduler",
    "slug": "task-scheduler",
    "leetcodeNumber": 621,
    "difficulty": "Medium",
    "primaryPattern": "top-k-elements-heap",
    "relatedPatterns": [
      "greedy"
    ],
    "url": "https://leetcode.com/problems/task-scheduler/",
    "verified": true,
    "notesSnippet": "Formula based on max frequency task: (maxFreq - 1) * (n + 1) + countOfMaxFreq.",
    "cppHint": "int idleSlots = (maxFreq - 1) * (n + 1) + countMax; return max((int)tasks.size(), idleSlots);",
    "pythonHint": "Greedy mathematical idle slot formula."
  },
  {
    "id": "jump-game-ii",
    "title": "Jump Game II",
    "slug": "jump-game-ii",
    "leetcodeNumber": 45,
    "difficulty": "Medium",
    "primaryPattern": "greedy",
    "relatedPatterns": [
      "dynamic-programming-1d"
    ],
    "url": "https://leetcode.com/problems/jump-game-ii/",
    "verified": true,
    "notesSnippet": "BFS level by level: track currentJumpEnd and farthestReachable.",
    "cppHint": "if (i == currentEnd) { jumps++; currentEnd = farthest; }",
    "pythonHint": "Greedy minimum jump count."
  },
  {
    "id": "partition-labels",
    "title": "Partition Labels",
    "slug": "partition-labels",
    "leetcodeNumber": 763,
    "difficulty": "Medium",
    "primaryPattern": "greedy",
    "relatedPatterns": [
      "hash-map"
    ],
    "url": "https://leetcode.com/problems/partition-labels/",
    "verified": true,
    "notesSnippet": "Map last seen index of each char; expand partition boundary until i reaches end.",
    "cppHint": "int last[26]; for (int i = 0; i < n; i++) last[s[i]-'a'] = i; end = max(end, last[s[i]-'a']);",
    "pythonHint": "Greedy chunk partitioning."
  },
  {
    "id": "max-area-of-island",
    "title": "Max Area of Island",
    "slug": "max-area-of-island",
    "leetcodeNumber": 695,
    "difficulty": "Medium",
    "primaryPattern": "graph-bfs-dfs",
    "relatedPatterns": [
      "matrix"
    ],
    "url": "https://leetcode.com/problems/max-area-of-island/",
    "verified": true,
    "notesSnippet": "DFS returns area of island; track maximum area across all cells.",
    "cppHint": "int dfs(r, c) { if (outOfBounds || grid[r][c] != 1) return 0; grid[r][c] = 0; return 1 + dfs(r+1) + ... }",
    "pythonHint": "In-place cell sinking."
  },
  {
    "id": "number-of-provinces",
    "title": "Number of Provinces",
    "slug": "number-of-provinces",
    "leetcodeNumber": 547,
    "difficulty": "Medium",
    "primaryPattern": "union-find",
    "relatedPatterns": [
      "graph-bfs-dfs"
    ],
    "url": "https://leetcode.com/problems/number-of-provinces/",
    "verified": true,
    "notesSnippet": "Union-Find or DFS/BFS counting connected components in adjacency matrix.",
    "cppHint": "dsu.unite(i, j) if isConnected[i][j];",
    "pythonHint": "Count distinct root parents."
  },
  {
    "id": "graph-valid-tree",
    "title": "Graph Valid Tree",
    "slug": "graph-valid-tree",
    "leetcodeNumber": 261,
    "difficulty": "Medium",
    "primaryPattern": "union-find",
    "relatedPatterns": [
      "graph-bfs-dfs"
    ],
    "url": "https://leetcode.com/problems/graph-valid-tree/",
    "verified": true,
    "notesSnippet": "A tree must have exactly N-1 edges and no cycles (single connected component).",
    "cppHint": "if (edges.size() != n - 1) return false; check cycle with DSU.",
    "pythonHint": "N-1 edges + connected property."
  },
  {
    "id": "word-ladder",
    "title": "Word Ladder",
    "slug": "word-ladder",
    "leetcodeNumber": 127,
    "difficulty": "Hard",
    "primaryPattern": "graph-bfs-dfs",
    "relatedPatterns": [
      "hash-map"
    ],
    "url": "https://leetcode.com/problems/word-ladder/",
    "verified": true,
    "notesSnippet": "Bidirectional BFS or standard BFS: change 1 char at a time, check word set.",
    "cppHint": "unordered_set<string> dict(wordList.begin(), wordList.end());",
    "pythonHint": "Shortest path in unweighted graph."
  },
  {
    "id": "coin-change-ii",
    "title": "Coin Change II",
    "slug": "coin-change-ii",
    "leetcodeNumber": 518,
    "difficulty": "Medium",
    "primaryPattern": "dynamic-programming-1d",
    "relatedPatterns": [
      "combinatorics"
    ],
    "url": "https://leetcode.com/problems/coin-change-ii/",
    "verified": true,
    "notesSnippet": "Unbounded knapsack combinations: outer loop coins, inner loop amount.",
    "cppHint": "dp[a] += dp[a - coin]; outer loop on coins ensures combinations (no order permutations).",
    "pythonHint": "Outer loop coins vs inner loop amount."
  },
  {
    "id": "target-sum",
    "title": "Target Sum",
    "slug": "target-sum",
    "leetcodeNumber": 494,
    "difficulty": "Medium",
    "primaryPattern": "dynamic-programming-1d",
    "relatedPatterns": [
      "backtracking"
    ],
    "url": "https://leetcode.com/problems/target-sum/",
    "verified": true,
    "notesSnippet": "Subset sum transformation: P - N = target => 2*P = target + sum.",
    "cppHint": "Can convert to subset sum finding P = (target + sum) / 2.",
    "pythonHint": "Check if (target + sum) is non-negative and even."
  },
  {
    "id": "interleaving-string",
    "title": "Interleaving String",
    "slug": "interleaving-string",
    "leetcodeNumber": 97,
    "difficulty": "Medium",
    "primaryPattern": "dynamic-programming-2d",
    "relatedPatterns": [
      "strings"
    ],
    "url": "https://leetcode.com/problems/interleaving-string/",
    "verified": true,
    "notesSnippet": "dp[i][j] = (dp[i-1][j] && s1[i-1] == s3[i+j-1]) || (dp[i][j-1] && s2[j-1] == s3[i+j-1]).",
    "cppHint": "Check len(s1) + len(s2) == len(s3) initially.",
    "pythonHint": "2D table boolean transitions."
  },
  {
    "id": "design-add-and-search-words-data-structure",
    "title": "Design Add and Search Words Data Structure",
    "slug": "design-add-and-search-words-data-structure",
    "leetcodeNumber": 211,
    "difficulty": "Medium",
    "primaryPattern": "trie",
    "relatedPatterns": [
      "backtracking"
    ],
    "url": "https://leetcode.com/problems/design-add-and-search-words-data-structure/",
    "verified": true,
    "notesSnippet": "Trie with wildcard '.' handling: branch out to all 26 children when '.' seen.",
    "cppHint": "for (int i = 0; i < 26; i++) if (curr->children[i] && search(word, idx+1, curr->children[i])) return true;",
    "pythonHint": "Wildcard DFS recursion."
  },
  {
    "id": "word-search-ii",
    "title": "Word Search II",
    "slug": "word-search-ii",
    "leetcodeNumber": 212,
    "difficulty": "Hard",
    "primaryPattern": "trie",
    "relatedPatterns": [
      "backtracking"
    ],
    "url": "https://leetcode.com/problems/word-search-ii/",
    "verified": true,
    "notesSnippet": "Build Trie from words list; DFS on grid matching Trie nodes; prune visited words.",
    "cppHint": "Store word directly in Trie leaf node to avoid string reconstruction.",
    "pythonHint": "Remove words from Trie once found to prune search space."
  },
  {
    "id": "alien-dictionary",
    "title": "Alien Dictionary",
    "slug": "alien-dictionary",
    "leetcodeNumber": 269,
    "difficulty": "Hard",
    "primaryPattern": "topological-sort",
    "relatedPatterns": [
      "graphs"
    ],
    "url": "https://leetcode.com/problems/alien-dictionary/",
    "verified": true,
    "notesSnippet": "Build directed graph from adjacent word character differences; topological sort.",
    "cppHint": "If prefix condition violated (e.g. 'abc' before 'ab'), return empty.",
    "pythonHint": "Detect cycles via Kahn's algorithm."
  },
  {
    "id": "longest-valid-parentheses",
    "title": "Longest Valid Parentheses",
    "slug": "longest-valid-parentheses",
    "leetcodeNumber": 32,
    "difficulty": "Hard",
    "primaryPattern": "stacks",
    "relatedPatterns": [
      "dynamic-programming-1d"
    ],
    "url": "https://leetcode.com/problems/longest-valid-parentheses/",
    "verified": true,
    "notesSnippet": "Stack storing indices of unmatched parentheses, or two-pass left-right scan.",
    "cppHint": "st.push(-1); maxLen = max(maxLen, i - st.top());",
    "pythonHint": "O(1) space two-pass left/right counter."
  },
  {
    "id": "sliding-puzzle",
    "title": "Sliding Puzzle",
    "slug": "sliding-puzzle",
    "leetcodeNumber": 773,
    "difficulty": "Hard",
    "primaryPattern": "graph-bfs-dfs",
    "relatedPatterns": [
      "matrix"
    ],
    "url": "https://leetcode.com/problems/sliding-puzzle/",
    "verified": true,
    "notesSnippet": "BFS shortest path over board state string (target '123450').",
    "cppHint": "Swap 0 with valid adjacent indices based on 2x3 board topology.",
    "pythonHint": "BFS guarantees minimum move count."
  },
  {
    "id": "burst-balloons",
    "title": "Burst Balloons",
    "slug": "burst-balloons",
    "leetcodeNumber": 312,
    "difficulty": "Hard",
    "primaryPattern": "dynamic-programming-2d",
    "relatedPatterns": [
      "divide-and-conquer"
    ],
    "url": "https://leetcode.com/problems/burst-balloons/",
    "verified": true,
    "notesSnippet": "Interval DP: think in reverse\u2014which balloon is burst LAST in range (i, j)?",
    "cppHint": "dp[i][j] = max(dp[i][j], dp[i][k] + dp[k][j] + nums[i]*nums[k]*nums[j]);",
    "pythonHint": "Reverse thinking interval DP."
  },
  {
    "id": "serialize-and-deserialize-binary-tree",
    "title": "Serialize and Deserialize Binary Tree",
    "slug": "serialize-and-deserialize-binary-tree",
    "leetcodeNumber": 297,
    "difficulty": "Hard",
    "primaryPattern": "tree-bfs-dfs",
    "relatedPatterns": [
      "design"
    ],
    "url": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
    "verified": true,
    "notesSnippet": "Pre-order DFS with 'null' markers and comma delimiters.",
    "cppHint": "stringstream or queue for tokenization.",
    "pythonHint": "Clean recursive string builder."
  }
];

export const PROBLEMS_BY_ID: Record<string, Problem> = PROBLEMS.reduce((acc, p) => {
  acc[p.id] = p;
  return acc;
}, {} as Record<string, Problem>);
