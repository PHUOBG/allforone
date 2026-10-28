import React, { useState } from 'react';
import { GraduationCap, ArrowRight, CheckCircle2, FileSpreadsheet, KeyRound, Sparkles, RefreshCw, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Props {
  onOpenTeacherPortal: () => void;
}

export const GoogleWorkspaceSection: React.FC<Props> = ({ onOpenTeacherPortal }) => {
  const [synced, setSynced] = useState(false);
  const [syncing, setSyncing] = useState(false);

  const handleSyncClassroom = () => {
    setSyncing(true);
    setTimeout(() => {
      setSyncing(false);
      setSynced(true);
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
      });
    }, 800);
  };

  return (
    <section id="teacher-section" className="py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Bordered Card */}
        <div className="relative bg-gradient-to-b from-[#111827] via-[#0f1624] to-[#0a0e18] border border-indigo-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/40 text-xs font-mono text-indigo-300">
                <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                <span>GOOGLE WORKSPACE FOR EDUCATION PARTNER READY</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Tích Hợp Google Workspace for Education
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Giáo viên tạo contest, đồng bộ danh sách lớp qua Google Classroom API, tự động phân tích phổ điểm và xuất báo cáo qua Google Sheets API.
              </p>

              {/* 3 Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                <div className="p-3 bg-black/40 rounded-xl border border-slate-800 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-white">
                    <span className="text-cyan-400">●</span>
                    <span>Google Classroom</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">Đồng bộ 1-click danh sách 5/5 lớp chuyên, tự động phân quyền theo khối.</p>
                </div>

                <div className="p-3 bg-black/40 rounded-xl border border-slate-800 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-white">
                    <span className="text-emerald-400">●</span>
                    <span>Google Sheets API</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">Xuất phổ điểm chuẩn Gaussian, phân tích ma trận lỗ hổng trực tiếp vào Sheet.</p>
                </div>

                <div className="p-3 bg-black/40 rounded-xl border border-slate-800 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-white">
                    <span className="text-purple-400">●</span>
                    <span>Mã Thi Mã Hóa</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">Mã phòng bảo mật, chống gian lận và giám sát telemetry theo thời gian thực.</p>
                </div>
              </div>
            </div>

            {/* Right Action Console */}
            <div className="w-full lg:w-80 bg-[#090d16] border border-slate-800 p-5 rounded-2xl space-y-4 shrink-0 shadow-xl">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">TRẠNG THÁI KHẢO THÍ</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> ONLINE
                </span>
              </div>

              <div className="p-3 bg-[#111827] rounded-xl border border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Khảo thí HK2 (Toán-Lý-Tin):</span>
                  <strong className="text-white font-mono">218 bài</strong>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Điểm trung bình liên môn:</span>
                  <strong className="text-cyan-300 font-mono">7.84 / 10</strong>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Lỗ hổng kiến thức:</span>
                  <strong className="text-amber-400 font-mono">06 chuyên đề</strong>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={handleSyncClassroom}
                  disabled={syncing}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 text-xs font-semibold transition-all flex items-center justify-center gap-2"
                >
                  {syncing ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Đang đồng bộ Classroom...</span>
                    </>
                  ) : synced ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Đã đồng bộ 218 học sinh</span>
                    </>
                  ) : (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Thử Đồng Bộ Classroom API</span>
                    </>
                  )}
                </button>

                <button
                  onClick={onOpenTeacherPortal}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white text-xs font-bold transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Xem góc giáo viên</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
