'use client'

import { Card, CardHeader, CardBody, CardProps, CardFooter, Link } from '@nextui-org/react'
import { IconType } from 'react-icons'
import { HiArrowRight } from 'react-icons/hi2'

type CustomCardProps = {
  icon?: React.ReactNode,
  bodyContent?: string,
  link?: {
    ref: string,
    displayText: string
  }
}

export function FeatureCard(props: CustomCardProps & Partial<CardProps>) {
  return (
    <Card {...props}>
      <CardHeader>
        <div className='p-2 bg-green-100 rounded-full'>
          {props.icon && props.icon}
        </div>
      </CardHeader>
      <CardBody>
        {props.bodyContent && props.bodyContent}
      </CardBody>
      <CardFooter>
        {props.link && <Link className='text-blue-600 font-semibold' href={props.link.ref}>{props.link.displayText} <div className='px-1'><HiArrowRight /></div></Link> }
      </CardFooter>
    </Card>
  )
}