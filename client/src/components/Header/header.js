import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  //   <div className="container">
  //     <Link className="navbar-brand" to="/">
  //       Navbar
  //     </Link>
  //     <button
  //       className="navbar-toggler"
  //       type="button"
  //       data-toggle="collapse"
  //       data-target="#navbarNavAltMarkup"
  //       aria-controls="navbarNavAltMarkup"
  //       aria-expanded="false"
  //       aria-label="Toggle navigation"
  //     >
  //       <span className="navbar-toggler-icon" />
  //     </button>
  //     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
  //       <div className="navbar-nav">
  //         <Link className="nav-item nav-link " to="/">
  //           Home <span className="sr-only">(current)</span>
  //         </Link>
  //       </div>
  //     </div>
  //   </div>
  // </nav>
  <nav className="nav nav-pills nav-fill">
    <Link className="nav-item nav-link active" to="/">
      Home
    </Link>
    <Link className="nav-item nav-link" to="/error">
      Error Example
    </Link>
    <a
      className="nav-item nav-link"
      target="_blank"
      href="https://github.com/jwill9999/"
    >
      GitHub
    </a>
    <a
      className="nav-item nav-link disabled"
      target="_blank"
      href="http://letuscode.co.uk"
    >
      LetusCode
    </a>
  </nav>
);

export default Header;
