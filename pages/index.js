import Layout from '../components/layout'
import {
  Flex,
  Box,
  Image,
  Text
} from '@chakra-ui/react'

export default function Home() {
  return (
    <Layout title="Home">
      <Flex w={960} maxW={960} mx="auto">
        <Box>
          <Image src="/img/masterNatarajG.jpg" alt="Master Nataraj G" title="Master Nataraj G" />
        </Box>
      </Flex>
    </Layout>
  )
}
