import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import back from "../Images/background2.jpg";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Login extends Component {
  state = {
    redirect: false,
    isActive: true
  };

  redirectTo = () => {
    this.setState({ redirect: true });
    this.setState({ isActive: false });
  };

  letsgo = () => {
    if (this.state.redirect) {
      return <Redirect to="/pane" />;
    }
  };

  render() {
    return (
      <div style={{backgroundImage: 'url('+back+')', height:"100%",margin:0}}>      
      <div className="app flex-row align-items-center">
        <Container>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <FontAwesomeIcon icon="user" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          placeholder="Username"
                          autoComplete="username"
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <FontAwesomeIcon icon="lock" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          placeholder="Password"
                          autoComplete="current-password"
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          {this.letsgo()}
                          <Button
                            color="primary"
                            className="px-4"
                            onClick={this.redirectTo}
                          >
                            Login
                          </Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">
                            Forgot password?
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card
                  className="text-white bg-primary py-5 d-md-down-none"
                  style={{ width: "44%" }}
                >
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>
                        Register your shop now attract more customers.
                      </p>
                      <Link to="/register">
                        <Button
                          color="primary"
                          className="mt-3"
                          active
                          tabIndex={-1}
                        >
                          Register Now!
                        </Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
        <br />
          <br />
          <br />
          <br />
          <br /> <br />
          <br />
          <br />
          <br />
          <br /> <br />
          <br />
          <br />
          <br />
          <br />
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
      </div>
      </div>
    );
  }
}

export default Login;
