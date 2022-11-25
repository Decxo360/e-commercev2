import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterRouter } from '../../Routers/RegisterRouter'



export const Register = () => {
    const [count, setCount] = useState(1)
    const navigate = useNavigate()

    const previusForm=()=>{
        if (count == 2) {
            setCount(count=>count-1)
        }
        navigate('Form&page=1',{replace:true})
    }

    const nextForm =()=>{
        if (count == 1) {
            setCount(count=>count+1)
        }
        navigate('Form&page=2',{replace:true})
    }

  return (
    <div className=' w-[100%] flex flex-col justify-center items-center pt-[50px]'>
        <div className='bg-white w-[50%] flex flex-col justify-center items-center rounded-lg shadow-lg shadow-stone-400'>
            <div className='text-center'>
                <h1 className='text-[50px]'>Registro</h1>
                <hr />
                <p className='text-gray-500 mt-[20px] ml-[40px] mr-[40px]'>Este registro nos permitira saber informacion relevante sobre ti, de acuerdo a lo necesitado, para realizar posteos de productos, incluso saber informacion para poder enviarte nuestros productos</p>
            </div>
            <RegisterRouter/>    
            <div className='flex justify-between w-[90%] mb-10'>
                <button className='w-[150px] h-[50px] rounded-xl mt-5 text-gray-50 hover:bg-blue-500 duration-150 bg-blue-900' onClick={previusForm}>
                    Anterior
                </button>
                <button className='w-[150px] h-[50px] rounded-xl mt-5 text-gray-50 hover:bg-blue-500 duration-150 bg-blue-900' onClick={nextForm}>
                    Siguiente
                </button>
            </div>
               
        </div>
    </div>
  )
}
