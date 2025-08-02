import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import VideoPage from './components/VideoPage';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/video" element={<VideoPage />} />
          <Route path="/" element={
            <>
              <Header onOpenModal={openModal} />
              <Hero onOpenModal={openModal} />
              <Benefits />
              <HowItWorks />
              <Testimonials />
              <FAQ />
              <Footer onOpenModal={openModal} />
              <ContactModal isOpen={isModalOpen} onClose={closeModal} />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;