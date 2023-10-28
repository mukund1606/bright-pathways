import React from 'react'
import {Button, ButtonGroup} from "@nextui-org/react";
const FifthSection = () => {
  return (
    <div className='flex items-center justify-between py-20 px-10'>
        <div> <h1 className='font-bold text-2xl'>Find the services you need</h1>
        <p>Download our Application and start searching today</p>
        </div>
        <div className=' flex gap-4 items-center'>
        <Button color="primary">
    Download App
  </Button>
  <Button color="primary">
   Learn More
  </Button>
        </div>

    </div>
  )
}

export default FifthSection