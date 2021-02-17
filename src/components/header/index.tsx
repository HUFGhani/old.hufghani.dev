import { Box, Flex, Text } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'

import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'

const MenuItems = (props: { [x: string]: any; children: string; isLast?: boolean; to?: string | undefined }) => {
  const { children, isLast, to = `/`, ...rest } = props
  return (
    <Text mb={{ base: isLast ? 0 : 8, sm: 0 }} mr={{ base: 0, sm: isLast ? 0 : 8 }} display="block" {...rest}>
      <GatsbyLink to={to}>{children}</GatsbyLink>
    </Text>
  )
}

const Header = () => {
  const [show, setShow] = React.useState(false)
  const toggleMenu = () => setShow(!show)

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={[`red`, `green`, `orange`]}
      color={[`blue`, `pink`, `purple`]}
    >
      <Flex align="center">{/* <Logo w="100px" color={['white', 'white', 'primary.500', 'primary.500']} /> */}</Flex>

      <Box data-testid="icons-button" display={{ base: `block`, md: `none` }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>

      <Box display={{ base: show ? `block` : `none`, md: `block` }} flexBasis={{ base: `100%`, md: `auto` }}>
        <Flex
          align={[`center`, `center`, `center`, `center`]}
          justify={[`center`, `space-between`, `flex-end`, `flex-end`]}
          direction={[`column`, `row`, `row`, `row`]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItems to="/">Home</MenuItems>
          <MenuItems to="/">Home</MenuItems>
          <MenuItems to="/" isLast>
            Pricing
          </MenuItems>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Header
