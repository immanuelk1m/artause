import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Step from './Step'; // Ensure this path is correct
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/step" element={<Step />} />
      {/* Define other routes here */}
    </Routes>
  </Router>,
  document.getElementById('root')
);
