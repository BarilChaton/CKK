import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail, HiOutlineDocumentText} from 'react-icons/hi'
import {BsFileCheck, BsFileCheckFill} from 'react-icons/bs'
import Logo from '../assets/CK.png'
import {Link} from 'react-scroll'
import resumeSV from '../files/ChristianKarlssonKorbaczCVSvenska.pdf'
import coverletterSV from '../files/ChristianKarlssonKorbaczCLSvenska.pdf'
import resumeEN from '../files/ChristianKarlssonKorbaczCVEnglish.pdf'
import coverletterEN from '../files/ChristianKarlssonKorbaczCLEnglish.pdf'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#292929] text-gray-300'>
        <div className='w-full place-self-start -ml-4'>
            <img src={Logo} alt="Logo Image" style={{width: '175px'}}/>
        </div>

        {/* Menu */}
        
        <ul className='hidden md:flex'>
          <li className='hover:border-2 py-4 duration-100'>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className='hover:border-2 py-4 duration-100'>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className='hover:border-2 py-4 duration-100'>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className='hover:border-2 py-4 duration-100'>
            <Link to="portfolio" smooth={true} duration={500}>
              Portfolio
            </Link>
          </li>
          <li className='hover:border-2 py-4 duration-100'>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#292929] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="portfolio" smooth={true} duration={500}>
              Portfolio
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <a href={resumeSV} download="ChristianKarlssonKorbaczCVSvenska.pdf" onClick={handleClick}>Download Swedish CV</a>
          </li>
          <li className='py-6 text-4xl'>
              <a href={resumeEN} download="ChristianKarlssonKorbaczCVEnglish.pdf" onClick={handleClick}>Download English CV</a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] rounded-r-full hover:ml-[-10px] duration-300 bg-blue-600'>
              <a className='flex justify-between items-center w-full text-gray-300'
               href="https://www.linkedin.com/in/christian-karlsson-b6369312b/">
                LinkedIn <FaLinkedin size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] rounded-r-full hover:ml-[-10px] duration-300  bg-[#333333]'>
              <a className='flex justify-between items-center w-full text-gray-300'
               href="https://github.com/BarilChaton">
                GitHub <FaGithub size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] rounded-r-full hover:ml-[-10px] duration-300 bg-[#0a99b3]'>
              <a className='flex justify-between items-center w-full text-gray-300'
               href="mailto:kodman1991@hotmail.com">
                Email <HiOutlineMail size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] rounded-r-full hover:ml-[-10px] duration-300 bg-[#362ead]'>
              <a className='flex justify-between items-center w-full text-gray-300'
               href={resumeSV} download="ChristianKarlssonKorbaczCVSvenska.pdf">
                Resume SV <BsFileCheck size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] rounded-r-full hover:ml-[-10px] duration-300 bg-[#362ead]'>
              <a className='flex justify-between items-center w-full text-gray-300'
               href={coverletterSV} download="ChristianKarlssonKorbaczCLSvenska.pdf">
                Coverletter SV <BsFileCheckFill size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] rounded-r-full hover:ml-[-10px] duration-300 bg-[#c53838]'>
              <a className='flex justify-between items-center w-full text-gray-300'
               href={resumeEN} download="ChristianKarlssonKorbaczCVEnglish.pdf">
                Resume EN <BsFileCheck size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] rounded-r-full hover:ml-[-10px] duration-300 bg-[#c53838]'>
              <a className='flex justify-between items-center w-full text-gray-300'
               href={coverletterEN} download="ChristianKarlssonKorbaczCLEnglish.pdf">
                Coverletter EN <BsFileCheckFill size={30} />
              </a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar