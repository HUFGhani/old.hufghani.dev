import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import loadable from '@loadable/component'
import { MDXProvider } from '@mdx-js/react'
import React, { ReactNode } from 'react'
import markdownParser from './components/markdownParser'
const Layout = loadable(() => import(`./components/layout`))

interface WrapPageElementProps {
  element: ReactNode
}

export const wrapPageElement: React.FC<WrapPageElementProps> = ({ element }) => {
  return (
    <ChakraProvider>
      <CSSReset />
      <MDXProvider components={markdownParser}>
        <Layout>{element}</Layout>
      </MDXProvider>
    </ChakraProvider>
  )
}
