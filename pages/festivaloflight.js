import Link from 'next/link'
import {
  Flex, Box, Text, Center, Image, Link as ChakraLink,
  List, ListItem, ListIcon, UnorderedList
} from '@chakra-ui/react'
import { MNGButton } from '../components/MNGButton'
import { MNGPage, MNGNote } from '../components/MNGLayout'
import {
  MNGTitle,
  MNGH1,
  MNGH2,
  MNGH3,
  MNGBody,
  MNGCalloutP,
  MNGHindiHeading,
  MNGHindiTitle,
  MNGHummingbirdSpacer
} from '../components/MNGType'
import { MdCheckCircle } from 'react-icons/md'

export default function FestivalOfLight() {
  const mngprops = {
    meta: {
      title: "Festival of Light * Master Nataraj G",
      description: "In celebration of Diwali, the Festival of Light, and over nine months of continuous Healing and Art Practice with our Beloved Community in the beautiful Pico Neighborhood in Santa Monica at Pico-Virgina Avenue Park, we are hosting our own Festival of Light in the park!  The festival is free to attend and open to all."
    },
    og: {
      title: "Festival of Light * Master Nataraj G",
      description: "In celebration of Diwali, the Festival of Light, and over nine months of continuous Healing and Art Practice with our Beloved Community in the beautiful Pico Neighborhood in Santa Monica at Pico-Virgina Avenue Park, we are hosting our own Festival of Light in the park!  The festival is free to attend and open to all.",
      image: "/img/MNGFestivalOfLight.jpg"
    }
  };

  return (
    <MNGPage meta={mngprops.meta} og={mngprops.og}>
      <Image mt="mngr.17" width="100%"
        src="/img/MNGFestivalOfLight.jpg"
        alt="Photograph of Master Nataraj G Preparing for Festival of Light"
        title="Photograph of Master Nataraj G Preparing for Festival of Light" />

      <MNGNote mt="mngr.44">
        <MNGH3>
          Thank You!
        </MNGH3>
        <MNGBody>
          To all the neighbors, friends and community that shared their presence and energy at our first ever Festival of Light at Virginia Avenue Park. Please see our menu below for links to the food partners that made this beautiful Festival possible.
        </MNGBody>
      </MNGNote>

      <MNGHindiTitle hindiText="दिवाली मुबारक" engText="Happy Diwali" left />

      <MNGBody>
        In celebration of Diwali, the Festival of Light, and over nine months of continuous Healing &amp; Art Practice with our Beloved Community in the beautiful Pico Neighborhood of Santa Monica at Pico-Virginia Avenue Park, we are hosting a local Festival of Light in the park!  The festival is free to attend and open to all.
      </MNGBody>

      <MNGH1 mt="mngr.44">
        Festival of Light
        <br/>
        <Text as="span" variant="subcap">3pm to 6pm</Text>
        <br/>
        <Text as="span" variant="subcap">Thu 11/4 • Fri 11/5 • Sat 11/6</Text>
        <br/>
        <Text as="span" variant="subcap">Virginia Avenue Park (<a href="https://goo.gl/maps/Uk5Tm8rs9coDUEa26" rel="noreferrer" target="_blank">map</a>)</Text>
      </MNGH1>

      <MNGH2>
        Heal Your Self
      </MNGH2>
      <MNGBody>
        We will be sharing healing practices in:
      </MNGBody>
      <List spacing={2}>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Breathwork
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Meditation
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Energy
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Yoga
        </ListItem>
      </List>

      <MNGH2>
        Create Art
      </MNGH2>
      <MNGBody>
        We will be creating art together with:
      </MNGBody>
      <List spacing={2}>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Drawing
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Writing
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Photos
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Music
        </ListItem>
      </List>

      <Center mt="mngr.88">
        <Image src="/img/MNGFestivalOfLightFood.jpg" w="100%"
          alt="Food at Master Nataraj G Festival of Light"
          title="Food at Master Nataraj G Festival of Light" />
      </Center>

      <MNGH2>
        Eat Healthy Food
      </MNGH2>
      <MNGBody>
        We will be sharing fresh food prepared by neighbors that is 100% Vegan, Organic, Fresh and uses Local Farmers Market Produce. Our menu with sources, listed below. Please visit the listed vendors at the Pico Virginia Farmers Market on Saturdays and the Mar Vista Farmers Market on Sundays.
      </MNGBody>
      <List spacing={2}>
        <ListItem>
          <MNGH3><ListIcon as={MdCheckCircle} color="green.500" />
            Kitchari</MNGH3>
          <MNGBody>
            <em>Kitchari is a foundational food in Ayurveda, the ancient natural medicine tradition of India. Kitchari is a plant-based complete protein that is very easy to digest and naturally cleanses the entire digestive system, leaving you feeling warm, nourished, balanced and calm. For more on the ingredients and health benefits of Kitchari, please <a href="https://www.banyanbotanicals.com/info/blog-the-banyan-insight/details/what-is-kitchari-why-we-eat-it-for-cleansing/" target="_blank" rel="noreferrer">see an article from our partners at Banyan Botanicals</a>.</em>
          </MNGBody>
          <MNGBody>
            Our Kitchari is prepared with <strong>Yellow Mung Beans</strong> and <strong>Kitchari Spices</strong> from <a href="https://www.banyanbotanicals.com/kitchari-kit/" target="_blank" rel="noreferrer">Banyan Botanicals</a>, <strong>Long Grain Basmati Rice</strong> from <a href="https://goo.gl/maps/nH4pP3W156DdgtTx7" target="_blank" rel="noreferrer">Indo-Asian Foods</a>, <strong>Tomato</strong> from <a href="http://www.tamaifamilyfarms.com/home.html" target="_blank" rel="noreferrer">Tamai Family Farms in Oxnard</a>, <strong>Onion</strong>, <strong>Young Ginger</strong> and <strong>Garlic</strong> from Fresno Evergreen Farms, topped with delicious nutrient-dense Sunflower Microgreens from <a href="https://www.urbangreensdirect.com/" target="_blank" rel="noreferrer">Urban Greens Direct</a>.
          </MNGBody>
        </ListItem>
        <ListItem>
          <MNGH3><ListIcon as={MdCheckCircle} color="green.500" />
            Fresh Strawberry Coconut Milk Smoothie</MNGH3>
          <MNGBody>
            with <strong>Fresh Strawberries</strong> from <a href="http://www.tamaifamilyfarms.com/home.html" target="_blank" rel="noreferrer">Tamai Family Farms in Oxnard</a> and fresh-pressed <strong>Coconut Milk</strong> from <a href="https://www.kokomoomilk.com/" target="_blank" rel="noreferrer">KOKOMOO Milk</a>.
          </MNGBody>
        </ListItem>
        <ListItem>
          <MNGH3><ListIcon as={MdCheckCircle} color="green.500" />
            Natural Whole Grain Peanut Butter &amp; Oat Energy Bars</MNGH3>
          <MNGBody>
            with <strong>Honey</strong> and <strong>Banana</strong> from <a href="https://www.bobsredmill.com/peanut-butter-banana-and-oats-bars-12-pack.html" target="_blank" rel="noreferrer">Bob&#39;s Red Mill</a>
          </MNGBody>
        </ListItem>
        <ListItem>
          <MNGH3><ListIcon as={MdCheckCircle} color="green.500" />
            Sunflowers!</MNGH3>
          <MNGBody>Beautiful food for our senses, spirits and souls from <a href="https://ccfc.org/farms/mayeda-cut-flower-co/" target="_blank" rel="noreferrer">Mayeda Farms</a> in Oxnard.
          </MNGBody>
        </ListItem>
      </List>

      <MNGH2>
        Contributing to the Festival
      </MNGH2>
      <MNGBody>
        Please <a href="mailto:one@natarajg.space?subject=Festival%20of%20Light">let us know</a> if you have any questions, would like to share a Healing or Art activity or help cook and serve food.
        <br/><br/>
        We will be serving community in the neighborhood that is in need of healthy food, permanent enjoyable housing and reliable sensitive healthcare. Please <a href="mailto:one@natarajg.space?subject=Festival%20of%20Light">reach out</a> if you have experience with healing in areas of mental health and working with systemically marginalized and oppressed groups to volunteer at this festival and our <ChakraLink as={Link} href="/yoga/pico">continuing Healing &amp; Art Practice in the Pico neighborhood</ChakraLink>.
      </MNGBody>

      <MNGH2>
        Special Thanks
      </MNGH2>
      <MNGBody>
        Big up to Brett and Rosa from <a href="https://avilaandsonsfarmsllc.com/" target="_blank" rel="noreferrer">Avila and Sons Farms</a> for kindly connecting with us and providing encouraging direction to further connect with more farmers that donated beautiful produce.
        <br/><br/>
        Deep Gratitude and blessings to Mila at <a href="https://eatsamopizza.com/" target="_blank" rel="noreferrer">SaMo Pizza</a> for sharing kindness, delicious food and drink to keep our team going while preparing and cooking for the Festival.
      </MNGBody>

      <MNGHummingbirdSpacer />

    </MNGPage>
  )
}
