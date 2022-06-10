import React from 'react'
import CSharp from '../assets/CSharp.png';
import Javascript from '../assets/javascript.png';
import HTML from '../assets/html.png';
import CSSImg from '../assets/css.png';
import ReactImg from '../assets/react.png';
import TailwindImg from '../assets/tailwind.png';
import GithubImg from '../assets/github.png';
import Unity from '../assets/Unity.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#141414] text-[#b4b4b4]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#292929]'>Skills</p>
                <p className='py-4'>// Theese are the technologies I've worked with.</p>
            </div>

            <div className='w-full grid grid-cols-2 mb-20 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#414244] m-4 hover:scale-110 duration-500'>
                    <img className='w-20 mt-4 mx-auto' src={CSharp} alt="C# Icon" />
                    <p className='my-4'>C#</p>
                </div>
                <div className='shadow-md shadow-[#414244] m-4 hover:scale-110 duration-500'>
                    <img className='w-20 mt-4 mx-auto' src={Javascript} alt="JS Icon" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#414244] m-4 hover:scale-110 duration-500'>
                    <img className='w-20 mt-4 mx-auto' src={HTML} alt="HTML Icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#414244] m-4 hover:scale-110 duration-500'>
                    <img className='w-20 mt-4 mx-auto' src={CSSImg} alt="CSS Icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#414244] m-4 hover:scale-110 duration-500'>
                    <img className='w-20 mt-4 mx-auto' src={ReactImg} alt="React Icon" />
                    <p className='my-4'>ReactJS</p>
                </div>
                <div className='shadow-md shadow-[#414244] m-4 hover:scale-110 duration-500'>
                    <img className='w-20 mt-4 mx-auto' src={TailwindImg} alt="Tailwind Icon" />
                    <p className='my-4'>TailwindCSS</p>
                </div>
                <div className='shadow-md shadow-[#414244] m-4 hover:scale-110 duration-500'>
                    <img className='w-20 mt-4 mx-auto' src={GithubImg} alt="Github Icon" />
                    <p className='my-4'>GitHub</p>
                </div>
                <div className='shadow-md shadow-[#414244] m-4 hover:scale-110 duration-500'>
                    <img className='w-20 mt-4 mx-auto' src={Unity} alt="Unity Icon" />
                    <p className='my-4'>Unity</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills