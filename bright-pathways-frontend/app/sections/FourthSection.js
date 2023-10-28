import { specialSchools } from '@/assests'
import Image from 'next/image'
import React from 'react'

const FourthSection = () => {
  return (
    <div className='w-full h-screen flex '>

    <div className='w-1/2 h-full flex flex-col gap-5 px-20 justify-center '>
     <div className='w-[70%] font-bold'><h1 className='text-3xl'>Discover educational institutions for individuals with visual impairments.</h1></div>
    
     <div className='flex gap-4'>
         <div className='w-1/2 '>
             <h1 className='font-bold text-lg'>Benifits</h1>
             <p>Access educational resources, make informed choices, and foster inclusivity in education.</p>
         </div>
         <div className='w-1/2'>
              <h1 className='font-bold text-lg'>Services</h1>
             <p className=''> A resource center, information on schools, and a caring community.</p>
         </div>
     </div>
    </div>
    <div className='w-1/2 h-full  flex justify-center items-center' >
     <Image
     src={specialSchools}
     width={500}
     height={500}
     alt='oldageHomeimg'
     className=' object-contain'
     />
    </div>
 </div>
  )
}

export default FourthSection