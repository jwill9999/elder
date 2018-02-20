import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import "./error.css";

class ErrorPage extends Component {
  render() {
    return (
      <div id="centerGrid" className="container-fluid text-center ">
        <div className="row">
          <div className="col-md-12 ">
            <div className="error-template">
              <h1>Oops!</h1>
              <h2>404 Not Found</h2>
              <div className="error-details">
                <ErrorMessage errors={this.props.errors} />
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
                  <span className="glyphicon glyphicon-envelope" /> View the
                  code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state now in errors", state.error);
  return {
    errors: state.error
  };
}

export default connect(mapStateToProps)(ErrorPage);
