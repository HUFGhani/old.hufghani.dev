import { graphql, useStaticQuery } from 'gatsby'

export const useCV = () => {
  const data = useStaticQuery(
    graphql`
      query CV_PDF_QUERY {
        allFile(filter: { extension: { eq: "pdf" } }) {
          edges {
            node {
              publicURL
            }
          }
        }
      }
    `
  )

  return data.allFile.edges.map((file: { node: { publicURL: string } }) => {
    return file.node.publicURL
  })
}
