import React from 'react'
import Pagination from '../pagination/Pagination'
import '@/styles/cardlist.scss'
import Card from '../card/Card'

function CardList() {
  return (
    <div className='cardlist'>
      <div className='cardlist_title'>Recent Posts</div>
      <div className='cardlist_cards'>
      <Card title="Fashion on Dress" category="Fashion"/>
      <Card title="Coding on python" category="coding"/>
      <Card title="Travelling to Goa" category="Travel"/>
      <Card title="Style on architecture" category="Style"/>
      <Card title="Fashion on car" category="Fashion"/>
      <Card title="Delicious Food" category="Food"/>
      <Card title="Traditional Culture" category="Culture"/>
      <Pagination/>
      </div>
    </div>
  )
}

export default CardList
