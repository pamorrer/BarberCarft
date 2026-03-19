import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookingPage from './pages/BookingPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agendar" element={<BookingPage />} />
    </Routes>
  );
}
