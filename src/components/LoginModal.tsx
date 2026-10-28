import React, { useState } from 'react';
import { X, Lock, Mail, ArrowRight, ShieldCheck, Sparkles, GraduationCap } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const LoginModal: React.FC<Props> = ({ isOpen, onClose, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
      onSuccess();
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-md bg-[#0e1422] border border-indigo-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand header */}
        <div className="text-center space-y-2">
          <div className="inline-flex w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-400 to-emerald-400 p-[1.5px] shadow-lg shadow-indigo-500/20 mb-1">
            <div className="w-full h-full bg-[#0b0f19] rounded-[10px] flex items-center justify-center font-mono font-bold text-white text-lg">
              1
            </div>
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">
            Đăng Nhập AllForOne
          </h3>
          <p className="text-xs text-slate-400">
            Hệ thống khảo thí thích ứng THPT 2026 (Toán · Lý · Tin)
          </p>
        </div>

        {/* Google Workspace for Education 1-Click Login */}
        <div>
          <button
            onClick={handleSubmit}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 text-slate-200 text-xs font-semibold transition-all flex items-center justify-center gap-2.5 shadow-sm"
          >
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>Đăng nhập bằng Google Workspace for Education</span>
          </button>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="border-t border-slate-800 w-full" />
          <span className="bg-[#0e1422] px-3 text-[11px] font-mono text-slate-500 shrink-0">
            HOẶC TÀI KHOẢN HỌC SINH
          </span>
          <div className="border-t border-slate-800 w-full" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1 text-left">
            <label className="text-[11px] font-mono text-slate-300 block">
              Email / Mã định danh học sinh
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nguyenhoanglong@chuyenams.edu.vn"
                className="w-full bg-slate-900/90 border border-slate-700 rounded-lg pl-9 pr-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="space-y-1 text-left">
            <div className="flex justify-between items-center">
              <label className="text-[11px] font-mono text-slate-300 block">
                Mật khẩu
              </label>
              <a href="#" className="text-[10px] text-cyan-400 hover:underline">
                Quên mật khẩu?
              </a>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-900/90 border border-slate-700 rounded-lg pl-9 pr-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30"
          >
            {isLoading ? (
              <span>Đang xác thực bảo mật...</span>
            ) : (
              <>
                <span>Vào Đấu Trường AllForOne</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Security footnote */}
        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-center gap-1.5 text-[10px] text-slate-500 font-mono">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Bảo mật chuẩn mã hóa SSO giáo dục BGD</span>
        </div>
      </div>
    </div>
  );
};
