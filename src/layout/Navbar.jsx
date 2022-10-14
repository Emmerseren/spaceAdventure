import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Logout from '../components/Logout'
import { LoginContext } from '../context/LoginContext'

const Navbar = () => {
  const{user} = useContext(LoginContext)
  return (
    <nav>
      <ul>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="rumfaergen">Rumfærgen</NavLink></li>
        <li><NavLink to="ture">Ture</NavLink></li>
        <li><NavLink to="galleri">Galleri</NavLink></li>
        <li><NavLink to="sikkerhed">Sikkerhed</NavLink></li>
        <li><NavLink to="kontakt">Kontankt</NavLink></li>
        {user?
        <>
        <li><NavLink to="admin">Admin</NavLink></li>
        <Logout/>
        </>
      :  <li><NavLink to="login">Login</NavLink></li>
      }
      </ul>
    </nav>
  )
}

export default Navbar