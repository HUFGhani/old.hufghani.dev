import { Box, Flex, Text } from '@chakra-ui/react'
import { Link } from 'gatsby'
import React from 'react'
import { useSEOContext } from '../../contexts/seoContext'
import { useSocialMediaContext } from '../../contexts/socialMediaContext'
import Github from '../../images/socialMedia/github.svg'
import Instagram from '../../images/socialMedia/instagram.svg'
import Twitter from '../../images/socialMedia/twitter.svg'
import Linkedin from '../../images/socialMedia/linkedin.svg'

const Footer: React.FC = () => {
  const seodata = useSEOContext()
  const socialMediadata = useSocialMediaContext()
  return (
    <Box as="footer" marginTop="2rem" fontSize="l" textAlign="center" width="100%">
      <Text aria-label={`© 2017 - ${new Date().getFullYear()}, ${seodata?.author}`} data-testid="copyRight-year">
        © 2017 - {new Date().getFullYear()}, {seodata?.author}
      </Text>
      <Flex alignItems="center" flexDirection="row" justifyContent="center" pt={`1rem`} pb={`1rem`}>
        <Box mr={`1rem`}>
          <Link to={socialMediadata?.github}>
            <Github width="25px" height="25px" />
          </Link>
        </Box>
        <Box mr={`1rem`}>
          <Link to={socialMediadata?.linkedin}>
            <Linkedin width="25px" height="25px" />
          </Link>
        </Box>
        <Box mr={`1rem`}>
          <Link to={socialMediadata?.instagram}>
            <Instagram width="30px" height="30px" />
          </Link>
        </Box>
        <Box>
          <Link to={socialMediadata?.twitter}>
            <Twitter width="25px" height="25px" />
          </Link>
        </Box>
      </Flex>
      <Text>Built with Gatsby · Hosted on S3 and CloudFront</Text>
    </Box>
  )
}
export default Footer
