import { render, waitFor } from '@testing-library/react'
import React from 'react'
import SEO from '.'
import { SEOContext } from '../../contexts/seoContext'
import { SiteMetaData } from '../../stub'

const siteTitle = 'Hello World'

function renderSEO() {
  return render(
    <SEOContext.Provider value={SiteMetaData}>
      <SEO pageTitle={siteTitle} />
    </SEOContext.Provider>
  )
}

describe('<SEO/>', () => {
  it('should render siteTitle', async () => {
    renderSEO()
    await waitFor(() => {
      expect(document.querySelector('meta')).toBeInTheDocument()
    })
    expect(document.querySelectorAll('meta')).toMatchSnapshot()
  })
})
