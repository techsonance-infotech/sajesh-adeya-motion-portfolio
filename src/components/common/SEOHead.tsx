import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  schemaData?: object | object[];
}

const DEFAULT_TITLE = "Sajesh Adeya | Co-Founder & CTO at TechSonance InfoTech LLP | Senior Full-Stack Developer";
const DEFAULT_DESCRIPTION = "Sajesh Adeya is the Co-Founder & CTO of TechSonance InfoTech LLP and a Senior Full-Stack Developer specializing in React, Next.js, Node.js, Java, and AWS Cloud Architecture. Building high-performance enterprise SaaS, e-commerce, and logistics platforms.";
const DEFAULT_KEYWORDS = "Sajesh Adeya, TechSonance InfoTech LLP, Co-Founder, CTO, Senior Full-Stack Developer, React Developer Surat, Next.js Developer India, Node.js Architect, Enterprise SaaS Developer, Multi-Tenant E-Commerce, FreightFlow, AccuNest, SyncServe POS";
const SITE_URL = "https://sajesh.techsonance.co.in";
const DEFAULT_OG_IMAGE = `${SITE_URL}/projects/marketplace-dashboard.png`;

export function SEOHead({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  canonicalUrl = SITE_URL,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  schemaData,
}: SEOHeadProps) {
  const fullCanonicalUrl = canonicalUrl.startsWith('http') ? canonicalUrl : `${SITE_URL}${canonicalUrl}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`;

  const defaultSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        "name": "Sajesh Adeya",
        "jobTitle": "Co-Founder & Chief Technology Officer (CTO)",
        "worksFor": {
          "@id": `${SITE_URL}/#organization`
        },
        "url": SITE_URL,
        "image": `${SITE_URL}/sajesh_logo_only.png`,
        "email": "sajeshkumar@techsonanceinfotech.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Surat",
          "addressRegion": "Gujarat",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://www.linkedin.com/in/sajeshkumar-adeya-418809148",
          "https://github.com/techsonance-infotech",
          "https://x.com/sajeshadeya"
        ],
        "knowsAbout": [
          "Full-Stack Engineering",
          "Software Architecture",
          "React.js",
          "Next.js",
          "Node.js",
          "Java Spring Boot",
          "PostgreSQL",
          "AWS Cloud Architecture",
          "Multi-Tenant SaaS Systems"
        ]
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        "name": "TechSonance InfoTech LLP",
        "url": "https://marketplace.techsonance.co.in",
        "logo": `${SITE_URL}/techsonance_logo.png`,
        "email": "connect.techsonance@gmail.com",
        "founder": {
          "@id": `${SITE_URL}/#person`
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Surat",
          "addressRegion": "Gujarat",
          "addressCountry": "IN"
        }
      }
    ]
  };

  const finalSchema = schemaData ? (Array.isArray(schemaData) ? schemaData : [schemaData]) : [defaultSchema];

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Sajesh Adeya" />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Crawl Directives */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* GEO & Local Geographic Optimization */}
      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content="Surat" />
      <meta name="geo.position" content="21.1418;72.7709" />
      <meta name="ICBM" content="21.1418, 72.7709" />

      {/* Favicon & Web Manifest Suite */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#1155CC" />

      {/* OpenGraph Tags */}
      <meta property="og:site_name" content="Sajesh Adeya | TechSonance InfoTech LLP" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_IN" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:creator" content="@sajeshadeya" />

      {/* Dynamic JSON-LD Schema Graphs */}
      {finalSchema.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
}
