import Image from 'next/image'
import hand from 'public/images/hand.png'
import avatar from 'public/images/user.jpg'
import React from 'react'

const Avatar = () => {
  return (
    <div className='relative h-64 w-64  rounded-full  bg-cyan-600 dark:bg-white '>
      <Image
        src={avatar}
        alt='Trần Được'
        fill
        loading='lazy'
        className='absolute rounded-full bg-cover object-cover p-2'
      />
      <Image
        src={hand}
        alt='Trần Được'
        loading='lazy'
        width={70}
        height={70}
        className='animate-rotate absolute bottom-0 left-0 z-10 -translate-x-2   translate-y-1 rounded-full bg-cyan-600 bg-cover object-cover p-1 dark:bg-white'
      />
    </div>
  )
}

export default Avatar
