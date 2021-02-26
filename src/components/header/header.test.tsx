import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { FeatureNames, FeatureToggles } from '@paralleldrive/react-feature-toggles'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import Header from '.'
import { SEOContext } from '../../contexts/seoContext'
import { SiteMetaData } from '../../stub'

function renderHeader(features: { name: string; isActive: boolean }[] | FeatureNames) {
  return render(
    <ChakraProvider>
      <CSSReset />
      <FeatureToggles features={features}>
        <SEOContext.Provider value={SiteMetaData}>
          <Header />
        </SEOContext.Provider>
      </FeatureToggles>
    </ChakraProvider>
  )
}

describe(`<Header/> with feature flag off`, () => {
  const featureOff = [{ name: `headerNavBar`, isActive: false }]
  it(`should render Header`, () => {
    const { asFragment } = renderHeader(featureOff)
    expect(asFragment()).toMatchSnapshot()
  })
})

describe(`<Header/> with feature flag on`, () => {
  const featureOn = [{ name: `headerNavBar`, isActive: true }]
  it(`should render Header`, () => {
    const { asFragment } = renderHeader(featureOn)
    expect(asFragment()).toMatchSnapshot()
  })

  it(`should render the drawer menu when the hambuger menu is press`, () => {
    const { getByLabelText, getByText } = renderHeader(featureOn)
    fireEvent.click(getByLabelText('Hamburger Menu'))
    expect(getByText('Home')).toBeTruthy()
  })

  it(`should render correctly and switch the theme from light to dark`, () => {
    const { getByLabelText } = renderHeader(featureOn)
    expect(document.querySelector('body')).toHaveClass('chakra-ui-light')
    fireEvent.click(getByLabelText('Hamburger Menu'))
    fireEvent.click(getByLabelText('Toggle Theme'))
    expect(document.querySelector('body')).toHaveClass('chakra-ui-dark')
  })
})
