/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Box, Heading, ListItem, OrderedList, Text, UnorderedList } from '@chakra-ui/layout'
import React from 'react'

const MarkdownParser = {
  h1: (props: {
    children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined
  }) => (
    <Heading as="h1" size="2xl" pb="8" textAlign="center">
      {props.children}
    </Heading>
  ),
  h2: (props: {
    children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined
  }) => (
    <Heading as="h2" size="xl" pb="6" wordBreak="break-word" textAlign="left">
      {props.children}
    </Heading>
  ),
  h3: (props: {
    children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined
  }) => (
    <Heading as="h3" size="lg" pb="4" wordBreak="break-word" textAlign="left">
      {props.children}
    </Heading>
  ),
  h4: (props: {
    children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined
  }) => (
    <Heading as="h4" size="md" pb="2" wordBreak="break-word" textAlign="left">
      {props.children}
    </Heading>
  ),
  h5: (props: {
    children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined
  }) => (
    <Heading as="h5" size="sm" pb="1" wordBreak="break-word" textAlign="justify">
      {props.children}
    </Heading>
  ),
  h6: (props: {
    children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined
  }) => (
    <Heading as="h6" size="xs" pb="1" wordBreak="break-word" textAlign="left">
      {props.children}
    </Heading>
  ),
  p: (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined }) => (
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
    children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined
  }) => <Box as="span">{props.children}</Box>,
  ul: (props: {
    children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined
  }) => <UnorderedList>{props.children}</UnorderedList>,
  ol: (props: {
    children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined
  }) => <OrderedList>{props.children}</OrderedList>,
  li: (props: {
    children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined
  }) => <ListItem>{props.children}</ListItem>,
  blockquote: (props: {
    children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined
  }) => <Text as="blockquote">{props.children}</Text>,
  pre: (props: {
    children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined
  }) => <Text as="pre">{props.children}</Text>,
}
export default MarkdownParser
