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
        <BrowserRouter>
          <div>
            <Pane />
            <Route exact path="/" component={Shop} />
            <Route path="/add_product" component={AddProduct} />
            <Route path="/Shop" component={Shop} />
            <Route path="/Messages" component={sMessages} />
            <Route path="/Posts" component={Posts} />
            <Route path="/Product" component={ViewProduct} />
            <Route path="/FAQs" component={FAQ} />
            <Route path="/Reviews" component={Reviews} />
            <Route path="/Promotions" component={Posts} />
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
