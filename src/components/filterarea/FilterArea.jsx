"use client"
import React,{useState,useEffect} from 'react'
import '@/styles/categorylist.scss'
import {states_union_territories} from '@/data/staticdata'
import {categories} from '@/data/staticdata'
import axios from 'axios'
import '@/styles/filtersarea.scss'
import { FaSearch } from "react-icons/fa";
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { loadPost } from '@/redux/reducer/jobPostSlice'
// import Image from 'next/image'
function FilterArea({state,category,pagesize,pagenumber}) {
  const [stateValue,setStateValue]=useState('')
  const [categoryValue,setCategoryValue]=useState('')
  const url = `http://localhost:8000/api/getstateandcategorypaginations?state=${stateValue}&categories=${categoryValue}&pagesize=${pagesize}&pagenumber=${pagenumber}`
  const [urlValue,setUrlValue]=useState(url)
  const dispatch = useDispatch()
  const items  = useSelector(state=>state.jobpost)

  console.log("Initial URL FilterArea::",url)
  
  const fetchJob = (url)=>{
    axios.get(url)
    .then(response => {
      console.log('State Filter works', response);
      if (response.status === 200) {
        console.log("****** dispatch call started")
        dispatch(loadPost({jobList:response.data}))
        console.log("****** dispatch called ended")
      } else {
        console.log("************", response.data, "::::", response.data.message)
        dispatch(loadPost({jobList:[]}))
        // setJobInfo(null); // Update jobInfo to null if status is not 200
      
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      // setJobInfo(null); // Update jobInfo to null in case of an error
    });

  }
  const handleStateFilter = (e) => {
    const localState = e.target.value
    console.log("***** event::", localState)
    setStateValue(localState)
    const localCategory = document.getElementsByName('category')[0].value
    setCategoryValue(localCategory)
    // console.log("***** event::", state,cat)
    setUrlValue(`http://localhost:8000/api/getstateandcategorypaginations?state=${localState}&categories=${localCategory}&pagesize=${pagesize}&pagenumber=${pagenumber}`)
    // fetchJob(urlValue)
  }

  const handleCategoryFilter = (e) => {
    const localCategory = e.target.value
    const localState = document.getElementsByName('state_ut')[0].value
    setStateValue(localState)
    setCategoryValue(localCategory)
    setUrlValue(`http://localhost:8000/api/getstateandcategorypaginations?state=${localState}&categories=${localCategory}&pagesize=${pagesize}&pagenumber=${pagenumber}`) 
    // const url = `http://localhost:8000/api/getstateandcategorypaginations?state=${stateValue}&categories=${categoryValue}&pagesize=${pagesize}&pagenumber=${pagenumber}`
    // console.log("****** handleCategoryfilter", "state Is",stateValue, "cotegory is ",categoryValue)
    // fetchJob(urlValue)
  }


  // useEffect(() => {
  //   const url = `http://localhost:8000/api/getstateandcategorypaginations?state=${state}&categories${category}&pagesize=${pagesize}&pagenuber=${pagenumber}`
  //   console.log("****** onPage Load",url)
  //   fetchJob(url)
  // },[])
  useEffect(() => {
    // const url = `http://localhost:8000/api/getstateandcategorypaginations?state=${stateValue}&categories${categoryValue}&pagesize=${pagesize}&pagenuber=${pagenumber}`
    // console.log("****** onPage Load",url)
    console.log("******useEffect called........")
    fetchJob(urlValue)
  },[urlValue,stateValue,categoryValue])

  return (
    <div className='filter'>
      {/* {JSON.stringify(items)} */}
      <div className='filter_basic'>
        <div className='filter_basic_state'>
          <div className='filter_basic_state_label'>State</div>
          <select name='state_ut' className='filter_state_ut' onChange={handleStateFilter}>
          {states_union_territories && states_union_territories.map(item => (<option value={item.toLowerCase()} className='sidebar_item'>{item.toUpperCase()}</option>))}
          </select>
        </div>
        <div className='filter_basic_category'>
          <div className='filter_basic_category_label'>Category</div>
          <select name='category' className='filter_categories' onChange={handleCategoryFilter}>
          {categories && categories.map(item => (<option className='sidebar_item' value={item.toLowerCase()}>{item.toUpperCase()}</option>))}
          </select>
        </div>
        {/* <div className='filter_basic_education'>
          <div className='filter_basic_education_label'>education</div>
          <select name='education' className='filter_education' onChange={handleEducationFilter}>
          {categories && categories.map(item => (<option className='sidebar_item' value={item.toLowerCase()}>{item.toUpperCase()}</option>))}
          </select>
        </div> */}
        {/* <div className='filter_basic_age'>
          <div className='filter_basic_age_label'>age</div>
          <select name='age' className='filter_age' onChange={handleAgeFilter}>
          {categories && categories.map(item => (<option className='sidebar_item' value={item.toLowerCase()}>{item.toUpperCase()}</option>))}
          </select>
        </div> */}
      </div>

    </div>
  )
}

export default FilterArea
