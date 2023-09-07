'use client'

import { SimpleGrid, SimpleGridProps } from '@chakra-ui/react';

type GridSimpleProps = {
  children: React.ReactNode;
  columns: number;
  spacing?: number;
};

export function GridSimple(props: GridSimpleProps) {
  return (
    <SimpleGrid
      columns={props.columns}
      spacing={props.spacing ? props.spacing : 1}
    >
      {props.children}
    </SimpleGrid>
  );
}
