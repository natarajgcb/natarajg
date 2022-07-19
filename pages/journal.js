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

export default function Journal() {
  const mngprops = {
    meta: {
      title: "Journal * Master Nataraj G",
      description: "Regularly published articles and interactive resources from the Master Nataraj G Healing & Art Practice."
    },
    og: {
      title: "Journal * Master Nataraj G",
      description: "Regularly published articles and interactive resources from the Master Nataraj G Healing & Art Practice.",
      image: "/img/stubs/MNGJournal.jpg"
    }
  };

  return (
    <MNGPage meta={mngprops.meta} og={mngprops.og}>
      <Image mt="mngr.17" mb="mngr.44" width="100%"
        src="/img/stubs/MNGJournal.jpg"
        alt="Master Nataraj G Journal In Progress"
        title="Master Nataraj G Journal In Progress" />

      <MNGH1>Journal</MNGH1>

      <MNGBody>
        Coming soon... a place where the Master Nataraj G Healing & Art Practice will regularly publish articles and interactive resources.
        <br/><br/>Questions? Requests? Please <a href="mailto:one@natarajg.space?subject=MNG%20Journal">send Master Nataraj G a note</a>.
      </MNGBody>

      <MNGHummingbirdSpacer />

    </MNGPage>
  )
}
