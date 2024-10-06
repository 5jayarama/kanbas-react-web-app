import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Signin() {
  return (
    <div className="container d-flex justify-content-center align-items-start vh-100 mt-3">
      <div 
        id="wd-signin-screen" 
        className="card p-4 shadow-sm w-100" 
        style={{ maxWidth: "500px" }}
      >
        <h3 className="text-center mb-4">Sign In</h3>
        <input placeholder="username" className="wd-username form-control mb-2" />
        <input placeholder="password" type="password" className="wd-password form-control mb-2" />
        <Link 
          to="/Kanbas/Account/Profile" 
          className="btn btn-primary w-100 mb-2"
        >
          Sign in
        </Link>
        <Link 
          to="/Kanbas/Account/Signup" 
          className="text-center d-block"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
