import React from 'react'
import bloglogo from '../assets/bloglogo.png'
import { useNavigate } from 'react-router-dom'

function Blog({posts}) {
  const Navigate=useNavigate()
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 
    lg:grid-cols-3 mt-10 px-10 md:px-14 lg:px-32'>
   {posts.map((item)=>(
        <div key={item.id} className='m-4 cursor-pointer' onClick={()=>Navigate('blog-Detail/'+item.id)}>  
        <img src={item.coverImage} alt="allCoverImg"  className='w-full rounded-2xl object-cover h-[200px]'/>
        <h3 className='text-red-500 mt-3'>{item.tag}</h3>
        <h3 className='font-bold mt-3'>{item.title}</h3>
        <h3 className='line-clamp-3 text-gray-400'>{item.desc}</h3>
        <div className='mt-5 flex items-center'>
      <img src={bloglogo} alt="bloglogo " className='w-[35px] rounded-full' />
     <div className='ml-2'>
        <h3 className='font-bold text-[12px]'>vk-Blogs </h3>
        <h3 className='text-gray-500 text-[10px]'>july-2023</h3>
      </div>
       </div>

          </div>
          
        ))}
    </div>
  )
}

export default Blog
