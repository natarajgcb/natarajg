import Link from 'next/link'
import {
  Flex, Box, Text, Center, Image, Link as ChakraLink
} from '@chakra-ui/react'
import { MNGButton } from '../components/MNGButton'
import { MNGPage } from '../components/MNGLayout'
import {
  MNGH2,
  MNGBody,
  MNGCalloutP,
  MNGHindiHeading,
  MNGHindiTitle,
  MNGHummingbirdSpacer
} from '../components/MNGType'

export default function Yoga() {
  const mngprops = {
    meta: {
      title: "Yoga * Master Nataraj G",
      description: "Yogic practice creates the conditions within each one of us that lead to the alignment of our Bodies, Minds, Hearts, Spirits, Souls, Environment, Land, Communities, All Our Relations, the entire Cosmos and the Divine Beyond."
    },
    og: {
      title: "Yoga * Master Nataraj G",
      description: "Yogic practice creates the conditions within each one of us that lead to the alignment of our Bodies, Minds, Hearts, Spirits, Souls, Environment, Land, Communities, All Our Relations, the entire Cosmos and the Divine Beyond.",
      image: "/img/MasterNatarajGYoga.jpg"
    }
  };

  return (
    <MNGPage meta={mngprops.meta} og={mngprops.og}>
      <Image mt="mngr.17" width="100%"
        src="/img/MasterNatarajGYoga.jpg"
        alt="Photograph of Master Nataraj G Practicing Yoga"
        title="Master Nataraj G Practicing Yoga" />

      <MNGHindiTitle hindiText="योग" engText="YOGA" left />

      <MNGBody>
        The practice of Yoga has blossomed all over the globe while evolving and growing as a result of Yoga’s intrinsic methods for connecting with our truest and highest selves. Yogic practice creates the conditions within each one of us that lead to the alignment of our Bodies, Minds, Hearts, Spirits, Souls, Environment, Land, Communities, All Our Relations, the entire Cosmos and the Divine Beyond.
      </MNGBody>

      <MNGBody>
        Master Nataraj G is at the fore of the continuing evolution of Yogic practice. Through study, practice and community building across the world’s religions and wisdom traditions, medicinal frameworks, revolutionary struggles for peace and liberation as well as various paths of Yogic practice, Master Nataraj G has established a complete practice that leads us toward a New World rooted in the Divine Energies of Peace, Love, Joy, Balance and Gratitude.
      </MNGBody>

      <MNGHindiHeading hindiText="प्रस्ताव" engText="OFFERINGS" left />
      <MNGBody>
        We honor the <ChakraLink as={Link} href="/madeontongvaland">Tongva Land</ChakraLink> we are on and share these offerings with you so we may all live in abundance, aligned with our highest and truest Infinite Self, for a New World rooted in the Divine Energies of Peace, Love, Joy, Balance and Gratitude.
      </MNGBody>

      <MNGH2>1-on-1 Yoga Training, 1 month</MNGH2>
      <Flex>
        <Box width="61.803%" pr={6}>
          <MNGBody>
            Share your life&#39;s journey, dreams and intentions with Master Nataraj G and receive a customized schedule and complete Yogic practices for one month tailored for you.
          </MNGBody>
          <MNGBody>
            This usually takes form as one 30-minute initial conversation followed by 16 one-hour guided sessions with four sessions per week for four weeks and may be adjusted to your needs.
          </MNGBody>
          <MNGBody>
            All sessions may be conducted virtually.
          </MNGBody>
          <MNGBody>
            <ChakraLink
              as={Link}
              href="https://buy.stripe.com/eVag0cfV00KZ1NKdQQ"
            >
              Start Yoga Training
            </ChakraLink>.
          </MNGBody>
        </Box>
        <Box align="center" width="38.197%">
          <ChakraLink as={Link} href="https://buy.stripe.com/eVag0cfV00KZ1NKdQQ">
            <Image src="/img/yoga/MNGYogaTraining.jpg"
              alt="Master Nataraj G Yoga Training"
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
            $2,000&nbsp;
            <Text as="span" variant="smallcaps">USD</Text>
          </MNGCalloutP>
          <MNGButton href="https://buy.stripe.com/eVag0cfV00KZ1NKdQQ">ACCEPT</MNGButton>
        </Box>
      </Flex>

      <MNGH2>1-on-1 Breath Training, 3 sessions</MNGH2>
      <Flex>
        <Box width="61.803%" pr={6}>
          <MNGBody>
            One of Yoga’s 8 Limbs is प्राणायाम (pranayam): Life Force Extension through Breath Control.
          </MNGBody>
          <MNGBody>
            Connect with Master Nataraj G to practice ancient breathing techniques that allow you to direct your breath and life force for instant access to deeper and greater levels of Clarity, Peace, Love, Joy, Balance and Gratitude.
          </MNGBody>
          <MNGBody>
            Three sessions, each one hour long. All sessions may be conducted virtually.
          </MNGBody>
          <MNGBody>
            <ChakraLink
              as={Link}
              href="https://buy.stripe.com/9AQ4hucIO79n8c87st"
            >
              Start Breath Training
            </ChakraLink>.
          </MNGBody>
        </Box>
        <Box align="center" width="38.197%">
          <ChakraLink as={Link} href="https://buy.stripe.com/9AQ4hucIO79n8c87st">
            <Image src="/img/yoga/MNGBreathTraining.jpg"
              alt="Master Nataraj G Breath Training"
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
            $369&nbsp;
            <Text as="span" variant="smallcaps">USD</Text>
          </MNGCalloutP>
          <MNGButton href="https://buy.stripe.com/9AQ4hucIO79n8c87st">ACCEPT</MNGButton>
        </Box>
      </Flex>

      <MNGHummingbirdSpacer />

    </MNGPage>
  )
}
