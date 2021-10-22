import { Box, Flex, Stack, useColorMode } from '@chakra-ui/react'
import ThemeToggle from '@components/themeToggle'
import { Link } from 'gatsby'
import React from 'react'

const NavBar = () => {
  return (
    <Flex as="nav" align="center" justify="flex-end" wrap="wrap" w="100%" p="8" bg="transparent">
      <MenuLinks />
    </Flex>
  )
}

const MenuItem = (props: { [x: string]: any; children: string; to: string }) => {
  const { colorMode } = useColorMode()
  const { children, isLast, to, close, ...rest } = props
  return (
    <Box
      borderRadius="md"
      padding="2.5"
      sx={{
        _hover: {
          backgroundColor:
            colorMode === 'light' ? 'var(--chakra-colors-gray-100)' : 'var(--chakra-colors-whiteAlpha-200)',
        },
      }}
    >
      <Link to={to} {...rest}>
        {children}
      </Link>
    </Box>
  )
}

const MenuLinks = () => {
  return (
    <Stack spacing={8} align="center" justify="flex-end" direction="row" pt="0">
      <MenuItem to="/">Home</MenuItem>
      <MenuItem to="/project">Project</MenuItem>
      <MenuItem to="/about-me">About Me</MenuItem>
      <ThemeToggle />
    </Stack>
  )
}

export default NavBar
