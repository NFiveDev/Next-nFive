'use client';

import {
  Container,
  Flex,
  HStack,
  Box,
  Spacer,
  Image,
  Link,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  DrawerCloseButton,
  List,
  ListItem,
  Text,
  ListIcon
} from '@chakra-ui/react';
import { HiBars3, HiAcademicCap, HiArchiveBox, HiQuestionMarkCircle } from 'react-icons/hi2';
import LoginButton from './Buttons/LoginButton';
import SignUpButton from './Buttons/SignUpButton';
import Split from './Split';
import { usePathname } from 'next/navigation';
import { config } from 'process';

const Config = {
  links: [
    {
      title: 'Courses',
      ref: '/course',
      icon: HiAcademicCap
    },
    {
      title: 'Ressources',
      ref: '/ressource',
      icon: HiArchiveBox
    },
    {
      title: 'About',
      ref: '/about',
      icon: HiQuestionMarkCircle
    },
  ],
};

function DesktopNav() {
  const currPath = usePathname();
  return (
    <Box paddingX={4} display={{ base: 'none', sm: 'none', md: 'block' }}>
      <Flex>
        <HStack spacing={4}>
          {Config.links.map(function (item, index) {
            return (
              <Link
                href={item.ref}
                key={index}
                fontWeight={currPath === item.ref ? 'semibold' : 'medium'}
                fontSize={'sm'}
                textColor={currPath === item.ref ? 'teal.500' : 'gray.500'}
                _hover={{
                  textColor: 'gray.700',
                }}
              >
                {item.title}
              </Link>
            );
          })}
        </HStack>
      </Flex>
    </Box>
  );
}

function MobileNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box display={{ base: 'block', md: 'none' }} paddingX={2}>
        <IconButton
          size={'sm'}
          variant={'outline'}
          colorScheme={'teal'}
          aria-label="navigation"
          icon={<HiBars3 />}
          onClick={onOpen}
        />
      </Box>
      <Drawer placement="top" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody>
            <List spacing={3}>
              {Config.links.map(function (link) {
                return <ListItem key={'key_' + link.title} display={'flex'} flexDirection={'row'} alignItems={'center'}>
                  <ListIcon as={link.icon} color={'teal.500'}/>
                  <Text >
                    {link.title}
                  </Text>
                  
                </ListItem>;
              })}
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function NavWrapper() {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      flexDirection={{ base: 'row', md: 'row' }}
    >
      <DesktopNav />
      <Split display={{ base: 'none', md: 'block' }} height="2rem" />
      <HStack marginStart={3} spacing={'1rem'}>
        <SignUpButton text="Sign Up" size="sm" />
        <LoginButton size="sm" text="Login" />
      </HStack>
      <MobileNav />
    </Box>
  );
}

function NavLogo() {
  return (
    <Flex justifyContent={'center'}>
      <Box boxSize={'40px'}>
        <Image src="/logo.png" alt="N5Logo" />
      </Box>
    </Flex>
  );
}

export default function NavBar() {
  return (
    <Box borderBottom={'1px'} borderColor={'gray.300'}>
      <Container
        paddingTop={'0.5rem'}
        maxW={'container.xl'}
        paddingBottom={'0.5rem'}
      >
        <Flex flexDirection={'row'} flexWrap={'nowrap'}>
          <Box>
            <NavLogo />
          </Box>

          <Spacer />
          <NavWrapper />
        </Flex>
      </Container>
    </Box>
  );
}
