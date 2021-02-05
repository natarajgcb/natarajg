import MNGLayout from '../components/mnglayout'
import MNGMenu from '../components/mngmenu'
import {
  Flex, Spacer,
  Box,
  Image,
  Button,
  Link as ChakraLink,
  Text,
  Heading,
  Stack, HStack, VStack,
  Center
} from '@chakra-ui/react'
import Link from 'next/link'

export default function OurPeople() {
  return (
    <MNGLayout title="OUR PEOPLE">
      <Flex>

        <Image w={222} borderRadius="full"
          src="/img/inlove/00gmagloria.jpg"
          alt="Grandmother Gloria Arellanes"
          boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
          border="0.1618rem solid #F2B90B"
        />
        <Spacer />
        <Image w={222} borderRadius="full"
          src="/img/inlove/01stevie.jpg"
          alt="Stevie Wonder"
          boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
          border="0.1618rem solid #F2B90B"
        />
        <Spacer />
        <Image w={222} borderRadius="full"
          src="/img/inlove/02sadhguru.jpg"
          alt="Sadhguru"
          boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
          border="0.1618rem solid #F2B90B"
        />
        <Spacer />
        <Image w={222} borderRadius="full"
          src="/img/inlove/03jack.jpg"
          alt="Jack Nicholson"
          boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
          border="0.1618rem solid #F2B90B"
        />
        <Spacer />
        <Image w={222} borderRadius="full"
          src="/img/inlove/04lshankar.jpg"
          alt="L Shankar"
          boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
          border="0.1618rem solid #F2B90B"
        />
        <Spacer />
        <Image w={222} borderRadius="full"
          src="/img/inlove/05mirag.jpg"
          alt="Mira Nair"
          boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
          border="0.1618rem solid #F2B90B"
        />
        <Spacer />
        <Image w={222} borderRadius="full"
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
        />
      </Center>
      <Flex>
        <Image w={222} borderRadius="full"
          src="/img/inlove/07davidbyrne.jpg"
          alt="David Byrne"
          boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
          border="0.1618rem solid #F2B90B"
        />
        <Spacer />
        <Image w={222} borderRadius="full"
          src="/img/inlove/08spikelee.jpg"
          alt="Spike Lee"
          boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
          border="0.1618rem solid #F2B90B"
        />
        <Spacer />
        <Image w={222} borderRadius="full"
          src="/img/inlove/09amb.jpg"
          alt="adrienne maree brown"
          boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
          border="0.1618rem solid #F2B90B"
        />
        <Spacer />
        <Image w={222} borderRadius="full"
          src="/img/inlove/10lamarod.jpg"
          alt="Lama Rod Owens"
          boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
          border="0.1618rem solid #F2B90B"
        />
        <Spacer />
        <Image w={222} borderRadius="full"
          src="/img/inlove/11brocurtis.jpg"
          alt="Brother Curtis Robertson"
          boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
          border="0.1618rem solid #F2B90B"
        />
        <Spacer />
        <Image w={222} borderRadius="full"
          src="/img/inlove/12willsmith.jpg"
          alt="Will Smith"
          boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
          border="0.1618rem solid #F2B90B"
        />
        <Spacer />
        <Image w={222} borderRadius="full"
          src="/img/inlove/13lydiaponce.jpg"
          alt="Lydia Poncé"
          boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
          border="0.1618rem solid #F2B90B"
        />
      </Flex>

    </MNGLayout>
  )
}
