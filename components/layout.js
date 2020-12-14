import Head from 'next/head'
import Starfield from '../components/starfield'
import Header from '../components/header'
import {
  Box,
  Container,
  Button,
  Link as ChakraLink,
  Menu, MenuButton, MenuList, MenuGroup, MenuDivider, MenuItem,
  Flex, Spacer, Center,
  Image,
  Text
} from '@chakra-ui/react'

export const siteTitle = 'Master Nataraj G'

export default function Layout({
  children,
  title = "Shanti Pyar"
}) {
  return (
    <div>
      <Head>
        <title>{title} | {siteTitle}</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Starfield />

      <Header />

      {children}

      <Container as="footer">
        <Text>Place footer content here...</Text>
      </Container>
    </div>
  )
}
