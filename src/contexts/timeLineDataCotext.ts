import { createContext, useContext } from 'react'
import TimelineItemInterface from '../interface/timelineItemInterface'

export const TimeLineDataCotext = createContext<TimelineItemInterface | undefined>(undefined)

export const useTimeLineDataCotext = () => useContext<TimelineItemInterface | undefined>(TimeLineDataCotext)
