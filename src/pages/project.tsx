import { Heading } from '@chakra-ui/react'
import loadable from '@loadable/component'
import React from 'react'

const SEO = loadable(() => import(`../components/SEO`))

const Project: React.FC = () => {
  return (
    <>
      <SEO pageTitle="Project" />
      <Heading>This page is under construction 🚧</Heading>
      <main></main>
    </>
  )
}

export default Project
