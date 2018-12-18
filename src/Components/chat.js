import React, { Component } from "react";
import { Media, Row, Col, Container, InputGroup } from "reactstrap";
class Chat extends Component {
 
inputreply="";
 constructor(props){
   super(props);
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(event) {
  this.setState({newreply: event.target.value});
  this.inputreply=event.target.value;
}

handleSubmit(event) {
  var str={msg:this.inputreply,reply:""};
  this.state.conversation.push(str);
  this.setState({conversation:this.state.conversation});
  event.preventDefault();
}


 componentWillMount(){
   //api call
  // 
 }

 cllbackmethod(){
   //this.setstate();
   this.setState({Username:"Umer"});
 }
  state = {
    Username: "Ahmad",
    conversation: [
      {msg:"Message",reply:"Rply"},
      {msg:"one",reply:"two"},
      {msg:"three",reply:"four"},
      {msg:"five",reply:"six"},
      {msg:"seven",reply:"eight"}
    ],
    newreply:""
  };


  render() {

    return (
      <div>
        
      <Container>
        <Row>
          <Col xs="3">
            <div className="conversation">
              <div className="bar">Messages</div>
              <Media>
                <Media left href="#">
                  <Media object data-src="" alt="profile Picture" />
                </Media>
                <Media body>
                  <Media heading>{this.state.Username}</Media>
                  {this.state.conversation[this.state.conversation.length-1].msg}
                </Media>
              </Media>
              <hr />
              <Media>
                <Media left href="#">
                  <Media object data-src="" alt="profile Picture" />
                </Media>
                <Media body>
                  <Media heading>{this.state.Username}</Media>
                  {this.state.conversation[this.state.conversation.length-1].msg}
                </Media>
              </Media>
            </div>
          </Col>
          <Col xs="9">
          <div className="bar">{this.state.Username}</div>
          {this.state.conversation.map(element => (
             <div id="chat">
            {element.msg &&
              <div left className="msg-right">
               {element.msg}
             </div>
             }
             {element.reply &&
              <div right className="msg-left">
               {elemenpm
                nt.reply}
             </div>
             }
             </div>
           ) )}
           <form onSubmit={this.handleSubmit}>
           <InputGroup>
               <input
                 type="textarea"
                 placeholder="Enter your message"
                 id="newmessage"
                 value={this.state.newreply}
                 onChange={this.handleChange}
               />
               <input type="submit" value="submit" className="btn btn-primary"/>
             </InputGroup>
           </form>
             
           
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Chat;
