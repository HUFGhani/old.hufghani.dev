import { Flex } from '@chakra-ui/layout'
import Footer from '@components/footer'
import NavBar from '@components/navBar'
import React, { ReactElement } from 'react'

interface LayoutInterfaceProp {
  children: ReactElement
}
const Layout: React.FC<LayoutInterfaceProp> = ({ children }) => {
  return (
    <Flex direction="column" align="center" justify="center" maxW={{ xl: `1200px` }} m="0 auto" paddingX="6rem">
      <NavBar />
      {children}
      <Footer />
    </Flex>
  )
}

export default Layout
