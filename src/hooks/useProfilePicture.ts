import { graphql, useStaticQuery } from 'gatsby'

export const useProfilePicture = () => {
  const { file } = useStaticQuery(
    graphql`query PROFILE_PICTUR_QUERY {
  file(relativePath: {eq: "profile.png"}) {
    childImageSharp {
      gatsbyImageData(height: 300, width: 300, formats: WEBP, layout: CONSTRAINED)
    }
  }
}
`
  )
  return file.childImageSharp.gatsbyImageData;
}
