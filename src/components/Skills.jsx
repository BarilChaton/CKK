import React from 'react'
import CSharp from '../assets/CSharp.png';
import Javascript from '../assets/javascript.png';
import HTML from '../assets/html.png';
import CSSImg from '../assets/css.png';
import ReactImg from '../assets/react.png';
import TailwindImg from '../assets/tailwind.png';
import GithubImg from '../assets/github.png';
import Unity from '../assets/Unity.png';
import Sanity from '../assets/sanity.png';
import Azure from '../assets/azure.png';
import GoogleCloud from '../assets/googlecloud.png';
import Blender from '../assets/blender.png';
import Aseprite from '../assets/aseprite.png';
import PixiJS from '../assets/PixiJS.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#333333] text-[#b4b4b4]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#141414]'>Skills</p>
                <p className='py-4'>// These are the technologies I've worked with.</p>
            </div>

            <div className='w-full grid grid-cols-2 mb-40 sm:grid-cols-4 gap-4 text-center py-8 overflow-auto border-4 border-[#292929] rounded-lg shadow-md shadow-[#141414]'>
                <div className='shadow-md shadow-[#141414] m-4 hover:scale-110 duration-500'>
                    <img className='w-20 mt-4 mx-auto' src={CSharp} alt="C# Icon" />
                    <p className='my-4'>C#</p>
                </div>
                <div className='shadow-md shadow-[#141414] m-4 hover:scale-110 duration-500'>
                    <img className='w-20 mt-4 mx-auto' src={Javascript} alt="JS Icon" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#141414] m-4 hover:scale-110 duration-500'>
                    <img className='w-20 mt-4 mx-auto' src={HTML} alt="HTML Icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#141414] m-4 hover:scale-110 duration-500'>
                    <img className='w-20 mt-4 mx-auto' src={CSSImg} alt="CSS Icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#141414] m-4 hover:scale-110 duration-500'>
                    <img className='w-20 mt-4 mx-auto' src={ReactImg} alt="React Icon" />
                    <p className='my-4'>ReactJS</p>
                </div>
                <div className='shadow-md shadow-[#141414] m-4 hover:scale-110 duration-500'>
                    <img className='w-20 mt-4 mx-auto' src={PixiJS} alt="Pixi Icon" />
                    <p className='my-4'>PixiJS</p>
                </div>
                <div className='shadow-md shadow-[#141414] m-4 hover:scale-110 duration-500'>
                    <img className='w-20 mt-4 mx-auto' src={TailwindImg} alt="Tailwind Icon" />
                    <p className='my-4'>TailwindCSS</p>
                </div>
                <div className='shadow-md shadow-[#141414] m-4 hover:scale-110 duration-500'>
                    <img className='w-20 mt-4 mx-auto' src={GithubImg} alt="Github Icon" />
                    <p className='my-4'>GitHub</p>
                </div>
                <div className='shadow-md shadow-[#141414] m-4 hover:scale-110 duration-500'>
                    <img className='w-20 mt-4 mx-auto' src={Unity} alt="Unity Icon" />
                    <p className='my-4'>Unity</p>
                </div>
                <div className='shadow-md shadow-[#141414] m-4 hover:scale-110 duration-500'>
                    <img className='w-20 mt-4 mx-auto' src={Sanity} alt="Sanity Icon" />
                    <p className='my-4'>Sanity</p>
                </div>
                <div className='shadow-md shadow-[#141414] m-4 hover:scale-110 duration-500'>
                    <img className='w-20 mt-4 mx-auto' src={Azure} alt="Azure Icon" />
                    <p className='my-4'>Azure</p>
                </div>
                <div className='shadow-md shadow-[#141414] m-4 hover:scale-110 duration-500'>
                    <img className='w-20 mt-4 mx-auto' src={GoogleCloud} alt="Google cloud Icon" />
                    <p className='my-4'>Google Cloud</p>
                </div>
                <div className='shadow-md shadow-[#141414] m-4 hover:scale-110 duration-500'>
                    <img className='w-20 mt-4 mx-auto' src={Blender} alt="Blender Icon" />
                    <p className='my-4'>Blender</p>
                </div>
                <div className='shadow-md shadow-[#141414] m-4 hover:scale-110 duration-500'>
                    <img className='w-20 mt-4 mx-auto' src={Aseprite} alt="Aseprite Icon" />
                    <p className='my-4'>Aseprite</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills