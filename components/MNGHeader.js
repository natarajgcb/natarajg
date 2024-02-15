import Link from 'next/link'
import { Flex, Link as ChakraLink } from '@chakra-ui/react'
import MNGDrawer from './MNGDrawer'
import { MNGFlyingHigh } from './MNGFlyingHigh'
import { MNGBOLD } from './MNGType'

export const MNGHeader = (props) => {
  return (
    <>
      <MNGFlyingHigh />
      <Flex mt="mngr.27"
        justifyContent="center"
        alignContent="center"
        alignItems="baseline"
      >
        <MNGBOLD textAlign="center">
          MASTER NATARAJ G<br/>
          HEALING &amp; ART
        </MNGBOLD>
      </Flex>
    </>
  )
}
