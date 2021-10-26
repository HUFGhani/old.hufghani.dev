import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import loadable from '@loadable/component'
import React, { ReactElement } from 'react'

const Layout = loadable(() => import('@components/layout'))

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
