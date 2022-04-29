import { Flex, Heading, Text } from '@chakra-ui/react'
import GatsbyLink from 'gatsby-link'
import React from 'react'

interface Node {
  slug: string
  title: string
  excerpt: string
  publishedAt: Date
}

interface AllGraphCmsPost {
  nodes: Node[]
}

interface BlogCardDataInterface {
  allGraphCmsPost: AllGraphCmsPost
  pagelocation: string
}

const BlogCard: React.FC<BlogCardDataInterface> = ({ allGraphCmsPost, pagelocation }) => {
  return (
    <Flex direction="row" overflow="hidden" overflowX="auto" width="100%" justify="space-evenly">
      {allGraphCmsPost.nodes.map((post: { title: string; excerpt: string; slug: string }, key: any) => {
        return (
          <Flex
            key={key}
            direction="column"
            maxW="md"
            borderWidth="1px"
            borderRadius="lg"
            marginBottom="8"
            width="280px"
            wordBreak="break-word"
            textAlign="center"
            alignContent="center"
            justifyContent="space-between"
            alignItems="center"
            paddingX="2"
            paddingY="2"
          >
            {pagelocation === 'blog' ? (
              <>
                <GatsbyLink to={`${post.slug}`}>
                  <Heading as="h3" fontSize="md" paddingBottom="1">
                    {post.title}
                  </Heading>
                </GatsbyLink>
                <Text noOfLines={3}>{post.excerpt}</Text>
              </>
            ) : (
              <>
                <GatsbyLink to={`blog/${post.slug}`}>
                  <Heading as="h3" fontSize="md" paddingBottom="1">
                    {post.title}
                  </Heading>
                </GatsbyLink>
                <Text noOfLines={3}>{post.excerpt}</Text>
              </>
            )}
          </Flex>
        )
      })}
    </Flex>
  )
}

export default BlogCard
