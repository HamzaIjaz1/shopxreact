import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import logo from "../Images/logo.PNG";
import { Link } from "react-router-dom";

library.add(fas);
class pane extends Component {
  render() {
    return (
      <div className="sidenav">
        <Link to="/Posts">
          <img className="logo" src={logo} alt="ShopX" />
        </Link>
        <a href="../" onClick={(this.state = { page: "posts" })}>
          <FontAwesomeIcon className="AwesomeIcon" icon="store-alt" />
          Shop
        </a>
        <a href="./addProduct">
          <FontAwesomeIcon className="AwesomeIcon" icon="shopping-basket" />
          Products
        </a>
        <a href="./Messages">
          <FontAwesomeIcon className="AwesomeIcon" icon="comments" />
          Messages
        </a>
        <a href="./Posts">
          <FontAwesomeIcon className="AwesomeIcon" icon="file-alt" />
          Posts
        </a>
        <a href="./Reviews">
          <FontAwesomeIcon className="AwesomeIcon" icon="star" />
          Reviews
        </a>
        <a href="./Promotions">
          <FontAwesomeIcon className="AwesomeIcon" icon="tags" />
          Promotions
        </a>
        <a href="./faqs">
          <FontAwesomeIcon className="AwesomeIcon" icon="question-circle" />
          FAQ's
        </a>
      </div>
    );
  }
}

export default pane;
