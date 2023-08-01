import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from '../Services/GlobalApi';
import ReactMarkdown from 'react-markdown'
import bloglogo from '../assets/bloglogo.png'



function BlogDetail() {
  const {id}=useParams()
  const [Post,setPost]=useState([])
    useEffect(()=>{
       console.log("id",id);   
       getBlogById()
    },[])

    const getBlogById=()=>{
      GlobalApi.getPostById(id).then(resp=>{
        const item=resp.data.data
          const result=
          {
            id:item.id,
            title:item.attributes.title,
            desc:item.attributes.description,
            tag:item.attributes.tag,
            coverImage:item.attributes.coverImage.data.attributes.url,
    
          }
          setPost(result)
        console.log("result",result);
      })
    }

  return (
    <div className='px-6 md:px-20 lg:px-56 mt-10'>
    <h3 className='text-red-500 text-[16px]'>{Post.tag}</h3>
    <h3 className='text-[22px] font-bold'>{Post.title}</h3>
    <div className='mt-5 flex items-center'>
      <img src={bloglogo} alt="bloglogo " className='w-[35px] rounded-full' />
     <div className='ml-2'>
        <h3 className='font-bold text-[12px]'>vk-Blogs </h3>
        <h3 className='text-gray-500 text-[10px]'>july-2023</h3>
      </div>
       </div>
    <img src={Post.coverImage} alt="coverImage" className='rounded-2xl my-5 w-full' />
    <h3 className=''>{Post.desc}</h3>
    <ReactMarkdown children={Post.desc}  escapeHtml={false}  className='leading-9'/>
    </div>
  )
}

export default BlogDetail
