"use client"
import React,{useState} from 'react'
import '@/styles/post.scss'
import Image from 'next/image'
import Link from 'next/link'

function AddPostButton() {
  const [open,setOpen] = useState(false)
  const handeOpenButton = () => {
    setOpen(!open)
  }
  return (
    <div className='addPostButton'>
      <Image src={'/food.png'} alt="add" width={24} height={24} onClick={handeOpenButton}/>
      {open &&(      
        <div className='addPostButton_newbuttons'>
        <Image src={'/food.png'} alt="add" width={24} height={24} onClick={handeOpenButton}/>
        <Image src={'/food.png'} alt="add" width={24} height={24} onClick={handeOpenButton}/>
        <Image src={'/food.png'} alt="add" width={24} height={24} onClick={handeOpenButton}/>
        </div>
        )
      }

      
    </div>
  )
}

export default AddPostButton
