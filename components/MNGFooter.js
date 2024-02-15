import { VStack, Flex, Box, Center, Image, Text, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'
import { MNGButton } from './MNGButton'
import { MNGContainer } from './MNGLayout'
import { MNGHindiHeading, MNGBody, MNGFootP } from './MNGType'
import { RiCopyleftLine } from 'react-icons/ri'

export const MNGFooter = (props) => {
  const displayInline = {display: "inline"};
  return (
    <Box w="100%" pt="mngr.11"
      bg="rgba(16,0,8,0.69)" boxShadow="inset 0 0 36px 1px rgba(48,9,49,0.69)">

      <MNGContainer pb={0}>

        <Center mt="mngr.27">
          <Box>
            <MNGBody mb={0}>Made On Tongvaland</MNGBody>
          </Box>
        </Center>

        <Center mt="mngr.7">
          <Box>
            <Image src="/img/MadeOnTongvaland160.jpg" borderRadius="full" alt="Made on Tongvaland Seal" />
          </Box>
        </Center>

        <Center mt="mngr.27">
          <Box>
            <MNGFootP mb={0} color="mngr.dim" textAlign="center">
              <Text as="span" variant="serifi">for</Text>
              <br/>Peace,
              <br/>Love,
              <br/>Joy,
              <br/>Balance &amp;
              <br/>Gratitude
            </MNGFootP>
          </Box>
        </Center>

      </MNGContainer>

      <Center mt="mngr.17">
        <Image src="/img/MNGNewEarth.png" alt="Mother Earth" />
      </Center>

    </Box>
  )
}
