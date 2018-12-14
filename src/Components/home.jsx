import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import homeImg from "../Images/home.jpg";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row" style="background-image: {homeImg}">
          <div className="col-md-8" />
          <div className="col-md-4">
            <div class="card">
              <div class="card-header">Header</div>
              <div class="card-body">Content</div>
              <div class="card-footer">Footer</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">a</div>
          <div className="col-md-6">a</div>
        </div>
      </div>
    );
  }
}

export default Home;
