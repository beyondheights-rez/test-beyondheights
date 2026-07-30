import React from 'react';

interface Point {
  x: number;
  y: number;
  r: number;
  color: string;
  delay: number;
  duration: number;
}

interface Connection {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

const WIDTH = 1400;
const HEIGHT = 900;
const POINTS_COUNT = 46;

const COLORS = [
  '#dd9a3c', // brand-amber
  '#3fada7', // brand-teal
  '#5a86e0', // brand-blue
  '#9a82dd', // brand-violet
  '#dd7a9e', // brand-rose
  '#5aab7c', // brand-green
];

// Generate static coordinates and links once at module level to remain pure during render
const staticConstellation = (() => {
  const pts: Point[] = [];
  for (let i = 0; i < POINTS_COUNT; i++) {
    pts.push({
      x: Math.random() * WIDTH,
      y: Math.random() * HEIGHT * 0.9 + HEIGHT * 0.05,
      r: 1.1 + Math.random() * 2.4,
      color: COLORS[i % COLORS.length],
      delay: Math.random() * 4,
      duration: 4 + Math.random() * 4,
    });
  }

  const conns: Connection[] = [];
  for (let i = 0; i < POINTS_COUNT; i++) {
    for (let j = i + 1; j < POINTS_COUNT; j++) {
      const dx = pts[i].x - pts[j].x;
      const dy = pts[i].y - pts[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 190 && Math.random() > 0.55) {
        conns.push({
          x1: pts[i].x,
          y1: pts[i].y,
          x2: pts[j].x,
          y2: pts[j].y,
        });
      }
    }
  }

  return { points: pts, connections: conns };
})();

const ConstellationBackdrop: React.FC = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Draw connecting edges */}
      {staticConstellation.connections.map((conn, idx) => (
        <line
          key={`edge-${idx}`}
          x1={conn.x1}
          y1={conn.y1}
          x2={conn.x2}
          y2={conn.y2}
          stroke="#c9c6bc"
          strokeWidth="0.6"
          opacity="0.35"
        />
      ))}

      {/* Draw nodes with SVG animate tags */}
      {staticConstellation.points.map((p, idx) => (
        <circle
          key={`node-${idx}`}
          cx={p.x}
          cy={p.y}
          r={p.r}
          fill={p.color}
          opacity="0.55"
        >
          <animate
            attributeName="opacity"
            values="0.25;0.65;0.25"
            dur={`${p.duration}s`}
            begin={`${p.delay}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  );
};

export default ConstellationBackdrop;
