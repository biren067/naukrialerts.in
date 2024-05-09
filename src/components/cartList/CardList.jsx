'use client'
import React,{useState,useEffect} from 'react'
import Pagination from '../pagination/Pagination'
import '@/styles/cardlist.scss'
import Card from '../card/Card'
import axios from 'axios'

function CardList() {
  const [items, setItems]=useState()
  useEffect(()=>{
    const url=`http://localhost:8000/api/getjobinfo/`
            console.log("URL::",url)
            axios.get(url)
            .then(response => {
                console.log('get executed successful',response.data,response.status);
                if (response.status === 200){
                  setItems(response.data)
                }else{
                    console.log("************",response)
                    setItems("No Data Available")
                }
            })
  },[])
  return (
    <div className='cardlist'>
      <div className='cardlist_title'>Recent Posts</div>
      <div className='cardlist_cards'>
      {/* {JSON.stringify(items)} */}
      {items && items.map((item)=>{
        return <Card title={item.post_name} category={item.category_name} id={item.id}/>
      })}
      <Pagination/>
      </div>
    </div>
  )
}

export default CardList
