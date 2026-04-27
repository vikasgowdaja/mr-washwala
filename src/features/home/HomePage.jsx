import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import WaterCartonTransition from '../../shared/components/WaterCartonTransition';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function HomePage() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTransition, setShowTransition] = useState(false);

  const navigateToWashwala = () => setShowTransition(true);
  const handleTransitionComplete = useCallback(() => navigate('/washwala/'), [navigate]);

  return (
    <div className="min-h-screen bg-[#05020d] text-white font-sans">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} onNavigateToWashwala={navigateToWashwala} />
      <HeroSection onNavigateToWashwala={navigateToWashwala} />
      <StatsSection />
      <AboutSection />
      <ServicesSection onNavigateToWashwala={navigateToWashwala} />
      <ProcessSection />
      <ReviewsSection />
      <ContactSection />
      <Footer onNavigateToWashwala={navigateToWashwala} />
      <WaterCartonTransition isActive={showTransition} onComplete={handleTransitionComplete} />
    </div>
  );
}
