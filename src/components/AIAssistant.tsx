import React, { useEffect } from 'react';
import { Section } from './ui/Section';
import { ScrollReveal } from './ui/ScrollReveal';

export const AIAssistant: React.FC = () => {
  useEffect(() => {
    // Dynamically load the ChatVolt script after the component mounts
    // This ensures the <chatvolt-chatbox-standard> element exists in the DOM
    const script = document.createElement('script');
    script.type = 'module';
    script.textContent = `
      import Chatbox from 'https://cdn.jsdelivr.net/npm/@chatvolt/embeds@latest/dist/chatbox/index.js';
      Chatbox.initStandard({
        agentId: 'cmikny8ch002ikfbpylfatiwl',
      });
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
          {
            // @ts-ignore
            <chatvolt-chatbox-standard style={{ width: '100%', height: '650px' }} />
          }
        </div>
      </ScrollReveal>
    </Section>
  );
};