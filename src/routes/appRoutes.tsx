// src/routes/AppRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import CasinoRedirect from './RedirectUrl';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/main/:casinoName" element={<CasinoRedirect />} />
    
    </Routes>
  );
};

export default AppRoutes;
