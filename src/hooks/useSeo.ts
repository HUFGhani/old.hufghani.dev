import { useStaticQuery, graphql } from 'gatsby'
import SEOInterface from '../interface/seoInterface'

const useSEO = (): SEOInterface => {
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
