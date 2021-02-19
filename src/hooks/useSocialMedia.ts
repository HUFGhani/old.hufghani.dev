import { useStaticQuery, graphql } from 'gatsby'
import SocialMediaInterface from '../interface/socialMediaInterface'

const useSocialMedia = (): SocialMediaInterface => {
  const { site } = useStaticQuery(
    graphql`
      query socialMedia {
        site {
          siteMetadata {
            socialMedia {
              github
              instagram
              twitter
              linkedin
            }
          }
        }
      }
    `
  )
  return site.siteMetadata.socialMedia
}

export default useSocialMedia
