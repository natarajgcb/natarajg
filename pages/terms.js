import Link from 'next/link'
import {
  Center, Image, Link as ChakraLink
} from '@chakra-ui/react'
import { MNGButton } from '../components/MNGButton'
import { MNGPage } from '../components/MNGLayout'
import {
  MNGH1,
  MNGBody,
  MNGHindiTitle,
  MNGHummingbirdSpacer
} from '../components/MNGType'

export default function Terms() {
  const mngprops = {
    meta: {
      title: "Terms * Master Nataraj G",
      description: "Terms of Use Agreement for the Master Nataraj G Healing and Art Practice: 50-50. We consider both us and you members of the same community committed to Healing and Art. By visiting our website and engaging with that which is published and shared here, you enter into an ongoing connection that weaves our Energy together to heal, change and build our New World rooted in the Divine Energies of Peace, Love, Joy, Balance and Gratitude."
    },
    og: {
      title: "Terms * Master Nataraj G",
      description: "Terms of Use Agreement for the Master Nataraj G Healing and Art Practice: 50-50. We consider both us and you members of the same community committed to Healing and Art. By visiting our website and engaging with that which is published and shared here, you enter into an ongoing connection that weaves our Energy together to heal, change and build our New World rooted in the Divine Energies of Peace, Love, Joy, Balance and Gratitude.",
      image: "/img/MasterNatarajGFlower.jpg"
    }
  };

  return (
    <MNGPage meta={mngprops.meta} og={mngprops.og}>

      <MNGH1 mt='mngr.27'>Terms of Use Agreement: 50-50</MNGH1>

      <MNGBody>
        Welcome to the Master Nataraj G Healing and Art Practice.

        <br/><br/>We consider both you and us equal members of the same community committed to Healing and Art. Though we may be crafting this website and sharing various offerings with you, you are engaging with our website and our offerings in an equal exchange, 50-50. By visiting our website and engaging with that which is published and shared here, you enter into an ongoing connection that weaves our Energy together to heal, change and build our New World rooted in the Divine Energies of Peace, Love, Joy, Balance and Gratitude.

        <br/><br/>We ask that you remain respectful in all your interactions with us and the Master Nataraj G Healing and Art Practice Beloved Community. We will be adding more detailed terms soon, with you contributing to them as an equal partner, 50-50, in growing our community and how we co-operate.

        <br/><br/>Questions? Requests? Please <a href="mailto:one@natarajg.space?subject=MNG%20Terms">send Master Nataraj G a note</a>.
      </MNGBody>

      <MNGHummingbirdSpacer />

    </MNGPage>
  )
}
