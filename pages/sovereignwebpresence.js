import Link from 'next/link'
import {
  Flex, Box, Text, Center, Image, Link as ChakraLink
} from '@chakra-ui/react'
import { MNGButton } from '../components/MNGButton'
import { MNGPage, MNGNote } from '../components/MNGLayout'
import {
  MNGH1,
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

export default function SovereignWebPresence() {
  const mngprops = {
    meta: {
      title: "Sovereign Web Presence * Master Nataraj G",
      description: "Our Sovereign Web Presence is free from the influence of colonial forces, governments, nations and banks that aim to harvest our energy, corrupt our minds, control our feelings of self-worth and in any way limit the Infinite Supreme Power, Authority and Value that we all intrinsically embody."
    },
    og: {
      title: "Sovereign Web Presence * Master Nataraj G",
      description: "Our Sovereign Web Presence is free from the influence of colonial forces, governments, nations and banks that aim to harvest our energy, corrupt our minds, control our feelings of self-worth and in any way limit the Infinite Supreme Power, Authority and Value that we all intrinsically embody.",
      image: "/img/art/1MasterNatarajGTakingOff.jpg"
    }
  };

  return (
    <MNGPage meta={mngprops.meta} og={mngprops.og}>
      <Image mt="mngr.17" mb="mngr.44" width="100%"
        src="/img/art/1MasterNatarajGTakingOff.jpg"
        alt="Master Nataraj G TAKING OFF Artwork"
        title="Master Nataraj G TAKING OFF Artwork" />

      <MNGH1>Sovereign Web Presence</MNGH1>

      <MNGNote>
        संप्रभुता<br/>
        <strong>sovereignty</strong> noun<br/>
        supreme power or authority: <em>how can we hope to wrest sovereignty away from the oligarchy and back to the people?</em><br/>
        • the authority of a state to govern itself or another state: national sovereignty.<br/>
        • a self-governing state.
      </MNGNote>

      <MNGBody>
        The above definition is from Webster&#39;s English Dictionary. As a colonial force in this world, English carries with it a layer of violence and oppression. In this definition, we see sovereignty being very closely tied to statehood, governance and hierarchy. There is no mention of Natural Order, Cosmic Law or Divine Alignment — the notion that we are born sovereign, we are never apart from an ever-present self-governing state. What are our bodies anyway? How about: <em>The People are already sovereign.</em>
      </MNGBody>

      <MNGBody>
        Master Nataraj G is in full awareness of supreme power and authority and practices to remain in this awareness, act from this awareness at all times, in all places and share it with as many people as humanly possible.
      </MNGBody>

      <MNGBody>
        This web presence is a culmination and expression of free and open technologies deployed into the <strong>decentralized web</strong>, a distributed architecture for the Internet that results in sustainable and self-healing security, privacy and autonomy for all Creators. The ethos, principles and foundational technologies of decentralization prevent centralized control over individual governance and value.
      </MNGBody>

      <MNGBody>
        No nation, government, bank, societal norm, cultural practice, or false border of any kind, physical or metaphysical, in the mind, in our language or in our laws, may limit the Infinite Supreme Power, Authority and Value that we all intrinsically embody.
      </MNGBody>

      <MNGH2>Sovereign Tech Consult, 1 hour</MNGH2>
      <Flex>
        <Box width="61.803%" pr={6}>
          <MNGBody>
            Want to express your Self freely, forever? Let&#39;s talk.
          </MNGBody>
          <MNGBody>
            Connect with Master Nataraj G for a one hour conversation to discuss your creative practice and how a Sovereign Web Presence can empower you to sustain a lifestyle based on the activities that bring you and our Mother Earth the most Peace, Love, Joy, Balance and Gratitude. After the conversation, a customized guide with resources are created and yours to keep.
          </MNGBody>
          <MNGBody>
            All sessions may be conducted virtually.
          </MNGBody>
          <MNGBody>
            <ChakraLink
              as={Link}
              href="https://buy.stripe.com/cN2eW8eQWbpD3VS14a"
            >
              Schedule a Consult
            </ChakraLink>.
          </MNGBody>
        </Box>
        <Box align="center" width="38.197%">
          <ChakraLink as={Link} href="https://buy.stripe.com/cN2eW8eQWbpD3VS14a">
            <Image src="/img/MasterNatarajGConsult.jpg"
              alt="Master Nataraj G Consult"
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
            $139&nbsp;
            <Text as="span" variant="smallcaps">USD</Text>
          </MNGCalloutP>
          <MNGButton href="https://buy.stripe.com/cN2eW8eQWbpD3VS14a">ACCEPT</MNGButton>
        </Box>
      </Flex>

      <MNGHummingbirdSpacer />

      <MNGWordsOfLove align="left">
        <MNGWordsOfLoveFace imgsrc="/img/inlove/07davidbyrne.jpg" />
        <MNGWordsOfLoveText>
          <MNGBody mb="mngr.7">We always look forward to what<br/>Master Nataraj G is cooking up next.</MNGBody>
          <MNGBody variant="serifi">In Love, David Byrne</MNGBody>
        </MNGWordsOfLoveText>
      </MNGWordsOfLove>

      <MNGWordsOfLove align="right">
        <MNGWordsOfLoveText>
          <MNGBody mb="mngr.7">Damn good hooks. Master Nataraj G<br/>got some DAMN. GOOD. HOOKS.</MNGBody>
          <MNGBody variant="serifi">IN LOVE, YOUR BROTHER, SPIKE LEE</MNGBody>
        </MNGWordsOfLoveText>
        <MNGWordsOfLoveFace imgsrc="/img/inlove/08spikelee.jpg" />
      </MNGWordsOfLove>

      <MNGWordsOfLove align="left">
        <MNGWordsOfLoveFace imgsrc="/img/inlove/03jack.jpg" />
        <MNGWordsOfLoveText>
          <MNGBody mb="mngr.7">Master Nataraj G is capturing<br/>pure beauty with every bite.</MNGBody>
          <MNGBody variant="serifi">In Love, Jack Nicholson</MNGBody>
        </MNGWordsOfLoveText>
      </MNGWordsOfLove>

      <MNGHummingbirdSpacer />

    </MNGPage>
  )
}
