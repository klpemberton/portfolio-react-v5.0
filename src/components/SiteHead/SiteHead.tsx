import Head from 'next/head';

interface SiteHeadProps {
  title?: string;
  description?: string;
  noIndex?: boolean;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

const SITE_URL = 'https://kristinepemberton.com';
const DEFAULT_TITLE = 'Kristine Pemberton - Senior Frontend Engineer';
const DEFAULT_DESCRIPTION =
  'Senior Frontend Engineer with 12 years of experience developing impactful user interfaces. Portfolio showcasing web development projects, skills, and professional experience.';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const SiteHead = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  noIndex = false,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  canonicalUrl,
}: SiteHeadProps) => {
  const fullTitle = title.includes('Kristine Pemberton')
    ? title
    : `${title} | Kristine Pemberton`;
  const url = canonicalUrl || SITE_URL;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {!noIndex && <meta name="robots" content="index, follow" />}

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Kristine Pemberton" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Mobile App Meta Tags */}
      <meta name="apple-mobile-web-app-title" content="Kristine Pemberton" />
      <meta name="application-name" content="Kristine Pemberton" />
      <meta name="msapplication-config" content="/static/browserconfig.xml" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Additional SEO */}
      <meta name="author" content="Kristine Pemberton" />
      <meta name="theme-color" content="#000000" />
    </Head>
  );
};

export default SiteHead;
