import Head from 'next/head'
import MNGStarfield from './mngstarfield'
import MNGHeader from './mngheader'
import MNGMenu from './mngmenu'
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

export default function MNGLayout({
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

      <MNGStarfield />

      <MNGHeader />

      {children}

      <Center as="footer">
        <MNGMenu />
      </Center>
    </div>
  )
}
