import React from 'react'
import ima from '../assets/techup.png';
import { IoLogoYoutube } from "react-icons/io5"
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate=useNavigate()
  return (
    <div className=' bg-stone-600 w-max lg:w-full md:w-full'>
    <div className=' flex  items-center md:gap-[26rem] sm:gap-[2rem]'>
      <img src={ima} className='w-[180px]  p-3' />
      <ul className='flex gap-4 md:gap-14 '>
        <li className='hover:font-semibold text-white  font-bold text-[3rem] sm:text-[2rem]'onClick={()=>navigate("/")}>Tech-Blogs</li>
        
      </ul>
     
    </div>
    
    </div>
  )
}

export default Header
