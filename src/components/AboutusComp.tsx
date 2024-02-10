import React from 'react'
import documents from '../assets/images/documents.png'
import Image from 'next/image'
const AboutusComp = () => {
  return (
    <div className='font-sans flex flex-col items-center '>
       
        <div className='flex flex-col items-start p-7 space-y-4 pt-12  '>
             <div>
                 <span className='text-2xl text-gray-400'>About Study Sphere</span>
             </div>
             <div>
                 <span className='text-black text-5xl font-bold'>Story of your own virtual classroom</span>
             </div>
        </div>
        <div className=' flex flex-col items-center space-y-5 p-7   max-w-4xl '>
            <div className='lg:flex lg:flex-row lg:space-x-5 w-full '>
            <div className='w-full relative bottom-4 lg:w-[100rem]'>
            <Image src={documents}
            alt='About us Image'
            width={400}
            height={200} className='' layout='responsive' 
           />
            </div>
 
            <div className='relative top-4'>
                <span>
                We built Study Sphere to empower a new era of interactive and effective learning experiences.
                Study Sphere is our passion project, crafted to redefine education by seamlessly connecting students and educators. Join us in transforming education for the better.
                </span>
            </div>
            </div>

        </div>
        <div className=' flex flex-col p-7 w-full items-start max-w-4xl space-y-4 relative bottom-2'>
        <span className='font-bold text-5xl'>Contact Us</span>
            <ul className='list-disc space-y-3 pl-9'>
                <li>moortalha17@gmail.com</li>
                <li>aihlammalik2@gmail.com</li>
            </ul>

        </div>
       
    </div>
  )
}

export default AboutusComp
