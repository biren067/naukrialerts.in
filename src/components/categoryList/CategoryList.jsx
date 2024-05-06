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
            <Image className={'categorylist_content_items_item_image'} src={'/fashion.png'} alt={'Image'} width={30} height={30}/>
            <span className={`categorylist_content_items_item_text`}>fashion</span>
          </div>
          <div className='categorylist_content_items_item category_food'>
            <Image className={'categorylist_content_items_item_image'} src={'/style.png'} alt={'Image'} width={30} height={30}/>
            <span className={`categorylist_content_items_item_text`}>food</span>
          </div>
          <div className='categorylist_content_items_item category_style'>
            <Image className={'categorylist_content_items_item_image'} src={'/travel.png'} alt={'Image'} width={30} height={30}/>
            <span className={`categorylist_content_items_item_text`}>style</span>
          </div>
          <div className='categorylist_content_items_item category_coding'>
            <Image className={'categorylist_content_items_item_image'} src={'/food.png'} alt={'Image'} width={30} height={30}/>
            <span className={`categorylist_content_items_item_text`}>Coding</span>
          </div>
          <div className='categorylist_content_items_item category_culture'>
            <Image className={`categorylist_content_items_item_image`} src={'/culture.png'} alt={'Image'} width={30} height={30}/>
            <span className={`categorylist_content_items_item_text`}>culture</span>
          </div>
          <div className='categorylist_content_items_item category_travel'>
          <Image className={'categorylist_content_items_item_image'} src={'/fashion.png'} alt={'Image'} width={30} height={30}/>
            <span className={`categorylist_content_items_item_text`}>Travel</span>
          </div>
          
        </div>
        
        
      </div>
    </div>
  )
}

export default CategoryList
