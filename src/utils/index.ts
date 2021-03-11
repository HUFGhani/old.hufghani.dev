import { FeatureNames } from '@paralleldrive/react-feature-toggles'

export const featureIsActive = (
  features: FeatureNames | { name: string; isActive: boolean }[],
  featureFlagName: string
): boolean => {
  return features.some(
    (feature: { name: string; isActive: boolean }) => feature.name === featureFlagName && feature.isActive
  )
}

export const contributions = (weeks: any) => {
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
  console.log(arrayOfDays)
  return [].concat.apply([], arrayOfDays)
}
