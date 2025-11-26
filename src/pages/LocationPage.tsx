import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { locations } from '../data/locations';
import { EnhancedSEO } from '../components/seo/EnhancedSEO';
import { Section } from '../components/ui/Section';
import { Header } from '../components/Header';
import { Contact } from '../components/Contact';
import { CheckCircle, ArrowRight, MapPin } from 'lucide-react';

export const LocationPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = locations.find(l => l.slug === slug);

  if (!location) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Página não encontrada</h1>
        <Link to="/" className="text-suprema-blue hover:underline">Voltar para Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <EnhancedSEO 
        title={`Criação de Sites em ${location.name} | Suprema Sites Express`}
        description={`Procurando Criação de Sites no bairro ${location.name}? Tenha seu site profissional em 48h com criação 100% Grátis. Atendemos empresas do ${location.name} e região.`}
        canonicalUrl={`/criacao-de-sites-${location.slug}`}
        keywords={location.keywords}
        location={location.name}
      />

      <main className="pt-20">
        <Section bg="dark" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-suprema-blue/10 z-0"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-suprema-accent/20 text-suprema-accent px-3 py-1 rounded-full text-sm font-bold mb-6">
                <MapPin className="w-4 h-4" />
                Atendimento Exclusivo em {location.name}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                Criação de Sites Profissionais no <span className="text-suprema-accent">{location.name}</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Empresas do bairro <strong>{location.name}</strong> agora contam com a Suprema Sites Express para colocar seus negócios na internet em tempo recorde. 
                Site profissional, rápido e otimizado para o Google.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/#planos" className="bg-suprema-blue hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-center transition-all">
                  Ver Planos
                </a>
                <a href="/#contato" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-center transition-all backdrop-blur-sm">
                  Falar no WhatsApp
                </a>
              </div>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md">
              <h3 className="text-white font-bold text-xl mb-6">Por que escolher a Suprema no {location.name}?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="w-6 h-6 text-suprema-success flex-shrink-0" />
                  <span>Conhecemos o mercado local de {location.name}</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="w-6 h-6 text-suprema-success flex-shrink-0" />
                  <span>Criação 100% GRÁTIS (pague só a hospedagem)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="w-6 h-6 text-suprema-success flex-shrink-0" />
                  <span>Entrega expressa em até 48 horas</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="w-6 h-6 text-suprema-success flex-shrink-0" />
                  <span>Suporte técnico humanizado</span>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        <Section>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Destaque sua empresa em {location.name}</h2>
            <p className="text-gray-600">
              Não importa se você tem uma loja, escritório ou presta serviços em {location.name}. 
              Ter um site profissional é fundamental para ser encontrado por clientes da região.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all">
              <h3 className="font-bold text-xl mb-2 text-suprema-blue">Visibilidade Local</h3>
              <p className="text-sm text-gray-600">Otimizamos seu site para aparecer quando pessoas buscam por serviços em {location.name}.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all">
              <h3 className="font-bold text-xl mb-2 text-suprema-blue">Design Profissional</h3>
              <p className="text-sm text-gray-600">Um visual moderno que transmite confiança para seus clientes do bairro.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all">
              <h3 className="font-bold text-xl mb-2 text-suprema-blue">Velocidade</h3>
              <p className="text-sm text-gray-600">Seu site no ar em até 48 horas para você não perder vendas.</p>
            </div>
          </div>

          <div className="mt-16 text-center">
             <Link to="/" className="inline-flex items-center gap-2 text-suprema-blue font-bold hover:underline">
               Voltar para a página inicial <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
        </Section>
      </main>

      <Contact />
    </div>
  );
};