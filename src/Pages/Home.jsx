import React, { useEffect, useState } from 'react'
import Search from '../Components/Search'
import IntroPost from '../Components/IntroPost'
import Blog from '../Components/Blog'
import GlobalApi from '../Services/GlobalApi'
function Home() {
 const[post,setPost]=useState([])
 const[orgPost,setOrgPost]=useState([])
  useEffect(()=>{
    getPost()
  },[])
  const getPost=()=>{
    GlobalApi.getPost.then(resp=>{
    
      const result=resp.data.data.map(item=>
   
      ({
        id:item.id,
        title:item.attributes.title,
        desc:item.attributes.description,
        tag:item.attributes.tag,
        coverImage:item.attributes.coverImage.data.attributes.url,

      }))
        
      setPost(result) 
      setOrgPost(result) 
    })
  }
  const filterPost=(tag)=>{
    if(tag=="All")
    {
      setPost(orgPost)
      return
    }
const result=orgPost.filter(item=>item.tag==tag)
setPost(result)
  }
  return (
    <>

    <Search selectedTag={(tag)=>filterPost(tag)}/>
    {post.length>0?<IntroPost post={post[0]}/>:null}
    {post.length>0?<Blog posts={post}/>:null}
   
    </>
  )
}

export default Home
