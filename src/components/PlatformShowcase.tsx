import React, { useState } from 'react';
import { 
  Code2, 
  Flame, 
  UserCheck, 
  GraduationCap, 
  Play, 
  CheckCircle2, 
  Clock, 
  Zap, 
  Brain, 
  Bot, 
  Share2, 
  Download, 
  ShieldCheck, 
  Sparkles,
  Swords,
  Trophy,
  Activity,
  Layers,
  ChevronRight,
  ExternalLink,
  Users,
  AlertTriangle,
  Lock,
  ArrowRight
} from 'lucide-react';
import { OxyzInteractive3D } from './OxyzInteractive3D';
import { DAILY_QUESTIONS, SAMPLE_STUDENT, RADAR_DATA, THINKING_TRAPS } from '../data/mockData';
import confetti from 'canvas-confetti';

interface Props {
  onOpenDiagnostic: () => void;
  initialTab?: 'workspace' | 'daily' | 'profile' | 'teacher';
}

export const PlatformShowcase: React.FC<Props> = ({ onOpenDiagnostic, initialTab = 'workspace' }) => {
  const [activeTab, setActiveTab] = useState<'workspace' | 'daily' | 'profile' | 'teacher'>(initialTab);
  const [activeScratchpadTab, setActiveScratchpadTab] = useState<'python' | 'cpp' | 'casio' | 'gemini'>('python');
  const [testcaseStatus, setTestcaseStatus] = useState<'idle' | 'running' | 'passed'>('passed');
  const [selectedDay, setSelectedDay] = useState(24);
  const [selectedStudentGroup, setSelectedStudentGroup] = useState<'excellent' | 'good' | 'average' | 'remedy'>('excellent');

  const triggerSubmitConfetti = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#6366f1', '#06b6d4', '#10b981', '#f59e0b']
    });
  };

  return (
    <div className="w-full">
      {/* Module Selector Bar - Cyberpunk Tab Strip */}
      <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-slate-800 mb-6">
        <div className="flex items-center gap-1.5 p-1.5 bg-[#090d16] border border-slate-800 rounded-xl overflow-x-auto max-w-full">
          <button
            onClick={() => setActiveTab('workspace')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'workspace'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>1. Luyện Đề Chuẩn LeetCode (Oxyz 3D & AI)</span>
          </button>

          <button
            onClick={() => setActiveTab('daily')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'daily'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>2. Daily Challenge 10 Câu Phân Loại</span>
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'profile'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5 text-sky-400" />
            <span>3. Hồ Sơ Năng Lực 3 Môn (Elo & Radar)</span>
          </button>

          <button
            onClick={() => setActiveTab('teacher')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'teacher'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
            <span>4. Cổng Khảo Thí & Google Classroom</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            INTERACTIVE LIVE ENGINE
          </span>
        </div>
      </div>

      {/* VIEW 1: LEETCODE STYLE PROBLEM WORKSPACE */}
      {activeTab === 'workspace' && (
        <div className="bg-[#0b0f19] border border-slate-800/90 rounded-2xl overflow-hidden shadow-2xl animate-fadeIn">
          {/* Top workspace toolbar */}
          <div className="flex items-center justify-between px-5 py-3 bg-[#111827] border-b border-slate-800 text-xs">
            <div className="flex items-center gap-3">
              <span className="font-mono text-slate-400">LUYỆN ĐỀ / <strong className="text-white">TOÁN 12</strong> / HÌNH HỌC OXYZ / CÂU 34</span>
              <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[10px] font-mono font-semibold">
                ● VẬN DỤNG CAO (LEVEL 4)
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 font-mono text-cyan-300 bg-cyan-950/40 px-2.5 py-1 rounded border border-cyan-800/40">
                <Clock className="w-3.5 h-3.5" />
                <span className="font-bold text-xs tracking-wider">00:14:31</span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-amber-300 bg-amber-950/30 px-2.5 py-1 rounded border border-amber-800/40">
                <Zap className="w-3.5 h-3.5" />
                <span>+42 Elo TÍCH LŨY</span>
              </div>
              <button 
                onClick={onOpenDiagnostic}
                className="flex items-center gap-1.5 px-3 py-1 rounded bg-indigo-600/30 hover:bg-indigo-600/40 border border-indigo-500/50 text-indigo-200 transition-colors"
              >
                <Bot className="w-3.5 h-3.5" />
                <span>Hỏi Gemini Debug</span>
              </button>
              <button 
                onClick={triggerSubmitConfetti}
                className="flex items-center gap-1.5 px-3 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors shadow-lg shadow-indigo-600/30"
              >
                <span>Nộp Bài (Submit)</span>
              </button>
            </div>
          </div>

          {/* 2-Pane Split Workspace */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800 min-h-[580px]">
            {/* Left Column: Problem & 3D Interactive Canvas */}
            <div className="lg:col-span-6 p-5 flex flex-col justify-between space-y-4">
              <div>
                {/* Problem meta stats */}
                <div className="grid grid-cols-3 gap-2 pb-3 border-b border-slate-800/80 text-[11px] font-mono">
                  <div className="bg-[#101624] p-2 rounded border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">MÃ BÀI</span>
                    <strong className="text-white">GEO-OXYZ-3409</strong>
                  </div>
                  <div className="bg-[#101624] p-2 rounded border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">TỈ LỆ ĐẠT</span>
                    <strong className="text-cyan-400">14.8%</strong>
                  </div>
                  <div className="bg-[#101624] p-2 rounded border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">THỜI GIAN TB</span>
                    <strong className="text-slate-300">11'45"</strong>
                  </div>
                </div>

                {/* Problem statement */}
                <div className="mt-4 space-y-3">
                  <h3 className="text-lg font-bold text-white leading-snug">
                    Góc Nhị Diện & Thể Tích Khối Chóp Tứ Giác Đều S.ABCD Trong Không Gian Oxyz
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Trong không gian với hệ tọa độ chuẩn hóa <span className="font-mono text-cyan-300">Oxyz</span>, cho khối chóp tứ giác đều <span className="font-mono text-white">S.ABCD</span> có đỉnh S nằm trên tia <span className="font-mono text-cyan-300">Oz</span> dương. Đáy <span className="font-mono text-white">ABCD</span> là hình vuông tâm <span className="font-mono text-slate-400">O(0, 0, 0)</span> nằm trên mặt phẳng <span className="font-mono text-indigo-300">(Oxy)</span>, với cạnh hình vuông bằng 2a và các trục tọa độ Ox, Oy song song lần lượt với các cạnh AB, BC.
                  </p>
                  <div className="p-3 bg-slate-900/70 border border-slate-800 rounded-lg text-xs space-y-1">
                    <p className="text-slate-300">
                      Cho biết góc nhị diện tạo bởi mặt bên <span className="font-mono text-cyan-300 font-semibold">(SBC)</span> và mặt phẳng đáy <span className="font-mono text-indigo-300 font-semibold">(ABCD)</span> bằng <strong className="text-pink-400 font-mono">60°</strong>.
                    </p>
                    <p className="text-slate-400 font-mono text-[11px]">// Giả thiết quy chuẩn: a = 2 đơn vị dài</p>
                  </div>
                  <div className="text-xs space-y-1 text-slate-300">
                    <strong className="text-white block">Yêu cầu:</strong>
                    <div>1. Thiết lập tọa độ chuẩn xác của đỉnh <span className="font-mono text-cyan-300">S(0, 0, h)</span> và vector pháp tuyến đơn vị <span className="font-mono text-purple-300">\vec&#123;n&#125;_(SBC)</span>.</div>
                    <div>2. Tính khoảng cách giữa hai đường thẳng chéo nhau AB và SC theo tham số a.</div>
                  </div>
                </div>
              </div>

              {/* Interactive 3D Oxyz Vector Visualizer */}
              <div>
                <OxyzInteractive3D />
              </div>
            </div>

            {/* Right Column: Code Scratchpad & Gemini Pro Debugger */}
            <div className="lg:col-span-6 p-5 flex flex-col justify-between space-y-4 bg-[#0a0e17]">
              <div>
                {/* Scratchpad Language Switcher */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 mb-3 text-xs">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setActiveScratchpadTab('python')}
                      className={`px-3 py-1.5 rounded-lg font-mono text-[11px] transition-colors ${
                        activeScratchpadTab === 'python'
                          ? 'bg-slate-800 text-cyan-300 font-semibold border border-slate-700'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Scratchpad Toán / Lý (SymPy)
                    </button>
                    <button
                      onClick={() => setActiveScratchpadTab('cpp')}
                      className={`px-3 py-1.5 rounded-lg font-mono text-[11px] transition-colors ${
                        activeScratchpadTab === 'cpp'
                          ? 'bg-slate-800 text-indigo-300 font-semibold border border-slate-700'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Code C++ / Python (Tin)
                    </button>
                    <button
                      onClick={() => setActiveScratchpadTab('casio')}
                      className={`px-3 py-1.5 rounded-lg font-mono text-[11px] transition-colors ${
                        activeScratchpadTab === 'casio'
                          ? 'bg-slate-800 text-amber-300 font-semibold border border-slate-700'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Casio fx-880BTG
                    </button>
                  </div>

                  <span className="text-[10px] font-mono text-slate-500">Python 3.11 (SymPy Environment)</span>
                </div>

                {/* Code Terminal View */}
                <div className="bg-[#070a10] rounded-xl border border-slate-800/90 p-3.5 font-mono text-xs overflow-x-auto">
                  <div className="space-y-1 text-slate-300">
                    <div className="flex gap-4"><span className="text-slate-600 select-none">01</span><span><span className="text-purple-400">import</span> sympy <span className="text-purple-400">as</span> sp</span></div>
                    <div className="flex gap-4"><span className="text-slate-600 select-none">02</span><span className="text-slate-500">// Bước 1: Khai báo tham số và tọa độ đỉnh S, C, A, B</span></div>
                    <div className="flex gap-4"><span className="text-slate-600 select-none">03</span><span>a = sp.Symbol(<span className="text-emerald-400">'a'</span>, positive=<span className="text-amber-400">True</span>)</span></div>
                    <div className="flex gap-4"><span className="text-slate-600 select-none">04</span><span>h = a * sp.tan(sp.pi / <span className="text-amber-400">3</span>) <span className="text-slate-500">// h = a*sqrt(3) (Chuẩn)</span></span></div>
                    <div className="flex gap-4 bg-rose-950/30 -mx-3.5 px-3.5 py-0.5 border-l-2 border-rose-500">
                      <span className="text-slate-600 select-none">05</span>
                      <span>S = sp.Matrix([<span className="text-amber-400">0</span>, <span className="text-amber-400">0</span>, h]) ; C = sp.Matrix([a, a, <span className="text-amber-400">0</span>]) <span className="text-rose-400 text-[10px] ml-2">// &lt;- Trap Check</span></span>
                    </div>
                    <div className="flex gap-4"><span className="text-slate-600 select-none">06</span><span>vec_SC = C - S</span></div>
                    <div className="flex gap-4"><span className="text-slate-600 select-none">07</span><span>vec_AB = sp.Matrix([<span className="text-amber-400">2</span>*a, <span className="text-amber-400">0</span>, <span className="text-amber-400">0</span>])</span></div>
                    <div className="flex gap-4"><span className="text-slate-600 select-none">08</span><span className="text-slate-500">// Tính khoảng cách chéo d(AB, SC) qua tích có hướng</span></div>
                    <div className="flex gap-4"><span className="text-slate-600 select-none">09</span><span>n_dist = vec_AB.cross(vec_SC)</span></div>
                    <div className="flex gap-4"><span className="text-slate-600 select-none">10</span><span>print(f<span className="text-emerald-400">"Tọa độ đỉnh S: &#123;0, 0, &#123;h&#125;&#125;"</span>)</span></div>
                  </div>
                </div>

                {/* Gemini 2.5 Pro Debugger Panel */}
                <div className="mt-4 bg-[#111827]/90 border border-indigo-500/30 rounded-xl p-3.5 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-indigo-400 font-bold font-mono">
                      <Bot className="w-4 h-4" />
                      <span>Chẩn Đoán Độc Quyền Gemini 2.5 Pro Debugger</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                      MÔ HÌNH THỜI GIAN THỰC
                    </span>
                  </div>

                  <div className="p-2.5 bg-rose-950/20 border border-rose-500/30 rounded-lg text-xs">
                    <div className="flex items-center gap-1.5 text-rose-400 font-semibold mb-1">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>Bẫy tư duy phát hiện tại Bước 2: Nhầm lẫn góc nhị diện!</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Bạn đã nhầm lẫn góc giữa <span className="font-mono text-cyan-300">(SBC)</span> và <span className="font-mono text-indigo-300">(ABC)</span> thành góc <span className="font-mono text-rose-300">SBC</span> thay vì vẽ đường cao kẻ từ hình chiếu! Xem minh họa góc phẳng nhị diện bên dưới. Vì góc tam giác bên không tương đương với góc nghiêng của mặt phẳng.
                    </p>
                  </div>

                  <div className="p-2.5 bg-emerald-950/20 border border-emerald-500/30 rounded-lg text-xs flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-1.5 text-emerald-400 font-semibold mb-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>MẸO PHẢN XẠ CASIO & TƯ DUY LOGIC</span>
                      </div>
                      <p className="text-[11px] text-slate-300">
                        <strong className="text-emerald-300">Quy tắc vàng: </strong>
                        Luôn dựng chân đường cao từ tâm O đến cạnh chung BC trước khi xác định góc giữa 2 mặt phẳng.
                      </p>
                    </div>
                    <span className="shrink-0 px-2 py-1 rounded bg-slate-900 border border-slate-700 font-mono text-[10px] text-slate-300">
                      Phím bấm fx-880BTG
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Testcases Grid & Action Bar */}
              <div className="pt-3 border-t border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> TESTCASES: 24 / 24 PASSED
                    </span>
                  </div>
                  <div className="text-slate-400 text-[11px] space-x-3">
                    <span>BỘ NHỚ: <strong className="text-slate-200">2.1 MB</strong></span>
                    <span>THỰC THI: <strong className="text-slate-200">4 ms</strong></span>
                  </div>
                </div>

                {/* 24 Testcase pills */}
                <div className="grid grid-cols-12 gap-1.5">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      className="text-center py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-cyan-400 hover:border-cyan-500/50 cursor-pointer"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={() => {
                      setTestcaseStatus('running');
                      setTimeout(() => setTestcaseStatus('passed'), 400);
                    }}
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 font-medium text-xs rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <Play className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Chạy Thử Nghiệm (Dry Run)</span>
                  </button>

                  <button
                    onClick={triggerSubmitConfetti}
                    className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-sky-500 hover:from-indigo-500 hover:to-sky-400 text-white font-medium text-xs rounded-lg transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Nộp Bài (Submit) – Ghi Nhận Elo</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: DAILY CHALLENGE (10 CÂU PHÂN LOẠI) */}
      {activeTab === 'daily' && (
        <div className="bg-[#0b0f19] border border-slate-800/90 rounded-2xl p-6 shadow-2xl animate-fadeIn space-y-6">
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-[#141b2d] via-[#101726] to-[#0c101c] border border-slate-800 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2 font-mono text-xs">
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 font-semibold">
                  DAILY GRIND MATRIX
                </span>
                <span className="text-cyan-400 font-semibold flex items-center gap-1">
                  ● RESET TRONG: 07:19:32
                </span>
                <span className="text-slate-500">MÙA GIẢI 2026 · THPT QUỐC GIA</span>
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Daily Challenge: 10 Câu Phân Loại Mỗi Ngày
              </h2>
              <p className="text-xs text-slate-300 mt-1 max-w-2xl">
                Nhiệm vụ vi mô liên môn Toán · Lý · Tin thiết kế theo phổ chuẩn đề tốt nghiệp BGD. Giữ vững ngọn lửa để kích hoạt hệ số nhân Elo x2 và mở khoá rương tri thức.
              </p>
              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
                  <span>🔥 14 Ngày Liên Tục</span>
                  <span className="text-[10px] text-amber-400/80">Kỷ lục cá nhân: 28 ngày</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-semibold">
                  <span>❄️ 2 Vé Đóng Băng</span>
                  <span className="text-[10px] text-sky-400/80">Bảo vệ chuỗi nếu quên giải</span>
                </div>
              </div>
            </div>

            {/* Circular Progress & Elo Reward Box */}
            <div className="bg-[#101726] border border-slate-800 p-4 rounded-xl flex items-center gap-4 shrink-0">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <svg className="w-16 h-16 transform -rotate-90">
                  <circle cx="32" cy="32" r="26" stroke="#1f293d" strokeWidth="5" fill="transparent" />
                  <circle
                    cx="32"
                    cy="32"
                    r="26"
                    stroke="#06b6d4"
                    strokeWidth="5"
                    strokeDasharray={163}
                    strokeDashoffset={163 - (163 * 4) / 10}
                    strokeLinecap="round"
                    fill="transparent"
                  />
                </svg>
                <div className="absolute text-center">
                  <span className="text-sm font-bold text-white block leading-none font-mono">4/10</span>
                  <span className="text-[9px] text-slate-400 font-mono">TIẾN ĐỘ</span>
                </div>
              </div>
              <div className="text-xs space-y-1">
                <div className="text-slate-400">Elo chờ mở khóa: <strong className="text-emerald-400 font-mono text-sm">+35 Elo</strong></div>
                <div className="text-[11px] text-slate-400">Hoàn thành 10/10: <span className="text-amber-400">+1 Rương Hàng Ngày</span></div>
                <div className="text-[11px] text-slate-400">Streak Bonus: <span className="text-cyan-300 font-mono">+1.4x EXP Booster</span></div>
                <button
                  onClick={triggerSubmitConfetti}
                  className="mt-1 w-full px-3 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-[11px] font-semibold transition-colors flex items-center justify-center gap-1"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Tiếp Tục Câu 5 Ngay</span>
                </button>
              </div>
            </div>
          </div>

          {/* Grid Layout: Left 10 Questions, Right Streak Matrix & 1vs1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left 8 Cols: 10 Questions List */}
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
                <span className="font-semibold text-white flex items-center gap-2">
                  <span>Phổ Đề 10 Câu Ngày 24/10</span>
                </span>
                <div className="flex items-center gap-2 font-mono text-[10px]">
                  <span className="px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-400 border border-emerald-800/40">3 NHẬN BIẾT</span>
                  <span className="px-2 py-0.5 rounded bg-cyan-950/40 text-cyan-400 border border-cyan-800/40">4 TH & VẬN DỤNG</span>
                  <span className="px-2 py-0.5 rounded bg-purple-950/40 text-purple-400 border border-purple-800/40">3 VẬN DỤNG CAO (BOSS)</span>
                </div>
              </div>

              {DAILY_QUESTIONS.map((q) => (
                <div
                  key={q.id}
                  className={`p-3.5 rounded-xl border transition-all flex items-center justify-between gap-4 ${
                    q.status === 'done'
                      ? 'bg-[#0f1422]/60 border-slate-800/60 opacity-80'
                      : q.status === 'current'
                      ? 'bg-[#131b2e] border-cyan-500/50 shadow-md shadow-cyan-950/30 ring-1 ring-cyan-500/30'
                      : 'bg-[#0d121f] border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {/* Index circle */}
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 font-mono text-xs font-bold ${
                        q.status === 'done'
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                          : q.status === 'current'
                          ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30 font-extrabold'
                          : 'bg-slate-800 text-slate-400 border border-slate-700'
                      }`}
                    >
                      {q.status === 'done' ? <CheckCircle2 className="w-4 h-4" /> : q.index}
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
                      <p className="text-xs text-white font-medium line-clamp-1">
                        {q.title}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="font-mono text-xs font-semibold text-emerald-400">
                      +{q.eloGain} Elo {q.status === 'done' && <span className="text-[10px] text-slate-500">(Đã nhận)</span>}
                    </span>
                    <button
                      onClick={() => {
                        if (q.status === 'current') setActiveTab('workspace');
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                        q.status === 'done'
                          ? 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                          : q.status === 'current'
                          ? 'bg-cyan-500 hover:bg-cyan-400 text-black shadow-md font-bold'
                          : q.isBoss
                          ? 'bg-purple-600/30 hover:bg-purple-600/50 text-purple-200 border border-purple-500/40'
                          : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                      }`}
                    >
                      {q.status === 'done' ? 'Xem Lại' : q.status === 'current' ? 'Giải Ngay' : q.isBoss ? 'Chinh Phục' : 'Bắt Đầu'}
                    </button>
                  </div>
                </div>
              ))}

              {/* Gemini Pro Analyzer footer banner */}
              <div className="bg-[#101728] border border-indigo-500/30 rounded-xl p-4 space-y-2 mt-4">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-indigo-300 font-bold">
                    <Bot className="w-4 h-4 text-cyan-400" />
                    <span>Gemini Pro · Trợ Lý Phân Tích Liên Môn</span>
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
                      AI HINT ONLINE
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">AI phản hồi sau 140ms</span>
                </div>
                <div className="text-xs text-slate-300 space-y-1.5 bg-black/30 p-3 rounded-lg border border-slate-800 font-mono text-[11px]">
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

            {/* Right 4 Cols: Streak Matrix & 1vs1 Challenge */}
            <div className="lg:col-span-4 space-y-5">
              {/* Streak Calendar Matrix */}
              <div className="bg-[#111827] border border-slate-800 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-white flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-amber-400" />
                    Ma Trận Streak
                  </span>
                  <span className="text-slate-400 font-mono text-[11px]">Tháng 10/2026</span>
                </div>

                {/* Day headers */}
                <div className="grid grid-cols-7 gap-1 text-center font-mono text-[10px] text-slate-500">
                  <span>T2</span><span>T3</span><span>T4</span><span>T5</span><span>T6</span><span>T7</span><span>CN</span>
                </div>

                {/* Days grid */}
                <div className="grid grid-cols-7 gap-1.5 font-mono text-xs">
                  {Array.from({ length: 28 }).map((_, i) => {
                    const day = i + 1;
                    const isStreak = day <= 24;
                    const isToday = day === 24;
                    const isFrozen = day === 18;
                    return (
                      <div
                        key={i}
                        onClick={() => setSelectedDay(day)}
                        className={`h-8 rounded-lg flex items-center justify-center transition-all cursor-pointer text-[11px] ${
                          isToday
                            ? 'bg-cyan-500 text-black font-extrabold shadow-md shadow-cyan-500/30 ring-2 ring-cyan-300'
                            : isFrozen
                            ? 'bg-sky-950/60 text-sky-300 border border-sky-500/40'
                            : isStreak
                            ? 'bg-indigo-600/40 text-indigo-200 border border-indigo-500/30'
                            : 'bg-slate-900/50 text-slate-600 border border-slate-800/60'
                        }`}
                      >
                        {isFrozen ? '❄️' : day}
                      </div>
                    );
                  })}
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Mốc tiếp theo: <strong className="text-amber-300">15 Ngày</strong></span>
                  <span className="text-sky-300">+1 Freeze Shield</span>
                </div>
              </div>

              {/* 1vs1 Daily Battle Room */}
              <div className="bg-gradient-to-b from-[#131b2e] to-[#0c101c] border border-cyan-500/30 rounded-xl p-4 space-y-3 shadow-lg">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white font-bold flex items-center gap-1.5">
                    <Swords className="w-4 h-4 text-cyan-400" />
                    Thách Đấu 1vs1 Daily
                  </span>
                  <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-mono text-[10px] font-semibold border border-rose-500/40">
                    LIVE ROOM
                  </span>
                </div>

                <p className="text-[11px] text-slate-300 leading-snug">
                  Ghép đôi bạn bè cùng giải trọn gói 10 câu hôm nay. Học sinh nào hoàn thành nhanh và chính xác hơn nhận trọn bộ cược Elo!
                </p>

                <div className="bg-[#0b0e17] p-3 rounded-lg border border-slate-800 flex items-center justify-between text-xs">
                  <div className="text-center">
                    <span className="text-[10px] text-slate-400 block font-mono">BẠN</span>
                    <strong className="text-white block font-mono">1420 Elo</strong>
                    <span className="text-[10px] text-emerald-400">Đã sẵn sàng</span>
                  </div>
                  <div className="text-slate-500 font-mono font-bold text-xs">VS</div>
                  <div className="text-center">
                    <span className="text-[10px] text-slate-400 block font-mono">ĐỐI THỦ</span>
                    <strong className="text-cyan-300 block font-mono">Đang tìm...</strong>
                    <span className="text-[10px] text-slate-400">THPT Chuyên Sư Phạm</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button className="py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-colors">
                    Mời Bạn Thân
                  </button>
                  <button 
                    onClick={triggerSubmitConfetti}
                    className="py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs transition-colors shadow-md shadow-cyan-500/20"
                  >
                    Ghép Tự Động
                  </button>
                </div>
              </div>

              {/* Streakers Leaderboard */}
              <div className="bg-[#111827] border border-slate-800 rounded-xl p-4 space-y-2.5">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-white flex items-center gap-1.5">
                    <Trophy className="w-4 h-4 text-amber-400" />
                    Bảng Vàng Streakers
                  </span>
                  <span className="text-slate-400 font-mono text-[10px]">TOÀN QUỐC</span>
                </div>

                <div className="space-y-2 text-xs">
                  {[
                    { rank: 1, name: 'Trần Minh Hoàng', school: 'Chuyên KHTN - Hà Nội', days: '182 Ngày' },
                    { rank: 2, name: 'Lê Bảo Châu', school: 'Chuyên Lê Hồng Phong - TP.HCM', days: '164 Ngày' },
                    { rank: 3, name: 'Nguyễn Tuấn Kiệt', school: 'Chuyên Lam Sơn - Thanh Hóa', days: '149 Ngày' },
                  ].map((user) => (
                    <div key={user.rank} className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800/80">
                      <div className="flex items-center gap-2.5">
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
                      <span className="font-mono text-amber-300 font-semibold text-[11px]">{user.days}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: STUDENT PROFILE & 3-DISCIPLINE TELEMETRY */}
      {activeTab === 'profile' && (
        <div className="bg-[#0b0f19] border border-slate-800/90 rounded-2xl p-6 shadow-2xl animate-fadeIn space-y-6">
          {/* Student Header Card */}
          <div className="bg-[#111827] border border-slate-800 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 via-sky-500 to-emerald-400 p-0.5 shadow-xl shadow-indigo-600/30">
                  <div className="w-full h-full bg-[#0a0e17] rounded-[14px] flex items-center justify-center font-bold text-xl text-white">
                    NL
                  </div>
                </div>
                <span className="absolute -bottom-1 -right-1 px-1.5 py-0.2 rounded bg-indigo-600 text-white font-mono text-[9px] font-bold">
                  PRO
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-xl font-bold text-white">{SAMPLE_STUDENT.name}</h2>
                  <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono text-[11px] border border-indigo-500/30">
                    {SAMPLE_STUDENT.classRoom}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  {SAMPLE_STUDENT.school} · {SAMPLE_STUDENT.cohort}
                </p>
                <div className="flex items-center gap-3 mt-2 text-xs font-mono text-slate-300">
                  <span className="text-purple-300">● {SAMPLE_STUDENT.tier}</span>
                  <span className="text-slate-600">|</span>
                  <span className="text-cyan-300">{SAMPLE_STUDENT.rankPercentile}</span>
                  <span className="text-slate-600">|</span>
                  <span className="text-amber-300">🔥 {SAMPLE_STUDENT.streak} ngày liên tục</span>
                  <span className="text-slate-600">|</span>
                  <span className="text-emerald-300">✓ {SAMPLE_STUDENT.solvedCount} bài tập</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-colors flex items-center gap-1.5">
                <Share2 className="w-3.5 h-3.5" />
                <span>Chia sẻ hồ sơ</span>
              </button>
              <button className="px-3.5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-lg shadow-indigo-600/30">
                <Download className="w-3.5 h-3.5" />
                <span>Xuất PDF Báo cáo</span>
              </button>
            </div>
          </div>

          {/* 3 Discipline Elo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Math */}
            <div className="bg-[#111827] border border-violet-500/30 hover:border-violet-500/60 rounded-xl p-4 space-y-2 transition-all">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-violet-400 font-semibold flex items-center gap-1">
                  <span>● PHÂN MÔN 01</span>
                </span>
                <span className="text-slate-500">CALCULUS & 3D</span>
              </div>
              <div>
                <span className="text-slate-400 text-xs block">Toán Học</span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-2xl font-bold font-mono text-white">1,680</span>
                  <span className="text-xs font-mono text-emerald-400">+{SAMPLE_STUDENT.mathDelta} Elo tháng này</span>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Hạng: <strong className="text-violet-300">GUARDIAN</strong></span>
                <span className="text-slate-500">Tiến độ Master: 84%</span>
              </div>
            </div>

            {/* Physics */}
            <div className="bg-[#111827] border border-cyan-500/30 hover:border-cyan-500/60 rounded-xl p-4 space-y-2 transition-all">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-cyan-400 font-semibold flex items-center gap-1">
                  <span>● PHÂN MÔN 02</span>
                </span>
                <span className="text-slate-500">PHYSICS & CIRCUITS</span>
              </div>
              <div>
                <span className="text-slate-400 text-xs block">Vật Lý</span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-2xl font-bold font-mono text-white">1,540</span>
                  <span className="text-xs font-mono text-emerald-400">+{SAMPLE_STUDENT.physicsDelta} Elo tháng này</span>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Hạng: <strong className="text-cyan-300">KNIGHT</strong></span>
                <span className="text-slate-500">Tiến độ Guardian: 70%</span>
              </div>
            </div>

            {/* CS */}
            <div className="bg-[#111827] border border-indigo-500/30 hover:border-indigo-500/60 rounded-xl p-4 space-y-2 transition-all">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-indigo-400 font-semibold flex items-center gap-1">
                  <span>● PHÂN MÔN 03</span>
                </span>
                <span className="text-slate-500">ALGO & DATA STRUCTURES</span>
              </div>
              <div>
                <span className="text-slate-400 text-xs block">Tin Học</span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-2xl font-bold font-mono text-white">1,820</span>
                  <span className="text-xs font-mono text-emerald-400">+{SAMPLE_STUDENT.csDelta} Elo tháng này</span>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Hạng: <strong className="text-indigo-300">MASTER</strong></span>
                <span className="text-slate-500">Tiến độ Grandmaster: 91%</span>
              </div>
            </div>
          </div>

          {/* Radar Chart & Weekly Elo Progression Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* 9-Axis Skill Radar Widget */}
            <div className="lg:col-span-6 bg-[#111827] border border-slate-800 rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-cyan-400" />
                    Radar Năng Lực 9 Phân Môn
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Đánh giá độ hoàn thiện và chiều sâu tư duy trên toàn bộ các chuyên đề trọng điểm.
                  </p>
                </div>
                <span className="px-2 py-0.5 rounded bg-cyan-950/40 text-cyan-400 border border-cyan-800/40 font-mono text-[10px]">
                  LIVE SYNC
                </span>
              </div>

              {/* SVG 9-Axis Radar Graphic */}
              <div className="relative w-full h-[260px] flex items-center justify-center">
                <svg viewBox="0 0 320 260" className="w-full h-full">
                  <defs>
                    <linearGradient id="radarFill" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity="0.15" />
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
                      const r = 95 * 0.58; // National average ~58%
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
                    fill="url(#radarFill)"
                    stroke="#06b6d4"
                    strokeWidth="2"
                  />

                  {/* Point circles & labels */}
                  {RADAR_DATA.map((item, i) => {
                    const angle = (i * 2 * Math.PI) / RADAR_DATA.length - Math.PI / 2;
                    const r = 95 * (item.value / 100);
                    const x = 160 + r * Math.cos(angle);
                    const y = 130 + r * Math.sin(angle);

                    // Label placement slightly further out
                    const labelR = 115;
                    const lx = 160 + labelR * Math.cos(angle);
                    const ly = 130 + labelR * Math.sin(angle);

                    return (
                      <g key={i}>
                        <circle cx={x} cy={y} r="3" fill="#38bdf8" />
                        <text
                          x={lx}
                          y={ly + 3}
                          textAnchor="middle"
                          fill="#cbd5e1"
                          fontSize="9"
                          fontFamily="JetBrains Mono"
                        >
                          {item.subject} ({item.value}%)
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              <div className="flex items-center justify-center gap-6 pt-2 border-t border-slate-800/80 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-cyan-300">
                  <span className="w-2.5 h-2.5 bg-cyan-400 rounded-sm" /> Điểm năng lực Long
                </span>
                <span className="flex items-center gap-1.5 text-slate-400">
                  <span className="w-2.5 h-0.5 bg-slate-500" /> Trung bình Chuyên Toàn quốc
                </span>
              </div>
            </div>

            {/* Weekly Elo Evolution Curve */}
            <div className="lg:col-span-6 bg-[#111827] border border-slate-800 rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-indigo-400" />
                    Biến Thiên Elo Đấu Trường Tuần
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Mô phỏng quỹ đạo Elo chuẩn Codeforces/LeetCode qua 12 tuần Contest.
                  </p>
                </div>
                <span className="px-2 py-0.5 rounded bg-purple-950/40 text-purple-300 border border-purple-800/40 font-mono text-[10px]">
                  PEAK ELO: 1,845
                </span>
              </div>

              {/* Chart SVG */}
              <div className="relative w-full h-[240px]">
                <svg viewBox="0 0 400 220" className="w-full h-full">
                  <defs>
                    <linearGradient id="curveFill" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
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

                  {/* Points: W1:1320, W2:1340, W3:1360, W4:1350, W5:1340, W6:1420, W7(AI):1620, W8:1680, W9:1650, W10:1760, W11:1780, W12:1845 */}
                  <path
                    d="M 50 185 L 80 180 L 110 175 L 140 182 L 170 178 L 200 160 L 230 115 L 260 100 L 290 108 L 320 85 L 350 80 L 380 62 L 380 200 L 50 200 Z"
                    fill="url(#curveFill)"
                  />
                  <path
                    d="M 50 185 L 80 180 L 110 175 L 140 182 L 170 178 L 200 160 L 230 115 L 260 100 L 290 108 L 320 85 L 350 80 L 380 62"
                    fill="none"
                    stroke="#a855f7"
                    strokeWidth="2.5"
                  />

                  {/* Highlight W7 - AI Activated */}
                  <circle cx="230" cy="115" r="5" fill="#38bdf8" stroke="#ffffff" strokeWidth="2" />
                  <line x1="230" y1="115" x2="230" y2="200" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 3" />
                  <text x="230" y="212" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono">
                    W7 (AI)
                  </text>

                  {/* W1 and Now labels */}
                  <text x="50" y="212" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">W1</text>
                  <text x="140" y="212" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">W3</text>
                  <text x="200" y="212" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">W5</text>
                  <text x="290" y="212" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">W9</text>
                  <text x="350" y="212" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">W11</text>
                  <text x="380" y="212" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">Hiện tại</text>
                </svg>
              </div>

              <div className="p-3 bg-indigo-950/30 border border-indigo-500/30 rounded-lg text-xs flex items-center justify-between">
                <span className="text-indigo-200">
                  <strong className="text-cyan-300">Mốc Tuần 7: </strong>
                  Bật AI Gemini Debugger bóc tách sai lầm logic, tăng vọt <strong className="text-emerald-400">+180 Elo</strong> trong 3 tuần.
                </span>
                <span className="font-mono text-xs text-slate-300 font-bold shrink-0">WINRATE: 76.4%</span>
              </div>
            </div>
          </div>

          {/* 12-Month Activity Grid (GitHub / LeetCode style) */}
          <div className="bg-[#111827] border border-slate-800 rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  Ma Trận Luyện Tập 12 Tháng (Activity Grid)
                </h3>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Tổng cộng <strong>632 lượt nộp bài</strong> & kiểm tra thuật toán trong 365 ngày qua.
                </p>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                <span>Dài nhất: <strong className="text-amber-400">26 ngày</strong></span>
                <span>Hiện tại: <strong className="text-cyan-300">14 ngày</strong></span>
              </div>
            </div>

            {/* Matrix columns for 12 months */}
            <div className="overflow-x-auto pb-2">
              <div className="flex gap-1.5 min-w-[700px]">
                {Array.from({ length: 42 }).map((_, col) => (
                  <div key={col} className="flex flex-col gap-1.5">
                    {Array.from({ length: 7 }).map((_, row) => {
                      // Generate varying heat levels
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

            <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[11px] text-slate-500 font-mono">
              <span>Ghi chú dữ liệu nộp bài từ Codeforces, VNOI & ALLFORONE Platform</span>
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

          {/* Thinking Traps Eliminated Box */}
          <div className="bg-[#111827] border border-slate-800 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <Brain className="w-4 h-4 text-purple-400" />
                  Bẫy Tư Duy Đã Khắc Phục Nhờ AI Gemini
                </h3>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Hệ thống phân tích vết lỗi (Error Attribution) tự động phân loại những sai sót logic lặp lại nhiều lần.
                </p>
              </div>
              <span className="px-2.5 py-1 rounded bg-emerald-950/40 text-emerald-400 border border-emerald-800/40 font-mono text-xs font-semibold">
                74 / 74 Bẫy logic đã master hóa
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {THINKING_TRAPS.map((trap) => (
                <div key={trap.id} className="bg-[#0b0e18] border border-slate-800/90 rounded-xl p-3.5 space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-indigo-400 font-bold">{trap.subject}</span>
                    <span className="text-emerald-400 font-semibold">{trap.status}</span>
                  </div>
                  <h4 className="text-xs font-bold text-white leading-snug">{trap.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{trap.trapDescription}</p>
                  <div className="pt-2 border-t border-slate-800/80 text-[10px] font-mono text-cyan-300">
                    <span className="text-slate-500 block mb-0.5">AI GEMINI PROMPT REMEDY:</span>
                    "{trap.aiPromptRemedy}"
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* VIEW 4: TEACHER PORTAL & GOOGLE WORKSPACE */}
      {activeTab === 'teacher' && (
        <div className="bg-[#0b0f19] border border-slate-800/90 rounded-2xl p-6 shadow-2xl animate-fadeIn space-y-6">
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-[#121929] via-[#0f1522] to-[#0a0e17] border border-slate-800 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2 font-mono text-xs">
                <span className="px-2 py-0.5 rounded bg-indigo-950/60 text-indigo-300 border border-indigo-800/40 font-semibold">
                  PORTAL SƯ PHẠM V4.2 · KHẢO THÍ CHUẨN HOÁ
                </span>
                <span className="text-slate-400">HK2 - 2026</span>
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Cổng Quản Trị Khảo Thí & Phân Tích Dữ Liệu Học Sinh Dành Cho Giáo Viên
              </h2>
              <p className="text-xs text-slate-300 mt-1 max-w-2xl">
                Hệ thống điều phối liên môn Toán - Lý - Tin: Kiểm định năng lực học sinh theo chuẩn ma trận Bộ GD&ĐT, tích hợp mô hình phân tích học tập thời gian thực và đồng bộ hai chiều Google Workspace for Education.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button className="px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-colors flex items-center gap-1.5">
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Đồng bộ tức thời</span>
              </button>
              <button 
                onClick={triggerSubmitConfetti}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-semibold transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Khởi tạo Contest AI</span>
              </button>
            </div>
          </div>

          {/* 4 Summary Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#111827] border border-slate-800 rounded-xl p-4">
              <span className="text-slate-400 text-xs block font-mono">TỔNG THÍ SINH QUẢN LÝ</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-bold font-mono text-white">218</span>
                <span className="text-xs font-mono text-emerald-400">+14 tuần này</span>
              </div>
              <span className="text-[11px] text-slate-500 mt-1 block">5 lớp chuyên · Khối 12</span>
            </div>

            <div className="bg-[#111827] border border-slate-800 rounded-xl p-4">
              <span className="text-slate-400 text-xs block font-mono">ĐIỂM TRUNG BÌNH LIÊN MÔN</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-bold font-mono text-cyan-400">7.84</span>
                <span className="text-xs font-mono text-slate-400">/10.0</span>
              </div>
              <span className="text-[11px] text-slate-500 mt-1 block">Độ lệch chuẩn: σ = 1.12</span>
            </div>

            <div className="bg-[#111827] border border-slate-800 rounded-xl p-4">
              <span className="text-slate-400 text-xs block font-mono">CONTEST ĐANG DIỄN RA</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-bold font-mono text-white">03</span>
                <span className="text-xs font-mono text-rose-400">LIVE</span>
              </div>
              <span className="text-[11px] text-slate-500 mt-1 block">148 học sinh trực tuyến</span>
            </div>

            <div className="bg-[#111827] border border-slate-800 rounded-xl p-4">
              <span className="text-slate-400 text-xs block font-mono">CẢNH BÁO LỖ HỔNG</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-bold font-mono text-amber-400">06</span>
                <span className="text-xs font-mono text-amber-300">Chuyên đề nóng</span>
              </div>
              <span className="text-[11px] text-slate-500 mt-1 block">&gt;40% học sinh mắc bẫy đề</span>
            </div>
          </div>

          {/* Google Workspace for Education Hub Box */}
          <div className="bg-[#101726] border border-indigo-500/30 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Google Workspace for Education Hub</h3>
                  <p className="text-[11px] text-slate-400">Quản lý phiên đồng bộ Classroom API, kết xuất Sheets thời gian thực và cấu hình mã kỳ thi riêng biệt</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-400 border border-emerald-800/40 font-mono text-[10px] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Google API: Connected (OAuth2 Valid)
              </span>
            </div>

            {/* 3 Integration Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              {/* Classroom API */}
              <div className="bg-[#0b0e18] border border-slate-800 rounded-xl p-3.5 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">Đồng bộ Classroom API</span>
                  <span className="font-mono text-[10px] text-emerald-400">5/5 LỚP HOẠT ĐỘNG</span>
                </div>
                <p className="text-[11px] text-slate-400">Tự động quét danh sách lớp, email học sinh và cấp quyền truy cập kỳ thi không cần đăng ký thủ công.</p>
                <div className="space-y-1 font-mono text-[10px] bg-slate-900/60 p-2 rounded border border-slate-800">
                  <div className="flex justify-between text-slate-300"><span>12A1 Chuyên Toán (42 hs)</span><span className="text-emerald-400">SYNCED</span></div>
                  <div className="flex justify-between text-slate-300"><span>12A2 Chuyên Lý (40 hs)</span><span className="text-emerald-400">SYNCED</span></div>
                  <div className="flex justify-between text-slate-300"><span>12 Tin Thuật Toán (36 hs)</span><span className="text-emerald-400">SYNCED</span></div>
                </div>
                <button className="w-full py-1.5 rounded bg-slate-900 border border-slate-700 hover:border-slate-600 text-slate-300 text-[11px] transition-colors">
                  1-Click Sync Toàn Bộ Lớp
                </button>
              </div>

              {/* Sheets API */}
              <div className="bg-[#0b0e18] border border-slate-800 rounded-xl p-3.5 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">Xuất Điểm Google Sheets</span>
                  <span className="font-mono text-[10px] text-cyan-400">STREAMING</span>
                </div>
                <p className="text-[11px] text-slate-400">Tự động ghi điểm thi, số câu đúng theo ma trận đề và thời gian nộp bài vào file Google Sheet chỉ định.</p>
                <div className="font-mono text-[10px] bg-slate-900/60 p-2 rounded border border-slate-800 space-y-1">
                  <div className="text-slate-400">Sheet đích: <strong className="text-white">KhaoThi_K12_Chung.xlsx</strong></div>
                  <div className="text-slate-400">Trường dữ liệu: <strong className="text-cyan-300">Điểm, Elo, Lỗi sai, Log IP</strong></div>
                </div>
                <button className="w-full py-1.5 rounded bg-indigo-600/30 hover:bg-indigo-600/40 border border-indigo-500/40 text-indigo-200 text-[11px] font-semibold transition-colors flex items-center justify-center gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Mở Google Sheets</span>
                </button>
              </div>

              {/* Contest Access Key */}
              <div className="bg-[#0b0e18] border border-slate-800 rounded-xl p-3.5 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">Khởi Tạo Mã Contest</span>
                  <span className="font-mono text-[10px] text-purple-400">ACCESS KEY</span>
                </div>
                <p className="text-[11px] text-slate-400">Thiết lập mã phòng thi chuyên biệt với mật khẩu mã hóa dùng riêng cho kỳ thi thử cụm trường hoặc từng khối lớp.</p>
                <div className="p-2 rounded bg-black/40 border border-purple-500/30 flex items-center justify-between font-mono">
                  <span className="text-purple-300 font-bold text-xs">AFO-K12-TOANLY-892</span>
                  <span className="text-[10px] text-slate-500">Copy</span>
                </div>
                <button className="w-full py-1.5 rounded bg-slate-900 border border-slate-700 hover:border-slate-600 text-slate-300 text-[11px] transition-colors">
                  Tạo Mã Phòng Mới
                </button>
              </div>
            </div>
          </div>

          {/* Gaussian Bell Curve Distribution Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Bell Curve */}
            <div className="lg:col-span-7 bg-[#111827] border border-slate-800 rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white">Phổ Điểm Khảo Thí Đợt 2 – Khối 12 (Gaussian Bell Curve)</h3>
                  <p className="text-[11px] text-slate-400">Phân phối chuẩn hóa Gaussian đối chiếu kết quả khảo sát 218 học sinh</p>
                </div>
                <span className="font-mono text-xs text-slate-400">N = 218 bài nộp</span>
              </div>

              {/* SVG Bell Curve */}
              <div className="relative w-full h-[220px]">
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  <defs>
                    <linearGradient id="bellGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Axis */}
                  <line x1="30" y1="170" x2="380" y2="170" stroke="#334155" strokeWidth="1.2" />

                  {/* Bell Curve Path */}
                  <path
                    d="M 30 170 C 90 170, 140 168, 180 140 C 210 115, 230 40, 250 40 C 270 40, 290 115, 320 140 C 350 165, 370 170, 380 170 Z"
                    fill="url(#bellGrad)"
                    stroke="#06b6d4"
                    strokeWidth="2.5"
                  />

                  {/* Mean Line (mu = 7.84) at x = 250 */}
                  <line x1="250" y1="40" x2="250" y2="170" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
                  <circle cx="250" cy="40" r="4" fill="#38bdf8" />
                  <text x="250" y="32" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono">
                    μ = 7.84 (Đỉnh phổ)
                  </text>

                  {/* Median Line at x = 240 */}
                  <line x1="240" y1="46" x2="240" y2="170" stroke="#a855f7" strokeWidth="1.2" strokeDasharray="2 2" />
                  <text x="210" y="70" fill="#c084fc" fontSize="9" fontFamily="JetBrains Mono">Med = 7.80</text>

                  {/* Score Ticks */}
                  <text x="40" y="185" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">0.0 (Thấp)</text>
                  <text x="100" y="185" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">2.0</text>
                  <text x="160" y="185" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">4.0</text>
                  <text x="210" y="185" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">6.0</text>
                  <text x="250" y="185" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono">7.84 (μ)</text>
                  <text x="290" y="185" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">8.5</text>
                  <text x="340" y="185" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">9.8+</text>
                  <text x="380" y="185" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">10.0 (Tuyệt đối)</text>
                </svg>
              </div>

              {/* 3 Metric Summary Boxes */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-xs font-mono">
                <div className="bg-slate-900/60 p-2 rounded text-center">
                  <span className="text-slate-400 block text-[10px]">ĐIỂM TRUNG BÌNH (μ)</span>
                  <strong className="text-white text-sm">7.84</strong>
                  <span className="text-[9px] text-emerald-400 block">Lệch phải tích cực</span>
                </div>
                <div className="bg-slate-900/60 p-2 rounded text-center">
                  <span className="text-slate-400 block text-[10px]">ĐỘ LỆCH CHUẨN (σ)</span>
                  <strong className="text-cyan-400 text-sm">1.12</strong>
                  <span className="text-[9px] text-slate-400 block">Độ tập trung cao</span>
                </div>
                <div className="bg-slate-900/60 p-2 rounded text-center">
                  <span className="text-slate-400 block text-[10px]">TRUNG VỊ (MEDIAN)</span>
                  <strong className="text-purple-300 text-sm">7.80</strong>
                  <span className="text-[9px] text-slate-400 block">Phân vị 50th</span>
                </div>
              </div>
            </div>

            {/* Knowledge Gap Matrix */}
            <div className="lg:col-span-5 bg-[#111827] border border-slate-800 rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white">Ma Trận Lỗ Hổng Kiến Thức</h3>
                  <p className="text-[11px] text-slate-400">Phân tích nhịp độ sai sót theo từng chuyên đề thi</p>
                </div>
                <span className="px-2 py-0.5 rounded bg-rose-950/40 text-rose-400 border border-rose-800/40 font-mono text-[10px]">
                  CẢNH BÁO CAO
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                {[
                  {
                    topic: 'Độ lệch pha mạch RLC & Biểu đồ Fresnel',
                    errorRate: '68% Sai',
                    detail: '148/218 học sinh nhầm lẫn giữa cuộn cảm thuần và cuộn dây có điện trở trong $r \ne 0$.',
                    color: 'text-rose-400',
                    barColor: 'bg-rose-500',
                    barWidth: '68%',
                  },
                  {
                    topic: 'Đạo hàm hàm hợp chứa trị tuyệt đối $|f(u(x))|$',
                    errorRate: '45% Sai',
                    detail: '98 học sinh bỏ sót điểm kỳ dị không có đạo hàm khi đếm số điểm cực trị.',
                    color: 'text-amber-400',
                    barColor: 'bg-amber-500',
                    barWidth: '45%',
                  },
                  {
                    topic: 'Độ phức tạp thuật toán Quy hoạch động (Tin)',
                    errorRate: '39% Sai',
                    detail: 'Mắc lỗi tràn bộ nhớ (Memory Limit Exceeded) khi khởi tạo mảng 2 chiều kích thước lớn.',
                    color: 'text-sky-400',
                    barColor: 'bg-sky-500',
                    barWidth: '39%',
                  },
                  {
                    topic: 'Tích phân từng phần hàm lượng giác ngược',
                    errorRate: '27% Sai',
                    detail: 'Học sinh nhầm lẫn dấu tích phân ở công thức biến đổi Leibniz ∫u dv = uv - ∫v du.',
                    color: 'text-emerald-400',
                    barColor: 'bg-emerald-500',
                    barWidth: '27%',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#0b0e18] p-3 rounded-lg border border-slate-800 space-y-1.5">
                    <div className="flex items-center justify-between font-semibold">
                      <span className="text-white text-xs">{item.topic}</span>
                      <span className={`font-mono text-xs ${item.color}`}>{item.errorRate}</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                      <div className={`h-full ${item.barColor} rounded-full`} style={{ width: item.barWidth }} />
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4 Ability Clusters (Nhóm năng lực học sinh) */}
          <div className="bg-[#111827] border border-slate-800 rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white">Phân Loại 4 Nhóm Năng Lực Học Tập</h3>
                <p className="text-[11px] text-slate-400">Gợi ý lộ trình can thiệp sư phạm cá nhân hóa cho từng nhóm phổ điểm</p>
              </div>
              <button className="text-xs text-indigo-400 hover:text-indigo-300 font-medium">
                Gửi bài tập cá nhân hoá →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              {/* Group 1 */}
              <div 
                onClick={() => setSelectedStudentGroup('excellent')}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                  selectedStudentGroup === 'excellent'
                    ? 'bg-emerald-950/20 border-emerald-500/50 ring-1 ring-emerald-500/40'
                    : 'bg-[#0b0e18] border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold">
                    NHÓM XUẤT SẮC
                  </span>
                  <span className="font-mono text-slate-400 text-[11px]">48 hs (22%)</span>
                </div>
                <h4 className="font-bold text-white text-sm my-1">Target 9.0 – 10.0</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed mb-2">
                  Tư duy giải toán vận dụng cao hoàn chỉnh, tốc độ xử lý nhanh, làm chủ các thuật toán đồ thị và cơ học lượng tử phức tạp.
                </p>
                <div className="text-[10px] font-mono text-emerald-400 border-t border-slate-800 pt-2">
                  ĐỀ XUẤT AI: Đề Vận Dụng Cao+
                </div>
              </div>

              {/* Group 2 */}
              <div 
                onClick={() => setSelectedStudentGroup('good')}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                  selectedStudentGroup === 'good'
                    ? 'bg-cyan-950/20 border-cyan-500/50 ring-1 ring-cyan-500/40'
                    : 'bg-[#0b0e18] border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono text-[10px] font-bold">
                    NHÓM KHÁ GIỎI
                  </span>
                  <span className="font-mono text-slate-400 text-[11px]">96 hs (44%)</span>
                </div>
                <h4 className="font-bold text-white text-sm my-1">Target 8.0 – 8.8</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed mb-2">
                  Nắm vững toàn bộ kiến thức thông hiểu, vận dụng cơ bản. Thường gặp áp lực thời gian ở 10 câu trắc nghiệm cuối.
                </p>
                <div className="text-[10px] font-mono text-cyan-400 border-t border-slate-800 pt-2">
                  ĐỀ XUẤT AI: Rèn Phản Xạ 60s/câu
                </div>
              </div>

              {/* Group 3 */}
              <div 
                onClick={() => setSelectedStudentGroup('average')}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                  selectedStudentGroup === 'average'
                    ? 'bg-amber-950/20 border-amber-500/50 ring-1 ring-amber-500/40'
                    : 'bg-[#0b0e18] border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-[10px] font-bold">
                    CẦN CỦNG CỐ
                  </span>
                  <span className="font-mono text-slate-400 text-[11px]">51 hs (23%)</span>
                </div>
                <h4 className="font-bold text-white text-sm my-1">Target 6.5 – 7.8</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed mb-2">
                  Hổng kiến thức nền tảng một số chương (Dao động tắt dần, Tích phân mặt nón, Đệ quy có nhớ). Hay làm ẩu.
                </p>
                <div className="text-[10px] font-mono text-amber-400 border-t border-slate-800 pt-2">
                  ĐỀ XUẤT AI: Bộ Flashcard Lỗi
                </div>
              </div>

              {/* Group 4 */}
              <div 
                onClick={() => setSelectedStudentGroup('remedy')}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                  selectedStudentGroup === 'remedy'
                    ? 'bg-rose-950/20 border-rose-500/50 ring-1 ring-rose-500/40'
                    : 'bg-[#0b0e18] border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-mono text-[10px] font-bold">
                    NGUY CƠ MẤT ĐIỂM
                  </span>
                  <span className="font-mono text-slate-400 text-[11px]">23 hs (11%)</span>
                </div>
                <h4 className="font-bold text-white text-sm my-1">Bẫy Lý Thuyết SGK</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed mb-2">
                  Làm tốt phần bài tập nhưng mất từ 1.0 – 1.6 điểm ở các câu hỏi định nghĩa lý thuyết, đơn vị đo lường và phát biểu SGK.
                </p>
                <div className="text-[10px] font-mono text-rose-400 border-t border-slate-800 pt-2">
                  ĐỀ XUẤT AI: Quét Bẫy Lý Thuyết
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
