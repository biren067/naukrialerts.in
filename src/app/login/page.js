"use client"
import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Logout,Login } from '@/redux/reducer/usersSlice'
function page() {
    const [isAuthenticated,setIsAuthenticated] = useState(false)
    const user = useSelector(state=>state.users)
    const dispatch = useDispatch()
    const handeLogin = () => {
      setIsAuthenticated(true)
      dispatch(Login({type:'user',name:'biren',isLogin:true}))
    }
    const handeLogout = () => {
      setIsAuthenticated(false)
      dispatch(Logout({type:'',name:'',isLogin:false}))
    }
  return (
    <div>
      <button onClick={handeLogin}>Login</button>
      <button onClick={handeLogout}>Logout</button>
      <h2>Is user loggined ::{isAuthenticated?(<div>{'loggedin'}</div>):(<div>{'Loggout'}</div>)}</h2>
      <div>User info::{JSON.stringify(user)}</div>
    </div>
  )
}

export default page
