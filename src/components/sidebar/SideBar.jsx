'use client'
import React from 'react'
import {states_union_territories} from '@/data/staticdata'
import '@/styles/sidebar.scss'
function SideBar() {

  return (
    <div className='sidebar'>
      {states_union_territories.map(item => (<div className='sidebar_item'>{item}</div>))}
      
    </div>
  )
}

export default SideBar
