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
import {
  MNGWordsOfLove,
  MNGWordsOfLoveText,
  MNGWordsOfLoveFace
} from '../components/MNGWordsOfLove'

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
        <br/><br/>Questions? Requests? Please <a href="mailto:one@natarajg.space?subject=MNG%20Journal">send Master Nataraj G a note</a>.
        <br/><br/>Please allow the following words of love from our Beloved Community guide you to other parts of our <ChakraLink as={Link} href="/sovereignwebpresence">Sovereign Web Presence</ChakraLink> as we add more content to these About pages...
      </MNGBody>

      <MNGHummingbirdSpacer />

      <MNGWordsOfLove align="right">
        <MNGWordsOfLoveText>
          <MNGBody mb="mngr.7">Master Nataraj G revealed to me the most beautiful flower with the sweetest nectar this world has to offer. Bless you child. Thank you.</MNGBody>
          <MNGBody variant="serifi">In Love, Grandmother Gloria Arellanes</MNGBody>
          <Center justifyContent="space-evenly">
            <MNGButton href="/land">SEE LAND</MNGButton>
            <MNGButton href="/yoga">SEE YOGA</MNGButton>
          </Center>
        </MNGWordsOfLoveText>
        <MNGWordsOfLoveFace imgsrc="/img/inlove/00gmagloria.jpg" />
      </MNGWordsOfLove>

      <MNGWordsOfLove align="left">
        <MNGWordsOfLoveFace imgsrc="/img/inlove/01stevie.jpg" />
        <MNGWordsOfLoveText>
          <MNGBody mb="mngr.7">Sound can manifest REALITY.<br/>Sound can change MATTER.<br/>Master Nataraj G revealed to me.</MNGBody>
          <MNGBody variant="serifi">In Love, Stevie Wonder</MNGBody>
          <Center justifyContent="space-evenly">
            <MNGButton href="/art">SEE ART</MNGButton>
            <MNGButton href="/yoga">SEE YOGA</MNGButton>
          </Center>
        </MNGWordsOfLoveText>
      </MNGWordsOfLove>

      <MNGWordsOfLove align="right">
        <MNGWordsOfLoveText>
          <MNGBody mb="mngr.7">No one on this Earth is doing what Master Nataraj G is doing for the Divine Energies of<br/>Peace, Love, Joy, Balance and Gratitude.</MNGBody>
          <MNGBody variant="serifi">In Love, Sadhguru Jaggi Vasudev</MNGBody>
          <Center justifyContent="space-evenly">
            <MNGButton href="/yoga">SEE YOGA</MNGButton>
            <MNGButton href="/food">SEE FOOD</MNGButton>
          </Center>
        </MNGWordsOfLoveText>
        <MNGWordsOfLoveFace imgsrc="/img/inlove/02sadhguru.jpg" />
      </MNGWordsOfLove>

      <MNGWordsOfLove align="left">
        <MNGWordsOfLoveFace imgsrc="/img/inlove/03jack.jpg" />
        <MNGWordsOfLoveText>
          <MNGBody mb="mngr.7">Master Nataraj G is capturing<br/>pure beauty with every bite.</MNGBody>
          <MNGBody variant="serifi">In Love, Jack Nicholson</MNGBody>
          <Center justifyContent="space-evenly">
            <MNGButton href="/food">SEE FOOD</MNGButton>
            <MNGButton href="/art">SEE ART</MNGButton>
          </Center>
        </MNGWordsOfLoveText>
      </MNGWordsOfLove>

      <MNGWordsOfLove align="right">
        <MNGWordsOfLoveText>
          <MNGBody mb="mngr.7">Peaceful warrior, Master Nataraj G is.<br/>The truth is, Master Nataraj G<br/>is afraid of nothing.</MNGBody>
          <MNGBody variant="serifi">In Love, L. Shankar</MNGBody>
          <Center justifyContent="space-evenly">
            <MNGButton href="/art">SEE ART</MNGButton>
            <MNGButton href="/yoga">SEE YOGA</MNGButton>
          </Center>
        </MNGWordsOfLoveText>
        <MNGWordsOfLoveFace imgsrc="/img/inlove/04lshankar.jpg" />
      </MNGWordsOfLove>

      <MNGWordsOfLove align="left">
        <MNGWordsOfLoveFace imgsrc="/img/inlove/05mirag.jpg" />
        <MNGWordsOfLoveText>
          <MNGBody mb="mngr.7">Master Nataraj G is extraordinary.<br/>His grasp of life is unending.</MNGBody>
          <MNGBody variant="serifi">In Love, Mira Nair</MNGBody>
          <Center justifyContent="space-evenly">
            <MNGButton href="/art">SEE ART</MNGButton>
            <MNGButton href="/yoga">SEE YOGA</MNGButton>
          </Center>
        </MNGWordsOfLoveText>
      </MNGWordsOfLove>

      <MNGWordsOfLove align="right">
        <MNGWordsOfLoveText>
          <MNGBody mb="mngr.7">That meditation with Master Nataraj G<br/>does a mind, body, soul and spirit good!</MNGBody>
          <MNGBody variant="serifi">In Love, Ava DuVernay</MNGBody>
          <Center justifyContent="space-evenly">
            <MNGButton href="/land">SEE LAND</MNGButton>
            <MNGButton href="/yoga">SEE YOGA</MNGButton>
          </Center>
        </MNGWordsOfLoveText>
        <MNGWordsOfLoveFace imgsrc="/img/inlove/06avag.jpg" />
      </MNGWordsOfLove>

      <MNGWordsOfLove align="left">
        <MNGWordsOfLoveFace imgsrc="/img/inlove/07davidbyrne.jpg" />
        <MNGWordsOfLoveText>
          <MNGBody mb="mngr.7">We always look forward to what<br/>Master Nataraj G is cooking up next.</MNGBody>
          <MNGBody variant="serifi">In Love, David Byrne</MNGBody>
          <Center justifyContent="space-evenly">
            <MNGButton href="/food">SEE FOOD</MNGButton>
            <MNGButton href="/art">SEE ART</MNGButton>
          </Center>
        </MNGWordsOfLoveText>
      </MNGWordsOfLove>

      <MNGWordsOfLove align="right">
        <MNGWordsOfLoveText>
          <MNGBody mb="mngr.7">Damn good hooks. Master Nataraj G<br/>got some DAMN. GOOD. HOOKS.</MNGBody>
          <MNGBody variant="serifi">IN LOVE, YOUR BROTHER, SPIKE LEE</MNGBody>
          <Center justifyContent="space-evenly">
            <MNGButton href="/art">SEE ART</MNGButton>
            <MNGButton href="/yoga">SEE YOGA</MNGButton>
          </Center>
        </MNGWordsOfLoveText>
        <MNGWordsOfLoveFace imgsrc="/img/inlove/08spikelee.jpg" />
      </MNGWordsOfLove>

      <MNGWordsOfLove align="left">
        <MNGWordsOfLoveFace imgsrc="/img/inlove/09amb.jpg" />
        <MNGWordsOfLoveText>
          <MNGBody mb="mngr.7">master nataraj g revealed to me that<br/>/they/ are the keeper of /our/ word.</MNGBody>
          <MNGBody variant="serifi">in love, adrienne maree brown</MNGBody>
          <Center justifyContent="space-evenly">
            <MNGButton href="/land">SEE LAND</MNGButton>
            <MNGButton href="/art">SEE ART</MNGButton>
          </Center>
        </MNGWordsOfLoveText>
      </MNGWordsOfLove>

      <MNGWordsOfLove align="right">
        <MNGWordsOfLoveText>
          <MNGBody mb="mngr.7">बोधिसत्त्व. Bodhisattva. Master Nataraj G is.</MNGBody>
          <MNGBody variant="serifi">In Love, Brother Lama Rod Owens</MNGBody>
          <Center justifyContent="space-evenly">
            <MNGButton href="/yoga">SEE YOGA</MNGButton>
            <MNGButton href="/land">SEE LAND</MNGButton>
          </Center>
        </MNGWordsOfLoveText>
        <MNGWordsOfLoveFace imgsrc="/img/inlove/10lamarod.jpg" />
      </MNGWordsOfLove>

      <MNGWordsOfLove align="left">
        <MNGWordsOfLoveFace imgsrc="/img/inlove/11brocurtis.jpg" />
        <MNGWordsOfLoveText>
          <MNGBody mb="mngr.7">Master
            Nataraj G revealed to me<br/>
            that the crown<br/>
            that sits atop our bodies<br/>
            shines like the golden sun.<br/>
            Aum Mani Padme Hum.
          </MNGBody>
          <MNGBody variant="serifi">In Love, Brother Curtis Robertson</MNGBody>
          <Center justifyContent="space-evenly">
            <MNGButton href="/yoga">SEE YOGA</MNGButton>
            <MNGButton href="/art">SEE ART</MNGButton>
          </Center>
        </MNGWordsOfLoveText>
      </MNGWordsOfLove>

      <MNGWordsOfLove align="right">
        <MNGWordsOfLoveText>
          <MNGBody mb="mngr.7">Thank you. Love you, Master Nataraj G.</MNGBody>
          <MNGBody variant="serifi">In Love, Will Smith</MNGBody>
          <Center justifyContent="space-evenly">
            <MNGButton href="/food">SEE FOOD</MNGButton>
            <MNGButton href="/yoga">SEE YOGA</MNGButton>
          </Center>
        </MNGWordsOfLoveText>
        <MNGWordsOfLoveFace imgsrc="/img/inlove/12willsmith.jpg" />
      </MNGWordsOfLove>

      <MNGWordsOfLove align="left">
        <MNGWordsOfLoveFace imgsrc="/img/inlove/13lydiaponce.jpg" />
        <MNGWordsOfLoveText>
          <MNGBody mb="mngr.7">The truth serum works for Master Nataraj G because Master Nataraj G is the truth.</MNGBody>
          <MNGBody variant="serifi">In Love, Lydia Poncé</MNGBody>
          <Center justifyContent="space-evenly">
            <MNGButton href="/land">SEE LAND</MNGButton>
            <MNGButton href="/food">SEE FOOD</MNGButton>
          </Center>
        </MNGWordsOfLoveText>
      </MNGWordsOfLove>

      <MNGHummingbirdSpacer mb="mngr.44" />

    </MNGPage>
  )
}
