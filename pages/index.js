import { Center, Image, Box } from '@chakra-ui/react'
import { MNGButton } from '../components/MNGButton'
import { MNGPage } from '../components/MNGLayout'
import {
  MNGBody,
  MNGH1,
  MNGH3,
  MNGHummingbirdSpacer
} from '../components/MNGType'
import { 
  MNGWordsOfLove,
  MNGWordsOfLoveFace,
  MNGWordsOfLoveText
} from '../components/MNGWordsOfLove'

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
  
      <Box mt="mngr.44"></Box>

      <MNGWordsOfLove align="left">
        <MNGWordsOfLoveFace imgsrc="/img/MasterNatarajGFlower.jpg" />
        <MNGWordsOfLoveText>
          <MNGBody mb="mngr.7">Master Nataraj G is a Yogi, Healer &amp;<br/>Artist based on unceded Tongva land<br/>(Los Angeles, California).</MNGBody>
          <MNGBody variant="serifi">How do we live abundantly aligned<br/>with our Highest and Truest Self?</MNGBody>
        </MNGWordsOfLoveText>
      </MNGWordsOfLove>

      <MNGHummingbirdSpacer />

      <Image mt="mngr.17" width="100%"
        src="/img/MNGButterfly.jpeg"
        alt="Photo of a Monarch Butterfly enjoying flowers in a beautiful garden"
        title="Butterfly Beacon" />

      <MNGH1 marginBottom="0" marginTop="mngr.27">CO-VID DREAMS 95</MNGH1>
      <MNGH3 marginBottom="mngr.27" marginTop="0">Creating New Worlds. For the kids. For the ancestors.</MNGH3>
      <MNGBody>An open, collaborative new media platform bringing together storytelling from around the Cosmos to create a New World where many worlds harmoniously flow together for Peace, Love and Joy for All Beings.</MNGBody>
      <MNGBody><a href="#mailingList">Subscribe to our mailing list</a> to learn more and build together.</MNGBody>

      <MNGHummingbirdSpacer />

      <Image mt="mngr.17" width="100%"
        src="/img/MNGButterfly.jpeg"
        alt="Photo of a Monarch Butterfly enjoying flowers in a beautiful garden"
        title="Butterfly Beacon" />

      <MNGH1 marginBottom="0" marginTop="mngr.27">Food / Garden [Book]</MNGH1>
      <MNGH3 marginBottom="mngr.27" marginTop="0">Food as Medicine: Community Gardening and Ayurvedic cooking.</MNGH3>
      <MNGBody>We have been gardening in community for the past few years, handling 600 lbs of fresh food each week donated by community gardeners, local farmers and health food stores to share with community in the form of healthy snacks and meals informed by Ayurvedic holistic medicine.</MNGBody>
      <MNGBody><a href="#mailingList">Subscribe to our mailing list</a> to learn more and build together.</MNGBody>

      <MNGHummingbirdSpacer />

      <Image mt="mngr.17" width="100%"
        src="/img/MNGButterfly.jpeg"
        alt="Photo of a Monarch Butterfly enjoying flowers in a beautiful garden"
        title="Butterfly Beacon" />

      <MNGH1 marginBottom="0" marginTop="mngr.27">Film / Digital [Course]</MNGH1>
      <MNGH3 marginBottom="mngr.27" marginTop="0">Food as Medicine: Community Gardening and Ayurvedic cooking.</MNGH3>
      <MNGBody>We have been gardening in community for the past few years, handling 600 lbs of fresh food each week donated by community gardeners, local farmers and health food stores to share with community in the form of healthy snacks and meals informed by Ayurvedic holistic medicine.</MNGBody>
      <MNGBody><a href="#mailingList">Subscribe to our mailing list</a> to learn more and build together.</MNGBody>

      <MNGHummingbirdSpacer />

      <Image mt="mngr.17" width="100%"
        src="/img/MNGButterfly.jpeg"
        alt="Photo of a Monarch Butterfly enjoying flowers in a beautiful garden"
        title="Butterfly Beacon" />

      <MNGH1 marginBottom="0" marginTop="mngr.27">Archives [Film]</MNGH1>
      <MNGH3 marginBottom="mngr.27" marginTop="0">Food as Medicine: Community Gardening and Ayurvedic cooking.</MNGH3>
      <MNGBody>We have been gardening in community for the past few years, handling 600 lbs of fresh food each week donated by community gardeners, local farmers and health food stores to share with community in the form of healthy snacks and meals informed by Ayurvedic holistic medicine.</MNGBody>
      <MNGBody><a href="#mailingList">Subscribe to our mailing list</a> to learn more and build together.</MNGBody>

      <MNGHummingbirdSpacer />

      <MNGH1>Ready for lift off?</MNGH1>
      <script async data-uid="d6f7637e25" src="https://natarajg.ck.page/d6f7637e25/index.js"></script>

    </MNGPage>
  )
}
