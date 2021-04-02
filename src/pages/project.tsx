import { Box, Flex, Heading, Skeleton, useColorMode } from '@chakra-ui/react'
import loadable from '@loadable/component'
import { ResponsiveCalendarCanvas } from '@nivo/calendar'
import { subWeeks } from 'date-fns'
import React from 'react'
import useAPI from '../hooks/useAPI'
import { contributions } from '../utils'

const ProjectTable = loadable(() => import(`../components/projectTable`))
const SEO = loadable(() => import(`../components/seo`))

const useLocal = process.env.NODE_ENV !== 'production'
const url = useLocal
  ? `http://localhost:4566/restapis/ak0gie1kwg/local/_user_request_/github/contributions`
  : `https://api.hufghani.dev/github/contributions`

const Projects: React.FC = () => {
  const [state] = useAPI(url, [])
  let weeks = []
  if (state.isLoading === false && state.response.message === 'success') {
    weeks = state.response.data.weeks
  }
  const { colorMode } = useColorMode()
  const isDark = colorMode === `light` ? `Dark` : `Light`
 
  return (
    <>
      <SEO pageTitle="Project" />
      <Flex justify="center" pb="8">
        <Heading>Project</Heading>
      </Flex>
      {/* <ProjectTable /> */}
      <Skeleton isLoaded={!state.isLoading}>
        <Box
          maxW={['xs', 'lg', 'xl', '850px']}
          width="150%"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          overflowX="auto"
          height="320px"
          position="relative"
          right={{ md: '22%' }}
        >
          <Box
            position="relative"
            maxW={['xl', 'xl', '60rem', '60rem']}
            width={['lg', 'lg', 'xl', '40rem']}
            height="400px"
            margin="-60px auto"
          >
            <ResponsiveCalendarCanvas
              data={contributions(weeks)}
              from={subWeeks(new Date(Date.now()), 49).toISOString()}
              to={new Date(Date.now()).toISOString()}
              emptyColor={isDark === `Light` ? `#1a202c` : `#f7fafc`}
              colors={[isDark === `Light` ? `#1a202c` : `#f7fafc`, '#468df3', '#a053f0', '#9629f0', '#8428d8']}
              margin={{ top: 80, right: 40, bottom: 40, left: 40 }}
              yearSpacing={40}
              // yearLegendPosition="after"
              monthBorderColor={isDark === `Light` ? `#f7fafc` : `#1a202c`}
              dayBorderWidth={2}
              dayBorderColor={isDark === `Light` ? `#2d3748` : `#edf2f7`}
              isInteractive={false}
            />
          </Box>
        </Box>
      </Skeleton>
    </>
  )
}

export default Projects
