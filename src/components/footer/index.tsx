import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Footer: React.FC = () => (
  <Box as="footer" marginTop="2rem" fontSize="l" textAlign="center">
    <Text aria-label={`© 2017 - ${new Date().getFullYear()}, Hamza Umar Farooq Ghani`} data-testid="copyRight-year">
      © 2017 - {new Date().getFullYear()}, Hamza Umar Farooq Ghani
    </Text>
    
  </Box>
)

export default Footer
