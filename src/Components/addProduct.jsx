import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/tooltip.js";
import uploadImg from "../Images/upload.png";
import $ from "jquery";

class AddProduct extends Component {
  state = {};

  componentDidMount() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  componentDidUpdate() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  render() {
    return (
      <div className="container">
        <div className="card">
          <h3 className="card-header text-center border-bottom-0">
            Add Product
          </h3>
          <div className="card-body">
            <div className="form-group">
              <div id="titlediv" className="input-group">
                <input
                  id="titleinput"
                  type="text"
                  className="form-control"
                  name="Title"
                  size="4"
                  placeholder="Product Title..."
                />
              </div>
              <textarea
                className="form-control text-body"
                rows="5"
                id="comment"
                placeholder="Write Product Description..."
              />
              <div className="form-group row">
                <select
                  name="category"
                  id="category"
                  className="form-control col-2 "
                  placeholder="Select Category"
                >
                  <option value="Category1">Category1</option>
                  <option value="Category2">Category2</option>
                  <option value="Category3">Category3</option>
                  <option value="Category4">Category4</option>
                </select>

                <div class="input-group w-75" id="price">
                  <div class="input-group-prepend">
                    <div class="input-group-text">Rs</div>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Price"
                    name="Price"
                    className="form-control col-2"
                  />
                </div>
              </div>
              <div id="upload" className="card">
                <div className="card-header">
                  <h3>Images</h3>
                </div>
                <div className="card-body text-center">
                  <div class="image-upload">
                    <label for="file-input">
                      <img
                        src={uploadImg}
                        style={{ cursor: "pointer" }}
                        alt="Upload Image"
                        className="img-fluid w-25"
                        data-toggle="tooltip"
                        title="Click to upload..."
                      />
                    </label>

                    <input id="file-input" type="file" />
                  </div>
                </div>
              </div>
              <input
                type="text"
                placeholder="Enter tags"
                className="form-control"
              />
            </div>
          </div>
          <div className="inputbuttons card-footer border-0 p-3 pl-4 pr-4">
            <div className="row">
              <div className="col-md-4">
                <span className="form-group">
                  <label for="sel1">Visibility:</label>
                  <select
                    className="form-control"
                    id="sel1"
                    style={{
                      display: "inline",
                      width: "unset",
                      margin: "0 1rem"
                    }}
                  >
                    <option>Public</option>
                    <option>Hidden</option>
                  </select>
                </span>
              </div>

              <div className="col-md-8 text-right">
                <button
                  className="btn btn-lg btn-primary"
                  formaction="submit"
                  name="submit"
                  id="submitButton"
                >
                  Publish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddProduct;
