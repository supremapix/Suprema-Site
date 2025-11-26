import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  keywords?: string[];
  image?: string;
  type?: 'website' | 'article';
  location?: string;
}

export const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  canonicalUrl,
  keywords = [],
  image = "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1200&h=630",
  type = 'website',
  location
}) => {
  const siteUrl = 'https://suprema-site.vercel.app';
  const fullUrl = `${siteUrl}${canonicalUrl}`;

  // Schema LocalBusiness Avançado
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Suprema Sites Express",
    "image": image,
    "description": description,
    "url": fullUrl,
    "telephone": "+5541992721004",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Sete de Setembro, 2775 - 9º andar",
      "addressLocality": "Curitiba",
      "addressRegion": "PR",
      "postalCode": "80230-010",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -25.4395, // Coordenadas aproximadas de Curitiba Rebouças
      "longitude": -49.2688
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "R$ 34,90 - R$ 79,90",
    "areaServed": location ? {
      "@type": "Place",
      "name": location
    } : "Brasil"
  };

  return (
    <Helmet>
      {/* Tags Padrão */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={`criação de sites, web design, sites profissionais, ${location ? `criação de sites em ${location},` : ''} ${keywords.join(', ')}`} />
      <link rel="canonical" href={fullUrl} />

      {/* Robots */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Suprema Sites Express" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Dados Estruturados (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrg)}
      </script>
    </Helmet>
  );
};