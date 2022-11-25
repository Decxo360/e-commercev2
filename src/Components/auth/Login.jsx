import React from 'react'

export const Login = () => {
  return (
    <div className='w-[100%] h-[100%] flex justify-center items-center bg-teal-400 '>
        <div className=' w-[500px] mt-[200px] flex flex-col border bg-white shadow-2xl shadow-blue-500/50 rounded-lg'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='font-mono text-[45px]'>Login</h1>
            </div>
            <p className='text-center text-neutral-500 mt-6'>Ingresa a nuestra aplicacion para poder comprar con nuestras increibles ofertas!</p>
            <div className='flex mt-[50px] mb-[50px] justify-around w-[100%]' >
                <form className='flex flex-col w-[95%]'>
                    <label className='ml-5 mb-[-10px] z-10 w-[80px] bg-white '>Username</label>
                    <input className='border h-[50px] border-sky-800 focus:outline-sky-800 placeholder:italic' type="text" placeholder=' user32' />
                    <label className='ml-5 mb-[-10px] z-10 w-[80px] bg-white mt-10' >password</label>
                    <input className='border border-sky-800 h-[50px] focus:outline-sky-800 placeholder:italic' type="text" placeholder=' 123456789'/>
                </form>
            </div>
            <div className='w-[95%] ml-3 mb-5 justify-center'>
                <h3 className='mb-5 text-center'>No has ingresado nunca a nuestro sitio nunca? <a href="" className='hover:text-amber-600'>Haz click aqui para registrarte</a></h3>
                <button className='ml-3 bg-blue-800 rounded-3xl w-[95%] h-[50px] hover:bg-blue-700 text-white focus:bg-blue-700' >Iniciar sesion</button>
            </div>
        </div>
    </div>
  )
}