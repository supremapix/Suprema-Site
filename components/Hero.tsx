import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=2064" 
          alt="Desenvolvedor web trabalhando em código" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-12">
        <div className="text-white space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 bg-suprema-blue/20 border border-suprema-blue/40 px-4 py-1.5 rounded-full text-suprema-accent font-semibold text-xs md:text-sm">
            <span className="animate-pulse w-2 h-2 bg-suprema-accent rounded-full"></span> 
            Oferta Exclusiva
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Seu Site Profissional em <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Tempo Recorde!</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
            Na Suprema Mídia Express, construímos seu site na internet 
            <strong className="text-white"> 100% GRÁTIS</strong>. 
            Você paga apenas a hospedagem. Qualidade, fé e foco nos resultados.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#planos"
              className="flex items-center justify-center gap-2 bg-suprema-blue hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-900/50 hover:shadow-blue-500/50 hover:-translate-y-1"
            >
              Escolher meu Plano
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#contato"
              className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:-translate-y-1"
            >
              Falar com Especialista
            </a>
          </div>

          <div className="pt-4 md:pt-8 flex flex-wrap gap-4 md:gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span>+3.800 Clientes Satisfeitos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span>Entrega em até 48h</span>
            </div>
          </div>
        </div>

        {/* Visual Element */}
        <div className="hidden lg:block relative">
          <div className="relative z-10 bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-2xl shadow-2xl border border-gray-700 transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1000" 
              alt="Design de Interface e Websites" 
              className="rounded-xl shadow-inner w-full h-auto"
            />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -left-10 bg-white text-slate-900 p-5 rounded-xl shadow-2xl border-l-4 border-suprema-accent max-w-[280px]">
              <div className="flex items-center justify-between mb-1">
                <p className="font-bold text-lg">Criação GRÁTIS 🚀</p>
              </div>
              <p className="text-sm text-gray-600 leading-snug">Garantida ao assinar qualquer plano de hospedagem.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};