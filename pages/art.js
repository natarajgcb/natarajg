import MNGLayout from '../components/mnglayout'
import {
  Flex, Box, Center,
  Image, Text, Heading,
  Button,
  Stack, VStack,
  Link as ChakraLink
} from '@chakra-ui/react'
import Link from 'next/link'

export default function Art() {
  return (
    <MNGLayout title="ART">
      <Flex w={960} maxW={960} mx="auto">
        <VStack spacing={24}>
          <VStack spacing={6}>
            <Box>
              <iframe width="960" height="540" src="https://www.youtube-nocookie.com/embed/0kzJy1-yNtw"
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            </Box>
            <Flex w={960} maxW={960} mx="auto">
              <VStack spacing={2} align="flex-start">
                <Heading as="h2" fontSize="36px" fontWeight="700" color="#B895B9">
                  WAKE UP
                </Heading>
                <Text fontSize="27px" fontWeight="400" color="#B895B9">
                  July 2016
                </Text>
                <Text fontSize="27px" fontWeight="400" color="#B895B9">
                  Short film
                </Text>
              </VStack>
              <Box ml="auto">
                <ChakraLink as={Link} href="/tip$donate">
                  <Button bg="#6E0A70" color="#F8CDF9" px={16}
                    _hover={{ background: "#510653" }}>TIP $</Button>
                </ChakraLink>
              </Box>
            </Flex>
            <VStack spacing={6} align="flex-start">
              <Text fontSize="27px" fontWeight="400" color="#B895B9">
                As we travel to space and develop new civilizations as early as
                2025, we have a novel opportunity to learn from the experiences of
                oppressed and marginalized communities to imagine and build a
                more conscious, peaceful, loving and joyous future.
              </Text>
              <Text fontSize="27px" fontWeight="400" color="#B895B9">
                // Written, directed and edited by<br/>
                Gaurav Cedric Bhatnagar
              </Text>
              <Text fontSize="27px" fontWeight="400" color="#B895B9">
                // Featuring Interviews with<br/>
                Sharon Alexandria<br/>
                Joseph Harper<br/>
                Glenn Harris<br/>
                Leslie Kazadi<br/>
                Lucius O’Connor<br/>
                Ayesha Young
              </Text>
              <Text fontSize="27px" fontWeight="400" color="#B895B9">
                // Music<br/>
                Ima Ima by Sheila Govindarajan<br/>
                Blue Dot by Andy Page<br/>
                New World by L Shankar<br/>
              </Text>
              <Text fontSize="27px" fontWeight="400" color="#B895B9">
                // Production<br/>
                Johanna Caldera<br/>
                Raaj Jadoo<br/>
                Andy Page<br/>
                L Shankar<br/>
                Kevin Kinsella<br/>
                Andrew Laurich<br/>
              </Text>
            </VStack>
          </VStack>

          <VStack spacing={6}>
            <Image w={600} src="/img/art/0MasterNatarajGOutMeditation.jpg"
              alt="Master Nataraj G Out Meditation Art"
              title="Master Nataraj G Out Meditation Art" />
            <Flex w={600} maxW={600} mx="auto">
              <VStack spacing={2} align="flex-start">
                <Heading as="h2" fontSize="36px" fontWeight="700" color="#B895B9">
                  OUT MEDITATION
                </Heading>
                <Text fontSize="27px" fontWeight="400" color="#B895B9">
                  December 2020
                </Text>
                <Text fontSize="27px" fontWeight="400" color="#B895B9">
                  Painting. Oil pastel on acrylic.
                </Text>
              </VStack>
              <Box ml="auto">
                <ChakraLink as={Link} href="/tip$donate">
                  <Button bg="#6E0A70" color="#F8CDF9" px={16}
                    _hover={{ background: "#510653" }}>TIP $</Button>
                </ChakraLink>
              </Box>
            </Flex>
          </VStack>

          <VStack spacing={6}>
            <Image w={600} src="/img/art/1MasterNatarajGTakingOff.jpg"
              alt="Master Nataraj G Taking Off Art"
              title="Master Nataraj G Taking Off Art" />
            <Flex w={600} maxW={600} mx="auto">
              <VStack spacing={2} align="flex-start">
                <Heading as="h2" fontSize="36px" fontWeight="700" color="#B895B9">
                  TAKING OFF
                </Heading>
                <Text fontSize="27px" fontWeight="400" color="#B895B9">
                  December 2020
                </Text>
                <Text fontSize="27px" fontWeight="400" color="#B895B9">
                  Painting. Acrylic paint and spray paint.
                </Text>
              </VStack>
              <Box ml="auto">
                <ChakraLink as={Link} href="/tip$donate">
                  <Button bg="#6E0A70" color="#F8CDF9" px={16}
                    _hover={{ background: "#510653" }}>TIP $</Button>
                </ChakraLink>
              </Box>
            </Flex>
          </VStack>

          <VStack spacing={6}>
            <Image w={960} src="/img/art/2MasterNatarajGInfinitePainting.jpg"
              alt="Master Nataraj G Infinite Painting Art"
              title="Master Nataraj G Infinite Painting Art" />
            <Flex w={960} maxW={960} mx="auto">
              <VStack spacing={2} align="flex-start">
                <Heading as="h2" fontSize="36px" fontWeight="700" color="#B895B9">
                  INFINITE PAINTING
                </Heading>
                <Text fontSize="27px" fontWeight="400" color="#B895B9">
                  December 2020
                </Text>
                <Text fontSize="27px" fontWeight="400" color="#B895B9">
                  Painting. Acrylic paint and spray paint.
                </Text>
              </VStack>
              <Box ml="auto">
                <ChakraLink as={Link} href="/tip$donate">
                  <Button bg="#6E0A70" color="#F8CDF9" px={16}
                    _hover={{ background: "#510653" }}>TIP $</Button>
                </ChakraLink>
              </Box>
            </Flex>
          </VStack>

          <VStack spacing={6}>
            <Image w={600} src="/img/art/3MasterNatarajGCosmicDancer.jpg"
              alt="Master Nataraj G Cosmic Dancer Art"
              title="Master Nataraj G Cosmic Dancer Art" />
            <Flex w={600} maxW={600} mx="auto">
              <VStack spacing={2} align="flex-start">
                <Heading as="h2" fontSize="36px" fontWeight="700" color="#B895B9">
                  COSMIC DANCER
                </Heading>
                <Text fontSize="27px" fontWeight="400" color="#B895B9">
                  November 2020
                </Text>
                <Text fontSize="27px" fontWeight="400" color="#B895B9">
                  Sketch. Ink on Paper.
                </Text>
              </VStack>
              <Box ml="auto">
                <ChakraLink as={Link} href="/tip$donate">
                  <Button bg="#6E0A70" color="#F8CDF9" px={16}
                    _hover={{ background: "#510653" }}>TIP $</Button>
                </ChakraLink>
              </Box>
            </Flex>
          </VStack>

          <VStack spacing={6}>
            <Image w={960} src="/img/art/4MasterNatarajGAbandonedRestaurantStoryboard.jpg"
              alt="Master Nataraj G Abandoned Restaurant Storyboard Art"
              title="Master Nataraj G Abandoned Restaurant Storyboard Art" />
            <Flex w={960} maxW={960} mx="auto">
              <VStack spacing={2} align="flex-start">
                <Heading as="h2" fontSize="36px" fontWeight="700" color="#B895B9">
                  COVID DREAM 95
                </Heading>
                <Text fontSize="27px" fontWeight="400" color="#B895B9">
                  November 2020
                </Text>
                <Text fontSize="27px" fontWeight="400" color="#B895B9">
                  Storyboard Sketch. Ink on Paper.
                </Text>
              </VStack>
              <Box ml="auto">
                <ChakraLink as={Link} href="/tip$donate">
                  <Button bg="#6E0A70" color="#F8CDF9" px={16}
                    _hover={{ background: "#510653" }}>TIP $</Button>
                </ChakraLink>
              </Box>
            </Flex>
          </VStack>

          <VStack spacing={6}>
            <Image w={600} src="/img/art/5MasterNatarajGTongvaGatekeeper.jpg"
              alt="Master Nataraj G Tongva Gatekeeper Art"
              title="Master Nataraj G Tongva Gatekeeper Art" />
            <Flex w={600} maxW={600} mx="auto">
              <VStack spacing={2} align="flex-start">
                <Heading as="h2" fontSize="36px" fontWeight="700" color="#B895B9">
                  TONGVA GATEKEEPER
                </Heading>
                <Text fontSize="27px" fontWeight="400" color="#B895B9">
                  August 2020
                </Text>
                <Text fontSize="27px" fontWeight="400" color="#B895B9">
                  Channeled Sketch. Ink on Paper.
                </Text>
              </VStack>
              <Box ml="auto">
                <ChakraLink as={Link} href="/tip$donate">
                  <Button bg="#6E0A70" color="#F8CDF9" px={16}
                    _hover={{ background: "#510653" }}>TIP $</Button>
                </ChakraLink>
              </Box>
            </Flex>
          </VStack>

          <VStack spacing={6}>
            <Image w={960} src="/img/art/6MasterNatarajGBodyLoveBellHooks.jpg"
              alt="Master Nataraj G Body Love Art"
              title="Master Nataraj G Body Love Art" />
            <Flex w={960} maxW={960} mx="auto">
              <VStack spacing={2} align="flex-start">
                <Heading as="h2" fontSize="36px" fontWeight="700" color="#B895B9">
                  BODY LOVE
                </Heading>
                <Text fontSize="27px" fontWeight="400" color="#B895B9">
                  July 2020
                </Text>
                <Text fontSize="27px" fontWeight="400" color="#B895B9">
                  Sketch. Ink on Paper.
                </Text>
              </VStack>
              <Box ml="auto">
                <ChakraLink as={Link} href="/tip$donate">
                  <Button bg="#6E0A70" color="#F8CDF9" px={16}
                    _hover={{ background: "#510653" }}>TIP $</Button>
                </ChakraLink>
              </Box>
            </Flex>
          </VStack>

          <VStack spacing={6}>
            <Image w={960} src="/img/art/7MasterNatarajGUnity&Action.jpg"
              alt="Master Nataraj G Unity &amp; Action Art"
              title="Master Nataraj G Unity &amp; Action Art" />
            <Flex w={960} maxW={960} mx="auto">
              <VStack spacing={2} align="flex-start">
                <Heading as="h2" fontSize="36px" fontWeight="700" color="#B895B9">
                  UNITY &amp; ACTION
                </Heading>
                <Text fontSize="27px" fontWeight="400" color="#B895B9">
                  March 2020
                </Text>
                <Text fontSize="27px" fontWeight="400" color="#B895B9">
                  Sketch. Ink on Paper.
                </Text>
              </VStack>
              <Box ml="auto">
                <ChakraLink as={Link} href="/tip$donate">
                  <Button bg="#6E0A70" color="#F8CDF9" px={16}
                    _hover={{ background: "#510653" }}>TIP $</Button>
                </ChakraLink>
              </Box>
            </Flex>
          </VStack>

          <VStack spacing={6} w={960} maxW={960} mx="auto">
            <Heading as="h2" fontSize="36px" fontWeight="700" color="#B895B9">
              SELECTIONS FROM THE SKETCHBOOK
            </Heading>
            <VStack align="center" justify="center">
              <Image w={470} src="/img/art/sketchbook/20tunnel.jpg"
                alt="Master Nataraj G Tunnel Sketch Art"
                title="Master Nataraj G Tunnel Sketch Art" />
              <Image w={470} src="/img/art/sketchbook/19papabear.jpg"
                alt="Master Nataraj G Papa Bear Sketch Art"
                title="Master Nataraj G Papa Bear Sketch Art" />
              <Image w={600} src="/img/art/sketchbook/18defeatingmara.jpg"
                alt="Master Nataraj G Defeating Mara Sketch Art"
                title="Master Nataraj G Defeating Mara Sketch Art" />
              <Image w={960} src="/img/art/sketchbook/17newageoflight.jpg"
                alt="Master Nataraj G New Age of Light Sketch Art"
                title="Master Nataraj G New Age of Light Sketch Art" />
              <Image w={600} src="/img/art/sketchbook/16kalkimoves.jpg"
                alt="Master Nataraj G Kalki Moves Sketch Art"
                title="Master Nataraj G Kalki Moves Sketch Art" />
              <Image w={600} src="/img/art/sketchbook/15robertplant.jpg"
                alt="Master Nataraj G Robert Plant Sketch Art"
                title="Master Nataraj G Robert Plant Sketch Art" />
              <Image w={600} src="/img/art/sketchbook/14motherships.jpg"
                alt="Master Nataraj G Motherships Sketch Art"
                title="Master Nataraj G Motherships Sketch Art" />
              <Image w={960} src="/img/art/sketchbook/13strut.jpg"
                alt="Master Nataraj G Strut Sketch Art"
                title="Master Nataraj G Strut Sketch Art" />
              <Image w={600} src="/img/art/sketchbook/12lightbridge.jpg"
                alt="Master Nataraj G Light Bridge Sketch Art"
                title="Master Nataraj G Light Bridge Sketch Art" />
              <Image w={600} src="/img/art/sketchbook/11hindihand.jpg"
                alt="Master Nataraj G Hindi Hand Sketch Art"
                title="Master Nataraj G Hindi Hand Sketch Art" />
              <Image w={600} src="/img/art/sketchbook/10deviking.jpg"
                alt="Master Nataraj G Devi King Sketch Art"
                title="Master Nataraj G Devi King Sketch Art" />
              <Image w={600} src="/img/art/sketchbook/09sonicboom.jpg"
                alt="Master Nataraj G Sonic Boom Sketch Art"
                title="Master Nataraj G Sonic Boom Sketch Art" />
              <Image w={470} src="/img/art/sketchbook/08natarajhonoring.jpg"
                alt="Master Nataraj G Honoring Nataraj Sketch Art"
                title="Master Nataraj G Honoring Nataraj Sketch Art" />
              <Image w={960} src="/img/art/sketchbook/07ourstudio.jpg"
                alt="Master Nataraj G Our Studio Sketch Art"
                title="Master Nataraj G Our Studio Sketch Art" />
              <Image w={600} src="/img/art/sketchbook/06loveworldhigherandhigher.jpg"
                alt="Master Nataraj G Love World Higher and Higher Sketch Art"
                title="Master Nataraj G Love World Higher and Higher Sketch Art" />
              <Image w={470} src="/img/art/sketchbook/05sketchdimensions.jpg"
                alt="Master Nataraj G Sketch Dimensions Art"
                title="Master Nataraj G Sketch Dimensions Art" />
              <Image w={470} src="/img/art/sketchbook/03selfie.jpg"
                alt="Master Nataraj G Selfie Sketch Art"
                title="Master Nataraj G Selfie Sketch Art" />
              <Image w={600} src="/img/art/sketchbook/02planet.jpg"
                alt="Master Nataraj G Planet Sketch Art"
                title="Master Nataraj G Planet Sketch Art" />
              <Image w={470} src="/img/art/sketchbook/01sawadragonintheclouds.jpg"
                alt="Master Nataraj G Dragon Clouds Sketch Art"
                title="Master Nataraj G Dragon Clouds Sketch Art" />
              <Image w={470} src="/img/art/sketchbook/00watercolorPlay.jpg"
                alt="Master Nataraj G Watercolor Play Sketch Art"
                title="Master Nataraj G Watercolor Play Sketch Art" />
            </VStack>
          </VStack>

        </VStack>
      </Flex>
    </MNGLayout>
  )
}
