'use client'

import { Container, Flex, HStack, Box, Spacer, Image } from "@chakra-ui/react";
import {  } from "@chakra-ui/next-js";
function MobileNav() {
  return (
    <Box display={{base: 'block', md: 'none'}}>
      mobile
    </Box>
  )
}

function DesktopNav() {
  return (
    <Box display={{base: 'none', sm: 'none', md: 'block'}}>
      desktop
    </Box>
  )
}

function NavWrapper() {
  return (
    <>
      <DesktopNav />
      <MobileNav />
      <HStack>
        
      </HStack>
    </>
  )
}

function NavLogo() {
  return (
    <Flex justifyContent={'center'}>
      <Box boxSize={'50px'}>
        <Image src="/logo.png" alt="N5Logo"/>
      </Box>
    </Flex>
  )
}

export default function NavBar() {
  return (
    <Container paddingTop={'0.5rem'} maxW={'container.xl'} paddingBottom={'0.5rem'}>
      <Flex flexDirection={'row'} flexWrap={'nowrap'}>
        <Box>
          <NavLogo />
        </Box>
        
        <Spacer />
        <NavWrapper />
      </Flex>
    </Container>
  )
}