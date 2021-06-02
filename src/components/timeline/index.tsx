import { Box, Text } from '@chakra-ui/layout'
import { useColorMode } from '@chakra-ui/react'
import React from 'react'
import TimelineData from '../../../config/timeline'
import TimelineItemInterface from '../../interface/timelineItemInterface'
import './index.css'

const Timeline: React.FC = () => {
  const { colorMode } = useColorMode()
  const isDark = colorMode === `light` ? `Dark` : `Light`
  return (
    <>
      {TimelineData.length > 0 && (
        <Box
          className="timeline-container"
          _after={{
            backgroundColor: isDark === `Light` ? `#00ffbc` : `#e17b77`,
          }}
        >
          {TimelineData.map((data: TimelineItemInterface, idx) => (
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
        boxShadow={isDark === `Light` ? `0 0 5px rgba(206,187,187,0.9)` : `0 0 5px rgba(0, 0, 0, 0.2)`}
        backgroundColor={isDark === `Light` ? `var(--chakra-colors-gray-800)` : `#fff`}
        _after={{
          boxShadow: isDark === `Light` ? `1px -1px 1px rgba(206,187,187,0.9)` : `1px -1px 1px rgba(0, 0, 0, 0.2)`,
          backgroundColor: isDark === `Light` ? `var(--chakra-colors-gray-800)` : `#fff`,
          _odd: {
            boxShadow: isDark === `Light` ? `-1px 1px 1px rgba(206,187,187,0.9)` : `-1px 1px 1px rgba(0, 0, 0, 0.2)`,
          },
        }}
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
          border={isDark === `Light` ? `3px solid #00ffbc` : `3px solid #e17b77`}
        />
      </Box>
    </Box>
  )
}

export default Timeline
