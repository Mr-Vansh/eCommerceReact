import React from 'react'
import Products from './Products'

function Home() {
  return (
    <div className='hero'>
      <div className="card text-bg-dark border-0 rounded-0 mb-5">
        <img src="/assets/img1.jpg" className="card-img" alt="Background Image" height={546}  />
          <div className="card-img-overlay d-flex flex-column justify-content-center mx-5">
            <h5 className="card-title display-3 fw-bolder">NEW SEASON ARRIVALS</h5>
            <p className="card-text lead fs-3">CHECK OUT ALL THE TRENDS</p>
          </div>
      </div>

      <Products />

    </div>
  )
}

export default Home