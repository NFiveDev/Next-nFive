'use client';

import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Icon,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import { IconType } from 'react-icons';
import {HiArrowTopRightOnSquare} from 'react-icons/hi2'
import { Link } from '@chakra-ui/next-js';
import { ReactIconsClientMapper } from './constants/icons_client';

type DefaultProps = {
  title: string;
  content: string;
  iconConfig?: {
    element: string
    bgColor?: string;
  };
  link?: {
    href: string,
    displayText: string
  };
};

function Default(props: DefaultProps) {
  let reactIcon: IconType | undefined;

  if(props.iconConfig) {
    reactIcon = ReactIconsClientMapper(props.iconConfig.element)
  }
  
  

  return (
    <Card>
      {props.iconConfig && (
        <Box>
          {reactIcon && <Icon as={reactIcon} />}
        </Box>
      )}

      <CardHeader>{props.title}</CardHeader>
      <CardBody>{props.content}</CardBody>
      {props.link && (
        <CardFooter>
          <Link href={props.link.href}>{props.link.displayText} <HiArrowTopRightOnSquare /></Link>
        </CardFooter>
      )}
    </Card>
  );
}


export {
  Default as DefaultCard
}
