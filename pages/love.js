import Link from 'next/link'
import {
  Flex, Box, Text, Center, Image, Link as ChakraLink
} from '@chakra-ui/react'
import { MNGButton } from '../components/MNGButton'
import { MNGPage } from '../components/MNGLayout'
import {
  MNGH2,
  MNGBody,
  MNGCalloutP,
  MNGHindiHeading,
  MNGHindiTitle,
  MNGHummingbirdSpacer
} from '../components/MNGType'
import {
  MNGWordsOfLove,
  MNGWordsOfLoveText,
  MNGWordsOfLoveFace
} from '../components/MNGWordsOfLove'

export default function Love() {
  const mngprops = {
    meta: {
      title: "Love * Master Nataraj G",
      description: "We are in it. It is all around us. It is us. If we sit quietly. And listen. Beyond death."
    },
    og: {
      title: "Love * Master Nataraj G",
      description: "We are in it. It is all around us. It is us. If we sit quietly. And listen. Beyond death.",
      image: "/img/MasterNatarajGLove.jpg"
    }
  };

  return (
    <MNGPage meta={mngprops.meta} og={mngprops.og}>
      <Image mt="mngr.17" width="100%"
        src="/img/MasterNatarajGLove.jpg"
        alt="Photograph of a Lovely Jungle Forest Creek"
        title="Lovely Jungle Forest Creek" />

      <MNGHindiTitle hindiText="प्यार" engText="LOVE" left />

      <MNGBody>
        We are in it
        <br/>It is all around us
        <br/>It is us
        <br/>If we sit quietly
        <br/>And listen
        <br/><strong>Beyond death</strong>
        <br/><br/>All of existence weaves together to share this with you.
        <br/><br/>You are here because our Infinite, Highest, Truest Self
          brought us together for a Divine Purpose.
        <br/><br/>Thank You. Bless You.
        <br/><br/>Deep Gratitude for
        <br/>the Land, Mother Earth, the Infinite
          One Self, family, friends, teachers, spirit guides, Lovers,
          Eucalyptus, Cedar, Hummingbird, Dragonfly, Deer, Turtle, Sage, Bee.
        <br/><br/>Aho Mitakuye Oyasin
        <br/>All Our Relations
        <br/><br/>ॐ शांति प्यार
        <br/>Aum Shanti Pyar
        <br/>Divine Peace Love
      </MNGBody>

      <Image my="mngr.27" width="100%"
        src="/img/MasterNatarajGAumShantiPyar.jpg"
        alt="Master Nataraj G Aum Shanti Pyar"
        title="Master Nataraj G Aum Shanti Pyar"
      />

      <MNGH2 id="credits">SITE CREDITS</MNGH2>
      <MNGBody>These offerings and this Sovereign Web Presence is made manifest
        through the love shared by so many. Master Nataraj G bows in
        Gratitude to You, All and:
        <br/><br/>All those that shared <ChakraLink as={Link}
          href="/#love">words of love on the HOME page</ChakraLink>.
        <br/><br/><ChakraLink as={Link} href="https://www.jpl.nasa.gov/">NASA&#39;s
          Jet Propulsion Laboratory at Caltech</ChakraLink>, Spitzer
          Space Telescope team for the Supernova
          Remnant HBH 3 image set as the background for this site.
        <br/><br/><ChakraLink as={Link} href="https://epic.gsfc.nasa.gov">NASA&#39;s
          Earth Polychromatic Imaging Camera (EPIC)</ChakraLink> team for
          the Earth image set at the base of this site.
        <br/><br/><ChakraLink as={Link} href="https://codepen.io/saransh/pen/BKJun">Saransh
          Sinha</ChakraLink> for the Pure CSS Parallax
          Pixel Stars CSS animation that we modeled this site&#39;s Starfield background
          animation after.
        <br/><br/><ChakraLink as={Link} href="https://chakra-ui.com/">Segun
          Adebayo and the Chakra UI team</ChakraLink> for the interface
          framework that makes manifest our vision and designs for this
          site while keeping the site highly accessible for those with
          different senses and abilities.
        <br/><br/><ChakraLink as={Link} href="https://nextjs.org/">Guillermo
          Rauch and the Next.js team</ChakraLink> for an elegant web framework
          that empowers us to build this <ChakraLink as={Link}
          href="/sovereignwebpresence">Sovereign Web Presence</ChakraLink> and
          share it with the New World.
        <br/><br/>The <ChakraLink as={Link} href="https://www.blockstack.org/">Blockstack
          Foundation, Ecosystem of dApps and Community</ChakraLink> for
          guidance and leadership in building the <ChakraLink as={Link}
          href="/sovereignwebpresence">Decentralized Web</ChakraLink>.
        <br/><br/>The <ChakraLink as={Link} href="https://runkod.com/">Runkod
          team</ChakraLink> for a <ChakraLink as={Link}
          href="/sovereignwebpresence">decentralized</ChakraLink> hosting
          platform that shares the same name as our Mother Earth, GAIA.
      </MNGBody>

    </MNGPage>
  )
}
