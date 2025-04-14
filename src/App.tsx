import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ServicesPage from './pages/ServicesPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/boutique" element={<ShopPage />} />
            <Route path="/services" element={<ServicesPage />} />
            {/* Autres routes à ajouter selon les besoins */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
