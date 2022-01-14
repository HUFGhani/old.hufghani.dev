import { Box, Flex } from '@chakra-ui/react'
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
      paddingX={['1rem', '1rem', '5rem', '5rem']}
    >
      <NavBar />
      <Box
        width={{ sm: `100%`, md: `90%`, lg: `90%` }}
        paddingTop={[`0.5rem`, `0.5rem`, `5rem`, `5rem`]}
        textAlign="center"
      >
        {children}
      </Box>
      <Footer />
    </Flex>
  )
}

export default Layout
