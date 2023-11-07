'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import coding from 'public/images/code.gif'
import React from 'react'

import TextField from '@/components/TextField'

const About = () => {
  return (
    <section className='flex min-h-screen items-center justify-center border-y-2 px-2 dark:bg-[#0F172A]  '>
      <div className='mx-auto w-full max-w-[96rem] '>
        <div className='grid grid-flow-dense grid-cols-1 gap-4 lg:grid-cols-3 text'>
          <div className='col-span-1 lg:order-[unset] lg:col-span-2'>
            <TextField title='About me' size='5xl' />
            <div className='mt-5 w-full max-w-4xl '>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <TextField title='Hello everyone 👋, ' size='lg' />
                <TextField
                  title='Currently, I am a senior student majoring in Computer Science at Can Tho University.'
                  size='lg'
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <TextField
                  title='I like web programming ❤️'
                  size='lg'
                  style={{
                    marginTop: '1rem'
                  }}
                />
                <TextField
                  title='My favorite part of programming is the problem-solving aspect. I love the feeling of finally figuring out a solution to a problem. My core stack is React, Next.js, Node.js, and MongoDB. I am also familiar with TypeScript. I am always looking to learn new technologies'
                  size='lg'
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <TextField
                  title="When I'm not coding. I enjoy playing video games, watching movies, and listening pop music. I also enjoy learning new things  I am currently learning about history and philosophy I'm also learning how to play the guitar."
                  size='lg'
                  style={{
                    marginTop: '1rem'
                  }}
                />
              </motion.div>
            </div>
          </div>
          <div className='col-span-1'>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className='relative w-full overflow-hidden rounded-2xl  border-2 '
            >
              <Image src={coding} alt='This is coding image' />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
