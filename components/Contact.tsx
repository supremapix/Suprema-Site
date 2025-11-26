import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Section } from './ui/Section';

export const Contact: React.FC = () => {
  return (
    <footer id="contato" className="bg-slate-900 text-white pt-12 md:pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Contato e Próximos Passos</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Para escolher seu plano e iniciar a criação do seu site em poucas horas, entre em contato com nossa equipe especializada.
            </p>

            <div className="space-y-4 md:space-y-6">
              <a 
                href="https://wa.me/5541992721004" 
                className="flex items-center gap-4 group p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-transparent hover:border-white/10"
              >
                <div className="bg-green-500 p-3 rounded-full text-white group-hover:scale-110 transition-transform shadow-lg shadow-green-900/20">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <p className="text-lg md:text-xl font-bold">(41) 99272-1004</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-transparent">
                <div className="bg-blue-500 p-3 rounded-full text-white mt-1 shadow-lg shadow-blue-900/20">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm text-gray-400">E-mail para Conteúdo e Pix</p>
                  <p className="font-medium break-all text-sm md:text-base">supremapix@gmail.com</p>
                  <p className="text-xs text-gray-500 mt-2 p-2 bg-black/20 rounded font-mono break-all">
                    PIX CNPJ: 15.083.543/0001-97
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-transparent">
                 <div className="bg-gray-600 p-3 rounded-full text-white mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Endereço em Curitiba</p>
                  <p className="text-sm leading-relaxed text-gray-300 mt-1">
                    Av. Sete de Setembro, 2775 - 9º andar<br/>
                    Rebouças, Curitiba - PR, 80230-010
                  </p>
                  <a href="https://maps.google.com" className="text-suprema-accent hover:text-yellow-300 text-sm mt-2 inline-flex items-center gap-1">
                    Ver no Google Maps <span className="text-xs">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-gradient-to-br from-suprema-blue to-blue-900 p-6 md:p-8 rounded-3xl text-center flex flex-col justify-center items-center shadow-2xl border border-blue-400/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">Pronto para começar?</h3>
            <p className="mb-8 opacity-90 relative z-10 text-blue-100">
              Não perca mais tempo. Tenha seu site profissional no ar em tempo recorde e aproveite a oferta de criação 100% grátis.
            </p>
            <a 
              href="https://wa.me/5541992721004" 
              className="bg-white text-suprema-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl w-full max-w-sm hover:scale-105 active:scale-95 relative z-10"
            >
              Falar no WhatsApp Agora
            </a>
            <p className="mt-8 text-sm italic opacity-60 relative z-10">"Com fé em Deus e foco nos resultados!"</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Suprema Sites Express. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};