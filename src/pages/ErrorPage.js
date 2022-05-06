import React from 'react'
import errorimage from "../assets/pngegg1.png"
const ErrorPage = () => {
  return (
    <div className='error_page'>
      <h1 >404</h1>
      <div className='error_img'>
      <img src={errorimage} alt="" />

      </div>
      <p>Page Not Found</p>
    
    </div>
  )
}

export default ErrorPage