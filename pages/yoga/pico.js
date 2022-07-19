import Link from 'next/link'
import {
  Flex, Box, Text, Center, Image, Link as ChakraLink,
  List, ListItem, ListIcon, UnorderedList
} from '@chakra-ui/react'
import { MNGButton } from '../../components/MNGButton'
import { MNGPage, MNGNote } from '../../components/MNGLayout'
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
} from '../../components/MNGType'
import { MdCheckCircle } from 'react-icons/md'

export default function YogaPico() {
  const mngprops = {
    meta: {
      title: "Yoga @ Pico * Master Nataraj G",
      description: "Every day (except Saturday) at Noon, we offer a Free Healing &amp; Art Practice at Virginia Avenue Park."
    },
    og: {
      title: "Yoga @ Pico * Master Nataraj G",
      description: "Every day (except Saturday) at Noon, we offer a Free Healing &amp; Art Practice at Virginia Avenue Park.",
      image: "/img/yoga/MNGParkYogaTree.jpg"
    }
  };

  return (
    <MNGPage meta={mngprops.meta} og={mngprops.og}>
      <Image mt="mngr.17" width="100%"
        src="/img/yoga/MNGParkYogaTree.jpg"
        alt="Photograph of Master Nataraj G Practicing Yoga at Virginia Ave Park"
        title="Photograph of Master Nataraj G Practicing Yoga at Virginia Ave Park" />

      <MNGNote mt="mngr.44">
        <MNGBody>
          <strong>ॐ शांति प्यार</strong>
        </MNGBody>
        <MNGH3>
          On Summer Break
        </MNGH3>
        <MNGBody>
          Peace, Love and Blessings, all. We are currently on summer break growing our practice. We are still conducting occasional sessions on an individual basis. If you would like to schedule a session, please <a href="mailto:one@natarajg.space?subject=Yoga" rel="noreferrer" target="_blank">email Master Nataraj G</a> to coordinate.
        </MNGBody>
      </MNGNote>

      <MNGH1 mt="mngr.44">
        Pico Neighborhood Yoga
      </MNGH1>

      <MNGBody>
        Every day (except Saturday) from <strong>Noon to 1 pm</strong>, we offer a <strong>Free</strong> Healing &amp; Art Practice at <a href="https://goo.gl/maps/Uk5Tm8rs9coDUEa26" rel="noreferrer" target="_blank">Virginia Avenue Park</a>.
      </MNGBody>

      <MNGH2>
        Heal Your Self
      </MNGH2>
      <MNGBody>
        We share personalized healing practices in:
      </MNGBody>
      <List spacing={2}>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Breathwork (Pranayam)
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Meditation (Dhyana)
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Energy
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Yoga
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Natural Plant Medicine &amp; Nutrition (rooted in Ayurveda)
        </ListItem>
      </List>

      <MNGH2>
        Create Art
      </MNGH2>
      <MNGBody>
        We guide students to create:
      </MNGBody>
      <List spacing={2}>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Drawings, Paintings
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Writings
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Music
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Film
        </ListItem>
      </List>

      <MNGBody>
        Please join us and <ChakraLink as={Link} href="/sponsor$tip$donate">share a donation</ChakraLink> if you are able. No one turned away for lack of funds. All funds support our continued practice so we may serve more neighbors, community and the world.
      </MNGBody>

      <MNGBody>
        Please <a href="mailto:one@natarajg.space?subject=Yoga" rel="noreferrer" target="_blank">email Master Nataraj G</a> if our noontime community offerings do not work for you and you are interested in one-on-one sessions held virtually via secure, encrypted video chat with a schedule that better suits you.
      </MNGBody>

      <MNGHummingbirdSpacer />

    </MNGPage>
  )
}
