import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Menu, X, Flame, Sparkles, User, LogIn, ChevronRight, GraduationCap } from 'lucide-react';

interface Props {
  onOpenLogin: () => void;
  onOpenDiagnostic: () => void;
}

export const Navbar: React.FC<Props> = ({ onOpenLogin, onOpenDiagnostic }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-lg bg-[#0B0F17]/85 border-b border-slate-800/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo Left */}
        <Link 
          to="/"
          className="flex items-center gap-3 select-none group shrink-0"
        >
          {/* Cybernetic "1" cube icon */}
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400 p-[1.5px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all">
            <div className="w-full h-full bg-[#0b0f19] rounded-[7px] flex items-center justify-center">
              <span className="font-mono font-black text-transparent bg-clip-text bg-gradient-to-tr from-cyan-300 via-white to-indigo-300 text-sm">
                1
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-base font-extrabold text-white tracking-tight flex items-center gap-1">
              AllForOne
            </span>
            <span className="text-[10px] font-mono text-slate-400 tracking-wider -mt-0.5">
              Toán · Lý · Tin
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links - Strictly Single Line */}
        <nav className="hidden lg:flex items-center gap-2.5 xl:gap-5 text-xs font-medium text-slate-300 shrink-0">
          <NavLink
            to="/practice"
            className={({ isActive }) =>
              `whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 ${
                isActive ? 'text-cyan-400 font-bold border-b-2 border-cyan-400' : 'hover:text-white'
              }`
            }
          >
            Luyện đề
          </NavLink>

          <NavLink
            to="/theory"
            className={({ isActive }) =>
              `whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 ${
                isActive ? 'text-purple-400 font-bold border-b-2 border-purple-400' : 'hover:text-white'
              }`
            }
          >
            Lý thuyết SGK
          </NavLink>

          <NavLink
            to="/daily"
            className={({ isActive }) =>
              `whitespace-nowrap shrink-0 flex items-center gap-1 font-semibold transition-colors cursor-pointer py-1 ${
                isActive ? 'text-amber-300 font-bold border-b-2 border-amber-400' : 'text-amber-400 hover:text-amber-300'
              }`
            }
          >
            <span>🔥 Daily 10 câu</span>
          </NavLink>

          <NavLink
            to="/path"
            className={({ isActive }) =>
              `whitespace-nowrap shrink-0 flex items-center gap-1 font-semibold transition-colors cursor-pointer py-1 ${
                isActive ? 'text-indigo-300 font-bold border-b-2 border-indigo-400' : 'text-indigo-300 hover:text-white'
              }`
            }
          >
            <span>✨ Lộ trình AI</span>
          </NavLink>

          <NavLink
            to="/contests"
            className={({ isActive }) =>
              `whitespace-nowrap shrink-0 flex items-center gap-1.5 transition-colors cursor-pointer py-1 ${
                isActive ? 'text-white font-bold border-b-2 border-rose-400' : 'hover:text-white'
              }`
            }
          >
            <span>Contest tuần</span>
            <span className="px-1.5 py-0.2 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/40 text-[9px] font-mono font-bold animate-pulse">
              Live
            </span>
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 ${
                isActive ? 'text-cyan-400 font-bold border-b-2 border-cyan-400' : 'hover:text-white'
              }`
            }
          >
            Hồ sơ 3 môn
          </NavLink>

          <NavLink
            to="/teacher"
            className={({ isActive }) =>
              `whitespace-nowrap shrink-0 flex items-center gap-1 font-medium transition-colors cursor-pointer py-1 ${
                isActive ? 'text-emerald-300 font-bold border-b-2 border-emerald-400' : 'text-emerald-400 hover:text-white'
              }`
            }
          >
            <GraduationCap className="w-3.5 h-3.5 shrink-0" />
            <span>Góc giáo viên</span>
          </NavLink>
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-2 xl:gap-3 shrink-0">
          {/* User Elo Status Pill */}
          <Link 
            to="/profile"
            className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono cursor-pointer hover:border-slate-700 transition-colors whitespace-nowrap shrink-0"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-300 font-bold">1420 Elo</span>
            <span className="text-slate-600">|</span>
            <span className="text-amber-400 font-semibold flex items-center gap-0.5">
              <span>🔥 12d streak</span>
            </span>
          </Link>

          {/* Login Button */}
          <button
            onClick={onOpenLogin}
            className="border border-slate-700 hover:border-slate-500 text-slate-200 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all hover:bg-slate-800/60 cursor-pointer"
          >
            Đăng nhập
          </button>

          {/* Primary CTA */}
          <button
            onClick={() => navigate('/daily')}
            className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
          >
            <span>Bắt đầu ngay</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#0b0f19] px-4 py-4 space-y-3 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 text-xs font-medium">
            <Link
              to="/practice"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-left text-slate-200"
            >
              Luyện đề (Oxyz 3D)
            </Link>
            <Link
              to="/daily"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-left text-amber-400 font-semibold"
            >
              🔥 Daily 10 câu
            </Link>
            <Link
              to="/theory"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-left text-purple-300 font-semibold"
            >
              Lý thuyết SGK
            </Link>
            <Link
              to="/path"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-left text-indigo-300 font-semibold"
            >
              ✨ Lộ trình AI
            </Link>
            <Link
              to="/contests"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-left text-rose-300 font-semibold"
            >
              Contest tuần (Live)
            </Link>
            <Link
              to="/profile"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-left text-slate-200"
            >
              Hồ sơ 3 môn
            </Link>
            <Link
              to="/teacher"
              onClick={() => setMobileMenuOpen(false)}
              className="col-span-2 p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-left text-emerald-400 font-semibold flex items-center justify-between"
            >
              <span>Góc giáo viên &amp; Google Workspace</span>
              <GraduationCap className="w-4 h-4" />
            </Link>
          </div>

          <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
            <Link to="/profile" onClick={() => setMobileMenuOpen(false)} className="font-mono text-xs text-cyan-300">
              ● 1420 Elo | 12d streak
            </Link>
            <button
              onClick={() => {
                onOpenLogin();
                setMobileMenuOpen(false);
              }}
              className="px-4 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold cursor-pointer"
            >
              Đăng nhập tài khoản
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
