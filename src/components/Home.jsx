import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#141414]'>
        
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#b4b4b4]'>Hi! My name is</p>
            <h1 className='text-4xl sm:text-6xl font-bold text-white'>Christian Karlsson Korbacz</h1>
            <h2 className='text-3xl sm:text-5xl text-[#b4b4b4]'>I'm a Game Designer/Frontend Developer.</h2>
            <p className='text-[#b4b4b4] py-4 max-w-[700px]'>I'm a Game designer and a Frontend developer specialising in designing and building 
            exceptional digital experiences. Currently, I'm focused on building responsive web-applications
            and small yet fun games. Please take your time to review my work, and read my Resume and cover letter. Or just enjoy the website.</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#292929] hover:border-[#292929]'>
                  <Link to="portfolio" smooth={true} duration={500}>
                    View my work
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