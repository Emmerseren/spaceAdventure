import React from 'react'
import { NavLink } from 'react-router-dom'
import Logout from '../../components/Logout'

const AdminNavbar = () => {
  return (
    <nav>
    <ul>
      <li><NavLink to="/admin" end>ADMIN home</NavLink></li>
      <li><NavLink to="tours">Tours</NavLink></li>
      <li><NavLink to="admintourscreate"> Create Tours</NavLink></li>
      <li><NavLink to="/" end>Public</NavLink></li>
      <Logout/>
 
    </ul>
  </nav>
  )
}

export default AdminNavbar