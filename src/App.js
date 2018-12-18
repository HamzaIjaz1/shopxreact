import React, { Component } from "react";
import AuthRoutes from "./Components/authroutes";
import "./Components/pane.css";
import "./App.css";
import back from "./Images/background2.jpg";

class App extends Component {
  render() {
    return (
      <React.Fragment style={{backgroundImage: 'url('+back+')', height:"100%",margin:0}}>
        <AuthRoutes/>  
      </React.Fragment>
    );  
  }
}
export default App;
