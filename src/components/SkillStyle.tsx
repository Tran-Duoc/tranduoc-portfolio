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
        'boxText boxTextGreen boxTextActive': color === 'neon_green',
        'boxText boxTextBlue boxTextActive': color === 'neon_blue',
        'boxText boxTextYellow boxTextActive': color === 'neon_yellow'
      })}
    >
      {name}
    </span>
  )
}

export default SkillStyle
