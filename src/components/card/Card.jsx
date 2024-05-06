import React from 'react'
import Image from 'next/image'
import '@/styles/card.scss'
import Link from 'next/link'

function Card({category, title}) {
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
            <Link href="/blog/[title]" as={`${title.toLowerCase().replace(/\s+/g, '-')}`}>
              <button className="card_info_button">
              Read More
              </button>
            </Link>

        </div>
    </div>
  )
}

export default Card
