import React from 'react';
import { Section } from './ui/Section';

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
      <div className="text-center text-white mb-10">
        <h2 className="text-3xl font-bold mb-4">Portfólio de Sucesso</h2>
        <p className="text-blue-100">Confira alguns dos mais de 3.800 sites que entregamos com qualidade.</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-3">
        {clients.map((client, i) => (
          <span 
            key={i} 
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-suprema-blue transition-colors cursor-default"
          >
            {client}
          </span>
        ))}
      </div>
    </Section>
  );
};