'use client';

import {
  HStack,
  Switch,
  Box,
  Flex,
  useColorMode,
  Text,
  Button,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import {} from 'react-icons/hi2';

function ThemeToggler() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isLight, setIsLight] = useState(colorMode === 'light');
  

  const toggleHandler = () => {
    toggleColorMode();
    setIsLight(!isLight)
  }

  return (
    <Flex marginTop={1} alignItems={'center'}>
      <HStack>
        <Box>
            <Text>{colorMode === 'light' ? 'Dark' : 'Light'}</Text>
        </Box>
        <Switch checked={isLight === false} onChange={toggleHandler} colorScheme="teal" size={'sm'} />
        <Box>
          
        </Box>
      </HStack>
    </Flex>
  );
}

export default ThemeToggler;
