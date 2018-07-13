import React, { Component } from "react";
import logo from "./logo.svg";
import "./Data.css";
import { Route, Link } from "react-router-dom";
import UVIndex from "./components/UV/UVIndex";
import MyCities from "./components/MyCities/MyCities";

class Data extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src="http://www.coresponsibility.com/wp-content/uploads/2016/06/air-pollution_cropped.jpg"
            className="App-logo"
            alt="logo"
          />
          <h1 className="App-title">HEIR POLLUTION</h1>
        </header>
        <nav>
          <Link to={"/UVIndex"} component={UVIndex}>
            UV Index{" "}
          </Link>
          <Link to={"/MyCities"} component={MyCities}>
            My Cities
          </Link>
        </nav>
        <Route path="/UVIndex" component={UVIndex} />
        <Route path="/MyCities" component={MyCities} />
        <body>
          <p className="App-intro">
            WELCOME TO HEIR POLLUTION.WHERE YOU HAVE INHERITED THE PREVIOUS
            GENERATIONS PROBLEMS{" "}
          </p>
        </body>
      </div>
    );
  }
}

export default Data;
