import { Button, Link } from '@chakra-ui/react';

type SignUpButtonProps = {
  size: 'xs' | 'sm' | 'md' | 'lg';
  text: string;
};

export default function SignUpButton(props: SignUpButtonProps) {
  return <Link textColor={'gray.400'} _hover={{textColor: 'gray.500', textDecoration: 'underline'}} fontSize={'sm'} fontWeight={'md'}>{props.text}</Link>;
}
