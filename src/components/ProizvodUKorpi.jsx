import React from 'react'
import {BsPlusLg, BsDashLg} from "react-icons/bs"
function ProizvodUKorpi({proizvod,dodajUKorpu, izbaciIzKorpe}) {
  return (
    <div>
        <h3>Naziv: {proizvod.naziv}</h3>
        <p>CENA:   {proizvod.cena} </p>
        <p>KOLICINA:   {proizvod.kolicina} </p>

        <p>UKUPNO:   {proizvod.kolicina*proizvod.cena}  </p>
        <button
                  className="btn"
                   onClick={()=> dodajUKorpu(proizvod.id)}
                >
                <BsPlusLg />
              </button>
              <button 
                className="btn" 
                onClick={()=> izbaciIzKorpe(proizvod.id)}
               >
                <BsDashLg />
              </button>

    </div>
  )
}

export default ProizvodUKorpi