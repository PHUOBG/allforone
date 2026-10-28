import React, { useState } from 'react';
import { 
  GraduationCap, 
  Users, 
  Layers, 
  ExternalLink, 
  Sparkles, 
  Bot, 
  ShieldAlert, 
  CheckCircle2, 
  Clock, 
  RefreshCw, 
  FileSpreadsheet, 
  KeyRound, 
  AlertTriangle,
  Play
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const TeacherPage: React.FC = () => {
  const [synced, setSynced] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [sheetExporting, setSheetExporting] = useState(false);
  const [sheetExported, setSheetExported] = useState(false);
  const [aiExamGenerated, setAiExamGenerated] = useState(false);

  const handleSyncClassroom = () => {
    setSyncing(true);
    setTimeout(() => {
      setSyncing(false);
      setSynced(true);
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 }
      });
    }, 800);
  };

  const handleExportSheets = () => {
    setSheetExporting(true);
    setTimeout(() => {
      setSheetExporting(false);
      setSheetExported(true);
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 700);
  };

  const handleGenerateExam = () => {
    setAiExamGenerated(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 }
    });
    setTimeout(() => setAiExamGenerated(false), 5000);
  };

  return (
    <div className="w-full min-h-screen bg-[#070b13] text-slate-200 py-8 px-4 sm:px-6 lg:px-8 space-y-8 max-w-7xl mx-auto">
      {/* Teacher Portal Header Banner */}
      <div className="bg-gradient-to-r from-[#121929] via-[#0f1522] to-[#0a0e17] border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-2xl">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 flex-wrap font-mono text-xs">
            <span className="px-2.5 py-0.5 rounded bg-indigo-950/60 text-indigo-300 border border-indigo-800/40 font-semibold">
              PORTAL SƯ PHẠM V4.2 · KHẢO THÍ CHUẨN HOÁ
            </span>
            <span className="text-slate-400">HK2 - 2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Cổng Quản Trị Khảo Thí &amp; Phân Tích Dữ Liệu Dành Cho Giáo Viên
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Hệ thống điều phối liên môn Toán - Lý - Tin: Kiểm định năng lực học sinh theo chuẩn ma trận Bộ GD&amp;ĐT, tích hợp mô hình phân tích học tập thời gian thực và đồng bộ hai chiều Google Workspace for Education.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 flex-wrap">
          <button 
            onClick={handleSyncClassroom}
            disabled={syncing}
            className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer"
          >
            {syncing ? <RefreshCw className="w-4 h-4 animate-spin text-cyan-400" /> : <RefreshCw className="w-4 h-4 text-cyan-400" />}
            <span>{syncing ? 'Đang đồng bộ...' : 'Đồng bộ Classroom tức thời'}</span>
          </button>
          <button 
            onClick={handleGenerateExam}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-bold transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Khởi tạo Contest AI</span>
          </button>
        </div>
      </div>

      {/* 4 Summary Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-[#111827] border border-slate-800 rounded-2xl p-5 shadow-lg">
          <span className="text-slate-400 text-xs block font-mono">TỔNG THÍ SINH QUẢN LÝ</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-3xl font-extrabold font-mono text-white">218</span>
            <span className="text-xs font-mono text-emerald-400 font-semibold">+14 tuần này</span>
          </div>
          <span className="text-xs text-slate-500 mt-1 block">5 lớp chuyên · Khối 12</span>
        </div>

        <div className="bg-[#111827] border border-slate-800 rounded-2xl p-5 shadow-lg">
          <span className="text-slate-400 text-xs block font-mono">ĐIỂM TRUNG BÌNH LIÊN MÔN</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-3xl font-extrabold font-mono text-cyan-400">7.84</span>
            <span className="text-xs font-mono text-slate-400">/10.0</span>
          </div>
          <span className="text-xs text-slate-500 mt-1 block">Độ lệch chuẩn: σ = 1.12</span>
        </div>

        <div className="bg-[#111827] border border-slate-800 rounded-2xl p-5 shadow-lg">
          <span className="text-slate-400 text-xs block font-mono">CONTEST ĐANG DIỄN RA</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-3xl font-extrabold font-mono text-white">03</span>
            <span className="text-xs font-mono text-rose-400 font-bold">LIVE</span>
          </div>
          <span className="text-xs text-slate-500 mt-1 block">148 học sinh trực tuyến</span>
        </div>

        <div className="bg-[#111827] border border-slate-800 rounded-2xl p-5 shadow-lg">
          <span className="text-slate-400 text-xs block font-mono">CẢNH BÁO LỖ HỔNG</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-3xl font-extrabold font-mono text-amber-400">06</span>
            <span className="text-xs font-mono text-amber-300 font-semibold">Chuyên đề nóng</span>
          </div>
          <span className="text-xs text-slate-500 mt-1 block">&gt;40% học sinh mắc bẫy đề</span>
        </div>
      </div>

      {/* Google Workspace for Education Hub Box */}
      <div className="bg-[#101726] border border-indigo-500/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">Google Workspace for Education Hub</h2>
              <p className="text-xs text-slate-400">Quản lý phiên đồng bộ Classroom API, kết xuất Sheets thời gian thực và cấu hình mã kỳ thi riêng biệt</p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-950/40 text-emerald-400 border border-emerald-800/40 font-mono text-xs flex items-center gap-1.5 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Google API: Connected (OAuth2 Valid)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
          {/* Classroom */}
          <div className="bg-[#0b0e18] border border-slate-800 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white text-sm">Đồng bộ Classroom API</span>
              <span className="font-mono text-[10px] text-emerald-400 font-semibold">5/5 LỚP HOẠT ĐỘNG</span>
            </div>
            <p className="text-slate-400 text-xs">Tự động quét danh sách lớp, email học sinh và cấp quyền truy cập kỳ thi không cần đăng ký thủ công.</p>
            <div className="space-y-1.5 font-mono text-xs bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
              <div className="flex justify-between text-slate-300"><span>12A1 Chuyên Toán (42 hs)</span><span className="text-emerald-400 font-bold">SYNCED</span></div>
              <div className="flex justify-between text-slate-300"><span>12A2 Chuyên Lý (40 hs)</span><span className="text-emerald-400 font-bold">SYNCED</span></div>
              <div className="flex justify-between text-slate-300"><span>12 Tin Thuật Toán (36 hs)</span><span className="text-emerald-400 font-bold">SYNCED</span></div>
            </div>
            <button 
              onClick={handleSyncClassroom}
              className="w-full py-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-300 text-xs font-semibold transition-colors cursor-pointer"
            >
              Quét Lại Danh Sách Lớp
            </button>
          </div>

          {/* Sheets */}
          <div className="bg-[#0b0e18] border border-slate-800 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white text-sm">Xuất Điểm Google Sheets</span>
              <span className="font-mono text-[10px] text-cyan-400 font-semibold">STREAMING</span>
            </div>
            <p className="text-slate-400 text-xs">Tự động ghi điểm thi, số câu đúng theo ma trận đề và thời gian nộp bài vào file Google Sheet chỉ định.</p>
            <div className="font-mono text-xs bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 space-y-1">
              <div className="text-slate-400">Sheet đích: <strong className="text-white">KhaoThi_K12_Chung.xlsx</strong></div>
              <div className="text-slate-400">Trường dữ liệu: <strong className="text-cyan-300">Điểm, Elo, Lỗi sai, Log IP</strong></div>
            </div>
            <button 
              onClick={handleExportSheets}
              className="w-full py-2 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/40 border border-indigo-500/40 text-indigo-200 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>{sheetExported ? 'Đã Xuất 218 Bản Ghi' : 'Mở / Xuất Google Sheets'}</span>
            </button>
          </div>

          {/* Access Key */}
          <div className="bg-[#0b0e18] border border-slate-800 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white text-sm">Khởi Tạo Mã Contest</span>
              <span className="font-mono text-[10px] text-purple-400 font-semibold">ACCESS KEY</span>
            </div>
            <p className="text-slate-400 text-xs">Thiết lập mã phòng thi chuyên biệt với mật khẩu mã hóa dùng riêng cho kỳ thi thử cụm trường hoặc từng khối lớp.</p>
            <div className="p-2.5 rounded-lg bg-black/40 border border-purple-500/30 flex items-center justify-between font-mono">
              <span className="text-purple-300 font-bold text-sm">AFO-K12-TOANLY-892</span>
              <span className="text-xs text-slate-500 cursor-pointer hover:text-white" onClick={() => alert('Đã sao chép mã phòng!')}>Copy</span>
            </div>
            <button 
              onClick={() => alert('Đã tạo mã phòng thi mới: AFO-K12-2026-LIVE')}
              className="w-full py-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-300 text-xs font-semibold transition-colors cursor-pointer"
            >
              Tạo Mã Phòng Mới
            </button>
          </div>
        </div>
      </div>

      {/* Gaussian Bell Curve Distribution Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 bg-[#111827] border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-white">Phổ Điểm Khảo Thí Đợt 2 – Khối 12 (Gaussian Bell Curve)</h2>
              <p className="text-xs text-slate-400">Phân phối chuẩn hóa Gaussian đối chiếu kết quả khảo sát 218 học sinh</p>
            </div>
            <span className="font-mono text-xs text-slate-400">N = 218 bài nộp</span>
          </div>

          {/* SVG Bell Curve */}
          <div className="relative w-full h-[240px]">
            <svg viewBox="0 0 400 200" className="w-full h-full">
              <defs>
                <linearGradient id="teacherBellGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.05" />
                </linearGradient>
              </defs>

              <line x1="30" y1="170" x2="380" y2="170" stroke="#334155" strokeWidth="1.2" />

              <path
                d="M 30 170 C 90 170, 140 168, 180 140 C 210 115, 230 40, 250 40 C 270 40, 290 115, 320 140 C 350 165, 370 170, 380 170 Z"
                fill="url(#teacherBellGrad)"
                stroke="#06b6d4"
                strokeWidth="2.5"
              />

              <line x1="250" y1="40" x2="250" y2="170" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="250" cy="40" r="4" fill="#38bdf8" />
              <text x="250" y="32" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono">
                μ = 7.84 (Đỉnh phổ)
              </text>

              <line x1="240" y1="46" x2="240" y2="170" stroke="#a855f7" strokeWidth="1.2" strokeDasharray="2 2" />
              <text x="210" y="70" fill="#c084fc" fontSize="9" fontFamily="JetBrains Mono">Med = 7.80</text>

              <text x="40" y="185" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">0.0</text>
              <text x="100" y="185" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">2.0</text>
              <text x="160" y="185" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">4.0</text>
              <text x="210" y="185" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">6.0</text>
              <text x="250" y="185" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono">7.84 (μ)</text>
              <text x="290" y="185" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">8.5</text>
              <text x="340" y="185" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">9.8+</text>
              <text x="380" y="185" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">10.0</text>
            </svg>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-800 text-xs font-mono">
            <div className="bg-slate-900/60 p-3 rounded-xl text-center">
              <span className="text-slate-400 block text-[10px]">ĐIỂM TRUNG BÌNH (μ)</span>
              <strong className="text-white text-base">7.84</strong>
              <span className="text-[10px] text-emerald-400 block mt-0.5">Lệch phải tích cực</span>
            </div>
            <div className="bg-slate-900/60 p-3 rounded-xl text-center">
              <span className="text-slate-400 block text-[10px]">ĐỘ LỆCH CHUẨN (σ)</span>
              <strong className="text-cyan-400 text-base">1.12</strong>
              <span className="text-[10px] text-slate-400 block mt-0.5">Độ tập trung cao</span>
            </div>
            <div className="bg-slate-900/60 p-3 rounded-xl text-center">
              <span className="text-slate-400 block text-[10px]">TRUNG VỊ (MEDIAN)</span>
              <strong className="text-purple-300 text-base">7.80</strong>
              <span className="text-[10px] text-slate-400 block mt-0.5">Phân vị 50th</span>
            </div>
          </div>
        </div>

        {/* Knowledge Gap Matrix */}
        <div className="lg:col-span-5 bg-[#111827] border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-white">Ma Trận Lỗ Hổng Kiến Thức</h2>
              <p className="text-xs text-slate-400">Phân tích nhịp độ sai sót theo từng chuyên đề thi</p>
            </div>
            <span className="px-2.5 py-1 rounded bg-rose-950/40 text-rose-400 border border-rose-800/40 font-mono text-xs font-bold">
              CẢNH BÁO CAO
            </span>
          </div>

          <div className="space-y-3 text-xs">
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
                topic: 'Đạo hàm hàm hợp chứa trị tuyệt đối |f(u(x))|',
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
              <div key={idx} className="bg-[#0b0e18] p-3.5 rounded-xl border border-slate-800 space-y-1.5">
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

      {/* Gemini AI Exam Generator & Live Anti-Cheat Telemetry */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Gemini Exam Generator (7 cols) */}
        <div className="lg:col-span-7 bg-[#111827] border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center">
                <Bot className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white">Trình Sinh Đề Tự Động AI Gemini 2.5</h2>
                <p className="text-xs text-slate-400">Tự động cấu trúc 50 câu chuẩn độ khó từ ngân hàng đề kèm bóc tách bẫy tư duy</p>
              </div>
            </div>
            <span className="font-mono text-xs text-indigo-400 bg-indigo-950/40 px-2.5 py-1 rounded border border-indigo-800/40 font-bold">
              GEMINI PRO ED
            </span>
          </div>

          <div className="grid grid-cols-4 gap-2.5 text-center font-mono text-xs">
            <div className="bg-[#0b0e18] p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400 block text-[10px]">Nhận biết</span>
              <strong className="text-white text-base">15 câu</strong>
              <span className="text-[10px] text-slate-500 block">30%</span>
            </div>
            <div className="bg-[#0b0e18] p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400 block text-[10px]">Thông hiểu</span>
              <strong className="text-white text-base">15 câu</strong>
              <span className="text-[10px] text-slate-500 block">30%</span>
            </div>
            <div className="bg-[#0b0e18] p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400 block text-[10px]">Vận dụng</span>
              <strong className="text-cyan-400 text-base">12 câu</strong>
              <span className="text-[10px] text-slate-500 block">24%</span>
            </div>
            <div className="bg-[#0b0e18] p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400 block text-[10px]">Vận dụng cao</span>
              <strong className="text-rose-400 text-base">08 câu</strong>
              <span className="text-[10px] text-slate-500 block">16%</span>
            </div>
          </div>

          <div className="p-3 bg-slate-900/70 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-1">
            <span className="text-indigo-400 block font-bold text-[10px]">PROMPT RÀNG BUỘC CHUYÊN SÂU:</span>
            <p className="text-[11px] text-slate-400">
              "Ưu tiên sinh các câu hỏi liên quan đến cực trị hàm hợp trị tuyệt đối, mạch RLC có tụ xoay C biến thiên và thuật toán chia để trị. Mỗi câu cần có phần 'Bóc tách bẫy tư duy' để giáo viên giải thích cho học sinh sau giờ làm."
            </p>
          </div>

          <button 
            onClick={handleGenerateExam}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Sinh Đề Thi Ngay (Bộ 4 Mã Đề 101, 102, 103, 104)</span>
          </button>
        </div>

        {/* Live Proctoring & Anti-Cheat (5 cols) */}
        <div className="lg:col-span-5 bg-[#111827] border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-rose-400" />
              <span>Giám Sát Trực Tiếp (Anti-cheat)</span>
            </h2>
            <span className="px-2.5 py-1 rounded bg-rose-950/40 text-rose-300 border border-rose-800/40 font-mono text-xs">
              ACTIVE: 148 HS
            </span>
          </div>

          <div className="space-y-2.5 text-xs font-mono">
            {[
              {
                student: 'Trần Hoàng Long (12A1)',
                event: 'RỜI TAB (3 LẦN)',
                desc: 'Phát hiện mất focus màn hình làm bài trong 4.2 giây. Câu đang làm: #24',
                color: 'text-rose-400',
                border: 'border-rose-900/50'
              },
              {
                student: 'Nguyễn Mai Phương (12A2)',
                event: 'NỘP BÀI THÀNH CÔNG',
                desc: 'Hoàn thành 48/50 câu · Thời gian làm: 58 phút 14 giây. Điểm tạm tính: 9.20',
                color: 'text-emerald-400',
                border: 'border-emerald-900/50'
              },
              {
                student: 'Lê Quốc Bảo (12 Tin)',
                event: 'COPY CLOBBER LOG',
                desc: 'Chặn thao tác Ctrl+C mã đề bài toán Quy hoạch động. Câu đang làm: #49',
                color: 'text-amber-400',
                border: 'border-amber-900/50'
              },
              {
                student: 'Phạm Đức Anh (12A3)',
                event: 'BẤM CHỌN NHANH',
                desc: 'Trả lời 5 câu liên tiếp trong 8 giây (Tốc độ khoanh bừa). Câu #31 - #35',
                color: 'text-sky-400',
                border: 'border-sky-900/50'
              }
            ].map((log, idx) => (
              <div key={idx} className={`p-3 rounded-xl bg-[#0b0e18] border ${log.border} space-y-1`}>
                <div className="flex items-center justify-between">
                  <strong className="text-white text-xs">{log.student}</strong>
                  <span className={`text-[10px] font-bold ${log.color}`}>{log.event}</span>
                </div>
                <p className="text-[11px] text-slate-400 font-sans">{log.desc}</p>
              </div>
            ))}
          </div>

          <button 
            onClick={() => alert('Đang mở màn hình giám sát toàn bộ 148 camera phòng thi...')}
            className="w-full py-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-300 text-xs font-semibold transition-colors cursor-pointer"
          >
            Xem Toàn Màn Hình Giám Sát
          </button>
        </div>
      </div>
    </div>
  );
};
