import React from 'react';
import { Section } from './ui/Section';
import { MousePointerClick, UploadCloud, Code, Send, Trophy } from 'lucide-react';
import { Step } from '../types';
import { ScrollReveal } from './ui/ScrollReveal';

const steps: Step[] = [
  {
    number: 1,
    title: 'Escolha do Plano',
    description: 'Você escolhe o plano de hospedagem que melhor se adapta às suas necessidades e orçamento.',
    timeframe: 'Imediato'
  },
  {
    number: 2,
    title: 'Envio do Conteúdo',
    description: 'Envie textos, fotos, logo e informações de contato por e-mail ou Google Drive.',
    timeframe: 'A critério do cliente'
  },
  {
    number: 3,
    title: 'Desenvolvimento',
    description: 'Criação iniciada imediatamente após recebimento do material. Criação 100% grátis!',
    timeframe: '0 a 12 horas úteis'
  },
  {
    number: 4,
    title: 'Entrega e Publicação',
    description: 'O site é entregue pronto e publicado no ar após confirmação.',
    timeframe: '15h a 48h'
  },
  {
    number: 5,
    title: 'Prontidão Digital',
    description: 'Seu site pronto para ser encontrado no Google e redes sociais!',
    timeframe: 'Imediato'
  }
];

const icons = [MousePointerClick, UploadCloud, Code, Send, Trophy];

export const Process: React.FC = () => {
  return (
    <Section id="processo" bg="gray">
      <ScrollReveal>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">Como Funciona o Serviço</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Nosso processo foi desenhado para ser o mais ágil e eficiente possível. 
            <span className="font-semibold text-suprema-blue"> 5 Passos Simples</span> para seu sucesso online.
          </p>
        </div>
      </ScrollReveal>

      <div className="relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden lg:block absolute top-[2.5rem] left-0 w-full h-1 bg-gray-200 z-0"></div>
        
        {/* Connecting Line (Mobile/Tablet vertical) */}
        <div className="absolute top-0 bottom-0 left-[2rem] w-1 bg-gray-200 lg:hidden z-0"></div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
          {steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <ScrollReveal key={index} delay={index * 150} className="h-full">
                <div className="group relative flex lg:flex-col items-start lg:items-center text-left lg:text-center pl-20 lg:pl-0 h-full">
                  {/* Icon Wrapper */}
                  <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 w-16 h-16 rounded-full bg-suprema-blue text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-gray-50 z-10">
                    <Icon className="w-7 h-7" />
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-suprema-accent text-slate-900 rounded-full flex items-center justify-center text-xs font-bold border-2 border-white shadow-sm">
                      {step.number}
                    </div>
                  </div>
                  
                  <div className="bg-white lg:bg-transparent p-5 lg:p-0 rounded-xl shadow-sm lg:shadow-none border border-gray-100 lg:border-none w-full lg:mt-24 transition-colors hover:border-suprema-blue/30 h-full flex flex-col lg:items-center">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed lg:min-h-[80px] flex-grow">{step.description}</p>
                    <div className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-md self-start lg:self-center">
                      ⏱ {step.timeframe}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
};