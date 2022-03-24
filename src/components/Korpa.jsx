import React, { useState } from 'react'
 
import ProizvodUKorpi from './ProizvodUKorpi'

function Korpa({uKorpi,ukupnaCena,dodajUKorpu, izbaciIzKorpe}) {
  
  return (
    <div>
        {ukupnaCena==0 ? 
            <>
                <h3>Niste nista kupili, korpa je prazna</h3>
            </>
        :
            <>
              {uKorpi .map((p)=>(  <ProizvodUKorpi proizvod={p} key={p.id} dodajUKorpu={dodajUKorpu} izbaciIzKorpe={izbaciIzKorpe} ></ProizvodUKorpi>  ))}
              <p>Ukupno: {ukupnaCena}</p>
            </>
    
        }
         
                  
             


    
        
    </div>
  )
}

export default Korpa