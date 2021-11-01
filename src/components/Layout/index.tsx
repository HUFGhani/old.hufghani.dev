import { Flex } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import Footer from '../footer'
import NavBar from '../NavBar'

interface LayoutInterfaceProp {
  children: ReactElement
}
const Layout: React.FC<LayoutInterfaceProp> = ({ children }) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      maxW={{ xl: `1200px` }}
      m="0 auto"
      paddingX={['1rem', '1rem', '6rem', '6rem']}
    >
      <NavBar />
      {children}
      <Footer />
    </Flex>
  )
}

export default Layout
