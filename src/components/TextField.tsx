import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

import { cn } from '@/lib/utils'

const TextFieldVariants = cva('font-medium px-2 md:px-0 block', {
  variants: {
    size: {
      default: 'text-sm md:text-base',
      lg: 'text-sm md:text-lg',
      xl: 'text-lg md:text-xl',
      '2xl': 'text-xl md:text-2xl',
      '3xl': 'text-2xl md:text-3xl',
      '4xl': 'text-3xl md:text-4xl',
      '5xl': 'text-3xl md:text-4xl',
      title: 'text-5xl md:text-7xl font-semibold'
    },
    hover: {
      true: 'hover:-translate-y-2 hover:text-cyan-700 duration-300'
    }
  }
})

interface Props extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof TextFieldVariants> {
  title: string
  size: 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | 'title'
  hover?: boolean
}

const TextField = ({ title, size, hover, ...other }: Props) => {
  return (
    <span className={cn(TextFieldVariants({ size, hover }))} {...other}>
      {title}
    </span>
  )
}

export default TextField
