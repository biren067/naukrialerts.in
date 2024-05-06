"use client"
import React from 'react'
import '@/styles/themetoggle.scss'
import { MdDarkMode } from "react-icons/md";
import { PiSunFill } from "react-icons/pi";
import { useSelector,useDispatch } from 'react-redux';
import { toggle } from "@/redux/reducer/themeSlice";

function ThemeToggle() {
  const dispatch = useDispatch()
  const currentColor = useSelector(state=>state.theme.color)
  // console.log("currentcolor:",currentColor)
  // const handleLight=()=>{
  //   dispatch(toggle({color:'light'}))
  // }
  const handleDark=()=>{
    dispatch(toggle({color:'dark'}))
  }
  return (
    <div className='theme'>
      <span onClick={()=>dispatch(toggle({color:'light'}))}> <PiSunFill className='theme_light' /></span>
      {/* <span onClick={handleLight}> <PiSunFill className='theme_light' /></span> */}
      <div className='theme_ball'></div>
      <span onClick={handleDark}> <MdDarkMode className='theme_dark' /></span>
    </div>
  )
}

export default ThemeToggle
    