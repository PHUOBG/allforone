import React from 'react';
import { Flame, Sparkles, ChevronRight, Activity, Terminal, CheckCircle2 } from 'lucide-react';
import { SUBJECT_BADGES } from '../data/mockData';

interface Props {
  onStartDaily: () => void;
  onStartDiagnostic: () => void;
  onSelectSubject: (subjectId: string) => void;
}

export const HeroSection: React.FC<Props> = ({
  onStartDaily,
  onStartDiagnostic,
  onSelectSubject,
}) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Background radial glow fields & subtle grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[450px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[300px] bg-purple-500/10 rounded-full blur-[110px]" />
        <div className="absolute inset-0 bg-cyber-grid opacity-35" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Top Badge (Center) */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-sm mb-6 animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-mono font-medium text-slate-300">
            Hệ thống luyện thi thích ứng THPT 2026 · Khối Toán – Lý – Tin
          </span>
        </div>

        {/* Headline H1 */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.12]">
          <span className="block text-slate-100">"LeetCode" Ôn Thi THPT</span>
          <span className="block mt-1 bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
            Cá Nhân Hóa Bằng AI.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed text-balance">
          Mỗi học sinh một lộ trình, mỗi nỗ lực một bước tiến. Chuẩn bị vững vàng cho kỳ thi trên máy tính với 3 môn Toán, Vật lý và Tin học (CS &amp; ICT).
        </p>

        {/* Call To Actions (2 Buttons lớn) */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md">
          {/* Primary Button */}
          <button
            onClick={onStartDaily}
            className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 border border-indigo-400/30 cursor-pointer"
          >
            <Flame className="w-4 h-4 text-amber-300 fill-amber-300" />
            <span>🔥 Daily Challenge (10 câu)</span>
          </button>

          {/* Secondary Button */}
          <button
            onClick={onStartDiagnostic}
            className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#0e1422] hover:bg-slate-800/90 border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>✨ Test Năng Lực &amp; Lộ Trình AI</span>
          </button>
        </div>

        {/* Subject Focus Badges (Thanh 3 môn bo viền nổi bật) */}
        <div className="mt-12 w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {SUBJECT_BADGES.map((badge) => (
            <div
              key={badge.id}
              onClick={() => onSelectSubject(badge.id)}
              className={`group relative p-4 rounded-xl bg-[#111827]/80 backdrop-blur-md border border-slate-800/80 ${badge.borderHover} transition-all duration-300 cursor-pointer text-left flex items-start gap-3 hover:-translate-y-0.5 hover:shadow-xl`}
              style={{
                boxShadow: `0 4px 20px -5px ${badge.glowColor}`,
              }}
            >
              <div className="text-2xl p-2 rounded-lg bg-slate-900/90 border border-slate-800 group-hover:scale-110 transition-transform">
                {badge.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className={`font-bold text-sm text-white group-hover:${badge.color} transition-colors`}>
                    {badge.title}
                  </h3>
                  <span className="font-mono text-[10px] text-slate-500">
                    {badge.grade}
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-400 font-mono leading-tight">
                  {badge.topics}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
