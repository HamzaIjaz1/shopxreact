import React, { Component } from "react";
import Shop from "./Components/shop";
import Posts from "./Components/Posts";

import { BrowserRouter, Route } from "react-router-dom";
import Pane from "./Components/pane";
import Messages from "./Components/Messages";
import "./Components/Posts.css";
import "./Components/addProduct.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Pane />
          <Route exact path="/" component={Shop} />
          <Route exact path="/Shop" component={Shop} />
          <Route path="/Messages" component={Messages} />
          <Route path="/Posts" component={Posts} />
          <Route path="/Products" component={Posts} />
          <Route path="/faqs" component={Posts} />
          <Route path="/Reviews" component={Posts} />
          <Route path="/Promotions" component={Posts} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
