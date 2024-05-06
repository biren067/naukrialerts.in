import React from 'react'
import '@/styles/popularmenu.scss';
import PopularContent from './popularContent'
import Link from 'next/link';

function Menu() {
  return (
    <div className='popularmenu'>
      <div className='popularmenu_top'>What's hot</div>
      <div className='_popularmenu_mostpopular'>
        <div className='popularmenu_mostpopular_title'>Most Popular</div>
        <div className='popularmenu_mostpopular_content'>
          <Link href={'/'}><PopularContent/></Link>
          <Link href={'/'}><PopularContent/></Link>
          <Link href={'/'}><PopularContent/></Link>
          <Link href={'/'}><PopularContent/></Link>
          <Link href={'/'}><PopularContent/></Link>
          
        </div>
      </div>
    </div>
  )
}

export default Menu
