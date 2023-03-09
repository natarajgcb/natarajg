import Link from 'next/link'
import { Flex, Spacer, HStack, Link as ChakraLink } from '@chakra-ui/react'
import MNGDrawer from './MNGDrawer'
import { MNGFlyingHigh } from './MNGFlyingHigh'
import { MNGBOLD, MNGBody, MNGH3, MNGNav } from './MNGType'
import { useRouter } from "next/router"

export const MNGHeader = (props) => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <>
      <Flex mt="mngr.27"
        justifyContent="flex-start"
        alignContent="center"
        alignItems="baseline"
      >
        <MNGBOLD>
          MASTER NATARAJ G
          <br/>Healing &amp; Art Practice
        </MNGBOLD>
      </Flex>

      <Flex>
        <MNGNav href="/"
          color={path == "/" ? "mngr.link" : "mngr.light"}
          borderBot={path == "/" ? true : false}>Home</MNGNav>
        <Spacer />
        <MNGNav href="/offerings"
          color={path == "/offerings" ? "mngr.link" : "mngr.light"}
          borderBot={path == "/offerings" ? true : false}>Offerings</MNGNav>
        <Spacer />
        <MNGNav href="/art"
          color={path == "/art" ? "mngr.link" : "mngr.light"}
          borderBot={path == "/art" ? true : false}>Art</MNGNav>
        <Spacer />
        <MNGNav href="/contact"
          color={path == "/contact" ? "mngr.link" : "mngr.light"}
          borderBot={path == "/contact" ? true : false}>Contact</MNGNav>
        <Spacer />
        <MNGNav href="/about"
          color={path == "/about" ? "mngr.link" : "mngr.light"}
          borderBot={path == "/about" ? true : false}>About</MNGNav>
      </Flex>

    </>
  )
}
