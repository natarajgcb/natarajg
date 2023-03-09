import Link from 'next/link'
import {
  Flex, Box, Text, Spacer, HStack, Image, Link as ChakraLink
} from '@chakra-ui/react'
import { MNGButton } from '../components/MNGButton'
import { MNGPage } from '../components/MNGLayout'
import {
  MNGNavLink,
  MNGH2,
  MNGH3,
  MNGBody,
  MNGCalloutP,
  MNGHindiHeading,
  MNGHindiTitle,
  MNGHummingbirdSpacer
} from '../components/MNGType'
import { useRouter } from "next/router"

export default function Art() {
  const mngprops = {
    meta: {
      title: "Art * Master Nataraj G",
      description: "See Art created by Master Nataraj G."
    },
    og: {
      title: "Art * Master Nataraj G",
      description: "See Art created by Master Nataraj G.",
      image: "/img/art/3MasterNatarajGCosmicDancer.jpg"
    }
  };
  const path = useRouter().pathname;

  return (
    <MNGPage meta={mngprops.meta} og={mngprops.og}>

      <HStack spacing="mngr.27">
        <MNGNavLink href="/art"
          color={path == "/art" ? "mngr.link" : "mngr.light"}
          borderBot={path == "/art" ? true : false}>
          Film, Video &amp; Animation
        </MNGNavLink>
        <MNGNavLink href="/art/digital"
          color={path == "/art/digital" ? "mngr.link" : "mngr.light"}
          borderBot={path == "/art/digital" ? true : false}>
          Apps, Web &amp; Interactive
        </MNGNavLink>
        <MNGNavLink href="/art/photos"
          color={path == "/art/photos" ? "mngr.link" : "mngr.light"}
          borderBot={path == "/art/photos" ? true : false}>
          Photos
        </MNGNavLink>
      </HStack>

      <Box w="100%" mt="mngr.17">
        <div style={{
          padding:"42.19% 0 0 0",
          position:"relative"
        }}><iframe src="https://player.vimeo.com/video/749786152?h=6952cad158&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen style={{
            position:"absolute",
            top:"0",
            left:"0",
            width:"100%",
            height:"100%"
          }} title="Taming The Dragon &amp;bull; Moving Meditation"></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js" async></script>
      </Box>
      <Box>
        <MNGH2 mt="mngr.27">TAMING THE DRAGON</MNGH2>
        <MNGBody color="mngr.dim">
          <em>Animation: Concept to Completion.</em>
          <br/>August 2022.
        </MNGBody>
        <MNGBody>
          Unreal Engine 5 Animation and submission for the international Moving Meditations project. A vision of Goddess Quanyin (right), The Buddha (left) and Wukong, The Monkey King (center) from, <em>A Journey to the West</em>.
        </MNGBody>
      </Box>

      <Box w="100%" mt="mngr.88">
        <div style={{
          padding:"56.25% 0 0 0",
          position:"relative"
        }}><iframe src="https://player.vimeo.com/video/209632704?h=9e79cca3d8&title=0&byline=0&portrait=0" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen style={{
            position:"absolute",
            top:"0",
            left:"0",
            width:"100%",
            height:"100%"
          }}></iframe>
        </div>
      </Box>
      <Box>
        <MNGH2 mt="mngr.27">MAKING A MARK</MNGH2>
        <MNGBody color="mngr.dim">
          <em>Short Film: Writing, Directing, Editing, Production.</em>
          <br/>March 2017.
        </MNGBody>
        <MNGBody>
          &quot;Aadhya, a polymath in another time and place, needs to make a mark on her cave wall in the face of impending doom.&quot;
        </MNGBody>
      </Box>

      <Box w="100%" mt="mngr.88">
        <div style={{
          padding:"56.25% 0 0 0",
          position:"relative"
        }}><iframe id="ytplayer" type="text/html" src="https://www.youtube.com/embed/0kzJy1-yNtw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen style={{
            position:"absolute",
            top:"0",
            left:"0",
            width:"100%",
            height:"100%"
          }}></iframe>
        </div>
      </Box>
      <Box>
        <MNGH2 mt="mngr.27">WAKE. UP.</MNGH2>
        <MNGBody color="mngr.dim">
          <em>Short Film: Writing, Directing, Editing, Production.</em>
          <br/>July 2016.
        </MNGBody>
        <MNGBody>
          An early concept for NASA, this filmic tone poem asks the question: How do we embrace the beauty and violence of our world to build a more peaceful, loving and joyful future as we consider life in the Cosmos? Featuring music from Sheila Govindarajan, Andy Page and L Shankar as well as interviews with Tongva land residents.
        </MNGBody>
      </Box>

      <Box w="100%" mt="mngr.88">
        <div style={{
          padding:"56.25% 0 0 0",
          position:"relative"
        }}><iframe src="https://player.vimeo.com/video/290794636?h=bb51e4a977&amp;title=0" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen style={{
            position:"absolute",
            top:"0",
            left:"0",
            width:"100%",
            height:"100%"
          }}></iframe>
        </div>
      </Box>
      <Box>
        <MNGH2 mt="mngr.27">DECOLONIZE DAILY</MNGH2>
        <MNGBody color="mngr.dim">
          <em>Mobile Application: Research & Design; Video: Writing, Directing, Editing, Production.</em>
          <br/>Sept 2018.
        </MNGBody>
        <MNGBody>
          Decolonize Daily brings together art, music, stories and actions folks can take to get involved with longstanding social movements to collectively build a decolonized, peaceful, loving and joyful world together.
        </MNGBody>
      </Box>

      <Box w="100%" mt="mngr.88">
        <div style={{
          padding:"56.25% 0 0 0",
          position:"relative"
        }}><iframe id="ytplayer" type="text/html" src="https://www.youtube.com/embed/WLNqn70OTVM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen style={{
            position:"absolute",
            top:"0",
            left:"0",
            width:"100%",
            height:"100%"
          }}></iframe>
        </div>
      </Box>
      <Box>
        <MNGH2 mt="mngr.27">13th Many Winters Gathering of Elders 2017</MNGH2>
        <MNGBody color="mngr.dim">
          <em>Video: Writing, Editing, Production.</em>
          <br/>Oct 2017.
        </MNGBody>
        <MNGBody>
          The Many Winters Gathering of Elders is a 4-day gathering where Elders and Medicine People from across Turtle Island (North, Central and South America) come and share their traditional teachings and medicine with our community. The Gathering is a giveaway to our community, free & open to all.
        </MNGBody>
      </Box>

      <Box w="100%" mt="mngr.88">
        <div style={{
          padding:"56.25% 0 0 0",
          position:"relative"
        }}><iframe id="ytplayer" type="text/html" src="https://www.youtube.com/embed/uB2XX_vPyto" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen style={{
            position:"absolute",
            top:"0",
            left:"0",
            width:"100%",
            height:"100%"
          }}></iframe>
        </div>
      </Box>
      <Box>
        <MNGH2 mt="mngr.27">SIREN, We Are The West</MNGH2>
        <MNGBody color="mngr.dim">
          <em>Music Video: Cinematography.</em>
          <br/>Dec 2017.
        </MNGBody>
        <MNGBody>
          <em>Siren</em> is the first song from <em>We Are The West&apos;s</em> debut album, <em>The Golden Shore</em>.
        </MNGBody>
      </Box>

      <MNGHummingbirdSpacer />

    </MNGPage>
  )
}
