import MNGLayout from '../components/mnglayout'
import MNGSecureSearch from '../components/mngsecuresearch'
import {
  Container,
  Flex, Box, Center,
  Image, Text, Heading,
  Button,
  Stack, VStack,
  Link as ChakraLink
} from '@chakra-ui/react'
import Link from 'next/link'

export default function Launch() {
  return (
    <MNGLayout title="LAUNCH">
      <Container centerContent>
        <Text fontSize="27px" color="#B895B9">
          Private, Secure Search
        </Text>
        <Flex>
          <MNGSecureSearch />
        </Flex>
      </Container>
    </MNGLayout>
  )
}
