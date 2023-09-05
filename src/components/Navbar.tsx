'use client';

import {
  Container,
  Flex,
  HStack,
  Box,
  Spacer,
  Image,
  Divider,
  Center,
  Link,
  Button,
} from '@chakra-ui/react';
import {} from '@chakra-ui/next-js';
import LoginButton from './Buttons/LoginButton';
import SignUpButton from './Buttons/SignUpButton';
import Split from './Split';
import { usePathname } from 'next/navigation'


function MobileNav() {
  return (
    <Box display={{ base: 'block', md: 'none' }}>
      <Button>
        
      </Button>
    </Box>
  ) 
}

const Config = {
  links: [
    {
      title: 'Courses',
      ref: '/course',
      icon: ''
    },
    {
      title: 'Ressources',
      ref: '/ressource',
      icon: ''
    },
    {
      title: 'About',
      ref: '/about',
      icon: ''
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
                  textColor: 'gray.700'
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

function NavWrapper() {
  return (
    <Box display={'flex'} alignItems={'center'}>
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
