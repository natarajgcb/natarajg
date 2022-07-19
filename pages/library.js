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

export default function Library() {
  const mngprops = {
    meta: {
      title: "Library * Master Nataraj G",
      description: "Enjoy all the Master Nataraj G Healing & Art Practice articles, books, videos, films, music and interactive resources."
    },
    og: {
      title: "Library * Master Nataraj G",
      description: "Enjoy all the Master Nataraj G Healing & Art Practice articles, books, videos, films, music and interactive resources.",
      image: "/img/stubs/MNGLibrary.jpg"
    }
  };

  return (
    <MNGPage meta={mngprops.meta} og={mngprops.og}>
      <Image mt="mngr.17" mb="mngr.44" width="100%"
        src="/img/stubs/MNGLibrary.jpg"
        alt="Master Nataraj G Library In Progress"
        title="Master Nataraj G Library In Progress" />

      <MNGH1>Library</MNGH1>

      <MNGBody>
        Coming soon... a place where all the Master Nataraj G Healing & Art Practice articles, books, videos, films, music and interactive resources will be made available.
        <br/><br/>Questions? Requests? Please <a href="mailto:one@natarajg.space?subject=MNG%20Library">send Master Nataraj G a note</a>.
      </MNGBody>

      <MNGHummingbirdSpacer />

    </MNGPage>
  )
}
