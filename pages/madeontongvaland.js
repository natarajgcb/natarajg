import MNGLayout from '../components/mnglayout'
import MNGStripeButton from '../components/mngstripebutton'
import {
  Flex, Box, Center,
  Image, Text, Heading,
  Button,
  Stack, VStack,
  Link as ChakraLink
} from '@chakra-ui/react'
import Link from 'next/link'

export default function MadeOnTongvaland() {
  return (
    <MNGLayout title="MADE ON TONGVALAND">
      <Flex w={960} maxW={960} mx="auto">
        <Stack spacing={24} mx="auto">
          <Image w={600} mx="auto" src="/img/MadeOnTongvaland.jpg" borderRadius="full"
            alt="Made On Tongvaland Seal"
            title="Made On Tongvaland Seal"
            boxShadow="0 0 90px 10px rgba(48,9,49,0.69)" />
          <Box textAlign="center">
            <Heading as="h2" fontSize="63px" fontWeight="400"
              color="#B895B9">MADE ON TONGVALAND</Heading>
            <Text fontSize="27px" color="#B895B9" mt={4}>
              A Movement for Creators of all kinds &mdash;
              <br/><br/>Artists
              <br/>Healers
              <br/>Musicians
              <br/>Dancers
              <br/>Filmmakers
              <br/>Poets
              <br/>Painters
              <br/>Photographers
              <br/>Storytellers
              <br/>Farmers
              <br/>Gardeners
              <br/>Chefs
              <br/>Mystics
              <br/>Writers
              <br/>Architects
              <br/>Designers
              <br/>Explorers
              <br/>Revolutionaries
              <br/>Parents
              <br/>Children
              <br/>The Living
              <br/><br/>creating on Tongva Land &mdash; a.k.a. Los Angeles.
              <br/><br/>We offer this Seal for you to place on your creations
              and join the Made On Tongvaland Community.
            </Text>
          </Box>

          <Flex>
            <ChakraLink as={Link}
              href="https://buy.stripe.com/cN201e5gmfFT0JGdQV">
              <VStack align="center" _hover={{cursor:"pointer"}} mr={6} spacing={4}>
                <Image w={327} borderRadius="full" mt={4}
                  src="/img/MadeOnTongvaland.jpg"
                  alt="Made On Tongvaland Seal"
                  title="Made On Tongvaland Seal"
                  boxShadow="0 0 10px 3px rgba(48,9,49,0.69)"
                  _hover={{
                    boxShadow: "0 0 10px 3px rgba(252,255,0,0.5)"
                  }}
                />
                <Text color="#F8CDF9" _hover={{color:"#9F08A2"}} fontSize="27px">
                  USD <Text as="span" fontWeight="bold" fontSize="36px">$39</Text>
                </Text>
                <ChakraLink as={Link} href="https://buy.stripe.com/cN201e5gmfFT0JGdQV">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>ACCEPT</Button>
                </ChakraLink>
              </VStack>
            </ChakraLink>

            <VStack align="flex-start" spacing={6} w="593px">
              <Text textAlign="left" fontSize="36px" fontWeight="bold"
                color="#F8CDF9" _hover={{color:"#9F08A2"}}>
                <ChakraLink as={Link}
                  href="https://buy.stripe.com/cN201e5gmfFT0JGdQV">Made On Tongvaland Seal</ChakraLink></Text>
              <Text textAlign="left" fontSize="27px" color="#B895B9">
                Download the high resolution, transparent Made On Tongvaland Seal and join the Made On Tongvaland Community. Join other Creators on Tongvaland honoring the land, supporting one another and building for Indigenous Sovereignty, Peace, Love, Joy, Balance and Gratitude for All Our Relations — AHO Mitakuye Oyasin.
              </Text>
              <Text textAlign="left" fontSize="27px" color="#B895B9">
                All funds are put toward growing Native Creators and realizing dreams, visions and intentions shared amongst the Made On Tongvaland Community.
              </Text>
            </VStack>
          </Flex>

          <Center>
            <Image src="/img/hummingbirdDivider.png" w="600px" />
          </Center>

          <Flex align="center" justify="flex-end">
            <VStack ml={36}>
              <Text textAlign="center" fontSize="27px" color="#B895B9">Master Nataraj G
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
            <VStack ml={4}>
              <Text textAlign="center" fontSize="27px" color="#B895B9">Master
                Nataraj G revealed to me<br/>
                that the crown<br/>
                that sits atop our bodies<br/>
                shines like the golden sun.<br/>
                Om mani padme hum.<br/>
                &lt;bowing, brother, bowing&gt;<br/>
              </Text>
              <Text fontFamily="Georgia,serif" fontSize="25px"
                color="#B895B9"><em>In Love, Brother Curtis Robertson</em></Text>
            </VStack>
            <Image w={222} borderRadius="full"
              src="/img/inlove/11brocurtis.jpg"
              alt="Brother Curtis Robertson"
              boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
              border="0.1618rem solid #F2B90B"
            />
          </Flex>

          <Center>
            <Image src="/img/hummingbirdDivider.png" w="600px" />
          </Center>

        </Stack>
      </Flex>
    </MNGLayout>
  )
}
