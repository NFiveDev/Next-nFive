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
  Link
} from '@chakra-ui/react';
import {} from '@chakra-ui/next-js';
import LoginButton from './Buttons/LoginButton';
import SignUpButton from './Buttons/SignUpButton';
import Split from './Split';
function MobileNav() {
  return <Box display={{ base: 'block', md: 'none' }}></Box>;
}


const Config = {
  links: [
    {
      title: 'Courses',
      ref: '/course',
    },
    {
      title: 'Ressources',
      ref: '/ressource',
    },
    {
      title: 'About',
      ref: '/about',
    }
  ]
}

function DesktopNav() {
  return <Box display={{ base: 'none', sm: 'none', md: 'block' }}>
    <Flex>
      <HStack>
        {
          Config.links.map(function(item, index) {
            return <Link href={item.ref} key={index} >{item.title}</Link>
          })
        }
      </HStack>
    </Flex>
  </Box>;
}

function NavWrapper() {
  return (
    <Box display={'flex'} alignItems={'center'}>
      <DesktopNav />
      <Split display={{ base: 'none', md: 'block' }} height='2rem' />
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
