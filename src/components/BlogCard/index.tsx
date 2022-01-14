import { Flex, Heading, Text } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import { useBlogCard } from '../../hooks/useBlogCard'

const BlogCard: React.FC = () => {
  const {allGraphCmsPost} = useBlogCard()

  return (
    <Flex direction="row" overflow="hidden" overflowX="auto" width="100%" justify="space-evenly">
      {allGraphCmsPost.nodes.map((post: { title: string; excerpt: string; slug: string }) => {
        return (
          <Flex
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
            <GatsbyLink to={`blog/${post.slug}`}>
              <Heading as="h6" fontSize="md" paddingBottom="1">
                {post.title}
              </Heading>
            </GatsbyLink>
            <Text noOfLines={3}>{post.excerpt}</Text>
          </Flex>
        )
      })}
    </Flex>
  )
}

export default BlogCard
