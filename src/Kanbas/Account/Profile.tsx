import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Profile() {
  return (
    <div className="container d-flex justify-content-center align-items-start vh-100 mt-3">
      <div 
        id="wd-profile-screen" 
        className="card p-4 shadow-sm w-100" 
        style={{ maxWidth: "500px" }}
      >
        <h3 className="text-center mb-4">Profile</h3>
        <input defaultValue="alice" className="wd-username form-control mb-2" />
        <input defaultValue="123" className="wd-id form-control mb-2" />
        <input defaultValue="Alice" className="wd-firstname form-control mb-2" />
        <input defaultValue="Wonderland" className="wd-lastname form-control mb-2" />
        <input defaultValue="2000-01-01" type="date" className="wd-birthday form-control mb-2" />
        <input defaultValue="alice@wonderland.com" type="email" className="wd-email form-control mb-2" />
        <input defaultValue="User" className="wd-role form-control mb-4" />
        <button className="btn btn-danger w-100">Signout</button>
      </div>
    </div>
  );
}
