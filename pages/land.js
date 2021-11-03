import Link from 'next/link'
import { Flex, Box, Center, Image, Link as ChakraLink } from '@chakra-ui/react'
import { MNGButton } from '../components/MNGButton'
import { MNGPage } from '../components/MNGLayout'
import {
  MNGH2,
  MNGBody,
  MNGHindiHeading,
  MNGHindiTitle,
  MNGHummingbirdSpacer
} from '../components/MNGType'
import {
  MNGWordsOfLove,
  MNGWordsOfLoveText,
  MNGWordsOfLoveFace
} from '../components/MNGWordsOfLove'

export default function Land() {
  const mngprops = {
    meta: {
      title: "Land * Master Nataraj G",
      description: "We are not separate from the land. We are living in an abundant universe and our oneness with our Mother Earth and the entire Cosmos is a manifestation of that abundance. As we are never separate from the land, we are never separate from abundance."
    },
    og: {
      title: "Land * Master Nataraj G",
      description: "We are not separate from the land. We are living in an abundant universe and our oneness with our Mother Earth and the entire Cosmos is a manifestation of that abundance. As we are never separate from the land, we are never separate from abundance.",
      image: "/img/MasterNatarajGLand.jpg"
    }
  };

  return (
    <MNGPage meta={mngprops.meta} og={mngprops.og}>
      <Image mt="mngr.17" width="100%"
        src="/img/MasterNatarajGLand.jpg"
        alt="Photograph of Master Nataraj G with Mother Earth"
        title="Master Nataraj G with Mother Earth" />

      <MNGHindiTitle hindiText="भूमि" engText="LAND" left />

      <MNGBody>
        We are not separate from the land. We are living in an abundant universe and our oneness with our Mother Earth and the entire Cosmos is a manifestation of that abundance. As we are never separate from the land, we are never separate from abundance.
      </MNGBody>

      <MNGBody>
        In many parts of the world, we are living on colonized lands. Even though colonial forces may have left and the lands made “free,” the path to truly sovereign living and fully honoring the sanctity of the land and all beings is continually unfolding and requires conscious action to realize.
      </MNGBody>

      <MNGHindiHeading hindiText="प्रस्ताव" engText="OFFERINGS" left />
      <MNGBody>
        We honor the <ChakraLink as={Link} href="/madeontongvaland">Tongva Land</ChakraLink> we are on and share these offerings with you so we may all live in abundance, aligned with our highest and truest Infinite Self, for a New World rooted in the Divine Energies of Peace, Love, Joy, Balance and Gratitude.
      </MNGBody>

      <MNGH2>FOOD</MNGH2>
      <Flex>
        <Box width="61.803%" pr={6}>
          <MNGBody>
            Food nourishes our bodies, minds, hearts, spirits and souls. Each of these bodies are sustained by different foods. Our physical body is wholly fed by our Mother Earth with the tastiest abundance of plants, fruits, seeds, nuts, mushrooms and more. Even with the rapid decline of capitalism and a New World rising amidst devastating climate change, widespread disease and unending violence, Mother Earth continues to provide us with more than we need. It is our Great Gift to be alive. It is our Divine Blessing to organize our selves and our creative action for the greatest Peace, Love, Joy, Balance and Gratitude.
          </MNGBody>
          <MNGBody>
            <ChakraLink as={Link} href="/food">
              See our Food offerings
            </ChakraLink>.
          </MNGBody>
        </Box>
        <Box align="center" width="38.197%">
          <ChakraLink as={Link} href="/food">
            <Image src="/img/MasterNatarajGFoodSq.jpg"
              my="mngr.11"
              borderRadius="full"
              boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
              _hover={{
                boxShadow: "0 0 10px 3px rgba(48,9,49,0.99)",
                cursor: "pointer"
              }}
            />
          </ChakraLink>
          <MNGButton href="/food">SEE FOOD</MNGButton>
        </Box>
      </Flex>

      <MNGH2>YOGA</MNGH2>
      <Flex>
        <Box width="61.803%" pr={6}>
          <MNGBody>
            Yoga allows us to see and feed our bodies that are not physical: our heart-body (emotions), our mind-body (thoughts), our spirit-body (energy), our soul-body (highest and truest Self). Yoga is an ancient, global tradition that has been constrained and packaged into a relaxation or exercise routine, especially in the West, where the seeds of domination, exploitation and colonization have given rise to capitalism, thankfully now in rapid decline. We need to delve more deeply into the practice of Yoga beyond how it may serve us and explore the emotional, mental and energetic realms for greater Peace, Love, Joy, Balance and Gratitude.
          </MNGBody>
          <MNGBody>
            <ChakraLink as={Link} href="/yoga">
              See our Yoga offerings
            </ChakraLink>.
          </MNGBody>
        </Box>
        <Box align="center" width="38.197%">
          <ChakraLink as={Link} href="/yoga">
            <Image src="/img/MasterNatarajGYogaSq.jpg"
              my="mngr.11"
              borderRadius="full"
              boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
              _hover={{
                boxShadow: "0 0 10px 3px rgba(48,9,49,0.99)",
                cursor: "pointer"
              }}
            />
          </ChakraLink>
          <MNGButton href="/yoga">SEE YOGA</MNGButton>
        </Box>
      </Flex>

      <MNGH2>ART</MNGH2>
      <Flex>
        <Box width="61.803%" pr={6}>
          <MNGBody>
            Art feeds the heart, mind, spirit and soul, which in turn heals and changes our physical bodies. Let us organize our selves and our creative action for the greatest Peace, Love, Joy, Balance and Gratitude, shall we?
          </MNGBody>
          <MNGBody>
            <ChakraLink as={Link} href="/art">
              See our Art offerings
            </ChakraLink>.
          </MNGBody>
        </Box>
        <Box align="center" width="38.197%">
          <ChakraLink as={Link} href="/art">
            <Image src="/img/MasterNatarajGArtSq.jpg"
              my="mngr.11"
              borderRadius="full"
              boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
              _hover={{
                boxShadow: "0 0 10px 3px rgba(48,9,49,0.99)",
                cursor: "pointer"
              }}
            />
          </ChakraLink>
          <MNGButton href="/art">SEE ART</MNGButton>
        </Box>
      </Flex>

      <MNGH2>SOVEREIGN WEB PRESENCE</MNGH2>
      <Flex>
        <Box width="61.803%" pr={6}>
          <MNGBody>
            Sovereign Web Presence (SWP) provides our well-fed bodies a place to live, express and sustainably nourish ourselves freely. Free from the influence of colonial forces, governments, nations and banks that aim to harvest our energy, corrupt our minds, control our feelings of self-worth and in any way limit the Infinite Supreme Power, Authority and Value that we all intrinsically embody.
          </MNGBody>
          <MNGBody>
            <ChakraLink as={Link} href="/sovereignwebpresence">
              See our Sovereign Web Presence offerings
            </ChakraLink>.
          </MNGBody>
        </Box>
        <Box align="center" width="38.197%">
          <ChakraLink as={Link} href="/sovereignwebpresence">
            <Image src="/img/MasterNatarajGConsult.jpg" mb="mngr.11"
              borderRadius="full"
              boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
              _hover={{
                boxShadow: "0 0 10px 3px rgba(48,9,49,0.99)",
                cursor: "pointer"
              }}
            />
          </ChakraLink>
          <MNGButton href="/sovereignwebpresence">SEE SWP</MNGButton>
        </Box>
      </Flex>

      <MNGHummingbirdSpacer />

      <MNGWordsOfLove align="right">
        <MNGWordsOfLoveText>
          <MNGBody mb="mngr.7">Master Nataraj G revealed to me the most beautiful flower with the sweetest nectar this world has to offer. Bless you child. Thank you.</MNGBody>
          <MNGBody variant="serifi">In Love, Grandmother Gloria Arellanes</MNGBody>
        </MNGWordsOfLoveText>
        <MNGWordsOfLoveFace imgsrc="/img/inlove/00gmagloria.jpg" />
      </MNGWordsOfLove>

      <MNGWordsOfLove align="left">
        <MNGWordsOfLoveFace imgsrc="/img/inlove/13lydiaponce.jpg" />
        <MNGWordsOfLoveText>
          <MNGBody mb="mngr.7">The truth serum works for Master Nataraj G because Master Nataraj G is the truth.</MNGBody>
          <MNGBody variant="serifi">In Love, Lydia Poncé</MNGBody>
        </MNGWordsOfLoveText>
      </MNGWordsOfLove>

      <MNGWordsOfLove align="right">
        <MNGWordsOfLoveText>
          <MNGBody mb="mngr.7">master nataraj g revealed to me that<br/>/they/ are the keeper of /our/ word.</MNGBody>
          <MNGBody variant="serifi">in love, adrienne maree brown</MNGBody>
        </MNGWordsOfLoveText>
        <MNGWordsOfLoveFace imgsrc="/img/inlove/09amb.jpg" />
      </MNGWordsOfLove>

      <MNGHummingbirdSpacer />

      <Center>
        <Image src="/img/MasterNatarajGLandMaachliGang.jpg"
          w="100%" opacity="0.69" mb="mngr.88" />
      </Center>

    </MNGPage>
  )
}
