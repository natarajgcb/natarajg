import {
  Center, Image
} from '@chakra-ui/react'
import { MNGButton } from '../components/MNGButton'
import { MNGPage } from '../components/MNGLayout'
import {
  MNGBody,
  MNGHindiTitle,
  MNGHummingbirdSpacer
} from '../components/MNGType'

export default function SponsorTipDonate() {
  const mngprops = {
    meta: {
      title: "Sponsor $ Tip $ Donate * Master Nataraj G",
      description: "Independent Spiritual and Creative Practice that serves people and planet directly while not producing capitalistic 'value' requires direct support from community to materially sustain. Your donation supports housing, food and spiritual practice for Master Nataraj G and his family."
    },
    og: {
      title: "Sponsor $ Tip $ Donate * Master Nataraj G",
      description: "Independent Spiritual and Creative Practice that serves people and planet directly while not producing capitalistic 'value' requires direct support from community to materially sustain. Your donation supports housing, food and spiritual practice for Master Nataraj G and his family.",
      image: "/img/MasterNatarajGSponsorTipDonate.jpg"
    }
  };

  return (
    <MNGPage meta={mngprops.meta} og={mngprops.og}>
      <Image mt="mngr.17" mb="mngr.44" width="100%"
        src="/img/MasterNatarajGSponsorTipDonate.jpg"
        alt="Master Nataraj G Smiling in a Garden"
        title="Master Nataraj G Smiling in a Garden" />

      <MNGHindiTitle hindiText="दान" engText="Sponsor $ Tip $ Donate" left />

      <MNGBody>
        Independent Spiritual and Creative Practice that serves people and planet directly while not producing capitalistic &#34;value&#34; requires direct support from community to materially sustain.
      </MNGBody>
      <MNGBody>
        Master Nataraj G has lived without secure housing or regular income for years and is constantly serving all beings to collectively build a New World of Peace, Love, Joy, Balance and Gratitude regardless of monetary gain.
      </MNGBody>
      <MNGBody>
        Your donation supports housing, food and spiritual practice for Master Nataraj G and his family.
      </MNGBody>
      <MNGBody>
        For details on sponsorship and partnering together,
        please <a href="mailto:one@natarajg.space?subject=Sponsoring%20MNG">send Master Nataraj G a note.</a>
      </MNGBody>

      <iframe
        width="100%" height="800px"
        src="https://masternatarajg.giveforms.com/donate"
      ></iframe>

      <MNGHummingbirdSpacer />

    </MNGPage>
  )
}
