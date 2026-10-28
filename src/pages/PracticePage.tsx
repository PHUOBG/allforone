import React, { useState } from 'react';
import { 
  Code2, 
  Play, 
  CheckCircle2, 
  Clock, 
  Zap, 
  Bot, 
  RotateCw, 
  Maximize2, 
  Minimize2, 
  ChevronRight, 
  BookOpen, 
  AlertTriangle,
  Lightbulb,
  Sparkles,
  Calculator,
  Terminal,
  Bookmark,
  Share2,
  ListOrdered
} from 'lucide-react';
import { OxyzInteractive3D } from '../components/OxyzInteractive3D';
import confetti from 'canvas-confetti';

const PRACTICE_PROBLEMS = [
  {
    id: 'GEO-OXYZ-3409',
    title: 'Góc Nhị Diện & Thể Tích Khối Chóp Tứ Giác Đều S.ABCD Trong Không Gian Oxyz',
    subject: 'TOÁN 12',
    topic: 'HÌNH HỌC OXYZ / CÂU 34',
    level: 'VẬN DỤNG CAO (LEVEL 4)',
    levelColor: 'text-rose-400 bg-rose-950/40 border-rose-800/40',
    acceptance: '14.8%',
    avgTime: '11\'45"',
    eloReward: 42,
    has3d: true,
    codeDefault: `import sympy as sp
# Bước 1: Khai báo tham số và tọa độ đỉnh S, C, A, B
a = sp.Symbol('a', positive=True)
h = a * sp.tan(sp.pi / 3) # h = a*sqrt(3) (Chuẩn)
S = sp.Matrix([0, 0, h]) ; C = sp.Matrix([a, a, 0]) # <- Trap Check
vec_SC = C - S
vec_AB = sp.Matrix([2*a, 0, 0])
# Tính khoảng cách chéo d(AB, SC) qua tích có hướng
n_dist = vec_AB.cross(vec_SC)
print(f"Tọa độ đỉnh S: {0, 0, {h}}")
`,
    description: `Trong không gian với hệ tọa độ chuẩn hóa Oxyz, cho khối chóp tứ giác đều S.ABCD có đỉnh S nằm trên tia Oz dương. Đáy ABCD là hình vuông tâm O(0, 0, 0) nằm trên mặt phẳng (Oxy), với cạnh hình vuông bằng 2a và các trục tọa độ Ox, Oy song song lần lượt với các cạnh AB, BC.

Cho biết góc nhị diện tạo bởi mặt bên (SBC) và mặt phẳng đáy (ABCD) bằng 60°.
// Giả thiết quy chuẩn: a = 2 đơn vị dài

Yêu cầu:
1. Thiết lập tọa độ chuẩn xác của đỉnh S(0, 0, h) và vector pháp tuyến đơn vị \\vec{n}_{(SBC)}.
2. Tính khoảng cách giữa hai đường thẳng chéo nhau AB và SC theo tham số a.`
  },
  {
    id: 'PHYS-RLC-508',
    title: 'Mạch RLC Nối Tiếp: Cực Trị Điện Áp Cuộn Cảm Thuần Khi Thay Đổi Tần Số Góc',
    subject: 'VẬT LÝ 12',
    topic: 'ĐIỆN XOAY CHIỀU / CÂU 38',
    level: 'VẬN DỤNG CAO (LEVEL 4)',
    levelColor: 'text-rose-400 bg-rose-950/40 border-rose-800/40',
    acceptance: '18.2%',
    avgTime: '08\'30"',
    eloReward: 35,
    has3d: false,
    codeDefault: `# Mô phỏng khảo sát hàm số UL theo tần số góc omega
import numpy as np

def find_omega_L_max(R, L, C):
    # Điều kiện cực trị: 2*L > R**2 * C
    if 2 * L <= R**2 * C:
        return None # Không có cực trị
    val = (L / C) - (R**2 / 2.0)
    omega_L = 1.0 / (C * np.sqrt(val))
    return omega_L

# Test với tham số chuẩn BGD: R=50, L=1/pi, C=10^-4/2pi
print("Omega cực trị UL =", find_omega_L_max(50, 0.318, 0.0000159))
`,
    description: `Đặt điện áp xoay chiều u = U0*cos(ωt) (với U0 không đổi, ω thay đổi được) vào hai đầu đoạn mạch RLC nối tiếp gồm điện trở thuần R = 50 Ω, cuộn cảm thuần có L = 1/π H và tụ điện có C = 10^-4 / (2π) F.

Khi thay đổi tần số góc ω, điện áp hiệu dụng giữa hai đầu cuộn cảm thuần UL đạt giá trị cực đại là ULmax.

Yêu cầu:
1. Xác định giá trị tần số góc ωL để UL đạt cực đại.
2. Tính tỉ số giữa ULmax và điện áp hiệu dụng hai đầu mạch U.`
  },
  {
    id: 'CS-DP-KNAP',
    title: 'Quy Hoạch Động Cái Túi 0/1: Tối Ưu Bộ Nhớ Không Gian 1D O(W)',
    subject: 'TIN HỌC 12',
    topic: 'QUY HOẠCH ĐỘNG / CÂU 40',
    level: 'VẬN DỤNG (LEVEL 3)',
    levelColor: 'text-indigo-400 bg-indigo-950/40 border-indigo-800/40',
    acceptance: '32.4%',
    avgTime: '09\'15"',
    eloReward: 25,
    has3d: false,
    codeDefault: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    int n = 4, W = 10;
    vector<int> wt = {2, 3, 4, 5};
    vector<int> val = {3, 4, 5, 8};
    
    // Tối ưu mảng 1 chiều, duyệt ngược từ W về wt[i] để tránh dùng lại vật phẩm
    vector<long long> dp(W + 1, 0);
    for (int i = 0; i < n; i++) {
        for (int w = W; w >= wt[i]; w--) {
            dp[w] = max(dp[w], dp[w - wt[i]] + val[i]);
        }
    }
    cout << "Gia tri toi uu = " << dp[W] << "\\n";
    return 0;
}
`,
    description: `Có N đồ vật, mỗi đồ vật i có trọng lượng wt[i] và giá trị val[i]. Cho một cái túi có sức chứa tối đa W. Mỗi đồ vật chỉ được chọn nhiều nhất 1 lần (Knapsack 0/1).

Yêu cầu:
1. Hãy tìm tổng giá trị lớn nhất có thể đạt được sao cho tổng trọng lượng không vượt quá W.
2. Cài đặt thuật toán tối ưu bộ nhớ chỉ sử dụng mảng 1D dp[W] với độ phức tạp không gian O(W).`
  }
];

export const PracticePage: React.FC = () => {
  const [selectedProblemIndex, setSelectedProblemIndex] = useState(0);
  const [activeScratchTab, setActiveScratchTab] = useState<'python' | 'cpp' | 'casio' | 'gemini'>('python');
  const [isZenMode, setIsZenMode] = useState(false);
  const [timerRunning, setTimerRunning] = useState(true);
  const [seconds, setSeconds] = useState(871); // 14:31
  const [submitted, setSubmitted] = useState(false);

  const currentProblem = PRACTICE_PROBLEMS[selectedProblemIndex];

  // Timer effect
  React.useEffect(() => {
    if (!timerRunning) return;
    const interval = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(interval);
  }, [timerRunning]);

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleSubmit = () => {
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#6366f1', '#06b6d4', '#10b981', '#f59e0b']
    });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className={`w-full min-h-screen bg-[#070b13] text-slate-200 ${isZenMode ? 'fixed inset-0 z-50 overflow-y-auto' : ''}`}>
      {/* Top Workspace Header Bar */}
      <div className="sticky top-0 z-30 bg-[#0c121e] border-b border-slate-800 px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
        {/* Left: Breadcrumbs & Problem Select */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs text-slate-400">LUYỆN ĐỀ /</span>
            <span className="font-mono text-xs font-bold text-white">{currentProblem.subject}</span>
            <span className="font-mono text-xs text-slate-400 hidden md:inline">/ {currentProblem.topic}</span>
          </div>

          {/* Quick Problem Switcher */}
          <select
            value={selectedProblemIndex}
            onChange={(e) => setSelectedProblemIndex(Number(e.target.value))}
            className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-white focus:outline-none focus:border-indigo-500 font-mono"
          >
            {PRACTICE_PROBLEMS.map((p, idx) => (
              <option key={p.id} value={idx}>
                {p.id} - {p.title.slice(0, 30)}...
              </option>
            ))}
          </select>

          <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border hidden lg:inline ${currentProblem.levelColor}`}>
            ● {currentProblem.level}
          </span>
        </div>

        {/* Right: Timer, Elo, Zen Mode & Action */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setTimerRunning(!timerRunning)}
            className="flex items-center gap-1.5 font-mono text-cyan-300 bg-cyan-950/40 px-2.5 py-1 rounded-lg border border-cyan-800/40 text-xs hover:border-cyan-600 cursor-pointer"
            title="Bấm để tạm dừng / tiếp tục"
          >
            <Clock className="w-3.5 h-3.5" />
            <span className="font-bold">{formatTime(seconds)}</span>
          </button>

          <div className="flex items-center gap-1.5 font-mono text-amber-300 bg-amber-950/30 px-2.5 py-1 rounded-lg border border-amber-800/40 text-xs">
            <Zap className="w-3.5 h-3.5" />
            <span>+{currentProblem.eloReward} Elo</span>
          </div>

          <button
            onClick={() => setIsZenMode(!isZenMode)}
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
            title={isZenMode ? "Thoát Zen Mode" : "Toàn màn hình Zen Mode"}
          >
            {isZenMode ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-lg shadow-indigo-600/30 cursor-pointer"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Nộp Bài (Submit)</span>
          </button>
        </div>
      </div>

      {/* Success Notification Banner */}
      {submitted && (
        <div className="bg-emerald-950/60 border-b border-emerald-500/40 px-6 py-2.5 flex items-center justify-between text-xs text-emerald-200 animate-fadeIn">
          <span className="flex items-center gap-2 font-mono">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Chúc mừng! Tất cả 24/24 Testcases đã vượt qua thành công. Nhận +{currentProblem.eloReward} Elo vào hồ sơ {currentProblem.subject}!
          </span>
          <span className="font-mono text-emerald-400 font-bold">ELO MỚI: 1,722 (+42)</span>
        </div>
      )}

      {/* Main Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-50px)] divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
        {/* Left Column: Problem Statement & 3D Vector Visualizer (6 cols) */}
        <div className="lg:col-span-6 p-5 sm:p-6 space-y-5 overflow-y-auto max-h-[calc(100vh-50px)]">
          {/* Metadata bar */}
          <div className="grid grid-cols-3 gap-2 pb-3 border-b border-slate-800/80 text-[11px] font-mono">
            <div className="bg-[#0f1422] p-2.5 rounded-xl border border-slate-800">
              <span className="text-slate-500 block text-[10px]">MÃ ĐỀ THI</span>
              <strong className="text-white text-xs">{currentProblem.id}</strong>
            </div>
            <div className="bg-[#0f1422] p-2.5 rounded-xl border border-slate-800">
              <span className="text-slate-500 block text-[10px]">TỈ LỆ ACCEPT</span>
              <strong className="text-cyan-400 text-xs">{currentProblem.acceptance}</strong>
            </div>
            <div className="bg-[#0f1422] p-2.5 rounded-xl border border-slate-800">
              <span className="text-slate-500 block text-[10px]">THỜI GIAN TB</span>
              <strong className="text-slate-300 text-xs">{currentProblem.avgTime}</strong>
            </div>
          </div>

          {/* Problem Content */}
          <div className="space-y-3">
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
              {currentProblem.title}
            </h1>

            <div className="p-4 bg-[#0d121f] rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line font-sans">
              {currentProblem.description}
            </div>
          </div>

          {/* 3D Geometry Visualizer if math problem */}
          {currentProblem.has3d && (
            <div>
              <OxyzInteractive3D />
            </div>
          )}

          {/* Pitfalls & Thinking Traps Alert */}
          <div className="bg-rose-950/20 border border-rose-500/30 rounded-xl p-4 space-y-2">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase font-mono tracking-wider">
              <AlertTriangle className="w-4 h-4" />
              <span>CẢNH BÁO BẪY TƯ DUY (TRAPS &amp; PITFALLS)</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Hơn <strong>64% thí sinh</strong> bị bẫy ở bước chọn góc phẳng nhị diện. Luôn dùng chân đường cao hình chiếu để xác định đoạn vuông góc chung thay vì lấy cạnh bên nghiêng tùy ý!
            </p>
          </div>
        </div>

        {/* Right Column: Code Scratchpad & Gemini Pro Debugger (6 cols) */}
        <div className="lg:col-span-6 p-5 sm:p-6 flex flex-col justify-between space-y-4 bg-[#090d16] overflow-y-auto max-h-[calc(100vh-50px)]">
          <div>
            {/* Editor Tab Strip */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3 text-xs">
              <div className="flex items-center gap-1.5 flex-wrap">
                <button
                  onClick={() => setActiveScratchTab('python')}
                  className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-colors cursor-pointer ${
                    activeScratchTab === 'python'
                      ? 'bg-slate-800 text-cyan-300 font-bold border border-slate-700'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Scratchpad Python (SymPy)
                </button>
                <button
                  onClick={() => setActiveScratchTab('cpp')}
                  className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-colors cursor-pointer ${
                    activeScratchTab === 'cpp'
                      ? 'bg-slate-800 text-indigo-300 font-bold border border-slate-700'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Code C++ / Algorithmic
                </button>
                <button
                  onClick={() => setActiveScratchTab('casio')}
                  className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-colors cursor-pointer ${
                    activeScratchTab === 'casio'
                      ? 'bg-slate-800 text-amber-300 font-bold border border-slate-700'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Casio fx-880BTG
                </button>
              </div>

              <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">UTF-8 · Isolated Sandbox</span>
            </div>

            {/* Code Viewport */}
            <div className="bg-[#050810] rounded-xl border border-slate-800 p-4 font-mono text-xs overflow-x-auto shadow-inner">
              <pre className="text-slate-300 leading-relaxed">
                <code>{currentProblem.codeDefault}</code>
              </pre>
            </div>

            {/* Gemini Pro Debugger Live Card */}
            <div className="mt-4 bg-[#0f1628] border border-indigo-500/30 rounded-xl p-4 space-y-3 shadow-lg">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-indigo-300 font-bold font-mono">
                  <Bot className="w-4 h-4 text-cyan-400" />
                  <span>Chẩn Đoán Độc Quyền Gemini 2.5 Pro Debugger</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-400 border border-emerald-800/40 font-mono text-[10px]">
                  ACTIVE INFERENCE
                </span>
              </div>

              <div className="p-3 bg-rose-950/20 border border-rose-500/30 rounded-lg text-xs space-y-1">
                <span className="text-rose-400 font-semibold flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Bước 2: Nhầm lẫn góc nhị diện mặt bên (SBC) và đáy (ABCD)
                </span>
                <p className="text-[11px] text-slate-300">
                  Bạn đã gán góc SBC = 60° thay vì góc phẳng nhị diện SMO = 60° (với M là trung điểm BC). Cần vẽ lại mặt phẳng vuông góc với giao tuyến BC để không mất toàn bộ điểm câu này.
                </p>
              </div>

              <div className="p-3 bg-emerald-950/20 border border-emerald-500/30 rounded-lg text-xs flex items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <span className="text-emerald-400 font-semibold block text-[11px]">QUY TẮC VÀNG TƯ DUY:</span>
                  <p className="text-[11px] text-slate-300">
                    Dựng chân đường cao từ tâm O đến giao tuyến BC trước khi xác định góc nghiêng giữa 2 mặt phẳng.
                  </p>
                </div>
                <span className="shrink-0 px-2 py-1 rounded bg-slate-900 border border-slate-700 font-mono text-[10px] text-cyan-300">
                  Casio: Vector Dot
                </span>
              </div>
            </div>
          </div>

          {/* Testcases & Action Footer */}
          <div className="pt-3 border-t border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> TESTCASES: 24 / 24 PASSED (100%)
              </span>
              <span className="text-slate-400 text-[11px]">BỘ NHỚ: 2.1 MB · THỜI GIAN: 4ms</span>
            </div>

            <div className="grid grid-cols-12 gap-1.5">
              {Array.from({ length: 24 }).map((_, i) => (
                <div
                  key={i}
                  className="py-1 rounded bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-cyan-400 text-center font-mono text-[10px] cursor-pointer"
                  title={`Testcase #${i + 1}: Passed (0.001s)`}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-1">
              <button 
                onClick={handleSubmit}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 text-cyan-400" />
                <span>Chạy Thử Nghiệm (Dry Run)</span>
              </button>

              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-xs rounded-lg transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-2 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Nộp Bài (Submit) – Nhận +{currentProblem.eloReward} Elo</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
