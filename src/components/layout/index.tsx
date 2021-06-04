import { Box, Flex } from '@chakra-ui/react'
import loadable from '@loadable/component'
import { getCurrentActiveFeatureNames } from '@paralleldrive/feature-toggles'
import { FeatureToggles } from '@paralleldrive/react-feature-toggles'
import React, { ReactNode } from 'react'
import initialFeatures from '../../../config/featureFlags'
import TimelineData from '../../../config/timeline'
import { SEOContext } from '../../contexts/seoContext'
import { SocialMediaContext } from '../../contexts/socialMediaContext'
import { TimeLineDataCotext } from '../../contexts/timeLineDataCotext'
import useSEO from '../../hooks/useSeo'
import useSocialMedia from '../../hooks/useSocialMedia'
const Header = loadable(() => import(`./../header`))
const Footer = loadable(() => import(`../footer`))

interface LayoutProps {
  children: ReactNode
}

const url = window.location.href
const req = { query: { url } }
const features = getCurrentActiveFeatureNames({
  initialFeatures,
  req,
})

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const seodata = useSEO()
  const socialMediaData = useSocialMedia()
  return (
    <FeatureToggles features={features}>
      <SEOContext.Provider value={seodata}>
        <TimeLineDataCotext.Provider value={TimelineData}>
          <Flex direction="column" align="center" maxW={{ xl: `1200px` }} m="0 auto" justify="center">
            <Header />
            <Box
              as="main"
              margin="0 auto"
              maxWidth="960px"
              padding="0 1.0875rem 1.45rem"
              alignContent="center"
              textAlign="center"
              wordBreak="break-word"
              width={[`xs`, `lg`, `3xl`, `3xl`]}
            >
              {children}
            </Box>
            <SocialMediaContext.Provider value={socialMediaData}>
              <Footer />
            </SocialMediaContext.Provider>
          </Flex>
        </TimeLineDataCotext.Provider>
      </SEOContext.Provider>
    </FeatureToggles>
  )
}

export default Layout
