import React, { Component } from "react";
import Pane from "../Components/pane";
import "bootstrap/dist/css/bootstrap.css";
import "./Posts.css";

class Posts extends Component {
  state = {};
  render() {
    return (
      <div>
        <Pane />
        <div class="container">
          <div class="text-center">
            <h3>Write a post to interact with your customers!</h3>
          </div>

          <div class="card card-div">
            <div class="card-body">
              <div class="form-group">
                <textarea
                  class="form-control"
                  rows="5"
                  id="comment"
                  placeholder="Write your Post"
                />
                <div class="inputbuttons">
                  <button class="btn-secondary">Add photos</button>
                  <button class="btn-primary" formaction="submit">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="card card-div border-0">
            <div class="card-header card-div">
              <h3>Your Posts</h3>
            </div>

            <div class="card card-div ">
              <div class="card-title" />
              <div class="card-body">
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias autem, consequatur dolore perspiciatis quam rerum sed ut
                  veniam vero. Accusantium dignissimos eaque est, eveniet in
                  quis ratione recusandae sed vero?
                </p>

                <img
                  class="card-img-bottom"
                  src="../Images/img1.jpg"
                  alt="img"
                />

                <div class="date">
                  13/10/2018
                  <div>
                    <a href="#edit" />
                    Edit
                    <a href="#delete" />
                    >Delete
                  </div>
                </div>
              </div>
            </div>

            <div class="card card-div">
              <div class="card-title" />
              <div class="card-body">
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias autem, consequatur dolore perspiciatis quam rerum sed ut
                  veniam vero. Accusantium dignissimos eaque est, eveniet in
                  quis ratione recusandae sed vero?
                </p>

                <img
                  class="card-img-bottom"
                  src="../Images/img2.png"
                  alt="img"
                />

                <div class="date">
                  13/10/2018
                  <div>
                    <a href="#edit">Edit</a>
                    <a href="#delete">Delete</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
