import { Heading, Text } from '@chakra-ui/react'
import SEO from '@components/seo'
import * as React from 'react'

const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO pageTitle="404: Not found" />
      <Heading>Woops, something went wrong.</Heading>
      <main>
        <Text fontSize="xl" my={5}>
          This page does not exist or is no longer reachable.
        </Text>
      </main>
    </>
  )
}

export default NotFoundPage
