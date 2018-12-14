import React, { Component } from 'react';
import Login from "./Login";
import Register from "./Register";
import PaneRoutes from "./paneroutes";
import { BrowserRouter, Route, Switch } from "react-router-dom";
class authroutes extends Component {
    state = {  }
    render() { 
        return (  
<React.Fragment>
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/pane" component={PaneRoutes}/>
    </Switch>
    
    </BrowserRouter>
</React.Fragment>
            
        );
    }
}
 
export default authroutes;