import { render, waitFor } from '@testing-library/react'
import * as Gatsby from 'gatsby'
import React from 'react'
import SEO from '.'

const siteTitle = `Hello World`

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
    },
  },
}))

beforeEach(() => {
  jest.clearAllMocks()
})

const renderSEO = () => {
  return render(<SEO pageTitle={siteTitle} />)
}

describe(`<SEO/>`, () => {
  it(`should render siteTitle`, async () => {
    renderSEO()
    await waitFor(() => {
      expect(document.querySelector(`meta`)).toBeInTheDocument()
    })
    expect(document.querySelectorAll(`meta`)).toMatchSnapshot()
  })
})
