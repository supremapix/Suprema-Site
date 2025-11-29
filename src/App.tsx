import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Process } from './components/Process';
import { Pricing } from './components/Pricing';
import { Features } from './components/Features';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { BackToTop } from './components/ui/BackToTop';
import { LocationPage } from './pages/LocationPage';
import { EnhancedSEO } from './components/seo/EnhancedSEO';
import { AIAssistant } from './components/AIAssistant';

// Componente da Home Page Original
const HomePage = () => (
  <>
    <EnhancedSEO 
      title="Suprema Sites Express | Criação de Sites Profissionais em Tempo Recorde"
      description="Especialistas em criação de sites profissionais em tempo recorde. Tenha seu site no ar em até 48h com desenvolvimento 100% GRÁTIS (pague apenas a hospedagem)."
      canonicalUrl="/"
    />
    <Header />
    <main>
      <Hero />
      <Process />
      <Pricing />
      <Features />
      <Portfolio />
      <Testimonials />
      <AIAssistant />
    </main>
    <Contact />
    <BackToTop />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/criacao-de-sites-:slug" element={<LocationPage />} />
      </Routes>
    </Router>
  );
}

export default App;