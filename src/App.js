import React, { Component } from "react";
import AuthRoutes from "./Components/authroutes";
import "./Components/pane.css";
import "./App.css";
import "./Components/chatstyle.css";
import Chat from './Components/chat';
import Register from "./Components/Register";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <AuthRoutes/>   */}
        {/* <Chat></Chat> */}
<Register/>
      </React.Fragment>
    );  
  }
}
export default App;
