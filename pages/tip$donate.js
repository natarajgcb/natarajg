import MNGLayout from '../components/mnglayout'
import {
  Flex, Box, Center,
  Image, Text, Heading,
  Button,
  Stack, VStack,
  Link as ChakraLink
} from '@chakra-ui/react'
import Link from 'next/link'

import styles from '../components/mngheader.module.scss'

export default function Tip$Donate() {
  return (
    <MNGLayout title="TIP $ DONATE">
      <Flex w={960} maxW={960} mx="auto">
        <Stack spacing={24} mx="auto">
          <Image w={600} mx="auto" src="/img/GAURALOK.JPG" borderRadius="full"
            className={styles.gauralok}
            boxShadow="0 0 90px 10px rgba(48,9,49,0.69)"
            border="0.1618rem solid #300931"
            alt="Master Nataraj G GAURALOK" title="Master Nataraj G GAURALOK" />

          <Center>
            <ChakraLink as={Link} href="https://checkout.square.site/merchant/MLQQHJDY0X309/checkout/JVIOVWY5YWA2UUS5QZ52I32M">
              <Button size="lg" bg="#6E0A70" color="#F8CDF9" px={8}
                _hover={{ background: "#510653" }}>
                TIP $ DONATE
              </Button>
            </ChakraLink>
          </Center>

          <Box textAlign="center">
            <Heading as="h1" fontSize="108px" fontWeight="400" color="#E652E9">दान</Heading>
            <Heading as="h2" fontSize="63px" fontWeight="400" color="#B895B9">TIP $ DONATE</Heading>
            <Text fontSize="27px" color="#B895B9" mt={4}>
              Independent Spiritual and Creative Practice that serves people and
              planet directly while not producing capitalistic "value" requires
              direct support from community to materially sustain.

              Master Nataraj G has lived without secure housing or regular income for years and is
              constantly serving all beings to collectively build a New World
              of Peace, Love, Joy, Balance and Gratitude regardless of
              monetary gain.

              <br/><br/>Your donation supports housing, food and
              spiritual practice for Master Nataraj G and his family.
            </Text>
          </Box>

          <Center>
            <ChakraLink as={Link} href="https://checkout.square.site/merchant/MLQQHJDY0X309/checkout/JVIOVWY5YWA2UUS5QZ52I32M">
              <Button size="lg" bg="#6E0A70" color="#F8CDF9" px={8}
                _hover={{ background: "#510653" }}>
                TIP $ DONATE
              </Button>
            </ChakraLink>
          </Center>

        </Stack>
      </Flex>
    </MNGLayout>
  )
}
