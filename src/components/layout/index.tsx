import { Box, Link } from '@chakra-ui/react'
import { graphql, useStaticQuery } from 'gatsby'
import React, { ReactNode } from 'react'
import { SEOContext } from '../../contexts/seoContext'
import useSEO from '../../hooks/useSeo'
import Header from './../header'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const testdata = useSEO()
  return (
    <SEOContext.Provider value={testdata}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
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
    </SEOContext.Provider>
  )
}

export default Layout
