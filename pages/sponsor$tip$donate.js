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
import {
  MNGWordsOfLove,
  MNGWordsOfLoveText,
  MNGWordsOfLoveFace
} from '../components/MNGWordsOfLove'

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
        Independent Spiritual and Creative Practice that serves people and planet directly while not producing capitalistic "value" requires direct support from community to materially sustain.
      </MNGBody>
      <MNGBody>
        Master Nataraj G has lived without secure housing or regular income for years and is constantly serving all beings to collectively build a New World of Peace, Love, Joy, Balance and Gratitude regardless of monetary gain.
      </MNGBody>
      <MNGBody>
        Your donation supports housing, food and spiritual practice for Master Nataraj G and his family.
      </MNGBody>
      <MNGBody>
        For details on sponsorship and partnering together,
        please <a href="mailto:one@natarajg.space?subject=Sponsoring%20MNG">send a note to Master Nataraj G.</a>
      </MNGBody>

      <iframe
        width="100%" height="800px"
        src="https://masternatarajg.giveforms.com/donate"
      ></iframe>

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
