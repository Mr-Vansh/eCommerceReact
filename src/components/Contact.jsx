import React from 'react'
import { NavLink } from 'react-router-dom'

const Contact = () => {
    return (
        <div className="container-fluid">
            <div className="row p-5" style={{ backgroundColor: "#e2e2e2" }}>
                <div className="col-12 text-center">
                    <h1>Contact Us</h1>
                </div>
            </div>
            <div className="row justify-content-center mt-4">
                <div className="col-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Contact number</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Email address</label>
                            <input type="password" className="form-control" />
                        </div>
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Feedback</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                    </form>
                    <NavLink to="/" className="btn btn-primary mt-4 mb-5" style={{ width: "100%" }}>Login </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Contact