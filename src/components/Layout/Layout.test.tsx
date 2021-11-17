import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { render } from '@testing-library/react'
import * as Gatsby from 'gatsby'
import React from 'react'
import Layout from '.'

const renderLayout = () => {
  return render(
    <ChakraProvider>
      <CSSReset />
      <Layout>
        <h1>Test Text</h1>
      </Layout>
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
      ],
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

describe(`<Layout/>`, () => {
  it(`should render Layout`, () => {
    const { asFragment } = renderLayout()
    expect(asFragment()).toMatchSnapshot()
  })
})
