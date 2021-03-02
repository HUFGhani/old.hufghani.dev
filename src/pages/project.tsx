import { Heading } from '@chakra-ui/react'
import loadable from '@loadable/component'
import React from 'react'
const SEO = loadable(() => import('../components/seo'))

const Projects: React.FC = () => (
  <>
    <SEO pageTitle="Project" />
    <Heading>Project</Heading>
  </>
)

export default Projects
