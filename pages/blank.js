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

      <Box h='100vw'></Box>

    </MNGPage>
  )
}
