import React, { useState } from 'react';
import { 
  Flame, 
  Sparkles, 
  CheckCircle2, 
  Play, 
  Swords, 
  Trophy, 
  Clock, 
  Zap, 
  ShieldCheck, 
  Bot, 
  Users, 
  HelpCircle,
  Award,
  ListOrdered
} from 'lucide-react';
import { DAILY_QUESTIONS } from '../data/mockData';
import confetti from 'canvas-confetti';

export const DailyPage: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>('q05');
  const [completedList, setCompletedList] = useState<string[]>(['q01', 'q02', 'q03', 'q04']);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [isBattleMatching, setIsBattleMatching] = useState(false);
  const [battleFound, setBattleFound] = useState(false);
  const [activeDay, setActiveDay] = useState(24);

  const handleSelectOption = (qId: string, opt: string) => {
    setUserAnswers(prev => ({ ...prev, [qId]: opt }));
  };

  const handleSolveQuestion = (qId: string) => {
    if (!completedList.includes(qId)) {
      setCompletedList(prev => [...prev, qId]);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    }
  };

  const handleStartBattle = () => {
    setIsBattleMatching(true);
    setBattleFound(false);
    setTimeout(() => {
      setIsBattleMatching(false);
      setBattleFound(true);
      confetti({
        particleCount: 40,
        spread: 70,
        origin: { y: 0.7 }
      });
    }, 1200);
  };

  return (
    <div className="w-full min-h-screen bg-[#070b13] text-slate-200 py-8 px-4 sm:px-6 lg:px-8 space-y-8 max-w-7xl mx-auto">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#141b2d] via-[#101726] to-[#0c101c] border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-2xl">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 flex-wrap font-mono text-xs">
            <span className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 font-semibold">
              DAILY GRIND MATRIX
            </span>
            <span className="text-cyan-400 font-semibold flex items-center gap-1">
              ● RESET TRONG: 07:19:32
            </span>
            <span className="text-slate-500">MÙA GIẢI 2026 · THPT QUỐC GIA</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Daily Challenge: 10 Câu Phân Loại Mỗi Ngày
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Nhiệm vụ vi mô liên môn Toán · Lý · Tin thiết kế theo phổ chuẩn đề tốt nghiệp BGD. Giữ vững ngọn lửa để kích hoạt hệ số nhân Elo x2 và mở khoá rương tri thức.
          </p>

          <div className="flex items-center gap-4 flex-wrap pt-2">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
              <Flame className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>14 Ngày Liên Tục</span>
              <span className="text-[10px] text-amber-400/80 font-mono">Kỷ lục: 28 ngày</span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-semibold">
              <span>❄️ 2 Vé Đóng Băng</span>
              <span className="text-[10px] text-sky-400/80 font-mono">Bảo vệ chuỗi</span>
            </div>

            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
              <Zap className="w-3.5 h-3.5" /> +1.4x EXP Booster Active
            </span>
          </div>
        </div>

        {/* Circular Progress & Elo Waiting */}
        <div className="bg-[#101726] border border-slate-800 p-5 rounded-2xl flex items-center gap-5 shrink-0 shadow-xl">
          <div className="relative w-20 h-20 flex items-center justify-center">
            <svg className="w-20 h-20 transform -rotate-90">
              <circle cx="40" cy="40" r="32" stroke="#1f293d" strokeWidth="6" fill="transparent" />
              <circle
                cx="40"
                cy="40"
                r="32"
                stroke="#06b6d4"
                strokeWidth="6"
                strokeDasharray={201}
                strokeDashoffset={201 - (201 * completedList.length) / 10}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>
            <div className="absolute text-center">
              <span className="text-lg font-bold text-white block leading-none font-mono">
                {completedList.length}/10
              </span>
              <span className="text-[9px] text-slate-400 font-mono">TIẾN ĐỘ</span>
            </div>
          </div>

          <div className="space-y-1.5 text-xs">
            <div className="text-slate-400">
              Elo chờ mở khóa: <strong className="text-emerald-400 font-mono text-base">+{completedList.length * 8} Elo</strong>
            </div>
            <div className="text-[11px] text-slate-400">Hoàn thành 10/10: <span className="text-amber-400">+1 Rương Hàng Ngày</span></div>
            <div className="text-[11px] text-slate-400">Streak Bonus: <span className="text-cyan-300 font-mono">Xếp hạng Top 5%</span></div>
          </div>
        </div>
      </div>

      {/* Main Grid: Left 10 Questions, Right Streak Matrix & Battle Room */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column (8 cols): 10 Questions List */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
            <h2 className="font-bold text-white text-base flex items-center gap-2">
              <ListOrdered className="w-4 h-4 text-cyan-400" />
              <span>Phổ Đề 10 Câu Ngày {activeDay}/10/2026</span>
            </h2>
            <div className="flex items-center gap-2 font-mono text-[10px]">
              <span className="px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-400 border border-emerald-800/40">3 NHẬN BIẾT</span>
              <span className="px-2 py-0.5 rounded bg-cyan-950/40 text-cyan-400 border border-cyan-800/40">4 TH &amp; VẬN DỤNG</span>
              <span className="px-2 py-0.5 rounded bg-purple-950/40 text-purple-400 border border-purple-800/40">3 BOSS CHALLENGE</span>
            </div>
          </div>

          <div className="space-y-3">
            {DAILY_QUESTIONS.map((q) => {
              const isDone = completedList.includes(q.id);
              const isSelected = selectedQuestion === q.id;

              return (
                <div
                  key={q.id}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isSelected
                      ? 'bg-[#12192c] border-cyan-500/50 shadow-xl shadow-cyan-950/30'
                      : isDone
                      ? 'bg-[#0e1320]/70 border-slate-800/60'
                      : 'bg-[#0f1422] border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  {/* Question Header Strip */}
                  <div 
                    onClick={() => setSelectedQuestion(isSelected ? null : q.id)}
                    className="p-4 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-start gap-3.5">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 font-mono text-xs font-bold ${
                          isDone
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                            : isSelected
                            ? 'bg-cyan-500 text-black font-extrabold shadow-md shadow-cyan-500/30'
                            : 'bg-slate-800 text-slate-300 border border-slate-700'
                        }`}
                      >
                        {isDone ? <CheckCircle2 className="w-4 h-4" /> : q.index}
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-[10px] font-mono">
                          <span className={`font-semibold ${
                            q.subject === 'math' ? 'text-violet-400' : q.subject === 'physics' ? 'text-cyan-400' : 'text-indigo-400'
                          }`}>
                            {q.subjectLabel}
                          </span>
                          <span className="text-slate-600">·</span>
                          <span className="text-slate-400">{q.level}</span>
                          {q.isBoss && (
                            <span className="px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-300 font-bold border border-purple-500/40 text-[9px]">
                              BOSS CHALLENGE
                            </span>
                          )}
                        </div>

                        <h3 className="text-sm font-semibold text-white leading-snug">
                          {q.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="font-mono text-xs font-semibold text-emerald-400">
                        +{q.eloGain} Elo
                      </span>
                      <span className="text-xs text-slate-400">
                        {isSelected ? 'Thu gọn ▲' : 'Mở bài tập ▼'}
                      </span>
                    </div>
                  </div>

                  {/* Expanded Solving Workspace */}
                  {isSelected && (
                    <div className="px-4 pb-4 pt-2 border-t border-slate-800/80 bg-[#090d17] space-y-3.5 animate-fadeIn">
                      <div className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800 text-xs text-slate-200 font-mono">
                        {q.content}
                      </div>

                      {/* Multiple choice options */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {['Đáp án A', 'Đáp án B', 'Đáp án C', 'Đáp án D'].map((opt, oIdx) => {
                          const isPicked = userAnswers[q.id] === opt;
                          return (
                            <button
                              key={oIdx}
                              onClick={() => handleSelectOption(q.id, opt)}
                              className={`p-2.5 rounded-lg border text-left font-mono transition-all flex items-center justify-between cursor-pointer ${
                                isPicked
                                  ? 'bg-cyan-500/20 text-cyan-200 border-cyan-500/60 font-semibold'
                                  : 'bg-slate-900/50 text-slate-300 border-slate-800 hover:border-slate-700'
                              }`}
                            >
                              <span>{opt}: Giá trị quy chuẩn {oIdx + 1}</span>
                              {isPicked && <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />}
                            </button>
                          );
                        })}
                      </div>

                      {/* Bottom action */}
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-[11px] font-mono text-slate-400">
                          {isDone ? 'Trạng thái: Đã hoàn thành' : 'Chọn đáp án và bấm Nộp bài'}
                        </span>
                        <button
                          onClick={() => handleSolveQuestion(q.id)}
                          className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                            isDone
                              ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/40'
                              : 'bg-cyan-500 hover:bg-cyan-400 text-black font-bold shadow-md shadow-cyan-500/20'
                          }`}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{isDone ? 'Giải Lại' : 'Nộp Đáp Án'}</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Gemini Pro Multi-subject Hint Box */}
          <div className="bg-[#101728] border border-indigo-500/30 rounded-2xl p-5 space-y-3 mt-6">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-indigo-300 font-bold">
                <Bot className="w-4 h-4 text-cyan-400" />
                <span>Gemini Pro · Trợ Lý Phân Tích Liên Môn 24/7</span>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
                AI HINT ONLINE
              </span>
            </div>
            <div className="text-xs text-slate-300 space-y-2 bg-black/40 p-4 rounded-xl border border-slate-800 font-mono text-[11px] leading-relaxed">
              <div>
                <strong className="text-cyan-300">Gợi ý câu #8 (RLC Cực Trị): </strong>
                Khi tần số ω thay đổi để U_L đạt cực đại, hãy sử dụng mối liên hệ vuông pha giữa điện áp hai đầu mạch và điện áp U_RC. Đặt biến phụ x = ω² để đưa tam thức bậc hai ở mẫu số về dạng đạo hàm tối ưu trị.
              </div>
              <div>
                <strong className="text-purple-300">Gợi ý câu #10 (DP Bitmask): </strong>
                Để giảm bộ nhớ từ 2^20 * 20, dùng mảng tĩnh dp[1 &lt;&lt; 20][20]. Tính các bit 1 bằng hàm __builtin_popcount() để sắp xếp thứ tự duyệt trạng thái topo hợp lệ!
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (4 cols): Streak Matrix & 1vs1 Arena */}
        <div className="lg:col-span-4 space-y-6">
          {/* Streak Calendar Matrix */}
          <div className="bg-[#111827] border border-slate-800 rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-white flex items-center gap-1.5 text-sm">
                <Flame className="w-4 h-4 text-amber-400" />
                Ma Trận Streak Tháng 10/2026
              </span>
              <span className="text-slate-400 font-mono text-[11px]">Hôm nay: Ngày 24</span>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center font-mono text-[10px] text-slate-500">
              <span>T2</span><span>T3</span><span>T4</span><span>T5</span><span>T6</span><span>T7</span><span>CN</span>
            </div>

            <div className="grid grid-cols-7 gap-1.5 font-mono text-xs">
              {Array.from({ length: 28 }).map((_, i) => {
                const day = i + 1;
                const isStreak = day <= 24;
                const isToday = day === 24;
                const isFrozen = day === 18;
                return (
                  <div
                    key={i}
                    onClick={() => setActiveDay(day)}
                    className={`h-9 rounded-lg flex items-center justify-center transition-all cursor-pointer text-xs font-bold ${
                      isToday
                        ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/30 ring-2 ring-cyan-300'
                        : isFrozen
                        ? 'bg-sky-950/60 text-sky-300 border border-sky-500/40'
                        : isStreak
                        ? 'bg-indigo-600/40 text-indigo-200 border border-indigo-500/30 hover:bg-indigo-600/60'
                        : 'bg-slate-900/50 text-slate-600 border border-slate-800/60'
                    }`}
                  >
                    {isFrozen ? '❄️' : day}
                  </div>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-800/80 space-y-2 text-xs">
              <div className="flex justify-between text-slate-300">
                <span>Mốc 15 Ngày:</span>
                <strong className="text-amber-300 font-mono">+1 Freeze Shield</strong>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Mốc 20 Ngày:</span>
                <strong className="text-purple-300 font-mono">Huy Hiệu Casio Pro</strong>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Mốc 30 Ngày:</span>
                <strong className="text-cyan-300 font-mono">Thẻ x2 Elo 48h</strong>
              </div>
            </div>
          </div>

          {/* 1vs1 Daily Battle Arena */}
          <div className="bg-gradient-to-b from-[#131b2e] to-[#0c101c] border border-cyan-500/40 rounded-2xl p-5 space-y-4 shadow-xl">
            <div className="flex items-center justify-between text-xs">
              <span className="text-white font-bold flex items-center gap-1.5 text-sm">
                <Swords className="w-4 h-4 text-cyan-400" />
                Thách Đấu 1vs1 Daily Room
              </span>
              <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-mono text-[10px] font-bold border border-rose-500/40 animate-pulse">
                LIVE ARENA
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Ghép đôi bạn bè hoặc đối thủ ngẫu nhiên giải 10 câu tốc độ. Người giải nhanh và chính xác hơn nhận trọn số Elo cược!
            </p>

            {/* Duelists status */}
            <div className="bg-[#0b0e17] p-3.5 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
              <div className="text-center">
                <span className="text-[10px] text-slate-400 block font-mono">BẠN</span>
                <strong className="text-white block font-mono text-sm">1420 Elo</strong>
                <span className="text-[10px] text-emerald-400">Đã sẵn sàng</span>
              </div>
              <div className="text-slate-500 font-mono font-bold text-sm">VS</div>
              <div className="text-center">
                <span className="text-[10px] text-slate-400 block font-mono">ĐỐI THỦ</span>
                <strong className="text-cyan-300 block font-mono text-sm">
                  {battleFound ? '1465 Elo' : 'Đang tìm...'}
                </strong>
                <span className="text-[10px] text-slate-400">
                  {battleFound ? 'THPT Chuyên Sư Phạm' : 'Ghép ngẫu nhiên'}
                </span>
              </div>
            </div>

            <button
              onClick={handleStartBattle}
              disabled={isBattleMatching}
              className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:bg-slate-800 text-black font-extrabold text-xs transition-all shadow-md shadow-cyan-500/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              {isBattleMatching ? (
                <span>Đang quét đối thủ cùng trình độ...</span>
              ) : battleFound ? (
                <span>Đã Ghép Xong! Bắt Đầu Đấu Trình</span>
              ) : (
                <span>Ghép Trận Tự Động (Tìm Đối Thủ)</span>
              )}
            </button>
          </div>

          {/* National Streakers Leaderboard */}
          <div className="bg-[#111827] border border-slate-800 rounded-2xl p-5 space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-white flex items-center gap-1.5 text-sm">
                <Trophy className="w-4 h-4 text-amber-400" />
                Bảng Vàng Streakers Toàn Quốc
              </span>
              <span className="text-slate-400 font-mono text-[10px]">ALL-TIME</span>
            </div>

            <div className="space-y-2 text-xs">
              {[
                { rank: 1, name: 'Trần Minh Hoàng', school: 'THPT Chuyên KHTN - Hà Nội', days: '182 Ngày' },
                { rank: 2, name: 'Lê Bảo Châu', school: 'THPT Chuyên Lê Hồng Phong - TP.HCM', days: '164 Ngày' },
                { rank: 3, name: 'Nguyễn Tuấn Kiệt', school: 'THPT Chuyên Lam Sơn - Thanh Hóa', days: '149 Ngày' },
                { rank: 4, name: 'Phạm Đức Anh', school: 'THPT Chuyên Hà Nội - Amsterdam', days: '138 Ngày' },
              ].map((user) => (
                <div key={user.rank} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center font-mono text-[10px] font-bold ${
                      user.rank === 1 ? 'bg-amber-400 text-black' : user.rank === 2 ? 'bg-slate-300 text-black' : 'bg-amber-700 text-white'
                    }`}>
                      {user.rank}
                    </span>
                    <div>
                      <strong className="text-white block leading-none">{user.name}</strong>
                      <span className="text-[10px] text-slate-400">{user.school}</span>
                    </div>
                  </div>
                  <span className="font-mono text-amber-300 font-bold text-xs">{user.days}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
