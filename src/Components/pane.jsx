import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import logo from "../Images/logo.PNG";
import { NavLink } from "react-router-dom";

library.add(fas);
class pane extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="sidenav">
          <NavLink to="/">
            <img className="logo" src={logo} alt="ShopX" />
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
          <NavLink to="/Promotions">
            <FontAwesomeIcon className="AwesomeIcon" icon="tags" />
            Promotions
          </NavLink>
          <NavLink to="/faqs">
            <FontAwesomeIcon className="AwesomeIcon" icon="question-circle" />
            FAQ's
          </NavLink>
        </div>

        <button className="btn logout">
          <FontAwesomeIcon icon="sign-out-alt" />
          Logout
        </button>
      </React.Fragment>
    );
  }
}

export default pane;
