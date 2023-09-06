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

type DefaultProps = {
  title: string;
  content: string;
  iconConfig?: {
    element: IconType;
    bgColor?: string;
  };
  link?: {
    href: string,
    displayText: string
  };
};

function Default(props: DefaultProps) {
  return (
    <Card>
      {props.iconConfig && (
        <Box>
          <Icon as={props.iconConfig.element} />
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
