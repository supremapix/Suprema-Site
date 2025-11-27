import React from 'react';
import { Section } from './ui/Section';
import { ScrollReveal } from './ui/ScrollReveal';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Oliveira',
    role: 'Engenharia do Paver',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200',
    content: 'O processo foi incrivelmente rápido. Mandei o material de manhã e no dia seguinte o site já estava no ar. A economia com o desenvolvimento grátis foi essencial para meu negócio.',
    stars: 5
  },
  {
    name: 'Dra. Fernanda Cicarelli',
    role: 'Advogada',
    image: 'https://images.unsplash.com/photo-1573496359-136d9198758d?auto=format&fit=crop&q=80&w=200',
    content: 'Profissionalismo nota 10. O site ficou elegante, responsivo e passa muita credibilidade para meus clientes. O suporte técnico sempre me atende prontamente.',
    stars: 5
  },
  {
    name: 'Marcos Silva',
    role: 'RVM Persianas',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    content: 'Já fechei 3 vendas na primeira semana com o site novo. Estar bem posicionado no Google faz toda a diferença. Recomendo muito a Suprema!',
    stars: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <Section id="depoimentos" bg="gray">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-suprema-blue font-bold tracking-wider uppercase text-sm">O que dizem nossos clientes</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Depoimentos Reais</h2>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((item, i) => (
          <ScrollReveal key={i} delay={i * 150} className="h-full">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 h-full flex flex-col relative border border-gray-100">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-gray-100 fill-current" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(item.stars)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 text-suprema-accent fill-current" />
                ))}
              </div>

              <p className="text-gray-600 italic mb-6 leading-relaxed flex-grow">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
};