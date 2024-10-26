import { Center, Image, Box, List, ListItem, ListIcon, Link as ChakraLink } from '@chakra-ui/react'
import { RiPlantFill } from 'react-icons/ri'
import { MNGButton } from '../components/MNGButton'
import { MNGPage } from '../components/MNGLayout'
import {
  MNGBody,
  MNGH1,
  MNGH2,
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
          <MNGBody variant="serifi">How do we live abundantly aligned<br/>with our Highest and Truest Self<br/>for a Joyful, Peaceful World?</MNGBody>
        </MNGWordsOfLoveText>
      </MNGWordsOfLove>

      <MNGHummingbirdSpacer w="50%" />

      <MNGH3>
        <strong>Master Nataraj G Healing &amp; Art</strong> is a Yoga-based Creative Studio on unceded Tongva land in Santa Monica, California. We are committed to integrating ancient wisdom and modern innovation to uplift, empower and connect individuals and organizations to co-create a Joyful, Peaceful World.
      </MNGH3>
      
      <MNGH2>Our Vision</MNGH2>
      <MNGBody>
        In solidarity with the global movement for a Just Transition, we envision:
      </MNGBody>
      <List spacing={6}>
        <ListItem>
          <ListIcon as={RiPlantFill} color="green.500" />
          <strong>A World at Peace</strong>. Balance amongst humanity, Mother Earth and All Our Relations.
        </ListItem>
        <ListItem>
          <ListIcon as={RiPlantFill} color="green.500" />
          <strong>Love, Joy and Abundance for All</strong>. A unified sense of oneness, fostering unity and collective action toward a thriving world.
        </ListItem>
        <ListItem>
          <ListIcon as={RiPlantFill} color="green.500" />
          <strong>Gratitude and Sacredness</strong>. Humanity is filled with Gratitude to be alive, honoring the sacred essence of all life.
        </ListItem>
        <ListItem>
          <ListIcon as={RiPlantFill} color="green.500" />
          <strong>Harmonizing Technology and Nature</strong>. Technological advancement, global ecological equilibrium, Peace within people and amongst societies all harmonize fostering the conditions for All Beings to thrive.
        </ListItem>
      </List>

      <MNGH2>Our Mission</MNGH2>
      <MNGBody>
        We bring our vision to life by:
      </MNGBody>
      <List spacing={6}>
        <ListItem>
          <ListIcon as={RiPlantFill} color="green.500" />
          <strong>Studying &amp; Sharing Healing Traditions</strong>. Blending the best of modern medicine with ancestral healing practices so people can feel at ease in body, mind, heart, spirit and soul amidst stress, violence and change in their worlds.
        </ListItem>
        <ListItem>
          <ListIcon as={RiPlantFill} color="green.500" />
          <strong>Creating Art &amp; New Media</strong>. Sharing stories and crafting interactive experiences to activate, inspire and empower communities to be safe, happy, healthy, abundant and live joyfully in creative flow with people, planet and the Cosmos. <ChakraLink href="#offerings">See our Offerings</ChakraLink>.
        </ListItem>
      </List>
      
      <MNGH2>Our Values</MNGH2>
      <MNGBody>
        We are:
      </MNGBody>
      <List spacing={6}>
        <ListItem>
          <ListIcon as={RiPlantFill} color="green.500" />
          <strong>Credible &amp; Trustworthy</strong>: We hold ourselves accountable for our words and actions.
        </ListItem>
        <ListItem>
          <ListIcon as={RiPlantFill} color="green.500" />
          <strong>Aware &amp; Responsive</strong>: We stay informed and are ready to tackle new challenges.
        </ListItem>
        <ListItem>
          <ListIcon as={RiPlantFill} color="green.500" />
          <strong>Active &amp; Impactful</strong>: We take action that brings real change to real beings.
        </ListItem>
        <ListItem>
          <ListIcon as={RiPlantFill} color="green.500" />
          <strong>Heartfelt &amp; Hopeful</strong>: We are honest and authentic, committed to creating meaningful solutions.
        </ListItem>
        <ListItem>
          <ListIcon as={RiPlantFill} color="green.500" />
          <strong>Accessible to All</strong>: We are inclusive, with a special focus on those most impacted by climate change and violence.
        </ListItem>
        <ListItem>
          <ListIcon as={RiPlantFill} color="green.500" />
            <strong>Multicultural, Global, Diverse</strong>: We build meaningful, genuine, and joyful relationships across cultures and communities.
        </ListItem>
        <ListItem>
          <ListIcon as={RiPlantFill} color="green.500" />
            <strong>Aligned with Radical, Revolutionary Social Movements &amp; Global Campaigns</strong>: We stand in solidarity with movements driving transformative change worldwide.
        </ListItem>
      </List>
      
      <MNGH2>About Master Nataraj G</MNGH2>
      <MNGBody>
Master Nataraj G, Gaurav Cedric Bhatnagar (we/they/he pronouns), has served as a founding member of eight entrepreneurial ventures ranging from food-based revolutionary social justice organizations, educational institutions, venture-funded technology startups and community-based non-profit organizations.<br/><br/>As an independent artist and creative freelancer, Nataraj has made films, videos, music, interactive designs and crafted fundraising campaigns. As a consultant, Nataraj has worked with multinational corporations, world renowned independent artists, family-run restaurants, revolutionary non-profits and international grassroots movements. As a healer, Nataraj has helped many and lived without visiting a western doctor or dentist for over seven years while leading a healthy, active, fulfilling life.<br/><br/>The breadth and depth of Nataraj’s experience, backed by 20+ years of Yoga and Spiritual study and practice, offers a unique perspective on the creative process focused deeply on cultivating Peace, Love, Joy, Harmony and Gratitude within individuals, organizations, communities and the world.
      </MNGBody>

      <MNGHummingbirdSpacer w="50%" id="offerings" />
      
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

      <Image mt="mngr.17" width="100%"
        src="/img/yoga/MNGGroundFlow.jpeg"
        alt="Photo of Master Nataraj G Yoga Healing Session"
        title="Yoga Healing Session by Master Nataraj G" />

      <MNGH1 marginBottom="0" marginTop="mngr.27">We offer Yoga</MNGH1>
      <MNGH3 marginBottom="mngr.27" marginTop="0">May all enjoy the Bliss of Alignment, Unity and Ease of Motion that Yoga has to offer.</MNGH3>
      <MNGBody>We offer Yoga education, training and healing sessions for individuals and organizations based on the Eight Limbs of Yoga. We focus on the counterintuitive truth that we gain strength, balance and energy through restful, restorative and rejuvenating practices. Our practices center around mindfulness, meditation, pranayam (breathwork) and very specific asana flows to bring more Peace, Love, Joy, Harmony and Gratitude to individuals, communities and the world.</MNGBody>
      <MNGBody><a href="mailto:one@natarajg.space?subject=Creating%20With%20Master%20Nataraj%20G">Contact us</a> and let us know how we may serve you with our Yoga offerings.</MNGBody>

      <MNGHummingbirdSpacer w="50%" />
      
      <MNGH1 id="mailingList">Ready for lift off?</MNGH1>
      <script async data-uid="d6f7637e25" src="https://natarajg.ck.page/d6f7637e25/index.js"></script>

      <MNGH1 mt="mngr.88">Support our work via Tips and Donations</MNGH1>
      <MNGBody><a href="https://cash.app/$MasterNatarajG">$MasterNatarajG</a> on Cash App</MNGBody>
      <MNGBody><a href="https://venmo.com/u/MasterNatarajG">@MasterNatarajG</a> on Venmo</MNGBody>
    </MNGPage>
  )
}
