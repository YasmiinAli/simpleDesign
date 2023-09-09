import React from 'react'
import FirstCard from '../FirstCard/FirstCard'
import SecondCard from '../SecondCard/SecondCard'
import ThirdCard from '../ThirdCard/ThirdCard'
export default function Portfolio() {
  return (
    <>
    <div className="container ">
      <h2 className='text-center mt-4'>PORTFOLIO COMONENT</h2>
      {/* first row */}
      <div className="d-flex justify-content-around mt-5">
        <FirstCard className='col-lg-4 mx-auto col-md-6'/>
        <SecondCard className='col-lg-4 mx-auto col-md-6'/>
        <ThirdCard className='col-lg-4 mx-auto col-md-6'/>
      </div>
      {/* second */}
      <div className="d-flex justify-content-around mt-5">
        <FirstCard className='col-lg-4 mx-auto col-md-6'/>
        <SecondCard className='col-lg-4 mx-auto col-md-6'/>
        <ThirdCard className='col-lg-4 mx-auto col-md-6'/>
      </div>
            {/* third */}
      <div className="d-flex justify-content-around mt-5">
        <FirstCard className='col-lg-4 mx-auto col-md-6'/>
        <SecondCard className='col-lg-4 mx-auto col-md-6'/>
        <ThirdCard className='col-lg-4 mx-auto col-md-6'/>
      </div>
    </div>
    </>
  )
}
