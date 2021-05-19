import { Box, Heading } from '@chakra-ui/react'
import loadable from '@loadable/component'
import { FeatureNames, useFeatures } from '@paralleldrive/react-feature-toggles'
import React from 'react'
import { featureIsActive } from '../utils'

const SEO = loadable(() => import(`../components/seo`))
let features: FeatureNames | { name: string; isActive: boolean }[]
const AboutMe: React.FC = () => {
  features = useFeatures()
  return (
    <>
      <SEO pageTitle="About Me" />
      {featureIsActive(features, `aboutMePage`) ? (
        <></>
      ) : (
        <Heading as="h1"> This page is under Construction 🚧 please try again later  </Heading>
      )}
      <Box as="div" maxWidth="300px" marginBottom="1.45rem" />
    </>
  )
}

export default AboutMe
