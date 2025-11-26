// Este script deve ser executado no Node.js durante o processo de build
// Exemplo: node scripts/generate-sitemap.js

const fs = require('fs');
const path = require('path');

// Dados dos bairros (duplicado aqui pois o script roda fora do contexto do TS)
const locations = [
  'batel', 'agua-verde', 'centro', 'bigorrilho', 'portao', 
  'santa-felicidade', 'cabral', 'juveve', 'ecoville', 
  'reboucas', 'cajuru', 'boqueirao', 'pinheirinho', 
  'sitio-cercado', 'cic'
];

const baseUrl = 'https://suprema-site.vercel.app';

const generateSitemap = () => {
  const date = new Date().toISOString();

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${date}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`;

  locations.forEach(slug => {
    xml += `
  <url>
    <loc>${baseUrl}/criacao-de-sites-${slug}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  xml += `
</urlset>`;

  // Em um ambiente real, isso escreveria na pasta public/dist
  console.log('Sitemap gerado:');
  console.log(xml);
  // fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), xml);
};

generateSitemap();