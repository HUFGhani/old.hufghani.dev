import { Heading } from '@chakra-ui/react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import SEO from '../components/SEO'

const BlogPostTemplate = ({ pageContext: { page } }) => {
  return (
    <>
      <SEO pageTitle={page.title} />
      <Heading as="h1" textAlign="center" paddingBottom="8">
        {page.title}
      </Heading>
      <main>
        <MDXRenderer>{page.content.markdownNode.childMdx.body}</MDXRenderer>
      </main>
    </>
  )
}
export const pageQuery = graphql`
  fragment AssetFields on GraphCMS_Asset {
    id
    localFile {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default BlogPostTemplate
