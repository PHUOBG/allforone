import React, { useState } from 'react';
import { BookOpen, Layers, Sparkles, CheckCircle2, ChevronRight, Binary, Compass, Activity, ArrowRight } from 'lucide-react';
import { OxyzInteractive3D } from '../components/OxyzInteractive3D';

export const TheoryPage: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<'oxyz' | 'rlc' | 'bst'>('oxyz');

  return (
    <div className="w-full min-h-screen bg-[#070b13] text-slate-200 py-8 px-4 sm:px-6 lg:px-8 space-y-8 max-w-7xl mx-auto">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#121929] via-[#0f1522] to-[#0a0e17] border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-2xl">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 flex-wrap font-mono text-xs">
            <span className="px-2.5 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-800/40 font-semibold">
              SGK GDPT 2018 · THƯ VIỆN LÝ THUYẾT ĐỒ HỌA
            </span>
            <span className="text-slate-400">TOÁN · LÝ · TIN</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Học Lý Thuyết &amp; Đồ Họa Vector SVG Sắc Nét
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Hệ thống hóa lý thuyết cô đọng theo SGK GDPT 2018. Đồ họa Vector SVG sắc nét cao cho hình không gian Oxyz, mạch điện xoay chiều, cây nhị phân BST và lược đồ ERD.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs bg-slate-900/80 p-2 rounded-xl border border-slate-800">
          <button
            onClick={() => setSelectedTopic('oxyz')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${selectedTopic === 'oxyz' ? 'bg-purple-600 text-white font-bold' : 'text-slate-400 hover:text-white'}`}
          >
            📐 Toán: Oxyz 3D
          </button>
          <button
            onClick={() => setSelectedTopic('rlc')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${selectedTopic === 'rlc' ? 'bg-cyan-600 text-white font-bold' : 'text-slate-400 hover:text-white'}`}
          >
            ⚡ Lý: Mạch RLC
          </button>
          <button
            onClick={() => setSelectedTopic('bst')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${selectedTopic === 'bst' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'}`}
          >
            💻 Tin: Cây BST
          </button>
        </div>
      </div>

      {/* Main Content Pane */}
      {selectedTopic === 'oxyz' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6 space-y-4">
              <span className="px-2.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono text-xs font-bold border border-purple-500/30">
                CHUYÊN ĐỀ HÌNH HỌC KHÔNG GIAN OXYZ
              </span>
              <h2 className="text-xl font-bold text-white">
                1. Vector Pháp Tuyến &amp; Góc Nhị Diện Trong Không Gian
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  Trong hệ trục tọa độ Oxyz, mặt phẳng (P) đi qua điểm M(x0, y0, z0) có vector pháp tuyến n = (A, B, C) thỏa mãn phương trình tổng quát:
                </p>
                <div className="p-3 bg-black/40 rounded-xl border border-purple-500/30 font-mono text-cyan-300 text-xs">
                  {'A(x - x_0) + B(y - y_0) + C(z - z_0) = 0 \\Leftrightarrow Ax + By + Cz + D = 0'}
                </div>
                <h3 className="font-bold text-white text-sm pt-2">Góc Nhị Diện Giữa Hai Mặt Phẳng:</h3>
                <p>
                  Góc giữa hai mặt phẳng (P) và (Q) tương ứng với góc giữa hai vector pháp tuyến:
                </p>
                <div className="p-3 bg-black/40 rounded-xl border border-purple-500/30 font-mono text-purple-300 text-xs">
                  {'\\cos \\varphi = \\frac{|\\vec{n}_P \\cdot \\vec{n}_Q|}{|\\vec{n}_P| \\cdot |\\vec{n}_Q|} \\quad (0^\\circ \\le \\varphi \\le 90^\\circ)'}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <OxyzInteractive3D />
          </div>
        </div>
      )}

      {selectedTopic === 'rlc' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6 space-y-4">
              <span className="px-2.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold border border-cyan-500/30">
                CHUYÊN ĐỀ VẬT LÝ ĐIỆN XOAY CHIỀU
              </span>
              <h2 className="text-xl font-bold text-white">
                2. Giản Đồ Fresnel &amp; Cực Trị Điện Áp Cuộn Cảm Thuần
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  Điện áp hai đầu đoạn mạch RLC nối tiếp bằng tổng vector các điện áp thành phần:
                </p>
                <div className="p-3 bg-black/40 rounded-xl border border-cyan-500/30 font-mono text-cyan-300 text-xs">
                  {'\\vec{U} = \\vec{U}_R + \\vec{U}_L + \\vec{U}_C \\implies U = \\sqrt{U_R^2 + (U_L - U_C)^2}'}
                </div>
                <h3 className="font-bold text-white text-sm pt-2">Cực Trị Khi Tần Số ω Biến Thiên:</h3>
                <p>
                  Để U_L đạt cực đại, tần số góc ω_L phải thỏa mãn định lý cực trị:
                </p>
                <div className="p-3 bg-black/40 rounded-xl border border-cyan-500/30 font-mono text-emerald-300 text-xs">
                  {'\\omega_L = \\frac{1}{C \\sqrt{\\frac{L}{C} - \\frac{R^2}{2}}} \\quad (\\text{Điều kiện}: 2L > R^2 C)'}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#090d16] border border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[300px]">
            <span className="font-mono text-xs text-slate-400 mb-4">GIẢN ĐỒ VECTO FRESNEL VÀ BIỂU DIỄN PHA</span>
            <svg viewBox="0 0 300 200" className="w-full max-w-sm">
              <line x1="50" y1="140" x2="240" y2="140" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrow)" />
              <text x="245" y="145" fill="#10b981" fontSize="12" fontWeight="bold" fontFamily="JetBrains Mono">U_R</text>

              <line x1="240" y1="140" x2="240" y2="40" stroke="#06b6d4" strokeWidth="3" markerEnd="url(#arrow)" />
              <text x="245" y="45" fill="#06b6d4" fontSize="12" fontWeight="bold" fontFamily="JetBrains Mono">U_L</text>

              <line x1="240" y1="140" x2="240" y2="180" stroke="#f43f5e" strokeWidth="2.5" markerEnd="url(#arrow)" />
              <text x="245" y="185" fill="#f43f5e" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono">U_C</text>

              <line x1="50" y1="140" x2="240" y2="40" stroke="#a855f7" strokeWidth="3" />
              <text x="130" y="80" fill="#c084fc" fontSize="13" fontWeight="bold" fontFamily="JetBrains Mono">U_mạch</text>
            </svg>
          </div>
        </div>
      )}

      {selectedTopic === 'bst' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6 space-y-4">
              <span className="px-2.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono text-xs font-bold border border-indigo-500/30">
                CHUYÊN ĐỀ TIN HỌC &amp; GIẢI THUẬT
              </span>
              <h2 className="text-xl font-bold text-white">
                3. Cây Nhị Phân Tìm Kiếm (Binary Search Tree - BST)
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  Cây nhị phân tìm kiếm là cấu trúc dữ liệu cây trong đó mỗi nút có tối đa hai nút con thỏa mãn tính chất khóa:
                </p>
                <div className="p-3 bg-black/40 rounded-xl border border-indigo-500/30 font-mono text-indigo-300 text-xs">
                  {'key(left_child) < key(node) <= key(right_child)'}
                </div>
                <h3 className="font-bold text-white text-sm pt-2">Độ Phức Tạp Thời Gian:</h3>
                <p>
                  Thao tác tìm kiếm, chèn và xóa trên cây cân bằng đạt $O(\log N)$. Trường hợp suy biến thành danh sách liên kết đạt $O(N)$.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#090d16] border border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[300px]">
            <span className="font-mono text-xs text-slate-400 mb-4">CẤU TRÚC CÂY NHỊ PHÂN TÌM KIẾM CÂN BẰNG</span>
            <svg viewBox="0 0 280 180" className="w-full max-w-sm">
              <line x1="140" y1="30" x2="80" y2="80" stroke="#475569" strokeWidth="2" />
              <line x1="140" y1="30" x2="200" y2="80" stroke="#475569" strokeWidth="2" />
              <line x1="80" y1="80" x2="50" y2="130" stroke="#475569" strokeWidth="2" />
              <line x1="80" y1="80" x2="110" y2="130" stroke="#475569" strokeWidth="2" />
              <line x1="200" y1="80" x2="170" y2="130" stroke="#475569" strokeWidth="2" />
              <line x1="200" y1="80" x2="230" y2="130" stroke="#475569" strokeWidth="2" />

              <circle cx="140" cy="30" r="16" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2" />
              <text x="140" y="35" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold" fontFamily="JetBrains Mono">50</text>

              <circle cx="80" cy="80" r="14" fill="#1e1b4b" stroke="#38bdf8" strokeWidth="2" />
              <text x="80" y="85" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono">30</text>

              <circle cx="200" cy="80" r="14" fill="#1e1b4b" stroke="#38bdf8" strokeWidth="2" />
              <text x="200" y="85" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono">70</text>

              <circle cx="50" cy="130" r="12" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
              <text x="50" y="134" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontFamily="JetBrains Mono">20</text>

              <circle cx="110" cy="130" r="12" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
              <text x="110" y="134" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontFamily="JetBrains Mono">40</text>

              <circle cx="170" cy="130" r="12" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
              <text x="170" y="134" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontFamily="JetBrains Mono">60</text>

              <circle cx="230" cy="130" r="12" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
              <text x="230" y="134" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontFamily="JetBrains Mono">80</text>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};
