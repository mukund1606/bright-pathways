import Link from 'next/link'
import React from 'react'
import {Input, Button, Spacer} from "@nextui-org/react";

const NinthSection = () => {
  return (
    <div className='py-20'>
    <div className='flex justify-between items-center px-10 '>
<div className='flex flex-col gap-2 '><h1 className='font-bold'>Logo</h1>
<div className='flex gap-2'>
     <Link href="/" className="text-lg" color="foreground">
              Find Homes
            </Link>
            <Link href="/" className="text-lg" color="foreground">
              Animal Care
            </Link>
            <Link href="/" className="text-lg" color="foreground">
              Adoption Center
            </Link>
            <Link href="/" className="text-lg" color="foreground">
              Special Schools
            </Link>
            </div>
</div>
<div className='flex flex-col gap-2'>
    <h1 className='font-bold'>Subscribe</h1>
    <div className='flex gap-2 items-center'>
        <Input
     
      type="email"
      label="Email"
      size="sm"
      className=" border border-black rounded-lg"
    />
     <Button color="primary" >
            Subscribe
            </Button>
    </div>
    <p>By subscribing you agree to our privacy policy</p>
</div>
   </div>
<div className='flex flex-col py-10 px-10 ' >
    <div className='w-full h-5'>
<Spacer className='w-[80%] h-[3px] bg-gray-800/20'/>
</div>
<div className='flex justify-between items-center '>
    <div>
<Link href={'/'}>privacy Policy</Link>
<Link href={'/'}> Terms of Services </Link>
<Link href={'/'}> Cookie settings</Link>

    </div>
   
   <h2> © symbolsDB.com</h2>
    
</div>
</div>

    </div>
  )
}

export default NinthSection