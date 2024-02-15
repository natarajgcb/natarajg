import { Center, Image } from '@chakra-ui/react'
import { MNGButton } from '../components/MNGButton'
import { MNGPage } from '../components/MNGLayout'
import {
  MNGBody,
  MNGH1,
  MNGH2,
  MNGH3,
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
        src="/img/MNGButterfly.jpeg"
        alt="Photo of a Monarch Butterfly enjoying flowers in a beautiful garden"
        title="Butterfly Beacon" />
        
      <MNGH1 marginBottom="0" marginTop="mngr.27">COVID DREAMS 95</MNGH1>
      <MNGH3 marginBottom="mngr.27" marginTop="0">Creating New Worlds. For the kids. For the ancestors.</MNGH3>
      <MNGBody>A collaborative project bringing together storytelling from around the world to create a new world where many worlds harmoniously flow together for Peace, Love and Joy for all beings.</MNGBody>
      <MNGBody>Subscribe to our mailing list to learn more.</MNGBody>
      
      <MNGHummingbirdSpacer />

      <Image mt="mngr.17" width="100%"
        src="/img/MasterNatarajGFlower.jpg"
        alt="Photograph of Master Nataraj G"
        title="Master Nataraj G" />

      <MNGBody textAlign="center">How do we live abundantly as our highest and truest selves?</MNGBody>

      <MNGHummingbirdSpacer />

    </MNGPage>
  )
}
