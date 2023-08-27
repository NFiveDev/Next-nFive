'use client';

import { Container, Flex, HStack, Box, Spacer, Image } from '@chakra-ui/react';
import {} from '@chakra-ui/next-js';
import LoginButton from './Buttons/LoginButton';
import SignUpButton from './Buttons/SignUpButton';
function MobileNav() {
  return <Box display={{ base: 'block', md: 'none' }}></Box>;
}

function DesktopNav() {
  return <Box display={{ base: 'none', sm: 'none', md: 'block' }}></Box>;
}

function NavWrapper() {
  return (
    <>
      <DesktopNav />
      <MobileNav />
      <HStack>
        <SignUpButton text='Sign Up' size='sm' />
        <LoginButton size='sm' text='Login' />
      </HStack>
    </>
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
