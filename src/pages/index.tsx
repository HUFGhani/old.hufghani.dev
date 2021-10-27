import { Box, Divider, Flex, Heading, Img, Text } from '@chakra-ui/react'
import SEO from '@components/SEO'
import { useProfilePicture } from '@hooks/useProfilePicture'
import React from 'react'

// markup
const IndexPage: React.FC = () => {
  return (
    <>
      <SEO pageTitle="Home" />
      <main>
        <Box
          paddingTop={[`0.5rem`, `0.5rem`, `5.5rem`, `5.5rem`]}
          paddingBottom={[`0.2rem`, `0.2rem`, `2.5rem`, `2.5rem`]}
        >
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

            <Box>
              <Img
                borderRadius="full"
                boxSize="10rem"
                src={useProfilePicture()}
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
        <Divider orientation="horizontal" />
      </main>
    </>
  )
}

export default IndexPage
