'use client'
import React from 'react'
// import Image from 'next/image';
import '@/styles/navbar.scss';
import Link from 'next/link';
// import { GrYoutube } from "react-icons/gr";
import { useSelector } from 'react-redux';
import AuthLinks from '../authLinks/authLinks';
import ThemeToggle from '../themeToggle/ThemeToggle';

function Navbar() {
  // const [isAuthenticated,setIsAuthenticated] = useState(true )
  const users =useSelector(state=>state.users)
  console.log("**************users:",users)
  return (
    <>
      <div className='navbar'>
        {/* <div className='navbar_social'>
        <GrYoutube className='navbar_social_youtube'/>
        <Image src={'/facebook.png'} alt="Facebook" width={24} height={24}/>
        <Image src={'/instagram.png'} alt="instagram" width={24} height={24}/>
        </div> */}
        <div className='navbar_logo'>
          NaukriAlerts
        </div>
        <div className='navbar_links'>
          <ThemeToggle/>
          <Link href="/">Home</Link>
          <Link href="/results">Results</Link>
          <Link href="/admitcard">Admit Card</Link>
          <Link href="/answerkey">Answer Key</Link>
          <Link href="/syllabus">Syllabus</Link>
          {/* <Link href="/material">Materials</Link> */}
          <Link href="/testportal">Test Portal</Link>
          <Link href="/contacts">Contacts</Link>
          <Link href="/about">About</Link>
          {
          ((users.type === 'user' || users.type === 'admin' ) && users.isLogin)?(
            <div className="navbar_links_loglink">
              <Link href="/post">Post</Link>
              <Link href="/logout">Logout</Link>
            </div>
          ):(
            <div className="navbar_links_loglink">
            <Link href="/login">Login</Link>
            <Link href="/signup">Signup</Link>
            </div>
          )
          }
          
          
        </div>
      </div>

    </>
  )
}

export default Navbar
