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
            style={{
              backgroundImage: "url(" + back + ")",
              height: "100%",
              margin: 0
            }}
          >
            <Collapse isOpen={!this.state.collapsed} navbar-toggleable-md>
              <NavbarBrand href="/Shop">
                <img className="logo" src={logo} alt="ShopX" />
              </NavbarBrand>
              <NavLink to="/Shop">
                <NavItem>
                  {" "}
                  <h2>
                    <FontAwesomeIcon className="AwesomeIcon" icon="store-alt" />
                    Shop
                  </h2>
                </NavItem>
              </NavLink>
              <NavItem>
                <UncontrolledDropdown>
                  <h2>
                    <DropdownToggle nav caret>
                      <FontAwesomeIcon
                        className="AwesomeIcon"
                        icon="shopping-basket"
                      />
                      Products
                    </DropdownToggle>
                  </h2>

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
                  <h2>
                    <FontAwesomeIcon className="AwesomeIcon" icon="comments" />
                    Messages
                  </h2>
                </NavItem>
              </NavLink>

              <NavLink to="/Posts">
                <NavItem>
                  <h2>
                    <FontAwesomeIcon className="AwesomeIcon" icon="file-alt" />
                    Posts
                  </h2>
                </NavItem>
              </NavLink>

              <NavLink to="/Reviews">
                <NavItem>
                  <h2>
                    <FontAwesomeIcon className="AwesomeIcon" icon="star" />
                    Review
                  </h2>
                </NavItem>
              </NavLink>
              {/* <NavItem to="/Promotions">
                    <FontAwesomeIcon className="AwesomeIcon" icon="tags" />
                    Promotions
                  </NavItem> */}
              <NavLink to="/FAQs">
                <NavItem>
                  <h2>
                    <FontAwesomeIcon
                      className="AwesomeIcon"
                      icon="question-circle"
                    />
                    FAQ's
                  </h2>
                </NavItem>
              </NavLink>

              <NavLink to="/logout">
                <NavItem>
                  <h2>
                    <FontAwesomeIcon icon="sign-out-alt" />
                    Logout
                  </h2>
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
