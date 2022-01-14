const path = require('path')

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data } = await graphql(
    `
      {
        posts: allGraphCmsPost(sort: { fields: date, order: ASC }, filter: { stage: { eq: PUBLISHED } }) {
          edges {
            page: node {
              id
              author {
                id
                name
                title
              }
              content {
                markdownNode {
                  childMdx {
                    body
                  }
                }
              }
              excerpt
              seo {
                description
                image {
                  url
                }
                keywords
                title
              }
              slug
              title
            }
          }
        }
      }
    `
  )

  if (data.errors) throw data.errors

  data.posts.edges.forEach(({ page }) => {
    createPage({
      component: path.resolve('./src/templates/blogPostTemplate.tsx'),
      context: {
        id: page.id,
        page,
      },
      path: `/blog/${page.slug}`,
    })
  })
}

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    GraphCMS_Post: {
      formattedDate: {
        type: 'String',
        resolve: source => {
          const date = new Date(source.date)

          return new Intl.DateTimeFormat('en-GB', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }).format(date)
        },
      },
    },
  }

  createResolvers(resolvers)
}
