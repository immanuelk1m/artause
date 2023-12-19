import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Step from './Step'; // 경로가 정확한지 확인하세요
import 'bootstrap/dist/css/bootstrap.min.css';

// 'root' 엘리먼트를 선택하고, createRoot를 사용하여 렌더링
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/step" element={<Step />} />
      {/* 여기에 다른 라우트를 정의하세요 */}
    </Routes>
  </Router>
);
