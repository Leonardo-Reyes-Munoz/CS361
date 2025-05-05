import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router';
import Pets from './Pets.jsx';
import Adopt from './Adopt.jsx';
import Donate from './Donate.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="pets" element={<Pets />} />
        <Route path="adopt" element={<Adopt />} />
        <Route path="donate" element={<Donate />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
