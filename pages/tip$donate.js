import MNGLayout from '../components/mnglayout'
import {
  Flex, Box, Center,
  Image, Text, Heading,
  Button,
  Stack, VStack, HStack,
  Link as ChakraLink
} from '@chakra-ui/react'
import Link from 'next/link'

import styles from '../components/mngheader.module.scss'

export default function Tip$Donate() {
  return (
    <MNGLayout title="TIP $ DONATE">
      <Flex w={960} maxW={960} mx="auto">
        <Stack spacing={24} mx="auto">
          <Image w={600} mx="auto" src="/img/GAURALOK.JPG" borderRadius="full"
            className={styles.gauralok}
            boxShadow="0 0 90px 10px rgba(48,9,49,0.69)"
            border="0.1618rem solid #300931"
            alt="Master Nataraj G GAURALOK" title="Master Nataraj G GAURALOK" />

          <Box textAlign="center">
            <Heading as="h1" fontSize="108px" fontWeight="400" color="#E652E9">दान</Heading>
            <Heading as="h2" fontSize="63px" fontWeight="400" color="#B895B9">TIP $ DONATE</Heading>
            <Text fontSize="27px" color="#B895B9" display="none">
              Independent Spiritual and Creative Practice that serves people and
              planet directly while not producing capitalistic "value" requires
              direct support from community to materially sustain.

              <br/>Master Nataraj G has lived without secure housing or regular income for years and is
              constantly serving all beings to collectively build a New World
              of Peace, Love, Joy, Balance and Gratitude regardless of
              monetary gain.

              <br/>Your donation supports housing, food and
              spiritual practice for Master Nataraj G and his family.
            </Text>
          </Box>

          <Center>
            <iframe
              width="600px" height="1200px"
              src="https://masternatarajg.giveforms.com/donate"
            ></iframe>
          </Center>

          <Center>
            <Image src="/img/hummingbirdDivider.png" w="600px" />
          </Center>

          <Flex align="center" justify="flex-end">
            <VStack ml={36}>
              <Text textAlign="center" fontSize="27px" color="#B895B9">Master Nataraj G
                revealed to me the most beautiful flower with the sweetest nectar
                this world has to offer. Bless you child. Thank you.</Text>
              <Text fontFamily="Georgia,serif" fontSize="25px" color="#B895B9"><em>In Love, Grandmother Gloria Arellanes</em></Text>
              <HStack spacing={4} pt={2}>
                <ChakraLink as={Link} href="/land">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>SEE LAND</Button>
                </ChakraLink>
                <ChakraLink as={Link} href="/food">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>SEE FOOD</Button>
                </ChakraLink>
              </HStack>
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
              src="/img/inlove/01stevie.jpg"
              alt="Stevie Wonder"
              boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
              border="0.1618rem solid #F2B90B"
            />
            <VStack ml={4}>
              <Text textAlign="center" fontSize="27px" color="#B895B9">Sound
                can manifest REALITY.<br/>Sound can change MATTER.<br/>Master Nataraj G revealed to me.</Text>
              <Text fontFamily="Georgia,serif" fontSize="25px" color="#B895B9"><em>In Love, Stevie Wonder</em></Text>
              <HStack spacing={4} pt={2}>
                <ChakraLink as={Link} href="/art">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>SEE ART</Button>
                </ChakraLink>
                <ChakraLink as={Link} href="/yoga">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>SEE YOGA</Button>
                </ChakraLink>
              </HStack>
            </VStack>
          </Flex>

          <Flex align="center" justify="flex-end">
            <VStack ml={36}>
              <Text textAlign="center" fontSize="27px" color="#B895B9">No one on
                this Earth is doing what Master Nataraj G is doing for the Divine
                Energies of<br/>Peace, Love, Joy, Balance and Gratitude.</Text>
              <Text fontFamily="Georgia,serif" fontSize="25px"
                color="#B895B9"><em>In Love, Sadhguru</em></Text>
              <HStack spacing={4} pt={2}>
                <ChakraLink as={Link} href="/yoga">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>SEE YOGA</Button>
                </ChakraLink>
                <ChakraLink as={Link} href="/food">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>SEE FOOD</Button>
                </ChakraLink>
                <ChakraLink as={Link} href="/art">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>SEE ART</Button>
                </ChakraLink>
              </HStack>
            </VStack>
            <Image w={222} borderRadius="full"
              src="/img/inlove/02sadhguru.jpg"
              alt="Sadhguru"
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
              <HStack spacing={4} pt={2}>
                <ChakraLink as={Link} href="/food">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>SEE FOOD</Button>
                </ChakraLink>
                <ChakraLink as={Link} href="/art">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>SEE ART</Button>
                </ChakraLink>
              </HStack>
            </VStack>
          </Flex>

          <Flex align="center" justify="flex-end">
            <VStack mx={4}>
              <Text textAlign="center" fontSize="27px" color="#B895B9">Peaceful
                warrior, Master Nataraj G is.<br/>The truth is, Master Nataraj G
                is afraid of nothing.
              </Text>
              <Text fontFamily="Georgia,serif" fontSize="25px"
                color="#B895B9"><em>In Love, L Shankar</em></Text>
              <HStack spacing={4} pt={2}>
                <ChakraLink as={Link} href="/art">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>SEE ART</Button>
                </ChakraLink>
                <ChakraLink as={Link} href="/yoga">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>SEE YOGA</Button>
                </ChakraLink>
              </HStack>
            </VStack>
            <Image w={222} borderRadius="full"
              src="/img/inlove/04lshankar.jpg"
              alt="L Shankar"
              boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
              border="0.1618rem solid #F2B90B"
            />
          </Flex>

          <Flex align="center">
            <Image w={222} borderRadius="full"
              src="/img/inlove/05mirag.jpg"
              alt="Mira Nair"
              boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
              border="0.1618rem solid #F2B90B"
            />
            <VStack ml={4}>
              <Text textAlign="center" fontSize="27px" color="#B895B9">Master
                Nataraj G is extraordinary.<br/>His grasp of life is unending.
              </Text>
              <Text fontFamily="Georgia,serif" fontSize="25px"
                color="#B895B9"><em>In Love, Mira Nair</em></Text>
              <HStack spacing={4} pt={2}>
                <ChakraLink as={Link} href="/art">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>SEE ART</Button>
                </ChakraLink>
                <ChakraLink as={Link} href="/yoga">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>SEE YOGA</Button>
                </ChakraLink>
              </HStack>
            </VStack>
          </Flex>

          <Flex align="center" justify="flex-end">
            <VStack mx={4}>
              <Text textAlign="center" fontSize="27px" color="#B895B9">That
                meditation with Master Nataraj G<br/>does a mind, body, soul and
                spirit good!
              </Text>
              <Text fontFamily="Georgia,serif" fontSize="25px"
                color="#B895B9"><em>In Love, Ava DuVernay</em></Text>
              <HStack spacing={4} pt={2}>
                <ChakraLink as={Link} href="/yoga">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>SEE YOGA</Button>
                </ChakraLink>
                <ChakraLink as={Link} href="/art">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>SEE ART</Button>
                </ChakraLink>
              </HStack>
            </VStack>
            <Image w={222} borderRadius="full"
              src="/img/inlove/06avag.jpg"
              alt="Ava DuVernay"
              boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
              border="0.1618rem solid #F2B90B"
            />
          </Flex>

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
              <HStack spacing={4} pt={2}>
                <ChakraLink as={Link} href="/food">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>SEE FOOD</Button>
                </ChakraLink>
                <ChakraLink as={Link} href="/art">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>SEE ART</Button>
                </ChakraLink>
              </HStack>
            </VStack>
          </Flex>

          <Flex align="center" justify="flex-end">
            <VStack mx={4}>
              <Text textAlign="center" fontSize="27px" color="#B895B9">Damn good
                hooks. Master Nataraj G<br/>got some DAMN. GOOD. HOOKS.
              </Text>
              <Text fontFamily="Georgia,serif" fontSize="25px"
                color="#B895B9"><em>IN LOVE, YOUR BROTHER, SPIKE LEE</em></Text>
              <HStack spacing={4} pt={2}>
                <ChakraLink as={Link} href="/art">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>SEE ART</Button>
                </ChakraLink>
                <ChakraLink as={Link} href="/yoga">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>SEE YOGA</Button>
                </ChakraLink>
              </HStack>
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
              src="/img/inlove/09amb.jpg"
              alt="adrienne maree brown"
              boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
              border="0.1618rem solid #F2B90B"
            />
            <VStack ml={4}>
              <Text textAlign="center" fontSize="27px" color="#B895B9">master
                nataraj g revealed to me that<br/>/he/ is the keeper of /my/ word.
              </Text>
              <Text fontFamily="Georgia,serif" fontSize="25px"
                color="#B895B9"><em>in love, adrienne maree brown</em></Text>
              <HStack spacing={4} pt={2}>
                <ChakraLink as={Link} href="/land">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>SEE LAND</Button>
                </ChakraLink>
                <ChakraLink as={Link} href="/art">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>SEE ART</Button>
                </ChakraLink>
              </HStack>
            </VStack>
          </Flex>

          <Flex align="center" justify="flex-end">
            <VStack mx={4}>
              <Text textAlign="center" fontSize="27px" color="#B895B9">बोधिसत्त्व.
                Bodhisattva. Master Nataraj G is.
              </Text>
              <Text fontFamily="Georgia,serif" fontSize="25px"
                color="#B895B9"><em>In Love, Lama Rod Owens</em></Text>
              <HStack spacing={4} pt={2}>
                <ChakraLink as={Link} href="/yoga">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>SEE YOGA</Button>
                </ChakraLink>
                <ChakraLink as={Link} href="/land">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>SEE LAND</Button>
                </ChakraLink>
              </HStack>
            </VStack>
            <Image w={222} borderRadius="full"
              src="/img/inlove/10lamarod.jpg"
              alt="Lama Rod Owens"
              boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
              border="0.1618rem solid #F2B90B"
            />
          </Flex>

          <Flex align="center">
            <Image w={222} borderRadius="full"
              src="/img/inlove/11brocurtis.jpg"
              alt="Brother Curtis Robertson"
              boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
              border="0.1618rem solid #F2B90B"
            />
            <VStack ml={4}>
              <Text textAlign="left" fontSize="27px" color="#B895B9">Master
                Nataraj G revealed to me<br/>
                that the crown<br/>
                that sits atop our bodies<br/>
                shines like the golden sun.<br/>
                Om mani padme hum.<br/>
                &lt;bowing, brother, bowing&gt;<br/>
              </Text>
              <Text fontFamily="Georgia,serif" fontSize="25px"
                color="#B895B9"><em>In Love, Brother Curtis Robertson</em></Text>
              <HStack spacing={4} pt={2}>
                <ChakraLink as={Link} href="/yoga">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>SEE YOGA</Button>
                </ChakraLink>
                <ChakraLink as={Link} href="/art">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>SEE ART</Button>
                </ChakraLink>
              </HStack>
            </VStack>
          </Flex>

          <Flex align="center" justify="flex-end">
            <VStack mx={4}>
              <Text textAlign="center" fontSize="27px" color="#B895B9">Thank you.
                Love you, Master Nataraj G.
              </Text>
              <Text fontFamily="Georgia,serif" fontSize="25px"
                color="#B895B9"><em>In Love, Will Smith</em></Text>
              <HStack spacing={4} pt={2}>
                <ChakraLink as={Link} href="/food">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>SEE FOOD</Button>
                </ChakraLink>
                <ChakraLink as={Link} href="/yoga">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>SEE YOGA</Button>
                </ChakraLink>
              </HStack>
            </VStack>
            <Image w={222} borderRadius="full"
              src="/img/inlove/12willsmith.jpg"
              alt="Will Smith"
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
              <HStack spacing={4} pt={2}>
                <ChakraLink as={Link} href="/land">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>SEE LAND</Button>
                </ChakraLink>
                <ChakraLink as={Link} href="/food">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>SEE FOOD</Button>
                </ChakraLink>
              </HStack>
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
