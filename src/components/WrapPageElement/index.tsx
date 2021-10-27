import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import Layout from '../Layout'

interface WrapPageElementProps {
  element: ReactElement
}

const WrapPageElement: React.FC<WrapPageElementProps> = ({ element }) => {
  return (
    <ChakraProvider>
      <CSSReset />
      <Layout>{element}</Layout>
    </ChakraProvider>
  )
}

export default WrapPageElement
