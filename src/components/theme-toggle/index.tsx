import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const ThemeToggle: React.FC = () => {
  const { toggleColorMode: toggleMode } = useColorMode()
  const ToggleIcon = useColorModeValue(SunIcon, MoonIcon)

  return <IconButton icon={<ToggleIcon />} variant="ghost" aria-label="Toggle Theme" onClick={toggleMode} size={`lg`} />
}

export default ThemeToggle
