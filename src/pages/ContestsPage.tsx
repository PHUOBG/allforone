import React, { useState } from 'react';
import { Trophy, Clock, Users, ArrowRight, CheckCircle2, ShieldCheck, Flame, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContestsPage: React.FC = () => {
  const [registered, setRegistered] = useState(false);

  const handleRegister = () => {
    setRegistered(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="w-full min-h-screen bg-[#070b13] text-slate-200 py-8 px-4 sm:px-6 lg:px-8 space-y-8 max-w-7xl mx-auto">
      {/* Contest Banner */}
      <div className="bg-gradient-to-r from-[#17122b] via-[#101424] to-[#0c101c] border border-purple-500/30 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-2xl">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 flex-wrap font-mono text-xs">
            <span className="px-2.5 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold animate-pulse">
              ● LIVE CONTEST #109
            </span>
            <span className="text-cyan-400 font-semibold">ĐẤU TRƯỜNG TOÀN QUỐC</span>
            <span className="text-slate-500">MÙA THI 2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contest Tuần: Kỳ Thi Thử Liên Môn Chuẩn BGD
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Tranh tài trực tiếp cùng hơn 1,200 học sinh các trường chuyên toàn quốc. Đề thi gồm 50 câu trắc nghiệm máy tính chuẩn ma trận Bộ GD&amp;ĐT, tính xếp hạng Elo chính thức sau mỗi trận.
          </p>

          <div className="flex items-center gap-4 flex-wrap pt-2 text-xs font-mono">
            <span className="text-slate-400">Thời gian: <strong className="text-white">90 Phút</strong></span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Số câu: <strong className="text-cyan-300">50 Câu (Toán - Lý - Tin)</strong></span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Hệ số Elo: <strong className="text-amber-300 font-bold">x1.5 Ranked</strong></span>
          </div>
        </div>

        <div className="bg-[#101726] border border-slate-800 p-5 rounded-2xl space-y-3 shrink-0 shadow-xl w-full lg:w-72">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-slate-400">THỜI GIAN CÒN LẠI</span>
            <span className="text-rose-400 font-bold flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> 01:28:44
            </span>
          </div>
          <div className="text-center py-2 bg-black/40 rounded-xl border border-slate-800 font-mono text-2xl font-bold text-cyan-300">
            01 : 28 : 44
          </div>
          <button
            onClick={handleRegister}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 cursor-pointer"
          >
            {registered ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>Đã Ghi Danh Thành Công</span>
              </>
            ) : (
              <>
                <Zap className="w-4 h-4 text-amber-300" />
                <span>Vào Phòng Thi Ngay</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Leaderboard & Problem Set Table */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left 8 Cols: Problem List */}
        <div className="lg:col-span-8 bg-[#111827] border border-slate-800 rounded-2xl p-6 space-y-4">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>Danh Sách Đề Bài Contest #109 (Phân Tầng Độ Khó)</span>
          </h2>

          <div className="space-y-2.5 text-xs">
            {[
              { id: 'C109-A', title: 'Toán Học: Đạo hàm hàm ẩn & Tiếp tuyến', pts: '100 pts', solved: '942/1200' },
              { id: 'C109-B', title: 'Vật Lý: Sóng dừng trên dây hai đầu cố định', pts: '150 pts', solved: '810/1200' },
              { id: 'C109-C', title: 'Tin Học: Truy vấn đoạn thẳng Segment Tree', pts: '250 pts', solved: '420/1200' },
              { id: 'C109-D', title: 'Toán Học: Mặt cầu ngoại tiếp hình chóp Oxyz', pts: '300 pts', solved: '215/1200' },
              { id: 'C109-E', title: 'Liên Môn (Boss): Tối ưu hóa chu trình LC & Cực trị', pts: '500 pts', solved: '68/1200' },
            ].map((p, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[#0b0e18] border border-slate-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-cyan-400 font-bold text-xs">{p.id}</span>
                  <div>
                    <strong className="text-white block">{p.title}</strong>
                    <span className="text-[10px] text-slate-500 font-mono">Đã nộp đúng: {p.solved}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="font-mono text-emerald-400 font-bold">{p.pts}</span>
                  <button className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors">
                    Giải Đề
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right 4 Cols: Live Contest Ranking */}
        <div className="lg:col-span-4 bg-[#111827] border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Users className="w-4 h-4 text-cyan-400" />
              <span>Bảng Xếp Hạng Trực Tiếp</span>
            </h2>
            <span className="font-mono text-[10px] text-slate-400">1,248 THÍ SINH</span>
          </div>

          <div className="space-y-2 text-xs">
            {[
              { rank: 1, name: 'Phạm Minh Tuấn', school: 'Chuyên KHTN Hà Nội', score: '1300 pts', time: '52\'10"' },
              { rank: 2, name: 'Nguyễn Hoàng Long', school: 'Chuyên Hà Nội - Amsterdam', score: '1250 pts', time: '56\'40"' },
              { rank: 3, name: 'Lê Trần Bảo Khang', school: 'Chuyên Lê Hồng Phong TP.HCM', score: '1200 pts', time: '58\'12"' },
              { rank: 4, name: 'Đỗ Thị Minh Châu', school: 'Chuyên Lam Sơn Thanh Hóa', score: '1150 pts', time: '64\'05"' },
              { rank: 5, name: 'Vũ Đức Nam', school: 'Chuyên Quốc Học Huế', score: '1100 pts', time: '68\'30"' },
            ].map((user) => (
              <div key={user.rank} className="p-2.5 rounded-xl bg-[#0b0e18] border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center font-mono text-[10px] font-bold ${
                    user.rank === 1 ? 'bg-amber-400 text-black' : user.rank === 2 ? 'bg-slate-300 text-black' : 'bg-amber-700 text-white'
                  }`}>
                    {user.rank}
                  </span>
                  <div>
                    <strong className="text-white block leading-none">{user.name}</strong>
                    <span className="text-[10px] text-slate-500">{user.school}</span>
                  </div>
                </div>
                <div className="text-right font-mono">
                  <span className="text-cyan-300 font-bold block">{user.score}</span>
                  <span className="text-[10px] text-slate-500">{user.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
