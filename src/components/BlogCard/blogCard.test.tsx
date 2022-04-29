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

const renderBlogCard = (location: string) => {
  return render(
    <ChakraProvider>
      <CSSReset />
      <BlogCard allGraphCmsPost={data} pagelocation={location} />
    </ChakraProvider>
  )
}

describe(`<Footer/>`, () => {
  it(`should render Blog card on index page`, () => {
    window.location.pathname = ''
    const { asFragment } = renderBlogCard('')
    expect(asFragment()).toMatchSnapshot()
  })

  it(`should render Blog card on blog page`, () => {
    window.location.pathname = '/blog'
    const { asFragment } = renderBlogCard('blog')
    expect(asFragment()).toMatchSnapshot()
  })
})
