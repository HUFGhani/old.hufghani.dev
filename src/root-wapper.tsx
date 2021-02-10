import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import Layout from './components/layout'

interface WrapPageElementProps {
  element: ReactNode
}

export const wrapPageElement: React.FC<WrapPageElementProps> = ({ element }) => {
  return (
    <ChakraProvider>
      <CSSReset />
      <Layout>{element}</Layout>
    </ChakraProvider>
  )
}
