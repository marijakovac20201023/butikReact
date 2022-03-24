import React, { useState } from 'react'
import Proizvod from './Proizvod'
import './Proizvod.css';
const Pocetna = ({proizvodi,dodajUKorpu}) =>{ 
  const [sort,setSort] = useState(true);
  function sortAsc(){
       setSort(true);
  }
  function sortDesc(){
    setSort(false);
}
   return (
    <div className='ponuda'>
        <div className="buttons">
        <button className="sortbtn btn" onClick={sortAsc}>Sortiraj rastuće</button>
        <button className="sortbtn btn" onClick={sortDesc}>Sortiraj opadajuće</button>
      </div>


      
        {sort==true ?  
            <>
                    {proizvodi
                    .sort((a,b) => a.cena <  b.cena ? -1: 1)
                    .map((p)=>(
                        <Proizvod proizvod={p} key={p.id} dodajUKorpu={dodajUKorpu}></Proizvod>
                 ))}
            </>
        
        : 
        <>
              {proizvodi
                .sort((a,b) => a.cena <  b.cena ? 1: -1)
                .map((p)=>(
                    <Proizvod proizvod={p} key={p.id} dodajUKorpu={dodajUKorpu}></Proizvod>
            ))}
        </>
        
        
        }

        {proizvodi.map((p)=>(
                <Proizvod proizvod={p}  key={p.id} ></Proizvod>
        ))}



    </div>
  )
}

export default Pocetna