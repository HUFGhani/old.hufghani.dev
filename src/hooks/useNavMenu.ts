import { graphql, useStaticQuery } from 'gatsby'

export const useNavMenu = () => {
  const { site } = useStaticQuery(
    graphql`
      query NAV_MENU_QUERY {
        site {
          siteMetadata {
            navLinks {
              menu {
                name
                url
              }
            }
          }
        }
      }
    `
  )
  return site.siteMetadata.navLinks
}
