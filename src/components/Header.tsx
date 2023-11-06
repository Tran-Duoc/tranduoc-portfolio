'use client'

import { useWindowScroll } from '@uidotdev/usehooks'
import React from 'react'

import { cn } from '@/lib/utils'

import { ModeToggle } from './ModeToggle'

const Logo = () => {
  return (
    <h1 className='rounded-md bg-[#023047] p-2 text-lg font-semibold text-white'>
      <span>T</span>
      <span>Đ</span>
    </h1>
  )
}

const Header = () => {
  const [{ x, y }, scrollTo] = useWindowScroll()
  console.log([x, y])

  return (
    <header
      className={cn('fixed left-0 right-0 top-0 z-50 border-b-[1px]  px-2 py-4  shadow-lg md:px-0', {
        'supports-backdrop-blur:bg-white/95 bg-white/50 backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] dark:bg-slate-900/75 lg:z-50 lg:border-b lg:border-slate-900/10':
          y
      })}
    >
      <div className='mx-auto w-full max-w-[96rem] px-2 md:px-0'>
        <div className='flex items-center justify-between'>
          <Logo />
          <nav className='flex gap-4 text-xl'>
            <span>Scroll to 100</span>
            <span>Home</span>
          </nav>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
