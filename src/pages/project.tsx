import { Flex, Heading } from '@chakra-ui/react'
import loadable from '@loadable/component'
import React from 'react'

const ProjectTable = loadable(() => import(`../components/projectTable`))
const SEO = loadable(() => import(`../components/seo`))
const GithubContributions = loadable(() => import(`../components/githubContributions`))
const GithubTopLanguages = loadable(() => import(`../components/githubTopLanguages`))

const useLocal = process.env.NODE_ENV !== `production`
const url = useLocal
  ? `http://localhost:4566/restapis/e90pzbj1uv/local/_user_request_/github/repositories`
  : `https://api.hufghani.dev/github/repositories`

const Projects: React.FC = () => {
  return (
    <>
      <SEO pageTitle="Project" />
      <Flex justify="center" pb="8">
        <Heading>Project</Heading>
      </Flex>
      {/* <ProjectTable /> */}
      <GithubTopLanguages />
      <GithubContributions />
    </>
  )
}

export default Projects
