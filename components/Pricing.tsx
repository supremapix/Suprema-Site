import React from 'react';
import { Section } from './ui/Section';
import { Check, Star, AlertCircle } from 'lucide-react';
import { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    id: '6m',
    name: '6 Meses',
    duration: 'Semestral',
    monthlyPrice: 79.90,
    totalPrice: 479.40,
    installments: 'Não Parcelável',
    features: ['Somente à vista via Pix'],
    tagline: 'Opção Básica'
  },
  {
    id: '12m',
    name: '12 Meses',
    duration: 'Anual',
    monthlyPrice: 72.90,
    totalPrice: 874.80,
    installments: '12x R$ 72,90',
    features: ['Bom para começar'],
    tagline: 'Entrada'
  },
  {
    id: '24m',
    name: '24 Meses',
    duration: 'Bienal',
    monthlyPrice: 56.90,
    totalPrice: 1365.60,
    installments: '12x R$ 113,80',
    features: ['Melhor custo-benefício a médio prazo'],
    tagline: 'Médio Prazo'
  },
  {
    id: '36m',
    name: '36 Meses',
    duration: 'Trienal',
    monthlyPrice: 35.90,
    totalPrice: 1292.40,
    installments: '12x R$ 107,70',
    highlight: true,
    features: ['Valor Promocional', 'Mais Vantajoso'],
    tagline: 'Recomendado'
  },
  {
    id: '60m',
    name: '48 Meses + 1 ano Grátis',
    duration: '5 Anos',
    monthlyPrice: 34.90,
    totalPrice: 1675.20,
    installments: '12x R$ 139,60',
    features: ['Maior Economia', '1 Ano de Bônus'],
    savings: 'Melhor Preço',
    tagline: 'Máxima Economia'
  }
];

export const Pricing: React.FC = () => {
  return (
    <Section id="planos" bg="dark">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Planos de Hospedagem</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Todos os planos incluem a <strong className="text-suprema-accent">Criação do Site GRÁTIS</strong>, site responsivo, e-mail profissional e painel administrativo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {plans.map((plan) => (
          <div 
            key={plan.id}
            className={`relative flex flex-col rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${
              plan.highlight 
                ? 'bg-white border-4 border-suprema-accent shadow-[0_0_30px_rgba(251,191,36,0.3)] scale-105 z-10' 
                : 'bg-slate-800 border border-slate-700 text-white hover:border-slate-500'
            }`}
          >
            {plan.highlight && (
              <div className="bg-suprema-accent text-slate-900 text-center py-1 font-bold text-sm uppercase tracking-wide">
                Mais Vendido
              </div>
            )}
            {plan.savings && (
               <div className="bg-green-500 text-white text-center py-1 font-bold text-sm uppercase tracking-wide">
               {plan.savings}
             </div>
            )}
            
            <div className="p-6 flex-grow flex flex-col">
              <h3 className={`text-lg font-bold mb-2 ${plan.highlight ? 'text-slate-800' : 'text-gray-200'}`}>
                {plan.name}
              </h3>
              
              <div className="mb-4">
                <span className={`text-3xl font-extrabold ${plan.highlight ? 'text-suprema-blue' : 'text-white'}`}>
                  R$ {plan.monthlyPrice.toFixed(2).replace('.', ',')}
                </span>
                <span className={`text-sm ${plan.highlight ? 'text-gray-500' : 'text-gray-400'}`}>/mês</span>
              </div>

              <div className={`text-sm mb-6 pb-6 border-b ${plan.highlight ? 'border-gray-200 text-gray-600' : 'border-gray-700 text-gray-400'}`}>
                <p className="mb-1">Total: <strong>R$ {plan.totalPrice.toFixed(2).replace('.', ',')}</strong></p>
                <p>{plan.installments}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 ${plan.highlight ? 'text-green-600' : 'text-green-400'}`} />
                    <span className={plan.highlight ? 'text-slate-700' : 'text-gray-300'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={`https://wa.me/5541992721004?text=Olá, quero contratar o plano de ${plan.name}`}
                target="_blank"
                rel="noreferrer"
                className={`w-full py-3 rounded-xl font-bold text-center transition-colors ${
                  plan.highlight 
                    ? 'bg-suprema-blue text-white hover:bg-blue-700' 
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}
              >
                Escolher {plan.duration}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-slate-800/50 p-6 rounded-xl border border-slate-700 flex items-start gap-4 max-w-3xl mx-auto">
        <AlertCircle className="w-6 h-6 text-yellow-500 flex-shrink-0" />
        <p className="text-gray-300 text-sm">
          <strong>Observação sobre o Domínio:</strong> O domínio personalizado (.com.br, .com, etc.) tem um custo de R$ 40/ano (aproximadamente) e é pago à parte diretamente ao registro nacional (Registro.br) ou internacional.
        </p>
      </div>
    </Section>
  );
};