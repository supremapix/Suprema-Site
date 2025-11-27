import React from 'react';
import { Section } from './ui/Section';
import { ScrollReveal } from './ui/ScrollReveal';

const clients = [
  "Barbeiro Curitiba", "Gouveia Curitiba", "Engenharia do Paver", "Mundo dos Calheiros", 
  "Atuários", "RVM Persianas App", "Serviços Hidráulicos ADP", "Cicarelli Advogados", 
  "RVM Persianas Blumenau", "Burger Films", "Pousada Vila D’Itália", "Omega Revestimentos SC", 
  "Euro Calhas", "Encanador Palladium 24h", "Encanadores 24h", "Desentope ADP", 
  "Assistência Byltech", "Byltech", "Jetron", "Fotometal", "Moraes Acrílicos"
];

export const Portfolio: React.FC = () => {
  return (
    <Section id="portfolio" bg="blue">
      <ScrollReveal>
        <div className="text-center text-white mb-10">
          <h2 className="text-3xl font-bold mb-4">Portfólio de Sucesso</h2>
          <p className="text-blue-100">Confira alguns dos mais de 3.800 sites que entregamos com qualidade.</p>
        </div>
      </ScrollReveal>
      
      <div className="flex flex-wrap justify-center gap-3">
        {clients.map((client, i) => (
          <ScrollReveal key={i} delay={i * 20}>
            <span 
              className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-medium cursor-default transition-all duration-300 ease-out hover:bg-white hover:text-suprema-blue hover:scale-110 hover:shadow-lg"
            >
              {client}
            </span>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
};