import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import loadable from '@loadable/component'
import React, { ReactNode } from 'react'
const Layout = loadable(() => import(`./components/layout`))

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
