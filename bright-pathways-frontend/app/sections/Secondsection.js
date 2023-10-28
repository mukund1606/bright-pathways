import { mainImg, oldAgeHome } from '@/assests'
import Image from 'next/image'
import React from 'react'

const Secondsection = () => {
  return (
    <div className='w-full h-screen flex '>

       <div className='w-1/2 h-full flex flex-col gap-5 px-20 justify-center '>
        <div className='w-[70%] font-bold'><h1 className='text-3xl'>Discover the Benefits of Old Ages Homes and  senior Living Communities</h1></div>
        <div className='w-[70%]'> <p className='text-lg text-black/80'>our app is designed  to help  you find the perfect  old age  home or  senior living community for yourself or  your loved ones. With a wide range  of options and comprehensive information, we make  the process of finding the right  place easier and more  convenient. </p></div>
        <div className='flex gap-4'>
            <div>
                <h1 className='font-bold text-lg'>Benifits</h1>
                <p>Experience a supportive and caring environments that promotes independence and well-being</p>
            </div>
            <div>
                 <h1 className='font-bold text-lg'>Services</h1>
                <p className=''> Real-time location services, user reviews, and facility notifications.</p>
            </div>
        </div>
       </div>
       <div className='w-1/2 h-full  flex justify-center items-center' >
        <Image
        src={oldAgeHome}
        width={500}
        height={500}
        alt='oldageHomeimg'
        className=' object-contain'
        />
       </div>
    </div>
  )
}

export default Secondsection