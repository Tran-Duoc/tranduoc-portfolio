import React from 'react'

const SectionTouch = () => {
  return (
    <div className='fixed  top-1/2 ml-5 hidden h-64 w-14 -translate-y-1/2 rounded-full shadow-inner shadow-slate-900 dark:bg-white md:block'>
      <div className='flex h-full flex-col items-center justify-between py-5'>
        {Array(4)
          .fill(0)
          .map((_item, index) => {
            return (
              <div key={index} className='h-4 w-4  rounded-full  bg-green-500  shadow-[0px_0px_0px_.4rem_red]  '></div>
            )
          })}
      </div>
    </div>
  )
}

export default SectionTouch
