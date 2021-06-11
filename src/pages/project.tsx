import { Box } from '@chakra-ui/react'
import loadable from '@loadable/component'
import React from 'react'

const SEO = loadable(() => import(`../components/seo`))
const Project = loadable(() => import(`../content/pages/project`))

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
