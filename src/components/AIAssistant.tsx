import React from 'react';
import { Section } from './ui/Section';
import { ScrollReveal } from './ui/ScrollReveal';

export const AIAssistant: React.FC = () => {
  return (
    <Section id="atendimento" bg="white">
      <ScrollReveal>
        <div className="text-center mb-10">
          <span className="text-suprema-blue font-bold tracking-wider uppercase text-sm">Suporte Inteligente</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">Atendimento 24h com IA</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Tire suas dúvidas instantaneamente sobre nossos planos, processos e prazos com nosso assistente virtual.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-50">
          <chatvolt-chatbox-standard style={{ width: '100%', height: '650px' }} />
        </div>
      </ScrollReveal>
    </Section>
  );
};