import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2 z-50">
          <div className="bg-suprema-blue p-2 rounded-lg shadow-lg">
            <Rocket className="text-white w-5 h-5 md:w-6 md:h-6" />
          </div>
          <span className={`font-bold text-xl tracking-tight transition-colors ${
            isScrolled || isMobileMenuOpen ? 'text-slate-900' : 'text-white'
          }`}>
            SUPREMA<span className="text-suprema-blue">SITES</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
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
          <a 
            href="#planos"
            className="bg-suprema-accent text-slate-900 px-6 py-2.5 rounded-full font-bold text-sm hover:bg-yellow-300 transition-all hover:scale-105 shadow-lg"
          >
            Ver Planos
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? (
            <X className="text-slate-900 w-7 h-7" />
          ) : (
            <Menu className={`w-7 h-7 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 md:hidden transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-slate-800 font-bold text-2xl hover:text-suprema-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="w-16 h-1 bg-gray-200 rounded-full my-4"></div>
          <a 
            href="#planos"
            className="bg-suprema-blue text-white w-full max-w-xs py-4 rounded-xl font-bold text-center text-lg shadow-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Quero meu Site
          </a>
        </div>
      </div>
    </header>
  );
};