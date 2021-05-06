import { Box, Heading, Text } from '@chakra-ui/react'
import loadable from '@loadable/component'
import React from 'react'

const SEO = loadable(() => import(`../components/seo`))

const IndexPage: React.FC = () => (
  <>
    <SEO pageTitle="Home" />
    <Heading>Hi people</Heading>
    <Text fontSize="xl" my={5}>
      Welcome to your new Gatsby site.
    </Text>
    <Text fontSize="xl" my={5}>
      Now go build something great.
    </Text>
    <Box as="div" maxWidth="300px" marginBottom="1.45rem" />
  </>
)

export default IndexPage
