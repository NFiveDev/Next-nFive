'use client';

import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import { IconType } from 'react-icons';
import { HiArrowTopRightOnSquare, HiArrowRight } from 'react-icons/hi2';
import { Link } from '@chakra-ui/next-js';
import { ReactIconsClientMapper } from './constants/icons_client';

type DefaultProps = {
  title: string;
  content: string;
  iconConfig?: {
    element: string;
    bgColor?: string;
    size?: number;
  };
  link?: {
    href: string;
    displayText: string;
  };
};

function Default(props: DefaultProps) {
  let reactIcon: IconType | undefined;
  const reactIconSize = props.iconConfig?.size ? props.iconConfig?.size : 5;

  if (props.iconConfig) {
    reactIcon = ReactIconsClientMapper(props.iconConfig.element);
  }

  return (
    <Card>
      <CardHeader paddingBottom={0}>
        <Stack>
          {props.iconConfig && (
            <Box
              width={'fit-content'}
              padding={1.5}
              borderRadius={'50%'}
              bgColor={props.iconConfig.bgColor}
            >
              <Flex>
                {reactIcon && <Icon boxSize={reactIconSize} as={reactIcon} />}
              </Flex>
            </Box>
          )}
        </Stack>
      </CardHeader>
      <CardBody paddingBottom={2}>
        <Stack spacing={2}>
          <Text
            as={'h4'}
            fontSize={'lg'}
            fontWeight={'semibold'}
            textColor={'gray.700'}
          >
            {props.title}
          </Text>
          <Text>{props.content}</Text>
        </Stack>
      </CardBody>
      {props.link && (
        <CardFooter paddingTop={0}>
          <Link href={props.link.href} textColor={'blue.500'}>
            <HStack spacing={1}>
              <Text>
              {props.link.displayText}
              </Text>
               <HiArrowRight />
            </HStack>
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}

export { Default as DefaultCard };
