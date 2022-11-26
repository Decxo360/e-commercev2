import React from 'react'

export const ProductComponent = () => {
  return (
    <div className='flex flex-col w-[350px] shadow-lg rounded-md ml-[10px] mr-[10px]'>
        <div className='w-[350px] h-[300px] flex justify-center items-center'>
            <img className='transition ease-in-out hover:delay-150 duration-75 hover:scale-110' width={280} src="https://falabella.scene7.com/is/image/Falabella/15640155_1?wid=800&hei=800&qlt=70" alt="celular" />
        </div>
        <div className='flex flex-col justify-center items-center ml-[15px] mr-[15px]'>
            <h1 className='text-[20px] mb-[20px] '>Iphone 14X pro</h1>
            <span className='text-justify mb-[30px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eos nam aut. Non nihil voluptas delectus! Repellat dolore delectus laboriosam nam eaque architecto, dignissimos rem aliquid modi distinctio quisquam dolor.</span>
        </div>
        <div className='flex flex-row justify-around items-center mb-[10px]'>
            <button className='text-white transition ease-in-out hover:delay-150 duration-75 hover:scale-110 bg-indigo-900 w-[100px] h-[50px] rounded-md hover:bg-indigo-600'> Agregar al carrito </button>
            <button className='text-white transition ease-in-out hover:delay-150 duration-75 hover:scale-110 bg-indigo-900 w-[100px] h-[50px] rounded-md hover:bg-indigo-600'>Ver descripción</button>
        </div>
    </div>
  )
}
