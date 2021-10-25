import { graphql, useStaticQuery } from 'gatsby'

export const useSocialMedia = () => {
  const { site } = useStaticQuery(
    graphql`
      query SOCIAL_MEDIA_QUERY {
        site {
          siteMetadata {
            socialMedia {
              name
              url
            }
          }
        }
      }
    `
  )
  return site.siteMetadata.socialMedia
}
