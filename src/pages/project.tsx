import { Box } from '@chakra-ui/react'
import loadable from '@loadable/component'
import React from 'react'
import Project from '../content/project'

const SEO = loadable(() => import(`../components/seo`))

const Projects: React.FC = () => {
  return (
    <>
      <SEO pageTitle="Project" />
      <Project />
      <Box as="div" maxWidth="300px" marginBottom="1.45rem" />
    </>
  )
}

export default Projects
