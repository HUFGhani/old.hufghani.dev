import { Box, Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { useSEOContext } from '../../contexts/seoContext'
import { useSocialMediaContext } from '../../contexts/socialMediaContext'
import Github from '../../images/socialMedia/github.svg'
import Instagram from '../../images/socialMedia/instagram.svg'
import Linkedin from '../../images/socialMedia/linkedin.svg'
import Twitter from '../../images/socialMedia/twitter.svg'

const Footer: React.FC = () => {
  const seodata = useSEOContext()
  return (
    <Box as="footer" marginTop="2rem" fontSize="l" textAlign="center" width="100%">
      <Text aria-label={`© 2017 - ${new Date().getFullYear()}, ${seodata?.author}`} data-testid="copyRight-year">
        © 2017 - {new Date().getFullYear()}, {seodata?.author}
      </Text>
      <SocialMedia />
      <Text>Built with Gatsby · Hosted on S3 and distributed by CloudFront</Text>
    </Box>
  )
}

const SocialMedia: React.FC = () => {
  const socialMediadata = useSocialMediaContext()
  return (
    <Flex alignItems="center" flexDirection="row" justifyContent="center" pt={`1rem`} pb={`1rem`}>
      <Box mr={`1rem`}>
        <Link href={socialMediadata?.github} isExternal textDecoration="none" _focus="none">
          <Github width="25px" height="25px" />
        </Link>
      </Box>
      <Box mr={`1rem`}>
        <Link href={socialMediadata?.linkedin} isExternal textDecoration="none" _focus="none">
          <Linkedin width="25px" height="25px" />
        </Link>
      </Box>
      <Box mr={`1rem`}>
        <Link href={socialMediadata?.instagram} isExternal textDecoration="none" _focus="none">
          <Instagram width="30px" height="30px" />
        </Link>
      </Box>
      <Box>
        <Link href={socialMediadata?.twitter} isExternal textDecoration="none" _focus="none">
          <Twitter width="25px" height="25px" />
        </Link>
      </Box>
    </Flex>
  )
}
export default Footer
