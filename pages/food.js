import MNGLayout from '../components/mnglayout'
import {
  Flex, Box, Center,
  Image, Text, Heading,
  Button,
  Stack, VStack, HStack,
  Link as ChakraLink
} from '@chakra-ui/react'
import Link from 'next/link'

export default function Food() {
  return (
    <MNGLayout title="FOOD">
      <Flex w={960} maxW={960} mx="auto">
        <Stack spacing={24}>
          <Image src="/img/MasterNatarajGFood.jpg" alt="Master Nataraj G Food" title="Master Nataraj G Food" />

          <Box textAlign="center">
            <Heading as="h1" fontSize="108px" fontWeight="400" color="#E652E9">खाना</Heading>
            <Heading as="h2" fontSize="63px" fontWeight="400" color="#B895B9">FOOD</Heading>
            <Text fontSize="27px" color="#B895B9" mt={4}>
              In our material forms on this beautiful journey with our Earth
              Mother, we are blessed and gifted with an abundance of delicious,
              vibrant and oh so enlightening food. Our plant and animal relatives
              are not separate from us in their actions to take care of us and
              we need not neglect our care of them to all live healthily in
              Balance, Peace, Love, Joy and Gratitude.
            </Text>
          </Box>

          <Box textAlign="center">
            <Heading as="h3" fontSize="69px" fontWeight="400" color="#9F08A2">प्रस्ताव</Heading>
            <Heading as="h4" fontSize="36px" fontWeight="400" color="#B895B9">OFFERINGS</Heading>
            <Text fontSize="27px" color="#B895B9" mt={4}>
              For the healthiest, most delicious food, we seek out the freshest,
              most local and cleanest plant-based ingredients. We frequent local farmers markets,
              create menus weekly and on the fly based on seasonality. We document
              the health benefits of foods after understanding your context and needs,
              drawing from ancient, holistic and natural medicinal traditions such
              as Ayurveda. All so we are honoring and nourishing our selves,
              Mother Earth, our local lands and our communities.
            </Text>
            <Image src="/img/food/MasterNatarajGFoodMenu.jpg" w={960} pt={6}
              alt="Master Nataraj G Food Menu" title="Master Nataraj G Food Menu" />
          </Box>

          <Flex>
            <ChakraLink as={Link}
              href="https://checkout.square.site/buy/4PNR5DKEXDEBQHVLQ6FW5FST">
              <VStack align="center" _hover={{cursor:"pointer"}} mr={6} spacing={4}>
                <Image w={327} borderRadius="full" mt={4}
                  src="/img/food/MasterNatarajGFoodMarket.jpg"
                  alt="You and Master Nataraj G Visit Market and Cook Together"
                  title="You and Master Nataraj G Visit Market and Cook Together"
                  boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
                  border="0.1618rem solid #F2B90B"
                  _hover={{
                    boxShadow: "0 0 10px 3px rgba(48,9,49,0.99)",
                    border: "0.1618rem solid #9F08A2"
                  }}
                />
                <Text color="#F8CDF9" _hover={{color:"#9F08A2"}} fontSize="27px">
                  USD <Text as="span" fontWeight="bold" fontSize="36px">$1,000</Text>
                </Text>
                <ChakraLink as={Link} href="https://checkout.square.site/buy/4PNR5DKEXDEBQHVLQ6FW5FST">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>ACCEPT</Button>
                </ChakraLink>
              </VStack>
            </ChakraLink>

            <VStack align="flex-start" spacing={6} w="593px">
              <Text textAlign="left" fontSize="36px" fontWeight="bold"
                color="#F8CDF9" _hover={{color:"#9F08A2"}}>
                <ChakraLink as={Link}
                  href="https://checkout.square.site/buy/4PNR5DKEXDEBQHVLQ6FW5FST">Visit
                  the Farmer's Market &amp; Cook Together</ChakraLink></Text>
              <Text textAlign="left" fontSize="27px" color="#B895B9">
                Connect with Master Nataraj G to share a ceremony connecting us
                more deeply with the land through food. Visit a local Farmer's Market
                and craft a menu together based on what is most fresh and
                healing for you. Then travel to your kitchen to cook together or
                leave it to Master Nataraj G while learning new techniques,
                health benefits of foods and discussing how to stay healthy with
                the changing seasons.
              </Text>
              <Text textAlign="left" fontSize="27px" color="#B895B9">
                Preparation of at least 8 servings or more are included, based on
                your needs and market variability. Menu, health benefits and sources
                are documented for you to keep.
              </Text>
            </VStack>
          </Flex>

          <Flex>
            <ChakraLink as={Link}
              href="https://checkout.square.site/buy/A6NGOAPNXLVCC3BXAUR34LWS">
              <VStack align="center" _hover={{cursor:"pointer"}} mr={6} spacing={4}>
                <Image w={327} borderRadius="full" mt={4}
                  src="/img/food/MasterNatarajGFoodTogether.jpg"
                  alt="You and Master Nataraj G Cook Together"
                  title="You and Master Nataraj G Cook Together"
                  boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
                  border="0.1618rem solid #F2B90B"
                  _hover={{
                    boxShadow: "0 0 10px 3px rgba(48,9,49,0.99)",
                    border: "0.1618rem solid #9F08A2"
                  }}
                />
                <Text color="#F8CDF9" _hover={{color:"#9F08A2"}} fontSize="27px">
                  USD <Text as="span" fontWeight="bold" fontSize="36px">$1,000</Text>
                </Text>
                <ChakraLink as={Link} href="https://checkout.square.site/buy/A6NGOAPNXLVCC3BXAUR34LWS">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>ACCEPT</Button>
                </ChakraLink>
              </VStack>
            </ChakraLink>

            <VStack align="flex-start" spacing={6} w="593px">
              <Text textAlign="left" fontSize="36px" fontWeight="bold"
                color="#F8CDF9" _hover={{color:"#9F08A2"}}>
                <ChakraLink as={Link}
                  href="https://checkout.square.site/buy/A6NGOAPNXLVCC3BXAUR34LWS">Cook
                  a Farmer's Market Fresh Meal Together</ChakraLink></Text>
              <Text textAlign="left" fontSize="27px" color="#B895B9">
                Connect with Master Nataraj G to share a ceremony connecting us
                more deeply with the land through food. Share your favorite foods,
                health and dietary needs with Master Nataraj G before he makes a local
                Farmer's Market run, crafts a menu and shows up at your home to
                cook together. Dive into the kitchen to prepare the meal together or
                leave it to Master Nataraj G while learning new techniques,
                health benefits of foods and discussing how to stay healthy with
                the changing seasons.
              </Text>
              <Text textAlign="left" fontSize="27px" color="#B895B9">
                Preparation of at least 8 servings or more are included, based on
                your needs and market variability. Menu, health benefits and
                sources are documented for you to keep.
              </Text>
            </VStack>
          </Flex>

          <Flex>
            <ChakraLink as={Link}
              href="https://checkout.square.site/buy/K6IER4VHBHD4OSXB6FBJ5G3D">
              <VStack align="center" _hover={{cursor:"pointer"}} mr={6} spacing={4}>
                <Image w={327} borderRadius="full" mt={4}
                  src="/img/food/MasterNatarajGFoodDeliver.jpg"
                  alt="Master Nataraj G Cooks and Delivers"
                  title="Master Nataraj G Cooks and Delivers"
                  boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
                  border="0.1618rem solid #F2B90B"
                  _hover={{
                    boxShadow: "0 0 10px 3px rgba(48,9,49,0.99)",
                    border: "0.1618rem solid #9F08A2"
                  }}
                />
                <Text color="#F8CDF9" _hover={{color:"#9F08A2"}} fontSize="27px">
                  USD <Text as="span" fontWeight="bold" fontSize="36px">$1,000</Text>
                </Text>
                <ChakraLink as={Link} href="https://checkout.square.site/buy/K6IER4VHBHD4OSXB6FBJ5G3D">
                  <Button bg="#6E0A70" color="#F8CDF9" px={8}
                    _hover={{ background: "#510653" }}>ACCEPT</Button>
                </ChakraLink>
              </VStack>
            </ChakraLink>

            <VStack align="flex-start" spacing={6} w="593px">
              <Text textAlign="left" fontSize="36px" fontWeight="bold"
                color="#F8CDF9" _hover={{color:"#9F08A2"}}>
                <ChakraLink as={Link}
                  href="https://checkout.square.site/buy/K6IER4VHBHD4OSXB6FBJ5G3D">Get
                  a Farmer's Market Fresh Meal Delivered</ChakraLink></Text>
              <Text textAlign="left" fontSize="27px" color="#B895B9">
                Connect with Master Nataraj G to share a ceremony connecting us
                more deeply with the land through food. Share your favorite foods,
                health and dietary needs with Master Nataraj G before he makes a local
                Farmer's Market run, crafts a menu, cooks a meal and shows up at
                your home to deliver blessings passed on from Mother Earth.
              </Text>
              <Text textAlign="left" fontSize="27px" color="#B895B9">
                Preparation of at least 8 servings or more are included, based on
                your needs and market variability. Menu, health benefits and
                sources are documented for you to keep.
              </Text>
            </VStack>
          </Flex>

          <Center py={16}>
            <Image src="/img/hummingbirdDivider.png" w="600px" />
          </Center>

          <Flex align="center">
            <VStack ml={36}>
              <Text textAlign="center" fontSize="27px" color="#B895B9">Nataraj G
                revealed to me the most beautiful flower with the sweetest nectar
                this world has to offer. Bless you child. Thank you.</Text>
              <Text fontFamily="Georgia,serif" fontSize="25px"
                color="#B895B9"><em>In Love, Grandmother Gloria Arellanes</em></Text>
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
              src="/img/inlove/03jack.jpg"
              alt="Jack Nicholson"
              boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
              border="0.1618rem solid #F2B90B"
            />
            <VStack ml={4}>
              <Text textAlign="center" fontSize="27px" color="#B895B9">Nataraj G
                is capturing pure beauty<br/>with every bite.</Text>
              <Text fontFamily="Georgia,serif" fontSize="25px"
                color="#B895B9"><em>In Love, Jack Nicholson</em></Text>
            </VStack>
          </Flex>

          <Flex align="center" justify="flex-end" pb={24}>
            <VStack mx={4}>
              <Text textAlign="center" fontSize="27px" color="#B895B9">We always
                look forward to what<br/>Master Nataraj G is cooking up next.
              </Text>
              <Text fontFamily="Georgia,serif" fontSize="25px"
                color="#B895B9"><em>In Love, David Byrne</em></Text>
            </VStack>
            <Image w={222} borderRadius="full"
              src="/img/inlove/07davidbyrne.jpg"
              alt="David Byrne"
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
