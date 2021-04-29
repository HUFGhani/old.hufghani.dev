import { Flex, Heading } from '@chakra-ui/react'
import loadable from '@loadable/component'
import React from 'react'
import Portfolio from '../content/portfolio'

const ProjectTable = loadable(() => import(`../components/projectTable`))
const SEO = loadable(() => import(`../components/seo`))

const Projects: React.FC = () => {
  return (
    <>
      <SEO pageTitle="Project" />
      <Flex justify="center" pb="8">
        <Heading>Project</Heading>
      </Flex>
      {/* <ProjectTable /> */}
      <Portfolio />
    </>
  )
}

export default Projects
