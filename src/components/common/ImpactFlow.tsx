import React from 'react';

interface FlowNode {
  symbol: React.ReactNode;
  label: string;
  color: string; // e.g. 'var(--color-brand-green)'
}

interface ImpactFlowProps {
  nodes: FlowNode[];
}

const ImpactFlow: React.FC<ImpactFlowProps> = ({ nodes }) => {
  return (
    <div className="flex items-center justify-center gap-6 md:gap-8 flex-wrap mt-4 w-full">
      {nodes.map((node, idx) => (
        <React.Fragment key={`flow-node-${idx}`}>
          {/* Node */}
          <div className="text-center flex flex-col items-center">
            {/* Circle */}
            <div
              style={{ color: node.color, borderColor: 'var(--color-brand-line)' }}
              className="w-[76px] h-[76px] rounded-full border flex items-center justify-center mx-auto mb-3 bg-white text-lg font-serif select-none"
            >
              {node.symbol}
            </div>
            {/* Label */}
            <div className="font-mono text-[10px] tracking-wider uppercase text-brand-ink-soft max-w-[100px] leading-tight">
              {node.label}
            </div>
          </div>

          {/* Separator Arrow */}
          {idx < nodes.length - 1 && (
            <span className="text-brand-muted text-lg self-center mb-6 hidden sm:inline">
              →
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ImpactFlow;
