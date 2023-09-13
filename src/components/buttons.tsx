'use client'

import { Button, ButtonProps } from '@nextui-org/react';

type ButtonDefaultProps = {
   displayText: string;
}

export function ButtonDefault(props: ButtonDefaultProps & Partial<ButtonProps>){
   return <Button {...props}>{props.displayText}</Button>
}