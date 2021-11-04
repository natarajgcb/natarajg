import { VStack, Flex, Box, Center, Image, Text, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'
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
            <ChakraLink as={Link} href="/land" _hover={{ color: "mngr.link" }}><a>
              <MNGHindiHeading hindiText="भूमि" engText="LAND" />
            </a></ChakraLink>
          </Box>
          <Box w="20%" textAlign="center">
            <ChakraLink as={Link} href="/food" _hover={{ color: "mngr.link" }}><a>
              <MNGHindiHeading hindiText="खाना" engText="FOOD" />
            </a></ChakraLink>
          </Box>
          <Box w="20%" textAlign="center">
            <ChakraLink as={Link} href="/yoga" _hover={{ color: "mngr.link" }}><a>
              <MNGHindiHeading hindiText="योग" engText="YOGA" />
            </a></ChakraLink>
          </Box>
          <Box w="20%" textAlign="center">
            <ChakraLink as={Link} href="/art" _hover={{ color: "mngr.link" }}><a>
              <MNGHindiHeading hindiText="कला" engText="ART" />
            </a></ChakraLink>
          </Box>
          <Box w="20%" textAlign="center">
            <ChakraLink as={Link} href="/love" _hover={{ color: "mngr.link" }}><a>
              <MNGHindiHeading hindiText="प्यार" engText="LOVE" />
            </a></ChakraLink>
          </Box>
        </Flex>

        <Flex mt="mngr.44" flexDirection="row" alignItems="flex-start" justifyContent="space-between">
          <Box w="20%" textAlign="center">
            <ChakraLink as={Link} href="/library" _hover={{ color: "mngr.link" }}><a>
              <MNGBody>Library</MNGBody>
            </a></ChakraLink>
          </Box>
          <Box w="20%" textAlign="center">
            <ChakraLink as={Link} href="/journal" _hover={{ color: "mngr.link" }}><a>
              <MNGBody>Journal</MNGBody>
            </a></ChakraLink>
          </Box>
          <Box w="20%" textAlign="center">
            <ChakraLink as={Link} href="/sovereignwebpresence" _hover={{ color: "mngr.link" }}><a>
              <MNGBody>Sovereign<br/>Web<br/>Presence</MNGBody>
            </a></ChakraLink>
          </Box>
          <Box w="20%" textAlign="center">
            <ChakraLink as={Link} href="/about" _hover={{ color: "mngr.link" }}><a>
              <MNGBody>About<br/>Master<br/>Nataraj G</MNGBody>
            </a></ChakraLink>
          </Box>
          <Box w="20%" textAlign="center">
            <ChakraLink as={Link} href="/sponsor" _hover={{ color: "mngr.link" }}><a>
              <MNGBody>Sponsor</MNGBody>
            </a></ChakraLink>
          </Box>
        </Flex>

        <Flex mt="mngr.27" flexDirection="row" alignItems="flex-start" justifyContent="space-between">
          <Box w="20%" />
          <Box w="20%" textAlign="center">
            <ChakraLink as={Link} href="/privacy" _hover={{ color: "mngr.link" }}><a>
              <MNGFootP>Privacy</MNGFootP>
            </a></ChakraLink>
          </Box>
          <Box w="20%" textAlign="center">
            <ChakraLink as={Link} href="/terms" _hover={{ color: "mngr.link" }}><a>
              <MNGFootP>Terms</MNGFootP>
            </a></ChakraLink>
          </Box>
          <Box w="20%" textAlign="center">
            <ChakraLink as={Link} href="/credits" _hover={{ color: "mngr.link" }}><a>
              <MNGFootP>Credits</MNGFootP>
            </a></ChakraLink>
          </Box>
          <Box w="20%" />
        </Flex>

        <Center>
          <MNGFootP mt="mngr.27" color="mngr.dim" display="inline">
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              style={{
                borderBottom: "none"
              }}
              _hover={{ color: "mngr.link" }}
            >
              <RiCopyleftLine style={displayInline} />
              <Text as="span" display="inline">&nbsp;Copyleft&nbsp;</Text>
              <Image display="inline" src="/img/cc-by-sa-80x15.png" />
              <Text as="span" display="inline">&nbsp;CC-BY-SA Creative Commons Attribution ShareAlike</Text>
            </a>
          </MNGFootP>
        </Center>

        <Center mt="mngr.27">
          <Box>
            <ChakraLink as={Link} href="/madeontongvaland" _hover={{ color: "mngr.link" }}><a>
              <MNGBody mb={0}>Made On Tongvaland</MNGBody>
            </a></ChakraLink>
          </Box>
        </Center>

        <Center mt="mngr.7">
          <Box>
            <ChakraLink as={Link} href="/madeontongvaland" _hover={{ color: "mngr.link" }}><a>
              <Image src="/img/MadeOnTongvaland160.jpg" borderRadius="full" />
            </a></ChakraLink>
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

      <Center>
        <Image src="/img/MNGNewEarth.png" />
      </Center>

    </Box>
  )
}
