// src/routes/AppRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
// import other pages when ready, e.g. Games, Login...

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Future routes like: */}
      {/* <Route path="/games" element={<Games />} /> */}
    </Routes>
  );
};

export default AppRoutes;
