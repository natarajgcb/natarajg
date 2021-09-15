import MNGLayout from '../components/mnglayout'
import {
  Flex, Box, Center,
  Image, Text, Heading,
  Button,
  Stack, VStack, HStack,
  Link as ChakraLink
} from '@chakra-ui/react'
import Link from 'next/link'

export default function Yoga() {
  return (
    <MNGLayout title="YOGA">
      <Flex w={960} maxW={960} mx="auto">
        <Stack spacing={24}>
          <Image w={600} mx="auto" src="/img/MasterNatarajGYoga.jpg" alt="Master Nataraj G Yoga" title="Master Nataraj G Yoga" />

          <Box textAlign="center">
            <Heading as="h1" fontSize="108px" fontWeight="400" color="#E652E9">योग</Heading>
            <Heading as="h2" fontSize="63px" fontWeight="400" color="#B895B9">YOGA</Heading>
            <Text fontSize="27px" color="#B895B9" mt={4}>
              The practice of Yoga has blossomed all over the globe while evolving and
              growing as a result of Yoga’s intrinsic methods for connecting with our truest
              and highest selves. Yogic practice creates the conditions within each one
              of us that lead to the alignment of our Bodies, Minds, Hearts, Spirits, Souls,
              Environment, Land, Communities, All Our Relations, the entire Cosmos and
              the Divine Beyond.
            </Text>
            <Text fontSize="27px" color="#B895B9" mt={9}>
              Master Nataraj G is at the fore of the continuing evolution of Yogic practice. Through study, practice and community building across the world’s religions and wisdom
              traditions, medicinal frameworks, revolutionary struggles for peace and liberation as well as various paths of Yogic practice, Master
              Nataraj G has established a complete practice that leads us toward a New World rooted
              in the Divine Energies of Peace, Love, Joy, Balance and Gratitude.
            </Text>
          </Box>

          <Box textAlign="center">
            <Heading as="h3" fontSize="69px" fontWeight="400" color="#9F08A2">प्रस्ताव</Heading>
            <Heading as="h4" fontSize="36px" fontWeight="400" color="#B895B9">OFFERINGS</Heading>
          </Box>

          <Flex>
            <VStack align="flex-end" spacing={6} w="593px" mr={6}>
              <Text textAlign="right" fontSize="36px" fontWeight="bold"
                color="#F8CDF9" _hover={{color:"#9F08A2"}}>
                <ChakraLink as={Link}
                  href="https://buy.stripe.com/eVag0cfV00KZ1NKdQQ">1-on-1
                  Yoga Training, 1 month</ChakraLink></Text>
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

            <ChakraLink as={Link}
              href="https://buy.stripe.com/eVag0cfV00KZ1NKdQQ">
              <VStack align="center" spacing={4} _hover={{cursor:"pointer"}}>
                <Image w={327} borderRadius="full" mt={4}
                  src="/img/yoga/MNGYogaTraining1mo.jpg"
                  alt="Master Nataraj G 1-on-1 Yoga Training for 1 month"
                  title="Master Nataraj G 1-on-1 Yoga Training for 1 month"
                  boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
                  border="0.1618rem solid #F2B90B"
                  _hover={{
                    boxShadow: "0 0 10px 3px rgba(48,9,49,0.99)",
                    border: "0.1618rem solid #9F08A2"
                  }}
                />
                <Text color="#F8CDF9" _hover={{color:"#9F08A2"}} fontSize="27px">
                  USD <Text as="span" fontWeight="bold" fontSize="36px">$2,000</Text>
                </Text>
                <ChakraLink as={Link} href="https://buy.stripe.com/eVag0cfV00KZ1NKdQQ">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>ACCEPT</Button>
                </ChakraLink>
              </VStack>
            </ChakraLink>
          </Flex>

          <Flex>
            <ChakraLink as={Link}
              href="https://buy.stripe.com/9AQ4hucIO79n8c87st">
              <VStack align="center" _hover={{cursor:"pointer"}} mr={6} spacing={4}>
                <Image w={327} borderRadius="full" mt={4}
                  src="/img/yoga/MNGBreathTraining.jpg"
                  alt="Master Nataraj G 1-on-1 Breath Training"
                  title="Master Nataraj G 1-on-1 Breath Training"
                  boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
                  border="0.1618rem solid #F2B90B"
                  _hover={{
                    boxShadow: "0 0 10px 3px rgba(48,9,49,0.99)",
                    border: "0.1618rem solid #9F08A2"
                  }}
                />
                <Text color="#F8CDF9" _hover={{color:"#9F08A2"}} fontSize="27px">
                  USD <Text as="span" fontWeight="bold" fontSize="36px">$369</Text>
                </Text>
                <ChakraLink as={Link} href="https://buy.stripe.com/9AQ4hucIO79n8c87st">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>ACCEPT</Button>
                </ChakraLink>
              </VStack>
            </ChakraLink>

            <VStack align="flex-start" spacing={6} w="593px">
              <Text textAlign="left" fontSize="36px" fontWeight="bold"
                color="#F8CDF9" _hover={{color:"#9F08A2"}}>
                <ChakraLink as={Link}
                  href="https://buy.stripe.com/9AQ4hucIO79n8c87st">1-on-1
                  Breath Training, 3 sessions</ChakraLink></Text>
              <Text textAlign="left" fontSize="27px" color="#B895B9">
                One of Yoga’s 8 Limbs is प्राणायाम (pranayam): Life Force Extension through Breath Control.
              </Text>
              <Text textAlign="left" fontSize="27px" color="#B895B9">
                Connect with Master Nataraj G to practice ancient breathing
                techniques that allow you to direct your breath and life force
                for instant access to deeper and greater levels of Clarity,
                Peace, Love, Joy, Balance and Gratitude.
              </Text>
              <Text textAlign="left" fontSize="27px" color="#B895B9">
                Three sessions, each one hour long. All sessions may be
                conducted virtually.
              </Text>
            </VStack>
          </Flex>

          <Center py={16}>
            <Image src="/img/hummingbirdDivider.png" w="600px" />
          </Center>

          <Flex align="center">
            <VStack ml={36}>
              <Text textAlign="center" fontSize="27px" color="#B895B9">No one on this Earth is doing what Master Nataraj G is doing for the Divine Energies of<br/>Peace, Love, Joy, Balance and Gratitude.</Text>
              <Text fontFamily="Georgia,serif" fontSize="25px"
                color="#B895B9"><em>In Love, Sadhguru</em></Text>
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
              src="/img/inlove/06avag.jpg"
              alt="Ava DuVernay"
              boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
              border="0.1618rem solid #F2B90B"
            />
            <VStack mx={4}>
              <Text textAlign="center" fontSize="27px" color="#B895B9">That
                meditation with Master Nataraj G<br/>does a mind, body, soul and
                spirit good!
              </Text>
              <Text fontFamily="Georgia,serif" fontSize="25px"
                color="#B895B9"><em>In Love, Ava DuVernay</em></Text>
            </VStack>
          </Flex>

          <Flex align="center" justify="flex-end" pb={24}>
            <VStack mx={4}>
              <Text textAlign="center" fontSize="27px" color="#B895B9">बोधिसत्त्व.
                Bodhisattva. Master Nataraj G is.
              </Text>
              <Text fontFamily="Georgia,serif" fontSize="25px"
                color="#B895B9"><em>In Love, Lama Rod Owens</em></Text>
            </VStack>
            <Image w={222} borderRadius="full"
              src="/img/inlove/10lamarod.jpg"
              alt="Lama Rod Owens"
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
