import MNGLayout from '../components/mnglayout'
import {
  Flex,
  Box,
  Image,
  Text,
  Heading,
  Stack,
  Center
} from '@chakra-ui/react'

export default function Love() {
  return (
    <MNGLayout title="LOVE">
      <Flex w={960} maxW={960} mx="auto">
        <Stack spacing={24}>
          <Image w={600} mx="auto" src="/img/MasterNatarajGLove.jpg"
            alt="Master Nataraj G Love" title="Master Nataraj G Love" />

          <Box textAlign="center">
            <Heading as="h1" fontSize="108px" fontWeight="400" color="#E652E9">प्यार</Heading>
            <Heading as="h2" fontSize="63px" fontWeight="400" color="#B895B9">LOVE</Heading>
            <Text fontSize="27px" color="#B895B9" mt={4}>
              We are in it.
              <br/>It is all around us.
              <br/>It is us.
              <br/>If we sit quietly
              <br/>And listen.
              <br/><br/><strong>Deep gratitude</strong> to the land, Mother Earth, the Infinite
                One Self, family, friends, teachers, spirit guides, lovers,
                Eucalyptus, Cedar, Hummingbird, Dragonfly, Deer, Turtle, Sage, Bee.
              <br/><br/>// listing of people with brief one-line connection msg and learn more links?
              <br/><br/>CREDITS for site
            </Text>
          </Box>
        </Stack>
      </Flex>
    </MNGLayout>
  )
}
