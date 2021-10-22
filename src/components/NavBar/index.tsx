import { Box, Flex, Stack } from '@chakra-ui/react'
import ThemeToggle from '@components/ThemeToggle'
import { Link } from 'gatsby'
import React from 'react'

const NavBar = () => {
  return (
    <Flex as="nav" align="center" justify="flex-end" wrap="wrap" w="100%" mb="8" p="8" bg="transparent">
      <MenuLinks />
    </Flex>
  )
}

const MenuItem = (props: { [x: string]: any; children: string; to: string }) => {
  const { children, isLast, to, close, ...rest } = props
  return (
    <Box borderRadius="md" padding="2.5" >
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
