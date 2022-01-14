import { graphql, useStaticQuery } from 'gatsby'

export const useBlogCard = () => {
  return useStaticQuery(
    graphql`
      query BLOG_CARD_QUERY {
        allGraphCmsPost(limit: 3, sort: { fields: publishedAt, order: DESC }) {
          nodes {
            slug
            title
            excerpt
            publishedAt
          }
        }
      }
    `
  )
}
