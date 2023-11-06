'use client'

import { ArrowDownToLine, Facebook, Github, Linkedin, MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import Avatar from '@/components/Avatar'
import SkillStyle from '@/components/SkillStyle'
import TextField from '@/components/TextField'
import { Button } from '@/components/ui/button'

const userIntro = {
  intro: "I'm Tran Duoc. Senior student at Can Tho University.",
  profile: {
    start: "I'm Web developer both",
    frontend: 'FrontEnd',
    backend: 'BackEnd',
    javascript: 'JavaScript'
  }
}

const buttonStyle: React.CSSProperties = {
  padding: '1.5rem 1.2rem'
}

const iconSocials: { icon: React.ReactNode; link: string }[] = [
  {
    icon: <Facebook />,
    link: ''
  },
  {
    icon: <Github />,
    link: ''
  },
  {
    icon: <Linkedin />,
    link: ''
  }
]

const Intro = () => {
  return (
    <section className='relative mt-[4.5rem] flex min-h-[calc(100vh-4.5rem)] flex-col items-center justify-center gap-5 pb-5 md:pb-20 '>
      <Avatar />
      <div className='mx-auto max-w-3xl space-y-2 text-center'>
        <TextField size='title' title='Hi,' hover />
        <TextField size='2xl' title={userIntro['intro']} />
        <span className='flex flex-wrap items-center justify-center gap-[0.5rem] px-2 md:px-0'>
          <TextField size='2xl' title={userIntro['profile'].start} />
          <SkillStyle name={userIntro['profile'].frontend} color='neon_blue' />
          <TextField size='2xl' title='and' />
          <SkillStyle name={userIntro['profile'].backend} color='neon_green' />
          <TextField size='2xl' title='using ' />
          <SkillStyle name={userIntro['profile'].javascript} color='neon_yellow' />
        </span>
      </div>
      <div className='mt-5 flex flex-col items-center justify-center gap-2'>
        <div className='flex w-full flex-col items-center gap-4 md:flex-row '>
          <Button asChild className='rounded-full text-lg hover:-translate-y-1  ' style={buttonStyle}>
            <a href='file/cv.pdf' download='cv'>
              Download CV
              <ArrowDownToLine className='ml-2' />
            </a>
          </Button>

          <Button
            asChild
            className='rounded-full border bg-white text-lg text-slate-800 hover:-translate-y-1 hover:bg-[unset] dark:hover:text-white'
            style={buttonStyle}
          >
            <Link href={'https://www.facebook.com/messages/t/100027522219067'} target='_blank'>
              Contact me here
              <MoveRight className='ml-2' />
            </Link>
          </Button>
        </div>
        <div className='mt-4 flex items-center gap-2'>
          {iconSocials.map((item, index) => {
            return (
              <Link
                href={item.link}
                target='_blank'
                key={index}
                className='rounded-full border bg-muted p-3 shadow-inner duration-200 hover:bg-slate-500/20'
              >
                {item.icon}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Intro
