<<<<<<< HEAD
import React, { Component } from 'react';
import {NavLink,NavNavLink} from "react-router-dom";
class pane extends Component {
    state = {  }
    
    render() { 
        return (    <div className="sidenav">
        <NavLink to="/shop"  id="shopbutton" >
          <i class="fas fa-store-alt" />Shop
        </NavLink>
        <NavLink  to="/addproducts" id="Products">
          <i className="fas fa-shopping-basket" />Products
        </NavLink>
        <NavLink to="/messages" id="Messages">
          <i className="fas fa-comments" />Messages
        </NavLink>
        <NavLink to="/posts" id="Posts">
          <i className="fas fa-file-alt" />Posts
        </NavLink>
        <NavLink to="/Reviews" id="Reviews">
          <i className="fas fa-star" />Reviews
        </NavLink>
        <NavLink to="/viewporducts" id="Promotions">
          <i className="fas fa-tags" />Promotions
        </NavLink>
        <NavLink to="/addproducts" id="FAQS">
          <i className="fas fa-question-circle" />FAQ's
        </NavLink>
      </div>  );
    }

  
=======
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
>>>>>>> 9be9257412e5aacc4c796cbc29596982bfba58a0
}

export default pane;