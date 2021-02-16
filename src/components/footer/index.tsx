import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { useSEOContext } from '../../contexts/seoContext'

const Footer: React.FC = () => {
  const data = useSEOContext()
  return (
    <Box as="footer" marginTop="2rem" fontSize="l" textAlign="center">
      <Text aria-label={`© 2017 - ${new Date().getFullYear()}, ${data?.author}`} data-testid="copyRight-year">
        © 2017 - {new Date().getFullYear()}, {data?.author}
      </Text>
    </Box>
  )
}
export default Footer
