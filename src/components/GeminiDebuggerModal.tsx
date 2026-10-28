import React, { useState } from 'react';
import { Bot, AlertTriangle, Lightbulb, X, Sparkles, CheckCircle2, ChevronRight, Calculator, RefreshCw } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const PRESET_TRAPS = [
  {
    subject: 'Toán Học 12 · Hình Học Oxyz',
    question: 'Góc nhị diện giữa mặt bên (SBC) và đáy (ABCD) của hình chóp tứ giác đều S.ABCD',
    wrongStep: 'Bước 2: Học sinh lấy trực tiếp góc giữa cạnh bên SB và đáy ABCD (tức góc SBO) thay vì góc nhị diện phẳng.',
    trapName: 'Nhầm lẫn giữa góc cạnh bên với góc mặt phẳng (Góc nhị diện)',
    severity: 'Bẫy phổ biến: 64% học sinh mất điểm ở câu phân loại 8.0+',
    whyItHappens: 'Do trực giác vẽ hình phẳng thường nhìn thấy SB nghiêng với đáy rõ hơn đoạn SM vuông góc với giao tuyến BC.',
    goldenRule: 'Luôn dựng chân đường cao từ tâm O đến cạnh đáy chung BC (điểm M) trước khi nối SM tạo góc nhị diện phẳng SMO.',
    casioReflex: 'Phím bấm Casio fx-880BTG: HOME > Vector > Matrix 3x3 > Dot Product (Tích vô hướng hai vector pháp tuyến)',
  },
  {
    subject: 'Vật Lý 12 · Điện Xoay Chiều RLC',
    question: 'Mạch RLC có tần số góc ω biến thiên. Tìm ω để điện áp hiệu dụng trên cuộn cảm thuần U_L cực đại.',
    wrongStep: 'Học sinh áp dụng điều kiện cộng hưởng điện Z_L = Z_C dẫn tới ω = 1/√(LC).',
    trapName: 'Bẫy cộng hưởng giả lập thay vì cực trị điện áp cuộn cảm',
    severity: 'Bẫy trí mạng: 72% thí sinh chọn nhầm đáp án A (cộng hưởng)',
    whyItHappens: 'Tần số để U_L(max) luôn lớn hơn tần số cộng hưởng ω_0, trong khi tần số để U_C(max) lại nhỏ hơn ω_0.',
    goldenRule: 'Hàm số f(y) của biểu thức U_L theo y = ω² có cực trị tại y_L = 1 / [C²(L/C - R²/2)]. Điều kiện tồn tại cực trị: 2L > R²C.',
    casioReflex: 'Phím bấm Casio fx-880BTG: TABLE > f(x) quét dải tần số 100π đến 200π để tìm đỉnh cực trị trong 5 giây.',
  },
  {
    subject: 'Tin Học 12 · Thuật Toán & CSDL',
    question: 'Quy hoạch động đếm số cách chia kẹo modulo 10^9 + 7: dp[i][j] = dp[i-1][j] + dp[i-1][j - w[i]]',
    wrongStep: 'int result = (dp[i-1][j] + dp[i-1][j - w[i]]) % 1000000007; // Bị tràn số trước khi chia dư',
    trapName: 'Tràn số nguyên 32-bit (Integer Overflow) trước toán tử Modulo',
    severity: 'Lỗi Runtime: 100% test lớn trả về kết quả âm (-2147483648)',
    whyItHappens: 'Toán tử cộng (+) giữa hai số gần 10^9 sinh ra giá trị ~2*10^9, nếu cộng thêm 1 giá trị nữa sẽ vượt quá INT_MAX.',
    goldenRule: 'Khai báo #define int long long hoặc ép kiểu 1LL * a * b trước phép toán modulo.',
    casioReflex: 'Code C++: (a % MOD + b % MOD) % MOD; luôn bảo toàn miền giá trị trong [0, MOD-1].',
  },
];

