import React, { Component } from 'react';
import Shop from "./shop";
import Posts from "./Posts";
import Chat from "./chat";
import Reviews from "./Reviews";
import ViewProduct from "./ViewProducts";
import AddProduct from "./addProduct";
import FAQs from "./faq";
import { BrowserRouter, Route } from "react-router-dom";
import PaneStrap from "./panestrap";
import "./Posts.css";
import "./addProduct.css";
import "./chatstyle.css";


class PaneRoutes extends Component {
    // constructor(props){

    // }
    state = {  }
    // componentWillMount()
    // {
    //     // api calls
    // }    
    // callbackmethod(data){
    //     this.setState({usernames: data.username});
    // }
    render() { 
        return (  
            <BrowserRouter>
            <div>
                <PaneStrap />
                
              <Route path="/Shop" component={Shop} />
              <Route path="/Messages" component={Chat} />
              <Route path="/Posts" component={Posts} />
              <Route path="/ViewProduct" component={ViewProduct} />
              <Route path="/Add" component={AddProduct} />
              <Route path="/faqs" component={FAQs} />
              <Route path="/Reviews" component={Reviews} />
              <Route path="/Promotions" component={Posts} />
            </div>
          </BrowserRouter>
        );
    }
}
 
export default PaneRoutes;
