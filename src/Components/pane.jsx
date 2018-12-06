import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import logo from "../Images/logo.PNG";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Posts from "./Posts";
import Messages from "./Messages";
import Shop from "./shop";

library.add(fas);
class pane extends Component {
  render() {
    return (
      <Router>
        <div className="sidenav">
          <Link to="/">
            <img className="logo" src={logo} alt="ShopX" />
          </Link>
          <Link to="/">
            <FontAwesomeIcon className="AwesomeIcon" icon="store-alt" />
            Shop
          </Link>
          <Link to="/Product">
            <FontAwesomeIcon className="AwesomeIcon" icon="shopping-basket" />
            Products
          </Link>
          <Link to="/Messages">
            <FontAwesomeIcon className="AwesomeIcon" icon="comments" />
            Messages
          </Link>
          <Link to="/Posts">
            <FontAwesomeIcon className="AwesomeIcon" icon="file-alt" />
            Posts
          </Link>
          <Link to="/Reviews">
            <FontAwesomeIcon className="AwesomeIcon" icon="star" />
            Reviews
          </Link>
          <Link to="/Promotions">
            <FontAwesomeIcon className="AwesomeIcon" icon="tags" />
            Promotions
          </Link>
          <Link to="/faqs">
            <FontAwesomeIcon className="AwesomeIcon" icon="question-circle" />
            FAQ's
          </Link>

          <Route exact path="/" Component={Shop} />
          <Route exact path="/Messages" Component={Messages} />
          <Route exact path="/Posts" Component={Posts} />
          <Route exact path="/Products" Component={Posts} />
          <Route exact path="/faqs" Component={Posts} />
          <Route exact path="/Reviews" Component={Posts} />
          <Route exact path="/Promotions" Component={Posts} />
        </div>
      </Router>
    );
  }
}

export default pane;
