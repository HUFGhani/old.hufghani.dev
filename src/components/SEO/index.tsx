import { useSEO } from '@hooks/useSEO'
import loadable from '@loadable/component'
import React from 'react'

const PageSEO = loadable(() => import('react-seo-component'))

interface SEOInterfaceProp {
  pageTitle: string
}

const SEO: React.FC<SEOInterfaceProp> = ({ pageTitle }) => {
  const { title, description, siteUrl, twitterUsername, authorName, siteLanguage, siteLocale } = useSEO()
  return (
    <PageSEO
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
