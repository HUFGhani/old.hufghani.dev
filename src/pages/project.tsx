import { Box } from '@chakra-ui/react'
import loadable from '@loadable/component'
import React from 'react'
import Portfolio from '../content/portfolio'

const SEO = loadable(() => import(`../components/seo`))

const Projects: React.FC = () => {
  return (
    <>
      <SEO pageTitle="Project" />
      <Portfolio />
      <Box as="div" maxWidth="300px" marginBottom="1.45rem" />
    </>
  )
}

export default Projects
