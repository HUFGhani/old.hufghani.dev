import { FeatureNames } from '@paralleldrive/react-feature-toggles'

export const featureIsActive = (
  features: FeatureNames | { name: string; isActive: boolean }[],
  featureFlagName: string
): boolean => {
  return features.some(
    (feature: { name: string; isActive: boolean }) => feature.name === featureFlagName && feature.isActive
  )
}
