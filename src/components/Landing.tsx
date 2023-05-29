import Image from 'next/image'
import React from 'react'
import heroImg from '../../public/tasks.png'
import Link from 'next/link'




const Landing = () => {
  return (
    <section className='w-full relative  flex flex-col justify-center items-center md:flex-row'>

      <div className='px-3 flex flex-col '>
         <Link href={'#tasks'} className='border border-white-600 rounded-lg font-semibold text-sm md:text-base py-2 px-6 self-start transition-all duration-200 hover:bg-gray-600 hover:text-white ml-1 mt-10'>Get Started </Link> 
      </div>
    </section>
  )
}

export default Landing