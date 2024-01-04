import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Step from './Step';
import Aboutus from './Aboutus';
import Subscribe from './Subscribe';
import Result from './Result';
import Book from './Book';

import 'bootstrap/dist/css/bootstrap.min.css';

// 'root' 엘리먼트를 선택하고, createRoot를 사용하여 렌더링
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/step" element={<Step />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/subscribe" element={<Subscribe />} />
      <Route path="/result" element={<Result />} />
      <Route path="/book" element={<Book />} />
      {/* 여기에 다른 라우트를 정의하세요 */}
    </Routes>
  </Router>
);
