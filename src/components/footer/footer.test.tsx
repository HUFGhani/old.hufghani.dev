import { render } from '@testing-library/react'
import React from 'react'
import Footer from '.'
import { SEOContext } from '../../contexts/seoContext'

const testdata = {
  author: 'Hamza Umar Farooq Ghani',
}

function renderFooter() {
  return render(
    <SEOContext.Provider value={testdata}>
      <Footer />
    </SEOContext.Provider>
  )
}

describe('<Footer/>', () => {
  it('should render Footer', () => {
    const { asFragment } = renderFooter()
    expect(asFragment()).toMatchSnapshot()
  })
  it('should render the copyright text correctly', () => {
    const user = { name: 'Giorgio' }
    const { getByTestId } = renderFooter()
    expect(getByTestId('copyRight-year')).toHaveTextContent(
      `© 2017 - ${new Date().getFullYear()}, Hamza Umar Farooq Ghani`
    )
  })
})
