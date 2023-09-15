'use client'

import { Button, ButtonProps } from '@nextui-org/react';

type ButtonDefaultProps = {
   children: React.ReactNode
}

export function ButtonDefault(props: ButtonDefaultProps & Partial<ButtonProps>){
   return <Button {...props}>{props.children}</Button>
}