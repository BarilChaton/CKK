import React from 'react'
import UDACert from '../assets/unity-certified-user-artist.png'

const Certificates = () => {
  return (
    <div name='certificates' className='w-full h-screen bg-[#333333] text-[#b4b4b4]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#141414]'>Certificates</p>
                <p className='py-4'>// These are the my certificates.</p>
            </div>
            <div className='w-full grid grid-cols-2 mb-40 sm:grid-cols-4 gap-4 text-center py-8 overflow-auto border-4 border-[#292929] rounded-lg shadow-md shadow-[#141414]'>
                <div className='shadow-md shadow-[#141414] m-4 hover:scale-110 duration-500'>
                    <a href="https://www.credly.com/badges/a14cebaa-dcf3-4b77-a9dc-70c73e96f9d8/public_url"><img className='w-200 my-4 mx-auto' src={UDACert} alt="Unity-DA-certificate" /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Certificates