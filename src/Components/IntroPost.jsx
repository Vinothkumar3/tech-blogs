import React from 'react'
import bloglogo from '../assets/bloglogo.png'
import { useNavigate } from 'react-router-dom'

function IntroPost({post}) {
  const Navigate=useNavigate()
  return (
    <div className=' cursor-pointer grid  grid-cols-1 md:grid-cols-2 
    mt-10 px-10 md:px-14 lg:px-32 gap-8' onClick={()=>Navigate('blog-Detail/'+post.id)}>
    <img src={post.coverImage} alt="coverImage" className='rounded-2xl object-cover w-full h-full' />
  <div>
    <h4 className='text-red-500'>{post.tag}</h4>
    <h2 className='text-[23px] font-bold mt-5'>{post.title}</h2>
    <h4 className='line-clamp-6 text-gray-500 mt-s'>{post.desc}</h4>
    <div className='mt-5 flex items-center'>
      <img src={bloglogo} alt="bloglogo " className='w-[50px] rounded-full' />
     <div className='ml-2'>
        <h3 className='font-bold'>vk-Blogs </h3>
        <h3 className='text-gray-500'>july-2023</h3>
      </div>
       </div>
       </div>

   
      

    </div>
  )
}

export default IntroPost
