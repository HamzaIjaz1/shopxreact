import React, { Component } from "react";
import "./viewProduct.css";
import "bootstrap/dist/css/bootstrap.css";

class ViewProducts extends Component {
  counter=0;
  state = {
    products: [
      {
        id:"1",
        Name: "SweatShirt",
        Category: "Clothing",
        Views: "500",
        Visibility: "Public",
        Price: "1200",
        LastUpdated: "1 day ago"
      },
      {
        id:"2",
        Name: "SweatShirt",
        Category: "Clothing",
        Views: "500",
        Visibility: "Public",
        Price: "1200",
        LastUpdated: "3 days ago"
      },
      {
        id:"3",
        Name: "SweatShirt",
        Category: "Clothing",
        Views: "500",
        Visibility: "Public",
        Price: "1200",
        LastUpdated: "1 month ago"
      },
      {
        id:"4",
        Name: "SweatShirt",
        Category: "Clothing",
        Views: "500",
        Visibility: "Public",
        Price: "1200",
        LastUpdated: "5 hours ago"
      },
      {
        id:"5",
        Name: "SweatShirt",
        Category: "Clothing",
        Views: "500",
        Visibility: "Public",
        Price: "1200",
        LastUpdated: "2 days ago"
      },
      {
        id:"6",
        Name: "SweatShirt",
        Category: "Clothing",
        Views: "500",
        Visibility: "Public",
        Price: "1200",
        LastUpdated: "2 months ago"
      }
    ]
  };

  green = { color: "green", fontWeight: "bold" };
  red = { color: "red", fontWeight: "bold" };
  render() {
    return (
      <div
        className="container-fluid"
        style={{ marginLeft: "15%", marginRight: "2%", width: "unset" }}
      >
        <h1 className="text-center">Products Overview</h1>
        <br />
        <span className="form-group">
          <label for="sel1">Visibility:</label>
          <select
            className="form-control"
            id="sel1"
            style={{ display: "inline", width: "unset", margin: "1rem" }}
          >
            <option>All</option>
            <option>Public</option>
            <option>Hidden</option>
          </select>
        </span>
        <span className="form-group">
          <label for="sel2">Category:</label>
          <select
            className="form-control"
            id="sel2"
            style={{ display: "inline", width: "unset", margin: "1rem" }}
          >
            <option>All</option>
            <option>Clothing</option>
            <option>Men's Clothing</option>
            <option>Women's Clothing</option>
          </select>
        </span>

        <span className="input-group d-inline">
          <input
            type="text"
            className="form-control w-25 d-inline "
            placeholder="Search for..."
          />
        </span>
        <div className="myborder">
          <table className="table table-responsive-lg table-bordered rounded">
            <tr>
              <th>Sr. #</th>
              <th style={{ width: "40%" }}>Name</th>
              <th>Category</th>
              <th>Views</th>
              <th>Visibility</th>
              <th>Price (Rs.)</th>
              <th>Last Updated</th>
            </tr>
            {
              this.state.products.map(element=>(
                <tr>
                <a href="?id=1">
                  <td>{element.id}</td>
                  <td>{element.Name}</td>
                  <td>{element.Category}</td>
                  <td>{element.Price}</td>
                  <td>{element.Views}</td>
                  <td>{element.Price}</td>
                  <td style={this.green}>{element.LastUpdated}</td>
                </a>
              </tr>
              ))
            }
           
            
          </table>
        </div>
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

export default ViewProducts;
