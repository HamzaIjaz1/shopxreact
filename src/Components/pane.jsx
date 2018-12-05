import React, { Component } from 'react';
import Shop from "./shop";
class pane extends Component {
    state = {  }
    
    render() { 
        return (    <div className="sidenav">
        <a id="temporary"  id="shopbutton" onClick={this.Shop()}>
          <i class="fas fa-store-alt" />Shop
        </a>
        <a  id="Products">
          <i className="fas fa-shopping-basket" />Products
        </a>
        <a  id="Messages">
          <i className="fas fa-comments" />Messages
        </a>
        <a  id="Posts">
          <i className="fas fa-file-alt" />Posts
        </a>
        <a  id="Reviews">
          <i className="fas fa-star" />Reviews
        </a>
        <a  id="Promotions">
          <i className="fas fa-tags" />Promotions
        </a>
        <a  id="FAQS">
          {" "}
          <i className="fas fa-question-circle" />FAQ's
        </a>
      </div>  );
    }

    Shop(){
//<Shop></Shop>
    }
}
 
export default pane;