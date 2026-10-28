import React, { useState } from 'react';
import { RotateCw, Eye, Sparkles } from 'lucide-react';

interface Props {
  className?: string;
}

export const OxyzInteractive3D: React.FC<Props> = ({ className = '' }) => {
  const [yaw, setYaw] = useState<number>(35);
  const [pitch, setPitch] = useState<number>(20);
  const [showNormalVector, setShowNormalVector] = useState<boolean>(true);
  const [showCoordinates, setShowCoordinates] = useState<boolean>(true);
  const [isRotating, setIsRotating] = useState<boolean>(false);

  // Auto rotation effect
  React.useEffect(() => {
    if (!isRotating) return;
    const interval = setInterval(() => {
      setYaw((prev) => (prev + 1.5) % 360);
    }, 40);
    return () => clearInterval(interval);
  }, [isRotating]);

  // Transform 3D coordinates (x, y, z) into 2D SVG canvas (cx, cy)
  const project = (x: number, y: number, z: number) => {
    const radYaw = (yaw * Math.PI) / 180;
    const radPitch = (pitch * Math.PI) / 180;

    // Rotate around Z axis (yaw)
    const x1 = x * Math.cos(radYaw) - y * Math.sin(radYaw);
    const y1 = x * Math.sin(radYaw) + y * Math.cos(radYaw);
    const z1 = z;

    // Rotate around X axis (pitch)
    const x2 = x1;
    const y2 = y1 * Math.cos(radPitch) - z1 * Math.sin(radPitch);
    const z2 = y1 * Math.sin(radPitch) + z1 * Math.cos(radPitch);

    // Isometric projection mapping to SVG viewport
    const scale = 24;
    const centerX = 200;
    const centerY = 190;

    return {
      x: centerX + x2 * scale,
      y: centerY - z2 * scale,
      depth: y2,
    };
  };

  // Define vertices of regular pyramid S.ABCD in Oxyz:
  // Base ABCD centered at O(0,0,0) in Oxy plane with side 2a (a=2 -> side 4):
  // A(2, -2, 0), B(2, 2, 0), C(-2, 2, 0), D(-2, -2, 0)
  // Vertex S on Oz at (0, 0, h), with alpha = 60 deg, h = a * sqrt(3) ≈ 2 * 1.732 = 3.46
  const a = 2.4;
  const h = 4.2;

  const O = project(0, 0, 0);
  const S = project(0, 0, h);
  const A = project(a, -a, 0);
  const B = project(a, a, 0);
  const C = project(-a, a, 0);
  const D = project(-a, -a, 0);
  const M = project(0, a, 0); // Midpoint of BC

  // Axes tips
  const axisX = project(4.5, 0, 0);
  const axisY = project(0, 4.5, 0);
  const axisZ = project(0, 0, 5.5);

  // Normal vector \vec{n}_{(SBC)} starting from face center
  const normalStart = project(0, a * 0.6, h * 0.4);
  const normalEnd = project(-2.2, a + 1.8, h * 0.8);

  return (
    <div className={`relative bg-[#080c14] border border-slate-800 rounded-xl p-4 flex flex-col justify-between overflow-hidden shadow-2xl select-none ${className}`}>
      {/* HUD Header */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-mono text-cyan-300 font-semibold uppercase tracking-wider text-[11px]">
            Mô Hình Không Gian 3D (Brilliant Vector)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 font-mono text-[10px] text-slate-400">
            RENDER: 60FPS VECTOR
          </span>
        </div>
      </div>

      {/* SVG 3D Canvas */}
      <div 
        className="relative w-full h-[260px] cursor-grab active:cursor-grabbing flex items-center justify-center my-1"
        onMouseDown={(e) => {
          const startX = e.clientX;
          const startY = e.clientY;
          const initialYaw = yaw;
          const initialPitch = pitch;

          const onMouseMove = (moveEvent: MouseEvent) => {
            const dx = moveEvent.clientX - startX;
            const dy = moveEvent.clientY - startY;
            setYaw(initialYaw + dx * 0.6);
            setPitch(Math.max(-45, Math.min(75, initialPitch + dy * 0.4)));
          };

          const onMouseUp = () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
          };

          window.addEventListener('mousemove', onMouseMove);
          window.addEventListener('mouseup', onMouseUp);
        }}
      >
        <svg viewBox="0 0 400 300" className="w-full h-full drop-shadow-md">
          <defs>
            <linearGradient id="planeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="faceSBCGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
            </linearGradient>
            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#38bdf8" />
            </marker>
            <marker id="arrowPurple" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#a855f7" />
            </marker>
          </defs>

          {/* Coordinate Axes */}
          {/* X Axis */}
          <line x1={O.x} y1={O.y} x2={axisX.x} y2={axisX.y} stroke="#64748b" strokeWidth="1.2" strokeDasharray="3 3" />
          <text x={axisX.x + 6} y={axisX.y + 4} fill="#94a3b8" fontSize="11" fontFamily="JetBrains Mono">x</text>

          {/* Y Axis */}
          <line x1={O.x} y1={O.y} x2={axisY.x} y2={axisY.y} stroke="#64748b" strokeWidth="1.2" strokeDasharray="3 3" />
          <text x={axisY.x + 8} y={axisY.y + 4} fill="#94a3b8" fontSize="11" fontFamily="JetBrains Mono">y</text>

          {/* Z Axis (Height) */}
          <line x1={O.x} y1={O.y} x2={axisZ.x} y2={axisZ.y} stroke="#06b6d4" strokeWidth="1.8" markerEnd="url(#arrow)" />
          <text x={axisZ.x + 8} y={axisZ.y + 2} fill="#38bdf8" fontSize="12" fontWeight="600" fontFamily="JetBrains Mono">z (Oz)</text>

          {/* Base ABCD polygon */}
          <polygon
            points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y} ${D.x},${D.y}`}
            fill="url(#planeGrad)"
            stroke="#475569"
            strokeWidth="1.2"
          />

          {/* Base diagonals / center lines */}
          <line x1={A.x} y1={A.y} x2={C.x} y2={C.y} stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
          <line x1={B.x} y1={B.y} x2={D.x} y2={D.y} stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />

          {/* Altitude SO */}
          <line x1={S.x} y1={S.y} x2={O.x} y2={O.y} stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3 2" />

          {/* Lateral Face SBC Highlighted */}
          <polygon
            points={`${S.x},${S.y} ${B.x},${B.y} ${C.x},${C.y}`}
            fill="url(#faceSBCGrad)"
            stroke="#38bdf8"
            strokeWidth="1.6"
          />

          {/* Edges from S to Base Vertices */}
          <line x1={S.x} y1={S.y} x2={A.x} y2={A.y} stroke="#6366f1" strokeWidth="1.5" />
          <line x1={S.x} y1={S.y} x2={B.x} y2={B.y} stroke="#38bdf8" strokeWidth="1.8" />
          <line x1={S.x} y1={S.y} x2={C.x} y2={C.y} stroke="#38bdf8" strokeWidth="1.8" />
          <line x1={S.x} y1={S.y} x2={D.x} y2={D.y} stroke="#6366f1" strokeWidth="1.5" />

          {/* SM Altitude of Face SBC */}
          <line x1={S.x} y1={S.y} x2={M.x} y2={M.y} stroke="#ec4899" strokeWidth="1.4" strokeDasharray="3 2" />
          <line x1={O.x} y1={O.y} x2={M.x} y2={M.y} stroke="#ec4899" strokeWidth="1.2" strokeDasharray="3 2" />

          {/* Angle theta = 60 deg indicator at M */}
          <circle cx={M.x} cy={M.y} r="3" fill="#ec4899" />
          <text x={M.x + 8} y={M.y - 4} fill="#f472b6" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono">α = 60°</text>

          {/* Normal Vector \vec{n}_{(SBC)} */}
          {showNormalVector && (
            <g>
              <line
                x1={normalStart.x}
                y1={normalStart.y}
                x2={normalEnd.x}
                y2={normalEnd.y}
                stroke="#a855f7"
                strokeWidth="2"
                markerEnd="url(#arrowPurple)"
              />
              <text
                x={normalEnd.x + 6}
                y={normalEnd.y}
                fill="#c084fc"
                fontSize="11"
                fontWeight="bold"
                fontFamily="JetBrains Mono"
              >
                \vec&#123;n&#125;_(SBC)
              </text>
            </g>
          )}

          {/* Vertex Labels */}
          {showCoordinates && (
            <>
              {/* S */}
              <circle cx={S.x} cy={S.y} r="4" fill="#38bdf8" />
              <text x={S.x + 8} y={S.y - 4} fill="#e0f2fe" fontSize="12" fontWeight="bold" fontFamily="JetBrains Mono">
                S(0, 0, h)
              </text>

              {/* O */}
              <circle cx={O.x} cy={O.y} r="3" fill="#94a3b8" />
              <text x={O.x - 14} y={O.y + 12} fill="#94a3b8" fontSize="10" fontFamily="JetBrains Mono">
                O(0,0,0)
              </text>

              {/* A */}
              <circle cx={A.x} cy={A.y} r="3" fill="#818cf8" />
              <text x={A.x + 6} y={A.y + 6} fill="#c7d2fe" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono">A</text>

              {/* B */}
              <circle cx={B.x} cy={B.y} r="3" fill="#38bdf8" />
              <text x={B.x + 6} y={B.y + 4} fill="#bae6fd" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono">B</text>

              {/* C */}
              <circle cx={C.x} cy={C.y} r="3" fill="#38bdf8" />
              <text x={C.x - 14} y={C.y - 4} fill="#bae6fd" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono">C</text>

              {/* D */}
              <circle cx={D.x} cy={D.y} r="3" fill="#818cf8" />
              <text x={D.x - 14} y={D.y + 6} fill="#c7d2fe" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono">D</text>

              {/* M */}
              <text x={M.x - 6} y={M.y + 16} fill="#fda4af" fontSize="9" fontFamily="JetBrains Mono">
                M (trung điểm BC)
              </text>
            </>
          )}
        </svg>
      </div>

      {/* Interactive Controls Bar */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[11px] gap-2">
        <button
          onClick={() => setIsRotating(!isRotating)}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded border transition-colors ${
            isRotating
              ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
              : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
          }`}
        >
          <RotateCw className={`w-3 h-3 ${isRotating ? 'animate-spin' : ''}`} />
          <span>{isRotating ? 'Đang xoay' : 'Xoay 360°'}</span>
        </button>

        <button
          onClick={() => setShowNormalVector(!showNormalVector)}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded border transition-colors ${
            showNormalVector
              ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40'
              : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700'
          }`}
        >
          <Eye className="w-3 h-3" />
          <span>{showNormalVector ? 'Ẩn Vector n' : 'Hiện Vector n'}</span>
        </button>

        <button
          onClick={() => {
            setYaw(35);
            setPitch(20);
            setIsRotating(false);
          }}
          className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 transition-colors"
        >
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>Reset góc nhìn</span>
        </button>
      </div>
    </div>
  );
};
