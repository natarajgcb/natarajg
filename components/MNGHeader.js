import Link from 'next/link'
import { Image, Center, Flex, Box, Spacer, Button } from '@chakra-ui/react'
import { Link as ChakraLink } from '@chakra-ui/react'
import { MNGButton } from './MNGButton'
import MNGDrawer from './MNGDrawer'
import { MNGFlyingHigh } from './MNGFlyingHigh'
import { MNGBOLD, MNGTitle, MNGBody } from './MNGType'

export const MNGHeader = (props) => {
  return (
    <>
      <MNGFlyingHigh />
      <Flex mt="mngr.27">
        <MNGDrawer />
        <MNGBOLD><Link href="/home">MASTER NATARAJ G</Link></MNGBOLD>
      </Flex>
    </>
  )
}
