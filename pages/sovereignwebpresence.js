import MNGLayout from '../components/mnglayout'
import {
  Flex, Box, Center,
  Image, Text, Heading,
  Button,
  Stack, VStack,
  Link as ChakraLink
} from '@chakra-ui/react'
import Link from 'next/link'

export default function SovereignWebPresence() {
  return (
    <MNGLayout title="SOVEREIGN WEB PRESENCE">
      <Flex w={960} maxW={960} mx="auto">
        <Stack spacing={24} mx="auto">
          <Image w={600} mx="auto" src="/img/art/1MasterNatarajGTakingOff.jpg"
            alt="Master Nataraj G Sovereign Web Presence Art"
            title="Master Nataraj G Sovereign Web Presence Art"
            boxShadow="0 0 90px 10px rgba(48,9,49,0.69)" />
          <Box>
            <Heading textAlign="center" as="h2" fontSize="63px" fontWeight="400"
              color="#B895B9">SOVEREIGN WEB PRESENCE</Heading>
            <Text textAlign="left" fontSize="27px" color="#B895B9" mt={4}>
              संप्रभुता
              <br/><strong>sovereignty</strong> noun
              <br/>supreme power or authority: <em>how can we hope to wrest
              sovereignty away from the oligarchy and back to the people?</em>
              <br/>• the authority of a state to govern itself or another state: <em>national sovereignty</em>.
              <br/>• a self-governing state.
              <br/><br/>The above definition is from Webster's English Dictionary.
              As a colonial force in this world, English carries with it a layer
              of violence and oppression. In this definition, we see sovereignty
              being very closely tied to statehood, governance and hierarchy. There is no
              mention of Natural Order, Cosmic Law or Divine Alignment &mdash;
              the notion that we are born sovereign, we are never apart from an
              ever-present self-governing state. What are our bodies anyway?
              How about: <em>The People are already sovereign.</em>
              <br/><br/>Master Nataraj G is in full awareness of supreme power
              and authority and practices to remain in this awareness, act from
              this awareness at all times, in all places and share it with as
              many people as humanly possible.
              <br/><br/>This web presence is a culmination and expression of free
              and open technologies deployed into the <strong>decentralized web</strong>,
              a distributed architecture for the Internet that results in sustainable
              and self-healing security, privacy and autonomy for all Creators.
              The ethos, principles and foundational technologies of decentralization
              prevent centralized control over individual governance and value.
              <br/><br/>No nation, government, bank, societal norm, cultural practice,
              or false border of any kind, physical or metaphysical, in the mind,
              in our language or in our laws, may limit the Infinite Supreme Power,
              Authority and Value that we all intrinsically embody.
            </Text>
          </Box>

          <Flex>
            <VStack align="flex-end" spacing={6} w="593px" mr={6}>
              <Text textAlign="right" fontSize="36px" fontWeight="bold"
                color="#F8CDF9" _hover={{color:"#9F08A2"}}>
                <ChakraLink as={Link}
                  href="https://checkout.square.site/buy/SMTLM436Z4QUS5U5ROPXEBF7">Sovereign Tech Consult, 1 hour</ChakraLink></Text>
              <Text textAlign="right" fontSize="27px" color="#B895B9">
                Want to express your Self freely, forever? Let's talk.
              </Text>
              <Text textAlign="right" fontSize="27px" color="#B895B9">
                Connect with Master Nataraj G for a one hour conversation to share
                your creative practice and how Sovereign Technologies can work
                for you to sustain a lifestyle based solely on the activities that
                bring you the most Peace, Love, Joy, Balance and Gratitude. After
                the conversation, a customized guide and resources are created
                and yours to keep.
              </Text>
              <Text textAlign="right" fontSize="27px" color="#B895B9">
                All sessions may be conducted virtually.
              </Text>
            </VStack>

            <ChakraLink as={Link}
              href="https://checkout.square.site/buy/SMTLM436Z4QUS5U5ROPXEBF7">
              <VStack align="center" spacing={4} _hover={{cursor:"pointer"}}>
                <Image w={327} borderRadius="full" mt={4}
                  src="/img/MasterNatarajGConsult.jpg"
                  alt="Master Nataraj G Sovereign Tech Consult"
                  title="Master Nataraj G Sovereign Tech Consult"
                  boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
                  border="0.1618rem solid #F2B90B"
                  _hover={{
                    boxShadow: "0 0 10px 3px rgba(48,9,49,0.99)",
                    border: "0.1618rem solid #9F08A2"
                  }}
                />
                <Text color="#F8CDF9" _hover={{color:"#9F08A2"}} fontSize="27px">
                  USD <Text as="span" fontWeight="bold" fontSize="36px">$139</Text>
                </Text>
                <ChakraLink as={Link} href="https://checkout.square.site/buy/SMTLM436Z4QUS5U5ROPXEBF7">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>ACCEPT</Button>
                </ChakraLink>
              </VStack>
            </ChakraLink>
          </Flex>

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
