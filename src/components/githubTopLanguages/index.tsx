import { Box, Skeleton, useColorMode } from '@chakra-ui/react'
import { ResponsivePieCanvas } from '@nivo/pie'
import React from 'react'
import useAPI from '../../hooks/useAPI'
import { topLanguages } from '../../utils'

const useLocal = process.env.NODE_ENV !== `production`
const url = useLocal
  ? `http://localhost:4566/restapis/dzhva9b0tz/local/_user_request_/github/repositories`
  : `https://api.hufghani.dev/github/repositories`

const GithubTopLanguages: React.FC = () => {
  const [state] = useAPI(url, [])
  let repositories: { id: any; label: any; value: any; color: any }[] = []
  if (state.isLoading === false && state.response.message === `success`) {
    repositories = topLanguages(state.response.data.repositories)
  }
  console.log(repositories)
  const { colorMode } = useColorMode()
  const isDark = colorMode === `light` ? `Dark` : `Light`
  return (
    <Skeleton isLoaded={!state.isLoading}>
      <Box width="100%" height="40vh" maxHeight="xl">
        <ResponsivePieCanvas
          data={repositories}
          margin={{
            top: 40,
            right: 80,
            bottom: 80,
            left: 80,
          }}
          pixelRatio={1}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          colors={[`#abbfcc`, `#468df3`, `#a053f0`, `#9629f0`, `#8428d8`]}
          radialLabelsSkipAngle={10}
          radialLabelsTextXOffset={6}
          radialLabelsTextColor={isDark === `Light` ? `#f7fafc` : `#1a202c`}
          radialLabelsLinkOffset={0}
          radialLabelsLinkDiagonalLength={16}
          radialLabelsLinkHorizontalLength={24}
          radialLabelsLinkStrokeWidth={1}
          radialLabelsLinkColor={{ from: `color` }}
          slicesLabelsSkipAngle={10}
          slicesLabelsTextColor={`#1a202c`}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          isInteractive={false}
        />
      </Box>
    </Skeleton>
  )
}

export default GithubTopLanguages
