import MNGLayout from '../components/mnglayout'
import {
  Flex, Box, Center,
  Image, Text, Heading,
  Button,
  Stack, VStack,
  Link as ChakraLink
} from '@chakra-ui/react'
import Link from 'next/link'

export default function Love() {
  return (
    <MNGLayout title="LOVE">
      <Flex w={960} maxW={960} mx="auto">
        <Stack spacing={24}>
          <Image w={600} mx="auto" src="/img/MasterNatarajGLove.jpg"
            alt="Master Nataraj G Love" title="Master Nataraj G Love" />

          <Box textAlign="center">
            <Heading as="h1" fontSize="108px" fontWeight="400" color="#E652E9">प्यार</Heading>
            <Heading as="h2" fontSize="63px" fontWeight="400" color="#B895B9">LOVE</Heading>
            <Text fontSize="27px" color="#B895B9" mt={4}>
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
              <br/>Om Shanti Pyar
            </Text>
          </Box>

          <Image w={960} mx="auto" src="/img/MasterNatarajGOmShantiPyar.jpg"
            alt="Master Nataraj G Om Shanti Pyar" title="Master Nataraj G Om Shanti Pyar" />

          <Box id="credits" textAlign="center">
            <Heading as="h3" fontSize="36px" fontWeight="400" color="#B895B9">SITE CREDITS</Heading>
            <Text fontSize="27px" color="#B895B9" mt={4}>
              These offerings and this Sovereign Web Presence is made manifest
              through the love shared by so many. Master Nataraj G bows in
              Gratitude to You, All and:
              <br/><br/>All those that shared <u><ChakraLink as={Link}
                href="/#love">words of love on the HOME page</ChakraLink></u>.
              <br/><br/>NASA's Jet Propulsion Laboratory at Caltech, Spitzer
                Space Telescope team for the <u><ChakraLink as={Link}
                href="https://photojournal.jpl.nasa.gov/catalog/PIA22564">Supernova
                Remnant HBH 3 image</ChakraLink></u> set as the background for this site.
              <br/><br/>NASA's Earth Polychromatic Imaging Camera (EPIC) team for
                the <u><ChakraLink as={Link} href="https://epic.gsfc.nasa.gov/about">Earth
                image</ChakraLink></u> set at the base of this site.
              <br/><br/>Saransh Sinha for the <u><ChakraLink as={Link}
                href="https://codepen.io/saransh/pen/BKJun">Pure CSS Parallax
                Pixel Stars CSS animation</ChakraLink></u> that the Starfield for
                this site was based on.
              <br/><br/><u><ChakraLink as={Link} href="https://chakra-ui.com/">Segun
                Adebayo and the Chakra UI team</ChakraLink></u> for the interface
                framework that makes manifest our vision and designs for this
                site while keeping the site highly accessible for those with
                different senses and abilities.
              <br/><br/><u><ChakraLink as={Link} href="https://nextjs.org/">Guillermo
                Rauch and the Next.js team</ChakraLink></u> for an elegant web framework
                that empowers us to build this <u><ChakraLink as={Link}
                href="/sovereignwebpresence">Sovereign Web Presence</ChakraLink></u> and
                share it with the New World.
              <br/><br/>The <u><ChakraLink as={Link} href="https://www.blockstack.org/">Blockstack
                Foundation, Ecosystem of dApps and Community</ChakraLink></u> for
                guidance and leadership in building the <u><ChakraLink as={Link}
                href="/sovereignwebpresence">Decentralized Web</ChakraLink></u>.
              <br/><br/>The <u><ChakraLink as={Link} href="https://runkod.com/">Runkod
                team</ChakraLink></u> for a <u><ChakraLink as={Link}
                href="/sovereignwebpresence">decentralized</ChakraLink></u> hosting
                platform that shares the same name as our Mother Earth, GAIA.
            </Text>
          </Box>
        </Stack>
      </Flex>
    </MNGLayout>
  )
}
