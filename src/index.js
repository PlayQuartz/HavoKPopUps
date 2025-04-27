import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './style.css'

import FrenchPanels from './FrenchPanels';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/FrenchPanels' element={<FrenchPanels />} />
    </Routes>
  </Router>
);

