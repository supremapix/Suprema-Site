export interface LocationData {
  slug: string;
  name: string;
  keywords: string[];
}

// Focando em Curitiba baseado no endereço do PDF
export const locations: LocationData[] = [
  { slug: 'batel', name: 'Batel', keywords: ['advocacia', 'clinicas', 'luxo'] },
  { slug: 'agua-verde', name: 'Água Verde', keywords: ['pequenos negócios', 'serviços'] },
  { slug: 'centro', name: 'Centro de Curitiba', keywords: ['comércio', 'lojas'] },
  { slug: 'bigorrilho', name: 'Bigorrilho', keywords: ['consultórios', 'escritórios'] },
  { slug: 'portao', name: 'Portão', keywords: ['indústria', 'comércio local'] },
  { slug: 'santa-felicidade', name: 'Santa Felicidade', keywords: ['restaurantes', 'turismo'] },
  { slug: 'cabral', name: 'Cabral', keywords: ['escritórios', 'arquitetura'] },
  { slug: 'juveve', name: 'Juvevê', keywords: ['gastronomia', 'serviços'] },
  { slug: 'ecoville', name: 'Ecoville', keywords: ['imobiliárias', 'alto padrão'] },
  { slug: 'reboucas', name: 'Rebouças', keywords: ['startups', 'universidades'] },
  { slug: 'cajuru', name: 'Cajuru', keywords: ['oficinas', 'prestadores de serviço'] },
  { slug: 'boqueirao', name: 'Boqueirão', keywords: ['têxtil', 'peças'] },
  { slug: 'pinheirinho', name: 'Pinheirinho', keywords: ['atacado', 'logística'] },
  { slug: 'sitio-cercado', name: 'Sítio Cercado', keywords: ['comércio popular'] },
  { slug: 'cic', name: 'CIC', keywords: ['indústrias', 'fábricas'] }
];