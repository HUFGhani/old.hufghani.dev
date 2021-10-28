/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Box, Skeleton, useColorMode } from '@chakra-ui/react'
import { ResponsiveCalendarCanvas } from '@nivo/calendar'
import { subWeeks } from 'date-fns'
import React from 'react'
import useAPI from '../../hooks/useAPI'

const useLocal = process.env.NODE_ENV !== `production`
const url = `https://api.hufghani.dev/github/contributions`

const GithubContributions: React.FC = () => {
  const [state] = useAPI(url, [])
  let weeks = []
  if (state.isLoading === false && state.response.message === `success`) {
    weeks = contributions(state.response.data.weeks)
  }
  const { colorMode } = useColorMode()

  return (
    <Skeleton isLoaded={!state.isLoading}>
      <Box
        maxW={[`18em`, `lg`, `3xl`, `3xl`]}
        width="100%"
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
            emptyColor={colorMode != `light` ? `#1a202c` : `#f7fafc`}
            colors={[colorMode != `light` ? `#1a202c` : `#f7fafc`, `#468df3`, `#a053f0`, `#9629f0`, `#8428d8`]}
            margin={{ top: 80, right: 40, bottom: 40, left: 40 }}
            yearSpacing={40}
            // yearLegendPosition="after"
            monthBorderColor={colorMode != `light` ? `#f7fafc` : `#1a202c`}
            dayBorderWidth={2}
            dayBorderColor={colorMode != `light` ? `#2d3748` : `#edf2f7`}
            isInteractive={false}
            theme={{
              textColor: colorMode != `light` ? `#f7fafc` : `#1a202c`,
            }}
          />
        </Box>
      </Box>
    </Skeleton>
  )
}

const contributions = (weeks: any): any[] => {
  const arrayOfDays = []

  for (const { contributionDays } of weeks) {
    const days = contributionDays.map(({ contributionCount, date }) => {
      return {
        day: date,
        value: contributionCount,
      }
    })
    arrayOfDays.push(days)
  }
  return [].concat([], ...arrayOfDays)
}

export default GithubContributions
