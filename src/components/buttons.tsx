'use client'

import { Button, ButtonProps, Link } from '@nextui-org/react';


type ButtonDefaultProps = {
   children: React.ReactNode,
   be?: 'button' | 'link',
   href?: string
}

export function ButtonDefault(props: ButtonDefaultProps & Partial<ButtonProps>){


   if(props.be === 'link'){
      return <Button href={props.href} as={Link} {...props}>{props.children}</Button>
   }

   return <Button {...props}>{props.children}</Button>
}