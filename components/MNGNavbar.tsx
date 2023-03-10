import {
  Box,
  Flex,
  Spacer,
  Text,
  Image,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { MNGBOLD } from './MNGType';
import NextLink from 'next/link';

export default function MNGNavbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position={'fixed'} w={'100%'} zIndex={999}>
      <Flex
        bg={'mngr.blacka'}
        color={'mngr.light'}
        minH={'60px'}
        py={{ base: 3 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={'gray.900'}
        align={'center'}>

        <Flex justify={{ base: 'center', md: 'start' }} w={{md:'100%'}}
          alignItems={'center'}>
          <NextLink href='/' style={{borderBottom: 'none'}}>
            <Image h={{base:30, md:39}} mr={'mngr.11'} src="/img/MNGSSDivineEagle.png" alt="MNG SS Divine Eagle Logo" />
          </NextLink>
          <NextLink href='/' style={{borderBottom: 'none'}}>
            <MNGBOLD>
              Master Nataraj G Healing &amp; Art
            </MNGBOLD>
          </NextLink>

          <Spacer display={{ base: 'none', md: 'flex' }} />

          <Flex display={{ base: 'none', md: 'flex' }}>
            <DesktopNav />
          </Flex>

          <Stack
            display={{ base: 'none', md: 'none' }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button
              as={'a'}
              variant={'noline'}
              fontSize={'sm'}
              fontWeight={600}
              color={'mngr.light'}
              bg={'mngr.button'}
              href={'/book'}
              _hover={{
                bg: 'mngr.button_h',
                color: 'mngr.light'
              }}>
              Book a Session
            </Button>
          </Stack>
        </Flex>

        <Spacer display={{ base: 'flex', md: 'none' }} />
        <Flex
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = 'mngr.light';
  const linkHoverColor = 'mngr.link';
  const popoverContentBgColor = 'mngr.blacka';

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                variant={'noline'}
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'md'}
                minW={'xs'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      variant={'noline'}
      p={2}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        color: 'mngr.dark',
      }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'mngr.link' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'mngr.link'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={'mngr.blacka'}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        variant={'noline'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={'mngr.light'}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={'gray.700'}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href} variant={'noline'}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Offerings',
    children: [
      {
        label: 'Healing',
        //subLabel: 'Trending Design to inspire you',
        href: '/offerings/healing'
      },
      {
        label: 'Food & Gardening',
        //subLabel: 'Up-and-coming Designers',
        href: '/offerings/food'
      },
      {
        label: 'Film & Interactive',
        //subLabel: 'Up-and-coming Designers',
        href: '/offerings/film'
      }
    ],
  },
  {
    label: 'Art',
    children: [
      {
        label: 'Film, Video & Animation',
        //subLabel: 'Find your dream design job',
        href: '/art/film'
      },
      {
        label: 'Apps, Web & Interactive',
        //subLabel: 'An exclusive list for contract work',
        href: '/art/interactive'
      },
      {
        label: 'Photography',
        //subLabel: 'An exclusive list for contract work',
        href: '/art/photos'
      }
    ],
  },
  {
    label: 'Journal',
    href: '/journal',
  },
  {
    label: 'About',
    href: '/about',
  },
];
