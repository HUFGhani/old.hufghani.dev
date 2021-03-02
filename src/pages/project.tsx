import { Flex, Heading } from '@chakra-ui/react'
import loadable from '@loadable/component'
import React from 'react'
const ProjectTable = loadable(() => import(`../components/projectTable`))
const SEO = loadable(() => import(`../components/seo`))

const Projects: React.FC = () => (
  <>
    <SEO pageTitle="Project" />
    <Flex justify="center" pb="8">
      <Heading>Project</Heading>
    </Flex>

    <ProjectTable />
  </>
)

export default Projects
