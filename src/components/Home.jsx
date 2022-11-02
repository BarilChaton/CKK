import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#333333]'>
        
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#b4b4b4]'>Hi! My name is</p>
            <h1 className='text-4xl sm:text-6xl font-bold text-white'>Christian Karlsson Korbacz</h1>
            <h2 className='text-3xl sm:text-4xl text-[#b4b4b4]'>I'm a Junior Game Developer at Relax Gaming.</h2>
            <p className='text-[#b4b4b4] py-4 max-w-[700px]'>I'm a Game developer specialising in designing and building 
            exceptional games. Currently, I'm focused on building web based games for Relax Gaming
            and private side projects on my freetime. Please take your time to review my work, and read my Resume and cover letter. Or just enjoy the website.</p>
            <div className='flex gap-8'>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#292929] hover:border-[#292929]'>
                  <Link to="portfolio" smooth={true} duration={500}>
                    View my work
                  </Link>
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
                </span>
                </button>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#292929] hover:border-[#292929]'>
                  <Link to="certificates" smooth={true} duration={500}>
                    View my certificates
                  </Link>
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
                </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home