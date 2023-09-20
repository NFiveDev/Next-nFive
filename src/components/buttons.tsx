'use client'

import { Button, ButtonProps, Link } from '@nextui-org/react';
import { Children } from 'react';
import { IconType } from 'react-icons';


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

type IconButtonProps = Partial<ButtonProps> & {
   children: React.ReactNode,
}

export function IconButton(props: IconButtonProps) {
   return (
      <Button {...props}>{props.children}</Button>
   )
}

type CourseFilterTogglerProps = {
   children: React.ReactNode
}

export function CourseFilterToggler(props: any) {


   return (
      <>
         <div className='p-2 border border-slate-300 hover:border-slate-600 rounded-lg'>{props.children}</div>
      </>
   )
}