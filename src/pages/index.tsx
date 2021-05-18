import { Box, Flex, Heading, Img, Spacer, Text } from '@chakra-ui/react'
import loadable from '@loadable/component'
import React from 'react'
import profile from './../images/profile.jpeg'

const SEO = loadable(() => import(`../components/seo`))

const IndexPage: React.FC = () => (
  <>
    <SEO pageTitle="Home" />
    <Flex direction={[`column`, `column`, `row`, `row`]} justify="center" alignItems="center" width="100%">
      <Box width={{ sm: `100%`, md: `60%`, lg: `60%` }}>
        <Heading as="h1" textAlign={[`center`, `center`, `left`, `left`]}>
          Hi Peaple,
        </Heading>
        <Heading as="h1" textAlign={[`center`, `center`, `left`, `left`]} marginBottom="2rem">
          I'm Hamza U. F. Ghani
        </Heading>
      </Box>
      <Spacer marginBottom="xs" />
      <Box>
        <Img
          borderRadius="full"
          htmlHeight="16rem"
          htmlWidth="16rem"
          boxSize="2xs"
          src={profile}
          alt="Hamza Umar farooq Ghani"
          border="solid 1px black"
        />
      </Box>
    </Flex>
    <Box>
      <Text></Text>
    </Box>
    <Box as="div" maxWidth="300px" marginBottom="1.45rem" />
  </>
)

export default IndexPage
