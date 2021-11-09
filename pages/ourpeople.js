import {
  Flex, Spacer, Image, Center
} from '@chakra-ui/react'
import { MNGPage } from '../components/MNGLayout'
import {
  MNGH1,
  MNGBody,
  MNGHummingbirdSpacer
} from '../components/MNGType'

export default function OurPeople() {
  const mngprops = {
    meta: {
      title: "Our People * Master Nataraj G",
      description: "Our People. Master Nataraj G Healing &amp; Art Practice."
    },
    og: {
      title: "Our People * Master Nataraj G",
      description: "Our People. Master Nataraj G Healing &amp; Art Practice.",
      image: "/img/inlove/99g.jpg"
    }
  };

  return (
    <MNGPage meta={mngprops.meta} og={mngprops.og}>
      <Image mt="mngr.17" width="100%"
        src="/img/inlove/99g.jpg"
        alt="Master Nataraj G Smiling Happy"
        title="Master Nataraj G Smiling Happy" />

      <MNGH1 mt="mngr.44">
        Our People
      </MNGH1>

      <MNGBody>
        Our People. Master Nataraj G Healing &amp; Art Practice.
      </MNGBody>

      <Flex w="100%" flexWrap="wrap">
        <Image w="33%" borderRadius="full"
          src="/img/inlove/00gmagloria.jpg"
          alt="Grandmother Gloria Arellanes"
          boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
          border="0.1618rem solid #F2B90B"
        />
        <Image w="33%" borderRadius="full"
          src="/img/inlove/01stevie.jpg"
          alt="Stevie Wonder"
          boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
          border="0.1618rem solid #F2B90B"
        />
        <Image w="33%" borderRadius="full"
          src="/img/inlove/02sadhguru.jpg"
          alt="Sadhguru"
          boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
          border="0.1618rem solid #F2B90B"
        />
        <Image w="33%" borderRadius="full"
          src="/img/inlove/03jack.jpg"
          alt="Jack Nicholson"
          boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
          border="0.1618rem solid #F2B90B"
        />
        <Image w="33%" borderRadius="full"
          src="/img/inlove/04lshankar.jpg"
          alt="L Shankar"
          boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
          border="0.1618rem solid #F2B90B"
        />
        <Image w="33%" borderRadius="full"
          src="/img/inlove/05mirag.jpg"
          alt="Mira Nair"
          boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
          border="0.1618rem solid #F2B90B"
        />
        <Image w="33%" borderRadius="full"
          src="/img/inlove/06avag.jpg"
          alt="Ava DuVernay"
          boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
          border="0.1618rem solid #F2B90B"
        />
      </Flex>
      <Center>
        <Image w={327} borderRadius="full"
          src="/img/inlove/99g.jpg"
          alt="Master Nataraj G"
          boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
          border="0.1618rem solid #F2B90B"
          mt="-176.563px"
          ml="176.563px"
          mr="0"
          mb="-176.563px"
        />
      </Center>
      <Flex flexWrap="wrap">
        <Image w="33%" mr="353.126px" borderRadius="full"
          src="/img/inlove/07davidbyrne.jpg"
          alt="David Byrne"
          boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
          border="0.1618rem solid #F2B90B"
        />
        <Image w="33%" borderRadius="full"
          src="/img/inlove/08spikelee.jpg"
          alt="Spike Lee"
          boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
          border="0.1618rem solid #F2B90B"
        />
        <Image w="33%" borderRadius="full"
          src="/img/inlove/09amb.jpg"
          alt="adrienne maree brown"
          boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
          border="0.1618rem solid #F2B90B"
        />
        <Image w="33%" borderRadius="full"
          src="/img/inlove/10lamarod.jpg"
          alt="Lama Rod Owens"
          boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
          border="0.1618rem solid #F2B90B"
        />
        <Image w="33%" borderRadius="full"
          src="/img/inlove/11brocurtis.jpg"
          alt="Brother Curtis Robertson"
          boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
          border="0.1618rem solid #F2B90B"
        />
        <Image w="33%" borderRadius="full"
          src="/img/inlove/12willsmith.jpg"
          alt="Will Smith"
          boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
          border="0.1618rem solid #F2B90B"
        />
        <Image w="33%" borderRadius="full"
          src="/img/inlove/13lydiaponce.jpg"
          alt="Lydia Poncé"
          boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
          border="0.1618rem solid #F2B90B"
        />
      </Flex>

    </MNGPage>
  )
}
