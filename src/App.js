import React, { Component } from "react";
import Shop from "./Components/shop";
import Posts from "./Components/Posts";
import sMessages from "./Components/Messages";
import Reviews from "./Components/Reviews";
import ViewProduct from "./Components/ViewProducts";
import Register from "./Components/Register";
import Login from "./Components/Login";
import { BrowserRouter, Route } from "react-router-dom";
import Pane from "./Components/pane";
import "./Components/MessagesStyle.css";
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
          <Route path="/Messages" component={sMessages} />
          <Route path="/Posts" component={Posts} />
          <Route path="/Product" component={ViewProduct} />
          <Route path="/faqs" component={Posts} />
          <Route path="/Reviews" component={Reviews} />
          <Route path="/Promotions" component={Posts} />
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
