import React from 'react'
import { NavLink } from 'react-router-dom'
import Signup from './Signup'

const Login = () => {
    return (
        <div className="container col-md-4 mt-5">
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary mt-2 mx-3" style={{ width: "90%" }}>Login </button>
            </form>
            <div className="dontHaveAnAccount mt-5 d-flex justify-content-around">
                <hr style={{ width: "100px" }} />
                <span className='text-black-50'>Don't have an account</span>
                <hr style={{ width: "100px" }} />
            </div>
            <div className="signup d-flex justify-content-center">
                <NavLink to="/signup" className='btn btn-outline-success mt-4 py-2' style={{ width: "50%", border: "2px solid green" }}>Sign Up</NavLink>
            </div>
        </div>

    )
}

export default Login