import MNGLayout from '../../components/mnglayout'
import {
  Flex, Box, Center,
  Image, Text, Heading,
  Button,
  Stack, VStack,
  Link
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'

export default function Welcome() {
  return (
    <MNGLayout title="THANK YOU">
      <Flex w={960} maxW={960} mx="auto">
        <Stack spacing={24} mx="auto">
          <Image w={600} mx="auto" src="/img/MadeOnTongvaland.jpg" borderRadius="full"
            alt="Made On Tongvaland Seal"
            title="Made On Tongvaland Seal"
            boxShadow="0 0 90px 10px rgba(48,9,49,0.69)" />
          <Box textAlign="center">
            <Heading as="h2" fontSize="63px" fontWeight="400"
              color="#B895B9">THANK YOU &amp; WELCOME</Heading>
            <Text fontSize="27px" color="#B895B9" mt={4}>
              Thank you and welcome to the <strong>Made On Tongvaland</strong> Community.
              You will receive an email soon with the high resolution,
              transparent Made On Tongvaland Seal and details on being part of
              the Made On Tongvaland Community.
              <br /><br />If you have any questions, please feel free to email us
              at: <br/>
              <Link href="mailto:madeontongvaland@pm.me"><EmailIcon /> <u>madeontongvaland@pm.me</u></Link>
            </Text>
          </Box>

          <Center>
            <Image src="/img/hummingbirdDivider.png" w="600px" />
          </Center>

        </Stack>
      </Flex>
    </MNGLayout>
  )
}
