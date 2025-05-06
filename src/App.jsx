import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Register from './components/Register';
import LoginPage from './components/LoginPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Dashboard from './components/Dashboard';

function AppContent() {
  const location = useLocation();

  // Define routes where Navbar and Footer should not be shown
  const hideNavbarFooterRoutes = ['/Dashboard'];

  return (
    <div className="font-sans">
      {/* Navbar */}
      {!hideNavbarFooterRoutes.includes(location.pathname) && <Navbar />}

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Footer />
            </>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>

    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;