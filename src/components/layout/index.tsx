import { Box, Flex, Link } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { SEOContext } from '../../contexts/seoContext'
import useSEO from '../../hooks/useSeo'
import Header from './../header'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const testdata = useSEO()
  return (
    <SEOContext.Provider value={testdata}>
      <Header />
      <Flex direction="column" align="center" maxW={{ xl: `1200px` }} m="0 auto">
        <Box as="div" margin="0 auto" maxWidth="960px" padding="0 1.0875rem 1.45rem">
          <Box as="main">{children}</Box>
          <Box as="footer" marginTop="2rem" fontSize="xl">
            © {new Date().getFullYear()}, Built with
            {` `}
            <Link isExternal textDecor="underline" color="purple.500" href="https://www.gatsbyjs.com">
              Gatsby
            </Link>
          </Box>
        </Box>
      </Flex>
    </SEOContext.Provider>
  )
}

export default Layout
