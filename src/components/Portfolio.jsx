import React from 'react'
import Munamii from '../assets/Munamii.jpg'
import KiberQuest from '../assets/KiberQuest.png'
import KiberSlots from '../assets/kiberslots.png'
import ShareSmile from '../assets/sharesmile.png'
import MW3D from '../assets/MW3D.jpg'
import Torii from '../assets/Torii-Tumble-slot-feat.jpg'
import HerculesDD from '../assets/Hercules-Unleashed-Dream-Drop-slot-feat.jpg'
import Tumbles from '../assets/the-tumbles-slot-feat.jpg'
import AssetTracker from '../assets/AssetTracker.jpg'
import MatrixRain from '../assets/matrixRain.jpg'
import EndlessSplash from '../assets/EndlessSplash.png'
import MazeWalkerDL from '../files/ConsoleMazeWalker3D.zip'
import AssetTrackerDL from '../files/KWABConsoleAssetTracker.zip'

const Work = () => {
  return (
    <div name='portfolio' className='w-full md:h-screen bg-[#333333] text-[#b4b4b4]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#141414]'>Portfolio</p>
                <p className='py-6'>Feel free to take a look at my work. More projects will be added with time.</p>
            </div>

            {/* Container */}
            <div className='mb-20 grid sm:grid-cols-2 md:grid-col-3 gap-4 overflow-y-scroll border-4 border-[#292929] rounded-lg shadow-md shadow-[#141414] p-1'>
            {/* Grid item */}
                <div style={{backgroundImage: `url(${Torii})`}}
                    className='shadow-lg shadow-[#414244] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            My first game made at Relax Gaming.
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://www.bigwinboard.com/torii-tumble-relax-gaming-slot-review/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#292929] font-bold text-lg'>Demo</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${HerculesDD})`}}
                    className='shadow-lg shadow-[#414244] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            My second game made at Relax Gaming.
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://www.bigwinboard.com/hercules-unleashed-dream-drop-relax-gaming-slot-review/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#292929] font-bold text-lg'>Demo</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${Tumbles})`}}
                    className='shadow-lg shadow-[#414244] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            My third game made at Relax Gaming.
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://www.bigwinboard.com/the-tumbles/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#292929] font-bold text-lg'>Demo</button>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div style={{backgroundImage: `url(${EndlessSplash})`}}
                className='shadow-lg shadow-[#414244] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            A 2 week end-project at Lexicon course.
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://christiankarlssonkorbacz.itch.io/project-endless">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#292929] font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/BarilChaton/Endless">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#292929] font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${KiberQuest})`}}
                className='shadow-lg shadow-[#414244] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Passion project game made with Unity.
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://christiankarlssonkorbacz.itch.io/kiberquest">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#292929] font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/BarilChaton/KiberQuest">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#292929] font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${KiberSlots})`}}
                className='shadow-lg shadow-[#414244] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Job position code test, casino game with KiberQuest theme.
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://barilchaton.github.io/kiberslots/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#292929] font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/BarilChaton/kiberslots">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#292929] font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${ShareSmile})`}}
                className='shadow-lg shadow-[#414244] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            My first social media app/website.
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://sharesmile.netlify.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#292929] font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/BarilChaton/ShareSmile">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#292929] font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${Munamii})`}}
                className='shadow-lg shadow-[#414244] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Simple HTML, CSS Website.
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://barilchaton.github.io/MunamiiCakes/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#292929] font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/BarilChaton/MunamiiCakes">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#292929] font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${MW3D})`}}
                className='shadow-lg shadow-[#414244] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            3D maze game on cmd using .Net C#.
                        </span>
                        <div className='pt-8 text-center'>
                            <a href={MazeWalkerDL} download="ConsoleMazeWalker3D.zip">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#292929] font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/BarilChaton/MazeWalker3D">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#292929] font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${AssetTracker})`}}
                className='shadow-lg shadow-[#414244] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Asset Tracking program using .Net C#.
                        </span>
                        <div className='pt-8 text-center'>
                            <a href={AssetTrackerDL} download="KWABConsoleAssetTracker.zip">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#292929] font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/BarilChaton/KWAB_AssetTracker">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#292929] font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${MatrixRain})`}}
                className='shadow-lg shadow-[#414244] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            A little cool JS gimmick.
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://barilchaton.github.io/MatrixRain/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#292929] font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/BarilChaton/MatrixRain">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#292929] font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work