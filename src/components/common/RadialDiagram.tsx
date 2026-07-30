import React from 'react';

interface Spoke {
  label: string;
  color: string;
}

interface RadialDiagramProps {
  center: string;
  spokes: Spoke[];
  size?: number;
}

const RadialDiagram: React.FC<RadialDiagramProps> = ({ center, spokes, size = 440 }) => {
  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.32;

  return (
    <svg
      className="w-full h-auto max-w-[440px] select-none"
      viewBox={`0 0 ${size} ${size}`}
    >
      {/* Draw spokes */}
      {spokes.map((spoke, idx) => {
        const angle = (Math.PI * 2 * idx) / spokes.length - Math.PI / 2;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        const tx = cx + (r + 34) * Math.cos(angle);
        const ty = cy + (r + 34) * Math.sin(angle);

        return (
          <g key={`spoke-${idx}`}>
            {/* Spoke Line */}
            <line
              x1={cx}
              y1={cy}
              x2={x}
              y2={y}
              stroke="#d8d5cb"
              strokeWidth="1"
            />
            {/* Node Circle */}
            <circle
              cx={x}
              cy={y}
              r="5"
              fill={spoke.color}
              opacity="0.85"
            />
            {/* Text Label */}
            <text
              x={tx}
              y={ty}
              fontFamily="IBM Plex Mono, monospace"
              fontSize="9.5"
              fill="#8b8d94"
              textAnchor="middle"
              dominantBaseline="middle"
              letterSpacing="0.5"
            >
              {spoke.label}
            </text>
          </g>
        );
      })}

      {/* Central Hub Circle */}
      <circle
        cx={cx}
        cy={cy}
        r={size * 0.14}
        fill="#faf9f6"
        stroke="#e2dfd7"
        strokeWidth="1"
      />
      {/* Central Hub Text (Handling newlines if any) */}
      {center.split('\n').map((line, idx, arr) => {
        const offset = (idx - (arr.length - 1) / 2) * 11;
        return (
          <text
            key={`center-text-${idx}`}
            x={cx}
            y={cy + offset}
            fontFamily="IBM Plex Mono, monospace"
            fontSize="9"
            fill="#4c4e56"
            textAnchor="middle"
            dominantBaseline="middle"
            letterSpacing="0.5"
            fontWeight="500"
          >
            {line}
          </text>
        );
      })}
    </svg>
  );
};

export default RadialDiagram;
