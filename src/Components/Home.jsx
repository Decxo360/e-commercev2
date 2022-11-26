import React from 'react'
import { Navbar } from './Navbar'
import { ProductComponent } from './ProductComponent'


export const Home = () => {
  return (
    <div className='flex flex-col w-[100%]'>
      <Navbar/>
      <div className='w-[100%] flex flex-row justify-between'>
        <div className='w-[33%]'></div>
        <ProductComponent/>
        <ProductComponent/>
        <div className='w-[33%]'></div>
      </div>
    </div>
  )
}
