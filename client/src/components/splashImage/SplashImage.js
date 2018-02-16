import React from "react";
import { Link } from "react-router-dom";
import "./splashImage.css";

const SplashImage = () => (
  <div id="splashImage" className="container-fluid">
    <h1>Elder React Redux Project</h1>
    <p className="font-italic">
      Click button below to visit the multiple choice questions and answer paper
    </p>
    <div>
      <Link
        to="/questions"
        type="button"
        className="btn btn-primary btn-lg btn-block "
      >
        Go to Elder Questions and Answers
      </Link>
      <Link
        to="/questionss"
        type="button"
        className="btn btn-danger btn-lg btn-block "
      >
        View Error Page
      </Link>
    </div>
  </div>
);

export default SplashImage;
