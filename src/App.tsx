/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { PracticePage } from './pages/PracticePage';
import { DailyPage } from './pages/DailyPage';
import { ProfilePage } from './pages/ProfilePage';
import { TeacherPage } from './pages/TeacherPage';
import { TheoryPage } from './pages/TheoryPage';
import { ContestsPage } from './pages/ContestsPage';
import { AiPathPage } from './pages/AiPathPage';
import { GeminiDebuggerModal } from './components/GeminiDebuggerModal';
import { LoginModal } from './components/LoginModal';

// Helper component to scroll to top on page navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0B0F17] text-[#dfe2f1] flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
        {/* Sticky Header with React Router Navigation */}
        <Navbar
          onOpenLogin={() => setIsLoginOpen(true)}
          onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
        />

        {/* Dedicated Web Page Routing */}
        <main className="flex-1">
          <Routes>
            {/* 1. Trang Chủ / Landing Page */}
            <Route 
              path="/" 
              element={<HomePage onOpenDiagnostic={() => setIsDiagnosticOpen(true)} />} 
            />

            {/* 2. Trang Riêng: Luyện Đề Chuẩn LeetCode (3D Oxyz & Debugger) */}
            <Route 
              path="/practice" 
              element={<PracticePage />} 
            />

            {/* 3. Trang Riêng: Daily Challenge (10 Câu Phân Loại) */}
            <Route 
              path="/daily" 
              element={<DailyPage />} 
            />

            {/* 4. Trang Riêng: Lý Thuyết SGK & Vector SVG Sắc Nét */}
            <Route 
              path="/theory" 
              element={<TheoryPage />} 
            />

            {/* 5. Trang Riêng: Lộ Trình Cá Nhân Hóa AI */}
            <Route 
              path="/path" 
              element={<AiPathPage onOpenDiagnostic={() => setIsDiagnosticOpen(true)} />} 
            />

            {/* 6. Trang Riêng: Contest Tuần Quốc Gia (Live) */}
            <Route 
              path="/contests" 
              element={<ContestsPage />} 
            />

            {/* 7. Trang Riêng: Hồ Sơ Năng Lực 3 Môn (Elo & Radar) */}
            <Route 
              path="/profile" 
              element={<ProfilePage />} 
            />

            {/* 8. Trang Riêng: Cổng Khảo Thí & Google Classroom Sư Phạm */}
            <Route 
              path="/teacher" 
              element={<TeacherPage />} 
            />

            {/* Fallback to Home */}
            <Route 
              path="*" 
              element={<HomePage onOpenDiagnostic={() => setIsDiagnosticOpen(true)} />} 
            />
          </Routes>
        </main>

        {/* Global Technical Footer */}
        <Footer />

        {/* Interactive AI Diagnostic Modal */}
        <GeminiDebuggerModal
          isOpen={isDiagnosticOpen}
          onClose={() => setIsDiagnosticOpen(false)}
        />

        {/* Google Workspace & Student Login Modal */}
        <LoginModal
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
          onSuccess={() => {
            // Success handler
          }}
        />
      </div>
    </BrowserRouter>
  );
}
