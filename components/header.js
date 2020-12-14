import {
  Box,
  Container,
  Button,
  Link as ChakraLink,
  Menu, MenuButton, MenuList, MenuGroup, MenuDivider, MenuItem,
  Flex, Spacer, Center,
  Image,
  Text
} from '@chakra-ui/react'
import Link from 'next/link'

import styles from './header.module.scss'

export default function Header() {
  return (
    <Flex as="header" w={960} maxW={960} mx="auto">
      <Center align="left" w={150} h={150}>
        <Menu as="nav">
          <MenuButton as={Button} border="none" bg="none" p={0} borderRadius={0}
            _hover={{
              bg: "#300931"
            }}
          >
            <Image src="/img/tilak.png" alt="Menu Open" />
          </MenuButton>
          <MenuList>
            <MenuGroup>
              <MenuItem>
                <ChakraLink as={Link} href="/land">भूमि LAND</ChakraLink>
              </MenuItem>
              <MenuItem>
                <ChakraLink as={Link} href="/food">खाना FOOD</ChakraLink>
              </MenuItem>
              <MenuItem>
                <ChakraLink as={Link} href="/yoga">योग YOGA</ChakraLink>
              </MenuItem>
              <MenuItem>
                <ChakraLink as={Link} href="/art">कला ART</ChakraLink>
              </MenuItem>
              <MenuItem>
                <ChakraLink as={Link} href="/love">प्यार LOVE</ChakraLink>
              </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup>
              <MenuItem>
                <ChakraLink as={Link} href="/sovereignwebpresence">SOVEREIGN WEB PRESENCE</ChakraLink>
              </MenuItem>
              <MenuItem>
                <ChakraLink as={Link} href="/madeontongvaland">MADE ON TONGVALAND</ChakraLink>
              </MenuItem>
              <MenuItem>
                <ChakraLink as={Link} href="/love#credits">CREDITS</ChakraLink>
              </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup>
              <MenuItem>
                <ChakraLink as={Link} href="/tip$donate">TIP $ DONATE</ChakraLink>
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Center>

      <Spacer />

      <Center w={296} h={150} color="#F8CDF9">
        <Flex>
          <Box textAlign="center" mr={6} pt={2}>
            <Text fontSize="2xl">शांति</Text>
            <Text fontSize="sm" mt="-6px">PEACE</Text>
          </Box>
          <Box align="center">
            <Image className={styles.gauralok} borderRadius="full" boxShadow="0px 0px 39px 0px #96731C" src="/img/gauralok.png" alt="Gauralok" title="Gauralok" />
          </Box>
          <Box textAlign="center" ml={6} pt={2}>
            <Text fontSize="2xl">प्यार</Text>
            <Text fontSize="sm" mt="-6px">LOVE</Text>
          </Box>
        </Flex>
      </Center>

      <Spacer />

      <Box w={150} h={150} />
    </Flex>
  )
}
