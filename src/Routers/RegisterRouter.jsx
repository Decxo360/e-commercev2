import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {FormAdressData,FormUserData} from '../components/auth/forms/index'

export const RegisterRouter = () => {
  return (
    <Routes>
        <Route path='Form&page=1' element={<FormUserData/>}/>
        <Route path='Form&page=2' element={<FormAdressData/>}/>
    </Routes>

  )
}
