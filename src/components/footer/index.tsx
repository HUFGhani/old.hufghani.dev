import { Box, Flex, Icon, Link, Text } from '@chakra-ui/react'
import { useSEO } from '@hooks/useSEO'
import { useSocialMedia } from '@hooks/useSocialMedia'
import React from 'react'
import { FaGithubSquare, FaInstagram, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

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
          return (
            <Box key={key} mr={`1rem`}>
              <Link
                key={key}
                href={socialMedia.url}
                isExternal
                textDecoration="none"
                _focus={{ outline: `none` }}
                aria-label="GitHub"
              >
                <Icon key={key} as={FaGithubSquare} w="7" h="7" />
              </Link>
            </Box>
          )
        }
        if (socialMedia.name === 'Linkedin') {
          return (
            <Box key={key} mr={`1rem`}>
              <Link
                key={key}
                href={socialMedia.url}
                isExternal
                textDecoration="none"
                _focus={{ outline: `none` }}
                aria-label="Linkedin"
              >
                <Icon key={key} as={FaLinkedin} w="7" h="7" />
              </Link>
            </Box>
          )
        }
        if (socialMedia.name === 'Instagram') {
          return (
            <Box key={key} mr={`1rem`}>
              <Link
                key={key}
                href={socialMedia.url}
                isExternal
                textDecoration="none"
                _focus={{ outline: `none` }}
                aria-label="Instagram"
              >
                <Icon key={key} as={FaInstagram} w="7" h="7" />
              </Link>
            </Box>
          )
        }
        if (socialMedia.name === 'Twitter') {
          return (
            <Box key={key} mr={`1rem`}>
              <Link
                key={key}
                href={socialMedia.url}
                isExternal
                textDecoration="none"
                _focus={{ outline: `none` }}
                aria-label="Twitter"
              >
                <Icon key={key} as={FaTwitterSquare} w="7" h="7" />
              </Link>
            </Box>
          )
        }
      })}
    </Flex>
  )
}

export default Footer
