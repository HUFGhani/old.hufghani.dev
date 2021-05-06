import { Box, Flex } from '@chakra-ui/react'
import loadable from '@loadable/component'
import { FeatureToggles } from '@paralleldrive/react-feature-toggles'
import React, { ReactNode } from 'react'
import FeatureFlags from '../../../config/featureFlags'
import { SEOContext } from '../../contexts/seoContext'
import { SocialMediaContext } from '../../contexts/socialMediaContext'
import useSEO from '../../hooks/useSeo'
import useSocialMedia from '../../hooks/useSocialMedia'
const Header = loadable(() => import(`./../header`))
const Footer = loadable(() => import(`../footer`))

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
        <Flex direction="column" align="center" maxW={{ xl: `1200px` }} m="0 auto" justify="center">
          <Header />
          <Box
            as="main"
            margin="0 auto"
            maxWidth="960px"
            padding="0 1.0875rem 1.45rem"
            alignContent="center"
            wordBreak="break-word"
            width={[`xs`, `lg`, `3xl`, `3xl`]}
          >
            {children}
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
