import React from 'react'
import './Proizvod.css';
function Proizvod({proizvod,dodajUKorpu}) {
  return (
    <div className='proizvod'> 
    <div className="card p-3">
        <div className="d-flex justify-content-between align-items-center ">
            <div className="mt-2">
                <h4 className="text-uppercase">{proizvod.prodavnica}</h4>
                <div className="mt-5">
                <h1 className="main-heading mt-0">{proizvod.naziv}</h1>
                    <h5 className="text-uppercase mb-0">{proizvod.cena}</h5>
                    
                     
                </div>
            </div>
            <div className="image"> <img src={proizvod.slika} width="200"/> </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-2 mb-2"> <span>Available colors</span>
            <div className="colors"> <span></span> <span></span> <span></span> <span></span> </div>
        </div>
        <p>{proizvod.opis} </p> <button className="btn btn-danger" onClick={()=>dodajUKorpu(proizvod.id)}>Add to cart</button>
    </div>
</div> 
  )
}

export default Proizvod