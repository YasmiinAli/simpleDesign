import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
  
<div className={`text-center text-lg-start ${styles.footer} p-3 text-white `}>


    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Company name
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
      
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="" className="text-reset">Angular</a>
          </p>
          <p>
            <a href="" className="text-reset">React</a>
          </p>
          <p>
            <a href="" className="text-reset">Vue</a>
          </p>
          <p>
            <a href="" className="text-reset">Laravel</a>
          </p>
        </div>


        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
      
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="" className="text-reset">Help</a>
          </p>
        </div>

      </div>
      
    </div>
    
</div>
  <div className={` ${styles.copyright}`} >
     <p className='m-0 text-center p-5'>Copyright © My Website 2023</p>
  </div>
    </>
  )
}
