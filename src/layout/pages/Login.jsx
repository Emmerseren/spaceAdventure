import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { LoginContext } from '../../context/LoginContext'
const Login = () => {

  
  const {signIn, user} = useContext(LoginContext)
  
  const [userName, setUserName] = useState()
  const [password, setPassword] = useState()
  const [messages, setMessages] = useState()
  console.log(password)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    signIn(userName, password)
    
  }
  
  if(user) {
    return <Navigate to="/admin" replace/>
  }
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="inpBruger">Brugernavn</label>
            <input type="text" onChange={(e) => setUserName(e.target.value)} id='inpBruger' />
            <label htmlFor='inpPassword'> Password</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} id='inpPassword' />
            <button type='submit' >Login</button>
        </form>
    </div>
  )
}

export default Login