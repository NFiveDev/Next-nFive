'use client'

import { GridItem, SimpleGrid, SimpleGridProps } from '@chakra-ui/react';

type GridSimpleProps = {
  children: React.ReactNode;
  columns: object;
  spacing?: string;
  paddingY?: object;
};

export function GridSimple(props: GridSimpleProps) {
  return (
    <SimpleGrid
      columns={props.columns}
      spacing={props.spacing ? props.spacing : '1rem'}
      paddingY={props.paddingY}
    >
      {props.children}
    </SimpleGrid>
  );
}

export function GridItemSimple(props: {children: React.ReactNode}) {
  return <GridItem>{props.children}</GridItem>
}
