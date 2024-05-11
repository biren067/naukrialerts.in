'use client'
import React,{useState,useEffect} from 'react'
import Pagination from '../pagination/Pagination'
import '@/styles/cardlist.scss'
import Card from '../card/Card'
import axios from 'axios'
import { useSelector } from 'react-redux'

function CardList() {
  // const [items, setItems]=useState()
  const items  = useSelector(state=>state.jobpost.jobList)
  // useEffect(()=>{
  //   const url=`http://localhost:8000/api/getjobinfo/`
  //           console.log("URL::",url)
  //           axios.get(url)
  //           .then(response => {
  //               console.log('get executed successful',response.data,response.status);
  //               if (response.status === 200){
  //                 setItems(response.data)
  //               }else{
  //                   console.log("************",response)
  //                   setItems("No Data Available")
  //               }
  //           })
  // },[])
  return (
    <div className='cardlist'>
      {/* {JSON.stringify(items)} */}
      <div className='cardlist_title'>Recent Posts</div>
      <div className='cardlist_cards'>
       {/* {items && items.map((item)=>{
        return <Card title={item.post_name} category={item.category_name} id={item.id}/>
      })} */}
      {/* <div>{JSON.stringify(items)}</div> */}
      {items.message ?
        (<div>No Data Available</div>)
        :
        (items.map((item)=>{
        return <Card title={item.post_name} category={item.category_name} id={item.id}/>
        })
      )}
    {/* {items ?(items.map((item)=>{
        return <Card title={item.post_name} category={item.category_name} id={item.id}/>
      })):(
        <div>No Data Available</div>
      ) } */}
      <Pagination/>
      </div>
    </div>
  )
}

export default CardList
