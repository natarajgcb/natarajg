import Link from 'next/link'
import {
  Flex, Box, Center, Image, Text, Link as ChakraLink
} from '@chakra-ui/react'
import { MNGButton } from '../components/MNGButton'
import { MNGPage } from '../components/MNGLayout'
import {
  MNGH2,
  MNGCalloutP,
  MNGBody,
  MNGHindiHeading,
  MNGHindiTitle,
  MNGHummingbirdSpacer
} from '../components/MNGType'

export default function Food() {
  const mngprops = {
    meta: {
      title: "Food * Master Nataraj G",
      description: "In our material forms on this beautiful journey with our Earth Mother, we are blessed and gifted with an abundance of delicious, vibrant and oh so enlightening food."
    },
    og: {
      title: "Food * Master Nataraj G",
      description: "In our material forms on this beautiful journey with our Earth Mother, we are blessed and gifted with an abundance of delicious, vibrant and oh so enlightening food.",
      image: "/img/MasterNatarajGFood.jpg"
    }
  };

  return (
    <MNGPage meta={mngprops.meta} og={mngprops.og}>
      <Image mt="mngr.17" width="100%"
        src="/img/MasterNatarajGFood.jpg"
        alt="Photograph of a beautiful tomato, chili and green onion dish"
        title="Master Nataraj G's Beautiful Food Prep" />

      <MNGHindiTitle hindiText="खाना" engText="FOOD" left />

      <MNGBody>
        In our material forms on this beautiful journey with our Earth Mother, we are blessed and gifted with an abundance of delicious, vibrant and oh so enlightening food. Our plant and animal relatives are not separate from us in their actions to take care of us and we need not neglect our care of them to all live healthily in Peace, Love, Joy, Balance and Gratitude.
      </MNGBody>

      <MNGHindiHeading hindiText="प्रस्ताव" engText="OFFERINGS" left />
      <MNGBody>
        For the healthiest, most delicious food, we seek out the freshest, most local and cleanest plant-based ingredients. We frequent local farmers markets, create menus weekly and on the fly based on seasonality. We document the health benefits of foods after understanding your context and needs, drawing from ancient, holistic and natural medicinal traditions such as Ayurveda. All so we are honoring and nourishing our selves, Mother Earth, our local lands and our communities.
      </MNGBody>
      <Image src="/img/food/MasterNatarajGFoodMenu.jpg" w="100%"
        alt="Master Nataraj G Food Menu" title="Master Nataraj G Food Menu" />

      <MNGH2>Visit the Farmer&#39;s Market &amp; Cook Together</MNGH2>
      <Flex>
        <Box width="61.803%" pr={6}>
          <MNGBody>
            Connect with Master Nataraj G to share a ceremony connecting us more deeply with the land through food. Visit a local Farmer&#39;s Market and craft a menu together based on what is most fresh and healing for you. Then travel to your kitchen to cook together or leave it to Master Nataraj G while learning new techniques, health benefits of foods and discussing how to stay healthy with the changing seasons.
          </MNGBody>
          <MNGBody>
            Includes a full six-course meal with drinks for eight, based on your needs and market availability. Menu, health benefits and information on food sources are documented for you to keep.
          </MNGBody>
          <MNGBody>
            <ChakraLink
              as={Link}
              href="https://buy.stripe.com/14kcO04ci79ndwsfZ0"
            >
              Book a Visit
            </ChakraLink>.
          </MNGBody>
        </Box>
        <Box align="center" width="38.197%">
          <ChakraLink as={Link} href="https://buy.stripe.com/14kcO04ci79ndwsfZ0">
            <Image src="/img/food/MasterNatarajGFoodMarket.jpg"
              alt="Master Nataraj G Farmers Market Food"
              my="mngr.11"
              borderRadius="full"
              boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
              _hover={{
                boxShadow: "0 0 10px 3px rgba(48,9,49,0.99)",
                cursor: "pointer"
              }}
            />
          </ChakraLink>
          <MNGCalloutP>
            $1,000&nbsp;
            <Text as="span" variant="smallcaps">USD</Text>
          </MNGCalloutP>
          <MNGButton href="https://buy.stripe.com/14kcO04ci79ndwsfZ0">ACCEPT</MNGButton>
        </Box>
      </Flex>

      <MNGH2>Cook a Farmer&#39;s Market Fresh Meal Together</MNGH2>
      <Flex>
        <Box width="61.803%" pr={6}>
          <MNGBody>
            Connect with Master Nataraj G to share a ceremony connecting us more deeply with the land through food. Share your favorite foods, health and dietary needs with Master Nataraj G before he makes a local Farmer&#39;s Market run, crafts a menu and shows up at your home to cook together. Dive into the kitchen to prepare the meal together or leave it to Master Nataraj G while learning new techniques, health benefits of foods and discussing how to stay healthy with the changing seasons.
          </MNGBody>
          <MNGBody>
            Includes a full six-course meal with drinks for eight, based on your needs and market availability. Menu, health benefits and information on food sources are documented for you to keep.
          </MNGBody>
          <MNGBody>
            <ChakraLink
              as={Link}
              href="https://buy.stripe.com/aEU9BO6kq2T7dws5kn"
            >
              Book a Cooking Session
            </ChakraLink>.
          </MNGBody>
        </Box>
        <Box align="center" width="38.197%">
          <ChakraLink as={Link} href="https://buy.stripe.com/aEU9BO6kq2T7dws5kn">
            <Image src="/img/food/MasterNatarajGFoodTogether.jpg"
              alt="Master Nataraj G Cook Food Together"
              my="mngr.11"
              borderRadius="full"
              boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
              _hover={{
                boxShadow: "0 0 10px 3px rgba(48,9,49,0.99)",
                cursor: "pointer"
              }}
            />
          </ChakraLink>
          <MNGCalloutP>
            $1,000&nbsp;
            <Text as="span" variant="smallcaps">USD</Text>
          </MNGCalloutP>
          <MNGButton href="https://buy.stripe.com/aEU9BO6kq2T7dws5kn">ACCEPT</MNGButton>
        </Box>
      </Flex>

      <MNGH2>Get a Farmer&#39;s Market Fresh Meal Delivered</MNGH2>
      <Flex>
        <Box width="61.803%" pr={6}>
          <MNGBody>
            Connect with Master Nataraj G to share a ceremony connecting us more deeply with the land through food. Share your favorite foods, health and dietary needs with Master Nataraj G before he makes a local Farmer&#39;s Market run, crafts a menu, cooks a meal and shows up at your home to deliver blessings passed on from Mother Earth.
          </MNGBody>
          <MNGBody>
            Includes a full six-course meal with drinks for eight, based on your needs and market availability. Menu, health benefits and information on food sources are documented for you to keep.
          </MNGBody>
          <MNGBody>
            <ChakraLink
              as={Link}
              href="https://buy.stripe.com/cN23dqdMS0KZfEAfZ2"
            >
              Book a Delivery
            </ChakraLink>.
          </MNGBody>
        </Box>
        <Box align="center" width="38.197%">
          <ChakraLink as={Link} href="https://buy.stripe.com/cN23dqdMS0KZfEAfZ2">
            <Image src="/img/food/MasterNatarajGFoodDeliver.jpg"
              alt="Master Nataraj G Food Delivery"
              my="mngr.11"
              borderRadius="full"
              boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
              _hover={{
                boxShadow: "0 0 10px 3px rgba(48,9,49,0.99)",
                cursor: "pointer"
              }}
            />
          </ChakraLink>
          <MNGCalloutP>
            $1,000&nbsp;
            <Text as="span" variant="smallcaps">USD</Text>
          </MNGCalloutP>
          <MNGButton href="https://buy.stripe.com/cN23dqdMS0KZfEAfZ2">ACCEPT</MNGButton>
        </Box>
      </Flex>

      <MNGHummingbirdSpacer />

    </MNGPage>
  )
}
