import React, { Component } from "react";
import { Media, Row, Col, Container, InputGroup, Card, CardHeader } from "reactstrap";
import placeholder from "../Images/placeholder-man.png"
class Chat extends Component {
  inputreply = "";
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ newreply: event.target.value });
    this.inputreply = event.target.value;
  }

  handleSubmit(event) {
    var str = { msg: this.inputreply, reply: "" };
    this.state.conversation.push(str);
    this.setState({ conversation: this.state.conversation });
    event.preventDefault();
  }

  componentWillMount() {
    //api call
    //
  }

  cllbackmethod() {
    //this.setstate();
    this.setState({ Username: "Umer" });
  }
  state = {
    Username:"Ahmad",
    conversation: [
      { msg: "Message", reply: "Rply" },
      { msg: "one", reply: "two" },
      { msg: "three", reply: "four" },
      { msg: "five", reply: "six" },
      { msg: "seven", reply: "eight" }
    ],
    newreply: ""
  };

  render() {
    return (
      <div xs="6" style={{ maxHeight: "100px" }}>
        <Card id="maincard">
        <CardHeader id="cardheader">
          <h1>
          Customer Messages
          </h1>
        </CardHeader>
          <Row>
            <Col xs="3">
              <div className="conversation border-3px">
                <div className="bar">Messages</div>
               
                <Media>
                  <Media left href="#">
                    <img src={placeholder} alt="profile Picture" id="placeholder"/>
                  </Media>
                  <Media body>
                    <Media heading><a href="#">{this.state.Username}</a></Media>
                    {
                      this.state.conversation[
                        this.state.conversation.length - 1
                      ].msg
                    }
                  </Media>
                </Media>
                <hr />
                
              </div>
            </Col>
            <Col xs="9">
              <div className="bar">{this.state.Username}</div>
              <div id="chat">
                {this.state.conversation.map(element => (
                  <div>
                    {element.msg && (
                      <div left className="msg-right">
                        {element.msg}
                        <div id="datetime">18/12/18 12:30am</div>
                      </div>
                    )}
                    {element.reply && (
                      <div right className="msg-left">
                        {element.reply}
                        <div id="datetime">18/12/18 12:30am</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <form onSubmit={this.handleSubmit}>
                <InputGroup>
                  <input
                    type="textarea"
                    placeholder="Enter your message"
                    id="newmessage"
                    value={this.state.newreply}
                    onChange={this.handleChange}
                    size="100"
                  />
                  <input
                    type="submit"
                    value="submit"
                    className="btn btn-primary"
                  />
                </InputGroup>
              </form>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default Chat;
