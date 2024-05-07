'use client'
import React,{useEffect,useState} from 'react'
import Image from 'next/image'
import '@/styles/card.scss'
import Link from 'next/link'


function Card({category, title}) {
  const [formattedTitle,setFormattedTitle]=useState()
  useEffect(()=>{
    const formattedTitle = title.replace(/[^\w\s-]/g, '');
    const finalTitle = formattedTitle.toLowerCase().replace(/\s+/g, '-');
    console.log("******FINAL FORMAT TITLE:", finalTitle)
    setFormattedTitle(finalTitle);
  },[title,formattedTitle])
  // function formatTitle(title) {
    // const formattedTitle = title.replace(/[^\w\s-]/g, '');
    // const finalTitle = formattedTitle.toLowerCase().replace(/\s+/g, '-');
    // console.log("******FINAL FORMAT TITLE:", finalTitle)
    // return finalTitle;
  // }
  
  // const originalTitle = "indian navyagniveer (mr) 02/2024";
  // const resultTitle = formatTitle(originalTitle);
  // console.log(resultTitle); // Output: "indian-navyagniveer-mr-02-2024"
  
  return (
    <div className='card'>
        <Image className="card_image" src={'/p1.jpeg'} alt={'Image'} width={200} height={200}/>
        <div className="card_info">
            <div className="card_info_top">
                <div className="card_info_top_date">24 Aug, 2024</div>
                <div className="card_info_top_category">{category}</div>
            </div>
            <div className="card_info_title">{title}</div>
            <div className="card_info_description">By following these steps and incorporating error handling, you should be able to diagnose and resolve the issue with downloading stock market data using yfinance. If the problem persists, please provide more details or error messages for further assistance. By following these steps and incorporating error handling, you should be able to diagnose and resolve the issue with downloading stock market data using yfinance. If the problem persists, please provide more details or error messages for further assistance.</div>
            {/* <Link href="/blog/[title]" as={`${title.replace(" ","-")}`}> */}
            {/* <Link href="/blog/[title]" as={`${title.toLowerCase().replace(/\s+/g, '-')}`}> */}
            <Link href={`/blog/${formattedTitle}`}>
              <button className="card_info_button">
              Read More
              </button>
            </Link>

        </div>
    </div>
  )
}

export default Card
