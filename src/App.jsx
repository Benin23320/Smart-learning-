import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/LandingPage/Navbar';
import HeroSection from './components/LandingPage/HeroSection';
import Footer from './components/LandingPage/Footer';
import Register from './components/Auth/Register';
import LoginPage from './components/Auth/LoginPage';
import AboutPage from './components/LandingPage/AboutPage';
import ContactPage from './components/LandingPage/ContactPage';
import Dashboard from './components/Dashboard/Dashboard';
import StaffDashboard from './components/Dashboard/StaffDashboard';

function AppContent() {
  const location = useLocation();

  // Define routes where Navbar and Footer should not be shown
  const hideNavbarFooterRoutes = ['/Dashboard', '/StaffDashboard'];

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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/staffdashboard" element={<StaffDashboard />} />
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