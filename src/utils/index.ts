import { FeatureNames } from '@paralleldrive/react-feature-toggles'
import TimelineItemInterface from '../interface/timelineItemInterface'

export const featureIsActive = (
  features: FeatureNames | { name: string; isActive: boolean }[],
  featureFlagName: string
): boolean => {
  return features.includes(featureFlagName)
}

export const contributions = (weeks: any): any[] => {
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

export const topLanguages = (repositories: { nodes: any[] }) => {
  const langObject = repositories.nodes.reduce((langs: any, { languages }: any) => {
    return languages.nodes.reduce((repLangs: { [x: string]: { count: number } }, { name, color }: any) => {
      if (!repLangs[name]) {
        repLangs[name] = { count: 0, color }
      }
      repLangs[name].count += 1
      return repLangs
    }, langs)
  }, {})

  const langArray = formatLanguagesForChart(langObject)

  return langArray.sort((a, b) => b.value - a.value).slice(0, 5)
}

const entries = (object: { [x: string]: any }) => Object.keys(object).map(key => [key, object[key]])

const formatLanguagesForChart = (langObject: any) =>
  entries(langObject)
    .map(([key, { count, color }]) => ({
      id: key,
      label: key,
      value: count,
      color,
    }))
    .filter(data => data.color && data.value > 1)

export const timelineDataSort = (timelineData: TimelineItemInterface[]): TimelineItemInterface[] => {
  if (typeof timelineData !== `undefined`) {
    return timelineData.sort(function (a: { date: string | number | Date }, b: { date: string | number | Date }) {
      return new Date(a.date) - new Date(b.date)
    })
  }
  return []
}
