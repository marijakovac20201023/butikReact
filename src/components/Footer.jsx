import React from 'react'

function Footer() {
  return (
      <div>
                <div className="footer">
                        <div className="footerItem">
                            <ul>
                            <strong>Kontaktirajte nas</strong>  
                                <li>+381 11 123 456</li>
                                <li>butik@gmail.com</li>
                            </ul>
                        </div>
                        <div className="footerItemRight" > 
                            <p>Možete nas pronaći na društvenim mrežama</p>
                            <a href="https://www.facebook.com/" className="fa fa-facebook" target="_blank"></a>
                            <a href="https://www.youtube.com/" className="fa fa-youtube" target="_blank"></a>
                            <a href="https://www.instagram.com/" className="fa fa-instagram" target="_blank"></a>
                        </div>
                

                </div>
    </div>
  )
}

export default Footer