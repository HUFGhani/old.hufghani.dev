import { Box, Heading, ListItem, OrderedList, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'


type element = boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined

const MarkdownParser = {
  h1: (props: {
    children: element
  }) => (
    <Heading as="h1" size="2xl" pb="8" textAlign="center">
      {props.children}
    </Heading>
  ),
  h2: (props: {
    children: element
  }) => (
    <Heading as="h2" size="xl" pb="6" wordBreak="break-word" textAlign="left">
      {props.children}
    </Heading>
  ),
  h3: (props: {
    children: element
  }) => (
    <Heading as="h3" size="lg" pb="4" wordBreak="break-word" textAlign="left">
      {props.children}
    </Heading>
  ),
  h4: (props: {
    children: element
  }) => (
    <Heading as="h4" size="md" pb="2" wordBreak="break-word" textAlign="left">
      {props.children}
    </Heading>
  ),
  h5: (props: {
    children: element
  }) => (
    <Heading as="h5" size="sm" pb="1" wordBreak="break-word" textAlign="justify">
      {props.children}
    </Heading>
  ),
  h6: (props: {
    children: element
  }) => (
    <Heading as="h6" size="xs" pb="1" wordBreak="break-word" textAlign="left">
      {props.children}
    </Heading>
  ),
  p: (props: { children: element }) => (
    <Text
      as="p"
      textAlign="justify"
      pb="4"
      py="4"
      style={{
        whiteSpace: `normal`,
        wordWrap: `break-word`,
      }}
    >
      {props.children}
    </Text>
  ),
  span: (props: {
    children: element
  }) => <Box as="span">{props.children}</Box>,
  ul: (props: {
    children: element
  }) => <UnorderedList>{props.children}</UnorderedList>,
  ol: (props: {
    children: element
  }) => <OrderedList>{props.children}</OrderedList>,
  li: (props: {
    children: element
  }) => <ListItem>{props.children}</ListItem>,
  blockquote: (props: {
    children: element
  }) => <Text as="blockquote">{props.children}</Text>,
  pre: (props: {
    children: element
  }) => <Text as="pre">{props.children}</Text>,
}
export default MarkdownParser
