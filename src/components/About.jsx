import React from 'react'
import ProfilePic from '../assets/Background.jpg'

const About = () => {
  return (
    <div name='about' className='w-full h-full bg-lightModeMainColor text-lightModeTitle2Color dark:bg-darkModeMainColor dark:text-darkModeTitle2Color'>
      <div className='flex justify-center mb-16'>
        <img className='mb-12 rounded-full border-8 border-[#292929] ' src={ProfilePic} alt="My Image" style={{width: '500px'}}/>
      </div>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
              
              <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-[#141414]'>About</p>
              </div>
                <div></div>
              </div>
              <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                  <p>Hi! I'm Christian, nice to meet you.</p>
                </div>
                <div className='mb-10'>
                <p className='mb-40'>
                    I'm a freshly baked Game Designer/Frontend developer looking for a job opportunity to get experiance and make something that matters.
                    I always strive for the best result in whatever I do. I always approach a task with the Ockhams razor principle. And thus far it has always served me well.
                    I'm a graduate from a programming course at Lexicon. Which is a part of a program sponsored by the European Union to educate new programmers for the job market.
                    My speciality of choosing is Game design development and Frontend. Given that I have something of an artistic eye, I find it to be suitable for me.
                  </p>
                </div>
              </div>
            </div>
        </div>
  )
}

export default About