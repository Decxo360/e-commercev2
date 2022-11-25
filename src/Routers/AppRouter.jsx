import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '../components/auth/Login'
import { Register } from '../components/auth/Register';
import { Home } from '../components/Home';

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/auth/login' element={<Login/>} />
            <Route path='/auth/register/*' element={<Register/>} />
            <Route path='/' element={<Home/>} />
        </Routes>
    </BrowserRouter>
  )
}
