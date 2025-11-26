import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Como Funciona', href: '#processo' },
    { name: 'Planos', href: '#planos' },
    { name: 'Vantagens', href: '#vantagens' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-suprema-blue p-2 rounded-lg">
            <Rocket className="text-white w-6 h-6" />
          </div>
          <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>
            SUPREMA<span className="text-suprema-blue">SITES</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-medium text-sm hover:text-suprema-accent transition-colors ${
                isScrolled ? 'text-slate-700' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a 
          href="#planos"
          className="hidden md:block bg-suprema-accent text-slate-900 px-6 py-2 rounded-full font-bold text-sm hover:bg-yellow-300 transition-transform hover:scale-105 shadow-lg"
        >
          Ver Planos
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu className={isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col items-center gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-slate-800 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#planos"
            className="bg-suprema-blue text-white px-8 py-3 rounded-full font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Quero meu Site
          </a>
        </div>
      )}
    </header>
  );
};