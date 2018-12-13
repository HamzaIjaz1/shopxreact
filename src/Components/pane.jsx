import React, { Component } from "react";
import logo from "../Images/logo.PNG";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
// import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas);
class pane extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar flex-lg-column navbar-expand-lg rounded">
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#panebar"
            aria-controls="panebar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="sidenav flex-lg-column navbar-collapse align-items-start  collapse"
            id="panebar"
          >
            <NavLink to="/">
              <img className="logo" src={logo} alt="ShopX" />
            </NavLink>

            <NavLink
              to="/add_product"
              style={{ color: "#fff" }}
              className="addBtn text-center m-3 ml-4 pl-4 pr-4 pt-1 pb-1"
            >
              Add Product
            </NavLink>

            <NavLink to="/Shop">
              <FontAwesomeIcon className="AwesomeIcon" icon="store-alt" />
              Shop
            </NavLink>
            <NavLink to="/Product">
              <FontAwesomeIcon className="AwesomeIcon" icon="shopping-basket" />
              Products
            </NavLink>
            <NavLink to="/Messages">
              <FontAwesomeIcon className="AwesomeIcon" icon="comments" />
              Messages
            </NavLink>
            <NavLink to="/Posts">
              <FontAwesomeIcon className="AwesomeIcon" icon="file-alt" />
              Posts
            </NavLink>
            <NavLink to="/Reviews">
              <FontAwesomeIcon className="AwesomeIcon" icon="star" />
              Reviews
            </NavLink>
            {/* <NavLink to="/Promotions">
              <FontAwesomeIcon className="AwesomeIcon" icon="tags" />
              Promotions
            </NavLink> */}
            <NavLink to="/FAQs">
              <FontAwesomeIcon className="AwesomeIcon" icon="question-circle" />
              FAQ's
            </NavLink>
          </div>
        </nav>

        <button className="btn logout">
          <FontAwesomeIcon icon="sign-out-alt" />
          Logout
        </button>
      </React.Fragment>
    );
  }
}

export default pane;