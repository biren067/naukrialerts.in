import React from 'react'
import '@/styles/categorylist.scss'
import '@/styles/categoryColor.scss'
import Image from 'next/image'
function CategoryList() {
  return (
    <div className='categorylist'>
      <div className='categorylist_header'>Popular Category</div>
      <div className='categorylist_content'>
        <div className='categorylist_content_items'>
          <div className='categorylist_content_items_item category_fashion'>
            <Image className={'categorylist_content_items_item_image'} src={'/railway.webp'} alt={'Image'} width={30} height={30}/>
            <span className={`categorylist_content_items_item_text`}>Railway</span>
          </div>
          <div className='categorylist_content_items_item category_food'>
            <Image className={'categorylist_content_items_item_image'} src={'/defence.webp'} alt={'Image'} width={30} height={30}/>
            <span className={`categorylist_content_items_item_text`}>Defence</span>
          </div>
          <div className='categorylist_content_items_item category_style'>
            <Image className={'categorylist_content_items_item_image'} src={'/upsc.webp'} alt={'Image'} width={30} height={30}/>
            <span className={`categorylist_content_items_item_text`}>UPSC</span>
          </div>
          <div className='categorylist_content_items_item category_coding'>
            <Image className={'categorylist_content_items_item_image'} src={'/ibps.webp'} alt={'Image'} width={30} height={30}/>
            <span className={`categorylist_content_items_item_text`}>Banking</span>
          </div>
          <div className='categorylist_content_items_item category_culture'>
            <Image className={`categorylist_content_items_item_image`} src={'/ssc.webp'} alt={'Image'} width={30} height={30}/>
            <span className={`categorylist_content_items_item_text`}>SSC</span>
          </div>
          <div className='categorylist_content_items_item category_style'>
            <Image className={`categorylist_content_items_item_image`} src={'/finance.webp'} alt={'Image'} width={30} height={30}/>
            <span className={`categorylist_content_items_item_text`}>Finance</span>
          </div>
          <div className='categorylist_content_items_item category_travel'>
          <Image className={'categorylist_content_items_item_image'} src={'/state_psc.webp'} alt={'Image'} width={30} height={30}/>
            <span className={`categorylist_content_items_item_text`}>State PSC</span>
          </div>
          <div className='categorylist_content_items_item category_culture'>
          <Image className={'categorylist_content_items_item_image'} src={'/engineering.webp'} alt={'Image'} width={30} height={30}/>
            <span className={`categorylist_content_items_item_text`}>Engineering</span>
          </div>
          <div className='categorylist_content_items_item category_travel'>
            <Image className={'categorylist_content_items_item_image'} src={'/engineering.webp'} alt={'Image'} width={30} height={30}/>
            <span className={`categorylist_content_items_item_text`}>Teaching</span>
          </div>
          <div className='categorylist_content_items_item category_culture'>
          <Image className={'categorylist_content_items_item_image'} src={'/recruitment.webp'} alt={'Image'} width={30} height={30}/>
            <span className={`categorylist_content_items_item_text`}>Miscellenous</span>
          </div>
          
        </div>
        
        
      </div>
    </div>
  )
}

export default CategoryList
