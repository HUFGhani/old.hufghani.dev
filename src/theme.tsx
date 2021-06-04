import { extendTheme } from '@chakra-ui/react'

const Customtheme = {
  styles: {
    global: {
      'html, body': {
        height: `100vh`,
      },
      body: {
        margin: `0`,
      },
    },
  },
}

const theme = extendTheme({ ...Customtheme })

export default theme
