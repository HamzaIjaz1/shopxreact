import React, { Component } from "react";
import AuthRoutes from "./Components/authroutes";
import "./Components/MessagesStyle.css";
import "./Components/Posts.css";
import "./Components/addProduct.css";
import "./App.css";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AuthRoutes />
      </React.Fragment>
    );
  }
}

export default App;
