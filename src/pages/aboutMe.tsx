import { Heading } from '@chakra-ui/react'
import loadable from '@loadable/component'
import React from 'react'

const SEO = loadable(() => import(`../components/SEO`))

const AboutMe: React.FC = () => {
  return (
    <>
      <SEO pageTitle="About Me" />
      <Heading>This page is under construction 🚧</Heading>
      <main></main>
    </>
  )
}

export default AboutMe
