import React from 'react'
import Proizvod from './Proizvod'

function Korpa({uKorpi}) {
  return (
    <div>
        
         
                    {uKorpi .map((p)=>(  <Proizvod proizvod={p} key={p.id}  ></Proizvod>  ))}
             




    </div>
  )
}

export default Korpa