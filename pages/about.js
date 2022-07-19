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

export default function About() {
  const mngprops = {
    meta: {
      title: "About * Master Nataraj G",
      description: "Learn more about Master Nataraj G and the Healing and Art Practice."
    },
    og: {
      title: "About * Master Nataraj G",
      description: "Learn more about Master Nataraj G and the Healing and Art Practice.",
      image: "/img/stubs/MNGJournal.jpg"
    }
  };

  return (
    <MNGPage meta={mngprops.meta} og={mngprops.og}>
      <Image mt="mngr.17" mb="mngr.44" width="100%"
        src="/img/stubs/MasterNatarajGEucalyptusMed.jpg"
        alt="Master Nataraj G Journal In Progress"
        title="Master Nataraj G Journal In Progress" />

      <MNGH1>About Master Nataraj G</MNGH1>

      <MNGBody>
        Master Nataraj G (pronouns: they/them) believes technology is here to elevate the consciousness and quality of life of all beings so that we may all heal, change and build our New World founded on the Divine Energies of Peace, Love, Joy, Balance and Gratitude together. Master Nataraj G has designed solutions for the world’s most enduring and pressing challenges for over 15 years with a beautiful blend of technology, storytelling, music, film, art and healing spiritual practice. From the international, open source, enterprise level educational platform, Sakai, used by thousands of universities all over the world, to the Decolonize Daily mobile application, a community building and social action platform for collective liberation designed by activists for activists, Master Nataraj G has been at the forefront of bringing together scalable, trustworthy and enjoyable systemic solutions to address systemic challenges at their root. As an artist, healer, filmmaker, community organizer, founding member at technology startups and a UX Design Consultant for Fortune 500 companies, Master Nataraj G remains highly knowledgable of current and future needs in the realms of technology, media, culture and social change. Given their skills, experience and focus on serving people and planet, Master Nataraj G excels at collaborating with others of diverse backgrounds, skill sets and cultural contexts, organizing and building international intersectional movements such as Decolonize Daily, The Superbowl to End All Violence and the Master Nataraj G Healing &amp; Art Practice.
        <br/><br/>Questions? Requests? Please <a href="mailto:one@natarajg.space?subject=MNG%20About">send Master Nataraj G a note</a>.
      </MNGBody>

      <MNGHummingbirdSpacer />

    </MNGPage>
  )
}
