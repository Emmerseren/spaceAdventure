import React from 'react'
import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AdminFooter from './AdminFooter'
import AdminHeader from './AdminHeader'
import AdminNavbar from './AdminNavbar'
import { LoginContext } from '../../context/LoginContext'
const AdminLayout = () => {

  const {user} = useContext(LoginContext)
  
  console.log(user)

  if(!user) {
    return <Navigate to="/login" replace/>
  }
  return (
  <>
    <AdminHeader/>
    <AdminNavbar/>
    <Outlet/>
    <AdminFooter/>
  </>
  )
}

export default AdminLayout