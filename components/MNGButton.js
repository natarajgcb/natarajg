import { Button, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'

export const MNGButton = (props) => {
  return (
    <ChakraLink as={Link} href={props.href} {...props}>
      <Button bg="mngr.button" color="mngr.light" px={6}
        _hover={{ bg: "mngr.button_h" }}>{props.children}</Button>
    </ChakraLink>
  )
}
