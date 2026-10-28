import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeroSection } from '../components/HeroSection';
import { CoreFeatures } from '../components/CoreFeatures';
import { ComparisonTable } from '../components/ComparisonTable';
import { GoogleWorkspaceSection } from '../components/GoogleWorkspaceSection';
import { PlatformShowcase } from '../components/PlatformShowcase';
import { ArrowRight, Code2, Flame, UserCheck, GraduationCap, Sparkles } from 'lucide-react';

interface Props {
  onOpenDiagnostic: () => void;
}

export const HomePage: React.FC<Props> = ({ onOpenDiagnostic }) => {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      {/* 1. Hero Section */}
      <HeroSection
        onStartDaily={() => navigate('/daily')}
        onStartDiagnostic={onOpenDiagnostic}
        onSelectSubject={() => navigate('/practice')}
      />

      {/* Feature Quick Launch Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 mb-10">
        <div className="p-4 rounded-2xl bg-[#0d1322] border border-slate-800 shadow-xl">
          <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
              <Sparkles className="w-3.5 h-3.5" /> TRUY CẬP TRỰC TIẾP TỪNG CHỨC NĂNG RIÊNG BIỆT (DEDICATED PAGES)
            </span>
            <span className="text-slate-500 hidden sm:inline">Chuẩn hóa SPA Router</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
            <button
              onClick={() => navigate('/practice')}
              className="p-3 rounded-xl bg-[#111827] border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900 transition-all text-left flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-xs text-white block group-hover:text-indigo-300 transition-colors">Trang Luyện Đề</strong>
                  <span className="text-[10px] text-slate-400 font-mono">/practice</span>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
            </button>

            <button
              onClick={() => navigate('/daily')}
              className="p-3 rounded-xl bg-[#111827] border border-slate-800 hover:border-amber-500/50 hover:bg-slate-900 transition-all text-left flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-xs text-white block group-hover:text-amber-300 transition-colors">Daily 10 Câu</strong>
                  <span className="text-[10px] text-slate-400 font-mono">/daily</span>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
            </button>

            <button
              onClick={() => navigate('/profile')}
              className="p-3 rounded-xl bg-[#111827] border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all text-left flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-xs text-white block group-hover:text-cyan-300 transition-colors">Hồ Sơ 3 Môn</strong>
                  <span className="text-[10px] text-slate-400 font-mono">/profile</span>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
            </button>

            <button
              onClick={() => navigate('/teacher')}
              className="p-3 rounded-xl bg-[#111827] border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900 transition-all text-left flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-xs text-white block group-hover:text-emerald-300 transition-colors">Góc Giáo Viên</strong>
                  <span className="text-[10px] text-slate-400 font-mono">/teacher</span>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Interactive Live Platform Showcase (HUD Engine) */}
      <section id="platform-showcase" className="py-8 md:py-14 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-mono text-cyan-400 block mb-1">
                TRẢI NGHIỆM GIAO DIỆN NGUYÊN BẢN
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Đấu Trường Học Thuật Trực Tuyến AllForOne
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Chuyển đổi giữa 4 phân hệ chính hoặc bấm vào các nút trang riêng để mở không gian làm việc toàn màn hình.
            </p>
          </div>

          <PlatformShowcase
            initialTab="workspace"
            onOpenDiagnostic={onOpenDiagnostic}
          />
        </div>
      </section>

      {/* 3. Core Features Bento Grid */}
      <CoreFeatures
        onOpenDiagnostic={onOpenDiagnostic}
        onExplorePractice={() => navigate('/practice')}
      />

      {/* 4. Comparison: Traditional vs AllForOne */}
      <ComparisonTable />

      {/* 5. Google Workspace for Education Section */}
      <GoogleWorkspaceSection
        onOpenTeacherPortal={() => navigate('/teacher')}
      />
    </div>
  );
};
