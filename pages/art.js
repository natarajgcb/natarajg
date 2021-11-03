import Link from 'next/link'
import {
  Flex, Box, Text, Spacer, Image, Link as ChakraLink
} from '@chakra-ui/react'
import { MNGButton } from '../components/MNGButton'
import { MNGPage } from '../components/MNGLayout'
import {
  MNGH2,
  MNGH3,
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
      title: "Art * Master Nataraj G",
      description: "See and support art created by Master Nataraj G."
    },
    og: {
      title: "Art * Master Nataraj G",
      description: "See and support art created by Master Nataraj G.",
      image: "/img/art/3MasterNatarajGCosmicDancer.jpg"
    }
  };

  return (
    <MNGPage meta={mngprops.meta} og={mngprops.og}>

      <Image src="/img/art/0MasterNatarajGOutMeditation.jpg"
        w="100%" mt="mngr.17"
        alt="Master Nataraj G OUT MEDITATION Art"
        title="Master Nataraj G OUT MEDITATION Art" />
      <Flex>
        <Box>
          <MNGH2 mt="mngr.27">OUT MEDITATION</MNGH2>
          <MNGBody>
            December 2020.
            <br/>Painting. Oil pastel on acrylic.
          </MNGBody>
        </Box>
        <Spacer />
        <Box mt="mngr.27">
          <MNGButton href="/tip$donate">TIP $</MNGButton>
        </Box>
      </Flex>

      <Image src="/img/art/1MasterNatarajGTakingOff.jpg"
        w="100%" mt="mngr.88"
        alt="Master Nataraj G TAKING OFF Art"
        title="Master Nataraj G TAKING OFF Art" />
      <Flex>
        <Box>
          <MNGH2 mt="mngr.27">TAKING OFF</MNGH2>
          <MNGBody>
            December 2020.
            <br/>Painting. Acrylic paint and spray paint.
          </MNGBody>
        </Box>
        <Spacer />
        <Box mt="mngr.27">
          <MNGButton href="/tip$donate">TIP $</MNGButton>
        </Box>
      </Flex>

      <Image src="/img/art/2MasterNatarajGInfinitePainting.jpg"
        w="100%" mt="mngr.88"
        alt="Master Nataraj G INFINITE PAINTING Art"
        title="Master Nataraj G INFINITE PAINTING Art" />
      <Flex>
        <Box>
          <MNGH2 mt="mngr.27">INFINITE PAINTING</MNGH2>
          <MNGBody>
            December 2020.
            <br/>Painting. Acrylic paint and spray paint.
          </MNGBody>
        </Box>
        <Spacer />
        <Box mt="mngr.27">
          <MNGButton href="/tip$donate">TIP $</MNGButton>
        </Box>
      </Flex>

      <Image src="/img/art/3MasterNatarajGCosmicDancer.jpg"
        w="100%" mt="mngr.88"
        alt="Master Nataraj G COSMIC DANCER Art"
        title="Master Nataraj G COSMIC DANCER Art" />
      <Flex>
        <Box>
          <MNGH2 mt="mngr.27">COSMIC DANCER</MNGH2>
          <MNGBody>
            November 2020.
            <br/>Sketch. Ink on Paper.
          </MNGBody>
        </Box>
        <Spacer />
        <Box mt="mngr.27">
          <MNGButton href="/tip$donate">TIP $</MNGButton>
        </Box>
      </Flex>

      <Image src="/img/art/4MasterNatarajGAbandonedRestaurantStoryboard.jpg"
        w="100%" mt="mngr.88"
        alt="Master Nataraj G COVID DREAM 95 Abandoned Restaurant Storyboard Art"
        title="Master Nataraj G COVID DREAM 95 Abandoned Restaurant Storyboard Art" />
      <Flex>
        <Box>
          <MNGH2 mt="mngr.27">COVID DREAM 95</MNGH2>
          <MNGBody>
            November 2020.
            <br/>Storyboard Sketch. Ink on Paper.
          </MNGBody>
        </Box>
        <Spacer />
        <Box mt="mngr.27">
          <MNGButton href="/tip$donate">TIP $</MNGButton>
        </Box>
      </Flex>

      <Image src="/img/art/5MasterNatarajGTongvaGatekeeper.jpg"
        w="100%" mt="mngr.88"
        alt="Master Nataraj G TONGVA GATEKEEPER Art"
        title="Master Nataraj G TONGVA GATEKEEPER Art" />
      <Flex>
        <Box>
          <MNGH2 mt="mngr.27">TONGVA GATEKEEPER</MNGH2>
          <MNGBody>
            August 2020.
            <br/>Channeled Sketch. Ink on Paper.
          </MNGBody>
        </Box>
        <Spacer />
        <Box mt="mngr.27">
          <MNGButton href="/tip$donate">TIP $</MNGButton>
        </Box>
      </Flex>

      <Image src="/img/art/6MasterNatarajGBodyLoveBellHooks.jpg"
        w="100%" mt="mngr.88"
        alt="Master Nataraj G BODY LOVE Art"
        title="Master Nataraj G BODY LOVE Art" />
      <Flex>
        <Box>
          <MNGH2 mt="mngr.27">BODY LOVE</MNGH2>
          <MNGBody>
            July 2020.
            <br/>Sketch. Ink on Paper.
          </MNGBody>
        </Box>
        <Spacer />
        <Box mt="mngr.27">
          <MNGButton href="/tip$donate">TIP $</MNGButton>
        </Box>
      </Flex>

      <Image src="/img/art/7MasterNatarajGUnity&Action.jpg"
        w="100%" mt="mngr.88"
        alt="Master Nataraj G UNITY &amp; ACTION Art"
        title="Master Nataraj G UNITY &amp; ACTION Art" />
      <Flex>
        <Box>
          <MNGH2 mt="mngr.27">UNITY &amp; ACTION</MNGH2>
          <MNGBody>
            March 2020.
            <br/>Sketch. Ink on Paper.
          </MNGBody>
        </Box>
        <Spacer />
        <Box mt="mngr.27">
          <MNGButton href="/tip$donate">TIP $</MNGButton>
        </Box>
      </Flex>

      <MNGH2>Selections from the Sketchbook</MNGH2>
      <Image w="100%" src="/img/art/sketchbook/20tunnel.jpg"
        alt="Master Nataraj G Tunnel Sketch Art"
        title="Master Nataraj G Tunnel Sketch Art" />
      <Image mt="mngr.27" w="100%" src="/img/art/sketchbook/19papabear.jpg"
        alt="Master Nataraj G Papa Bear Sketch Art"
        title="Master Nataraj G Papa Bear Sketch Art" />
      <Image mt="mngr.27" w="100%" src="/img/art/sketchbook/18defeatingmara.jpg"
        alt="Master Nataraj G Defeating Mara Sketch Art"
        title="Master Nataraj G Defeating Mara Sketch Art" />
      <Image mt="mngr.27" w="100%" src="/img/art/sketchbook/17newageoflight.jpg"
        alt="Master Nataraj G New Age of Light Sketch Art"
        title="Master Nataraj G New Age of Light Sketch Art" />
      <Image mt="mngr.27" w="100%" src="/img/art/sketchbook/16kalkimoves.jpg"
        alt="Master Nataraj G Kalki Moves Sketch Art"
        title="Master Nataraj G Kalki Moves Sketch Art" />
      <Image mt="mngr.27" w="100%" src="/img/art/sketchbook/15robertplant.jpg"
        alt="Master Nataraj G Robert Plant Sketch Art"
        title="Master Nataraj G Robert Plant Sketch Art" />
      <Image mt="mngr.27" w="100%" src="/img/art/sketchbook/14motherships.jpg"
        alt="Master Nataraj G Motherships Sketch Art"
        title="Master Nataraj G Motherships Sketch Art" />
      <Image mt="mngr.27" w="100%" src="/img/art/sketchbook/13strut.jpg"
        alt="Master Nataraj G Strut Sketch Art"
        title="Master Nataraj G Strut Sketch Art" />
      <Image mt="mngr.27" w="100%" src="/img/art/sketchbook/12lightbridge.jpg"
        alt="Master Nataraj G Light Bridge Sketch Art"
        title="Master Nataraj G Light Bridge Sketch Art" />
      <Image mt="mngr.27" w="100%" src="/img/art/sketchbook/11hindihand.jpg"
        alt="Master Nataraj G Hindi Hand Sketch Art"
        title="Master Nataraj G Hindi Hand Sketch Art" />
      <Image mt="mngr.27" w="100%" src="/img/art/sketchbook/10deviking.jpg"
        alt="Master Nataraj G Devi King Sketch Art"
        title="Master Nataraj G Devi King Sketch Art" />
      <Image mt="mngr.27" w="100%" src="/img/art/sketchbook/09sonicboom.jpg"
        alt="Master Nataraj G Sonic Boom Sketch Art"
        title="Master Nataraj G Sonic Boom Sketch Art" />
      <Image mt="mngr.27" w="100%" src="/img/art/sketchbook/08natarajhonoring.jpg"
        alt="Master Nataraj G Honoring Nataraj Sketch Art"
        title="Master Nataraj G Honoring Nataraj Sketch Art" />
      <Image mt="mngr.27" w="100%" src="/img/art/sketchbook/07ourstudio.jpg"
        alt="Master Nataraj G Our Studio Sketch Art"
        title="Master Nataraj G Our Studio Sketch Art" />
      <Image mt="mngr.27" w="100%" src="/img/art/sketchbook/06loveworldhigherandhigher.jpg"
        alt="Master Nataraj G Love World Higher and Higher Sketch Art"
        title="Master Nataraj G Love World Higher and Higher Sketch Art" />
      <Image mt="mngr.27" w="100%" src="/img/art/sketchbook/05sketchdimensions.jpg"
        alt="Master Nataraj G Sketch Dimensions Art"
        title="Master Nataraj G Sketch Dimensions Art" />
      <Image mt="mngr.27" w="100%" src="/img/art/sketchbook/03selfie.jpg"
        alt="Master Nataraj G Selfie Sketch Art"
        title="Master Nataraj G Selfie Sketch Art" />
      <Image mt="mngr.27" w="100%" src="/img/art/sketchbook/02planet.jpg"
        alt="Master Nataraj G Planet Sketch Art"
        title="Master Nataraj G Planet Sketch Art" />
      <Image mt="mngr.27" w="100%" src="/img/art/sketchbook/01sawadragonintheclouds.jpg"
        alt="Master Nataraj G Dragon Clouds Sketch Art"
        title="Master Nataraj G Dragon Clouds Sketch Art" />
      <Image mt="mngr.27" w="100%" src="/img/art/sketchbook/00watercolorPlay.jpg"
        alt="Master Nataraj G Watercolor Play Sketch Art"
        title="Master Nataraj G Watercolor Play Sketch Art" />

      <MNGHummingbirdSpacer />

    </MNGPage>
  )
}
