import { Box, Text } from '@chakra-ui/layout'
import React from 'react'
import './index.css'

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
        <Box className="timeline-container">
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
    <Box className="timeline-item">
      <Box className="timeline-item-content">
        <Box as="span" className="tag" style={{ background: category.color }}>
          {category.tag}
        </Box>
        <Box as="time">{date}</Box>
        <Text>{text}</Text>
        <Box as="span" className="circle" />
      </Box>
    </Box>
  )
}

export default Timeline
