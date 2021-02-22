import { Box, Flex } from '@chakra-ui/react'
import { FeatureToggles } from '@paralleldrive/react-feature-toggles'
import React, { ReactNode } from 'react'
import { SEOContext } from '../../contexts/seoContext'
import { SocialMediaContext } from '../../contexts/socialMediaContext'
import useSEO from '../../hooks/useSeo'
import useSocialMedia from '../../hooks/useSocialMedia'
import Footer from '../footer'
import Header from './../header'
import FeatureFlags from '../../../config/featureFlags'

interface LayoutProps {
  children: ReactNode
}
const features = FeatureFlags

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const seodata = useSEO()
  const socialMediaData = useSocialMedia()
  return (
    <FeatureToggles features={features}>
      <SEOContext.Provider value={seodata}>
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
          <SocialMediaContext.Provider value={socialMediaData}>
            <Footer />
          </SocialMediaContext.Provider>
        </Flex>
      </SEOContext.Provider>
    </FeatureToggles>
  )
}

export default Layout
