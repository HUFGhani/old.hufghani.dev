import { graphql, useStaticQuery } from 'gatsby'

export const useProfilePicture = () => {
  const { file } = useStaticQuery(
    graphql`
      query PROFILE_PICTUR_QUERY {
        file(relativePath: { eq: "profile.png" }) {
          childImageSharp {
            fluid(maxHeight: 300, maxWidth: 300, toFormat: WEBP) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return file.childImageSharp.fluid
}
