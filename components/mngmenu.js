import {
  Flex,
  Box,
  Heading
} from '@chakra-ui/react'

export default function MNGMenu() {
  return (
    <Flex mt={24} w="100%" h="200px" bg="rgba(16,0,8,0.69)"
      align="center" justify="center" color="#F8CDF9"
      boxShadow="inset 0 0 36px 1px rgba(48,9,49,0.69)"
    >
      <Box mx={12} textAlign="center">
        <Heading as="h5" fontSize="54px" fontWeight="400">भूमि</Heading>
        <Heading as="h6" fontSize="27px" fontWeight="400">LAND</Heading>
      </Box>
      <Box mx={12} textAlign="center">
        <Heading as="h5" fontSize="54px" fontWeight="400">खाना</Heading>
        <Heading as="h6" fontSize="27px" fontWeight="400">FOOD</Heading>
      </Box>
      <Box mx={12} textAlign="center">
        <Heading as="h5" fontSize="54px" fontWeight="400">योग</Heading>
        <Heading as="h6" fontSize="27px" fontWeight="400">YOGA</Heading>
      </Box>
      <Box mx={12} textAlign="center">
        <Heading as="h5" fontSize="54px" fontWeight="400">कला</Heading>
        <Heading as="h6" fontSize="27px" fontWeight="400">ART</Heading>
      </Box>
      <Box mx={12} textAlign="center">
        <Heading as="h5" fontSize="54px" fontWeight="400">प्यार</Heading>
        <Heading as="h6" fontSize="27px" fontWeight="400">LOVE</Heading>
      </Box>
    </Flex>
  )
}
