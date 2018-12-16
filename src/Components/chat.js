import React, { Component } from "react";
import { Media, Row, Col, Container, InputGroup, Button } from "reactstrap";
class Chat extends Component {
 

 constructor(props){
super(props);
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
    ]
  };


  render() {
    

    return (
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
             <div left className="msg-right">
               {element.msg}
             </div>
             <div right className="msg-left">
               {element.reply}
             </div>
           
           </div>
           ) )}
              <InputGroup>
               <input
                 type="textarea"
                 placeholder="Enter your message"
                 id="newmessage"
               />
               <Button className="btn btn-primary">Send</Button>
             </InputGroup>
           
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Chat;
