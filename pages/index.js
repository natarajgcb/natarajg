import { Center, Image } from '@chakra-ui/react'
import { MNGButton } from '../components/MNGButton'
import { MNGPage } from '../components/MNGLayout'
import {
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
      <Image mt="mngr.17" width="100%"
        src="/img/MasterNatarajGFlower.jpg"
        alt="Photograph of Master Nataraj G"
        title="Master Nataraj G" />

      <MNGBody textAlign="center">How do we live abundantly as our highest and truest selves?</MNGBody>

      <MNGHummingbirdSpacer />

    </MNGPage>
  )
}
