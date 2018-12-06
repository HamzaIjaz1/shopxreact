import React, { Component } from "react";

class AddProduct extends Component {
  state = {};
  render() {
    return (
      <div class="container">
        <div class="card card-div border-0">
          <div class="card-body">
            <div class="form-group">
              <h3 class="card-header">Add Product</h3>
              <div id="titlediv" class="input-group">
                <input
                  id="titleinput"
                  type="text"
                  class="form-control"
                  name="Title"
                  size="4"
                  placeholder="Add Product Title"
                />
              </div>
              <textarea
                class="form-control text-body"
                rows="5"
                id="comment"
                placeholder="Write your Post"
              />
              <div class="form-group row">
                <select
                  name="category"
                  id="category"
                  class="form-control col-2 "
                  placeholder="Select Category"
                >
                  <option value="Category1">Category1</option>
                  <option value="Category2">Category2</option>
                  <option value="Category3">Category3</option>
                  <option value="Category4">Category4</option>
                </select>

                <input
                  type="text"
                  placeholder="Enter Price"
                  name="Price"
                  class="form-control col-2 "
                  id="price"
                />
              </div>
              <div id="upload" class="card">
                <div class="card-header">
                  <h3>Add pictures</h3>
                </div>
                <div class="card-body">
                  <div class="text-center">
                    <a href="#" />>
                    <img
                      src="../Images/image-placeholder.png"
                      class="img-fluid"
                      alt="Upload Image"
                    />
                  </div>

                  <button
                    class="btn btn-secondary"
                    formaction="submit"
                    name="submit"
                    id="submitButton"
                  >
                    Upload
                  </button>
                </div>
              </div>
              <input
                type="text"
                placeholder="Enter tags"
                class="form-control"
              />

              <div class="inputbuttons">
                <button
                  class="btn btn-primary"
                  formaction="submit"
                  name="submit"
                  id="submitButton"
                >
                  Post
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
