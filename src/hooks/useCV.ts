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

  const pdf = data.allFile.edges.map((file: { node: { publicURL: string } }, index: any) => {
    return file.node.publicURL
  })

  return pdf
}