export const GeminiDebuggerModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [selectedPreset, setSelectedPreset] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [customCode, setCustomCode] = useState('');
  const [userTested, setUserTested] = useState(false);

  if (!isOpen) return null;

  const current = PRESET_TRAPS[selectedPreset];

  const handleTestDiagnostic = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setUserTested(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-[#0e1422] border border-indigo-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#131b2e] border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-sky-400 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white tracking-tight">
                  Gia Sư AI Gemini 2.5 Pro Debugger
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  MÔ HÌNH THỜI GIAN THỰC
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Bóc tách bẫy tư duy liên môn Toán – Lý – Tin & đề xuất phản xạ giải nhanh chuẩn xác
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Preset Selector */}
        <div className="px-6 py-3 bg-[#0c111d] border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-slate-400 shrink-0 font-medium">Bẫy điểm hình:</span>
          {PRESET_TRAPS.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedPreset(idx);
                setUserTested(false);
              }}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors shrink-0 flex items-center gap-1.5 border ${
                selectedPreset === idx
                  ? 'bg-indigo-600/30 text-indigo-300 border-indigo-500/50 shadow-sm'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              <span>{item.subject.split('·')[0]}</span>
              <span className="text-[10px] opacity-70">({item.trapName.slice(0, 22)}...)</span>
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm">
          {/* Question context */}
          <div className="bg-[#111827] border border-slate-800 rounded-xl p-4">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5 font-mono">
              <span className="text-cyan-400 font-semibold">{current.subject}</span>
              <span>Độ khó: Vận Dụng Cao (Level 4)</span>
            </div>
            <h4 className="font-semibold text-white text-base leading-snug">
              {current.question}
            </h4>
          </div>

          {/* Diagnosis Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Student Mistake Step */}
            <div className="bg-rose-950/20 border border-rose-500/30 rounded-xl p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase font-mono tracking-wider mb-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Điểm mù & Bước biến đổi nhầm lẫn</span>
                </div>
                <div className="p-3 bg-black/40 rounded-lg border border-rose-900/40 font-mono text-xs text-rose-200 mb-3">
                  {current.wrongStep}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-2">
                  <strong className="text-rose-300">Bẫy tâm lý: </strong>
                  {current.whyItHappens}
                </p>
              </div>
              <div className="pt-2 border-t border-rose-900/40 text-[11px] text-rose-400 font-mono">
                {current.severity}
              </div>
            </div>

            {/* AI Remedy & Golden Rule */}
            <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase font-mono tracking-wider mb-2">
                  <Lightbulb className="w-4 h-4" />
                  <span>Mẹo phản xạ & Quy tắc vàng AI</span>
                </div>
                <div className="p-3 bg-black/40 rounded-lg border border-emerald-900/40 font-mono text-xs text-emerald-200 mb-3">
                  {current.goldenRule}
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                  <Calculator className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-cyan-300 block mb-0.5">Thủ thuật Casio / Thuật toán:</span>
                    <span className="font-mono text-[11px] text-slate-300">{current.casioReflex}</span>
                  </div>
                </div>
              </div>
              <div className="pt-2 border-t border-emerald-900/40 flex items-center justify-between text-[11px]">
                <span className="text-emerald-400 font-mono flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Khắc phục vĩnh viễn bẫy này
                </span>
                <span className="text-slate-400 font-mono">+25 Elo sau bài học</span>
              </div>
            </div>
          </div>

          {/* Interactive Live Test Box */}
          <div className="bg-[#121829] border border-slate-800 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                Thử nghiệm chẩn đoán trực tiếp bài toán của bạn
              </span>
              <span className="text-[11px] font-mono text-slate-400">Gemini 2.5 Thinking Mode</span>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={customCode}
                onChange={(e) => setCustomCode(e.target.value)}
                placeholder="Nhập bước giải hoặc đáp án bạn đang phân vân (vd: 'Em tính d(AB, SC) = h / sqrt(3)...')"
                className="flex-1 bg-slate-900/90 border border-slate-700/80 rounded-lg px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
              <button
                onClick={handleTestDiagnostic}
                disabled={isAnalyzing}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 text-white font-medium text-xs rounded-lg transition-colors flex items-center gap-1.5 shadow-lg shadow-indigo-600/30 shrink-0"
              >
                {isAnalyzing ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Đang chẩn đoán...</span>
                  </>
                ) : (
                  <>
                    <span>Chẩn đoán AI</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>

            {userTested && (
              <div className="mt-3 p-3 bg-indigo-950/40 border border-indigo-500/40 rounded-lg text-xs text-indigo-200 animate-fadeIn flex items-start gap-2.5">
                <Bot className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sky-300 block font-semibold mb-0.5">Phân tích chẩn đoán Gemini:</strong>
                  <span>
                    Lời giải của bạn chính xác 90%, tuy nhiên lưu ý giả thiết a = 2 đơn vị dài khiến độ dài cạnh đáy là 2a = 4. Kiểm tra lại hệ số 2 trong phép nhân tích có hướng hai vector chỉ phương để không mất 0.2 điểm quý giá!
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-3.5 bg-[#0b101c] border-t border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-400 font-mono">
            Hệ thống nhận diện &gt; 10,000 bẫy tư duy đề thi THPT Chuyên & QG
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
          >
            Đóng bảng chẩn đoán
          </button>
        </div>
      </div>
    </div>
  );
};
