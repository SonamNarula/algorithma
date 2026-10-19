import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  Position,
  MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useApp } from '../../context/AppContext';

export const PatternGraph: React.FC = () => {
  const { analytics } = useApp();
  const navigate = useNavigate();

  // Create nodes with positions and mastery data
  const nodes: Node[] = useMemo(() => {
    const patternData = (patId: string) => {
      const match = analytics.patternMastery.find((p) => p.pattern === patId);
      return match || { solved: 0, total: 10, masteryRate: 0 };
    };

    const rawNodes = [
      // Phase 1: Foundations
      { id: 'arrays', label: 'Array Traversal & Math', x: 50, y: 50, pat: 'arrays' },
      { id: 'prefix-sum', label: 'Prefix Sum & Diff Array', x: 280, y: 50, pat: 'prefix-sum' },
      { id: 'two-pointers', label: 'Two Pointers Technique', x: 520, y: 50, pat: 'two-pointers' },
      { id: 'sliding-window', label: 'Sliding Window', x: 760, y: 50, pat: 'sliding-window' },

      // Phase 2 & 3: Linear & Searching
      { id: 'hash-map', label: 'Hashing & Frequency', x: 280, y: 160, pat: 'hash-map' },
      { id: 'fast-slow-pointers', label: 'Fast & Slow Pointers', x: 520, y: 160, pat: 'fast-slow-pointers' },
      { id: 'binary-search', label: 'Binary Search (Classic & Answer)', x: 760, y: 160, pat: 'binary-search' },

      // Phase 3 & 4: Stacks & Trees
      { id: 'stacks', label: 'Stacks & Monotonic Stack', x: 50, y: 270, pat: 'monotonic-stack' },
      { id: 'recursion', label: 'Recursion & Backtracking', x: 400, y: 270, pat: 'backtracking' },
      { id: 'tree-bfs-dfs', label: 'Binary Trees & BST', x: 760, y: 270, pat: 'tree-bfs-dfs' },

      // Phase 5 & 6: Priority & Graphs
      { id: 'top-k-elements-heap', label: 'Heaps & Priority Queue', x: 50, y: 390, pat: 'top-k-elements-heap' },
      { id: 'graph-bfs-dfs', label: 'Graph BFS, DFS & Cycles', x: 400, y: 390, pat: 'graph-bfs-dfs' },
      { id: 'union-find', label: 'Union-Find (DSU)', x: 760, y: 390, pat: 'union-find' },

      // Phase 7, 8, 9: Advanced DP & Bitwise
      { id: 'dynamic-programming-1d', label: '1D Dynamic Programming', x: 200, y: 510, pat: 'dynamic-programming-1d' },
      { id: 'dynamic-programming-2d', label: '2D & Grid DP', x: 550, y: 510, pat: 'dynamic-programming-2d' },
      { id: 'bit-manipulation', label: 'Bit Manipulation & Trie', x: 800, y: 510, pat: 'bit-manipulation' },
    ];

    return rawNodes.map((n) => {
      const stats = patternData(n.pat);
      return {
        id: n.id,
        position: { x: n.x, y: n.y },
        data: {
          label: (
            <div className="p-3 text-left">
              <div className="text-xs font-bold text-content-primary tracking-tight font-sans">
                {n.label}
              </div>
              <div className="flex items-center justify-between text-[10px] text-content-muted mt-1.5 font-mono">
                <span>Mastery: {stats.masteryRate}%</span>
                <span className="text-indigo-400 font-semibold">{stats.solved}/{stats.total}</span>
              </div>
              <div className="w-full bg-surface-secondary h-1 rounded-full mt-1.5 overflow-hidden border border-border-subtle">
                <div
                  className="bg-primary h-full transition-all duration-300"
                  style={{ width: `${Math.max(5, stats.masteryRate)}%` }}
                />
              </div>
            </div>
          ),
        },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        style: {
          background: '#161A23',
          border: '1px solid #272E40',
          borderRadius: '0.75rem',
          width: 200,
          color: '#F3F4F6',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
        },
      };
    });
  }, [analytics]);

  const edges: Edge[] = useMemo(() => [
    { id: 'e1-2', source: 'arrays', target: 'prefix-sum', markerEnd: { type: MarkerType.ArrowClosed, color: '#6366F1' }, style: { stroke: '#6366F1' } },
    { id: 'e2-3', source: 'prefix-sum', target: 'two-pointers', markerEnd: { type: MarkerType.ArrowClosed, color: '#6366F1' }, style: { stroke: '#6366F1' } },
    { id: 'e3-4', source: 'two-pointers', target: 'sliding-window', markerEnd: { type: MarkerType.ArrowClosed, color: '#6366F1' }, style: { stroke: '#6366F1' } },
    
    { id: 'e2-hash', source: 'prefix-sum', target: 'hash-map', markerEnd: { type: MarkerType.ArrowClosed, color: '#4B5563' }, style: { stroke: '#374151' } },
    { id: 'e3-fastslow', source: 'two-pointers', target: 'fast-slow-pointers', markerEnd: { type: MarkerType.ArrowClosed, color: '#4B5563' }, style: { stroke: '#374151' } },
    { id: 'e3-bs', source: 'two-pointers', target: 'binary-search', markerEnd: { type: MarkerType.ArrowClosed, color: '#4B5563' }, style: { stroke: '#374151' } },
    
    { id: 'e-stacks', source: 'arrays', target: 'stacks', markerEnd: { type: MarkerType.ArrowClosed, color: '#374151' }, style: { stroke: '#374151' } },
    { id: 'e-rec', source: 'hash-map', target: 'recursion', markerEnd: { type: MarkerType.ArrowClosed, color: '#6366F1' }, style: { stroke: '#6366F1' } },
    { id: 'e-trees', source: 'recursion', target: 'tree-bfs-dfs', markerEnd: { type: MarkerType.ArrowClosed, color: '#6366F1' }, style: { stroke: '#6366F1' } },
    
    { id: 'e-heaps', source: 'stacks', target: 'top-k-elements-heap', markerEnd: { type: MarkerType.ArrowClosed, color: '#374151' }, style: { stroke: '#374151' } },
    { id: 'e-graphs', source: 'tree-bfs-dfs', target: 'graph-bfs-dfs', markerEnd: { type: MarkerType.ArrowClosed, color: '#6366F1' }, style: { stroke: '#6366F1' } },
    { id: 'e-uf', source: 'graph-bfs-dfs', target: 'union-find', markerEnd: { type: MarkerType.ArrowClosed, color: '#374151' }, style: { stroke: '#374151' } },
    
    { id: 'e-dp1', source: 'recursion', target: 'dynamic-programming-1d', markerEnd: { type: MarkerType.ArrowClosed, color: '#6366F1' }, style: { stroke: '#6366F1' } },
    { id: 'e-dp2', source: 'dynamic-programming-1d', target: 'dynamic-programming-2d', markerEnd: { type: MarkerType.ArrowClosed, color: '#6366F1' }, style: { stroke: '#6366F1' } },
    { id: 'e-bit', source: 'dynamic-programming-1d', target: 'bit-manipulation', markerEnd: { type: MarkerType.ArrowClosed, color: '#374151' }, style: { stroke: '#374151' } },
  ], []);

  const onNodeClick = (_: any, node: Node) => {
    navigate(`/patterns?search=${encodeURIComponent(node.id)}`);
  };

  return (
    <div className="w-full h-[540px] rounded-xl border border-border-default overflow-hidden bg-[#0B0D12] relative shadow-inner">
      <div className="absolute top-3 left-3 z-10 px-3 py-1.5 rounded-lg bg-surface-primary/90 border border-border-subtle backdrop-blur text-xs text-content-secondary font-mono flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400" />
        <span>Interactive Pattern Dependency Map (Click node to view pattern)</span>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeClick={onNodeClick}
        fitView
        attributionPosition="bottom-right"
      >
        <Background color="#1C2130" gap={16} />
        <Controls />
        <MiniMap
          nodeColor="#6366F1"
          maskColor="rgba(11, 13, 18, 0.85)"
          className="bg-surface-primary border border-border-default rounded-lg"
        />
      </ReactFlow>
    </div>
  );
};
