import React, { Component } from "react";
import img1 from "../Images/image-placeholder.png";
import img2 from "../Images/placeholder-man.png";

import "bootstrap/dist/css/bootstrap.css";

class Reviews extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h2 class="text-center">User Ratings</h2>

        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-2">
                <img src={img2} class="img img-rounded img-fluid" />
                <p class="text-secondary text-center">15 Minutes Ago</p>
              </div>
              <div class="col-md-10">
                <p>
                  <a class="float-left" href="#">
                    <strong>Username</strong>
                  </a>
                  <span class="float-right">
                    <i class="text-warning fa fa-star" />
                  </span>
                  <span class="float-right">
                    <i class="text-warning fa fa-star" />
                  </span>
                  <span class="float-right">
                    <i class="text-warning fa fa-star" />
                  </span>
                  <span class="float-right">
                    <i class="text-warning fa fa-star" />
                  </span>
                </p>
                <div class="clearfix" />
                <p>
                  Lorem Ipsum is simply dummy text of the pr make but also the
                  leap into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages, and more
                  recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-2">
                <img src={img2} class="img img-rounded img-fluid" />
                <p class="text-secondary text-center">15 Minutes Ago</p>
              </div>
              <div class="col-md-10">
                <p>
                  <a class="float-left" href="#">
                    <strong>Username</strong>
                  </a>
                  <span class="float-right">
                    <i class="text-warning fa fa-star" />
                  </span>
                  <span class="float-right">
                    <i class="text-warning fa fa-star" />
                  </span>
                  <span class="float-right">
                    <i class="text-warning fa fa-star" />
                  </span>
                  <span class="float-right">
                    <i class="text-warning fa fa-star" />
                  </span>
                </p>
                <div class="clearfix" />
                <p>
                  Lorem Ipsum is simply dummy text of the pr make but also the
                  leap into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages, and more
                  recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-2">
                <img src={img2} class="img img-rounded img-fluid" />
                <p class="text-secondary text-center">15 Minutes Ago</p>
              </div>
              <div class="col-md-10">
                <p>
                  <a class="float-left" href="#">
                    <strong>Username</strong>
                  </a>
                  <span class="float-right">
                    <i class="text-warning fa fa-star" />
                  </span>
                  <span class="float-right">
                    <i class="text-warning fa fa-star" />
                  </span>
                  <span class="float-right">
                    <i class="text-warning fa fa-star" />
                  </span>
                  <span class="float-right">
                    <i class="text-warning fa fa-star" />
                  </span>
                </p>
                <div class="clearfix" />
                <p>
                  Lorem Ipsum is simply dummy text of the pr make but also the
                  leap into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages, and more
                  recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>

        <br />
        <nav className="mb-5">
          <ul className="pagination">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabindex="-1">
                Previous
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Reviews;
