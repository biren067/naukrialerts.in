import React from 'react'
import '@/styles/categorylist.scss'
import {states_union_territories} from '@/data/staticdata'
import {categories} from '@/data/staticdata'
import '@/styles/filtersarea.scss'
import { FaSearch } from "react-icons/fa";
// import Image from 'next/image'
function FilterArea() {
  return (
    <div className='filter'>

      <select name='state_ut' className='filter_state_ut'>
      {states_union_territories && states_union_territories.map(item => (<option className='sidebar_item'>{item}</option>))}
      </select>
      
      <select name='state_ut' className='filter_categories'>
      {categories && categories.map(item => (<option className='sidebar_item'>{item}</option>))}
      </select>

      <div>
        <div className='filter_search'>
        <FaSearch className='filter_search_icon'/>
        <input type='text' className='filter_search_input' placeholder='whate are you looking for...'/>
        </div>
      </div>

    </div>
  )
}

export default FilterArea
