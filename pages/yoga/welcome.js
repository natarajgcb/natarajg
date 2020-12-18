import MNGLayout from '../../components/mnglayout'
import {
  Flex, Box, Center,
  Image, Text, Heading,
  Button,
  Stack, VStack,
  Link as ChakraLink
} from '@chakra-ui/react'
import Link from 'next/link'

export default function Welcome() {
  return (
    <MNGLayout title="WELCOME">
      <Flex w={960} maxW={960} mx="auto">
        <VStack spacing={24} align="center" justify="center" marginLeft="auto">
          <Image w={600} mx="auto" src="/img/MasterNatarajGOm.jpg"
            alt="Master Nataraj G Welcomes You"
            title="Master Nataraj G Welcomes You"
          />

          <Box textAlign="center">
            <Heading as="h1" fontSize="108px" fontWeight="400" color="#E652E9">सलाम</Heading>
            <Heading as="h2" fontSize="63px" fontWeight="400" color="#B895B9">WELCOME</Heading>
            <Text fontSize="27px" color="#B895B9" mt={4}>
              सलाम, आप का स्वागत है
              <br/><br/>Greetings, welcome to Yoga Training with Master Nataraj G.
              <br/><br/>We honor the Tongva Land we are on and share our energy
                with you so we may all live in abundance, aligned with our highest
                and truest Infinite Self, for a New World rooted in the Divine
                Energies of Peace, Love, Joy, Balance and Gratitude.
              <br/><br/>Let Us Begin.
            </Text>
          </Box>

          <VStack spacing={0}>
            <Box w={600}>
              <Heading textAlign="left" as="h4" fontSize="36px" fontWeight="400"
                color="#B895B9">Initial Conversation (30 minutes)</Heading>
            </Box>
            <Center w={600}>
              <Text textAlign="left" fontSize="27px" color="#B895B9" mt={4}>
                As Infinite Beings, how we choose to organize our life force energy
                and direct our creative action has an immediate impact on our
                experience of life. As we begin our training together, it is
                important Master Nataraj G understands your life's journey, dreams
                and intentions.
                <br/><br/>Please allow yourself at least three big, deep, full
                breaths and a few (~10) minutes of peace and comfort to connect
                with your deepest desires, intentions and purpose.
                <br/><br/>Here are a few prompts to consider:
                <br/><br/> • what motivates and inspires you?
                <br/><br/> • who motivates, inspires and supports you?
                <br/><br/> • what is your diet like? Not just food for the body,
                  but also for your mind, heart, spirit and soul?
                <br/><br/> • are there significant episodes of change, trauma,
                  injury or healing that have shaped your life's journey?
                <br/><br/> • are there spiritual or physical practices you enjoy?

                <br/><br/>Please write down your feelings, thoughts and visualizations
                from this meditative exercise for yourself. As you feel, think,
                speak and write, so shall it be, dear Infinite One.

                <br/><br/>Click below to send a message to Master Nataraj G when
                you are ready to schedule your Initial Conversation (30 minutes).
              </Text>
            </Center>
            <Center w={600}>
              <Button as={"a"} bg="#6E0A70" color="#F8CDF9" mt={9} px={9} size="lg"
                href="mailto:nataraj.g@pm.me?subject=Schedule%20Initial%20Conversation"
                _hover={{ background: "#510653" }}>Schedule Initial Conversation</Button>
            </Center>
          </VStack>

          <Center>
            <Image src="/img/hummingbirdDivider.png" w="600px" />
          </Center>

        </VStack>
      </Flex>
    </MNGLayout>
  )
}
