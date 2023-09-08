'use client';

import {
  Center,
  Container,
  Flex,
  HStack,
  Heading,
  VStack,
  Text,
  Box,
  Button,
} from '@chakra-ui/react';
import { HiArrowRight, HiPlayCircle } from 'react-icons/hi2';

type SimpleProps = {};

function Simple(props: SimpleProps) {
  return (
    <Container px={'2rem'} maxW={'container.lg'} paddingTop={'10rem'} paddingBottom={10}>
      <Center height={'full'}>
        <VStack>
          <Flex flexDirection={'column'}>
            <Heading
              fontWeight={'medium'}
              textColor={'black'}
              py={'1rem'}
              textAlign={'center'}
              as={'h1'}
              size={'3xl'}
            >
              Experience the Future of Learning in IT and Programming
            </Heading>
            <Text
              textAlign={'center'}
              mx={'auto'}
              maxW={'90%'}
              as={'h2'}
              textColor={'teal.500'}
              fontWeight={'semibold'}
              fontSize={'lg'}
            >
              Discover the Future of Learning through Interactive Videos and
              Project-Based Courses. Join Our Inclusive Community, Where
              Aspiration Meets Expertise, Welcoming Learners of All Levels.
            </Text>
            <Box mx={'auto'} py={'1rem'}>
              <HStack spacing={'1rem'}>
                <Button
                  rightIcon={<HiArrowRight />}
                  colorScheme={'blue'}
                  variant={'solid'}
                >
                  Explore
                </Button>
                <Button
                  rightIcon={<HiPlayCircle />}
                  variant={'outline'}
                >Watch Intro</Button>
              </HStack>
            </Box>
          </Flex>
        </VStack>
      </Center>
    </Container>
  );
}

export { Simple as HeroSimple };
