import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full md:h-screen bg-[#141414] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/7ef2199f-c426-4cd9-a9f2-08b3a0849101" className='flex flex-col max-w-[600px] w-full mb-20'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#292929] text-[#b4b4b4]'>Contact</p>
                <p className='text-[#b4b4b4] py-4'>// Submit the form below or contact me on my mail - kodman1991@hotmail.com</p>
            </div>
            <input className='p-2 bg-[#292929] rounded-md hover:bg-[#505050] duration-500' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#292929] rounded-md hover:bg-[#505050] duration-500' type="email" placeholder='Email' name='email' />
            <textarea className='p-2 bg-[#292929] rounded-md hover:bg-[#505050] duration-500' name="message" rows="10" placeholder='Message me!'></textarea>
            <button className='text-white border-2 hover:bg-[#292929] hover:border-[#292929] px-4 py-3 my-8 mx-auto flex items-center rounded-md'>Let's Collaborate!</button>
        </form>
    </div>
  )
}

export default Contact