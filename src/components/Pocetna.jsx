import React from 'react'
import Proizvod from './Proizvod'
import './Proizvod.css';
const Pocetna = ({proizvodi}) =>{ 
   return (
    <div className='ponuda'>

        {proizvodi.map((p)=>(
                <Proizvod proizvod={p}></Proizvod>
        ))}



    </div>
  )
}

export default Pocetna