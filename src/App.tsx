import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BannerSlider } from './components/BannerSlider';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Approach } from './components/Approach';
import { ClientValue } from './components/ClientValue';
import { Experience } from './components/Experience';
import { PersonalBranding } from './components/PersonalBranding';
import { RiskCalculator } from './components/RiskCalculator';
import { ContactSection } from './components/ContactSection';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-100 font-sans selection:bg-[#38bdf8]/30 selection:text-[#38bdf8]">
      
      {/* Navigation Bar */}
      <Navbar onOpenConsultation={() => setBookingModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="pt-16">
        <BannerSlider onOpenConsultation={() => setBookingModalOpen(true)} />
        <Hero onOpenConsultation={() => setBookingModalOpen(true)} />
        <About />
        <Skills />
        <Approach />
        <ClientValue />
        <Experience />
        <PersonalBranding />
        <RiskCalculator />
        <ContactSection onOpenConsultation={() => setBookingModalOpen(true)} />
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer />

      {/* Consultation Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />

    </div>
  );
}
