import { DSAPattern } from '../types/curriculum';

export const PATTERNS: DSAPattern[] = [
  {
    id: 'prefix-sum',
    name: 'Prefix Sum & Difference Array',
    category: 'Arrays & Math',
    coreIdea: 'Precompute cumulative totals or differences to query range sums or apply range increments in O(1) time.',
    recognitionSignals: [
      'Subarray sum equals K or divisibility checks',
      'Frequent range sum queries on an immutable array',
      'Multiple range update operations [L, R] with value X',
      'Equilibrium index or balance point questions',
    ],
    typicalStructure: 'prefix[i] = prefix[i-1] + nums[i]; rangeSum(i, j) = prefix[j] - prefix[i-1];',
    whenToUse: [
      'Querying contiguous sum intervals repeatedly',
      'Combining with HashMaps to count subarrays summing to target K in O(N)',
      'Difference arrays when executing batch range updates before final reconstruction',
    ],
    whenNotToUse: [
      'Frequent point updates interspersed with range sum queries (use Fenwick Tree or Segment Tree)',
      'Subsequences rather than contiguous subarrays',
    ],
    timeComplexity: 'O(N) precomputation, O(1) query',
    spaceComplexity: 'O(N) auxiliary space (or O(1) in-place)',
    commonMistakes: [
      'Off-by-one errors when querying range [L, R] without 1-indexed padding',
      'Integer overflow with 32-bit integers on cumulative sums; use long long in C++',
      'Forgetting that nums[i] can be negative, which invalidates two-pointer shrinking',
    ],
    illustrativeExample: 'Subarray Sum Equals K (LeetCode 560): use prefix_sum with hash map of seen prefix sums.',
    cppSnippet: `// C++ Prefix Sum with Hash Map
int subarraySum(vector<int>& nums, int k) {
    unordered_map<int, int> prefixCounts;
    prefixCounts[0] = 1;
    int currSum = 0, total = 0;
    for (int x : nums) {
        currSum += x;
        if (prefixCounts.find(currSum - k) != prefixCounts.end()) {
            total += prefixCounts[currSum - k];
        }
        prefixCounts[currSum]++;
    }
    return total;
}`,
    pythonSnippet: `# Python Prefix Sum with Hash Map
def subarray_sum(nums: list[int], k: int) -> int:
    prefix_counts = {0: 1}
    curr_sum = total = 0
    for x in nums:
        curr_sum += x
        total += prefix_counts.get(curr_sum - k, 0)
        prefix_counts[curr_sum] = prefix_counts.get(curr_sum, 0) + 1
    return total`,
    prerequisites: ['array-traversal', 'hash-map'],
    relatedPatterns: ['two-pointers', 'sliding-window', 'difference-array'],
  },
  {
    id: 'two-pointers',
    name: 'Two Pointers (Converging & Parallel)',
    category: 'Arrays & Strings',
    coreIdea: 'Use two reference indices moving in coordination (opposite directions or same direction) to eliminate redundant checks in O(N) time.',
    recognitionSignals: [
      'Sorted array target sum or pair comparisons',
      'Palindrome verification or string reversals',
      'In-place element removal, deduplication, or partitioning (Dutch National Flag)',
      'Container or boundary trapping problems',
    ],
    typicalStructure: 'int left = 0, right = n - 1; while (left < right) { if (condition) left++; else right--; }',
    whenToUse: [
      'Monotonic properties: moving left rightwards increases value, moving right leftwards decreases it',
      'Partitioning arrays into partitions (e.g. 0s, 1s, 2s)',
    ],
    whenNotToUse: [
      'Unsorted arrays where sorting destroys original index requirements or is too slow O(N log N)',
      'Subarray conditions without monotonic directionality',
    ],
    timeComplexity: 'O(N) or O(N log N) if pre-sorting',
    spaceComplexity: 'O(1) auxiliary space',
    commonMistakes: [
      'Handling duplicates in 3Sum/4Sum leading to duplicate triples',
      'Index out of bounds on nested while loops (always check left < right)',
    ],
    illustrativeExample: 'Container With Most Water (LeetCode 11): move the pointer with the smaller height inwards.',
    cppSnippet: `int maxArea(vector<int>& height) {
    int l = 0, r = height.size() - 1, maxW = 0;
    while (l < r) {
        int h = min(height[l], height[r]);
        maxW = max(maxW, h * (r - l));
        if (height[l] < height[r]) l++;
        else r--;
    }
    return maxW;
}`,
    pythonSnippet: `def max_area(height: list[int]) -> int:
    l, r, max_w = 0, len(height) - 1, 0
    while l < r:
        h = min(height[l], height[r])
        max_w = max(max_w, h * (r - l))
        if height[l] < height[r]:
            l += 1
        else:
            r -= 1
    return max_w`,
    prerequisites: ['array-traversal'],
    relatedPatterns: ['sliding-window', 'fast-slow-pointers', 'binary-search'],
  },
  {
    id: 'sliding-window',
    name: 'Sliding Window (Fixed & Variable)',
    category: 'Arrays & Strings',
    coreIdea: 'Maintain a contiguous window [left, right] that expands to satisfy conditions and shrinks to restore invariants or optimize metrics.',
    recognitionSignals: [
      'Subarrays or substrings with constraint (e.g., at most K distinct characters)',
      'Min/max length of contiguous segment matching target property',
      'Fixed window size K averaging or anagram permutation matching',
    ],
    typicalStructure: 'for (int r = 0; r < n; ++r) { add(nums[r]); while (!valid) { remove(nums[l++]); } update(r - l + 1); }',
    whenToUse: [
      'Contiguous sequence problems where elements are all non-negative or window state is monotonic',
    ],
    whenNotToUse: [
      'Arrays with negative numbers when seeking exact sum K (use Prefix Sum + Map instead!)',
      'Non-contiguous subsequences',
    ],
    timeComplexity: 'O(N) amortized (each element added and removed at most once)',
    spaceComplexity: 'O(K) where K is alphabet size or hash map capacity',
    commonMistakes: [
      'Using sliding window on negative number sums—shrinking left does not monotonically decrease sum!',
      'Failing to decrement frequency counts and deleting keys when count hits 0',
    ],
    illustrativeExample: 'Longest Substring Without Repeating Characters (LeetCode 3).',
    cppSnippet: `int lengthOfLongestSubstring(string s) {
    unordered_map<char, int> lastIdx;
    int maxLen = 0, left = 0;
    for (int right = 0; right < s.size(); ++right) {
        if (lastIdx.count(s[right]) && lastIdx[s[right]] >= left) {
            left = lastIdx[s[right]] + 1;
        }
        lastIdx[s[right]] = right;
        maxLen = max(maxLen, right - left + 1);
    }
    return maxLen;
}`,
    pythonSnippet: `def length_of_longest_substring(s: str) -> int:
    last_idx = {}
    max_len = left = 0
    for right, ch in enumerate(s):
        if ch in last_idx and last_idx[ch] >= left:
            left = last_idx[ch] + 1
        last_idx[ch] = right
        max_len = max(max_len, right - left + 1)
    return max_len`,
    prerequisites: ['two-pointers', 'hash-map'],
    relatedPatterns: ['two-pointers', 'monotonic-queue', 'prefix-sum'],
  },
  {
    id: 'fast-slow-pointers',
    name: 'Fast & Slow Pointers (Floyd’s Cycle Finding)',
    category: 'Linked Lists & Cycles',
    coreIdea: 'Traverse linked structures with pointers advancing at different speeds (1 step vs 2 steps) to detect cycles or find midpoints.',
    recognitionSignals: [
      'Circular linked list or detecting loop in sequence',
      'Finding the middle node of a linked list in one pass',
      'Happy Number sequence or cycle entry detection',
      'Finding duplicate number in array with restricted space (value as pointer)',
    ],
    typicalStructure: 'ListNode *slow = head, *fast = head; while (fast && fast->next) { slow = slow->next; fast = fast->next->next; if (slow == fast) break; }',
    whenToUse: [
      'Cycle detection in O(1) auxiliary space without hash set node tracking',
      'Finding middle node for Merge Sort on Linked Lists',
    ],
    whenNotToUse: [
      'Arbitrary graph cycle detection with multiple outgoing edges (use DFS with 3-colors or Kahn algorithm)',
    ],
    timeComplexity: 'O(N) time',
    spaceComplexity: 'O(1) auxiliary space',
    commonMistakes: [
      'Null pointer dereference: forgetting to check both `fast` and `fast->next`',
      'Finding entry point formula confusion: moving one pointer to head while other stays at meeting point',
    ],
    illustrativeExample: 'Linked List Cycle II (LeetCode 142) and Find the Duplicate Number (LeetCode 287).',
    cppSnippet: `ListNode *detectCycle(ListNode *head) {
    ListNode *slow = head, *fast = head;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) {
            ListNode *entry = head;
            while (entry != slow) {
                entry = entry->next;
                slow = slow->next;
            }
            return entry;
        }
    }
    return nullptr;
}`,
    pythonSnippet: `def detect_cycle(head: Optional[ListNode]) -> Optional[ListNode]:
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            entry = head
            while entry != slow:
                entry = entry.next
                slow = slow.next
            return entry
    return None`,
    prerequisites: ['linked-list-basics'],
    relatedPatterns: ['two-pointers', 'linked-list-reversal'],
  },
  {
    id: 'monotonic-stack',
    name: 'Monotonic Stack',
    category: 'Stacks & Queues',
    coreIdea: 'Maintain elements in strictly increasing or decreasing order to resolve the Next/Previous Greater/Smaller Element queries in O(N).',
    recognitionSignals: [
      'Find the next greater/smaller element for each item',
      'Histogram largest rectangle, container trapping water',
      'Daily temperatures or stock span calculations',
      'Subarray min/max contribution counting',
    ],
    typicalStructure: 'while (!st.empty() && nums[st.top()] < nums[i]) { int idx = st.top(); st.pop(); ans[idx] = nums[i]; } st.push(i);',
    whenToUse: [
      'Finding nearest dominating boundary for each element in an array',
    ],
    whenNotToUse: [
      'Random access range queries without monotonic ordering',
    ],
    timeComplexity: 'O(N) total (each index pushed and popped at most once)',
    spaceComplexity: 'O(N) for the stack',
    commonMistakes: [
      'Storing values instead of indices (indices allow calculating distance width and lookup value)',
      'Strict vs non-strict inequalities (< vs <=) causing double counting in subarray sum of minimums',
    ],
    illustrativeExample: 'Daily Temperatures (LeetCode 739) & Largest Rectangle in Histogram (LeetCode 84).',
    cppSnippet: `vector<int> dailyTemperatures(vector<int>& temperatures) {
    int n = temperatures.size();
    vector<int> result(n, 0);
    stack<int> st; // indices
    for (int i = 0; i < n; ++i) {
        while (!st.empty() && temperatures[i] > temperatures[st.top()]) {
            int prevIdx = st.top();
            st.pop();
            result[prevIdx] = i - prevIdx;
        }
        st.push(i);
    }
    return result;
}`,
    pythonSnippet: `def daily_temperatures(temperatures: list[int]) -> list[int]:
    n = len(temperatures)
    result = [0] * n
    stack = [] # indices
    for i, temp in enumerate(temperatures):
        while stack and temp > temperatures[stack[-1]]:
            prev = stack.pop()
            result[prev] = i - prev
        stack.append(i)
    return result`,
    prerequisites: ['stack-basics'],
    relatedPatterns: ['monotonic-queue', 'two-pointers'],
  },
  {
    id: 'binary-search-answer',
    name: 'Binary Search on Answer (Search Space Optimization)',
    category: 'Searching & Optimization',
    coreIdea: 'When the feasibility condition is monotonic (if X is possible, all X\' > X are also possible), binary search over the output answer domain.',
    recognitionSignals: [
      'Find the minimum maximum or maximum minimum (e.g. Koko Eating Bananas, Capacity To Ship Packages)',
      'Split array into K parts minimizing largest sum',
      'Direct optimization formulation f(x) is monotonic true/false',
    ],
    typicalStructure: 'int low = min_ans, high = max_ans, ans = high; while (low <= high) { int mid = low + (high-low)/2; if (isPossible(mid)) { ans = mid; high = mid - 1; } else low = mid + 1; }',
    whenToUse: [
      'The answer domain has clear lower and upper bounds and can be verified efficiently in O(N)',
    ],
    whenNotToUse: [
      'When the feasibility function is not monotonic (e.g., oscillating feasibility)',
    ],
    timeComplexity: 'O(N * log(SearchSpace))',
    spaceComplexity: 'O(1) auxiliary space',
    commonMistakes: [
      'Integer overflow on `low + high` (always use `low + (high - low) / 2`)',
      'Incorrect initial boundary limits (e.g. low = 0 instead of max element in array)',
    ],
    illustrativeExample: 'Koko Eating Bananas (LeetCode 875): search eating speed between 1 and max(piles).',
    cppSnippet: `int minEatingSpeed(vector<int>& piles, int h) {
    long long low = 1, high = *max_element(piles.begin(), piles.end());
    int ans = high;
    while (low <= high) {
        long long mid = low + (high - low) / 2;
        long long hours = 0;
        for (int p : piles) hours += (p + mid - 1) / mid;
        if (hours <= h) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
}`,
    pythonSnippet: `def min_eating_speed(piles: list[int], h: int) -> int:
    low, high = 1, max(piles)
    ans = high
    while low <= high:
        mid = (low + high) // 2
        hours = sum((p + mid - 1) // mid for p in piles)
        if hours <= h:
            ans = mid
            high = mid - 1
        else:
            low = mid + 1
    return ans`,
    prerequisites: ['binary-search-fundamentals'],
    relatedPatterns: ['greedy', 'two-pointers'],
  },
  {
    id: 'top-k-elements-heap',
    name: 'Top K Elements & Two Heaps',
    category: 'Heaps & Priority Queues',
    coreIdea: 'Use Min-Heap or Max-Heap to track the K largest or smallest items in O(N log K) time, or balance two heaps to track median in O(log N).',
    recognitionSignals: [
      'Find Kth largest or smallest element in stream or unsorted array',
      'Top K frequent words / numbers',
      'Find median from continuous data stream',
      'Merge K sorted lists efficiently',
    ],
    typicalStructure: 'priority_queue<int, vector<int>, greater<int>> minH; for (int x : nums) { minH.push(x); if (minH.size() > k) minH.pop(); }',
    whenToUse: [
      'Streaming data where full array is not known ahead of time',
      'K is substantially smaller than N, making O(N log K) much faster than O(N log N) sorting',
    ],
    whenNotToUse: [
      'Static offline array where QuickSelect achieves O(N) average time',
    ],
    timeComplexity: 'O(N log K) for Top K, O(log N) per stream insertion',
    spaceComplexity: 'O(K) auxiliary space',
    commonMistakes: [
      'Using Max-Heap instead of Min-Heap when seeking K largest (Min-Heap allows evicting smallest of the top K)',
      'Forgetting custom comparator syntax in C++ `priority_queue`',
    ],
    illustrativeExample: 'Top K Frequent Elements (LeetCode 347) and Find Median from Data Stream (LeetCode 295).',
    cppSnippet: `vector<int> topKFrequent(vector<int>& nums, int k) {
    unordered_map<int, int> count;
    for (int n : nums) count[n]++;
    // min-heap storing {freq, val}
    priority_queue<pair<int,int>, vector<pair<int,int>>, greater<pair<int,int>>> pq;
    for (auto& [val, freq] : count) {
        pq.push({freq, val});
        if (pq.size() > k) pq.pop();
    }
    vector<int> res;
    while (!pq.empty()) {
        res.push_back(pq.top().second);
        pq.pop();
    }
    return res;
}`,
    pythonSnippet: `import heapq
from collections import Counter

def top_k_frequent(nums: list[int], k: int) -> list[int]:
    count = Counter(nums)
    # min-heap of (freq, val)
    return [val for val, freq in heapq.nlargest(k, count.items(), key=lambda x: x[1])]`,
    prerequisites: ['heap-basics', 'hash-map'],
    relatedPatterns: ['quick-select', 'sorting'],
  },
  {
    id: 'graph-bfs-dfs',
    name: 'Graph Traversal (BFS, DFS & Connected Components)',
    category: 'Graphs',
    coreIdea: 'Explore nodes level-by-level (BFS for shortest unweighted path) or branch-by-branch (DFS for connectivity, cycle detection, components).',
    recognitionSignals: [
      'Grid islands, mazes, or flood fill traversals',
      'Shortest path in unweighted graph or minimum step transformation (Word Ladder)',
      'Detecting cycles or connected components in networks',
    ],
    typicalStructure: 'queue<int> q; q.push(start); visited[start] = true; while(!q.empty()){ auto u = q.front(); q.pop(); for(int v : adj[u]){ if(!visited[v]){ visited[v]=true; q.push(v); } } }',
    whenToUse: [
      'BFS: shortest path in unweighted graphs or multi-source wavefronts (Rotting Oranges)',
      'DFS: exhaustive component discovery, path finding, cycle detection with node states (unvisited, visiting, visited)',
    ],
    whenNotToUse: [
      'Weighted graphs with varying edge costs (use Dijkstra or Bellman-Ford)',
    ],
    timeComplexity: 'O(V + E) or O(R * C) for grids',
    spaceComplexity: 'O(V) for visited set and queue/recursion stack',
    commonMistakes: [
      'Marking node visited upon dequeuing rather than enqueueing (leads to redundant duplicate pushes to queue)',
      'Stack overflow in deep DFS grids in Python without increasing recursion limit',
    ],
    illustrativeExample: 'Number of Islands (LeetCode 200) and Rotting Oranges (LeetCode 994).',
    cppSnippet: `int numIslands(vector<vector<char>>& grid) {
    int m = grid.size(), n = grid[0].size(), count = 0;
    auto dfs = [&](auto& self, int r, int c) -> void {
        if (r < 0 || c < 0 || r >= m || c >= n || grid[r][c] != '1') return;
        grid[r][c] = '0'; // mark visited in-place
        self(self, r+1, c); self(self, r-1, c);
        self(self, r, c+1); self(self, r, c-1);
    };
    for (int i = 0; i < m; ++i) {
        for (int j = 0; j < n; ++j) {
            if (grid[i][j] == '1') {
                count++;
                dfs(dfs, i, j);
            }
        }
    }
    return count;
}`,
    pythonSnippet: `def num_islands(grid: list[list[str]]) -> int:
    if not grid: return 0
    m, n, count = len(grid), len(grid[0]), 0
    def dfs(r, c):
        if r < 0 or c < 0 or r >= m or c >= n or grid[r][c] != '1':
            return
        grid[r][c] = '0'
        dfs(r+1, c); dfs(r-1, c); dfs(r, c+1); dfs(r, c-1)
    for i in range(m):
        for j in range(n):
            if grid[i][j] == '1':
                count += 1
                dfs(i, j)
    return count`,
    prerequisites: ['queue-basics', 'recursion'],
    relatedPatterns: ['topological-sort', 'union-find', 'dijkstra'],
  },
  {
    id: 'topological-sort',
    name: 'Topological Sort (Kahn’s Algorithm & DFS Post-Order)',
    category: 'Graphs & DAGs',
    coreIdea: 'Order vertices linearly such that for every directed edge U -> V, vertex U comes before V. Only works on DAGs; cycles are detected if not all vertices can be processed.',
    recognitionSignals: [
      'Task scheduling with prerequisites (Course Schedule I & II)',
      'Build order dependencies or compilation sequences',
      'Detecting cycle in directed graph',
      'Alien dictionary character ordering',
    ],
    typicalStructure: 'Calculate in-degrees; enqueue all inDegree == 0; process queue, decrementing neighbors; if processedCount < V, cycle exists.',
    whenToUse: [
      'Directed acyclic dependencies requiring valid linear execution sequence',
    ],
    whenNotToUse: [
      'Undirected graphs (use Union-Find or standard BFS/DFS)',
    ],
    timeComplexity: 'O(V + E)',
    spaceComplexity: 'O(V + E) for adjacency list and in-degree array',
    commonMistakes: [
      'Assuming topological sort is unique (often multiple valid orders exist)',
      'Failing to detect cycle when queue empties prematurely',
    ],
    illustrativeExample: 'Course Schedule II (LeetCode 210).',
    cppSnippet: `vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {
    vector<vector<int>> adj(numCourses);
    vector<int> inDegree(numCourses, 0);
    for (auto& p : prerequisites) {
        adj[p[1]].push_back(p[0]);
        inDegree[p[0]]++;
    }
    queue<int> q;
    for (int i = 0; i < numCourses; ++i) if (inDegree[i] == 0) q.push(i);
    vector<int> order;
    while (!q.empty()) {
        int u = q.front(); q.pop();
        order.push_back(u);
        for (int v : adj[u]) {
            if (--inDegree[v] == 0) q.push(v);
        }
    }
    return order.size() == numCourses ? order : vector<int>{};
}`,
    pythonSnippet: `from collections import deque

def find_order(numCourses: int, prerequisites: list[list[int]]) -> list[int]:
    adj = [[] for _ in range(numCourses)]
    in_degree = [0] * numCourses
    for dest, src in prerequisites:
        adj[src].append(dest)
        in_degree[dest] += 1
    q = deque([i for i in range(numCourses) if in_degree[i] == 0])
    order = []
    while q:
        u = q.popleft()
        order.append(u)
        for v in adj[u]:
            in_degree[v] -= 1
            if in_degree[v] == 0:
                q.append(v)
    return order if len(order) == numCourses else []`,
    prerequisites: ['graph-bfs-dfs'],
    relatedPatterns: ['union-find', 'dijkstra'],
  },
  {
    id: 'union-find',
    name: 'Disjoint Set Union (Union-Find with Path Compression)',
    category: 'Graphs & Sets',
    coreIdea: 'Efficiently maintain disjoint partitions of elements with near O(1) α(N) amortized find and union operations.',
    recognitionSignals: [
      'Dynamic connectivity queries (are X and Y connected?)',
      'Cycle detection in undirected graphs',
      'Kruskal’s Minimum Spanning Tree algorithm',
      'Number of connected components changing over time',
    ],
    typicalStructure: 'int find(int i) { return parent[i] == i ? i : parent[i] = find(parent[i]); } void unite(int i, int j) { ... }',
    whenToUse: [
      'Undirected graph component merging or redundancy checking',
      'Account merging / friend circles',
    ],
    whenNotToUse: [
      'Directed graphs where edge direction matters (e.g., reachability is asymmetric)',
    ],
    timeComplexity: 'O(α(N)) ≈ O(1) amortized per operation',
    spaceComplexity: 'O(N) for parent and rank arrays',
    commonMistakes: [
      'Forgetting path compression in `find()` which degrades tree into O(N) linked list',
      'Not uniting roots: uniting `x` and `y` directly instead of `find(x)` and `find(y)`',
    ],
    illustrativeExample: 'Redundant Connection (LeetCode 684) and Number of Provinces (LeetCode 547).',
    cppSnippet: `struct DSU {
    vector<int> parent, rank;
    DSU(int n) : parent(n), rank(n, 0) {
        iota(parent.begin(), parent.end(), 0);
    }
    int find(int i) {
        return parent[i] == i ? i : parent[i] = find(parent[i]);
    }
    bool unite(int i, int j) {
        int rootI = find(i), rootJ = find(j);
        if (rootI == rootJ) return false;
        if (rank[rootI] < rank[rootJ]) swap(rootI, rootJ);
        parent[rootJ] = rootI;
        if (rank[rootI] == rank[rootJ]) rank[rootI]++;
        return true;
    }
};`,
    pythonSnippet: `class DSU:
    def __init__(self, n: int):
        self.parent = list(range(n))
        self.rank = [0] * n
    def find(self, i: int) -> int:
        if self.parent[i] != i:
            self.parent[i] = self.find(self.parent[i])
        return self.parent[i]
    def unite(self, i: int, j: int) -> bool:
        root_i, root_j = self.find(i), self.find(j)
        if root_i == root_j:
            return False
        if self.rank[root_i] < self.rank[root_j]:
            root_i, root_j = root_j, root_i
        self.parent[root_j] = root_i
        if self.rank[root_i] == self.rank[root_j]:
            self.rank[root_i] += 1
        return True`,
    prerequisites: ['graph-bfs-dfs'],
    relatedPatterns: ['graph-bfs-dfs', 'minimum-spanning-tree'],
  },
  {
    id: 'dynamic-programming-1d',
    name: '1D Dynamic Programming (State & Transitions)',
    category: 'Dynamic Programming',
    coreIdea: 'Solve complex problems by breaking into overlapping subproblems with optimal substructure, caching subproblem solutions in a 1D array or rolling variables.',
    recognitionSignals: [
      'Maximum or minimum ways to reach a target (Climbing Stairs, Coin Change)',
      'Subarray / subsequence optimization where decision at index `i` depends on decisions at previous indices (House Robber, LIS)',
      'Optimization over linear sequence with choices: take vs skip',
    ],
    typicalStructure: 'dp[i] = max(dp[i-1], dp[i-2] + nums[i]); space optimize to prev1, prev2.',
    whenToUse: [
      'Problem possesses optimal substructure and overlapping subproblems',
    ],
    whenNotToUse: [
      'Problems with greedy choice property where local optimal choice is provably global optimal (Greedy is faster O(N))',
      'No overlapping subproblems (standard divide and conquer)',
    ],
    timeComplexity: 'Typically O(N) or O(N^2)',
    spaceComplexity: 'O(N) or O(1) with space optimization',
    commonMistakes: [
      'Incorrect base cases (e.g. dp[0] initialization in Coin Change with INT_MAX overflow)',
      'Confusing permutation vs combination order of loops in Unbounded Knapsack / Coin Change',
    ],
    illustrativeExample: 'Coin Change (LeetCode 322) & House Robber (LeetCode 198).',
    cppSnippet: `int coinChange(vector<int>& coins, int amount) {
    vector<int> dp(amount + 1, amount + 1);
    dp[0] = 0;
    for (int i = 1; i <= amount; ++i) {
        for (int c : coins) {
            if (i - c >= 0) {
                dp[i] = min(dp[i], dp[i - c] + 1);
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
}`,
    pythonSnippet: `def coin_change(coins: list[int], amount: int) -> int:
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for i in range(1, amount + 1):
        for c in coins:
            if i - c >= 0:
                dp[i] = min(dp[i], dp[i - c] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1`,
    prerequisites: ['recursion'],
    relatedPatterns: ['dynamic-programming-2d', 'memoization'],
  },
  {
    id: 'dynamic-programming-2d',
    name: '2D & Grid Dynamic Programming (Substrings, Grids & Knapsack)',
    category: 'Dynamic Programming',
    coreIdea: 'Formulate state across two dimensions (e.g. prefixes of two strings `dp[i][j]`, or grid coordinates `(r, c)`, or capacity & item index).',
    recognitionSignals: [
      'Two string comparison: Longest Common Subsequence, Edit Distance, Regex matching',
      'Grid shortest path or minimum path sum with directional movement',
      '0/1 Knapsack: choosing subset of items subject to weight limit',
      'Palindromic substrings or interval DP',
    ],
    typicalStructure: 'dp[i][j] = (s1[i-1] == s2[j-1]) ? 1 + dp[i-1][j-1] : max(dp[i-1][j], dp[i][j-1]);',
    whenToUse: [
      'Subproblems naturally indexed by two parameters (prefix lengths, grid positions, range boundaries)',
    ],
    whenNotToUse: [
      'When state can be collapsed to 1 dimension via rolling arrays',
    ],
    timeComplexity: 'O(M * N)',
    spaceComplexity: 'O(M * N), optimizable to O(min(M, N)) with 1D rolling array',
    commonMistakes: [
      'Off-by-one indexing between 1-based DP table and 0-based string characters',
      'Knapsack loop order: iterating capacity backwards in 0/1 knapsack to prevent re-using same item',
    ],
    illustrativeExample: 'Longest Common Subsequence (LeetCode 1143) and Edit Distance (LeetCode 72).',
    cppSnippet: `int longestCommonSubsequence(string text1, string text2) {
    int m = text1.size(), n = text2.size();
    vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
    for (int i = 1; i <= m; ++i) {
        for (int j = 1; j <= n; ++j) {
            if (text1[i - 1] == text2[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
            else dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
        }
    }
    return dp[m][n];
}`,
    pythonSnippet: `def longest_common_subsequence(text1: str, text2: str) -> int:
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i - 1] == text2[j - 1]:
                dp[i][j] = 1 + dp[i - 1][j - 1]
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    return dp[m][n]`,
    prerequisites: ['dynamic-programming-1d'],
    relatedPatterns: ['dynamic-programming-1d', 'backtracking'],
  },
  {
    id: 'backtracking',
    name: 'Backtracking & Pruning (Subsets, Permutations & N-Queens)',
    category: 'Recursion & Search',
    coreIdea: 'Systematically explore search space by making a choice, exploring deeper recursively, and reverting (undoing) the choice to explore alternatives, with aggressive pruning of dead branches.',
    recognitionSignals: [
      'Generate all subsets, combinations, permutations, or partitions',
      'Solve puzzles: N-Queens, Sudoku Solver, Word Search',
      'Constraint satisfaction problems with small N (typically N <= 20)',
    ],
    typicalStructure: 'void backtrack(state) { if (goal) { record(); return; } for (choice : choices) { if (!valid(choice)) continue; make(choice); backtrack(next_state); undo(choice); } }',
    whenToUse: [
      'All valid solutions need to be enumerated',
      'Pruning constraints allow skipping exponential branches early',
    ],
    whenNotToUse: [
      'Only counting the number of ways without listing them (usually DP is polynomial vs exponential)',
      'N > 30 (unless search space is trivially small due to pruning)',
    ],
    timeComplexity: 'Exponential (e.g., O(2^N) for subsets, O(N!) for permutations)',
    spaceComplexity: 'O(N) recursion depth',
    commonMistakes: [
      'Forgetting to backtrack/undo mutable state before returning from recursive call',
      'Not sorting before handling duplicates in Subsets II or Combination Sum II',
    ],
    illustrativeExample: 'Permutations (LeetCode 46) and N-Queens (LeetCode 51).',
    cppSnippet: `void backtrack(vector<int>& nums, vector<bool>& used, vector<int>& curr, vector<vector<int>>& res) {
    if (curr.size() == nums.size()) {
        res.push_back(curr);
        return;
    }
    for (int i = 0; i < nums.size(); ++i) {
        if (used[i]) continue;
        used[i] = true;
        curr.push_back(nums[i]);
        backtrack(nums, used, curr, res);
        curr.pop_back();
        used[i] = false;
    }
}`,
    pythonSnippet: `def permute(nums: list[int]) -> list[list[int]]:
    res = []
    def backtrack(curr, remaining):
        if not remaining:
            res.append(list(curr))
            return
        for i in range(len(remaining)):
            curr.append(remaining[i])
            backtrack(curr, remaining[:i] + remaining[i+1:])
            curr.pop()
    backtrack([], nums)
    return res`,
    prerequisites: ['recursion'],
    relatedPatterns: ['recursion', 'dynamic-programming-2d'],
  },
  {
    id: 'trie',
    name: 'Trie (Prefix Tree) & Bitwise Trie',
    category: 'Trees & Advanced Strings',
    coreIdea: 'Tree data structure where each node represents a character or bit, enabling prefix queries, dictionary lookup, and maximum XOR pairings in O(L) time.',
    recognitionSignals: [
      'Prefix search, autocomplete, spell check',
      'Word Search II (finding words from dictionary in grid)',
      'Maximum XOR of two numbers in an array (Bitwise Trie)',
      'Replace words with shortest matching root prefix',
    ],
    typicalStructure: 'struct TrieNode { TrieNode* children[26] = {nullptr}; bool isWord = false; };',
    whenToUse: [
      'Frequent prefix matching where Hash Set lookup is inefficient O(L * count)',
    ],
    whenNotToUse: [
      'Exact word match only without prefix requirements (Hash Set is simpler and O(1) average)',
    ],
    timeComplexity: 'O(L) per insert/search where L is word length',
    spaceComplexity: 'O(N * L * AlphabetSize)',
    commonMistakes: [
      'Memory leaks in C++ if destructors are omitted',
      'Forgetting `isWord` boolean flag check when distinguishing full words from prefix nodes',
    ],
    illustrativeExample: 'Implement Trie (LeetCode 208) and Maximum XOR of Two Numbers (LeetCode 421).',
    cppSnippet: `class Trie {
    struct Node {
        Node* children[26] = {nullptr};
        bool isEnd = false;
    } root;
public:
    void insert(string word) {
        Node* curr = &root;
        for (char c : word) {
            int idx = c - 'a';
            if (!curr->children[idx]) curr->children[idx] = new Node();
            curr = curr->children[idx];
        }
        curr->isEnd = true;
    }
    bool startsWith(string prefix) {
        Node* curr = &root;
        for (char c : prefix) {
            int idx = c - 'a';
            if (!curr->children[idx]) return false;
            curr = curr->children[idx];
        }
        return true;
    }
};`,
    pythonSnippet: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()
    def insert(self, word: str) -> None:
        curr = self.root
        for ch in word:
            if ch not in curr.children:
                curr.children[ch] = TrieNode()
            curr = curr.children[ch]
        curr.is_end = True
    def starts_with(self, prefix: str) -> bool:
        curr = self.root
        for ch in prefix:
            if ch not in curr.children:
                return False
            curr = curr.children[ch]
        return True`,
    prerequisites: ['tree-traversals'],
    relatedPatterns: ['hash-map', 'bit-manipulation'],
  },
  {
    id: 'bit-manipulation',
    name: 'Bit Manipulation & Bitmasking',
    category: 'Bitwise & Low-Level',
    coreIdea: 'Leverage binary representation and bitwise operators (&, |, ^, ~, <<, >>) to achieve O(1) state transitions, subsets representation, and parity cancellation.',
    recognitionSignals: [
      'Single number (every element appears twice except one -> XOR cancellation)',
      'Subsets / combinations with N <= 30 represented as integers (mask from 0 to 2^N - 1)',
      'Counting set bits (Brian Kernighan’s algorithm `n & (n - 1)`)',
      'Power of two check (`n > 0 && (n & (n - 1)) == 0`)',
    ],
    typicalStructure: 'int mask = 0; mask |= (1 << bit); bool isSet = (mask & (1 << bit)) != 0;',
    whenToUse: [
      'Extremely compact representation of state for Traveling Salesperson / DP with Bitmask',
      'Constant-time set operations (union, intersection, membership)',
    ],
    whenNotToUse: [
      'When subset size N > 64 (exceeds uint64_t registers)',
    ],
    timeComplexity: 'O(1) per bitwise operation',
    spaceComplexity: 'O(1) auxiliary space',
    commonMistakes: [
      'Operator precedence: `+` and `-` have higher precedence than bitwise shifts! Always wrap in parentheses: `(1 << k)`',
      'Negative number sign bit extension in right shifts (use unsigned in C++ or `>>>` in Java/JS)',
    ],
    illustrativeExample: 'Single Number (LeetCode 136) & Number of 1 Bits (LeetCode 191).',
    cppSnippet: `int singleNumber(vector<int>& nums) {
    int res = 0;
    for (int x : nums) res ^= x;
    return res;
}
bool isPowerOfTwo(int n) {
    return n > 0 && (n & ((long long)n - 1)) == 0;
}`,
    pythonSnippet: `def single_number(nums: list[int]) -> int:
    res = 0
    for x in nums:
        res ^= x
    return res

def is_power_of_two(n: int) -> bool:
    return n > 0 and (n & (n - 1)) == 0`,
    prerequisites: ['math-basics'],
    relatedPatterns: ['dynamic-programming-1d', 'trie'],
  },
  {
    id: 'tree-bfs-dfs',
    name: 'Binary Tree BFS & DFS (LCA, Path Sum & Views)',
    category: 'Trees & Hierarchical',
    coreIdea: 'Traverse tree structures recursively (Pre-order, In-order, Post-order) for subtree aggregations, or with queue (BFS Level-order) for level-by-level views and shortest distance.',
    recognitionSignals: [
      'Maximum depth, diameter, or path sum in binary tree',
      'Lowest Common Ancestor in Binary Tree or BST',
      'Level order traversal, zigzag view, right/left side views',
      'Serialize and deserialize binary tree',
    ],
    typicalStructure: 'int dfs(TreeNode* node) { if (!node) return 0; int l = dfs(node->left), r = dfs(node->right); return 1 + max(l, r); }',
    whenToUse: [
      'Hierarchical divide-and-conquer on subtrees (left and right answers combine into parent answer)',
      'Level-by-level processing with queue size snapshot',
    ],
    whenNotToUse: [
      'Graphs with cycles (trees are by definition acyclic connected; graphs require visited set)',
    ],
    timeComplexity: 'O(N) visiting every node once',
    spaceComplexity: 'O(H) recursion stack where H is tree height (O(log N) balanced, O(N) worst)',
    commonMistakes: [
      'Not checking if root is nullptr before accessing children',
      'Confusing BST properties (left < node < right for all subtree descendants) with local child checks',
    ],
    illustrativeExample: 'Lowest Common Ancestor (LeetCode 236) and Binary Tree Maximum Path Sum (LeetCode 124).',
    cppSnippet: `TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
    if (!root || root == p || root == q) return root;
    TreeNode* left = lowestCommonAncestor(root->left, p, q);
    TreeNode* right = lowestCommonAncestor(root->right, p, q);
    if (left && right) return root;
    return left ? left : right;
}`,
    pythonSnippet: `def lowest_common_ancestor(root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
    if not root or root == p or root == q:
        return root
    left = lowest_common_ancestor(root.left, p, q)
    right = lowest_common_ancestor(root.right, p, q)
    if left and right:
        return root
    return left or right`,
    prerequisites: ['recursion'],
    relatedPatterns: ['graph-bfs-dfs', 'binary-search-trees'],
  },
  {
    id: 'greedy-intervals',
    name: 'Greedy Interval Scheduling & Merging',
    category: 'Greedy & Intervals',
    coreIdea: 'Sort intervals by start or end time and make local optimal greedy decisions (e.g., merge overlapping, pick earliest finishing) to produce globally optimal results.',
    recognitionSignals: [
      'Merge overlapping intervals (LeetCode 56)',
      'Meeting rooms required (concurrent interval overlaps)',
      'Non-overlapping intervals maximum count (Interval Scheduling)',
      'Insert interval into sorted list',
    ],
    typicalStructure: 'sort(intervals.begin(), intervals.end()); for (auto& inv : intervals) { if (overlap) merge(); else push(); }',
    whenToUse: [
      'Interval scheduling: sorting by end time yields maximum compatible subset',
      'Interval merging: sorting by start time allows linear single-pass consolidation',
    ],
    whenNotToUse: [
      'Weighted interval scheduling (where intervals have different values/profits -> requires DP + Binary Search)',
    ],
    timeComplexity: 'O(N log N) due to sorting, then O(N) scan',
    spaceComplexity: 'O(N) for result array or O(1) in-place',
    commonMistakes: [
      'Sorting by start time instead of end time when doing interval selection / removal',
      'Forgetting edge touch conditions (e.g. `[1, 2]` and `[2, 3]` overlapping vs non-overlapping according to problem specification)',
    ],
    illustrativeExample: 'Merge Intervals (LeetCode 56) and Non-overlapping Intervals (LeetCode 435).',
    cppSnippet: `vector<vector<int>> merge(vector<vector<int>>& intervals) {
    if (intervals.empty()) return {};
    sort(intervals.begin(), intervals.end());
    vector<vector<int>> merged = {intervals[0]};
    for (int i = 1; i < intervals.size(); ++i) {
        if (intervals[i][0] <= merged.back()[1]) {
            merged.back()[1] = max(merged.back()[1], intervals[i][1]);
        } else {
            merged.push_back(intervals[i]);
        }
    }
    return merged;
}`,
    pythonSnippet: `def merge(intervals: list[list[int]]) -> list[list[int]]:
    if not intervals: return []
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0]]
    for curr in intervals[1:]:
        if curr[0] <= merged[-1][1]:
            merged[-1][1] = max(merged[-1][1], curr[1])
        else:
            merged.append(curr)
    return merged`,
    prerequisites: ['sorting'],
    relatedPatterns: ['two-pointers', 'heap-basics'],
  }
];
