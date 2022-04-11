import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { render } from '@testing-library/react'
import React from 'react'
import BlogCard from '.'

const data = {
  nodes: [
    {
      slug: 'test',
      title: 'test',
      excerpt: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
      publishedAt: new Date('2022-01-14T19:03:07.828478+00:00'),
    },
  ],
}

const target = 'https://example.com/'

const renderBlogCard = (location: Location) => {
  return render(
    <ChakraProvider>
      <CSSReset />
      <BlogCard allGraphCmsPost={data} pagelocation={location} />
    </ChakraProvider>
  )
}

describe(`<Footer/>`, () => {
  const { location } = window

  beforeAll(() => {
    delete window.location
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    window.location = {
      pathname: '',
    }
  })
  afterAll((): void => {
    window.location = location
  })

  it(`should render Blog card on index page`, () => {
    window.location.pathname = ''
    const { asFragment } = renderBlogCard(window.location)
    expect(asFragment()).toMatchSnapshot()
  })

  it(`should render Blog card on blog page`, () => {
    window.location.pathname = '/blog'
    const { asFragment } = renderBlogCard(window.location)
    expect(asFragment()).toMatchSnapshot()
  })
})
