import React, { Component } from "react";
import {
  Nav,
  NavbarBrand,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  // DropdownItem,
  // NavbarToggler,
  Collapse,
  Button
} from "reactstrap";
// import {AppAsideToggler} from "@coreui/coreui";
import { NavLink } from "react-router-dom";
import hamicon from "../Images/hicon.png";
import logo from "../Images/logo.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import back from "../Images/paneback2.jpg";

class PaneStrap extends Component {
  state = {
    collapsed: false
  };
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <img src={hamicon} onClick={this.toggleNavbar} alt="image" id="ham" />
        <div>
          <Nav
            sm="4"
            id="panebar"
            className="sidenav"
            vertical
            flex-lg-column
            navbar-collapse
            align-items-start
            collapse
            mr-auto
            // style={{background:"red"}}
          >
            <Collapse isOpen={!this.state.collapsed} navbar-toggleable-md>
              <NavbarBrand href="/Shop">
                <img className="logo" src={logo} alt="ShopX" />
              </NavbarBrand>
              <NavLink to="/Shop">
                <NavItem>
                  {" "}
                   
                    <FontAwesomeIcon className="AwesomeIcon" icon="store-alt" />
                    Shop
                    
                </NavItem>
              </NavLink>
              <NavItem>
                <UncontrolledDropdown>
                   
                    <DropdownToggle nav caret>
                      <FontAwesomeIcon
                        className="AwesomeIcon"
                        icon="shopping-basket"
                      />
                      Products
                    </DropdownToggle>
                    

                  <DropdownMenu>
                    <NavItem>
                      <NavLink to="/Add">Add Products</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="/ViewProduct">View Products</NavLink>
                    </NavItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>
              <NavLink to="/Messages">
                <NavItem>
                   
                    <FontAwesomeIcon className="AwesomeIcon" icon="comments" />
                    Messages
                    
                </NavItem>
              </NavLink>

              <NavLink to="/Posts">
                <NavItem>
                   
                    <FontAwesomeIcon className="AwesomeIcon" icon="file-alt" />
                    Posts
                    
                </NavItem>
              </NavLink>

              <NavLink to="/Reviews">
                <NavItem>
                   
                    <FontAwesomeIcon className="AwesomeIcon" icon="star" />
                    Review
                    
                </NavItem>
              </NavLink>
              {/* <NavItem to="/Promotions">
                    <FontAwesomeIcon className="AwesomeIcon" icon="tags" />
                    Promotions
                  </NavItem> */}
              <NavLink to="/FAQs">
                <NavItem>
                   
                    <FontAwesomeIcon
                      className="AwesomeIcon"
                      icon="question-circle"
                    />
                    FAQ's
                    
                </NavItem>
              </NavLink>

              <NavLink to="/logout">
                <NavItem>
                   
                    <FontAwesomeIcon icon="sign-out-alt" />
                    Logout
                    
                </NavItem>
              </NavLink>
            </Collapse>
          </Nav>
        </div>
      </div>
    );
  }
}

export default PaneStrap;
