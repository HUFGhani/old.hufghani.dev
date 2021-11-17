import { Box, Divider, Flex, Heading, SkeletonCircle, Text, useColorMode } from '@chakra-ui/react'
import loadable from '@loadable/component'
import Img from 'gatsby-image'
import React, { useEffect, useState } from 'react'
import { useProfilePicture } from '../hooks/useProfilePicture'

const GithubContributions = loadable(() => import('../components/githubContributions'))
const SEO = loadable(() => import(`../components/SEO`))

const IndexPage: React.FC = () => {
  const { colorMode } = useColorMode()
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(true)
    }, 500)

    return () => clearTimeout(timeout)
  }, [isLoading])

  return (
    <>
      <SEO pageTitle="Home" />
      <main>
        <Box
          paddingTop={[`0.5rem`, `0.5rem`, `5rem`, `5rem`]}
          paddingBottom={[`0.2rem`, `0.2rem`, `2.5rem`, `2.5rem`]}
          textAlign="center"
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
            <SkeletonCircle size="160px" isLoaded={isLoading}>
              <Img
                fluid={useProfilePicture()}
                alt="Hamza Umar farooq Ghani"
                style={{
                  border: 'solid 1px black',
                  borderRadius: '50%',
                }}
              />
            </SkeletonCircle>
          </Flex>
          <Box>
            <Text marginTop="2.5rem" fontSize="lg">
              A{' '}
              <Box
                as="span"
                bgClip="text"
                bgGradient={
                  colorMode === 'light'
                    ? 'linear(gray.800 100%, gray.800 100%, gray.800 100%)'
                    : 'linear(red.100 0%, orange.100 25%, yellow.100 50%)'
                }
              >
                Father
              </Box>
              , Husband, Brother,{' '}
              <Box
                as="span"
                bgClip="text"
                bgGradient={
                  colorMode === 'light'
                    ? 'linear(gray.800 100%, gray.800 100%, gray.800 100%)'
                    : 'linear(red.100 0%, orange.100 25%, yellow.100 50%)'
                }
              >
                Son
              </Box>{' '}
              and Software Engineer from Manchester, United Kingdom
            </Text>
          </Box>
        </Box>
        {/* <Divider orientation="horizontal" marginBottom="2rem" />
        <Flex
          as="section"
          justifyContent="center"
          flexDirection="column"
          alignContent="center"
          width="100%"
          alignItems="center"
        >
          <Heading as="h2" paddingBottom="40px">
            Latest Articles
          </Heading>
        </Flex> */}
        <Divider orientation="horizontal" marginBottom="2rem" />
        <Flex
          as="section"
          justifyContent="center"
          flexDirection="column"
          alignContent="center"
          alignItems="center"
          width="100%"
        >
          <Heading as="h2" paddingBottom="40px">
            Latest Github Activity
          </Heading>
          <GithubContributions />
        </Flex>
      </main>
    </>
  )
}

export default IndexPage
