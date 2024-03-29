import Link from 'next/link'
import {
  Flex, Box, Text, Center, Image, Link as ChakraLink
} from '@chakra-ui/react'
import { ImRocket, ImCalendar } from "react-icons/im";
import { MNGButton } from '../components/MNGButton'
import { MNGPage, MNGNote } from '../components/MNGLayout'
import {
  MNGTitle,
  MNGH1,
  MNGH2,
  MNGBody,
  MNGHummingbirdSpacer
} from '../components/MNGType'

export default function VirtualStudio() {
  const mngprops = {
    meta: {
      title: "Virtual Studio * Master Nataraj G",
      description: "Secure, encrypted audio, video and text chat Virtual Studio to connect with Master Nataraj G."
    },
    og: {
      title: "Virtual Studio * Master Nataraj G",
      description: "Secure, encrypted audio, video and text chat Virtual Studio to connect with Master Nataraj G.",
      image: "/img/MasterNatarajGLove.jpg"
    }
  };

  return (
    <MNGPage meta={mngprops.meta} og={mngprops.og}>

      <Center width="100%" paddingBottom="mngr.27" paddingTop="mngr.17">
        <iframe
          allow="camera; microphone; fullscreen; display-capture; autoplay"
          src="https://meet.jit.si/MasterNatarajG"
          style={{
            width: "100%",
            height: "309px",
            border: "0px"
          }}
        ></iframe>
      </Center>

      <MNGH1>Virtual Studio</MNGH1>

      <MNGBody>
        Join the secure, encrypted Master Nataraj G Healing &amp; Art Practice Virtual Studio by using the dialog above or by downloading the Jitsi Meet App on your mobile device (<a href="https://apps.apple.com/us/app/jitsi-meet/id1165103905" rel="noreferrer" target="_blank">iOS</a>, <a href="https://play.google.com/store/apps/details?id=org.jitsi.meet&hl=en&gl=us" rel="noreferrer" target="_blank">Android</a>) and then visiting <a href="https://meet.jit.si/MasterNatarajG" rel="noreferrer" target="_blank">https://meet.jit.si/MasterNatarajG</a>.
      </MNGBody>

      <MNGBody>
        You do not need to create an account or provide any contact information (i.e. phone number or email) to join. Simply enter your name and enjoy.
      </MNGBody>

      <MNGBody>
        If you have any questions or challenges connecting, please <a href="mailto:one@natarajg.space?subject=Virtual%20Studio">contact Master Nataraj G</a>.
      </MNGBody>

      <MNGH2>
        Office Hours
      </MNGH2>

      <MNGNote>
        <Flex alignItems="center">
          <Box> <ImRocket /> </Box>
          <Box marginLeft="mngr.11"> <ImCalendar /> </Box>
          <MNGBody fontWeight="bold" marginBottom={0} marginLeft="mngr.11">
            Every Thursday @ 3-6pm Pacific @ MNG Virtual Studio
          </MNGBody>
        </Flex>
      </MNGNote>

      <MNGBody>
        Co-operate and collaborate with Master Nataraj G to heal, change and build our New World of Peace, Love, Joy, Balance and Gratitude together during open Office Hours. Join Office Hours from anywhere safely and securely using our encrypted Virtual Studio.
      </MNGBody>

      <MNGHummingbirdSpacer />

    </MNGPage>
  )
}
