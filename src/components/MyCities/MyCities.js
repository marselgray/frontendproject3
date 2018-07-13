import React, { Component } from "react";
import Low from "./Low";
import Moderate from "./Moderate";
import High from "./High";
import VeryHigh from "./VeryHigh";
import Extreme from "./Extreme";

class MyCities extends Component {
  render() {
    return (
      <div>
        <h1>My Cities</h1>
        <div className="citybox">
          <p className="city">City 1</p>
          <div>
            <p>
              {/* {(() => {
                if (item.value > 2) return <span className="low">One</span>;
                if (item.value >= 3 && item.value <= 5) return <span>Two</span>;
                if (item.value >= 6 && item.value <= 7)
                  return <span>Three</span>;
                if (item.value >= 8 && item.value <= 10)
                  return <span>Four</span>;
                if (item.value >= 11) return <span>Five</span>;
                else noUV;
                return <span>Nothing</span>;
              })()} */}
            </p>
            <p>UV Index</p>
            <p>Air Pollution</p>
          </div>
        </div>
        <div className="citybox">
          <p className="city">City 2</p>
          <div>
            <p>UV Index</p>
            <p>Air Pollution</p>
          </div>
        </div>
        <div className="citybox">
          <p className="city">City 3</p>
          <div>
            <p>UV Index</p>
            <p>Air Pollution</p>
          </div>
        </div>
        <div className="citybox">
          <p className="city">City 4</p>
          <div>
            <p>UV Index</p>
            <p>Air Pollution</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MyCities;
