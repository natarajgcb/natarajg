import MNGLayout from '../../components/mnglayout'
import MNGStripeButton from '../../components/mngstripebutton'
import {
  Flex, Box, Center,
  Image, Text, Heading,
  Button,
  Stack, VStack,
  Link as ChakraLink
} from '@chakra-ui/react'
import Link from 'next/link'

export default function YogaFriendsNFam() {
  return (
    <MNGLayout title="FRIENDS &amp; FAM YOGA">
      <Flex w={960} maxW={960} mx="auto">
        <Stack spacing={24}>
          <Image w={600} mx="auto" src="/img/MasterNatarajGYoga.jpg"
            alt="Master Nataraj G Yoga" title="Master Nataraj G Yoga" />

          <Box textAlign="center">
            <Heading as="h1" fontSize="108px" fontWeight="400" color="#E652E9">योग</Heading>
            <Heading as="h2" fontSize="63px" fontWeight="400" color="#B895B9">YOGA</Heading>
            <Text fontSize="27px" color="#B895B9" mt={4}>
              Dear Friends &amp; Family,
              <br/><br/><strong>Thank you</strong> for your love, support and
              commitment<br/>to heal, change and build our New World together.
              <br/><br/>We honor the <ChakraLink as={Link} href="/madeontongvaland">Tongva
              Land</ChakraLink> we are on and share these teachings with you so
              we may all live in abundance, aligned with our highest and truest
              Infinite Self, for a New World rooted in the Divine Energies of
              Peace, Love, Joy, Balance and Gratitude.
              <br/><br/>Please click below for your special discounted rate of <strong>USD $1,000</strong>
              <br/>for 1 month of 1-on-1 Yoga Training
              with Master Nataraj G.
            </Text>
            <MNGStripeButton
              size       = "lg"
              mt         = {12}
              label      = "ACCEPT $1,000 OFFER"
              priceid    = 'price_1I6Jm8KOxPIlITGPDMjnfBPh'
              successUrl = '/yoga/welcome'
              cancelUrl  = '/yoga'
            />
          </Box>

          <Flex>
            <VStack align="flex-end" spacing={6} w="593px" mr={6}>
              <Text textAlign="right" fontSize="36px" fontWeight="bold"
                color="#F8CDF9">
                1-on-1 Yoga Training, 1 month
              </Text>
              <Text textAlign="right" fontSize="27px" color="#B895B9">
                Share your life's journey, dreams and intentions with Master
                Nataraj G and receive a customized schedule and complete Yogic
                practices for one month tailored for you.
              </Text>
              <Text textAlign="right" fontSize="27px" color="#B895B9">
                This usually takes form as one 30-minute initial conversation
                followed by 16 one-hour guided sessions with four sessions per
                week for four weeks and may be adjusted to your needs.
              </Text>
              <Text textAlign="right" fontSize="27px" color="#B895B9">
                All sessions may be conducted virtually.
              </Text>
            </VStack>

            <VStack align="center" spacing={4}>
              <Image w={327} borderRadius="full" mt={4}
                src="/img/yoga/MNGYogaTraining1mo.jpg"
                alt="Master Nataraj G 1-on-1 Yoga Training for 1 month"
                title="Master Nataraj G 1-on-1 Yoga Training for 1 month"
                boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
                border="0.1618rem solid #F2B90B"
              />
              <Text color="#F8CDF9" fontSize="27px">
                USD <Text as="span" fontWeight="bold" fontSize="36px">$1,000</Text>
              </Text>
              <MNGStripeButton
                label      = "ACCEPT"
                priceid    = 'price_1I6Jm8KOxPIlITGPDMjnfBPh'
                successUrl = '/yoga/welcome'
                cancelUrl  = '/yoga'
              />
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
