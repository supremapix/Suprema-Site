import React from 'react';
import { Section } from './ui/Section';
import { Smartphone, Mail, Settings, Search, Share2, Headphones } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

const features = [
  {
    icon: Smartphone,
    title: 'Site Responsivo',
    desc: 'Funciona perfeitamente em celulares, tablets e computadores.'
  },
  {
    icon: Mail,
    title: 'E-mail Profissional',
    desc: 'Crie contas de e-mail com o nome do seu domínio (ex: contato@suaempresa.com.br).'
  },
  {
    icon: Settings,
    title: 'Painel Administrativo',
    desc: 'Tenha controle total sobre o conteúdo do seu site.'
  },
  {
    icon: Search,
    title: 'Pronto para o Google (SEO)',
    desc: 'Otimizado para ser encontrado nos mecanismos de busca.'
  },
  {
    icon: Share2,
    title: 'Integração Redes Sociais',
    desc: 'Links e botões para suas plataformas sociais.'
  },
  {
    icon: Headphones,
    title: 'Suporte Técnico',
    desc: 'Equipe dedicada para auxiliar na manutenção e dúvidas.'
  }
];

export const Features: React.FC = () => {
  return (
    <Section id="vantagens" bg="white">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-suprema-blue font-bold tracking-wider uppercase text-sm">Tudo incluso</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Recursos e Benefícios</h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal key={i} delay={i * 100} className="h-full">
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-14 h-14 bg-blue-100 text-suprema-blue rounded-2xl flex items-center justify-center mb-4 transform -rotate-3 hover:rotate-0 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {feature.desc}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
};