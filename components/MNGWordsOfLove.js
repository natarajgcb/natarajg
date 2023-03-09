import { Flex, Box, Image } from '@chakra-ui/react'
import Link from 'next/link'

export const MNGWordsOfLove = (props) => {
  const justifyContent = props.align == "left" ? "start" : "end";
  return (
    <Flex
      alignItems="center"
      justifyContent={justifyContent}
      mb="mngr.44"
    >{props.children}</Flex>
  )
}

export const MNGWordsOfLoveFace = (props) => {
  return (
    <Box width="15%">
      <Image w="100%" src={props.imgsrc}
        alt="Face of Love"
        borderRadius="full"
        boxShadow="0 0 10px 3px rgba(252,255,0,0.5)"
      />
    </Box>
  )
}

export const MNGWordsOfLoveText = (props) => {
  return (
    <Box align="center" width="85%">
      {props.children}
    </Box>
  )
}
