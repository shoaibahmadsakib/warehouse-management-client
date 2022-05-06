import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
     
      <div className="copyright">
        <h3>Vehicles House</h3>
        <p>
          Copyright <span><i className="far fa-copyright"></i></span> 2020
          Vehicles House All rights reserved
        </p>
        <div className="icon">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-github"></i>
        </div>
      </div>
    </footer>
  )
}

export default Footer