import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import Home from './pages/Home/index.jsx';
import Blog from './pages/Blog/index.jsx';
import Contato from './pages/Contato/index.jsx';
import PacotesViagem from './pages/PacotesViagem/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/viagem" element={<PacotesViagem />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
