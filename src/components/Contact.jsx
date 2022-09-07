import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full md:h-screen bg-lightModeMainColor dark:bg-darkModeMainColor flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/7ef2199f-c426-4cd9-a9f2-08b3a0849101" className='flex flex-col max-w-[600px] w-full mb-20'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#141414] text-lightModeTitle2Color dark:text-darkModeTitle2Color'>Contact</p>
                <p className=' dark:text-darkModeTitle2Color py-4'>// Submit the form below to get in touch.</p>
            </div>
            <input className='p-2 bg-[#7e7e7e] placeholder:text-white rounded-md hover:bg-[#424242] duration-500' type="text" placeholder='Jane Doe' name='name' />
            <input className='my-4 p-2 placeholder:text-white bg-[#7e7e7e] rounded-md hover:bg-[#424242] duration-500' type="email" placeholder='jane@doe.com' name='email' />
            <textarea className='p-2 bg-[#7e7e7e] placeholder:text-white rounded-md hover:bg-[#424242] duration-500' name="message" rows="10" placeholder='Message me!'></textarea>
            <button className='text-black dark:text-white border-2 hover:bg-black hover:text-white hover:border-black dark:hover:bg-[#141414] dark:hover:border-[#141414] px-4 py-3 my-8 mx-auto flex items-center rounded-md'>Let's Collaborate!</button>
        </form>
    </div>
  )
}

export default Contact