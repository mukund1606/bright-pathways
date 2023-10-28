
import { animalShelters } from '@/assests'
import Image from 'next/image'
import React from 'react'

const ThirdSection = () => {
  return (
    <div className='w-full h-screen flex '>

    <div className='w-1/2 h-full flex flex-col gap-5 px-20 justify-center '>
     <div className='w-[70%] font-bold'><h1 className='text-3xl'>Find shelters and services for the well-being of animals in need.</h1></div>
    
     <div className='flex gap-4'>
         <div className='w-1/2'>
             <h1 className='font-bold text-lg'>Benifits</h1>
             <p>Connect with furry friends, offer them a loving home, and support animal welfare organizations.</p>
         </div>
         <div className='w-1/2'>
              <h1 className='font-bold text-lg'>Services</h1>
             <p className=''> Real-time location services, user reviews, and facility notifications.</p>
         </div>
     </div>
    </div>
    <div className='w-1/2 h-full  flex justify-center items-center' >
     <Image
     src={animalShelters}
     width={500}
     height={500}
     alt='oldageHomeimg'
     className=' object-contain'
     />
    </div>
 </div>
  )
}

export default ThirdSection