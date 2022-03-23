import { Box, Flex, Icon, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { FaGithubSquare, FaInstagram, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import { useSEO } from '../../hooks/useSEO'
import { useSocialMedia } from '../../hooks/useSocialMedia'

const Footer: React.FC = () => {
  const seodata = useSEO()

  return (
    <Box as="footer" marginTop="2rem" fontSize="l" textAlign="center" width="100%">
      <Text
        fontSize="sm"
        aria-label={`© 2017 - ${new Date().getFullYear()}, ${seodata.authorName}`}
        data-testid="copyRight-year"
      >
        © 2017 - {new Date().getFullYear()}, {seodata.authorName}
      </Text>
      <SocialMedia />
      <Text fontSize="sm" pb={`4`}>
        Built with Gatsby · Hosted on S3 and distributed by CloudFront
      </Text>
    </Box>
  )
}

const SocialMedia: React.FC = () => {
  const data = useSocialMedia()
  return (
    <Flex alignItems="center" flexDirection="row" justifyContent="center" pt={`1rem`} pb={`1rem`}>
      {data.map((socialMedia: { name: string; url: string | undefined }, key: any) => {
        if (socialMedia.name === 'Github') {
          return socialMediaIcons(key, socialMedia)
        }
        if (socialMedia.name === 'Linkedin') {
          return socialMediaIcons(key, socialMedia)
        }
        if (socialMedia.name === 'Instagram') {
          return socialMediaIcons(key, socialMedia)
        }
        if (socialMedia.name === 'Twitter') {
          return socialMediaIcons(key, socialMedia)
        }
      })}
    </Flex>
  )
}

const socialMediaIcons = (key: any, socialMedia: { name: string; url: string | undefined }) => {
  return (
    <Box key={key} mr={`1rem`}>
      <Link
        key={key}
        href={socialMedia.url}
        isExternal
        textDecoration="none"
        _focus={{ outline: `none` }}
        aria-label={socialMedia.name}
      >
        <Icon key={key} as={iconbuilder(socialMedia.name)} w="7" h="7" />
      </Link>
    </Box>
  )
}

const iconbuilder = (name: string): any => {
  if (name === 'Github') {
    return FaGithubSquare
  }

  if (name === 'Linkedin') {
    return FaLinkedin
  }

  if (name === 'Instagram') {
    return FaInstagram
  }

  if (name === 'Twitter') {
    return FaTwitterSquare
  }
}

export default Footer
