import MNGMenu from './mngmenu'
import {
  Center,
  Flex, Box, Stack, VStack,
  Image, Text, Button,
  Link as ChakraLink
} from '@chakra-ui/react'
import Link from 'next/link'

export default function MNGFooter() {
  return (
    <Stack as="footer" spacing={24}>
      <MNGMenu />
      <ChakraLink as={Link} href="/madeontongvaland">
        <VStack role="group" _hover={{
          cursor: "pointer"
        }}>
          <Image w={318} src="/img/MadeOnTongvaland.jpg" borderRadius="full"
            alt="Made On Tongvaland Seal"
            boxShadow="0 0 90px 10px rgba(48,9,49,0.69)"
            _hover={{
              boxShadow: "0 0 90px 10px rgba(242,185,11,0.39)"
            }} />
          <Text fontSize="27px" color="#F8CDF9" _hover={{ color: "#9F08A2" }}>
            MADE ON TONGVALAND
          </Text>
        </VStack>
      </ChakraLink>
      <Text textAlign="center" fontSize="18px" color="#B895B9">
        GRATEFUL FOR ALL INVOLVED IN CREATING THIS<br/>
        <u><ChakraLink as={Link} href="/sovereignwebpresence" color="#F8CDF9"
          _hover={{color:"#9F08A2"}}>SOVEREIGN WEB PRESENCE</ChakraLink></u>
        &nbsp;— <u><ChakraLink as={Link} href="/love#credits" color="#F8CDF9"
          _hover={{color:"#9F08A2"}}>SEE CREDITS</ChakraLink></u>
      </Text>
      <Center mb="390px">
        <ChakraLink as={Link} href="/tip$donate">
          <Button bg="#6E0A70" color="#F8CDF9" px={8}
            _hover={{ background: "#510653" }}>TIP $ DONATE</Button>
        </ChakraLink>
      </Center>
      <Image src="/img/earth.png" pos="absolute" bottom="0" mx="auto" />
    </Stack>
  )
}
