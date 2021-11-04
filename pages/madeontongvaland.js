import Link from 'next/link'
import {
  Flex, Box, Text, Center, Image, Link as ChakraLink
} from '@chakra-ui/react'
import { MNGButton } from '../components/MNGButton'
import { MNGPage } from '../components/MNGLayout'
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

export default function MadeOnTongvaland() {
  const mngprops = {
    meta: {
      title: "Made on Tongvaland * Master Nataraj G",
      description: "Join other Creators on Tongvaland honoring the land, supporting one another and building for Indigenous Sovereignty, Peace, Love, Joy, Balance and Gratitude for All Our Relations — AHO Mitakuye Oyasin."
    },
    og: {
      title: "Made on Tongvaland * Master Nataraj G",
      description: "Join other Creators on Tongvaland honoring the land, supporting one another and building for Indigenous Sovereignty, Peace, Love, Joy, Balance and Gratitude for All Our Relations — AHO Mitakuye Oyasin.",
      image: "/img/MadeOnTongvaland.jpg"
    }
  };

  return (
    <MNGPage meta={mngprops.meta} og={mngprops.og}>
      <Image mt="mngr.17" mb="mngr.44" width="100%"
        borderRadius="full"
        boxShadow="0 0 90px 10px rgba(48,9,49,0.69)"
        src="/img/MadeOnTongvaland.jpg"
        alt="Made on Tongvaland Seal"
        title="Made on Tongvaland Seal" />

      <MNGH1>Made on Tongvaland</MNGH1>

      <MNGBody>
        A Movement for Creators of all kinds &mdash;
        <br/><br/>Artists
        <br/>Healers
        <br/>Musicians
        <br/>Dancers
        <br/>Filmmakers
        <br/>Poets
        <br/>Painters
        <br/>Photographers
        <br/>Storytellers
        <br/>Farmers
        <br/>Gardeners
        <br/>Chefs
        <br/>Mystics
        <br/>Writers
        <br/>Architects
        <br/>Designers
        <br/>Explorers
        <br/>Revolutionaries
        <br/>Parents
        <br/>Children
        <br/>The Living
        <br/><br/>creating on Tongva Land &mdash; a.k.a. Los Angeles, Santa Monica and the surrounding areas.
        <br/><br/>We offer this Seal for you to place on your creations
        and join the Made On Tongvaland Community.
      </MNGBody>

      <MNGH2>Made on Tongvaland Seal</MNGH2>
      <Flex>
        <Box width="61.803%" pr={6}>
          <MNGBody>
            Download the high resolution, transparent Made On Tongvaland Seal and join the Made On Tongvaland Community. Join other Creators on Tongvaland honoring the land, supporting one another and building for Indigenous Sovereignty, Peace, Love, Joy, Balance and Gratitude for All Our Relations — AHO Mitakuye Oyasin.
          </MNGBody>
          <MNGBody>
            All funds are put toward growing Native Creators and realizing dreams, visions and intentions shared amongst the Made On Tongvaland Community.
          </MNGBody>
          <MNGBody>
            <ChakraLink
              as={Link}
              href="https://buy.stripe.com/cN201e5gmfFT0JGdQV"
            >
              Join the Community
            </ChakraLink>.
          </MNGBody>
        </Box>
        <Box align="center" width="38.197%">
          <ChakraLink as={Link} href="https://buy.stripe.com/cN201e5gmfFT0JGdQV">
            <Image src="/img/MadeOnTongvaland.jpg"
              alt="Made on Tongvaland Seal"
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
            $39&nbsp;
            <Text as="span" variant="smallcaps">USD</Text>
          </MNGCalloutP>
          <MNGButton href="https://buy.stripe.com/cN201e5gmfFT0JGdQV">ACCEPT</MNGButton>
        </Box>
      </Flex>

      <MNGHummingbirdSpacer />

      <MNGWordsOfLove align="right">
        <MNGWordsOfLoveText>
          <MNGBody mb="mngr.7">Master Nataraj G revealed to me the most beautiful flower with the sweetest nectar this world has to offer. Bless you child. Thank you.</MNGBody>
          <MNGBody variant="serifi">In Love, Grandmother Gloria Arellanes</MNGBody>
        </MNGWordsOfLoveText>
        <MNGWordsOfLoveFace imgsrc="/img/inlove/00gmagloria.jpg" />
      </MNGWordsOfLove>

      <MNGWordsOfLove align="left">
        <MNGWordsOfLoveFace imgsrc="/img/inlove/13lydiaponce.jpg" />
        <MNGWordsOfLoveText>
          <MNGBody mb="mngr.7">The truth serum works for Master Nataraj G because Master Nataraj G is the truth.</MNGBody>
          <MNGBody variant="serifi">In Love, Lydia Poncé</MNGBody>
        </MNGWordsOfLoveText>
      </MNGWordsOfLove>

      <MNGWordsOfLove align="right">
        <MNGWordsOfLoveText>
          <MNGBody mb="mngr.7">Master
            Nataraj G revealed to me<br/>
            that the crown<br/>
            that sits atop our bodies<br/>
            shines like the golden sun.<br/>
            Aum Mani Padme Hum.
          </MNGBody>
          <MNGBody variant="serifi">In Love, Brother Curtis Robertson</MNGBody>
        </MNGWordsOfLoveText>
        <MNGWordsOfLoveFace imgsrc="/img/inlove/11brocurtis.jpg" />
      </MNGWordsOfLove>

      <MNGHummingbirdSpacer />

    </MNGPage>
  )
}
