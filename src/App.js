import React, { Component } from "react";
import AuthRoutes from "./Components/authroutes";
import "./Components/pane.css";
import "./App.css";
import Chat from './Components/chat';
import Register from "./Components/Register";
import Shop from "./Components/shop";
import {BrowserRouter} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AuthRoutes/>  
      </React.Fragment>
    );  
  }
}
export default App;
