import { Box, Text } from '@chakra-ui/layout'
import { useColorMode } from '@chakra-ui/react'
import React from 'react'
import { useTimeLineDataCotext } from '../../contexts/timeLineDataCotext'
import TimelineItemInterface from '../../interface/timelineItemInterface'
import { timelineDataSort } from '../../utils'
import './index.css'

const Timeline: React.FC = () => {
  const { colorMode } = useColorMode()
  const isDark = colorMode === `light` ? `Dark` : `Light`
  const TimelineData: TimelineItemInterface[] = timelineDataSort(useTimeLineDataCotext())
  return (
    <>
      {TimelineData?.length > 0 && (
        <Box
          className="timeline-container"
          _after={{
            backgroundColor: isDark === `Light` ? `#00ffbc` : `#0e11a8`,
          }}
        >
          {TimelineData?.map((data: TimelineItemInterface, idx: React.Key | null | undefined) => (
            <TimelineItem {...data} key={idx} />
          ))}
        </Box>
      )}
    </>
  )
}

const TimelineItem: React.FC<TimelineItemInterface> = ({ text, date, category }) => {
  const { colorMode } = useColorMode()
  const isDark = colorMode === `light` ? `Dark` : `Light`
  return (
    <Box className="timeline-item">
      <Box
        className="timeline-item-content"
        backgroundColor={isDark === `Light` ? `var(--chakra-colors-gray-800)` : `#fff`}
        _after={{ backgroundColor: isDark === `Light` ? `var(--chakra-colors-gray-800)` : `#fff` }}
      >
        <Box as="span" className="tag" style={{ background: category.color }}>
          {category.tag}
        </Box>
        <Box as="time">{date}</Box>
        <Text>{text}</Text>
        <Box
          as="span"
          className="circle"
          backgroundColor={isDark === `Light` ? `var(--chakra-colors-gray-800)` : `#fff`}
          border={isDark === `Light` ? `3px solid #00ffbc` : `3px solid #0e11a8`}
        />
      </Box>
    </Box>
  )
}

export default Timeline