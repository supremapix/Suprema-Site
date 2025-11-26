import React from 'react';
import { Section } from './ui/Section';
import { MousePointerClick, UploadCloud, Code, Send, Trophy } from 'lucide-react';
import { Step } from '../types';

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
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Como Funciona o Serviço</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Nosso processo foi desenhado para ser o mais ágil e eficiente possível. 
          <span className="font-semibold text-suprema-blue"> 5 Passos Simples</span> para seu sucesso online.
        </p>
      </div>

      <div className="relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
          {steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="group relative bg-white md:bg-transparent p-6 md:p-0 rounded-xl shadow-sm md:shadow-none border md:border-none border-gray-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-suprema-blue text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative">
                  <Icon className="w-8 h-8" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-suprema-accent text-slate-900 rounded-full flex items-center justify-center text-xs font-bold border-2 border-white">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 mb-3 leading-relaxed min-h-[60px]">{step.description}</p>
                <div className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-md">
                  ⏱ {step.timeframe}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};