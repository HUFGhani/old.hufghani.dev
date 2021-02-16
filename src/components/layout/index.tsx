import { Box, Flex, Link } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { SEOContext } from '../../contexts/seoContext'
import useSEO from '../../hooks/useSeo'
import Footer from '../footer'
import Header from './../header'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const testdata = useSEO()
  console.log(testdata)
  return (
    <SEOContext.Provider value={testdata}>
      <Header />
      <Flex direction="column" align="center" maxW={{ xl: `1200px` }} m="0 auto">
        <Box
          as="div"
          margin="0 auto"
          maxWidth="960px"
          padding="0 1.0875rem 1.45rem"
          alignContent="center"
          wordBreak="break-all"
        >
          <Box as="main">{children}</Box>
        </Box>
        <Footer />
      </Flex>
    </SEOContext.Provider>
  )
}

export default Layout
