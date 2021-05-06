import { Box, Skeleton, useColorMode } from '@chakra-ui/react'
import { ResponsiveCalendarCanvas } from '@nivo/calendar'
import { subWeeks } from 'date-fns'
import React from 'react'
import useAPI from '../../hooks/useAPI'
import { contributions } from '../../utils'

const useLocal = process.env.NODE_ENV !== `production`
const url = useLocal
  ? `http://localhost:4566/restapis/dzhva9b0tz/local/_user_request_/github/contributions`
  : `https://api.hufghani.dev/github/contributions`

const GithubContributions: React.FC = () => {
  const [state] = useAPI(url, [])
  let weeks = []
  if (state.isLoading === false && state.response.message === `success`) {
    weeks = contributions(state.response.data.weeks)
  }
  const { colorMode } = useColorMode()
  const isDark = colorMode === `light` ? `Dark` : `Light`
  return (
    <Skeleton isLoaded={!state.isLoading}>
      <Box
        maxW={[`xs`, `lg`, `3xl`, `3xl`]}
        width="150%"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        overflowX="auto"
        height="320px"
        position="relative"
      >
        <Box
          position="relative"
          maxW={[`xl`, `xl`, `60rem`, `60rem`]}
          width={[`lg`, `lg`, `3xl`, `3xl`]}
          height="400px"
          margin="-60px auto"
        >
          <ResponsiveCalendarCanvas
            data={weeks}
            from={subWeeks(new Date(Date.now()), 49).toISOString()}
            to={new Date(Date.now()).toISOString()}
            emptyColor={isDark === `Light` ? `#1a202c` : `#f7fafc`}
            colors={[isDark === `Light` ? `#1a202c` : `#f7fafc`, `#468df3`, `#a053f0`, `#9629f0`, `#8428d8`]}
            margin={{ top: 80, right: 40, bottom: 40, left: 40 }}
            yearSpacing={40}
            // yearLegendPosition="after"
            monthBorderColor={isDark === `Light` ? `#f7fafc` : `#1a202c`}
            dayBorderWidth={2}
            dayBorderColor={isDark === `Light` ? `#2d3748` : `#edf2f7`}
            isInteractive={false}
            theme={{
              textColor: isDark === `Light` ? `#f7fafc` : `#1a202c`,
            }}
          />
        </Box>
      </Box>
    </Skeleton>
  )
}

export default GithubContributions
