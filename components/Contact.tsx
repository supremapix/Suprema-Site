import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Section } from './ui/Section';

export const Contact: React.FC = () => {
  return (
    <footer id="contato" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Contato e Próximos Passos</h2>
            <p className="text-gray-400 mb-8">
              Para escolher seu plano e iniciar a criação do seu site em poucas horas, entre em contato.
            </p>

            <div className="space-y-6">
              <a 
                href="https://wa.me/5541992721004" 
                className="flex items-center gap-4 group p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="bg-green-500 p-3 rounded-full text-white group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <p className="text-lg font-bold">(41) 99272-1004</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5">
                <div className="bg-blue-500 p-3 rounded-full text-white mt-1">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">E-mail para Conteúdo e Pix</p>
                  <p className="font-medium break-all">supremapix@gmail.com</p>
                  <p className="text-xs text-gray-500 mt-1">PIX CNPJ: 15.083.543/0001-97 - OSKAFI WEB SITES LTDA ME</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5">
                 <div className="bg-gray-600 p-3 rounded-full text-white mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Endereço em Curitiba</p>
                  <p className="text-sm leading-relaxed">
                    Av. Sete de Setembro, 2775 - 9º andar ou Piso G6<br/>
                    Acesso pelo elevador azul ou vermelho<br/>
                    Rebouças, Curitiba - PR, 80230-010
                  </p>
                  <a href="https://maps.google.com" className="text-suprema-accent hover:underline text-sm mt-1 inline-block">Ver no Google Maps</a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-gradient-to-br from-suprema-blue to-blue-800 p-8 rounded-3xl text-center flex flex-col justify-center items-center shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Pronto para começar?</h3>
            <p className="mb-8 opacity-90">
              Não perca mais tempo. Tenha seu site profissional no ar em tempo recorde e aproveite a oferta de criação 100% grátis.
            </p>
            <a 
              href="https://wa.me/5541992721004" 
              className="bg-white text-suprema-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg w-full max-w-xs"
            >
              Falar no WhatsApp Agora
            </a>
            <p className="mt-6 text-sm italic opacity-75">"Com fé em Deus e foco nos resultados!"</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Suprema Sites Express. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};