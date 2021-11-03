import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, keyframes, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const ThemeToggle: React.FC = () => {
  const { toggleColorMode: toggleMode } = useColorMode()
  const ToggleIcon = useColorModeValue(SunIcon, MoonIcon)
  const spin = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg)}
`
  const spinAnimation = `${spin} infinite 2s linear`

  return (
    <IconButton
      icon={
        <ToggleIcon
          sx={{
            _hover: {
              animation: spinAnimation,
            },
          }}
        />
      }
      variant="ghost"
      aria-label="Toggle Theme"
      onClick={toggleMode}
      size={`md`}
      mx="0"
    />
  )
}

export default ThemeToggle
