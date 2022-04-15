import React from "react";
//router
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
        <Link to="/" style={{color:"tomato", textDecoration:"none"}}>
          <h1 className="display-6 fw-bolder">User_Detail</h1>
          </Link>
          <Link to="/add">
            <button className="btn btn-outline-success" type="submit">
              Add User
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
