import Link from 'next/link'
import Script from 'next/script'
import {
  Flex, Box, Text, Center, Image, Link as ChakraLink
} from '@chakra-ui/react'
import { MNGPage } from '../components/MNGLayout'
import { MNGAddEvent } from '../components/MNGAddEvent'
import {
  MNGTitle,
  MNGH1,
  MNGH2,
  MNGH3,
  MNGBody,
  MNGHummingbirdSpacer
} from '../components/MNGType'

export default function VirtualStudio() {
  const mngprops = {
    meta: {
      title: "Land of Gold * Master Nataraj G",
      description: "May your kind heart find a land of gold."
    },
    og: {
      title: "Land of Gold * Master Nataraj G",
      description: "May your kind heart find a land of gold.",
      image: "/img/MasterNatarajGLove.jpg"
    }
  };

  return (
    <MNGPage meta={mngprops.meta} og={mngprops.og}>

      <MNGHummingbirdSpacer />

      <MNGH2>Land of Gold</MNGH2>

      <MNGH3>
        by Anoushka Shankar and Alev Lenz
      </MNGH3>

      <MNGBody>
        Be no burden, be polite
        <br/>Say goodbye and say hello
        <br/>Wait your turn, sit up proud
        <br/>Go to bed now, sweet dreams
        <br/>
        <br/>Find the kind heart
        <br/>Rest your feet and soul
        <br/>May your kind heart
        <br/>Find a land of gold
        <br/>
        <br/>Pay attention, say your name
        <br/>Listen closely and keep warm
        <br/>Gentle hands, you are brave
        <br/>Look at me and carry on
        <br/>All is good, I love you
        <br/>You can hear me, you can call
        <br/>Sing your song with ease and pride
        <br/>I'll be there, not far behind
        <br/>
        <br/>Find the kind heart
        <br/>Rest your feet and soul
        <br/>May your kind heart
        <br/>Find a land of gold
        <br/>
        <br/>Tell them I walked
        <br/>Tell them I walked
        <br/>Tell them I walked
        <br/>Tell them I walked your way
        <br/>Tell them I walked your way
        <br/>Tell them I walked your way
        <br/>Tell them I walked...
        <br/>Tell them I walked your way
      </MNGBody>

      <MNGHummingbirdSpacer />

    </MNGPage>
  )
}
