import React, { Component } from "react";
import Pane from "./Components/pane";
import Shop from "./Components/shop";
import AddProduct from "./Components/addProduct";
import Posts from "./Components/Posts";
import Reviews from "./Components/Reviews";
import ViewProducts from "./Components/ViewProducts";
import "./Components/Posts.css"
import "./Components/addProduct.css"
import "./Components/bootstrap.min.css";
import "./App.css";
import "./Components/pane.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Pane />
        <div class="">
        </div>
      </React.Fragment>
    );
  }
}

export default App;
