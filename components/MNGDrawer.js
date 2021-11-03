import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button, Image,
  List, ListItem,
  Text,
  Divider
} from "@chakra-ui/react"
import { MNGH2 } from './MNGType'
import { Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'

export default function MNGDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button border="none" bg="none" p={0} borderRadius={0}
        ref={btnRef} onClick={onOpen}
        _hover={{bg: "mngr.black"}}
        _focus={{bg: "mngr.black"}}
        _active={{bg: "mngr.black"}}
        justifyContent="start"
      >
        <Image src="/img/tilak.png" alt="Menu Open" width="69%" />
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent bg="mngr.dark">
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px" borderColor="mngr.black">
              <MNGH2 mt="mngr.17">BLESSINGS</MNGH2>
            </DrawerHeader>
            <DrawerBody borderBottomWidth="1px">
              <List mt={4} spacing="1.688rem" lineHeight="1.688">
                <ListItem fontSize="1.25rem" fontWeight="semibold"><Text as="span" fontSize="1.25rem">भूमि</Text> LAND</ListItem>
                <ListItem fontSize="1.25rem" fontWeight="semibold"><Text as="span" fontSize="1.25rem">खाना</Text> FOOD</ListItem>
                <ListItem fontSize="1.25rem" fontWeight="semibold"><Text as="span" fontSize="1.25rem">योग</Text> YOGA</ListItem>
                <ListItem fontSize="1.25rem" fontWeight="semibold"><Text as="span" fontSize="1.25rem">कला</Text> ART</ListItem>
                <ListItem fontSize="1.25rem" fontWeight="semibold"><Text as="span" fontSize="1.25rem">प्यार</Text> LOVE</ListItem>
                <Divider borderColor="mngr.black" />
                <ListItem>Library</ListItem>
                <ListItem>Journal</ListItem>
                <ListItem>Sovereign Web Presence</ListItem>
                <ListItem>Made On Tongvaland</ListItem>
                <ListItem>About Master Nataraj G</ListItem>
              </List>
            </DrawerBody>

            <DrawerFooter>
              <List mt={4} spacing="1.688rem" lineHeight="1.688rem" fontSize="0.8rem">
                <ListItem>Privacy</ListItem>
                <ListItem>Terms</ListItem>
                <ListItem>Credits</ListItem>
                <ListItem>Copyleft CC-BY-NC</ListItem>
                <ListItem>For Peace, Love, Joy, Balance &amp; Gratitude</ListItem>
              </List>
            </DrawerFooter>

          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}
