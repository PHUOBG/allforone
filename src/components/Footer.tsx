import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-[#080c14] text-slate-400 text-xs">
      {/* Brand & Highlight Slogan Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-b border-slate-800/60">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400 p-[1.5px]">
              <div className="w-full h-full bg-[#0b0f19] rounded-[7px] flex items-center justify-center font-mono font-bold text-white text-xs">
                1
              </div>
            </div>
            <div>
              <span className="text-base font-bold text-white block">
                AllForOne — Học đúng trọng tâm, tiến bộ từng ngày
              </span>
              <p className="text-xs text-slate-400 mt-0.5">
                Elo theo chuyên đề · AI giải thích lỗi sai · Contest hàng tuần
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <Link to="/practice" className="px-3 py-1 rounded-lg bg-indigo-950/40 border border-indigo-800/40 text-[11px] font-mono text-indigo-300 hover:border-indigo-500/50 transition-colors">
              TOÁN · VIÊN MÃN
            </Link>
            <Link to="/practice" className="px-3 py-1 rounded-lg bg-cyan-950/40 border border-cyan-800/40 text-[11px] font-mono text-cyan-300 hover:border-cyan-500/50 transition-colors">
              VẬT LÝ · TRỰC QUAN
            </Link>
            <Link to="/practice" className="px-3 py-1 rounded-lg bg-purple-950/40 border border-purple-800/40 text-[11px] font-mono text-purple-300 hover:border-purple-500/50 transition-colors">
              TIN HỌC · THUẬT TOÁN
            </Link>
          </div>
        </div>
      </div>

      {/* 4 Column Directory Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Col 1 */}
          <div className="space-y-3">
            <h4 className="font-mono text-white text-xs font-bold uppercase tracking-wider">
              Phân Môn
            </h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li><Link to="/theory" className="hover:text-cyan-300 transition-colors">Giải tích &amp; Hình học không gian</Link></li>
              <li><Link to="/theory" className="hover:text-cyan-300 transition-colors">Dao động &amp; Cơ học lượng tử</Link></li>
              <li><Link to="/theory" className="hover:text-cyan-300 transition-colors">Cấu trúc dữ liệu &amp; Giải thuật</Link></li>
              <li><Link to="/practice" className="hover:text-cyan-300 transition-colors">Kho bài tập chuẩn hóa LeetCode</Link></li>
              <li><Link to="/daily" className="hover:text-cyan-300 transition-colors">Daily Quiz 10 Câu</Link></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <h4 className="font-mono text-white text-xs font-bold uppercase tracking-wider">
              Đấu Trường
            </h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li><Link to="/contests" className="hover:text-indigo-300 transition-colors">Contest tuần Quốc gia</Link></li>
              <li><Link to="/profile" className="hover:text-indigo-300 transition-colors">Bảng xếp hạng Elo cá nhân</Link></li>
              <li><Link to="/profile" className="hover:text-indigo-300 transition-colors">Radar đánh giá năng lực AI</Link></li>
              <li><Link to="/teacher" className="hover:text-indigo-300 transition-colors">Cổng kết nối Sư phạm</Link></li>
              <li><Link to="/daily" className="hover:text-indigo-300 transition-colors">Thách đấu 1vs1 Daily Room</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <h4 className="font-mono text-white text-xs font-bold uppercase tracking-wider">
              Hệ Sinh Thái
            </h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li><Link to="/teacher" className="hover:text-emerald-300 transition-colors">Google Classroom Integration</Link></li>
              <li><Link to="/teacher" className="hover:text-emerald-300 transition-colors">Google Sheets API Export</Link></li>
              <li><Link to="/theory" className="hover:text-emerald-300 transition-colors">Thư viện SGK GDPT 2018</Link></li>
              <li><Link to="/path" className="hover:text-emerald-300 transition-colors">Lộ trình AI cá nhân hóa</Link></li>
              <li><Link to="/teacher" className="hover:text-emerald-300 transition-colors">Tài liệu API Khảo thí</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-3">
            <h4 className="font-mono text-white text-xs font-bold uppercase tracking-wider">
              Vận Hành &amp; Pháp Lý
            </h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li><a href="#" className="hover:text-purple-300 transition-colors">Quy chế thi đấu Elo</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Chính sách bảo mật dữ liệu BGD</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Điều khoản dịch vụ</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Liên hệ ban quản trị</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Trung tâm trợ giúp 24/7</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Technical HUD Bar */}
      <div className="border-t border-slate-800/80 bg-[#060910] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-500">
          <div>
            © 2026 AllForOne Inc. Hệ thống Đào tạo &amp; Khảo thí Trực tuyến Liên môn Toán - Lý - Tin.
          </div>

          <div className="flex items-center gap-4 text-[10px]">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              ONLINE TELEMETRY ACTIVE
            </span>
            <span className="text-slate-400">SERVER: VN-HN-01</span>
            <span className="text-cyan-400">LATENCY: 14ms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
