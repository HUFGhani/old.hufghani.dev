import { graphql, Link } from 'gatsby'
import React from 'react'
import BlogCard from '../components/BlogCard'

const BlogList = ({ data, pageContext }: { data: any }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/' : currentPage - 1
  const nextPage = (currentPage + 1).toString()

  console.log(numPages)
  return (
    <>
      <BlogCard allGraphCmsPost={data.allGraphCmsPost} pagelocation={'blog'} />
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          listStyle: 'none',
          padding: 0,
        }}
      >
        {!isFirst && (
          <Link to={prevPage.toString()} rel="prev">
            ← Previous Page
          </Link>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <li
            key={`pagination-number${i + 1}`}
            style={{
              margin: 0,
            }}
          >
            <Link
              to={`/blog/${i === 0 ? '' : i + 1}`}
              style={{
                textDecoration: 'none',
                color: i + 1 === currentPage ? '#ffffff' : '',
                background: i + 1 === currentPage ? '#007acc' : '',
              }}
            >
              {i + 1}
            </Link>
          </li>
        ))}
        {isLast && (
          <Link to={`/blog/${nextPage}`} rel="next">
            Next Page →
          </Link>
        )}
      </ul>
    </>
  )
}

export const pageQuery = graphql`
  query BLOG_LIST_QUERY($skip: Int!, $limit: Int!) {
    allGraphCmsPost(limit: $limit, skip: $skip, sort: { fields: publishedAt, order: DESC }) {
      nodes {
        slug
        title
        excerpt
        publishedAt
      }
    }
  }
`

export default BlogList
