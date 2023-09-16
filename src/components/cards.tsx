'use client'

import { Card, CardHeader, CardBody, CardProps, CardFooter, Link, Divider } from '@nextui-org/react'
import { IconType } from 'react-icons'
import { HiArrowRight } from 'react-icons/hi2'

type CustomCardProps = {
  icon?: React.ReactNode,
  children?: React.ReactNode,
  link?: {
    ref: string,
    displayText: string
  }
  title?: string
}

export function FeatureCard(props: CustomCardProps & Partial<CardProps>) {
  return (
    <Card {...props}>
      <CardHeader>
        <div className='p-2 bg-green-100 rounded-full'>
          {props.icon && props.icon}
        </div>
        <span className='ps-2 text-slate-800 font-bold '>{props.title}</span>
      </CardHeader>
      <Divider />
      <CardBody>
        {props.children}
        <div className='pt-2'>
        {props.link && <Link className='text-blue-600 font-semibold' href={props.link.ref}>{props.link.displayText} <div className='px-1'><HiArrowRight /></div></Link> }
        </div>
      </CardBody>
      
    </Card>
  )
}