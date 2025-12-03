import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
}

export const SEO = ({ title, description = "Cel-shaded stealth/noir. Join the heist and uncover the Codex.", image }: SEOProps) => {
  const { pathname } = useLocation();
  const canonical = typeof window !== 'undefined' ? window.location.origin + pathname : pathname;
  const ogImage = image || `${import.meta.env.BASE_URL}lovable-uploads/c6f1235e-1b72-4cd2-a601-3a82de575024.png`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};