'use client'

import React,{useState} from 'react'
import Link from 'next/link'
import '@/styles/authlinks.scss'

function AuthLinks() {
  const [isAuthenticated,setIsAuthenticated] = useState(false)
  return (
    <div className='authlinks'>
    {
    isAuthenticated?(
      <div className='authlinks_logoutarea'>
        
      <Link href="/logout">Logout{isAuthenticated}</Link>
      </div>
    ):(
      <div className='authlinks_loggedarea'>
      <span className="authlinks_loggedarea_login">Login</span>
      </div>
    )
    }
    
    </div>
  )
}

export default AuthLinks
