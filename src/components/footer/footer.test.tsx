import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { render } from '@testing-library/react'
import * as Gatsby from 'gatsby'
import React from 'react'
import Footer from '.'

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
      socialMedia: [
        {
          name: 'Github',
          url: 'https://github.com/HUFGhani',
        },
        {
          name: 'Linkedin',
          url: 'https://www.linkedin.com/in/hamza-u-f-ghani/',
        },
        {
          name: 'Twitter',
          url: 'https://twitter.com/the_ghani',
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/the.ghani/',
        },
        {
          name: 'test',
          url: 'https://www.test.com/the.ghani/',
        },
      ],
    },
  },
}))

const renderFooter = () => {
  return render(
    <ChakraProvider>
      <CSSReset />
      <Footer />
    </ChakraProvider>
  )
}

beforeEach(() => {
  jest.clearAllMocks()
})

describe(`<Footer/>`, () => {
  it(`should render Footer`, () => {
    const { asFragment } = renderFooter()
    expect(asFragment()).toMatchSnapshot()
  })
  it(`should render the copyright text correctly`, () => {
    const { getByTestId } = renderFooter()
    expect(getByTestId(`copyRight-year`)).toHaveTextContent(`© 2017 - ${new Date().getFullYear()}, Hamza U. F. Ghani`)
  })

  it(`should render the copyright text correctly with aria-labal`, () => {
    const { getByLabelText } = renderFooter()
    expect(getByLabelText(`© 2017 - ${new Date().getFullYear()}, Hamza U. F. Ghani`)).toHaveTextContent(
      `© 2017 - ${new Date().getFullYear()}, Hamza U. F. Ghani`
    )
  })
})
