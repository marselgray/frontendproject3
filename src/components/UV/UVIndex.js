import React, { Component } from "react";
import { CLIENT_URL } from "./uvapi";
import axios from "axios";

class UVIndex extends Component {
  constructor() {
    super();
    this.state = {
      uvNum: [],
      currentIndex: 0
    };
  }
  componentDidMount() {
    axios
      .get(CLIENT_URL, {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      })
      .then(res => {
        console.log(res.data);
        this.setState({ uvNum: res.data });
      });
  }
  render() {
    if (this.state.uvNum.length === 0) {
      console.log(this.state.uvNum);
      return <p>loading...</p>;
    }
    let currentUV = this.state.uvNum;
    let list = this.state.uvNum.map(item => {
      return (
        <div className="container">
          <div className="uv" key={item.value}>
            <p className="currentuv">
              UV Index:{" "}
              {(() => {
                if (item.value <= 2.9)
                  return <p className="low">{item.value}</p>;
                if (item.value >= 3 && item.value <= 5.9)
                  return <p className="moderate">{item.value}</p>;
                if (item.value >= 6 && item.value <= 7.9)
                  return <p className="high">{item.value}</p>;
                if (item.value >= 8 && item.value <= 10.9)
                  return <p className="veryhigh">{item.value}</p>;
                if (item.value >= 11)
                  return <p className="extreme">{item.value}</p>;
                else item.value === 0;
                return <span>You Should Probably Go Inside</span>;
              })()}
              {/* {//Check if flag exists
              item.value <= 2 ? (
                <p className="low">{item.value}</p>
              ) : (
                <p> No UV Index </p>
              )} */}
            </p>
          </div>
        </div>
      );
    });
    return <div>{list}</div>;
  }
}

export default UVIndex;
