import React, { useState } from 'react';
import { 
  User, 
  Share2, 
  Download, 
  Activity, 
  Award, 
  Flame, 
  CheckCircle2, 
  Brain, 
  Trophy, 
  Zap, 
  Layers, 
  Sparkles,
  BarChart2,
  Calendar
} from 'lucide-react';
import { SAMPLE_STUDENT, RADAR_DATA, THINKING_TRAPS } from '../data/mockData';
import confetti from 'canvas-confetti';

export const ProfilePage: React.FC = () => {
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<'all' | 'math' | 'physics' | 'cs'>('all');
  const [activeRadarSubject, setActiveRadarSubject] = useState<string | null>(null);

  const handleExportPDF = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 }
    });
    alert('Đang tạo báo cáo năng lực PDF phân tích 3 môn Toán - Lý - Tin của thí sinh Nguyễn Hoàng Long...');
  };

  const filteredTraps = THINKING_TRAPS.filter(trap => {
    if (selectedSubjectFilter === 'all') return true;
    if (selectedSubjectFilter === 'math') return trap.subject.includes('TOÁN');
    if (selectedSubjectFilter === 'physics') return trap.subject.includes('LÝ');
    if (selectedSubjectFilter === 'cs') return trap.subject.includes('TIN');
    return true;
  });

  return (
    <div className="w-full min-h-screen bg-[#070b13] text-slate-200 py-8 px-4 sm:px-6 lg:px-8 space-y-8 max-w-7xl mx-auto">
      {/* Student Banner Header */}
      <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl">
        <div className="flex items-center gap-5">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-indigo-600 via-sky-500 to-emerald-400 p-0.5 shadow-xl shadow-indigo-600/30">
              <div className="w-full h-full bg-[#0a0e17] rounded-[14px] flex items-center justify-center font-bold text-2xl text-white">
                NL
              </div>
            </div>
            <span className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full bg-indigo-600 text-white font-mono text-[10px] font-bold border border-indigo-400/40">
              PRO
            </span>
          </div>

          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {SAMPLE_STUDENT.name}
              </h1>
              <span className="px-2.5 py-0.5 rounded-lg bg-indigo-500/20 text-indigo-300 font-mono text-xs border border-indigo-500/30 font-semibold">
                {SAMPLE_STUDENT.classRoom}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {SAMPLE_STUDENT.school} · {SAMPLE_STUDENT.cohort}
            </p>
            <div className="flex items-center gap-3 mt-3 text-xs font-mono text-slate-300 flex-wrap">
              <span className="text-purple-300 font-bold">● {SAMPLE_STUDENT.tier}</span>
              <span className="text-slate-600">|</span>
              <span className="text-cyan-300 font-semibold">{SAMPLE_STUDENT.rankPercentile}</span>
              <span className="text-slate-600">|</span>
              <span className="text-amber-300 font-semibold flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> {SAMPLE_STUDENT.streak} ngày liên tục
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-emerald-300 font-semibold">✓ {SAMPLE_STUDENT.solvedCount} bài tập đã giải</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button 
            onClick={() => alert('Đã sao chép liên kết hồ sơ!')}
            className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer"
          >
            <Share2 className="w-4 h-4 text-cyan-400" />
            <span>Chia sẻ hồ sơ</span>
          </button>
          <button 
            onClick={handleExportPDF}
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Xuất PDF Báo Cáo</span>
          </button>
        </div>
      </div>

      {/* 3 Discipline Elo Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Math */}
        <div className="bg-[#111827] border border-violet-500/40 rounded-2xl p-5 space-y-3 shadow-xl hover:border-violet-500 transition-all">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-violet-400 font-bold flex items-center gap-1.5">
              <span>● PHÂN MÔN 01</span>
            </span>
            <span className="text-slate-500 text-[10px]">CALCULUS &amp; 3D</span>
          </div>
          <div>
            <span className="text-slate-400 text-xs block">Toán Học</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-extrabold font-mono text-white">1,680</span>
              <span className="text-xs font-mono text-emerald-400 font-semibold">+{SAMPLE_STUDENT.mathDelta} Elo tháng này</span>
            </div>
          </div>
          <div className="space-y-1.5 pt-2 border-t border-slate-800">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-400">Hạng: <strong className="text-violet-300">GUARDIAN</strong></span>
              <span className="text-slate-400">Tiến độ Master (1,800): 84%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
              <div className="h-full bg-violet-500 rounded-full" style={{ width: '84%' }} />
            </div>
          </div>
        </div>

        {/* Physics */}
        <div className="bg-[#111827] border border-cyan-500/40 rounded-2xl p-5 space-y-3 shadow-xl hover:border-cyan-500 transition-all">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-cyan-400 font-bold flex items-center gap-1.5">
              <span>● PHÂN MÔN 02</span>
            </span>
            <span className="text-slate-500 text-[10px]">PHYSICS &amp; CIRCUITS</span>
          </div>
          <div>
            <span className="text-slate-400 text-xs block">Vật Lý</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-extrabold font-mono text-white">1,540</span>
              <span className="text-xs font-mono text-emerald-400 font-semibold">+{SAMPLE_STUDENT.physicsDelta} Elo tháng này</span>
            </div>
          </div>
          <div className="space-y-1.5 pt-2 border-t border-slate-800">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-400">Hạng: <strong className="text-cyan-300">KNIGHT</strong></span>
              <span className="text-slate-400">Tiến độ Guardian (1,650): 70%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-500 rounded-full" style={{ width: '70%' }} />
            </div>
          </div>
        </div>

        {/* CS */}
        <div className="bg-[#111827] border border-indigo-500/40 rounded-2xl p-5 space-y-3 shadow-xl hover:border-indigo-500 transition-all">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-indigo-400 font-bold flex items-center gap-1.5">
              <span>● PHÂN MÔN 03</span>
            </span>
            <span className="text-slate-500 text-[10px]">ALGO &amp; DATA STRUCTURES</span>
          </div>
          <div>
            <span className="text-slate-400 text-xs block">Tin Học</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-extrabold font-mono text-white">1,820</span>
              <span className="text-xs font-mono text-emerald-400 font-semibold">+{SAMPLE_STUDENT.csDelta} Elo tháng này</span>
            </div>
          </div>
          <div className="space-y-1.5 pt-2 border-t border-slate-800">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-400">Hạng: <strong className="text-indigo-300">MASTER</strong></span>
              <span className="text-slate-400">Tiến độ Grandmaster (2,000): 91%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-500 rounded-full" style={{ width: '91%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* 9-Axis Skill Radar Widget & Weekly Elo Progression Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Radar Widget (6 cols) */}
        <div className="lg:col-span-6 bg-[#111827] border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <Activity className="w-4 h-4 text-cyan-400" />
                <span>Radar Năng Lực 9 Phân Môn</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Đánh giá độ hoàn thiện và chiều sâu tư duy trên toàn bộ các chuyên đề trọng điểm.
              </p>
            </div>
            <span className="px-2.5 py-1 rounded bg-cyan-950/40 text-cyan-400 border border-cyan-800/40 font-mono text-xs">
              LIVE SYNC
            </span>
          </div>

          {/* SVG 9-Axis Radar Graphic */}
          <div className="relative w-full h-[280px] flex items-center justify-center">
            <svg viewBox="0 0 320 260" className="w-full h-full">
              <defs>
                <linearGradient id="profileRadarFill" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* Concentric webs */}
              {[0.25, 0.5, 0.75, 1.0].map((level, idx) => (
                <polygon
                  key={idx}
                  points={RADAR_DATA.map((_, i) => {
                    const angle = (i * 2 * Math.PI) / RADAR_DATA.length - Math.PI / 2;
                    const r = 95 * level;
                    const x = 160 + r * Math.cos(angle);
                    const y = 130 + r * Math.sin(angle);
                    return `${x},${y}`;
                  }).join(' ')}
                  fill="none"
                  stroke="#1e293b"
                  strokeWidth="1"
                />
              ))}

              {/* Axis lines */}
              {RADAR_DATA.map((item, i) => {
                const angle = (i * 2 * Math.PI) / RADAR_DATA.length - Math.PI / 2;
                const x = 160 + 95 * Math.cos(angle);
                const y = 130 + 95 * Math.sin(angle);
                return (
                  <line
                    key={i}
                    x1="160"
                    y1="130"
                    x2={x}
                    y2={y}
                    stroke="#1e293b"
                    strokeWidth="1"
                  />
                );
              })}

              {/* National Average comparison contour (gray) */}
              <polygon
                points={RADAR_DATA.map((_, i) => {
                  const angle = (i * 2 * Math.PI) / RADAR_DATA.length - Math.PI / 2;
                  const r = 95 * 0.58;
                  const x = 160 + r * Math.cos(angle);
                  const y = 130 + r * Math.sin(angle);
                  return `${x},${y}`;
                }).join(' ')}
                fill="none"
                stroke="#475569"
                strokeWidth="1.2"
                strokeDasharray="3 3"
              />

              {/* Student polygon */}
              <polygon
                points={RADAR_DATA.map((item, i) => {
                  const angle = (i * 2 * Math.PI) / RADAR_DATA.length - Math.PI / 2;
                  const r = 95 * (item.value / 100);
                  const x = 160 + r * Math.cos(angle);
                  const y = 130 + r * Math.sin(angle);
                  return `${x},${y}`;
                }).join(' ')}
                fill="url(#profileRadarFill)"
                stroke="#06b6d4"
                strokeWidth="2.5"
              />

              {/* Points */}
              {RADAR_DATA.map((item, i) => {
                const angle = (i * 2 * Math.PI) / RADAR_DATA.length - Math.PI / 2;
                const r = 95 * (item.value / 100);
                const x = 160 + r * Math.cos(angle);
                const y = 130 + r * Math.sin(angle);

                const labelR = 118;
                const lx = 160 + labelR * Math.cos(angle);
                const ly = 130 + labelR * Math.sin(angle);

                return (
                  <g key={i}>
                    <circle cx={x} cy={y} r="3.5" fill="#38bdf8" />
                    <text
                      x={lx}
                      y={ly + 3}
                      textAnchor="middle"
                      fill="#cbd5e1"
                      fontSize="9"
                      fontFamily="JetBrains Mono"
                      fontWeight="600"
                    >
                      {item.subject} ({item.value}%)
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="flex items-center justify-center gap-6 pt-3 border-t border-slate-800 text-xs font-mono">
            <span className="flex items-center gap-2 text-cyan-300">
              <span className="w-3 h-3 bg-cyan-400 rounded-sm" /> Điểm năng lực Long
            </span>
            <span className="flex items-center gap-2 text-slate-400">
              <span className="w-3 h-0.5 bg-slate-500" /> Trung bình Chuyên Toàn quốc
            </span>
          </div>
        </div>

        {/* Weekly Elo Evolution Curve (6 cols) */}
        <div className="lg:col-span-6 bg-[#111827] border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-indigo-400" />
                <span>Biến Thiên Elo Đấu Trường Tuần</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Mô phỏng quỹ đạo Elo chuẩn Codeforces/LeetCode qua 12 tuần Contest.
              </p>
            </div>
            <span className="px-2.5 py-1 rounded bg-purple-950/40 text-purple-300 border border-purple-800/40 font-mono text-xs font-bold">
              PEAK ELO: 1,845
            </span>
          </div>

          {/* Chart SVG */}
          <div className="relative w-full h-[260px]">
            <svg viewBox="0 0 400 220" className="w-full h-full">
              <defs>
                <linearGradient id="profileCurveFill" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Horizontal grid lines */}
              {[1300, 1450, 1600, 1750, 1900].map((val, idx) => {
                const y = 200 - ((val - 1300) / 600) * 170;
                return (
                  <g key={idx}>
                    <line x1="40" y1={y} x2="380" y2={y} stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />
                    <text x="32" y={y + 3} textAnchor="end" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">
                      {val}
                    </text>
                  </g>
                );
              })}

              <path
                d="M 50 185 L 80 180 L 110 175 L 140 182 L 170 178 L 200 160 L 230 115 L 260 100 L 290 108 L 320 85 L 350 80 L 380 62 L 380 200 L 50 200 Z"
                fill="url(#profileCurveFill)"
              />
              <path
                d="M 50 185 L 80 180 L 110 175 L 140 182 L 170 178 L 200 160 L 230 115 L 260 100 L 290 108 L 320 85 L 350 80 L 380 62"
                fill="none"
                stroke="#a855f7"
                strokeWidth="2.5"
              />

              <circle cx="230" cy="115" r="5" fill="#38bdf8" stroke="#ffffff" strokeWidth="2" />
              <line x1="230" y1="115" x2="230" y2="200" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 3" />
              <text x="230" y="212" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono">
                W7 (AI)
              </text>

              <text x="50" y="212" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">W1</text>
              <text x="140" y="212" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">W3</text>
              <text x="200" y="212" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">W5</text>
              <text x="290" y="212" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">W9</text>
              <text x="350" y="212" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">W11</text>
              <text x="380" y="212" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">Hiện tại</text>
            </svg>
          </div>

          <div className="p-3.5 bg-indigo-950/30 border border-indigo-500/30 rounded-xl text-xs flex items-center justify-between">
            <span className="text-indigo-200">
              <strong className="text-cyan-300">Mốc Tuần 7: </strong>
              Bật AI Gemini Debugger bóc tách sai lầm logic, tăng vọt <strong className="text-emerald-400">+180 Elo</strong> trong 3 tuần.
            </span>
            <span className="font-mono text-xs text-slate-300 font-bold shrink-0">WINRATE: 76.4%</span>
          </div>
        </div>
      </div>

      {/* 12-Month Activity Grid */}
      <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6 space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span>Ma Trận Luyện Tập 12 Tháng (Activity Grid)</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Tổng cộng <strong>632 lượt nộp bài</strong> &amp; kiểm tra thuật toán trong 365 ngày qua.
            </p>
          </div>
          <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
            <span>Chuỗi dài nhất: <strong className="text-amber-400">26 ngày</strong></span>
            <span>Chuỗi hiện tại: <strong className="text-cyan-300">14 ngày</strong></span>
          </div>
        </div>

        <div className="overflow-x-auto pb-2">
          <div className="flex gap-1.5 min-w-[720px]">
            {Array.from({ length: 48 }).map((_, col) => (
              <div key={col} className="flex flex-col gap-1.5">
                {Array.from({ length: 7 }).map((_, row) => {
                  const rand = (col * 7 + row) % 11;
                  const level = rand > 8 ? 4 : rand > 5 ? 3 : rand > 2 ? 2 : rand > 0 ? 1 : 0;
                  return (
                    <div
                      key={row}
                      className={`w-3 h-3 rounded-xs ${
                        level === 4
                          ? 'bg-cyan-400 shadow-xs'
                          : level === 3
                          ? 'bg-indigo-500'
                          : level === 2
                          ? 'bg-indigo-700/80'
                          : level === 1
                          ? 'bg-slate-800'
                          : 'bg-slate-900/60'
                      }`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-[11px] text-slate-500 font-mono">
          <span>Ghi chú dữ liệu nộp bài từ Codeforces, VNOI &amp; ALLFORONE Platform</span>
          <div className="flex items-center gap-1.5">
            <span>Ít</span>
            <span className="w-2.5 h-2.5 rounded-xs bg-slate-800" />
            <span className="w-2.5 h-2.5 rounded-xs bg-indigo-700" />
            <span className="w-2.5 h-2.5 rounded-xs bg-indigo-500" />
            <span className="w-2.5 h-2.5 rounded-xs bg-cyan-400" />
            <span>Nhiều</span>
          </div>
        </div>
      </div>

      {/* Thinking Traps Mastered */}
      <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6 space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Brain className="w-4 h-4 text-purple-400" />
              <span>Bẫy Tư Duy Đã Khắc Phục Nhờ AI Gemini (74/74)</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Hệ thống phân tích vết lỗi (Error Attribution) tự động phân loại những sai sót logic lặp lại.
            </p>
          </div>

          {/* Filter pills */}
          <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs font-mono">
            <button
              onClick={() => setSelectedSubjectFilter('all')}
              className={`px-2.5 py-1 rounded-md transition-colors ${selectedSubjectFilter === 'all' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'}`}
            >
              Tất cả
            </button>
            <button
              onClick={() => setSelectedSubjectFilter('math')}
              className={`px-2.5 py-1 rounded-md transition-colors ${selectedSubjectFilter === 'math' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'}`}
            >
              Toán
            </button>
            <button
              onClick={() => setSelectedSubjectFilter('physics')}
              className={`px-2.5 py-1 rounded-md transition-colors ${selectedSubjectFilter === 'physics' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'}`}
            >
              Lý
            </button>
            <button
              onClick={() => setSelectedSubjectFilter('cs')}
              className={`px-2.5 py-1 rounded-md transition-colors ${selectedSubjectFilter === 'cs' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'}`}
            >
              Tin
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredTraps.map((trap) => (
            <div key={trap.id} className="bg-[#0b0e18] border border-slate-800/90 rounded-xl p-4 space-y-2.5">
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span className="text-indigo-400 font-bold">{trap.subject}</span>
                <span className="text-emerald-400 font-semibold">{trap.status}</span>
              </div>
              <h3 className="text-xs font-bold text-white leading-snug">{trap.title}</h3>
              <p className="text-[11px] text-slate-400 leading-relaxed">{trap.trapDescription}</p>
              <div className="pt-2 border-t border-slate-800/80 text-[10px] font-mono text-cyan-300">
                <span className="text-slate-500 block mb-0.5">AI GEMINI PROMPT REMEDY:</span>
                "{trap.aiPromptRemedy}"
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gamification Badges */}
      <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>Huy Hiệu Danh Dự &amp; Gamification</span>
          </h2>
          <span className="font-mono text-xs text-slate-400">4 / 16 ĐÃ MỞ KHÓA</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              name: 'Casio Speedrunner',
              desc: 'Giải 30 câu trắc nghiệm dưới 25 phút với độ chính xác 100%.',
              badge: 'MỞ KHÓA THÁNG 1/2026',
              icon: '⚡',
              active: true
            },
            {
              name: 'Geometry 3D Master',
              desc: 'Vẽ tọa độ hóa Oxyz và xử lý 50 câu cực trị thể tích không gian liên tiếp.',
              badge: 'MỞ KHÓA THÁNG 2/2026',
              icon: '📐',
              active: true
            },
            {
              name: 'Contest Top 10',
              desc: 'Lọt Top 10 Bảng Vàng Đấu Trường Tuần Toàn Quốc đợt Contest 108.',
              badge: 'MỞ KHÓA TUẦN 7',
              icon: '🏆',
              active: true
            },
            {
              name: '14-Day Streak Keeper',
              desc: 'Duy trì chuỗi giải tối thiểu 10 câu/ngày trong suốt 2 tuần liên tiếp.',
              badge: 'ĐANG HOẠT ĐỘNG',
              icon: '🔥',
              active: true
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#0b0e18] border border-slate-800 rounded-xl p-4 space-y-2 text-center">
              <div className="text-3xl mb-1">{item.icon}</div>
              <h3 className="text-xs font-bold text-white">{item.name}</h3>
              <p className="text-[11px] text-slate-400 leading-snug">{item.desc}</p>
              <div className="pt-2 border-t border-slate-800 font-mono text-[9px] text-cyan-300">
                {item.badge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
