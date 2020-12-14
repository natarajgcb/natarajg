import Layout from '../components/layout'
import {
  Flex,
  Box,
  Image,
  Text,
  Heading,
  Stack,
  Center
} from '@chakra-ui/react'

export default function Home() {
  return (
    <Layout title="Home">
      <Flex w={960} maxW={960} mx="auto">
        <Stack spacing={24}>
          <Image src="/img/masterNatarajG.jpg" alt="Master Nataraj G" title="Master Nataraj G" />
          <Box textAlign="center">
            <Heading as="h3" fontSize="69px" fontWeight="400" color="#9F08A2">गुरु नटराज जी</Heading>
            <Heading as="h4" fontSize="36px" fontWeight="400" color="#B895B9">MASTER NATARAJ G</Heading>
          </Box>
          <Box textAlign="center">
            <Heading as="h1" fontSize="108px" fontWeight="400" color="#E652E9">मुक्ति की कला</Heading>
            <Heading as="h2" fontSize="63px" fontWeight="400" color="#B895B9">The Art of Liberation</Heading>
            <Text fontSize="27px" color="#B895B9">How do we live abundantly as our truest and highest selves?</Text>
          </Box>
        </Stack>
      </Flex>
      <Flex mt={24} w="100%" h="200px" bg="rgba(16,0,8,0.69)" align="center" justify="center" color="#F8CDF9">
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
    </Layout>
  )
}
