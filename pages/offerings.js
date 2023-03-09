import { Center, Image, Flex, Box } from '@chakra-ui/react'
import { MNGButton } from '../components/MNGButton'
import { MNGPage } from '../components/MNGLayout'
import {
  MNGH2,
  MNGBody,
  MNGHindiHeading,
  MNGHindiTitle,
  MNGLandLaunchpad,
  MNGHummingbirdSpacer
} from '../components/MNGType'

export default function Home() {
  const mngprops = {
    meta: {
      title: "Master Nataraj G Healing & Art Practice",
      description: "How do we live abundantly as our highest and truest selves?"
    },
    og: {
      title: "Master Nataraj G Healing & Art Practice",
      description: "How do we live abundantly as our highest and truest selves?",
      image: "/img/MasterNatarajGFlower.jpg"
    }
  };

  return (
    <MNGPage meta={mngprops.meta} og={mngprops.og}>
      <Flex >
        <Box w="50%">
          <Image mt="mngr.17" width="100%"
            src="/img/MasterNatarajGFlower.jpg"
            alt="Photograph of Master Nataraj G"
            title="Master Nataraj G"
            style={{
              borderRadius:"50%"
            }} />
        </Box>
        <Center w="50%">
          <Box textAlign="center">
            <MNGH2 mt={0}>
              Offerings
            </MNGH2>

            <MNGBody>
              Live in Abundance
              <br/>
              Aligned with your
              <br/>
              Highest and Truest Self
            </MNGBody>

            <MNGButton href="/offerings">
              Book a Session
            </MNGButton>
          </Box>
        </Center>
      </Flex>

      <MNGHummingbirdSpacer />

    </MNGPage>
  )
}
