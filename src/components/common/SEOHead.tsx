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
const DEFAULT_OG_IMAGE = `${SITE_URL}/projects/marketplace-dashboard.webp`;

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
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          "name": "TechSonance InfoTech LLP"
        },
        "url": SITE_URL,
        "image": `${SITE_URL}/sajesh_logo_only.webp`,
        "email": "sajesh@techsonance.co.in",
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
          "Java Spring Boot Microservices",
          "Legacy Mainframe COBOL Migration",
          "Agentic AI & Multi-Agent Systems",
          "Customer Value Management (CVM)",
          "High-Concurrency Deals Calculation Engines",
          "Apache Kafka Event Streaming",
          "PostgreSQL",
          "AWS Cloud Architecture",
          "Multi-Tenant SaaS Systems",
          "VodaPay Business Validation"
        ]
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        "name": "TechSonance InfoTech LLP",
        "url": "https://www.techsonance.co.in",
        "logo": `${SITE_URL}/techsonance_logo.webp`,
        "email": "sajesh@techsonance.co.in",
        "founder": {
          "@type": "Person",
          "@id": `${SITE_URL}/#person`,
          "name": "Sajesh Adeya"
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
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />

      {/* AI / Generative Engine Optimization (GEO) */}
      <link rel="alternate" type="text/plain" href={`${SITE_URL}/llms.txt`} title="LLMs.txt" />
      <link rel="alternate" type="text/plain" href="/llms.txt" title="llms.txt" />
      <link rel="help" type="text/plain" href={`${SITE_URL}/llms-full.txt`} title="LLMs Full Context" />
      <link rel="help" type="text/plain" href="/llms-full.txt" title="llms-full.txt" />

      {/* Publication and Content Dates (E-E-A-T) */}
      <meta property="article:published_time" content="2024-01-01T00:00:00+05:30" />
      <meta property="article:modified_time" content="2026-11-26T12:00:00+05:30" />

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
