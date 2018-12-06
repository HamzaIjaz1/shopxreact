import React, { Component } from "react";
import Shop from "./Components/shop";
import Posts from "./Components/Posts";

import { BrowserRouter } from "react-router-dom";
import Pane from "./Components/pane";
import "./Components/Posts.css";
import "./Components/addProduct.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Shop />
      </BrowserRouter>
    );
  }
}

export default App;
