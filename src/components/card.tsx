'use client';

import { Box, Card, CardHeader, Icon } from '@chakra-ui/react';
import { ReactElement } from 'react';
import {IconType} from 'react-icons'

type DefaultProps = {
  title: string;
  content: string;
  iconConfig?: {
    element: IconType;
    bgColor?: string;
  };
  link?: string;
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
    </Card>
  );
}
