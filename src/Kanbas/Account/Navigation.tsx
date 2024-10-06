import { Link, useLocation } from "react-router-dom";

export default function AccountNavigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div id="wd-account-navigation" className="d-flex flex-column">
      {/* Signin Link */}
      <Link 
        to="/Kanbas/Account/Signin" 
        className={`nav-link mb-2 ${isActive('/Kanbas/Account/Signin') ? 'text-dark fw-bold' : 'text-danger'}`} 
        style={{ fontSize: '1rem', position: "relative", padding: "6px" }}
      >
        {isActive('/Kanbas/Account/Signin') && (
          <span 
            style={{
              position: "absolute", 
              left: "-8px", 
              top: "0", 
              height: "100%", 
              width: "3px", 
              backgroundColor: "black"
            }}
          />
        )}
        Signin
      </Link>

      {/* Signup Link */}
      <Link 
        to="/Kanbas/Account/Signup" 
        className={`nav-link mb-2 ${isActive('/Kanbas/Account/Signup') ? 'text-dark fw-bold' : 'text-danger'}`} 
        style={{ fontSize: '1rem', position: "relative", padding: "6px" }}
      >
        {isActive('/Kanbas/Account/Signup') && (
          <span 
            style={{
              position: "absolute", 
              left: "-8px", 
              top: "0", 
              height: "100%", 
              width: "3px", 
              backgroundColor: "black"
            }}
          />
        )}
        Signup
      </Link>

      {/* Profile Link */}
      <Link 
        to="/Kanbas/Account/Profile" 
        className={`nav-link mb-2 ${isActive('/Kanbas/Account/Profile') ? 'text-dark fw-bold' : 'text-danger'}`} 
        style={{ fontSize: '1rem', position: "relative", padding: "6px" }}
      >
        {isActive('/Kanbas/Account/Profile') && (
          <span 
            style={{
              position: "absolute", 
              left: "-8px", 
              top: "0", 
              height: "100%", 
              width: "3px", 
              backgroundColor: "black" 
            }}
          />
        )}
        Profile
      </Link>
    </div>
  );
}
