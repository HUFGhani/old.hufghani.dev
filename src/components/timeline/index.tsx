import { Box, Text } from '@chakra-ui/layout'
import React from 'react'
import TimelineData from '../../../config/timeline'
import TimelineItemInterface from '../../interface/TimelineItemInterface'
import './index.css'

const Timeline: React.FC = () => {
  return (
    <>
      {TimelineData.length > 0 && (
        <Box className="timeline-container">
          {TimelineData.map((data: TimelineItemInterface, idx) => (
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
