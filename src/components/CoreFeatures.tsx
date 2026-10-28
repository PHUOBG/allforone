import React, { useState } from 'react';
import { ArrowRight, BarChart3, Bot, BookOpen, Layers, CheckCircle2, ChevronRight, Binary, Compass, Activity } from 'lucide-react';

interface Props {
  onOpenDiagnostic: () => void;
  onExplorePractice: () => void;
}

export const CoreFeatures: React.FC<Props> = ({ onOpenDiagnostic, onExplorePractice }) => {
  const [selectedSvgTab, setSelectedSvgTab] = useState<'oxyz' | 'rlc' | 'bst'>('oxyz');

  return (
    <section id="core-features" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300 mb-3">
            <span>● CÔNG NGHỆ KHẢO THÍ THẾ HỆ MỚI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ba Trụ Cột Đột Phá Nâng Tầm Điểm Số
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Kết hợp thuật toán đánh giá thích ứng LeetCode, mô hình AI Gemini phân tích sai lầm chuyên sâu và đồ họa trực quan hóa đa chiều.
          </p>
        </div>

        {/* 3-Column Bento / Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Elo Rating & Adaptive Practice */}
          <div className="group relative bg-[#111827]/80 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10">
            <div>
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-2xl mb-5 group-hover:scale-105 transition-transform">
                <span>📊</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                Luyện tập Thích ứng &amp; Rating Elo
              </h3>

              {/* Content */}
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Hệ thống ngân hàng câu hỏi gắn tag 4 cấp độ (Level 1 → Level 4). Thuật toán Elo LeetCode đo lường điểm số năng lực riêng từng chuyên đề và luôn gợi ý câu hỏi vừa sức.
              </p>

              {/* Mini Interactive Preview: 4 Levels */}
              <div className="mt-5 p-3.5 bg-[#0b0f19] rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>PHÂN TẦNG CÂU HỎI</span>
                  <span className="text-emerald-400">ADAPTIVE ELO</span>
                </div>
                <div className="grid grid-cols-4 gap-1.5 font-mono text-[10px] text-center">
                  <div className="py-1 rounded bg-emerald-950/40 text-emerald-300 border border-emerald-800/40">
                    L1 · NB
                  </div>
                  <div className="py-1 rounded bg-cyan-950/40 text-cyan-300 border border-cyan-800/40">
                    L2 · TH
                  </div>
                  <div className="py-1 rounded bg-indigo-950/40 text-indigo-300 border border-indigo-800/40">
                    L3 · VD
                  </div>
                  <div className="py-1 rounded bg-purple-950/40 text-purple-300 border border-purple-800/40">
                    L4 · VDC
                  </div>
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800/80">
                  <span>Điểm Elo tối ưu:</span>
                  <span className="font-mono text-cyan-300 font-bold">1400 → 2100+</span>
                </div>
              </div>
            </div>

            {/* Link CTA */}
            <button
              onClick={onExplorePractice}
              className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1"
            >
              <span>Khám phá ngân hàng bài tập</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: AI Gemini Debugger */}
          <div className="group relative bg-[#111827]/80 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
            <div>
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-2xl mb-5 group-hover:scale-105 transition-transform">
                <span>🤖</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                Gia sư AI Gemini Debug Bẫy Tư Duy
              </h3>

              {/* Content */}
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Không chỉ giải đề tĩnh. Khi bạn chọn sai, Gemini bóc tách chính xác bước biến đổi nhầm lẫn, lý giải vì sao bẫy đó dễ mắc phải và tặng kèm mẹo tư duy để không lặp lại.
              </p>

              {/* Mini Interactive Preview: Thought Trap Debugger */}
              <div className="mt-5 p-3.5 bg-[#0b0f19] rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="text-rose-400 flex items-center gap-1">● BẪY TƯ DUY PHÁT HIỆN</span>
                  <span className="text-cyan-400">GEMINI 2.5</span>
                </div>
                <div className="p-2 rounded bg-rose-950/20 border border-rose-900/40 text-[11px] text-rose-200 font-mono">
                  "Nhầm lẫn góc mặt bên với góc cạnh bên (SBO vs SMO)"
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800/80">
                  <span className="text-emerald-400">Mẹo phản xạ Casio fx-880:</span>
                  <span className="font-mono text-slate-300">Dot Product</span>
                </div>
              </div>
            </div>

            {/* Link CTA */}
            <button
              onClick={onOpenDiagnostic}
              className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1"
            >
              <span>Thử nghiệm chẩn đoán AI</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 3: Theory & SVG Vector Visualizer */}
          <div className="group relative bg-[#111827]/80 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
            <div>
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-2xl mb-5 group-hover:scale-105 transition-transform">
                <span>📚</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                Học Lý Thuyết &amp; Đồ Họa Vector SVG
              </h3>

              {/* Content */}
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Hệ thống hóa lý thuyết cô đọng theo SGK GDPT 2018. Đồ họa Vector SVG sắc nét cao cho hình không gian Oxyz, mạch điện xoay chiều, cây nhị phân BST và lược đồ ERD.
              </p>

              {/* Interactive Vector Switcher Mini Tab */}
              <div className="mt-5 p-3.5 bg-[#0b0f19] rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <div className="flex gap-1">
                    <button
                      onClick={() => setSelectedSvgTab('oxyz')}
                      className={`px-2 py-0.5 rounded text-[10px] ${
                        selectedSvgTab === 'oxyz' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Oxyz 3D
                    </button>
                    <button
                      onClick={() => setSelectedSvgTab('rlc')}
                      className={`px-2 py-0.5 rounded text-[10px] ${
                        selectedSvgTab === 'rlc' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Mạch RLC
                    </button>
                    <button
                      onClick={() => setSelectedSvgTab('bst')}
                      className={`px-2 py-0.5 rounded text-[10px] ${
                        selectedSvgTab === 'bst' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Cây BST
                    </button>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">VECTOR SVG</span>
                </div>

                {/* SVG Visual Display */}
                <div className="h-16 flex items-center justify-center bg-black/40 rounded-lg border border-slate-800/80">
                  {selectedSvgTab === 'oxyz' && (
                    <svg viewBox="0 0 160 60" className="w-full h-full max-h-14">
                      <polygon points="80,8 35,48 125,48" fill="rgba(139,92,246,0.15)" stroke="#a855f7" strokeWidth="1.5" />
                      <line x1="80" y1="8" x2="80" y2="48" stroke="#38bdf8" strokeDasharray="2 2" />
                      <line x1="80" y1="8" x2="70" y2="48" stroke="#ec4899" />
                      <circle cx="80" cy="8" r="2.5" fill="#38bdf8" />
                      <text x="86" y="14" fill="#cbd5e1" fontSize="9" fontFamily="JetBrains Mono">S</text>
                      <text x="24" y="52" fill="#cbd5e1" fontSize="9" fontFamily="JetBrains Mono">A</text>
                      <text x="130" y="52" fill="#cbd5e1" fontSize="9" fontFamily="JetBrains Mono">C</text>
                    </svg>
                  )}
                  {selectedSvgTab === 'rlc' && (
                    <svg viewBox="0 0 160 60" className="w-full h-full max-h-14">
                      {/* Phasor diagram */}
                      <line x1="20" y1="40" x2="100" y2="40" stroke="#10b981" strokeWidth="2" />
                      <text x="105" y="44" fill="#10b981" fontSize="9" fontFamily="JetBrains Mono">U_R</text>
                      <line x1="100" y1="40" x2="100" y2="12" stroke="#06b6d4" strokeWidth="2" />
                      <text x="105" y="16" fill="#06b6d4" fontSize="9" fontFamily="JetBrains Mono">U_L</text>
                      <line x1="20" y1="40" x2="100" y2="12" stroke="#a855f7" strokeWidth="2" />
                      <text x="50" y="22" fill="#c084fc" fontSize="9" fontFamily="JetBrains Mono">U_mạch</text>
                    </svg>
                  )}
                  {selectedSvgTab === 'bst' && (
                    <svg viewBox="0 0 160 60" className="w-full h-full max-h-14">
                      {/* Binary Search Tree */}
                      <line x1="80" y1="14" x2="48" y2="38" stroke="#475569" strokeWidth="1.2" />
                      <line x1="80" y1="14" x2="112" y2="38" stroke="#475569" strokeWidth="1.2" />
                      <circle cx="80" cy="14" r="9" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.5" />
                      <text x="80" y="18" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold" fontFamily="JetBrains Mono">50</text>
                      <circle cx="48" cy="38" r="8" fill="#1e1b4b" stroke="#38bdf8" strokeWidth="1.5" />
                      <text x="48" y="42" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold" fontFamily="JetBrains Mono">30</text>
                      <circle cx="112" cy="38" r="8" fill="#1e1b4b" stroke="#38bdf8" strokeWidth="1.5" />
                      <text x="112" y="42" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold" fontFamily="JetBrains Mono">70</text>
                    </svg>
                  )}
                </div>
              </div>
            </div>

            {/* Link CTA */}
            <button
              onClick={() => {
                const el = document.getElementById('platform-showcase');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1"
            >
              <span>Đọc bài học lý thuyết</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
