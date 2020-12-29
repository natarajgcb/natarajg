import MNGLayout from '../../components/mnglayout'
import {
  Flex, Box, Center,
  Image, Text, Heading,
  Button,
  Stack, VStack, HStack,
  Link as ChakraLink
} from '@chakra-ui/react'
import Link from 'next/link'

export default function Eucalyptus() {
  return (
    <MNGLayout title="EUCALYPTUS">
      <Flex w={960} maxW={960} mx="auto">
        <Stack spacing={24} mx="auto">
          <Image w={600} mx="auto" src="/img/land/MasterNatarajGEucalyptus.jpg"
            alt="Master Nataraj G Eucalyptus"
            title="Master Nataraj G Eucalyptus"
            boxShadow="0 0 90px 10px rgba(48,9,49,0.69)" />

          <Box textAlign="center">
            <Heading as="h1" fontSize="108px" fontWeight="400" color="#E652E9">EUCALYPTUS</Heading>
            <Heading as="h2" fontSize="63px" fontWeight="400" color="#B895B9">HEALING HOLIDAY 2020</Heading>
            <Text fontSize="27px" color="#B895B9" mt={4}>
              A glorious, blessed and healing holiday season to you and your
              family. Our relative, the Eucalyptus Tree, exceptionally healing
              for our respiratory systems, is telling us we are amazing, beautiful,
              Infinite Beings that deserve to breathe clean, fresh air. To be one
              with the rhythm and flow of life.
            </Text>
          </Box>

          <Center>
            <Image w={360} mx="auto" src="/img/land/MasterNatarajGEucalyptusLeaf.jpg"
              alt="Master Nataraj G Eucalyptus Leaf"
              title="Master Nataraj G Eucalyptus Leaf"
              boxShadow="0 0 90px 10px rgba(48,9,49,0.69)" />
          </Center>

          <Center>
            <Text textAlign="center" fontSize="36px" fontWeight="bold"
              color="#F8CDF9">
              Enjoy healing Eucalyptus Leaves Master Nataraj G<br/>has hand-picked,
              cleansed and prepared for You in a<br/>TEA, VAPOR BATH or BURNED DRY
            </Text>
          </Center>

          <Flex>
            <VStack align="flex-end" spacing={6} w="593px" mr={6}>
              <Text textAlign="right" fontSize="36px" fontWeight="bold"
                color="#F8CDF9">TEA</Text>
              <Text textAlign="right" fontSize="27px" color="#B895B9">
                Sooth your spirit, sooth your soul from the inside out with this
                healing light tea. To prepare, choose how many cups you would
                like to make: one leaf, one cup &mdash; Mother Nature makes it
                easy for us.
              </Text>
              <Text textAlign="right" fontSize="27px" color="#B895B9">
                Hold the whole dry Eucalyptus Leaf over an empty cup. Fold in half
                so the top tip of the leaf touches the stem. You will hear, see and feel
                some crunching as the leaf snaps and releases a refreshing
                fragrance into the air. Enjoy as you hold the now two pieces of
                leaf in your fingers. Fold in half again in the same direction so
                the two halves of the leaf become four, that are half as large.
                Repeat this folding in half until you cannot fold any further and the
                pieces are as small as you can make them, likely about a
                centimeter in width. You may feel free to continue to break
                the leaf into smaller pieces, as you wish.
              </Text>
              <Text textAlign="right" fontSize="27px" color="#B895B9">
                Gently place the bits of Eucalyptus Leaf into your empty cup.
                Pour fresh, clean, very hot boiling water over the leaves and
                cover for at least 10 minutes.
              </Text>
              <Text textAlign="right" fontSize="27px" color="#B895B9">
                After the steeping is complete, remove the cover to reveal the
                beautiful golden-green color of the tea as the leaves naturally
                settle at the bottom of the cup. The leaves fully soaking and
                falling to the bottom of the cup indicate that the tea is done.
                Again, Mother Nature signals to us how to play with her for the
                greatest joy. You may filter the leaves if you wish, though the
                leaves are heavy and clean enough to simply sit at the bottom of
                the cup while you enjoy the tea above.
              </Text>
            </VStack>

            <VStack spacing={6}>
              <Image w={327} h={327} borderRadius="full" mt={4}
                src="/img/land/MasterNatarajGEucalyptusTea0.jpg"
                alt="Master Nataraj G Eucalyptus Tea"
                title="Master Nataraj G Eucalyptus Tea"
                boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
                border="0.1618rem solid #F2B90B"
              />
              <Image w={327} h={327} borderRadius="full" mt={4}
                src="/img/land/MasterNatarajGEucalyptusTea1.jpg"
                alt="Master Nataraj G Eucalyptus Tea"
                title="Master Nataraj G Eucalyptus Tea"
                boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
                border="0.1618rem solid #F2B90B"
              />
              <Image w={327} h={327} borderRadius="full" mt={4}
                src="/img/land/MasterNatarajGEucalyptusTea3.jpg"
                alt="Master Nataraj G Eucalyptus Tea"
                title="Master Nataraj G Eucalyptus Tea"
                boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
                border="0.1618rem solid #F2B90B"
              />
              <Image w={327} h={327} borderRadius="full" mt={4}
                src="/img/land/MasterNatarajGEucalyptusTea4.jpg"
                alt="Master Nataraj G Eucalyptus Tea"
                title="Master Nataraj G Eucalyptus Tea"
                boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
                border="0.1618rem solid #F2B90B"
              />
            </VStack>
          </Flex>

          <Flex>
            <Image w={327} h={327} borderRadius="full" mt={4}
              src="/img/yoga/MNGBreathTraining.jpg"
              alt="Master Nataraj G Eucalyptus Tea"
              title="Master Nataraj G Eucalyptus Tea"
              boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
              border="0.1618rem solid #F2B90B"
            />

            <VStack align="flex-start" spacing={6} w="593px" ml={6}>
              <Text textAlign="left" fontSize="36px" fontWeight="bold"
                color="#F8CDF9">VAPOR BATH</Text>
              <Text textAlign="left" fontSize="27px" color="#B895B9">
                Place Eucalyptus Leaf, whole or fragmented, in an open pot of boiling water,
                your daily shower or a hot bath to inhale the healing vapor of
                this beautiful, refreshing and cleansing relative.
              </Text>
              <Text textAlign="left" fontSize="27px" color="#B895B9">
                Your sinuses will be cleared. Your eyes will be refreshed and more
                open, your throat and lungs will speak and breathe happier.
              </Text>
            </VStack>
          </Flex>

          <Flex>
            <VStack align="flex-end" spacing={6} w="593px" mr={6}>
              <Text textAlign="right" fontSize="36px" fontWeight="bold"
                color="#F8CDF9">BURNED DRY</Text>
              <Text textAlign="right" fontSize="27px" color="#B895B9">
                Bring a warm flame to the tip of your Eucalyptus Leaf until it
                catch a fire and stay lit. Enjoy a cleansed aura, a deeper sense
                of mental clarity and increased respiratory health.
              </Text>
              <Text textAlign="right" fontSize="27px" color="#B895B9">
                As the smoke that rises is from direct burning, do not inhale
                directly or hold too closely to your eyes. Hold at arms length
                from your face.
              </Text>
            </VStack>

            <Image w={327} h={327} borderRadius="full" mt={4}
              src="/img/land/MasterNatarajGEucalyptusBurn.jpg"
              alt="Master Nataraj G Eucalyptus Burning Dry"
              title="Master Nataraj G Eucalyptus Burning Dry"
              boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
              border="0.1618rem solid #F2B90B"
            />
          </Flex>

          <Center>
            <Image w={360} mx="auto" src="/img/land/MasterNatarajGEucalyptusVibration.jpg"
              alt="Master Nataraj G Eucalyptus Vibration"
              title="Master Nataraj G Eucalyptus Vibration" />
          </Center>

          <VStack spacing={0}>
            <Box w={600}>
              <Heading textAlign="left" as="h4" fontSize="36px" fontWeight="700"
                color="#B895B9">HEALTH BENEFITS</Heading>
              <Text fontSize="18px" color="#B895B9"><em>Research
                backed by Master Nataraj G's
                Community and <u><ChakraLink as={Link}
                  href="https://www.healthline.com/nutrition/eucalyptus-leaves"
                  title="View Healthline.com Research on Eucalyptus Leaves">Healthline.com</ChakraLink></u></em>
              </Text>
            </Box>
            <Center w={600}>
              <Text textAlign="left" fontSize="27px" color="#B895B9" mt={6}>
                All parts of our dear relative, the Eucalyptus Tree, are
                exceptionally healing for our entire respiratory systems:
                healthier, happier breathing, smelling, tasting, eating,
                swallowing and circulating life-giving Oxygen throughout our
                entire being. Following are a few health benefits you will enjoy
                with your Eucalyptus Leaves:
                <br/><br/> • <strong>heals respiratory ailments</strong>
                <br/><br/> • <strong>improves mental clarity</strong>
                <br/><br/> • <strong>relieves cold symptoms</strong>
                <br/><br/> • <strong>reduces pain</strong>
                <br/><br/> • <strong>promotes relaxation</strong>
                <br/><br/> • <strong>keeps your teeth and gums healthy</strong>

                <br/><br/>Do you feel other health benefits when interacting with
                Eucalyptus Leaves? <u><ChakraLink as={Link}
                  href="mailto:nataraj.g@protonmail.com?subject=Eucalyptus%20Leaf%20Experience">Drop
                  us a line</ChakraLink></u> and let us know.
              </Text>
            </Center>
          </VStack>

          <Center>
            <Image w={360} mx="auto" src="/img/land/MasterNatarajGEucalyptusEye.jpg"
              alt="Master Nataraj G Eucalyptus Eye"
              title="Master Nataraj G Eucalyptus Eye" />
          </Center>

          <VStack spacing={9}>
            <VStack w={600} align="flex-start" justify="center">
              <Heading textAlign="left" as="h4" fontSize="36px" fontWeight="700"
                color="#B895B9">OUR PROCESS</Heading>
              <Text fontSize="18px" color="#B895B9"><em>Eucalyptus is native to
                Australia. Ours is harvested locally in the Westwood neighborhood
                of Los Angeles, California on Tongvaland.</em>
              </Text>
            </VStack>

            <VStack align="center" justify="center">
              <Text textAlign="left" fontSize="27px" color="#B895B9">
                CEREMONY
              </Text>
              <Image w={360} src="/img/land/euc/0ceremony.jpeg"
                alt="Master Nataraj G Eucalyptus Ceremony"
                title="Master Nataraj G Eucalyptus Ceremony" />
              <Text textAlign="left" fontSize="16px" color="#B895B9">
                We honor the land, our ancestors, our Selves,<br/>the Spirit of
                Eucalyptus and All Our Relations,<br/>ॐ शांति प्यार: Om Shanti Pyar: Divine Peace Love
              </Text>
            </VStack>

            <VStack align="center" justify="center">
              <Text textAlign="left" fontSize="27px" color="#B895B9">
                GARDEN
              </Text>
              <Image w={360} src="/img/land/euc/1garden.jpeg"
                alt="Master Nataraj G Eucalyptus Garden"
                title="Master Nataraj G Eucalyptus Garden" />
              <Text textAlign="left" fontSize="16px" color="#B895B9">
                Where we rest, restore, rejuvenate,<br/>connect and learn in Peace
              </Text>
            </VStack>

            <VStack align="center" justify="center">
              <Text textAlign="left" fontSize="27px" color="#B895B9">
                CONNECT
              </Text>
              <Center>
                <Box>
                  <Image w={320} src="/img/land/euc/2eucalyptusSpirit.jpeg"
                    alt="Master Nataraj G Eucalyptus Spirit"
                    title="Master Nataraj G Eucalyptus Spirit" />
                  <Text textAlign="left" fontSize="16px" color="#B895B9">
                    We hear the Eucalyptus Tree talk:<br/>"We will protect you"
                  </Text>
                </Box>
                <Box>
                  <Image w={320} src="/img/land/euc/2eucalyptusTalks.jpeg"
                    alt="Master Nataraj G Eucalyptus Talks"
                    title="Master Nataraj G Eucalyptus Talks" />
                  <Text textAlign="left" fontSize="16px" color="#B895B9">
                    We hear her tell us: "We speak all<br/>languages"
                    (both in Hindi and in English)
                  </Text>
                </Box>
                <Box>
                  <Image w={320} src="/img/land/euc/2purpleOne.jpeg"
                    alt="Master Nataraj G Eucalyptus Purple One"
                    title="Master Nataraj G Eucalyptus Purple One" />
                  <Text textAlign="left" fontSize="16px" color="#B895B9">
                    <em>The Purple One Sees You<br/>The Purple One Loves You</em>
                  </Text>
                </Box>
              </Center>
            </VStack>

            <VStack align="center" justify="center">
              <Text textAlign="left" fontSize="27px" color="#B895B9">
                COLLECT
              </Text>
              <Image w={360} src="/img/land/euc/3collectGifts.jpg"
                alt="Master Nataraj G Eucalyptus Collect Gifts"
                title="Master Nataraj G Eucalyptus Collect Gifts" />
              <Text textAlign="left" fontSize="16px" color="#B895B9">
                After a fall windstorm, she drops entire branches<br/>
                amidst many individual leaves, freely at our feet
              </Text>
            </VStack>

            <VStack align="center" justify="center">
              <Text textAlign="left" fontSize="27px" color="#B895B9">
                CLEANSE & DRY
              </Text>
              <Center>
                <Box>
                  <Image w={360} src="/img/land/euc/4cleanse.jpeg"
                    alt="Master Nataraj G Eucalyptus Cleanse"
                    title="Master Nataraj G Eucalyptus Cleanse" />
                  <Text textAlign="left" fontSize="16px" color="#B895B9">
                    We pick and hand-bathe each leaf, ensuring<br/>
                    they are clean and ready for your enjoyment
                  </Text>
                </Box>
                <Box>
                  <Image w={360} src="/img/land/euc/4dry.jpeg"
                    alt="Master Nataraj G Eucalyptus Dry"
                    title="Master Nataraj G Eucalyptus Dry" />
                  <Text textAlign="left" fontSize="16px" color="#B895B9">
                    After their baths, each individual leaf<br/>
                    is air-dried naturally&mdash;no chemicals
                  </Text>
                </Box>
              </Center>
            </VStack>

            <VStack align="center" justify="center">
              <Text textAlign="left" fontSize="27px" color="#B895B9">
                BUNDLE
              </Text>
              <Image w={360} src="/img/land/euc/5bundle.jpeg"
                alt="Master Nataraj G Eucalyptus Bundle"
                title="Master Nataraj G Eucalyptus Bundle" />
              <Text textAlign="left" fontSize="16px" color="#B895B9">
                Sacred thread to bind the leaves and seal the<br/>
                entire process for you to enjoy to the max
              </Text>
            </VStack>

          </VStack>

          <Center>
            <Image src="/img/hummingbirdDivider.png" w="600px" />
          </Center>

          <Flex align="center">
            <Image w={222} borderRadius="full"
              src="/img/inlove/07davidbyrne.jpg"
              alt="David Byrne"
              boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
              border="0.1618rem solid #F2B90B"
            />
            <VStack ml={4}>
              <Text textAlign="center" fontSize="27px" color="#B895B9">We always
                look forward to what<br/>Master Nataraj G is cooking up next.
              </Text>
              <Text fontFamily="Georgia,serif" fontSize="25px"
                color="#B895B9"><em>In Love, David Byrne</em></Text>
            </VStack>
          </Flex>

          <Flex align="center" justify="flex-end">
            <VStack mx={4}>
              <Text textAlign="center" fontSize="27px" color="#B895B9">Damn good
                hooks. Master Nataraj G<br/>got some DAMN. GOOD. HOOKS.
              </Text>
              <Text fontFamily="Georgia,serif" fontSize="25px"
                color="#B895B9"><em>IN LOVE, YOUR BROTHER, SPIKE LEE</em></Text>
            </VStack>
            <Image w={222} borderRadius="full"
              src="/img/inlove/08spikelee.jpg"
              alt="Spike Lee"
              boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
              border="0.1618rem solid #F2B90B"
            />
          </Flex>

          <Flex align="center">
            <Image w={222} borderRadius="full"
              src="/img/inlove/03jack.jpg"
              alt="Jack Nicholson"
              boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
              border="0.1618rem solid #F2B90B"
            />
            <VStack ml={4}>
              <Text textAlign="center" fontSize="27px" color="#B895B9">Master Nataraj G
                is capturing<br/>pure beauty with every bite.</Text>
              <Text fontFamily="Georgia,serif" fontSize="25px"
                color="#B895B9"><em>In Love, Jack Nicholson</em></Text>
            </VStack>
          </Flex>

          <Center>
            <Image src="/img/hummingbirdDivider.png" w="600px" />
          </Center>

        </Stack>
      </Flex>
    </MNGLayout>
  )
}
