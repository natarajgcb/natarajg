import Head from 'next/head'
import Link from 'next/link'
import {
  Container, Center, Spacer, Text, Box, ListItem, Link as ChakraLink
} from '@chakra-ui/react'
import { MNGFooter } from '../components/MNGFooter'
import { MNGHeader } from '../components/MNGHeader'
import MNGStarfield from '../components/MNGStarfield'
import { MNGBody } from '../components/MNGType'
import { MNGH3 } from '../components/MNGType'

export const MNGContainer = (props) => {
  return (
    <Container
      paddingTop="0"
      paddingBottom="mngr.27"
      px="mngr.27"
      {...props}
    />
  )
}

export const MNGNote = (props) => {
  return (
    <Box
      padding="mngr.27"
      borderStyle="solid"
      borderColor="mngr.dark"
      borderWidth="0 0 0 7px"
      backgroundColor="mngr.light"
      marginBottom="mngr.27"
      {...props}
    >
      <Box
        fontWeight="400"
        fontSize="mngr.body"
        lineHeight="mngr.body"
        color="mngr.dark"
      >
        {props.children}
      </Box>
    </Box>
  )
}

export const MNGNav = (props) => {
  return (
    <Center as="nav" {...props}>
      {props.children}
    </Center>
  )
}

export const MNGNavLink = (props) => {
  return (
    <Text fontSize="mngr.h3" {...props}>
      {props.children}
    </Text>
  )
}

export const MNGTopNavItem = (props) => {
  return (
    <ListItem fontSize="1.25rem" fontWeight="semibold">
      <ChakraLink as={Link}
        href={props.href}
        _hover={{ color: "mngr.link" }}
        style={{ borderBottom: "none" }}
      >
        <Text as="span" fontSize="1.25rem">{props.hindiText}</Text>
        &nbsp;{props.engText}
      </ChakraLink>
    </ListItem>
  )
}

export const MNGNavItem = (props) => {
  return (
    <ListItem>
      <ChakraLink as={Link}
        href={props.href}
        _hover={{ color: "mngr.link" }}
        style={{ borderBottom: "none" }}
      >
        <MNGBody {...props}>{props.label}</MNGBody>
      </ChakraLink>
    </ListItem>
  )
}

export const MNGPage = (props) => {
  return (
    <>
      <Head>
        <title>{props.meta.title}</title>
        <meta name="description" content={props.meta.description} />
        <meta property="og:title" content={props.og.title} />
        <meta property="og:description" content={props.og.description} />
        <meta property="og:image" content={props.og.image} />
      </Head>
      <MNGContainer>
        <MNGStarfield />
        <MNGHeader />
        <Center
          style={{
            borderBottom: "1px solid",
            borderBottomColor: "#1E1D35",
            borderTop: "1px solid",
            borderTopColor: "#1E1D35",
            paddingLeft: "30%",
            paddingRight: "30%"
          }}
        >
          <ChakraLink as={Link}
            href="/"
            style={{
              borderBottom: "none",
              margin: 0,
              padding: 0
              
            }}
          >
            <MNGBody style={{
              fontWeight:"600",
              fontSize:"1.25rem",
              color:"#6E0A70",
              lineHeight:1,
              marginTop:"1rem",
              marginBottom:"1rem"
             }}>ABOUT</MNGBody>
          </ChakraLink>
          <Spacer></Spacer>
          <ChakraLink as={Link}
            href="#offerings"
            style={{
              borderBottom: "none",
              margin: 0,
              padding: 0
            }}
          >
            <MNGBody style={{
              fontWeight:"600",
              fontSize:"1.25rem",
              color:"#6E0A70",
              lineHeight:1,
              marginTop:"1rem",
              marginBottom:"1rem"
             }}>OFFERINGS</MNGBody>
          </ChakraLink>
        </Center>
        {props.children}
      </MNGContainer>
      <MNGFooter />
    </>
  )
}
