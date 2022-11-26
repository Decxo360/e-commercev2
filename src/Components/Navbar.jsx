import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    const [name,setName]=useState('invitado')
    const [isLogged, setLogged] = useState(false)

  return (
    <div className='w-[100%] h-[100px] flex flex-row justify-center items-center'>
        <div className='w-[33%] flex justify-center'>
            <button className='flex justify-center items-center w-[100px] h-[50px] rounded-md bg-transparent hover:bg-zinc-200 hover:border hover:border-blue-900'><img width={40} src="https://cdn-icons-png.flaticon.com/512/4175/4175270.png"alt="carrito"/></button>
        </div>
        <div className='w-[33%] flex justify-between'>
            <div className='w-[100%] flex justify-between'>
                <Link className='text-[20px] hover:text-amber-600' to={''}>Productos</Link>
                <Link className='text-[20px] hover:text-amber-600' to={''}>Ofertas</Link>
                <Link className='text-[20px] hover:text-amber-600' to={''}>Ayuda</Link>
            </div>
            <div>
                {/* TODO Buscador */}
            </div>
        </div>
        <div className='w-[33%] flex justify-around items-center'>
            <h1 className='text-[20px]'> Bienvenido <span className='text-blue-900'>{name}!</span></h1>
            {
                isLogged
                 ? <button className='pl-[3px] pr-[3px] w-[auto] h-[50px] rounded-md bg-red-900 text-white hover:bg-red-600 focus:outline focus:outline-sky-50'>Cerrar Sesion</button>
                 : <button className='pl-[3px] pr-[3px] w-[auto] h-[50px] rounded-md bg-blue-900 text-white hover:bg-blue-600 focus:outline focus:outline-sky-50'>Iniciar Sesion</button>
            }
        </div>
    </div>
  )
}
