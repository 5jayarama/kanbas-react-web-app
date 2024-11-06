import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as db from "../Database";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Signin() {
  const [credentials, setCredentials] = useState<{ username?: string; password?: string }>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signin = () => {
    // Search for a user that matches the entered credentials
    const user = db.users.find(
      (u: any) =>
        u.username === credentials.username && u.password === credentials.password
    );

    if (!user) return; // Ignore if no match

    // Dispatch the found user to the Redux store
    dispatch(setCurrentUser(user));

    // Navigate to the Dashboard
    navigate("/Kanbas/Dashboard");
  };

  return (
    <div className="container d-flex justify-content-center align-items-start vh-100 mt-3">
      <div
        id="wd-signin-screen"
        className="card p-4 shadow-sm w-100"
        style={{ maxWidth: "500px" }}
      >
        <h3 className="text-center mb-4">Sign In</h3>
        
        <input
          placeholder="username"
          className="wd-username form-control mb-2"
          value={credentials.username || ""}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        />
        
        <input
          placeholder="password"
          type="password"
          className="wd-password form-control mb-2"
          value={credentials.password || ""}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        
        <button
          onClick={signin}
          className="btn btn-primary w-100 mb-2"
          id="wd-signin-btn"
        >
          Sign in
        </button>
        
        <Link to="/Kanbas/Account/Signup" className="text-center d-block" id="wd-signup-link">
          Sign up
        </Link>
      </div>
    </div>
  );
}
