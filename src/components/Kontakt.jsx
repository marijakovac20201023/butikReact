import React from 'react'
import './Kontakt.css';
function Kontakt() {
  return (
    <div>      
        <div className="cardKontakt">
    <h2>Contact Us</h2>
    <div className="row">
      <div className="col">
        <div className="form-group">
          <label>Ime</label>
          <input type="text" id="ime" required/>
        </div>
      </div>
  
      <div className="col">
        <div className="form-group">
          <label>Prezime</label>
          <input type="text" id="prezime" required/>
        </div>
      </div>
  
      <div className="col">
        <div className="form-group">
          <label>Email</label>
          <input type="email" id="email" required/>
        </div>
      </div>
  
     
  
      <div className="col">
        <div className="form-group">
          <label>Poruka</label>
          <textarea id="poruka" className='polje' required></textarea>
        </div>
      </div>
     
       
     
      <div class="col">
        <input type="submit" value="Submit" />
      </div>
    </div>
  </div>


    </div> 
  )
}

export default Kontakt