import { Box, Link as ChakraLink } from '@chakra-ui/react'
import { MNGHome } from './MNGHome'
import { MNGDivineEagleBless } from './MNGDivineEagleBless'
import NextLink from 'next/link'

export const MNGFlyingHigh = (props) => {
  return (
    <Box>
      <MNGDivineEagleBless />
      <Box position="absolute" top={["3rem", "6rem", "9rem"]} left="50%" marginLeft="-148px">
        <ChakraLink as={NextLink} href="/" style={{
          _hover: {
            textDecoration: "none"
          }
        }}>
          <MNGHome />
        </ChakraLink>
      </Box>
    </Box>
  )
}
