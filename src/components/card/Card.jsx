'use client'
import React,{useEffect,useState} from 'react'
import Image from 'next/image'
import '@/styles/card.scss'
import Link from 'next/link'
import axios from 'axios'


function Card({category, title,id}) {
  const [formattedTitle,setFormattedTitle]=useState()
  const [postInfo,setPostInfo]=useState()
  useEffect(()=>{
    const formattedTitle = title.replace(/[^\w\s-]/g, '');
    const finalTitle = formattedTitle.toLowerCase().replace(/\s+/g, '-');
    setFormattedTitle(finalTitle);
  },[title,formattedTitle])
  useEffect(()=>{   
    const url = `http://localhost:8000/api/getjobdetailspk/${id}` 
    axios.get(url)
    .then(response => {
        console.log('get successful');
        setPostInfo(response.data); // Access response data
    })
    .catch(error => {
        console.error('Failed to post data:', error);
        setPostInfo("not Found")
    });
  },[])
  
  
  return (
    <div >
      {postInfo && (<span className='card'>
      {postInfo && postInfo.category_name=== 'banking'?(
        <Image className="card_image" src={'/ibps.webp'} alt={'Image'} width={100} height={100}/>
      ):(postInfo.category_name=== 'railway')?(
        <Image className="card_image" src={'/railway.webp'} alt={'Image'} width={100} height={100}/>
      ):(postInfo.category_name=== 'defence')?(
        <Image className="card_image" src={'/defence.webp'} alt={'Image'} width={100} height={100}/>
      ):(<Image className="card_image" src={'/requirement.webp'} alt={'Image'} width={100} height={100}/>)
    }
        {/* {JSON.stringify(postInfo)} */}
        <div className="card_info">

            <div className="card_info_title">{title}</div>
            <div className="card_info_top">
                <div className="card_info_top_date">Last Date to apply: </div>
                <div className="card_info_top_category">{postInfo.app_last_date}</div>
                <div className="card_info_top_category">{postInfo.id}{postInfo.state_ut}-{postInfo.category_name}</div>
            </div>
            <div className="card_info_description">{postInfo.short_desc.length > 200 ? (
              <>
                {postInfo.short_desc.slice(0, 200)}...
              </>
            ) : (
              <>
                {postInfo.short_desc}
              </>
            )}
        </div>

            <Link href={`/blog/${formattedTitle}`}>
              <button className="card_info_button">
              Read More
              </button>
            </Link>

        </div>
        </span>) }
    </div>
  )
}

export default Card
