import { Center, Image, Flex, Box, Spacer } from '@chakra-ui/react'
import { MNGButton } from '../components/MNGButton'
import { MNGPage } from '../components/MNGLayout'
import {
  MNGH1, MNGH2, MNGH3,
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
              The Art of Liberation
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

      <Center>
        <Box textAlign="center">
          <MNGBody mb={0}>
            <em>Our Offerings</em>
          </MNGBody>
          <MNGH1 mt={0}>
            Connect, Heal &amp; Soar
          </MNGH1>
        </Box>
      </Center>

      <Image src="/img/offers/MasterNatarajGMedicinalYoga.jpg"
        w="100%" mt="mngr.88"
        alt="Master Nataraj G INFINITE PAINTING Art"
        title="Master Nataraj G INFINITE PAINTING Art" />
      <Flex>
        <Box>
          <MNGH3 mt="mngr.27">Medicinal Yoga (In Person)</MNGH3>
          <MNGBody>
            Relax as pain, stress and blockages are gently melted away in a practice bringing together Yoga, Breath, Meditation and Massage that empowers you to live pain-free for life!
          </MNGBody>
        </Box>
        <Spacer />
        <Box mt="mngr.27">
          <MNGButton href="/offers/abcd">Book</MNGButton>
        </Box>
      </Flex>

      <Image src="/img/offers/MasterNatarajGMedicinalYogaOnline.jpg"
        w="100%" mt="mngr.88"
        alt="Master Nataraj G INFINITE PAINTING Art"
        title="Master Nataraj G INFINITE PAINTING Art" />
      <Flex>
        <Box>
          <MNGH3 mt="mngr.27">Medicinal Yoga (Online)</MNGH3>
          <MNGBody>
            Enjoy the pain-relieving benefits of our in person Medicinal Yoga offering from anywhere in the world.
          </MNGBody>
        </Box>
        <Spacer />
        <Box mt="mngr.27">
          <MNGButton href="/offers/abcd">Book</MNGButton>
        </Box>
      </Flex>

      <Image src="/img/offers/MasterNatarajGSelfHealingClass.jpg"
        w="100%" mt="mngr.88"
        alt="Master Nataraj G INFINITE PAINTING Art"
        title="Master Nataraj G INFINITE PAINTING Art" />
      <Flex mb="mngr.44">
        <Box>
          <MNGH3 mt="mngr.27">Self Healing Class</MNGH3>
          <MNGBody>
            This group class will help you master Breathing, Meditation and Yoga, fundamentally improving your health and wellbeing with practices that are 100% free and always available to you. Offered in person and online by donation, no one turned away for lack of funds.
          </MNGBody>
        </Box>
        <Spacer />
        <Box mt="mngr.27">
          <MNGButton href="/offers/abcd">Book</MNGButton>
        </Box>
      </Flex>

    </MNGPage>
  )
}
