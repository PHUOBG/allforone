import React from 'react';
import { X, Check, Zap, Sparkles } from 'lucide-react';
import { COMPARISON_DATA } from '../data/mockData';

export const ComparisonTable: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-indigo-400 mb-3">
            <span>Đổi mới tư duy ôn thi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Sự khác biệt của AllForOne so với luyện đề truyền thống
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed text-balance">
            Học sinh hiện nay mất hàng chục giờ giải đề 50 câu chỉ để nhận một con số điểm tổng mà không biết mình sai do hổng kiến thức nào.
          </p>
        </div>

        {/* 2-Column Comparison Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Cột trái: Luyện đề đại trà thông thường */}
          <div className="bg-[#0f1420]/70 border border-slate-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 pb-5 border-b border-slate-800/80 mb-6">
                <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 font-bold">
                  <X className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-300">
                    Luyện đề đại trà thông thường
                  </h3>
                  <span className="text-xs text-slate-500 font-mono">
                    Phương pháp thủ công cũ
                  </span>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-6">
                {COMPARISON_DATA.traditional.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-rose-950/40 border border-rose-800/50 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-rose-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-300">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 text-xs font-mono text-slate-500 text-center">
              Hiệu suất: Học vẹt, tốn thời gian, điểm số đi ngang
            </div>
          </div>

          {/* Cột phải: Giải pháp Đột phá AllForOne */}
          <div className="relative bg-gradient-to-b from-[#131b2e] to-[#0f1626] border border-indigo-500/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl shadow-indigo-600/10 ring-1 ring-indigo-500/30">
            {/* Ambient Glow */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-indigo-500/30 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 p-0.5 shadow-md shadow-indigo-500/30">
                    <div className="w-full h-full bg-[#0a0e18] rounded-[10px] flex items-center justify-center text-cyan-300 font-bold">
                      <Check className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <span>Giải pháp Đột phá AllForOne</span>
                    </h3>
                    <span className="text-xs text-cyan-300 font-mono">
                      Chuẩn hóa LeetCode &amp; AI thích ứng
                    </span>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-[10px] font-mono font-bold tracking-wide">
                  ĐƯỢC KHUYÊN DÙNG
                </span>
              </div>

              {/* Items List */}
              <div className="space-y-6">
                {COMPARISON_DATA.allForOne.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-950/60 border border-emerald-500/50 flex items-center justify-center shrink-0 mt-0.5 shadow-sm shadow-emerald-500/20">
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-indigo-500/30 flex items-center justify-between text-xs font-mono">
              <span className="text-cyan-300 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Tiết kiệm 65% thời gian ôn luyện
              </span>
              <span className="text-emerald-400 font-bold">+150-300 Elo trung bình</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
