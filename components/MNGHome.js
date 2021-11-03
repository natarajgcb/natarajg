import { MNGBOLD, MNGTitle, MNGBody } from './MNGType'
import { Image, Center, Box, Text } from '@chakra-ui/react'
import { MNGGauralok } from './MNGGauralok'

export const MNGHome = (props) => {
  return (
    <Center w={296} h={150} color="#F8CDF9" {...props}>
      <Box textAlign="center" mr={6}>
        <Text fontSize="2xl">शांति</Text>
        <Text fontSize="sm" mt="-6px">PEACE</Text>
      </Box>
      <Box>
        <MNGGauralok />
      </Box>
      <Box textAlign="center" ml={6}>
        <Text fontSize="2xl">प्यार</Text>
        <Text fontSize="sm" mt="-6px">LOVE</Text>
      </Box>
    </Center>
  )
}
