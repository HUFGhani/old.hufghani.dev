import { render } from '@testing-library/react'
import React from 'react'
import Header from '.'

afterEach(() => {
  jest.clearAllMocks()
})

describe(`<Header/>`, () => {
  it(`should render Footer`, () => {
    const { asFragment } = render(<Header />)
    expect(asFragment()).toMatchSnapshot()
  })
})
