import { Box, Flex, Heading, Img, Spacer, Text } from '@chakra-ui/react'
import loadable from '@loadable/component'
import React from 'react'
import profile from './../images/profile.jpeg'

const SEO = loadable(() => import(`../components/seo`))

const IndexPage: React.FC = () => (
  <>
    <SEO pageTitle="Home" />
    <Box paddingTop={[`0.5rem`, `0.5rem`, `5.5rem`, `5.5rem`]} paddingBottom={[`0.5rem`, `0.5rem`, `5.5rem`, `5.5rem`]}>
      <Flex direction={[`column`, `column`, `row`, `row`]} justify="center" alignItems="center" width="100%">
        <Box width={{ sm: `100%`, md: `60%`, lg: `60%` }}>
          <Heading as="h1" textAlign={[`center`, `center`, `left`, `left`]} marginTop="2rem">
            Hi Peaple,
          </Heading>
          <Heading
            as="h1"
            textAlign={[`center`, `center`, `left`, `left`]}
            marginBottom={[`2.5rem`, `2.5rem`, `2rem`, `2rem`]}
          >
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
        <Text marginTop="2.5rem" fontSize="lg">
          A Father, Husband, Brother, Son and Software Engineer from Manchester, United Kingdom
        </Text>
      </Box>
    </Box>
    <Box as="div" maxWidth="300px" marginBottom="1.45rem" />
  </>
)

export default IndexPage
