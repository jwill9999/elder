import React from "react";
import { Link } from "react-router-dom";
import "./error.css";

const ErrorPage = () => (
  <div id="centerGrid" className="container-fluid text-center ">
    <div className="row">
      <div className="col-md-12 ">
        <div className="error-template">
          <h1>Oops!</h1>
          <h2>404 Not Found</h2>
          <div className="error-details">
            Sorry, an error has occured, Requested page not found!
          </div>
          <div className="error-actions">
            <Link to="/" className="btn btn-primary btn-lg">
              <span className="glyphicon glyphicon-home" />
              Take Me Home{" "}
            </Link>
            <a
              href="https://github.com/jwill9999/elder"
              className="btn btn-default btn-lg"
            >
              <span className="glyphicon glyphicon-envelope" /> View the code
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ErrorPage;
