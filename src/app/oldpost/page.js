"use client"
// import dynamic from 'next/dynamic';
// import AddPostButton from '@/components/post/AddPostButton';
import React,{useState} from 'react';
import '@/styles/post.scss'
// import ReactQuill from 'react-quill'
// const DynamicReactQuill = dynamic(() => import('react-quill'), { ssr: false });
// import "react-quill/dist/quill.bubble.css"

function page() {
    // const [value, setValue] = useState("")
  return (
    <div className="post">
      Dummy Post
        {/* <AddPostButton/> */}
        {/* <ReactQuill theme="bubble" className={'post_reactquill'} onChange={setValue} value={value} placeholder='Tell your story...'/> */}
        {/* <DynamicReactQuill theme="bubble" className={'post_reactquill'} onChange={setValue} value={value} placeholder='Tell your story...'/>  */}
    </div>
  ) 
}

export default page
