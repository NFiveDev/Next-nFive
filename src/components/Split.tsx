import { Divider, Center } from '@chakra-ui/react';

type SplitProps = {
  direction?: 'vertical' | 'horizontal';
  color?: string,
  width?: number,
  height?: string,
  display?: object
};

export default function Split({ direction = 'vertical', height = '50px', width = 0.05, color = 'gray.400', display }: SplitProps) {
  const borderWidth = `${width}rem`

  if (direction === 'vertical') {
    return (
      <>
        <Center height={height} display={display}>
          <Divider orientation="vertical" borderWidth={borderWidth} borderColor={color}/>
        </Center>
      </>
    );
  }

  if (direction === 'horizontal') {
    return (
      <>
        <Divider display={display} orientation='horizontal' borderWidth={borderWidth} borderColor={color} />
      </>
    );
  }
}
