import React from 'react'

export const Select = ({lista = []}) => {
  return (
    <select className='w-[100%] h-[40px] border border-sky-800 scroll '>
        {
            lista.length !== 0 ?
            lista.map(({name},index)=>(
                <option className='h-[50px]' key={index} value={name}>{name}</option>
            ))
            :
            <option value="ingrese cual es su region para poder ver esta parte">
            ingrese cual es su region para poder ver esta parte
            </option>
        }
    </select>
  )
}
