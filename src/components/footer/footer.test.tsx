import { render } from '@testing-library/react'
import React from 'react'
import Footer from '.'
import { SEOContext } from '../../contexts/seoContext'
import { SocialMediaContext } from '../../contexts/socialMediaContext'
import { SiteMetaData, SocialMediaData } from '../../stub'

function renderFooter() {
  return render(
    <SEOContext.Provider value={SiteMetaData}>
      <SocialMediaContext.Provider value={SocialMediaData}>
        <Footer />
      </SocialMediaContext.Provider>
    </SEOContext.Provider>
  )
}

describe(`<Footer/>`, () => {
  it(`should render Footer`, () => {
    const { asFragment } = renderFooter()
    expect(asFragment()).toMatchSnapshot()
  })
  it(`should render the copyright text correctly`, () => {
    const { getByTestId } = renderFooter()
    expect(getByTestId(`copyRight-year`)).toHaveTextContent(
      `© 2017 - ${new Date().getFullYear()}, Hamza Umar Farooq Ghani`
    )
  })

  it(`should render the copyright text correctly with aria-labal`, () => {
    const { getByLabelText } = renderFooter()
    expect(getByLabelText(`© 2017 - 2021, Hamza Umar Farooq Ghani`)).toHaveTextContent(
      `© 2017 - ${new Date().getFullYear()}, Hamza Umar Farooq Ghani`
    )
  })
})
