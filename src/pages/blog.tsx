import { Box, Heading } from '@chakra-ui/react'
import loadable from '@loadable/component'
import React from 'react'
import BlogCard from '../components/BlogCard'
import { useBlogCardforLandingPage } from '../hooks/useBlogCardforLandingPage'

const SEO = loadable(() => import(`../components/SEO`))

interface PageDataInterface {
  location: Location
}

const Blog: React.FC<PageDataInterface> = ({ location }) => {
  const blogCardData = useBlogCardforLandingPage()
  return (
    <>
      <SEO pageTitle="Project" />
      <Heading>Articles</Heading>
      <main>
        <Box paddingTop="40px">
          <BlogCard allGraphCmsPost={blogCardData} pagelocation={location} />
        </Box>
      </main>
    </>
  )
}

export default Blog
