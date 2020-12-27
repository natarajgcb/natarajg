import MNGLayout from '../../components/mnglayout'
import {
  Flex, Box, Center,
  Image, Text, Heading,
  Button,
  Stack, VStack,
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
            <Image w={600} mx="auto" src="/img/land/MasterNatarajGEucalyptusSeedPods.jpg"
              borderRadius="full"
              alt="Master Nataraj G Eucalyptus Seed Pods"
              title="Master Nataraj G Eucalyptus Seed Pods"
              boxShadow="0 0 90px 10px rgba(48,9,49,0.69)" />
          </Center>

          <Center>
            <Text textAlign="center" fontSize="36px" fontWeight="bold"
              color="#F8CDF9">
              Enjoy healing Eucalyptus Leaves Master Nataraj G has hand-picked,
              cleansed and prepared for you in one of the following ways
            </Text>
          </Center>

          <Center>
            // be back to it shortly...
          </Center>

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
