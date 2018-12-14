import React, { Component } from 'react';
import {NavLink,NavNavLink} from "react-router-dom";
class pane extends Component {
    state = {  }
    
    render() { 
        return (    <div className="sidenav">
        <NavLink to="/shop"  id="shopbutton" >
          <i class="fas fa-store-alt" />Shop
        </NavLink>
        <NavLink  to="/addproducts" id="Products">
          <i className="fas fa-shopping-basket" />Products
        </NavLink>
        <NavLink to="/messages" id="Messages">
          <i className="fas fa-comments" />Messages
        </NavLink>
        <NavLink to="/posts" id="Posts">
          <i className="fas fa-file-alt" />Posts
        </NavLink>
        <NavLink to="/Reviews" id="Reviews">
          <i className="fas fa-star" />Reviews
        </NavLink>
        <NavLink to="/viewporducts" id="Promotions">
          <i className="fas fa-tags" />Promotions
        </NavLink>
        <NavLink to="/addproducts" id="FAQS">
          <i className="fas fa-question-circle" />FAQ's
        </NavLink>
      </div>  );
    }

  
}
 
export default pane;