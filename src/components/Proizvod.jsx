import React from 'react'
import './Proizvod.css';
function Proizvod() {
  return (
    <div><div className="height d-flex justify-content-center align-items-center">
    <div className="card p-3">
        <div className="d-flex justify-content-between align-items-center ">
            <div className="mt-2">
                <h4 className="text-uppercase">Ikea</h4>
                <div className="mt-5">
                    <h5 className="text-uppercase mb-0">Blanda Matt</h5>
                    <h1 className="main-heading mt-0">VASE</h1>
                     
                </div>
            </div>
            <div className="image"> <img src="https://i.imgur.com/MGorDUi.png" width="200"/> </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-2 mb-2"> <span>Available colors</span>
            <div className="colors"> <span></span> <span></span> <span></span> <span></span> </div>
        </div>
        <p>A great option weather you are at office or at home. </p> <button className="btn btn-danger">Add to cart</button>
    </div>
</div></div>
  )
}

export default Proizvod