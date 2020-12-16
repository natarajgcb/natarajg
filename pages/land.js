import MNGLayout from '../components/mnglayout'
import {
  Flex, Box, Center,
  Image, Text, Heading,
  Button,
  Stack, VStack,
  Link as ChakraLink
} from '@chakra-ui/react'
import Link from 'next/link'

export default function Land() {
  return (
    <MNGLayout title="LAND">
      <Flex w={960} maxW={960} mx="auto">
        <Stack spacing={24}>
          <Image w={600} mx="auto" src="/img/MasterNatarajGLand.jpg"
            alt="Master Nataraj G Land" title="Master Nataraj G Land" />

          <Box textAlign="center">
            <Heading as="h1" fontSize="108px" fontWeight="400" color="#E652E9">भूमि</Heading>
            <Heading as="h2" fontSize="63px" fontWeight="400" color="#B895B9">LAND</Heading>
            <Text fontSize="27px" color="#B895B9" mt={4}>
              We are not separate from the land. We are living in an abundant universe
              and our oneness with our Mother Earth and the entire Cosmos is a
              manifestation of that abundance. As we are never separate from the
              land, we are never separate from abundance.
            </Text>
            <Text fontSize="27px" color="#B895B9" mt={9}>
              In many parts of the world, we are living on colonized lands. Even though
              colonial forces may have left and the lands made “free,” the path to truly
              sovereign living and fully honoring the sanctity of the land and all beings
              is continually unfolding and requires conscious action to realize.
            </Text>
            <Text fontSize="27px" color="#B895B9" mt={9}>
              We honor the <ChakraLink as={Link} href="/madeontongvaland">Tongva
              Land</ChakraLink> we are on and share these offerings with you so
              we may all live in abundance, aligned with our highest and truest
              Infinite Self, for a New World rooted in the Divine Energies of
              Peace, Love, Joy, Balance and Gratitude.
            </Text>
            <Text fontSize="27px" color="#B895B9" mt={9}>
              // for the rest of this page -- links to each section:
              <br/><br/>FOOD - it's from the land. From Mother Earth. Food of different kinds for
              our body (physical, fruits, vegetables, seeds, nuts) -- mind,
              soul, heart, spirit.
              <br/><br/>ART - to feed the mind, heart and soul.
              <br/><br/>YOGA - to feed it all and keep us connected, guided and protected
              by our highest and truest SELF -- which is ONE.
              <br/><br/>// links to all the above
            </Text>
            <Text fontSize="27px" color="#B895B9" mt={9}>
              PENs from Gma Gloria, Lydia Auntie, adrienne maree brown, Sadhguru
              <br/><br/>Closing photo of the leaves
            </Text>
          </Box>
        </Stack>
      </Flex>
    </MNGLayout>
  )
}
