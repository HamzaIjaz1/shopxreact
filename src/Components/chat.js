import React, { Component } from "react";
import { Media, Row, Col, Container } from "reactstrap";
class Chat extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Row>
          <Col xs="3">
            <div className="conversation">
              <Media>
                <Media left href="#">
                  <Media object data-src="" alt="profile Picture" />
                </Media>
                <Media body>
                  <Media heading>Username</Media>
                  This is some text
                </Media>
              </Media>
              <hr />
              
              <Media>
                <Media left href="#">
                  <Media object data-src="" alt="profile Picture" />
                </Media>
                <Media body>
                  <Media heading>Username</Media>
                  This is some text
                </Media>
              </Media>
            </div>
          </Col>
          <Col xs="9">
            <div id="chat">
              <div left className="msg-right">Hi</div>
              <div right className="msg-left">Hello</div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Chat;
