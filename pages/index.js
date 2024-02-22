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

      <MNGHummingbirdSpacer w="50%" />
      
      <Image mt="mngr.17" width="100%"
        src="/img/MNGButterfly.jpeg"
        alt="Photo of a Monarch Butterfly enjoying flowers in a beautiful garden"
        title="Butterfly Beacon" />

      <MNGH1 marginBottom="0" marginTop="mngr.27">CO-VID DREAMS 95</MNGH1>
      <MNGH3 marginBottom="mngr.27" marginTop="0">Creating New Worlds. For the kids. For the ancestors.</MNGH3>
      <MNGBody>An open, collaborative new media platform bringing together storytelling from around the Cosmos to create a New World where many worlds harmoniously flow together for Peace, Love and Joy for All Beings.</MNGBody>
      <MNGBody><a href="#mailingList">Subscribe to our mailing list</a> to learn more and build together.</MNGBody>

      <MNGHummingbirdSpacer w="50%" />

      <Box w="100%" mt="mngr.88">
        <div style={{
          padding:"56.25% 0 0 0",
          position:"relative"
        }}><iframe src="https://player.vimeo.com/video/209632704?h=9e79cca3d8&title=0&byline=0&portrait=0" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen style={{
            position:"absolute",
            top:"0",
            left:"0",
            width:"100%",
            height:"100%"
          }}></iframe>
        </div>
      </Box>

      <MNGH1 marginBottom="0" marginTop="mngr.27">We Make Films</MNGH1>
      <MNGH3 marginBottom="mngr.27" marginTop="0">Want to create together?</MNGH3>
      <MNGBody><a href="mailto:one@natarajg.space?subject=Creating%20With%20Master%20Nataraj%20G">Contact us</a> and let us know the kinds of stories you are most passionate about telling and the change you long to see in the world.</MNGBody>

      <MNGHummingbirdSpacer w="50%" />

      <Image mt="mngr.17" width="100%"
        src="/img/MNGAyurveda.jpeg"
        alt="Photo of a Monarch Butterfly enjoying flowers in a beautiful garden"
        title="Butterfly Beacon" />

      <MNGH1 marginBottom="0" marginTop="mngr.27">We Serve People and Planet</MNGH1>
      <MNGH3 marginBottom="mngr.27" marginTop="0">May all enjoy the tastiest, healthiest food that is also healing for Mother Earth.</MNGH3>
      <MNGBody>Community gardening, growing food ourselves and sharing natural, holistic medicine keeps us active and healthy individually, collectively, is beneficial for the planet and creates a new infinitely abundant economy aligned with the infinite abundance of Mother Earth and the Universe.</MNGBody>
      <MNGBody>We have been gardening in community for the past few years, handling 600 lbs of fresh food each week donated by community gardeners, local farmers and health food stores to share with community in the form of healthy snacks and meals informed by Ayurvedic holistic medicine.</MNGBody>
      <MNGBody><a href="#mailingList">Subscribe to our mailing list</a> to garden, grow and eat together.</MNGBody>

      <MNGHummingbirdSpacer w="50%" />

      <Box w="100%" mt="mngr.88">
        <div style={{
          padding:"56.25% 0 0 0",
          position:"relative"
        }}><iframe src="https://player.vimeo.com/video/290794636?h=bb51e4a977&amp;title=0" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen style={{
            position:"absolute",
            top:"0",
            left:"0",
            width:"100%",
            height:"100%"
          }}></iframe>
        </div>
      </Box>

      <MNGH1 marginBottom="0" marginTop="mngr.27">We Make Digital Interactive</MNGH1>
      <MNGH3 marginBottom="mngr.27" marginTop="0">Experiences that engage, empower and enlighten.</MNGH3>
      <MNGBody>The Internet and digital technologies foster an open, inclusive space that connect people locally and globally in new ways. Websites, Mobile Apps, Metaverse, Decentralized Sovereign Web3 Infrastructure... we got it all.</MNGBody>
      <MNGBody><a href="mailto:one@natarajg.space?subject=Creating%20With%20Master%20Nataraj%20G">Contact us</a> and let us know how we may help you connect with community locally and around the world.</MNGBody>

      <MNGHummingbirdSpacer w="50%" />

      <MNGH1 id="mailingList">Ready for lift off?</MNGH1>
      <script async data-uid="d6f7637e25" src="https://natarajg.ck.page/d6f7637e25/index.js"></script>

      <MNGH1 mt="mngr.88">Support our work via Tips and Donations</MNGH1>
      <MNGBody><a href="https://cash.app/$MasterNatarajG">$MasterNatarajG</a> on Cash App</MNGBody>
      <MNGBody><a href="https://venmo.com/u/MasterNatarajG">@MasterNatarajG</a> on Venmo</MNGBody>
    </MNGPage>
  )
}
