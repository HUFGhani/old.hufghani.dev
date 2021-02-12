import { useStaticQuery, graphql } from 'gatsby'

interface SEO {
  data: {
    site: {
      siteMetadata: {
        author: string
        url: string
        twitter: string
        titleAlt: string
        siteUrl: string
        siteLanguage: string
        shortName: string
        pathPrefix: string
        description: string
      }
    }
  }
}

const useSEO = (): SEO => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author
            url
            twitter
            titleAlt
            siteUrl
            siteLanguage
            shortName
            pathPrefix
            description
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSEO
