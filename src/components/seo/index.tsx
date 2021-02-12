import React from 'react'
import { Helmet } from 'react-helmet'
import { useSEOContext } from '../../contexts/seoContext'

interface SEOProps {
  siteTitle: string
}

const SEO: React.FC<SEOProps> = ({ siteTitle }) => {
  const data = useSEOContext()
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{siteTitle}</title>
      <html lang={data.siteLanguage} />
      <meta name="description" content={data.description} />
      <meta name="apple-mobile-web-app-title" content={data.shortName} />
      <meta name="application-name" content={data.shortName} />
      <meta name="author" content="Hamza Umar Farooq Ghani"></meta>

      <meta property="og:url" content={data.url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={data.description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={data.twitter} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={data.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    </Helmet>
  )
}

export default SEO
