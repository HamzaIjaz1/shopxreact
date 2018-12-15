import React, { Component } from 'react';
import Shop from "./shop";
import Posts from "./Posts";
import sMessages from "./Messages";
import Reviews from "./Reviews";
import ViewProduct from "./ViewProducts";
import AddProduct from "./addProduct";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PaneStrap from "./panestrap";
import "./MessagesStyle.css";
import "./Posts.css";
import "./addProduct.css";

class PaneRoutes extends Component {
    state = {  }
    render() { 
        return (  
            <BrowserRouter>
            <div>
                <PaneStrap/>
                {/* <Route path="/pane" component={Pane}/> */}
              <Route path="/Shop" component={Shop} />
              <Route path="/Messages" component={sMessages} />
              <Route path="/Posts" component={Posts} />
              <Route path="/ViewProduct" component={ViewProduct} />
              <Route path="/Add" component={AddProduct} />
              <Route path="/faqs" component={Posts} />
              <Route path="/Reviews" component={Reviews} />
              <Route path="/Promotions" component={Posts} />
            </div>
          </BrowserRouter>
        );
    }
}
 
export default PaneRoutes;