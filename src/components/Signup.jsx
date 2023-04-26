import React from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="container col-md-4 mt-5">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Mobile Number</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Gender</label>
          <select class="form-select" aria-label="Default select example">
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-outline-primary mt-3 mx-3" style={{ width: "90%" }}>Sign Up </button>
      </form>
      <div className="dontHaveAnAccount mt-5 d-flex justify-content-around">
        <hr style={{ width: "100px" }} />
        <span className='text-black-50'>Already have an account</span>
        <hr style={{ width: "100px" }} />
      </div>
      <div className="login d-flex justify-content-center pb-5">
        <NavLink to="/login" className='btn btn-success mt-4 py-2' style={{ width: "50%", border: "2px solid green" }}>Login</NavLink>
      </div>
    </div>
  )
}

export default Signup