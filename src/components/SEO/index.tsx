import { useSEO } from '@hooks/useSEO'
import React from 'react'
import * as PageSEO from 'react-seo-component'

interface SEOInterfaceProp {
  pageTitle: string
}

const SEO: React.FC<SEOInterfaceProp> = ({ pageTitle }) => {
  const { title, description, siteUrl, twitterUsername, authorName, siteLanguage, siteLocale } = useSEO()
  return (
    <PageSEO.default
      title={pageTitle}
      titleTemplate={title}
      description={description}
      //   image={ogImageUrl(authorName, 'scottspence.com', `Scott's Digital Garden`)}
      pathname={siteUrl}
      siteLanguage={siteLanguage}
      siteLocale={siteLocale}
      twitterUsername={twitterUsername}
      author={authorName}
    />
  )
}

export default SEO
