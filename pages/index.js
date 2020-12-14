import Layout from '../components/layout'
import {
  Flex,
  Box,
  Image,
  Text,
  Heading,
  Stack
} from '@chakra-ui/react'

export default function Home() {
  return (
    <Layout title="Home">
      <Flex w={960} maxW={960} mx="auto">
        <Stack spacing={24}>
          <Image src="/img/masterNatarajG.jpg" alt="Master Nataraj G" title="Master Nataraj G" />
          <Box textAlign="center">
            <Heading as="h3" fontSize="69px" fontWeight="400" color="#9F08A2">गुरु नटराज जी</Heading>
            <Heading as="h4" fontSize="45px" fontWeight="400" color="#B895B9">MASTER NATARAJ G</Heading>
          </Box>
          <Box textAlign="center">
            <Heading as="h1" fontSize="108px" fontWeight="400" color="#E652E9">मुक्ति की कला</Heading>
            <Heading as="h2" fontSize="59px" fontWeight="400" color="#B895B9">The Art of Liberation</Heading>
            <Text fontSize="27px" color="#B895B9">How do we live abundantly as our truest and highest selves?</Text>
          </Box>
        </Stack>
      </Flex>
    </Layout>
  )
}
