import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import SEO from '../components/seo'

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
    <Box as="div" maxWidth="300px" marginBottom="1.45rem"></Box>
  </>
)

export default IndexPage
