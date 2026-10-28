import React, { useState } from 'react';
import { Sparkles, Brain, CheckCircle2, ArrowRight, Target, Compass, Zap, Bot } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Props {
  onOpenDiagnostic: () => void;
}

export const AiPathPage: React.FC<Props> = ({ onOpenDiagnostic }) => {
  const [targetScore, setTargetScore] = useState<number>(9.2);

  const handleApplyRoadmap = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 }
    });
    alert(`Đã kích hoạt Lộ trình AI Cá nhân hóa tối ưu cho Target ${targetScore} Điểm!`);
  };

  return (
    <div className="w-full min-h-screen bg-[#070b13] text-slate-200 py-8 px-4 sm:px-6 lg:px-8 space-y-8 max-w-7xl mx-auto">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#17142b] via-[#101726] to-[#0c101c] border border-indigo-500/40 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-2xl">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 flex-wrap font-mono text-xs">
            <span className="px-2.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 font-bold">
              ✨ LỘ TRÌNH THÍCH ỨNG ADAPTIVE AI
            </span>
            <span className="text-cyan-400 font-semibold">GEMINI 2.5 DEEP PATH</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Lộ Trình AI: Cá Nhân Hóa Dựa Trên Bẫy Tư Duy &amp; Điểm Elo
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Thuật toán học sâu tự động xây dựng lộ trình theo từng ngày, từng dạng bài cụ thể. Không giải đề đại trà, chỉ tập trung đúng điểm nghẽn kiến thức để bứt phá từ 7.0 lên 9.0+.
          </p>
        </div>

        <div className="bg-[#101726] border border-slate-800 p-5 rounded-2xl space-y-3 shrink-0 shadow-xl w-full lg:w-80">
          <span className="text-xs font-mono text-slate-400 block">THIẾT LẬP MỤC TIÊU ĐIỂM SỐ</span>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold font-mono text-cyan-300">{targetScore.toFixed(1)} / 10</span>
            <span className="text-xs font-mono text-emerald-400">Top 1.5% Toàn Quốc</span>
          </div>
          <input
            type="range"
            min="7.0"
            max="10.0"
            step="0.2"
            value={targetScore}
            onChange={(e) => setTargetScore(parseFloat(e.target.value))}
            className="w-full accent-cyan-400 cursor-pointer"
          />
          <button
            onClick={handleApplyRoadmap}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-xs transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Kích Hoạt Lộ Trình Này</span>
          </button>
        </div>
      </div>

      {/* 3 Step Roadmap Timeline */}
      <div className="space-y-6">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <Compass className="w-5 h-5 text-cyan-400" />
          <span>Kế Hoạch 3 Giai Đoạn Đột Phá Điểm Số</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phase 1 */}
          <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6 space-y-4 relative overflow-hidden">
            <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center font-mono font-bold text-rose-400 text-sm">
              01
            </div>
            <div>
              <span className="text-[10px] font-mono text-rose-400 font-bold block mb-1">GIAI ĐOẠN 1 (TUẦN 1 - 3)</span>
              <h3 className="text-base font-bold text-white">Triệt Tiêu 100% Bẫy Tư Duy Thường Gặp</h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Giải quyết triệt để 12 dạng bẫy phổ biến trong đề thi: điều kiện xác định tiệm cận, góc phẳng nhị diện hình chóp, hiện tượng cộng hưởng điện thế và tràn số nguyên long long.
            </p>
            <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Dự kiến: Tăng +120 Elo nền tảng</span>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6 space-y-4 relative overflow-hidden">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center font-mono font-bold text-cyan-400 text-sm">
              02
            </div>
            <div>
              <span className="text-[10px] font-mono text-cyan-400 font-bold block mb-1">GIAI ĐOẠN 2 (TUẦN 4 - 8)</span>
              <h3 className="text-base font-bold text-white">Tối Ưu Tốc Độ &amp; Phản Xạ 60s/Câu</h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Luyện tập với máy tính cầm tay Casio fx-880BTG, áp dụng kỹ thuật bấm đạo hàm, ma trận vector 3 chiều và template thuật toán C++ để hoàn thành 38 câu đầu trong dưới 35 phút.
            </p>
            <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Dự kiến: Tăng +150 Elo tốc độ</span>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6 space-y-4 relative overflow-hidden">
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center font-mono font-bold text-purple-400 text-sm">
              03
            </div>
            <div>
              <span className="text-[10px] font-mono text-purple-400 font-bold block mb-1">GIAI ĐOẠN 3 (TUẦN 9 - 12)</span>
              <h3 className="text-base font-bold text-white">Chinh Phục Câu Phân Loại 9.0 - 10.0</h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Tấn công trực diện các câu Boss Challenge: Cực trị số phức, mũ logarit hàm đặc trưng, mạch RLC đa biến thiên tần số và thuật toán Quy hoạch động Bitmask đồ thị.
            </p>
            <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Mục tiêu: Đạt 1,900+ Elo Grandmaster</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive AI Diagnostic CTA Card */}
      <div className="bg-[#101628] border border-indigo-500/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-left">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Bot className="w-5 h-5 text-cyan-400" />
            <span>Chưa Chắc Chắn Mình Đang Hổng Kiến Thức Nào?</span>
          </h2>
          <p className="text-xs text-slate-300 max-w-xl">
            Thực hiện bài test chẩn đoán nhanh 10 phút với AI Gemini để nhận diện điểm mù tư duy và nhận lộ trình học tập đo ni đóng giày ngay hôm nay.
          </p>
        </div>
        <button
          onClick={onOpenDiagnostic}
          className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-colors flex items-center gap-2 shrink-0 shadow-lg shadow-indigo-600/30 cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>Làm Bài Test Chẩn Đoán AI</span>
        </button>
      </div>
    </div>
  );
};
