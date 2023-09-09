import React from 'react'

export default function Contact() {
  return (
    <>
 <div className="container mt-4 my-4">
  <h2 className='text-center'>CONTACT SECTION</h2>
        <div className="form-group my-4">
    <input type="text" className="form-control"  placeholder="Enter userAge"/>
  </div>  
        <div className="form-group my-4">
    <input type="text" className="form-control"  placeholder="Enter userName"/>
  </div> 
  <div className="form-group my-4">
    <input type="email" className="form-control"   placeholder="Enter userEmail"/>
  </div>
        <div className="form-group my-4">
    <input type="password" className="form-control"  placeholder="Enter userPassword"/>
  </div> 

  <button type="submit" className="btn btn-info text-white">send message</button>

 </div>
    </>
  )
}
