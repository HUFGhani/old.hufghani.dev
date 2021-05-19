import { Box, Flex, Link, Text, useColorMode } from '@chakra-ui/react'
import React, { useEffect } from 'react'
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
      <Text
        fontSize="sm"
        aria-label={`© 2017 - ${new Date().getFullYear()}, ${seodata?.author}`}
        data-testid="copyRight-year"
      >
        © 2017 - {new Date().getFullYear()}, {seodata?.author}
      </Text>
      <SocialMedia />
      <Text fontSize="sm" pb={`4`}>
        Built with Gatsby · Hosted on S3 and distributed by CloudFront
      </Text>
      <Carbonbadge />
    </Box>
  )
}

const SocialMedia: React.FC = () => {
  const socialMediadata = useSocialMediaContext()
  return (
    <Flex alignItems="center" flexDirection="row" justifyContent="center" pt={`1rem`} pb={`1rem`}>
      <Box mr={`1rem`}>
        <Link
          href={socialMediadata?.github}
          isExternal
          textDecoration="none"
          _focus={{ outline: `none` }}
          aria-label="GitHub"
        >
          <Github width="25px" height="25px" />
        </Link>
      </Box>
      <Box mr={`1rem`}>
        <Link
          href={socialMediadata?.linkedin}
          isExternal
          textDecoration="none"
          _focus={{ outline: `none` }}
          aria-label="Linkedin"
        >
          <Linkedin width="25px" height="25px" />
        </Link>
      </Box>
      <Box mr={`1rem`}>
        <Link
          href={socialMediadata?.instagram}
          isExternal
          textDecoration="none"
          _focus={{ outline: `none` }}
          aria-label="Instagram"
        >
          <Instagram width="30px" height="30px" />
        </Link>
      </Box>
      <Box>
        <Link
          href={socialMediadata?.twitter}
          isExternal
          textDecoration="none"
          _focus={{ outline: `none` }}
          aria-label="Twitter"
        >
          <Twitter width="25px" height="25px" />
        </Link>
      </Box>
    </Flex>
  )
}

const Carbonbadge: React.FC = () => {
  useEffect(() => {
    const script = document.createElement(`script`)

    script.src = `https://unpkg.com/website-carbon-badges@1.1.1/b.min.js`
    script.defer = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])
  const { colorMode } = useColorMode()
  const isDark = colorMode === `light` ? `Dark` : `Light`
  return <Box id="wcb" className={`wcb carbonbadge${isDark === `Light` ? ` wcb-d` : ``}`}></Box>
}

export default Footer
