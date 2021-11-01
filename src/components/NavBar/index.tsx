import { Box, Flex, Heading, Stack, useColorMode } from '@chakra-ui/react'
import { Link } from 'gatsby'
import React from 'react'
import '../../css/typography.css'
import { useNavMenu } from '../../hooks/useNavMenu'
import { useSEO } from '../../hooks/useSEO'
import ThemeToggle from '../ThemeToggle'

const NavBar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      direction="column"
      justify={{ base: 'center', sm: 'center', md: 'center', lg: 'center', xl: 'center' }}
      wrap="wrap"
      w="100%"
      pt="8"
      px={['1', '1', '8', '8']}
      bg="transparent"
    >
      <Logo />
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
  const { menu } = useNavMenu()
  const sortMenu = menu.sort((a: { url: string; name: string }, b: { url: string; name: string }) =>
    a.name.localeCompare(b.name)
  )
  return (
    <Stack spacing={8} align="center" justify="center" direction="row" pt="0">
      <MenuItem to="/">Home</MenuItem>
      {sortMenu.map((m: { url: string; name: string }) => (
        <MenuItem key={m.name} to={m.url}>
          {m.name}
        </MenuItem>
      ))}
      <ThemeToggle />
    </Stack>
  )
}

const Logo = () => {
  const { authorName } = useSEO()
  return (
    <Box className="logo">
      <Link to="/">
        <Heading
          as="h1"
          fontFamily="Dr Sugiyama, cursive"
          fontWeight="normal"
          sx={{
            '.logo:hover &': {
              textDecoration: 'underline',
            },
          }}
        >
          {authorName}
        </Heading>
      </Link>
    </Box>
  )
}

export default NavBar
