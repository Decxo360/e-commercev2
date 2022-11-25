import { chile } from '../../../helpers/Chile';
import { useState, useEffect } from 'react';
import { Select } from './elemento/Select';

export const FormAdressData = () => {

    const [region, setRegion] = useState()   
    const [comuna, setComuna] = useState([])
    
    const onChangeRegion = (event) => { 
        chile.map((region)=>{
            if(region.name === event.target.value){
                setRegion(region);
            }
        })
    }
    
    useEffect(() => {
        setComuna([])
        setComuna(region?.communes)
    }, [region])
    

    

  return (
    <form className='flex flex-col mt-10 mb-10 w-[90%] '>
        <div className='flex flex-row justify-between'>
            <div className='w-[45%]'>
                <label className='ml-5 mb-[-10px] z-10 w-[80px] bg-white' htmlFor="">Regiones</label>
                <select className='w-[100%] h-[40px] border border-sky-800 scroll ' name="Regiones" id="" onChange={onChangeRegion}>
                    {chile.map(({name,romanNumber},index)=>(
                        <option key={index} value={name}>{`${romanNumber} ${name}`}</option>
                    ))}
                </select>
            </div>
            <div className='w-[45%]'>
                <label className='ml-5 mb-[-10px] z-10 w-[80px] bg-white' htmlFor="">comuna</label>
                <Select lista={comuna} />
            </div>

        </div>
        <label className='ml-5 mb-[-10px] z-10 w-[45px] bg-white' htmlFor="">Calle</label>
        <input className='border h-[50px] border-sky-800 focus:outline-sky-800 placeholder:italic' placeholder='  Av.Pegaso con Zaint Seya' type="text" name="" id="" />
        <label className='ml-5 mb-[-10px] z-10 w-[70px] bg-white'  htmlFor="">Numero</label>
        <input className='border h-[50px] border-sky-800 focus:outline-sky-800 placeholder:italic' placeholder='  185B' type="text" />
        <label className='ml-5 mb-[-10px] z-10 w-[130px] bg-white' htmlFor="">Tipo de vivienda</label>
        <input className='border h-[50px] border-sky-800 focus:outline-sky-800 placeholder:italic' placeholder='  Casa' type="text" name="" id="" />
        <label className='ml-5 mb-[-10px] z-10 w-[90px] bg-white' htmlFor="">Descripcion</label>
        <input className='border h-[50px] border-sky-800 focus:outline-sky-800 placeholder:italic' placeholder='  Casa estilo romano con grandes pilares' type="text" />
    </form>
  )
}
