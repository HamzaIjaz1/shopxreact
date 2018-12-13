import React, { Component } from 'react';
import Shop from "./shop";
import Posts from "./Posts";
import sMessages from "./Messages";
import Reviews from "./Reviews";
import ViewProduct from "./ViewProducts";
import Register from "./Register";
import Login from "./Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Pane from "./pane";
import "./MessagesStyle.css";
import "./Posts.css";
import "./addProduct.css";

class PaneRoutes extends Component {
    state = {  }
    render() { 
        return (  
            <BrowserRouter>
            <div>
                <Pane/>
                {/* <Route path="/pane" component={Pane}/> */}
              <Route path="/Shop" component={Shop} />
              <Route path="/Messages" component={sMessages} />
              <Route path="/Posts" component={Posts} />
              <Route path="/Product" component={ViewProduct} />
              <Route path="/faqs" component={Posts} />
              <Route path="/Reviews" component={Reviews} />
              <Route path="/Promotions" component={Posts} />
            </div>
          </BrowserRouter>
        );
    }
}
 
export default PaneRoutes;