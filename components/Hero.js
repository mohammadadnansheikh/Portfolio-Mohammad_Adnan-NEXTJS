import React from 'react'
import Typewriter from 'typewriter-effect'
import Button from './Button'

const Hero = () => {
  return (
    <div className='bg-[url(/Mohammad-Adnan.jpg)] h-screen bg-cover bg-center bg-fixed flex items-center'>
        <div className='container mx-auto px-4'>
            <div className='max-w-[450px] text-red-500 bg-white  border border-[#ff4d41]  rounded-[5px] p-4 flex flex-col gap-[40px]'>
                <div>
                    <h1 className='text-4xl'>I'm Mohammad Adnan</h1>
                    <h4 className='text-2xl mt-3'>
                    <Typewriter
                    options={{
                        strings:[
                            "Full Stack Developer",
                            "Software Developer"
                        ],
                        changeDelay:3,
                        changeDeleteSpeed:2,
                        autoStart:true,
                        loop:true,
                    }}
                    />
                    </h4>
                </div>
                <div>
                    <p>
                        I am proficient in Full Stack Development worked on various projects.
                        
                    </p>
                </div>
            </div>
            {/* <Button link="#" text="Learn More"/> */}
        </div>
      
    </div>
  )
}

export default Hero
