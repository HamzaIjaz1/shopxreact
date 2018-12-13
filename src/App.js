import React, { Component } from "react";
import Shop from "./Components/shop";
import Posts from "./Components/Posts";
import sMessages from "./Components/Messages";
import Reviews from "./Components/Reviews";
import ViewProduct from "./Components/ViewProducts";
import Register from "./Components/Register";
import Login from "./Components/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Pane from "./Components/pane";
import AuthRoutes from "./Components/authroutes";
import "./Components/MessagesStyle.css";
import "./Components/Posts.css";
import "./Components/addProduct.css";
import "./App.css";
import AddProduct from "./Components/addProduct";
import FAQ from "./Components/faq";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AuthRoutes />
      </React.Fragment>
    );
  }
}

export default App;
