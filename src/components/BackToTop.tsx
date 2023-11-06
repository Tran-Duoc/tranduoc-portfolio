'use client'
import { ArrowUpCircle } from 'lucide-react'
import React from 'react'

const BackToTop = () => {
  const handleBackToTop = () => scrollTo({ left: 0, top: 0, behavior: 'smooth' })

  return (
    <div className='fixed bottom-0 right-0  m-5 animate-pulse md:m-10'>
      <ArrowUpCircle className='h-10 w-10 md:h-14 md:w-14' onClick={handleBackToTop} />
    </div>
  )
}

export default BackToTop
