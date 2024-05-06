import React from 'react'
import CardList from '@/components/cartList/CardList';

import PopularMenu from '@/components/popularMenu/PopularMenu';
import '@/styles/cardcontainer.scss';

function CardContainer() {
  return (
    <div className='cardcontainer'>
      <CardList/>
      <PopularMenu />
    </div>
  )
}

export default CardContainer
