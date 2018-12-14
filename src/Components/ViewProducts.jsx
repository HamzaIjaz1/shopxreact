import React, { Component } from "react";
import "./viewProduct.css";
import "bootstrap/dist/css/bootstrap.css";

class ViewProducts extends Component {
  state = {};

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
            <tr>
              <a href="?id=1">
                <td>1</td>
                <td>Sweatshirt</td>
                <td>Clothing</td>
                <td>50</td>
                <td>Public</td>
                <td>500 - 700</td>
                <td style={this.green}>2 Hours Ago</td>
              </a>
            </tr>
            <tr>
              <a href="?id=2">
                <td>2</td>
                <td>Poclet Square</td>
                <td>Clothing</td>
                <td>14</td>
                <td>Public</td>
                <td>100</td>
                <td style={this.green}>5 Hours Ago</td>
              </a>
            </tr>
            <tr>
              <a href="?id=3">
                <td>3</td>
                <td>Cufflinks</td>
                <td>Clothing</td>
                <td>53</td>
                <td>Public</td>
                <td>500 - 3000</td>
                <td style={this.red}>10 days Ago</td>
              </a>
            </tr>
            <tr>
              <a href="?id=4">
                <td>4</td>
                <td>Tie</td>
                <td>Clothing</td>
                <td>130</td>
                <td>Public</td>
                <td>200 - 650</td>
                <td style={this.green}>12 Hours Ago</td>
              </a>
            </tr>
            <tr>
              <a href="?id=5">
                <td>5</td>
                <td>Socks</td>
                <td>Clothing</td>
                <td>550</td>
                <td>Public</td>
                <td>100 - 250</td>
                <td style={this.green}>2 days Ago</td>
              </a>
            </tr>
            <tr>
              <a href="?id=6">
                <td>6</td>
                <td>T-Shirt - 100% Cotton</td>
                <td>Clothing</td>
                <td>150</td>
                <td>Public</td>
                <td>850</td>
                <td style={this.green}>2 days Ago</td>
              </a>
            </tr>
            <tr>
              <a href="?id=7">
                <td>7</td>
                <td>Shirt</td>
                <td>Clothing</td>
                <td>50</td>
                <td>Public</td>
                <td>1500 - 3500</td>
                <td style={this.red}>12 days Ago</td>
              </a>
            </tr>
            <tr>
              <a href="?id=8">
                <td>1</td>
                <td>Sweat Shirt</td>
                <td>Clothing</td>
                <td>50</td>
                <td>Public</td>
                <td>500 - 700</td>
                <td style={this.green}>2 Hours Ago</td>
              </a>
            </tr>
            <tr>
              <a href="?id=9">
                <td>9</td>
                <td>Denim Jeans</td>
                <td>Clothing</td>
                <td>50</td>
                <td>Public</td>
                <td>2999</td>
                <td style={this.green}>12 minutes ago</td>
              </a>
            </tr>
            <tr>
              <a href="?id=10">
                <td>10</td>
                <td>Casual Shirt</td>
                <td>Clothing</td>
                <td>50</td>
                <td>Hidden</td>
                <td>1200 - 2500</td>
                <td style={this.red}>2 months Ago</td>
              </a>
            </tr>
            <tr>
              <a href="?id=11">
                <td>11</td>
                <td>Cufflinks</td>
                <td>Clothing</td>
                <td>53</td>
                <td>Public</td>
                <td>500 - 3000</td>
                <td style={this.red}>10 days Ago</td>
              </a>
            </tr>
            <tr>
              <a href="?id=12">
                <td>12</td>
                <td>Tie</td>
                <td>Clothing</td>
                <td>130</td>
                <td>Public</td>
                <td>200 - 650</td>
                <td style={this.green}>12 Hours Ago</td>
              </a>
            </tr>
            <tr>
              <a href="?id=13">
                <td>13</td>
                <td>Socks</td>
                <td>Clothing</td>
                <td>550</td>
                <td>Public</td>
                <td>100 - 250</td>
                <td style={this.green}>2 days Ago</td>
              </a>
            </tr>
            <tr>
              <a href="?id=14">
                <td>14</td>
                <td>T-Shirt - 100% Cotton</td>
                <td>Clothing</td>
                <td>150</td>
                <td>Public</td>
                <td>850</td>
                <td style={this.green}>2 days Ago</td>
              </a>
            </tr>
            <tr>
              <a href="?id=15">
                <td>15</td>
                <td>Shirt</td>
                <td>Clothing</td>
                <td>50</td>
                <td>Public</td>
                <td>1500 - 3500</td>
                <td style={this.red}>12 days Ago</td>
              </a>
            </tr>
            <tr>
              <a href="?id=16">
                <td>16</td>
                <td>Sweat Shirt</td>
                <td>Clothing</td>
                <td>50</td>
                <td>Public</td>
                <td>500 - 700</td>
                <td style={this.green}>2 Hours Ago</td>
              </a>
            </tr>
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
