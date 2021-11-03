import { Flex, Link as ChakraLink } from '@chakra-ui/react'
import MNGDrawer from './MNGDrawer'
import { MNGFlyingHigh } from './MNGFlyingHigh'
import { MNGBOLD } from './MNGType'

export const MNGHeader = (props) => {
  return (
    <>
      <MNGFlyingHigh />
      <Flex mt="mngr.27"
        justifyContent="flex-start"
        alignContent="center"
        alignItems="baseline"
      >
        <MNGDrawer />
        <MNGBOLD>
          <ChakraLink
            href="/"
            variant="noline"
          >
            MASTER NATARAJ G
          </ChakraLink>
        </MNGBOLD>
      </Flex>
    </>
  )
}
