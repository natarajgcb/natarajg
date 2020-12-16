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
          </Box>

          <Box textAlign="center">
            <Heading as="h3" fontSize="69px" fontWeight="400" color="#9F08A2">प्रस्ताव</Heading>
            <Heading as="h4" fontSize="36px" fontWeight="400" color="#B895B9">OFFERINGS</Heading>
            <Text fontSize="27px" color="#B895B9" mt={2}>
              We honor the <ChakraLink as={Link} href="/madeontongvaland">Tongva
              Land</ChakraLink> we are on and share these offerings with you so
              we may all live in abundance, aligned with our highest and truest
              Infinite Self, for a New World rooted in the Divine Energies of
              Peace, Love, Joy, Balance and Gratitude.
            </Text>
          </Box>

          <Flex>
            <ChakraLink as={Link} href="/food">
              <VStack align="center" _hover={{cursor:"pointer"}} mr={6} spacing={4}>
                <Image w={327} borderRadius="full" mt={4}
                  src="/img/MasterNatarajGFoodSq.jpg"
                  alt="Master Nataraj G Food"
                  title="Master Nataraj G Food"
                  boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
                  border="0.1618rem solid #F2B90B"
                  _hover={{
                    boxShadow: "0 0 10px 3px rgba(48,9,49,0.99)",
                    border: "0.1618rem solid #9F08A2"
                  }}
                />
                <ChakraLink as={Link} href="/food">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>SEE FOOD</Button>
                </ChakraLink>
              </VStack>
            </ChakraLink>

            <VStack align="flex-start" spacing={6} w="593px">
              <Text textAlign="left" fontSize="36px" fontWeight="bold"
                color="#F8CDF9" _hover={{color:"#9F08A2"}}>
                <ChakraLink as={Link} href="/food">FOOD</ChakraLink></Text>
              <Text textAlign="left" fontSize="27px" color="#B895B9">
                FOOD nourishes our bodies, minds, hearts, spirits and souls. Each of these
                bodies are sustained by different foods. Our physical body here is
                wholly fed by our Mother Earth with the tastiest abundance of plants,
                fruits, seeds, nuts, mushrooms and more. Even with the rapid
                decline of capitalism and a New World rising amidst devastating
                climate change, widespread disease and unending violence, Mother
                Earth continues to provide us with more than we need. It is
                our Great Gift to be alive. It is our Divine Blessing to organize
                our selves and our creative action for the greatest Peace, Love,
                Joy, Balance and Gratitude.
              </Text>
            </VStack>
          </Flex>

          <Flex>
            <ChakraLink as={Link} href="/yoga">
              <VStack align="center" _hover={{cursor:"pointer"}} mr={6} spacing={4}>
                <Image w={327} borderRadius="full" mt={4}
                  src="/img/MasterNatarajGYogaSq.jpg"
                  alt="Master Nataraj G Yoga"
                  title="Master Nataraj G Yoga"
                  boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
                  border="0.1618rem solid #F2B90B"
                  _hover={{
                    boxShadow: "0 0 10px 3px rgba(48,9,49,0.99)",
                    border: "0.1618rem solid #9F08A2"
                  }}
                />
                <ChakraLink as={Link} href="/yoga">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>SEE YOGA</Button>
                </ChakraLink>
              </VStack>
            </ChakraLink>

            <VStack align="flex-start" spacing={6} w="593px">
              <Text textAlign="left" fontSize="36px" fontWeight="bold"
                color="#F8CDF9" _hover={{color:"#9F08A2"}}>
                <ChakraLink as={Link} href="/yoga">YOGA</ChakraLink></Text>
              <Text textAlign="left" fontSize="27px" color="#B895B9">
                YOGA allows us to see and feed our bodies that are not physical.
                Our heart-body (emotions), our mind-body (thoughts),
                our spirit-body (energy), our soul-body (highest and truest Self).
                Yoga is an ancient, global tradition that has been constrained
                and packaged into a relaxation or exercise routine, especially in
                the West, where the seeds of domination, exploitation and colonization
                have given rise to capitalism, thankfully now in rapid decline.
                We need to delve more deeply into the practice of Yoga beyond
                how it may serve us and into the emotional, mental and energetic
                realms for greater Peace, Love, Joy, Balance and Gratitude.
              </Text>
            </VStack>
          </Flex>

          <Flex>
            <ChakraLink as={Link} href="/art">
              <VStack align="center" _hover={{cursor:"pointer"}} mr={6} spacing={4}>
                <Image w={327} borderRadius="full" mt={4}
                  src="/img/MasterNatarajGArtSq.jpg"
                  alt="Master Nataraj G Art"
                  title="Master Nataraj G Art"
                  boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
                  border="0.1618rem solid #F2B90B"
                  _hover={{
                    boxShadow: "0 0 10px 3px rgba(48,9,49,0.99)",
                    border: "0.1618rem solid #9F08A2"
                  }}
                />
                <ChakraLink as={Link} href="/art">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>SEE ART</Button>
                </ChakraLink>
              </VStack>
            </ChakraLink>

            <VStack align="flex-start" spacing={6} w="593px">
              <Text textAlign="left" fontSize="36px" fontWeight="bold"
                color="#F8CDF9" _hover={{color:"#9F08A2"}}>
                <ChakraLink as={Link} href="/art">ART</ChakraLink></Text>
              <Text textAlign="left" fontSize="27px" color="#B895B9">
                ART feeds the heart, mind, spirit and soul, which in turn heals
                and changes our physical bodies. Let us organize our selves and
                our creative action for the greatest Peace, Love, Joy, Balance
                and Gratitude, shall we?
              </Text>
            </VStack>
          </Flex>

          <Center>
            <Image src="/img/hummingbirdDivider.png" w="600px" />
          </Center>

          <Flex align="center" justify="flex-end">
            <VStack ml={36}>
              <Text textAlign="center" fontSize="27px" color="#B895B9">Nataraj G
                revealed to me the most beautiful flower with the sweetest nectar
                this world has to offer. Bless you child. Thank you.</Text>
              <Text fontFamily="Georgia,serif" fontSize="25px" color="#B895B9"><em>In Love, Grandmother Gloria Arellanes</em></Text>
            </VStack>
            <Image w={222} borderRadius="full"
              src="/img/inlove/00gmagloria.jpg"
              alt="Grandmother Gloria Arellanes"
              boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
              border="0.1618rem solid #F2B90B"
            />
          </Flex>

          <Flex align="center">
            <Image w={222} borderRadius="full"
              src="/img/inlove/13lydiaponce.jpg"
              alt="Lydia Poncé"
              boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
              border="0.1618rem solid #F2B90B"
            />
            <VStack ml={4}>
              <Text textAlign="center" fontSize="27px" color="#B895B9">The truth
                serum works for Master Nataraj G<br/>
                because Master Nataraj G is the truth.
              </Text>
              <Text fontFamily="Georgia,serif" fontSize="25px"
                color="#B895B9"><em>In Love, Lydia Poncé</em></Text>
            </VStack>
          </Flex>

          <Flex align="center" justify="flex-end">
            <VStack mr={4}>
              <Text textAlign="center" fontSize="27px" color="#B895B9">master
                nataraj g revealed to me that<br/>/he/ is the keeper of /my/ word.
              </Text>
              <Text fontFamily="Georgia,serif" fontSize="25px"
                color="#B895B9"><em>in love, adrienne maree brown</em></Text>
            </VStack>
            <Image w={222} borderRadius="full"
              src="/img/inlove/09amb.jpg"
              alt="adrienne maree brown"
              boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
              border="0.1618rem solid #F2B90B"
            />
          </Flex>

          <Center>
            <Image src="/img/hummingbirdDivider.png" w="600px" />
          </Center>

          <Center>
            <Image src="/img/MasterNatarajGLandMaachliGang.jpg" w={600} opacity="0.69" />
          </Center>
        </Stack>
      </Flex>
    </MNGLayout>
  )
}
