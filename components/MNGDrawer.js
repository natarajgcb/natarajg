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
import { MNGButton } from './MNGButton'
import { MNGTopNavItem, MNGNavItem } from './MNGLayout'
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
            <DrawerHeader borderBottomWidth="1px">
              <MNGButton href="/sponsor$tip$donate">Sponsor $ Tip $ Donate</MNGButton>
            </DrawerHeader>
            <DrawerBody borderBottomWidth="1px">
              <List mt={4} spacing="1.688rem" lineHeight="1.688">
                <MNGTopNavItem href="/land" hindiText="भूमि" engText="LAND" />
                <MNGTopNavItem href="/food" hindiText="खाना" engText="FOOD" />
                <MNGTopNavItem href="/yoga" hindiText="योग" engText="YOGA" />
                <MNGTopNavItem href="/art"  hindiText="कला" engText="ART" />
                <MNGTopNavItem href="/love" hindiText="प्यार" engText="LOVE" />

                <Divider borderColor="mngr.black" />

                <MNGNavItem href="/library" label="Library" />
                <MNGNavItem href="/journal" label="Journal" />
                <MNGNavItem href="/about" label="About Master Nataraj G" />
                <MNGNavItem href="/sovereignwebpresence" label="Sovereign Web Presence" />
                <MNGNavItem href="/sponsor$tip$donate" label="Sponsor $ Tip $ Donate" />
                <MNGNavItem href="/madeontongvaland" label="Made On Tongvaland" />
              </List>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}
