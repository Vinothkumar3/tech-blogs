import React, { useState } from 'react'
import bg from './../assets/bl.jpg'
import {IoSearchOutline} from "react-icons/io5";

function Search({selectedTag}) {
 
  const tags=[{
    id:1,
    name:'All',
  },
  {
    id:2,
    name:'React',
  },
  {
    id:3,
    name:'React Native',
  },
  {
    id:4,
    name:'Angular',
  },
  {
    id:5,
    name:'UI/UX',
  },
]
const [Active,SetActive]=useState(0)
  return (
    <div className='flex justify-center mt-3 flex-col px-[70] md:px-[150px]'>
      <img src={bg} className='rounded-2xl h-[180px] w-[1100px]'/>
      <div className='bg-white shadow-lg p-4 rounded-lg mt-[-20px] mx-[25%] flex items-center'>
      <IoSearchOutline className='text-[20px] text-gray-400'/> 
      <input type="text" name="" id="" placeholder='Search...' 
      className='outline-none ml-2'/>
        </div>
        <div className='flex gap-9 justify-center mt-5'>
         {tags.map((nav,index)=>(
          <ul key={nav.id} onClick={()=>{SetActive(index);selectedTag(nav.name)}} className={`${index===Active?'bg-red-500 text-white rounded-sm ':null}
           px-3 py-1 md:rounded-full cursor-pointer md:px-4 hover:scale-110 hover:border-[1px]
            border-red-500 transition-all duration-100 ease-out`}>
            <li key={nav.id} >
              {nav.name}
            </li>
          </ul>
         ))}
        </div>
    </div>
  )
}

export default Search
