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

        <Flex mt="mngr.44" w="100%" flexDirection="row" alignItems="center" justifyContent="space-between">
          <Box w="20%" textAlign="center">
            <ChakraLink as={Link} href="/land" _hover={{ color: "mngr.link" }}>
              <MNGHindiHeading hindiText="भूमि" engText="LAND" />
            </ChakraLink>
          </Box>
          <Box w="20%" textAlign="center">
            <ChakraLink as={Link} href="/food" _hover={{ color: "mngr.link" }}>
              <MNGHindiHeading hindiText="खाना" engText="FOOD" />
            </ChakraLink>
          </Box>
          <Box w="20%" textAlign="center">
            <ChakraLink as={Link} href="/yoga" _hover={{ color: "mngr.link" }}>
              <MNGHindiHeading hindiText="योग" engText="YOGA" />
            </ChakraLink>
          </Box>
          <Box w="20%" textAlign="center">
            <ChakraLink as={Link} href="/art" _hover={{ color: "mngr.link" }}>
              <MNGHindiHeading hindiText="कला" engText="ART" />
            </ChakraLink>
          </Box>
          <Box w="20%" textAlign="center">
            <ChakraLink as={Link} href="/love" _hover={{ color: "mngr.link" }}>
              <MNGHindiHeading hindiText="प्यार" engText="LOVE" />
            </ChakraLink>
          </Box>
        </Flex>

        <Flex mt="mngr.44" flexDirection="row" alignItems="flex-start" justifyContent="space-between">
          <Box w="20%" textAlign="center">
            <ChakraLink as={Link} href="/library" _hover={{ color: "mngr.link" }}>
              <MNGBody>Library</MNGBody>
            </ChakraLink>
          </Box>
          <Box w="20%" textAlign="center">
            <ChakraLink as={Link} href="/journal" _hover={{ color: "mngr.link" }}>
              <MNGBody>Journal</MNGBody>
            </ChakraLink>
          </Box>
          <Box w="20%" textAlign="center">
            <ChakraLink as={Link} href="/about" _hover={{ color: "mngr.link" }}>
              <MNGBody>About<br/>Master<br/>Nataraj G</MNGBody>
            </ChakraLink>
          </Box>
          <Box w="20%" textAlign="center">
            <ChakraLink as={Link} href="/sovereignwebpresence" _hover={{ color: "mngr.link" }}>
              <MNGBody>Sovereign<br/>Web<br/>Presence</MNGBody>
            </ChakraLink>
          </Box>
          <Box w="20%" textAlign="center">
            <ChakraLink as={Link} href="/sponsor$tip$donate" _hover={{ color: "mngr.link" }}>
              <MNGBody>Sponsor</MNGBody>
            </ChakraLink>
          </Box>
        </Flex>

        <Flex mt="mngr.27" flexDirection="row" alignItems="flex-start" justifyContent="space-between">
          <Box w="20%" />
          <Box w="20%" textAlign="center">
            <ChakraLink as={Link} href="/privacy" _hover={{ color: "mngr.link" }}>
              <MNGFootP>Privacy</MNGFootP>
            </ChakraLink>
          </Box>
          <Box w="20%" textAlign="center">
            <ChakraLink as={Link} href="/terms" _hover={{ color: "mngr.link" }}>
              <MNGFootP>Terms</MNGFootP>
            </ChakraLink>
          </Box>
          <Box w="20%" textAlign="center">
            <ChakraLink as={Link} href="/love#credits" _hover={{ color: "mngr.link" }}>
              <MNGFootP>Credits</MNGFootP>
            </ChakraLink>
          </Box>
          <Box w="20%" />
        </Flex>

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
