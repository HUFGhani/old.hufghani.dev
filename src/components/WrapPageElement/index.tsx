import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'
import React, { ReactElement } from 'react'
import Layout from '../Layout'
import MarkdownParser from '../MarkdownParser'

interface WrapPageElementProps {
  element: ReactElement
}

const WrapPageElement: React.FC<WrapPageElementProps> = ({ element }) => {
  return (
    <ChakraProvider>
      <CSSReset />
      <Layout>
        <MDXProvider components={MarkdownParser}>{element}</MDXProvider>
      </Layout>
    </ChakraProvider>
  )
}

export default WrapPageElement
