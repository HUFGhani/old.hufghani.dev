/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ListItem, Heading, UnorderedList } from '@chakra-ui/react'
import React from 'react'


const MarkdownParser = {
  h1: (props: {
    children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined
  }) => (
    <Heading fontSize="2xl" mb={3}>
      {props.children}
    </Heading>
  ),
  h2: (props: {
    children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined
  }) => (
    <Heading fontSize="xl" my={3}>
      {props.children}
    </Heading>
  ),
  h3: (props: {
    children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined
  }) => (
    <Heading fontSize="md" my={3}>
      {props.children}
    </Heading>
  ),
  ul: (props: {
    children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined
  }) => <UnorderedList my={2}>{props.children}</UnorderedList>,
  li: (props: {
    children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined
  }) => <ListItem>{props.children}</ListItem>,
  p: (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined }) => (
    <Heading my={2} wordBreak="break-word" justifyContent="center">
      {props.children}
    </Heading>
  ),
  Section,
}
export default MarkdownParser
