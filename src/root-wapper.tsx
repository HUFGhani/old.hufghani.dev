import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import loadable from '@loadable/component'
import { MDXProvider } from '@mdx-js/react'
import React, { ReactNode } from 'react'
import MarkdownParser from './components/markdownParser'
import theme from './theme'
const Layout = loadable(() => import(`./components/layout`))

interface WrapPageElementProps {
  element: ReactNode
}

export const wrapPageElement: React.FC<WrapPageElementProps> = ({ element }) => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <MDXProvider components={MarkdownParser}>
        <Layout>{element}</Layout>
      </MDXProvider>
    </ChakraProvider>
  )
}
