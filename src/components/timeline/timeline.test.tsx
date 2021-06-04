import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import Timeline from '.'
import { SEOContext } from '../../contexts/seoContext'
import { SocialMediaContext } from '../../contexts/socialMediaContext'
import { TimeLineDataCotext } from '../../contexts/timeLineDataCotext'
import { SiteMetaData, SocialMediaData, TimelineData } from '../../stub'
import Header from '../header'

function renderTimeLine() {
  return render(
    <ChakraProvider>
      <CSSReset />
      <SEOContext.Provider value={SiteMetaData}>
        <SocialMediaContext.Provider value={SocialMediaData}>
          <TimeLineDataCotext.Provider value={TimelineData}>
            <Header />
            <Timeline />
          </TimeLineDataCotext.Provider>
        </SocialMediaContext.Provider>
      </SEOContext.Provider>
    </ChakraProvider>
  )
}

describe(`<Timeline/>`, () => {
  it(`should render Footer`, () => {
    const { asFragment } = renderTimeLine()
    expect(asFragment()).toMatchSnapshot()
  })
  it(`should render correctly and switch the theme from light to dark`, () => {
    const { getByLabelText } = renderTimeLine()
    expect(document.querySelector(`body`)).toHaveClass(`chakra-ui-light`)
    fireEvent.click(getByLabelText(`Hamburger Menu`))
    fireEvent.click(getByLabelText(`Toggle Theme`))
    expect(document.querySelector(`body`)).toHaveClass(`chakra-ui-dark`)
  })
})
