import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import Layout from '@components/Layout'
import React, { ReactElement } from 'react'

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
