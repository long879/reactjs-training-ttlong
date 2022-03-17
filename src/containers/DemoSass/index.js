import React, { Component } from "react";

export default class DemoSass extends Component {
  render() {
    return (
      <div className="campus">
        <div className="campus__contact">
          <div> +040 354 658 252</div>
          <div>
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="campus__menu"></div>
        <div className="campus__banner"></div>
      </div>
    );
  }
}
