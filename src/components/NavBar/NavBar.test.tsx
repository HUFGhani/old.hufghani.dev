import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { fireEvent, render } from '@testing-library/react'
import * as Gatsby from 'gatsby'
import React from 'react'
import NavBar from '.'

const renderNavBar = () => {
  return render(
    <ChakraProvider>
      <CSSReset />
      <NavBar />
    </ChakraProvider>
  )
}
const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      title: 'Hamza U. F. Ghani',
      description: 'A detailed account of what Hamza U. F. Ghani is about.',
      siteUrl: 'https://hufghani.dev',
      twitterUsername: '@the_ghani',
      authorName: 'Hamza U. F. Ghani',
      siteLanguage: 'en-GB',
      siteLocale: 'en_gb',
      navLinks: {
        menu: [
          {
            name: 'Project',
            url: '/project',
          },
          {
            name: 'About Me',
            url: '/about',
          },
        ],
      },
    },
  },
  allFile: {
    edges: [
      {
        node: {
          publicURL: '/static/51db75c9f2982f1838540680b66abc57/CV.pdf',
        },
      },
    ],
  },
}))

beforeEach(() => {
  jest.clearAllMocks()
})

describe(`<Header/> with feature flag on`, () => {
  it(`should render Header`, () => {
    const { asFragment } = renderNavBar()
    expect(asFragment()).toMatchSnapshot()
  })

  it(`should render correctly and switch the theme from light to dark`, () => {
    const { getByLabelText } = renderNavBar()
    expect(document.querySelector(`body`)).toHaveClass(`chakra-ui-light`)
    fireEvent.click(getByLabelText(`Toggle Theme`))
    expect(document.querySelector(`body`)).toHaveClass(`chakra-ui-dark`)
  })
})
