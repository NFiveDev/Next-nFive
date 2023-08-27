'use client';

import { Button } from '@chakra-ui/react';

type LoginButtonProps = {
  size: 'xs' | 'sm' | 'md' | 'lg';
  text: string;
};

export default function LoginButton(props: LoginButtonProps) {
  return (
    <Button
      size={props.size}
      bg={'pink.400'}
      _hover={{ bg: 'pink.300'}}
      color={'white'}
      fontWeight={600}
      fontSize={'sm'}
    >
      {props.text}
    </Button>
  );
}