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

const renderBlogCard = () => {
  return render(
    <ChakraProvider>
      <CSSReset />
      <BlogCard allGraphCmsPost={data} />
    </ChakraProvider>
  )
}

describe(`<Footer/>`, () => {
  it(`should render Blog card on index page`, () => {
    const { asFragment } = renderBlogCard()
    expect(asFragment()).toMatchSnapshot()
  })

  it(`should render Blog card on blog page`, () => {
    const url = 'http://dummy.com/blog'
    Object.defineProperty(window, 'location', {
      value: new URL(url),
    })
    const { asFragment } = renderBlogCard()
    expect(asFragment()).toMatchSnapshot()
  })
})
