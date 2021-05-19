import { Box } from '@chakra-ui/react'
import React from 'react'

const timelineData = [
  {
    text: `Wrote my first blog post ever on Medium`,
    date: `March 03 2017`,
    category: {
      tag: `medium`,
      color: `#018f69`,
    },
  },
  {
    text: `Wrote my first blog post ever on Medium`,
    date: `March 03 2017`,
    category: {
      tag: `medium`,
      color: `#018f69`,
    },
  },
]

interface TimelineItemInterface {
  text: string
  date: string
  category: {
    tag: string
    color: string
  }
}

const Timeline: React.FC = () => {
  return (
    <>
      {timelineData.length > 0 && (
        <Box>
          {timelineData.map((data: TimelineItemInterface, idx) => (
            <TimelineItem {...data} key={idx} />
          ))}
        </Box>
      )}
    </>
  )
}

const TimelineItem: React.FC<TimelineItemInterface> = ({ text, date, category }) => {
  return (
    <>
      {JSON.stringify(text)}
      {JSON.stringify(date)}
      {JSON.stringify(category)}
    </>
  )
}

export default Timeline
