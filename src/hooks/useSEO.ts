import { graphql, useStaticQuery } from 'gatsby'

export const useSEO = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
            siteUrl
            twitterUsername
            authorName
            siteLanguage
            siteLocale
          }
        }
      }
    `
  )
  return site.siteMetadata
}
