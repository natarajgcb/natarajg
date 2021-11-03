import { Box } from '@chakra-ui/react'
import { MNGHome } from './MNGHome'
import { MNGDivineEagleBless } from './MNGDivineEagleBless'

export const MNGFlyingHigh = (props) => {
  return (
    <Box>
      <MNGDivineEagleBless />
      <Box position="absolute" top="9rem" left="50%" marginLeft="-148px">
        <MNGHome />
      </Box>
    </Box>
  )
}
