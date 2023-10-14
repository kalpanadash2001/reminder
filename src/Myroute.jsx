import React from 'react'
import { Route,Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import RemHome from './Pages/RemHome'
import Logout from './Pages/Logout'
import RemSet from './Pages/RemSet'
import RemModify from './Pages/RemModify'
import RemDisable from './Pages/RemDisable'
import RemDel from './Pages/RemDel'
import RemEnable from './Pages/RemEnable'
import RemView from './Pages/RemView'
const Myroute = () => {
  return (
    <>
    
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<SignUp/>}></Route>
    <Route path='/userwelcome' element={<RemHome/>}></Route>
    <Route path='/logout' element={<Logout/>}></Route>
    <Route path='/setreminder' element={<RemSet/>}></Route>
    <Route path='/modifyreminder' element={<RemModify/>}></Route>
    <Route path='/disablereminder' element={<RemDisable/>}></Route>
    <Route path='/deletereminder' element={<RemDel/>}></Route>
    <Route path='/enablereminder' element={<RemEnable/>}></Route>
    <Route path='/viewreminder' element={<RemView/>}></Route>
</Routes>
    </>
  )
}

export default Myroute