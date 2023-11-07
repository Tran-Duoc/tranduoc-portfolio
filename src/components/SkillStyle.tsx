import React from 'react'

import { cn } from '@/lib/utils'

interface Props {
  name: string
  color: 'neon_green' | 'neon_blue' | 'neon_yellow'
}

const SkillStyle = ({ name, color }: Props) => {
  return (
    <span
      className={cn({
        'boxText boxTextGreen boxTextActive text-sm md:text-lg': color === 'neon_green',
        'boxText boxTextBlue boxTextActive text-sm md:text-lg': color === 'neon_blue',
        'boxText boxTextYellow boxTextActive text-sm md:text-lg': color === 'neon_yellow'
      })}
    >
      {name}
    </span>
  )
}

export default SkillStyle
