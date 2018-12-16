import React, { Component } from "react";
import img1 from "../Images/image-placeholder.png";
import img2 from "../Images/placeholder-man.png";

import "bootstrap/dist/css/bootstrap.css";

class Reviews extends Component {
  state = {
    Reviews: [
      {
        username: "John",
        time: "12/12/12",
        description: "this is not a good store",
        rating: 2
      },
      {
        username: "John",
        time: "12/12/12",
        description: "this is not a good store",
        rating: 2
      },
      {
        username: "John",
        time: "12/12/12",
        description: "this is not a good store",
        rating: 2
      },
      {
        username: "John",
        time: "12/12/12",
        description: "this is not a good store",
        rating: 2
      },
      {
        username: "John",
        time: "12/12/12",
        description: "this is not a good store",
        rating: 2
      },
      {
        username: "John",
        time: "12/12/12",
        description: "this is not a good store",
        rating: 2
      }
    ]
  };
  render() {
    return (
      <div className="container">
        <h2 class="text-center">User Ratings</h2>
        {this.state.Reviews.map(element => (
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-md-2">
                  <img src={img2} class="img img-rounded img-fluid" />
                  <p class="text-secondary text-center">{element.time}</p>
                </div>
                <div class="col-md-10">
                  <p>
                    <a class="float-left" href="#">
                      <strong>{element.username}</strong>
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
                  <p>{element.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
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
