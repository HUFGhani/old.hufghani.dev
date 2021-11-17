import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { render } from '@testing-library/react'
import React from 'react'
import ThemeToggle from '.'

const renderThemeToggle = () => {
  return render(
    <ChakraProvider>
      <CSSReset />
      <ThemeToggle />
    </ChakraProvider>
  )
}

describe(`<ThemeToggle/>`, () => {
  it(`should render ThemeToggle`, () => {
    const { asFragment } = renderThemeToggle()
    expect(asFragment()).toMatchSnapshot()
  })
})
