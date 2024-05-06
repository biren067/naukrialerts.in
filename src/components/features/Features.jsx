import React from 'react'
import '@/styles/features.scss'
// import teaser from './public/p1.png'
import Image from 'next/image'
function Features() {
  return (
    <div className="features">
      <div className='features_title'> AI won't going to take your job. The person who uses it surely can.
      <div> So, Key point is To be that person
      </div>
      </div>
      <div className='features_content'>
        
          <Image className='features_content_image'src={'/p1.jpeg'} alt={'teaser'} width={600} height={600}/>
        
        <div className='features_content_text'>
          <div className='features_content_text_title'>AI empowers those who master it. Proficiency unlocks innovation, emphasizing augmentation, not replacement, of human jobs..</div>
          <div className='features_content_text_desc'>In today's rapidly evolving technological landscape, the integration of artificial intelligence (AI) has become increasingly prevalent across various industries. While there may be concerns about AI replacing human jobs, the true essence of its power lies in its ability to augment human capabilities rather than supplant them entirely. The statement underscores the importance of individuals taking initiative to become proficient in AI utilization, as they are the ones who can truly harness its potential and drive meaningful change.</div>
          <button className='features_content_text_button'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Features
