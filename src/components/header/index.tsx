import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useFeatures } from '@paralleldrive/react-feature-toggles'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import { featureIsActive } from '../../utils'
import ThemeToggle from '../theme-toggle'

const MenuItems = (props: { [x: string]: any; children: string; isLast?: boolean; to?: string | undefined }) => {
  const { children, isLast, to = `/`, ...rest } = props
  return (
    <Text mb={{ base: isLast ? 0 : 8 }} mr={{ base: 0 }} display="block" {...rest}>
      <GatsbyLink to={to}>{children}</GatsbyLink>
    </Text>
  )
}

const Header = () => {
  const [show, setShow] = React.useState(false)
  const toggleMenu = () => setShow(!show)
  const features = useFeatures()

  return (
    <>
      {featureIsActive(features, `headerNavBar`) ? (
        <DrawerNavMenu />
      ) : (
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
          <Flex align="center">
            {/* <Logo w="100px" color={['white', 'white', 'primary.500', 'primary.500']} /> */}
          </Flex>

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
      )}
    </>
  )
}

const DrawerNavMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleClick = () => {
    onOpen()
  }
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" width="100%" mb={8} p={8} bg={[`transparent`]}>
      <Flex align="center">{/* <Logo w="100px" color={['white', 'white', 'primary.500', 'primary.500']} /> */}</Flex>
      <IconButton
        icon={<HamburgerIcon w={6} h={6} />}
        variant="ghost"
        aria-label="Hamburger Menu"
        onClick={() => handleClick()}
        size={'lg'}
      />
      <Drawer onClose={onClose} isOpen={isOpen} size={`xs`}>
        <DrawerOverlay>
          <DrawerContent>
            <Flex justify="space-between" wrap="wrap" width="100%" mb={8} p={8} flex-wrap="wrap">
              <ThemeToggle />
              <IconButton icon={<CloseIcon />} variant="ghost" aria-label="Close" onClick={onClose} size={'lg'} />
            </Flex>
            <DrawerBody>
              <Flex align={`center`} justify={`center`} direction={`column`} pt={4} textAlign={'justify'}>
                <MenuItems to="/">Home</MenuItems>
                <MenuItems to="/project" isLast>
                  Project
                </MenuItems>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Flex>
  )
}

export default Header
