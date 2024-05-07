import React from 'react'
import Pagination from '../pagination/Pagination'
import '@/styles/cardlist.scss'
import Card from '../card/Card'

function CardList() {
  return (
    <div className='cardlist'>
      <div className='cardlist_title'>Recent Posts</div>
      <div className='cardlist_cards'>
      <Card title="Indian Navy Agniveer (MR) 02/2024" category="Central"/>
      <Card title="Banking IBPS" category="Banking"/>
      <Card title="RRB Jharkhand" category="Banking"/>
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
