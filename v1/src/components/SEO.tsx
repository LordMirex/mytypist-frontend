
import { Helmet } from "react-helmet-async";

// Usage: <SEO title="TITLE" description="DESC" />
const SEO = ({
  title = "MyTypist — Digital Typing, Documents, eSignatures",
  description = "Generate and manage documents online. E-signature platform for teams and businesses.",
  image = "",
  url = "",
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {image && <meta property="og:image" content={image} />}
    {url && <meta property="og:url" content={url} />}
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {image && <meta name="twitter:image" content={image} />}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: title,
        description,
        url: url || undefined
      })}
    </script>
  </Helmet>
);

export default SEO;
