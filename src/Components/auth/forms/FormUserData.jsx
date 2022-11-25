import React from 'react'

export const FormUserData = () => {
  return (
    <form className='flex flex-col w-[80%] justify-around mt-10 mb-10'>
        <label className='ml-5 mb-[-10px] z-10 w-[80px] bg-white' htmlFor="">Nombre</label>
        <input className='border h-[50px] border-sky-800 focus:outline-sky-800 placeholder:italic' type="text" required/>
        <label className='ml-5 mb-[-10px] z-10 w-[80px] bg-white ' htmlFor="">Apellidos</label>
        <input className='border h-[50px] border-sky-800 focus:outline-sky-800 placeholder:italic' type="text" required/>
        <label className='ml-5 mb-[-10px] z-10 w-[30px] bg-white ' htmlFor="">rut</label>
        <input className='border h-[50px] border-sky-800 focus:outline-sky-800 placeholder:italic' type="text" required/>
        <label className='ml-5 mb-[-10px] z-10 w-[150px] bg-white ' htmlFor="">Numero de telefono</label>
        <input className='border h-[50px] border-sky-800 focus:outline-sky-800 placeholder:italic' type="text" required/>
        <label className='ml-5 mb-[-10px] z-10 w-[50px] bg-white ' htmlFor="">correo</label>
        <input className='border h-[50px] border-sky-800 focus:outline-sky-800 placeholder:italic' type="text" required/>
        <label className='ml-5 mb-[-10px] z-10 w-[80px] bg-white ' htmlFor="">contraseña</label>
        <input className='border h-[50px] border-sky-800 focus:outline-sky-800 placeholder:italic' type="text" required/>
        <label className='ml-5 mb-[-10px] z-10 w-[140px] bg-white ' htmlFor="">repita contraseña</label>
        <input className='border h-[50px] border-sky-800 focus:outline-sky-800 placeholder:italic' type="text" required/>
    </form>
  )
}
