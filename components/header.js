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
              <MenuItem>भूमि LAND</MenuItem>
              <MenuItem>खाना FOOD</MenuItem>
              <MenuItem>योग YOGA</MenuItem>
              <MenuItem>कला ART</MenuItem>
              <MenuItem>प्यार LOVE</MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup>
              <MenuItem>SOVEREIGN WEB PRESENCE</MenuItem>
              <MenuItem>MADE ON TONGVALAND</MenuItem>
              <MenuItem>CREDITS</MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup>
              <MenuItem>TIP $ DONATE</MenuItem>
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